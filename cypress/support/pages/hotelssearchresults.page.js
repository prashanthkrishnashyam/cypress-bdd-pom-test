
class HotelSearchResults{
    getHotelSearchResultPageElements(){
        return require ('../locators/hotelsSearchResults.locators')
    }

    verifyHotelResultHeader(){
        cy.xpath(this.getHotelSearchResultPageElements().HOTEL_RESULTS_HEADER).invoke('text')
            .then((hotelsearchheader)=>{
                expect(hotelsearchheader.trim()).to.equal("Hotels");
                })
    }

    checkHotelNameResult(hotelname, city){

        if(city === "London"){
            cy.xpath(this.getHotelSearchResultPageElements().HOTEL_GRAND_PLAZA_LINK).invoke('text')
                .then((hotelName)=>{
                    expect(hotelName).to.equal(hotelname);
                })
        }
        if(city === "Dubai"){
            if(hotelname.includes("Hyatt Regency")){
                cy.xpath(this.getHotelSearchResultPageElements().HOTEL_HYATT_REGENCY_PERTH).invoke('text')
                    .then((hotelName)=>{
                        expect(hotelName).to.equal(hotelname);
                    })
            }
            else if(hotelname.includes("Rayhaan Rotana")){
                cy.xpath(this.getHotelSearchResultPageElements().HOTEL_ROSE_RAYHAN_ROTANA).invoke('text')
                    .then((hotelName)=>{
                        expect(hotelName).to.equal(hotelname);
                    })
            }
            else if(hotelname.includes("Oasis Beach")){
                cy.xpath(this.getHotelSearchResultPageElements().HOTEL_OASIS_BEACH_TOWER).invoke('text')
                    .then((hotelName)=>{
                        expect(hotelName).to.equal(hotelname);
                    })
            }
            else if(hotelname.includes("Jumeirah Beach")){
                cy.xpath(this.getHotelSearchResultPageElements().HOTEL_JUMEIRAH_BEACH).invoke('text')
                    .then((hotelName)=>{
                        expect(hotelName).to.equal(hotelname);
                    })
            }
        }
    }
}

module.exports = HotelSearchResults;