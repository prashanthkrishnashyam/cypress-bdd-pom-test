
class Login {
    getHomePageElements(){
        return require('../locators/homePage.locators');
    }

    getLoginPageElements(){
        return require('../locators/loginPage.locators');
    }

    launchWebsite() {
        cy.visit("www.phptravels.net");
    }

    clickMyAccount(){
        cy.xpath(this.getHomePageElements().HOMEPAGE_MYACCOUNT_BTN).wait(1000).click();
    }

    clickLoginLink(){
        cy.xpath(this.getHomePageElements().HOMEPAGE_LOGIN_BTN).wait(1000).click();
    }

    verifyLoginHeader(){
        cy.wait(1000)
            .xpath(this.getLoginPageElements().LOGIN_HEADER).invoke('text')
            .then((logindeaderTxt)=>{
                expect(logindeaderTxt.trim()).to.equal("Login");
            })
    }

    enterEmail(){
        cy.fixture('testdata.json').then((td) => {
            cy.xpath(this.getLoginPageElements().EMAIL_INPUT_FIELD)
                .click(cy.xpath('//span[text()="Email"]'))
                .type(td.validemail);
        });
    }

    enterPassword(){
        cy.fixture('testdata.json').then((td) => {
            cy.xpath(this.getLoginPageElements().PASSWORD_INPUT_FIELD)
                .click(cy.xpath('//span[text()="Password"]'))
                .type(td.validpassword);
        });
    }

    clickLoginButton(){
        cy.xpath(this.getLoginPageElements().LOGIN_BTN).click();
    }
}

module.exports = Login;