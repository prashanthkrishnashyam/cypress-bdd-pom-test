
Feature: PHPTravels booking site features

    Scenario: Verify if user is able to login

        Given user launches the PHPTravels website
        Then user click on MY ACCOUNT to login
        When user click on Login
        Then user navigates to Login page
        And user enters the Email address
        And user enters the Password
        When user click on Login button


