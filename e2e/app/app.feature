# e2e/app/app.feature
Feature: Visit Website
    As a user
    I need to see the websites content
    So that I decide what to do next

Scenario: Visit page
    When I got to the page
    Then I see the title "Welcome to app!" 