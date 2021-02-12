
class Homepage {
    getHomePageElements(){
        return require('../locators/homePage.locators')
    }

    clickHotelsBtn(){
        cy.xpath(this.getHomePageElements().HOTELS_BTN).wait(1000).click();
    }

    clickFlightsBtn(){
        cy.xpath(this.getHomePageElements().FLIGHTS_BTN).wait(1000).click();
    }

    clickBoatsBtn(){
        cy.xpath(this.getHomePageElements().BOATS_BTN).wait(1000).click();
    }

    clickRentalsBtn(){
        cy.xpath(this.getHomePageElements().RENTALS_BTN).wait(1000).click();
    }

    clickToursBtn(){
        cy.xpath(this.getHomePageElements().TOURS_BTN).wait(1000).click();
    }

    clickCarsBtn(){
        cy.xpath(this.getHomePageElements().CARS_BTN).wait(1000).click();
    }

    clickVisaBtn(){
        cy.xpath(this.getHomePageElements().VISA_BTN).wait(1000).click();
    }

    enterHotelDestination(destination){
        cy.xpath(this.getHomePageElements().DESTINATION_SEARCH_INPUT_FIELD).wait(1000)
            .type(destination)
            .wait(1000)
            .xpath('//div[text()="Locations"]/following-sibling::ul/li[1]/div/span[text()="'+destination+'"]').click()
    }

    enterHotelCheckinDate(checkindate){
        cy.xpath(this.getHomePageElements().HOTELS_CHECKIN_INPUT)
            .click()
            .clear()
            .type(checkindate)
    }

    enterHotelCheckoutDate(checkoutdate){
        cy.xpath(this.getHomePageElements().HOTELS_CHECKOUT_INPUT)
            .click()
            .clear()
            .type(checkoutdate)
    }

    clickHotelSearchBtn(){
        cy.xpath(this.getHomePageElements().HOTELS_SEARCH_BTN).wait(1000).click();
    }


}

module.exports = Homepage;