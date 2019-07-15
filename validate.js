

// Set event listener to the 'send' button, check the form when clicked
document.querySelector("button[type='submit']").addEventListener('click', (e) => checkForm(e) );

function checkForm(e) {

    // Prevent the form from submitting
    e.preventDefault();

    // Select the form and check the entries
    let form_div = document.querySelector('.this-form');


    // Set invalid array to display message.. when empty do not display message
    let invalid = [];


/****** CREDIT CARD ******/
    let cc = form_div.inputCreditCard.value;

    // Can't be empty
    if (cc === '') {
        markField('card-alert','Cannot be empty');
        invalid.push(true);
    }

    // Must be 13 or more characters, isNaN equals true if it's not a number
    // HTML maxlength = 16
    else if (cc.length < 13 || isNaN(cc)) {
        markField('card-alert','Invalid credit card number');
        invalid.push(true);
    }

    // Unmark it if it's fixed
    else
        markField('card-alert', invalid);




/****** CVC ******/
    let cvc = form_div.inputCVC.value;

    // Can't be empty
    if (cvc === '') {
        markField('cvc-alert','Cannot be empty');
        invalid.push(true);
    }

    // Make sure CVC is larger than 2, and is a number HTML maxlength = 4
    else if (cvc < 3 || isNaN(cvc)) {
        markField('cvc-alert','Invalid CVC number');
        invalid.push(true);
    }

    // Unmark it if it's fixed
    else
        markField('cvc-alert', invalid);


/****** AMOUNT ******/
    let a = form_div.inputAmount.value;

    // Make sure it's a number greater than 0
    if (a <= 0 || isNaN(a)) {
        markField('amount-alert','Amount quantity must be larger than 0');
        invalid.push(true);
    }

    // Unmark it if it's fixed
    else
        markField('amount-alert', invalid);




/****** FIRST NAME ******/
    // Check that it's not empty
    if (form_div.inputFirstName.value === '') {
        markField('firstname-alert','Cannot be empty');
        invalid.push(true);
    }

    // Unmark it if it's fixed
    else
        markField('firstname-alert', invalid);




/****** LAST NAME ******/
    // Check that it's not empty
    if (form_div.inputLastName.value === '') {
        markField('lastname-alert','Cannot be empty');
        invalid.push(true);
    }

    // Unmark it if it's fixed
    else
        markField('lastname-alert', invalid);




/****** CITY ******/
    // Check that it's not empty
    if (form_div.inputCity.value === '') {
        markField('city-alert','Cannot be empty');
        invalid.push(true);
    }

    // Unmark it if it's fixed
    else
        markField('city-alert', invalid);




/****** STATE CODE ******/
    // Check that a state has been selected
    if (form_div.inputState.value === 'Pick a state') {
        markField('state-alert','A state must be selected');
        invalid.push(true);
    }

    // Unmark it if it's fixed
    else
        markField('state-alert', invalid);




/****** ZIP CODE ******/
    let zip = form_div.inputZip.value;

    // Check that it's not empty
    if (zip === '') {
        markField('zip-alert','Cannot be empty');
        invalid.push(true);
    }


    // Check it's 5 characters long
    else if (zip.length !== 5) {
        markField('zip-alert','Invalid zip code');
        invalid.push(true);
    }

    // Unmark it if it's fixed
    else
        markField('zip-alert', invalid);




    // Display the error messages if there is one
    if (invalid.length !== 0) {
        let alert_div = document.querySelector('.alert');
        alert_div.className = 'alert alert-danger m-3';
        alert_div.innerHTML = '• INVALID FIELDS';
    }
}


//

function markField(clas, param) {
    let span = document.querySelector(`.${clas}`);

    // If it's an array check for unmarking the fields and deleting the alert message
    if (Array.isArray(param)) {
        document.querySelector(`.${clas}`).innerHTML = '';
        if (param.length === 0) {
            let alert_div = document.querySelector('.alert');
            alert_div.className = 'alert';
            alert_div.innerHTML = '';
        }
    }

    // Otherwise it's a string and a message should be marked on the field
    else {
        span.style.color = 'red';
        span.style.padding = '0 0 0 7px';
        span.style.fontSize = '12px';
        span.innerHTML = `*  ${param}`;
    }
}
