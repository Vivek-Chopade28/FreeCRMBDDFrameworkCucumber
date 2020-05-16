$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Vivek Automation Study/Automation Workspace/FreeCRMBDDFramework/src/main/java/Features/dealsmap.feature");
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
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "vivek.chopade28@gmail.com",
        "@Vivek28"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login buttom",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user move to deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on new deal btn",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probabillity",
        "comission"
      ],
      "line": 16
    },
    {
      "cells": [
        "Test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 17
    },
    {
      "cells": [
        "Test deal",
        "2000",
        "60",
        "20"
      ],
      "line": 18
    },
    {
      "cells": [
        "Test deal",
        "3000",
        "70",
        "30"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefination.user_already_login_page()"
});
formatter.result({
  "duration": 22086178600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 16808500,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 690615400,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.user_clicks_on_login_buttom()"
});
formatter.result({
  "duration": 75551400,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.user_is_on_login_button()"
});
formatter.result({
  "duration": 12017100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.user_move_to_deal_page()"
});
formatter.result({
  "duration": 8971985100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.click_on_new_deal_btn()"
});
formatter.result({
  "duration": 9452537000,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.user_enters_deal_deatils(DataTable)"
});
formatter.result({
  "duration": 47420014600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.close_the_browser()"
});
formatter.result({
  "duration": 1896132900,
  "status": "passed"
});
});