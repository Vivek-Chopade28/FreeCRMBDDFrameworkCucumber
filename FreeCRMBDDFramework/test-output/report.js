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
        "fistname",
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
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"Patil\" and \"Developer\"",
  "matchedColumns": [
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
  "duration": 21356999100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 17025000,
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
  "duration": 1125509800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_buttom()"
});
formatter.result({
  "duration": 64932900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_login_button()"
});
formatter.result({
  "duration": 858341800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_move_to_login_button()"
});
formatter.result({
  "duration": 203651700,
  "error_message": "org.openqa.selenium.NoSuchFrameException: No frame element found by name or id users icon\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-VIVEK\u0027, ip: \u0027192.168.43.78\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:885)\r\n\tat stepDefination.LoginStepDefination.user_move_to_login_button(LoginStepDefination.java:68)\r\n\tat ✽.Then user move to new contact page(E:/Vivek Automation Study/Automation Workspace/FreeCRMBDDFramework/src/main/java/Features/contacts.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_new_contact_btn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cfirstname\u003e",
      "offset": 29
    },
    {
      "val": "Patil",
      "offset": 47
    },
    {
      "val": "Developer",
      "offset": 59
    }
  ],
  "location": "LoginStepDefination.user_enters_fistname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});