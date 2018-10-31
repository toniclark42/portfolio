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


