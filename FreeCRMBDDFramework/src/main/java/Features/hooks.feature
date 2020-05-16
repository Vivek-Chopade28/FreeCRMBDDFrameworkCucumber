Feature: Free CRM app test

Scenario: free crm create deal test
When user is on deal page
Then user fills the deal form
Then deal is created

Scenario: free crm create a contact test
When user is on contact page
Then user fills the details
Then contact is created