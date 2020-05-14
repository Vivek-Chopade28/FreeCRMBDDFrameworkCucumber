$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Vivek Automation Study/Automation Workspace/FreeCRMBDDFramework/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create new contact",
  "description": "",
  "id": "free-crm-create-new-contact",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM crate new contact scenario",
  "description": "",
  "id": "free-crm-create-new-contact;free-crm-crate-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and enters \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login buttom",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on new contact btn",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-create-new-contact;free-crm-crate-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "free-crm-create-new-contact;free-crm-crate-new-contact-scenario;;1"
    },
    {
      "cells": [
        "vivek.chopade28@gmail.com",
        "@Vivek28",
        "Pranav",
        "Patil",
        "Developer"
      ],
      "line": 17,
      "id": "free-crm-create-new-contact;free-crm-crate-new-contact-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM crate new contact scenario",
  "description": "",
  "id": "free-crm-create-new-contact;free-crm-crate-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"vivek.chopade28@gmail.com\" and enters \"@Vivek28\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login buttom",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on new contact btn",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters contact details \"Pranav\" and \"Patil\" and \"Developer\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_login_page()"
});
formatter.result({
  "duration": 21154645500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 16383000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vivek.chopade28@gmail.com",
      "offset": 13
    },
    {
      "val": "@Vivek28",
      "offset": 52
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_enters_password(String,String)"
});
formatter.result({
  "duration": 677764500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_buttom()"
});
formatter.result({
  "duration": 53020000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_login_button()"
});
formatter.result({
  "duration": 858759500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_move_to_login_button()"
});
formatter.result({
  "duration": 2049792400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_new_contact_btn()"
});
formatter.result({
  "duration": 3521263900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pranav",
      "offset": 29
    },
    {
      "val": "Patil",
      "offset": 42
    },
    {
      "val": "Developer",
      "offset": 54
    }
  ],
  "location": "LoginStepDefination.user_enters_fistname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 4883100600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 4449779500,
  "status": "passed"
});
});