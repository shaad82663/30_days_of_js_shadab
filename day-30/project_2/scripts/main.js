// //Selecting all the form and submit button.
var submitButton = document.querySelector('button[type="submit"]');
const form = document.querySelector('.my-form')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    //Selecting all inputs
    const firstName = document.querySelector('.first-name')
    const lastName = document.querySelector('.last-name')
    const email = document.querySelector('.email')
    const password = document.querySelector('.password')
    const telephone = document.querySelector('.telephone')
    const bio = document.querySelector('.bio')

    //Defining regex
    var nameRegex = /^[a-zA-Z0-9]{3,16}$/;
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var passwordRegex = /^[a-zA-Z0-9_@-]{6,20}$/;
    var telephoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    var bioRegex = /^[a-z_-\s]{8,50}$/;
    var isInvalid = false
    
    // Validating inputs.
    if (!nameRegex.test(firstName.value)) {
        isInvalid = true
        alert("First name should be alphanumeric and 3-16 characters long.");
    } 

    if (!nameRegex.test(lastName.value)) {
        isInvalid = true
       alert("Last name should be alphanumeric and 3-16 characters long.");
    } 

    if (!emailRegex.test(email.value)) {
        isInvalid = true
        alert("Please enter a valid email address.");
    } 

    if (!passwordRegex.test(password.value)) {
        isInvalid = true
       alert("Password should be alphanumeric and 6-20 characters long. @, _ and - are allowed.");
    } 

    if (!telephoneRegex.test(telephone.value)) {
        isInvalid = true
        alert("Telephone should be in format xxx-xxx-xxxx.");
    }

    if (!bioRegex.test(bio.value)) {
        isInvalid = true
        alert("Bio should be 8-50 characters long and contain only lowercase letters, hyphens, and underscores.");
    } 
     if(!isInvalid) {
        alert('Successfully Submitted!')
        form.reset()
    }
})