Feature: Free CRM create new contact

Scenario Outline: Free CRM crate new contact scenario

Given user is already on login page
When title of login page is Free CRM
Then user enters "<username>" and enters "<password>"
Then user clicks on login buttom
Then user is on home page
Then user move to new contact page
Then click on new contact btn
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then close the browser

Examples:
				| username 					| password | fistname | lastname | position |
				| vivek.chopade28@gmail.com | @Vivek28 | Pranav   | Patil 	 | Developer |
				