Feature: Phonecat

  Scenario: Filter
    Given I am on the site
    When I type "Wi-Fi" into the "search filter"
    Then I should see 1 "phonelist" item
