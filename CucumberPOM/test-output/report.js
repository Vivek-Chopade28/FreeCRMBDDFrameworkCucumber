$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Vivek Automation Study/Automation Workspace/CucumberPOM/src/main/java/com/crn/qa/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM application test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free crm test",
  "description": "",
  "id": "free-crm-application-test;free-crm-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on login BTN",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on deal BTN",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on new deal BTN",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "verify the title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_open_the_browser()"
});
formatter.result({
  "duration": 14779788400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_username_and_password()"
});
formatter.result({
  "duration": 3048002601,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_BTN()"
});
formatter.result({
  "duration": 8625236000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_deal_BTN()"
});
formatter.result({
  "duration": 679800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_deal_BTN()"
});
formatter.result({
  "duration": 12417767001,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.verify_the_title()"
});
formatter.result({
  "duration": 406999,
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tType mismatch: cannot convert from void to boolean\n\r\n\tat com.crm.qa.StepDefination.LoginStepDefination.verify_the_title(LoginStepDefination.java:52)\r\n\tat ✽.Then verify the title(E:/Vivek Automation Study/Automation Workspace/CucumberPOM/src/main/java/com/crn/qa/feature/login.feature:10)\r\n",
  "status": "failed"
});
});