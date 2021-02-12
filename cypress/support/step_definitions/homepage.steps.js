
import {Given, Then, When, And} from 'cypress-cucumber-preprocessor/steps';
import Homepage from '../pages/homepage.page'

const homepage = new Homepage();

Then('user click on {string}',(value)=> {
   if(value === "Hotels"){
        homepage.clickHotelsBtn();
   }
   else if(value === "Flights"){
       homepage.clickFlightsBtn();
   }
   else if(value === "Boats"){
       homepage.clickBoatsBtn();
   }
   else if(value === "Rentals"){
       homepage.clickRentalsBtn();
   }
   else if(value === "Tours"){
       homepage.clickToursBtn();
   }
   else if(value === "Cars"){
       homepage.clickCarsBtn();
   }
   else if(value === "Visa"){
       homepage.clickVisaBtn();
   }
});

And('user enters {string} in Destination',(destination)=> {
    homepage.enterHotelDestination(destination);
});

And('user enters hotel checkin date as {string}',(checkindate)=> {
    homepage.enterHotelCheckinDate(checkindate);
});

And('user enters hotel checkout date as {string}',(checkoutdate)=> {
    homepage.enterHotelCheckoutDate(checkoutdate);
});

When('user clicks on search to find out hotels',()=> {
    homepage.clickHotelSearchBtn();
});
