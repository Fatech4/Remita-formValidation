//const error = document.querySelectorAll('#error');
const account = document.getElementById('accountType');
const labelChange = document.querySelector('[for=corporateName]');
const corporate = document.getElementById('corporateName');
const gov = document.querySelector('.gov');
const form = document.getElementsByTagName('form')[0];


account.addEventListener('change', function() {
    if (account.value == "PERSONAL") {
        document.querySelector('.hidden').style.display = "none";

    } else if (account.value == "SME") {
        labelChange.textContent = "Micro SME Name "
        corporate.placeholder = "Please Enter your Micro SME Name"
        gov.style.display = "block";
        document.querySelector('.hidden').style.display = "block";

    } else if (account.value == "CORPORATE") {
        labelChange.textContent = "Corporate/SME Name "
        corporate.placeholder = "Please Enter your Corporate/SME Name"
        gov.style.display = "block";
        document.querySelector('.hidden').style.display = "block";


    } else if (account.value == "GOVERNMENT") {
        document.querySelector('.hidden').style.display = "block";

        gov.style.display = "none";
        labelChange.textContent = "Government/MDA Name "
        corporate.placeholder = "Please Enter your Government/MDA Name"
    } else {}

})


function fvalidation() {
    const fName = document.getElementById('fname');
    const lName = document.getElementById('lname');
    const phone = document.getElementById('phone');
    const account = document.getElementById('accountType');
    const email = document.getElementById('email')
    var fnameErr = lnameErr = phoneErr = emailErr = accountErr = true;

    if (email.validity.valid) {
        error = document.querySelector('#email + label.error');
        error.textContent = "";
        error.style.border = "inherit";

    } else {
        error = document.querySelector('#email + label.error');
        error.innerHTML = "The field is required";
        email.style.border = "2px solid red";
        email.style.background = "#ffe4dc";
        emailErr = false;
    }

    if (fName.validity.valid) {
        error = document.querySelector('#fname + label.error');
        error.textContent = "";
        error.style.border = "inherit";

    } else {
        error = document.querySelector('#fname + label.error');
        error.innerHTML = "The field is required";
        fName.style.border = "2px solid red";
        fName.style.background = "#ffe4dc";
        fnameErr = false;
    }
    if (lName.validity.valid) {
        error = document.querySelector('#lname + label.error');
        error.textContent = "";
        error.style.border = "inherit";


    } else {
        error = document.querySelector('#lname + label.error');
        error.innerHTML = "The field is required";
        lName.style.border = "2px solid red";
        lName.style.background = "#ffe4dc";
        lnameErr = false;
    }
    if (phone.validity.valid) {
        error = document.getElementById('error');
        error.textContent = "";
        error.style.border = "inherit";


    } else {
        error = document.getElementById('error');

        error.textContent = "The field is required";
        phone.style.border = "2px solid red";
        phone.style.background = "#ffe4dc";
        phoneErr = false;
    }
    if (phone.validity.valid) {
        error = document.querySelector('#accountType + label.error');
        error.textContent = "";
        error.style.border = "inherit";


    } else {
        error = document.querySelector('#accountType + label.error');
        error.textContent = "The field is required";
        account.style.border = "2px solid red";
        account.style.background = "#ffe4dc";
        accountErr = false;
    }


    if ((emailErr || fnameErr || lnameErr || phoneErr || accountErr) == false) {
        return false;
    } else {
        alert("Form Submitted Successfully");
    }
}


//form.onsubmit = validation();
form.addEventListener('submit', function(event) {
    event.preventDefault();
    fvalidation();
    /*  event.preventDefault(); */
    /*  if (fvalidation() == true) {
         alert("hvhvhvhv");
         return true;
     } else {
         event.preventDefault();
         return false;
     }  */
})

/* onst req = document.querySelectorAll('[required]');
req.forEach(function(field) {
    field.addEventListener('input', function() {
        if (field.validity.valid) {
            for (i = 0; i < req.length; i++) {
                error[i].innerHTML = "";
                req[i].style.border = "inherit";
                req[i].style.background = "inherit";
            }

        }
    })
})

form.addEventListener('submit', function(e) {

    for (i = 0; i < req.length; i++) {
        if (req[i].validity.valid) {
            error[i].innerHTML = "";
            req[i].style.border = "inherit";

        } else {
            e.preventDefault();
            error[i].innerHTML = "The field is required";
            req[i].style.border = "2px solid red";
            req[i].style.background = "#ffe4dc";

        }
    }

}); */