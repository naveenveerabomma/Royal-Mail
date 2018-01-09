Feature: Verify Home Page functionality on Royal Mail site

  Background:
    Given I am on the Home Page


  Scenario: verify page elements
     Then I should see the Links to Navigate
      | No      | Links            |
      | 1       | Track your item  |
      | 2       | Find a postcode  |
      | 3       | Get a price      |
      | 4       | Redelivery       |
      | 5       | Pay a fee        |
    And There should be a Search box


  Scenario Outline: verify Navigation links functionality
    When I click the "<Link>"
    Then I should see the "<Page>"
    Examples:
      | Link            | Page            |
      | Track your item | Track and Trace |
      | Find a postcode | Postcode Finder |
      | Get a price     | Get a price     |
      | Redelivery      | Redelivery      |
      | Pay a fee       | Pay a fee       |


