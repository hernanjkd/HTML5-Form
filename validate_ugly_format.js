

// Set event listener to the 'send' button, check the form when clicked
document.querySelector("button[type='submit']").addEventListener('click', (e) => checkForm(e) );

function checkForm(e) {

    // Prevent the form from submitting
    e.preventDefault();

    // Select the form and check the entries
    let form_div = document.querySelector('.this-form');

    let error_message = '';




/****** CREDIT CARD ******/
    let cc = form_div.inputCreditCard.value;

    // Can't be empty
    if (cc === '') {
        error_message += '• Credit card field can not be empty.<br>';
        markField('card-alert');
    }
    // Must be 13 or more characters, isNaN equals true if it's not a number
    // HTML maxlength = 16
    else if (cc.length < 13 || isNaN(cc)) {
        error_message += '• Invalid credit card number.<br>';
        markField('card-alert');
    }




/****** CVC ******/
    let cvc = form_div.inputCVC.value;

    // Can't be empty
    if (cvc === '') {
        error_message += '• CVC fields can not be empty.<br>';
        markField('cvc-alert');
    }

    // Make sure CVC is larger than 2, and is a number HTML maxlength = 4
    else if (cvc < 3 || isNaN(cvc)) {
        error_message += '• Invalid CVC number.<br>';
        markField('cvc-alert');
    }




/****** AMOUNT ******/
    let a = form_div.inputAmount.value;

    // Make sure it's a number greater than 0
    if (a <= 0 || isNaN(a)){
        error_message += '• Amount quantity must be larger than 0.<br>';
        markField('amount-alert');
    }




/****** FIRST NAME ******/
    // Check that it's not empty
    if (form_div.inputFirstName.value === '') {
        error_message += `• First name field can not be empty.<br>`;
        markField('firstname-alert');
    }

/****** LAST NAME ******/
    // Check that it's not empty
    if (form_div.inputLastName.value === '') {
        error_message += `• Last name field can not be empty.<br>`;
        markField('lastname-alert');
    }




/****** CITY ******/
    // Check that it's not empty
    if (form_div.inputCity.value === '') {
        error_message += `• City field can not be empty.<br>`;
        markField('city-alert');
    }




/****** STATE CODE ******/
    // Check that a state has been selected
    if (form_div.inputState.value === 'Pick a state') {
        error_message += `• A state must be selected.<br>`;
        markField('state-alert');
    }




/****** ZIP CODE ******/
    let zip = form_div.inputZip.value;

    // Check that it's not empty
    if (zip === '') {
        error_message += `• Zip code field can not be empty.<br>`;
        markField('zip-alert');
    }

    // Check it's 5 characters long
    else if (zip.length !== 5) {
        error_message += '• Invalid zip code.';
        markField('zip-alert');
    }



    // Display the error messages if there is one
    if (error_message !== '') {
        let alert_div = document.querySelector('.alert');
        alert_div.className = 'alert alert-danger m-3';
        alert_div.innerHTML = error_message;
    }
}

function markField(clas) {
    let span = document.querySelector(`.${clas}`);
    span.style.color = 'red';
    span.style.padding = '0 0 0 7px';
    span.innerHTML = '*';
}
