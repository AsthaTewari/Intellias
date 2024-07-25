Feature: Login

  Scenario Outline: Login functionality
    Given I launch the app
    When I enter username "<username>"
    And I enter password "<password>"
    And I click on the login button
    Then I should see the home screen

    Examples:
      | username            | password  |
      | bob@example.com     | 10203040  |
      | alice@example.com   | 10203040  |
      | 1@2.com             | f-o-o     |
      | bob@example.com     |           |
      |                    |            |
