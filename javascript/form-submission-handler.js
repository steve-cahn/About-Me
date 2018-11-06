(function () {

    var topSection = document.getElementsByTagName("header")[0];
    var contactFormInputs = document.querySelectorAll(".contact-form-text");
    var honeypot = document.getElementById("honeypot");

    inputHandler();



    function inputHandler() {
        // Add event for when the user has a keyup event
        // If there's no text in the input, remove the
        // class name of "contact-form-has-text".
        // Else, add that class
        // That class is styled by the CSS positioning
        // the label for the input

        for (var i = 0; i < contactFormInputs.length; i++) {
            var currentInput = contactFormInputs[i];

            currentInput.addEventListener("keyup", function (e) {
                if (this.value.length > 0) this.classList.add("contact-form-has-text");
                else this.classList.remove("contact-form-has-text");
            });

            currentInput.addEventListener("focus", function (e) {
                this.parentElement.classList.remove("dis-error-msg", "dis-add-info-error-msg", "dis-invalid-email-msg");
            });
        }
    }





    // get all data in form and return object
    function getFormData(form) {
        var elements = form.elements;

        var fields = Object.keys(elements).filter(function (k) {
            return (elements[k].name !== "honeypot");
        }).map(function (k) {
            if (elements[k].name !== undefined) {
                return elements[k].name;
                // special case for Edge's html collection
            } else if (elements[k].length > 0) {
                return elements[k].item(0).name;
            }
        }).filter(function (item, pos, self) {
            return self.indexOf(item) == pos && item;
        });


        var formData = {};
        fields.forEach(function (name) {
            var element = elements[name];

            // singular form elements just have one value
            formData[name] = element.value;
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        return formData;
    }

    function handleFormSubmit(event) {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below
        var form = event.target;
        var data = getFormData(form);         // get the values submitted in the form
        var msgShown = false;


        if (validateInputs(form.elements, "contact-form-text") || honeypot.value) return;

        setTimeout(function () {
            if (!msgShown) msgHandler(false);
        }, 5000);

        topSection.scrollIntoView({
            block: "start",
            behavior: 'instant'
        });

        contactFormWrapper.classList.add("hide");
        submittedWrapper.classList.add("show");




        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                msgHandler(xhr.status == 200);
                msgShown = true;
            }
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');

        xhr.send(encoded);
    }


    function loaded() {
        // bind to the submit event of our form
        var forms = document.querySelectorAll("form.gform");
        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", handleFormSubmit, false);
        }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);


    function validateInputs(elements, classNameToValidate) {
        var inputError = false;

        for (var i = 0; i < elements.length; i++) {
            var currentElement = elements[i];
            if (hasClass(currentElement, classNameToValidate)) {
                if (currentElement.length === 0 || !currentElement.value.trim()) {
                    currentElement.parentElement.classList.add("dis-error-msg", "dis-add-info-error-msg");
                    inputError = true;
                } else if (currentElement.name === "email" && !validEmail(currentElement.value)) {
                    currentElement.parentElement.classList.add("dis-error-msg", "dis-invalid-email-msg");
                    inputError = true;
                }
            }
        }

        return inputError;
    }


    function msgHandler(sent) {
        submittedWrapper.classList.add(sent ? "success" : "failed");
        submittedLoader.textContent = (sent ? "✔" : "!");
        submittedMsg.textContent = "Message " + (sent ? "Sent" : "Failed") + "!";
        setTimeout(function () {
            closePopOutContact();
        }, 1000);
    }





    function hasClass(target, className) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
    }

    function validEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
})();