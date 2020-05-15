$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Vivek Automation Study/Automation Workspace/FreeCRMBDDFramework/src/main/java/Features/deal.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM crate new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-crate-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "vivek.chopade28@gmail.com",
        "@Vivek28"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login buttom",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user move to deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on new deal btn",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "Test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefination.user_already_login_page()"
});
formatter.result({
  "duration": 37487019300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 28961800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefination.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 658893100,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefination.user_clicks_on_login_buttom()"
});
formatter.result({
  "duration": 60084500,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefination.user_is_on_login_button()"
});
formatter.result({
  "duration": 7855300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefination.user_move_to_deal_page()"
});
formatter.result({
  "duration": 8214015800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefination.click_on_new_deal_btn()"
});
formatter.result({
  "duration": 9356236800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefination.user_enters_deal_deatils(DataTable)"
});
formatter.result({
  "duration": 4079373700,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 347607900,
  "status": "passed"
});
});