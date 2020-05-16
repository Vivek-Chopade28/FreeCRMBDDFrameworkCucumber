@FunctionalTest
Feature: Free CRM application testing

@SmokeTest @RegressionTest
Scenario: Login with correct username and correct password
Given This is valid login test

@RegressionTest
Scenario: Login with incorrect username and correct password
Given This is invalid login test

@SmokeTest
Scenario: Create a contact
Given This is contact test

@SmokeTest
Scenario: Create a deal
Given This is deal test

@SmokeTest
Scenario: Create a task
Given This is task test

@SmokeTest
Scenario: Create a case
Given This is case test

@RegressionTest
Scenario: Verify left pannel links
Given clicking on left pannel links

@RegressionTest @SmokeTest @End2End
Scenario: Search a contact
Given This is search contact test

@End2End
Scenario: Search a deal
Given This is search deal test

@End2End
Scenario: Search a call
Given This is search call test

@End2End
Scenario: Search an email
Given This is search an email test

@End2End
Scenario: Validate report
Given This is report test

@RegressionTest @SmokeTest @End2End
Scenario: Application logout
Given This is logout test