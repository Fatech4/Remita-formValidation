const error = document.querySelectorAll('#error');
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
const req = document.querySelectorAll('[required]');
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
            window.alert("Form Submitted Sucessfully");
        } else {
            e.preventDefault();
            error[i].innerHTML = "The field is required";
            req[i].style.border = "2px solid red";
            req[i].style.background = "#ffe4dc";

        }
    }

});