// Feedback Storage

let feedback = [];

function addFeedback(message) {
  feedback.push(message);
  return feedback;
}

// Verify Feedback Submission

function validateFeedback(submittedFeedback){
    if (submittedFeedback !== "") {
        submittedFeedback.addFeedback();
    } else {
        return ("No Feedback Entered.");
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
    let validEmail = submittedUserData[1].validateEmail();
    let validPhone = submittedUserData[2].validatePhone();
    if (validEmail === true && validPhone === true) {
        userData.push(submittedUserData);
        return userData;
    } else {
        return ("Email or Phone could not be verified.")
    }
}

// Post Sign-up Data to Public List of Organizations

// Update Sign-up Data