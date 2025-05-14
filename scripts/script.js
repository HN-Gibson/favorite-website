// Feedback Storage

let feedback = [];

function addFeedback(message) {
    let validFeedback = validateFeedback(message);
    if (validFeedback === true) {
        feedback.push(message);
        return feedback;
    } else {
        return ("Feedback was empty!")
    }
}

// Verify Feedback Submission

function validateFeedback(submittedFeedback){
    if (submittedFeedback !== "") {
        return true;
    } else {
        return false;
    }
}

// Email Verification

function validateEmail(email){
    if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }
}

// Phone Number Verification

function validatePhone(phone){
    const phoneRegex = /^\+?([0-9]{1,3})?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneRegex.test(phone) === true) {
        return true;
    } else {
        return false;
    }
}

// Save Sign-up Data

let userData = []

function saveUserData (submittedUserData){
    let validEmail = validateEmail(submittedUserData[1]);
    let validPhone = validatePhone(submittedUserData[2]);
    if (validEmail === true && validPhone === true) {
        userData.push(submittedUserData);
        return userData;
    } else {
        return ("Email or Phone could not be verified.")
    }
}

let message = "Great Website!"

let submittedUserData = ["Help Team", "help@team.com", "205-555-5555", "We Offer Assistance"]

console.log(addFeedback(message)); // Runs both validation and saving
console.log(saveUserData(submittedUserData)); // Runs both validation and saving