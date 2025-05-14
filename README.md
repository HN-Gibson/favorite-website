# Favorite Website Project

This is the code source for my multi-page website created as a part of my studies at Coding Temple, an Online Softtware Engineering Bootcamp. 

All the content in this project is ficticious and does not reflect a real event center. The goal is to showcase my skills with JS, Bootstrap, HTML, and CSS in the effort to create a website emulating some of the key style and design choices of my favorite websites.

## The Website:

The primary design choices I went with are simiplicity, scalability, and functionality. 

While I don't have and exact website to point to that I am mimicing as most of the ones I sought to emulate have far more content than I could fabricate, One website stood out as a reference point for me from which I departed at times but consistently returned, [highlandsumc.net](https://highlandsumc.net). 

The real inspiration for this site comes from a desire to eventually develope and deploy a web application to serve as a gathering space for non-profits, those seeking services, and volunteers in my city. 

This has long been a concern and passion of mine and I wanted to try my hand at getting a start on what it might look like. There is a lot more content I hope to add in the future, but as it stands, we have:

- **Home Page** ('index.html') w/ welcome, hero image, and link to sign-up as an organization. 
    
    - In the future, I hope to add more information about the mission and further links for those seeking services and volunteers.

- **Members Page** ('members.html') highlighting two organizations that started as a table, but I turned into a Bootstrap Carousel. 

    -I hope to add a lot more organizations to this lest with some structures in place to store and pull data based on user requests. 

- **Sign-up Page** ('signup.html') offers a Bootstrap form with required fields noted if the user tries to submit without entering data as well as minimal email verification and a Boodstrap Modal that pops up upon successful entry.

    - **This is where three of my five JS functions are planned to be utilized in the effort to tighten verification of Phone and Email before receiving and saving data.**

**FAQ and Feeedback Page** ('faq.html') is the heart of the website in some ways showcasing a Bootstrap Accordion List of questions and answers as well as a open means for users to offer feedback.

    - **This is where the other two JS functions are utilized to verify entry into the field and save data. I would also like to potentially add contact info and verification in the future.**

JavaScript functions can be found under the scripts directory and include:

- "addFeedback" for saving data from feedback section after validation

- "validateFeedback" for validating data was actually entered in the feedback section

- "validateEmail" for validating email entered in sign-up form

- "validatePhone" for validating phone number entered in sign-up form

- "saveUserData" for saving data from sign-up form after validation

I hope you enjoy my project!
