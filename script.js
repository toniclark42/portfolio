// querySelector can select certain things in the DOM
var menu = document.querySelector('.overlay');
var menuBtn = document.querySelector('#clickMe');
// functions 
function toggleNav() {
    // never directly manipulate css from javscript
    // try and toggle classes that handle your style changes instead
    menu.classList.toggle('menu-is-open');
}

menuBtn.addEventListener('click', toggleNav);


// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.

// var form  = document.getElementById('contactform');
// var firstName = document.getElementById('firstName')
// var email = document.getElementById('emailInput');
// var error = document.querySelector('.error');

// email.addEventListener("input", function (event) {
//   if (email.validity.valid) {
//     // In case there is an error message visible, if the field
//     // is valid, we remove the error message.
//     error.innerHTML = ""; // Reset the content of the message
//     error.className = "error"; // Reset the visual state of the message
//   }
// }, false);


// firstName.addEventListener("input", function (event) {
//     if (firstName.value !== "") {
//         alert("Nope")
//     }
// }, false);


// //On submit to check form
// form.addEventListener("submit", function (event) {
//   // Each time the user tries to send the data, we check
//   // if the email field is valid.
//   if (!email.validity.valid) {
//     // If the field is not valid, we display a custom
//     // error message.
//     error.innerHTML = "I expect an e-mail!";
//     error.className = "error active";
//     // And we prevent the form from being sent by canceling the event
//     event.preventDefault();
//   }

//   if (firstName.value == "") {
//       alert("Yeah!")
//   }
// }, false);



var contactForm = document.forms["contactForm"];


//On submit arrow function to call the validator function
contactForm.onsubmit = e => {
    validator(e);
}

//Function for Validating

function validator(e) {
    console.log("i'm being ran");
    let fields = ['firstName','lastName','emailInput'];
    let newArray = [];
    for (let i = 0; i < fields.length; i++) {
        newArray.push({
                na: contactForm[fields[i]].name,
                val: contactForm[fields[i]].value
        });
    };

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].val === ""){
            alert(`${newArray[i].na} needs to be filled out.`);
            e.preventDefault();
        }
    }
};

console.log('abc');

