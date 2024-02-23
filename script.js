// document.querySelectorAll('.arrow-icon').forEach(function(element) {
//     element.addEventListener('click', function() {
//         const parent = this.closest('.option-box');
//         if (parent.id === 'individual-option') {
//             document.querySelector('.content-side').innerHTML = `
//             <div id="step-indicator">Step 01/03</div>
//                  <div id="back-button">&#8592; Back</div>
//                 <h2>Register Personal Account</h2>
//                 <form>
//                     <label for="full-name">Full Name</label><br>
//                     <input type="text" id="full-name" name="full-name"><br>
//                     <label for="email">Email Address</label><br>
//                     <input type="email" id="email" name="email"><br>
//                     <label for="password">Create Password</label><br>
//                     <input type="password" id="password" name="password"><br>
//                     <input type="checkbox" id="terms" name="terms">
//                     <label for="terms">I agree to the Terms and Conditions</label><br>
//                     <button type="submit">Register Account</button>
//                 </form>
//                 <button onclick="registerWithGoogle()">Register with Google</button>
//                 <div id="next-button">Next &#8594;</div>
//             `;
//         } else if (parent.id === 'business-option') {
//             // Update this block for the business registration form
//         }
//     });
// });
document.querySelectorAll('.option-box').forEach(function(element) {
    element.addEventListener('click', function() {
        const parent = this;
        if (parent.id === 'individual-option') {
            document.querySelector('.content-side').innerHTML = `
            <div id="step-indicator">Step 01/03</div>
                 <div id="back-button">&#8592; Back</div>
                <h2>Register Personal Account</h2>
                <form>
                    <label for="full-name">Full Name</label><br>
                    <input type="text" id="full-name" name="full-name"><br>
                    <label for="email">Email Address</label><br>
                    <input type="email" id="email" name="email"><br>
                    <label for="password">Create Password</label><br>
                    <input type="password" id="password" name="password"><br>
                    <input type="checkbox" id="terms" name="terms">
                    <label for="terms">I agree to the Terms and Conditions</label><br>
                    <button type="submit">Register Account</button>
                </form>
                <button onclick="registerWithGoogle()">Register with Google</button>
                <div id="next-button">Next &#8594;</div>
            `;
        } else if (parent.id === 'business-option') {
            // Update this block for the business registration form
        }
    });
});


document.querySelector('.content-side').addEventListener('click', function(event) {
    if (event.target.id === 'back-button') {
        document.querySelector('.content-side').innerHTML = `
            <h1>Welcome to Our Website</h1>
            <div class="join-us">Join Us</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa quis elit molestie mattis.</p>
            <a href="#" class="signin-link">Already have an account? Sign in</a>
            <div class="options-container">
                <div class="option-box" id="individual-option">
                    <div class="option-title">Individual</div>
                    <div class="option-description">Personal account to manage all activities</div>
                    <div class="arrow-icon">&#8594;</div>
                </div>
                <div class="option-box" id="business-option">
                    <div class="option-title">Business</div>
                    <div class="option-description">Own or belong to a company</div>
                    <div class="arrow-icon">&#8594;</div>
                </div>
            </div>
        `;
    }
});

function registerWithGoogle() {
    // Your Google registration logic here
}
document.querySelector('.content-side').addEventListener('click', function(event) {
    if (event.target.id === 'back-button') {
        // Handle back button click
        // This part remains the same as before
        document.querySelector('.content-side').innerHTML = `
        <h1>Welcome to Our Website</h1>
        <div class="join-us">Join Us</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa quis elit molestie mattis.</p>
        <a href="#" class="signin-link">Already have an account? Sign in</a>
        <div class="options-container">
            <div class="option-box" id="individual-option">
                <div class="option-title">Individual</div>
                <div class="option-description">Personal account to manage all activities</div>
                <div class="arrow-icon">&#8594;</div>
            </div>
            <div class="option-box" id="business-option">
                <div class="option-title">Business</div>
                <div class="option-description">Own or belong to a company</div>
                <div class="arrow-icon">&#8594;</div>
            </div>
        </div>
    `;
    } else if (event.target.id === 'next-button') {
        // Handle next button click
        document.querySelector('.content-side').innerHTML = `
        <div id="step-indicator">Step 02/03</div>
        <div id="back-button">&#8592; Back</div>
       
        <h2>Complete Your Profile</h2>
        <form>
            <label for="phone-no">Phone Number</label><br>
            <input type="text" id="phone-no" name="phone-no"><br>
            <label for="address">Address</label><br>
            <input type="text" id="address" name="address"><br>
            <label for="country">Country of Residence</label><br>
            <input type="text" id="country" name="country"><br>
            <button type="submit">Submit</button>
        </form>
    `;
       
    }
    else if (event.target.id === 'next-button') {
    // Handle next button click
    document.querySelector('.content-side').innerHTML = `
        <h2>Thank You!</h2>
        <p>Your account has been successfully registered.</p>
        <button id="restart-button">Restart</button>
    `;
} 
    



    
}

);
document.querySelector('.content-side').addEventListener('click', function(event) {
if (event.target.id === 'back-button') {
    document.querySelector('.content-side').innerHTML = `
        <h1>Welcome to Our Website</h1>
        <div class="join-us">Join Us</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa quis elit molestie mattis.</p>
        <a href="#" class="signin-link">Already have an account? Sign in</a>
        <div class="options-container">
            <div class="option-box" id="individual-option">
                <div class="option-title">Individual</div>
                <div class="option-description">Personal account to manage all activities</div>
                <div class="arrow-icon">&#8594;</div>
            </div>
            <div class="option-box" id="business-option">
                <div class="option-title">Business</div>
                <div class="option-description">Own or belong to a company</div>
                <div class="arrow-icon">&#8594;</div>
            </div>
        </div>
    `;
} else if (event.target.id === 'next-button') {
    // Handle next button click
    document.querySelector('.content-side').innerHTML = `
        <div id="step-indicator">Step 02/03</div>
        <div id="back-button">&#8592; Back</div>
        <div id="next-button">Next &#8594;</div>
        <h2>Complete Your Profile</h2>
        <form>
            <label for="phone-no">Phone Number</label><br>
            <input type="text" id="phone-no" name="phone-no"><br>
            <label for="address">Address</label><br>
            <input type="text" id="address" name="address"><br>
            <label for="country">Country of Residence</label><br>
            <input type="text" id="country" name="country"><br>
            <button type="submit">Submit</button>
        </form>
        <button id="next-profile-button">Next &#8594;</button>
    `;
} else if (event.target.id === 'next-profile-button') {
    // Handle next profile button click to open new content side
    document.querySelector('.content-side').innerHTML = `
        <h2>Next Profile Section</h2>
        <p>This is the next section of the profile.</p>
        <button id="back-profile-button">&#8592; Back</button>
    `;
} else if (event.target.id === 'back-profile-button') {
    // Handle back profile button click to go back to complete profile
    document.querySelector('.content-side').innerHTML = `
        <div id="step-indicator">Step 02/03</div>
        <div id="back-button">&#8592; Back</div>
        <div id="next-button">Next &#8594;</div>
        <h2>Complete Your Profile</h2>
        <form>
            <label for="phone-no">Phone Number</label><br>
            <input type="text" id="phone-no" name="phone-no"><br>
            <label for="address">Address</label><br>
            <input type="text" id="address" name="address"><br>
            <label for="country">Country of Residence</label><br>
            <input type="text" id="country" name="country"><br>
            <button type="submit">Submit</button>
        </form>
        <button id="next-profile-button">Next &#8594;</button>
    `;
}
});
