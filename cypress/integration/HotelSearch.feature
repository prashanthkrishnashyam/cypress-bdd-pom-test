
Feature: Hotel Search

    @Scenario1
    Scenario Outline: User is able to search for hotel in London destination

      Given user launches the PHPTravels website
      Then user click on "Hotels"
      And user enters "London" in Destination
      And user enters hotel checkin date as "<checkindate>"
      And user enters hotel checkout date as "<checkoutdate>"
      When user clicks on search to find out hotels
      And user navigates to hotel result page
      Then user sees the hotel "<hotelname>" in "London" city

      Examples:
      |checkindate| checkoutdate|         hotelname         |
      |24/02/2021 |  27/02/2021 |   Grand Plaza Apartments  |


    @Scenario2
    Scenario Outline: User is able to search for hotel in Dubai destination

      Given user launches the PHPTravels website
      Then user click on "Hotels"
      And user enters "Dubai" in Destination
      And user enters hotel checkin date as "<checkindate>"
      And user enters hotel checkout date as "<checkoutdate>"
      When user clicks on search to find out hotels
      And user navigates to hotel result page
      Then user sees the hotel "<hotelname>" in "Dubai" city

      Examples:
        |checkindate| checkoutdate|         hotelname    |
        |05/03/2021 |  07/03/2021 |   Oasis Beach Tower  |
        |05/03/2021 |  07/03/2021 | Hyatt Regency Perth  |