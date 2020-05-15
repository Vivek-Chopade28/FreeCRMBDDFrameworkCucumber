Feature: Deal data creation

Scenario: Free CRM crate new deal scenario

Given user is already on login page
When title of login page is Free CRM
Then user enters username and password
| vivek.chopade28@gmail.com | @Vivek28 |
Then user clicks on login buttom
Then user is on home page
Then user move to deal page
Then click on new deal btn
Then user enters deal details
| Test deal | 1000 | 50 | 10 |
Then close the browser