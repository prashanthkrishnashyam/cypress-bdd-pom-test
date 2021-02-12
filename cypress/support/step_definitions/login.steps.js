
import {Given, Then, When, And} from 'cypress-cucumber-preprocessor/steps';
import Login from "../pages/login.page"

const login =  new Login();

Given('user launches the PHPTravels website', ()=> {
    login.launchWebsite();
});

Then('user click on MY ACCOUNT to login', ()=> {
    login.clickMyAccount();
});

When('user click on Login', ()=> {
    login.clickLoginLink();
});

Then('user navigates to Login page', ()=> {
    login.verifyLoginHeader();
});

And('user enters the Email address',()=> {
    login.enterEmail();
});

And('user enters the Password',()=> {
    login.enterPassword();
});

Then('user click on Login button', ()=> {
    login.clickLoginButton()
});


