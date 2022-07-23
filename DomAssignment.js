/* Assignment: Use DOM manipulation to fetch and show everything the persons fills below the container.
Create a new .js file */

//Declaration
const myApplicationForm = document.querySelector('#my-applicationForm');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const ageInput = document.querySelector('#age');
const stateInput = document.querySelector('#state');
const msg = document.querySelector('.msg');
const userFeedback = document.querySelector('#users');

// Using Array.forEach to add an event listener to each radio button.
var usergender = document.querySelectorAll("input[type=radio][name=gender]");
let userGenderClicked = [];

usergender.forEach(function(gender) {
  gender.addEventListener('change', function() {
    userGenderClicked = 
      Array.from(usergender) // Convert radio button to an array to use filter and map.
      .filter(i => i.checked) // Using Array.filter() to remove unchecked radio button.
      .map(i => i.value) // Using Array.map() to extract only the checkbox values from the array of objects.
      
      console.log(userGenderClicked); //Just confirming to be sure it's good.
  })
});

// Using Array.forEach to add an event listener to each checkbox.
var userCheckboxes = document.querySelectorAll("input[type=checkbox][name=settings]");
let userCheckboxesClicked = [];

userCheckboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    userCheckboxesClicked = 
      Array.from(userCheckboxes) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Using Array.filter to remove unchecked checkboxes.
      .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
      
      console.log(userCheckboxesClicked); //Let's what happening when it's checked.
  })
});

//DOM Manipulation on the Form.
myApplicationForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if (fnameInput.value === "" || lnameInput.value === "" || ageInput.value === ""
        || userGenderClicked == "" || stateInput.value === "" || userCheckboxesClicked == "" ) {
        msg.classList.add("error"); //assigning values and properties from style.css file
        msg.innerHTML = "Please enter all empty fields";
        setTimeout(() => msg.remove(), 5000); 
    } else {
        const li = document.createElement('h3');
        li.appendChild(document.createTextNode(`Name: ${ fnameInput.value} ${ lnameInput.value}, 
        Age: ${ ageInput.value},  Gender: ${userGenderClicked},  State: ${stateInput.value},  
         Courses: ${userCheckboxesClicked}`));
        userFeedback.appendChild(li);
        fnameInput.value = "";
        lnameInput.value = "";
        ageInput.value = "";
        userGenderClicked = "";
        stateInput.value = "";
        userCheckboxesClicked = "";

    }
}


