function Validator(formSelector) {

    let formElement = document.querySelector(formSelector);

    function getParent(element, selector) {

        while (element.parentElement) {
            if(element.parentElement.classList[0] == selector) {
                return element.parentElement;
            }
            element = element.parentElement;
        }

    }

    var formRules = {};
    var validatorRules = {
        required: function(value) { 
            if(!value) return 'Thông tin không hợp lệ';
            return value ? undefined : 'Thông tin không hợp lệ';
        },
        matchPassword: function(value) {
            if(!value) return 'Thông tin không hợp lệ';
            let password = formElement.querySelector('input[name="password"]').value;
            return (value == password) ? undefined : 'Mật khẩu không khớp';
        },
        isNumber: function(value) {
            if(!value) return 'Thông tin không hợp lệ';
            if(value == 0) return 'Thông tin không hợp lệ';
            for(let char of value) {
                if(char < '0' || char > '9') return 'Thông tin không hợp lệ';
            }
            return undefined;
        },
        isPhoneNumber: function(value) {
            if(!value) return 'Thông tin không hợp lệ';
            let length = value.length;
            for(let char of value) {
                if(char < '0' || char > '9') return 'Thông tin không hợp lệ';
            }
            if(length > 0) {
                if(value[0] != 0) return 'Thông tin không hợp lệ';
                if(length < 10 || length > 11) return 'Thông tin không hợp lệ';
            }
            return undefined;
        }
    };

    if(formElement) {
        
        let inputs = formElement.querySelectorAll('[rules]');
        
        for(let input of inputs) {

            // formRules[input.name] = input.getAttribute('rules');
            let rules = input.getAttribute('rules').split('|');
            for(let rule of rules) {

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(validatorRules[rule]);
                } else {
                    formRules[input.name] = [validatorRules[rule]];
                }
           }

            //validate

            input.onblur = function(event) {
                handleValidate(event);
                handleCheck();
            }
            input.oninput = handleClearError;
            
        }

        // Func validate
        function errorRule(event) {
            let rules = formRules[event.target.name];
            for (let rule of rules) {
                // console.log(rule);
                if (rule(event.target.value)) {
                    return rule(event.target.value);
                }
            }
            return undefined;
        }

        function handleValidate(event) {
            let errorMessage = errorRule(event);
            if(errorMessage) {
                let formGroup = getParent(event.target, 'auth-form__group');
                
                if(formGroup) {
                    formGroup.querySelector('.auth-form-input').classList.add('auth-form-input__error');
                    let formErrorMessage = formGroup.querySelector('.auth-form-input__error-msg');
                    if(formErrorMessage) {
                        formErrorMessage.innerText = errorMessage;
                    }
                }

            } 
            return !errorMessage;
        }

        function handleClearError(event) {
            let formGroup = getParent(event.target, 'auth-form__group');
            let formGroupInput = formGroup.querySelector('.auth-form-input');
            if(formGroupInput.classList.contains('auth-form-input__error')) {
                formGroupInput.classList.remove('auth-form-input__error');  
                let formErrorMessage = formGroup.querySelector('.auth-form-input__error-msg');
                if(formErrorMessage) {
                    formErrorMessage.innerText = '';
                }
            }


        }


        function handleCheck() {
            let inputs = formElement.querySelectorAll('[rules]');
            for(let input of inputs) {
                let errorMessage = errorRule({ target: input });
                if(!errorMessage) {
                    let formGroup = getParent(input, 'auth-form__group');
                    if(input.classList.contains('auth-form-input__error')) {
                        input.classList.remove('auth-form-input__error');
                        let formErrorMessage = formGroup.querySelector('.auth-form-input__error-msg');
                        if(formErrorMessage) {
                            formErrorMessage.innerText = '';
                        }
                    }
                } else if(input.name == "confirm-password" && input.value) {
                    let formGroup = getParent(input, 'auth-form__group');
                
                    if(formGroup) {
                        formGroup.querySelector('.auth-form-input').classList.add('auth-form-input__error');
                        let formErrorMessage = formGroup.querySelector('.auth-form-input__error-msg');
                        if(formErrorMessage) {
                            formErrorMessage.innerText = errorMessage;
                        }
                    }
                }
            }
        }

        if(formElement.querySelector('.submit')) {
            formElement.querySelector('.submit').onclick = function (event) {
                let inputs = formElement.querySelectorAll('[rules]');
                let isValid = true;
                for(let input of inputs) {
                    if(!handleValidate({ target: input })) {
                        isValid = false;
                    }
                }
                if(isValid) {
                    for(let input of inputs) {
                        console.log(`${input.name}: ${input.value}`);
                    }
                } else event.preventDefault();
            }
        }


        if(formElement.querySelector('.submitOrder')) { 
            formElement.querySelector('.submitOrder').onclick = function () {
                //event.preventDefault();
                let inputs = formElement.querySelectorAll('[rules]');
                let isValid = true; 
                for(let input of inputs) {
                    if(!handleValidate({ target: input })) {
                        isValid = false;
                    }
                }
                if(isValid) {
                    for(let input of inputs) {
                        console.log(`${input.name}: ${input.value}`);
                        input.value = '';
                    }
                    let success = document.querySelector('.auth-form__success');
                    if(!success) {
                        let successNotify = document.querySelector('.auth-form__success-notify');
                        successNotify.innerHTML += `
                            <span class="auth-form__success">Bạn đã đặt hàng thành công </span>
                        `;
                    }
                } else {
                    let success = document.querySelector('.auth-form__success');
                    if(success) success.remove();
                }
            }
        }

    }
}