Feature: Free CRM Login Feature


Without Example keyword
Scenario: Free CRM Login Test Scenario
Given user is already on login page
When title of login page is Free CRM
Then user enters "vivek.chopade28@gmail.com" and enters "@Vivek28"
Then user clicks on login buttom
Then user is on home page 

#Scenario: user is able to create new contact
#When user is already on homepage
#Then user click on contact
#Then user click on new btn
#Then user enters firstname and enters lastname
#Then user clicks on save btn
#Then verify new contact created


#With Example keyword
#Scenario Outline: Free CRM Login Test Scenario

#Given user is already on login page
#When title of login page is Free CRM
#Then user enters "<username>" and enters "<password>"
#Then user clicks on login buttom
#Then user is on home page 
#Then close the browser  

#Examples:
				| username | password |
				| vivek.chopade28@gmail.com | @Vivek28 |
				| naveenk | test@123 |