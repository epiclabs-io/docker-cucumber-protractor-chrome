Feature: Search in google
  In order to navigate the internet
  As a user
  I want to search in google

  Scenario: Search for news in google
  	Given I am at "https://www.google.com"
  	When I search "news"
  	Then I should see 11 results
