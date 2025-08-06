/*
 * SEWDL Lab Experiment 4: JavaScript Form Validation (Registration System)
 * Project: TimetableBuddy - Student Registration System
 * Author: Sarthak Kulkarni (23101B0019)
 * 
 * Original Validation Requirements (Experiment 4):
 * 1. First Name: Alphabets only, minimum 6 characters
 * 2. Password: Minimum 6 characters
 * 3. Email: Standard pattern name@domain.com
 * 4. Mobile: Exactly 10 digits
 * 5. Last Name and Address: Not empty
 * 
 * Enhanced for Mini Project: Role-based signup with institutional email
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const mobile = document.getElementById('mobile');
    const address = document.getElementById('address');
    const department = document.getElementById('department');
    const roleInputs = document.querySelectorAll('input[name="role"]');

    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    const loadingIndicator = document.getElementById('loadingIndicator');

    const validators = {
        firstName: {
            fn: (value) => /^[A-Za-z]{6,}$/.test(value),
            message: 'First name must contain only alphabets and be at least 6 characters long.'
        },
        lastName: {
            fn: (value) => value.trim() !== '',
            message: 'Last name cannot be empty.'
        },
        email: {
            fn: (value) => /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(value),
            message: 'Email must follow standard pattern: name@domain.com'
        },
        password: {
            fn: (value) => value.length >= 6,
            message: 'Password must be at least 6 characters long.'
        },
        mobile: {
            fn: (value) => /^[0-9]{10}$/.test(value),
            message: 'Mobile number must contain exactly 10 digits.'
        },
        address: {
            fn: (value) => value.trim() !== '',
            message: 'Address cannot be empty.'
        },
        department: {
            fn: (value) => value !== '',
            message: 'Please select a department.'
        },
        role: {
            fn: () => {
                const checked = document.querySelector('input[name="role"]:checked');
                return checked !== null;
            },
            message: 'Please select a role.'
        }
    };

    const showError = (input, message) => {
        const errorDiv = document.getElementById(`${input.id || input.name}Error`);
        if (errorDiv) {
            errorDiv.textContent = message;
        }
        const targetInput = input.id ? input : document.querySelector(`input[name="${input.name}"]`);
        if(targetInput) {
           targetInput.classList.add('invalid');
        }
    };

    const clearError = (input) => {
        const errorDiv = document.getElementById(`${input.id || input.name}Error`);
         if (errorDiv) {
            errorDiv.textContent = '';
        }
        const targetInput = input.id ? input : document.querySelector(`input[name="${input.name}"]`);
        if(targetInput) {
           targetInput.classList.remove('invalid');
        }
    };

    const validateInput = (input) => {
        const validator = validators[input.id || input.name];
        const isValid = validator.fn(input.value);
        if (!isValid) {
            showError(input, validator.message);
            input.setCustomValidity(validator.message);
        } else {
            clearError(input);
            input.setCustomValidity('');
        }
        return isValid;
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isFormValid = true;
        const inputsToValidate = [firstName, lastName, email, password, mobile, address, department];
        
        inputsToValidate.forEach(input => {
            if (!validateInput(input)) {
                isFormValid = false;
            }
        });

        if (!validators.role.fn()) {
            showError({ name: 'role' }, validators.role.message);
            isFormValid = false;
        } else {
            clearError({ name: 'role' });
        }

        if (!form.checkValidity()) {
             const firstInvalid = form.querySelector(':invalid');
             if(firstInvalid) firstInvalid.focus();
             form.reportValidity();
             return;
        }

        if (isFormValid) {
            loadingIndicator.style.display = 'flex';
            setTimeout(() => {
                loadingIndicator.style.display = 'none';
                successModal.style.display = 'flex';
            }, 1500);
        } else {
            const firstInvalid = form.querySelector('.invalid');
            if(firstInvalid) firstInvalid.focus();
        }
    });

    [firstName, lastName, email, password, mobile, address, department].forEach(input => {
        input.addEventListener('input', () => validateInput(input));
    });

    roleInputs.forEach(input => {
        input.addEventListener('change', () => {
             if (validators.role.fn()) {
                clearError({ name: 'role' });
            }
        });
    });

    closeModal.addEventListener('click', () => {
        successModal.style.display = 'none';
        form.reset();
        [firstName, lastName, email, password, mobile, address, department].forEach(input => clearError(input));
        clearError({name: 'role'});
    });
});
