$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddCustomerLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios add customer new account functionality validation",
  "description": "f",
  "id": "techfios-add-customer-new-account-functionality-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should able to login with valid credentials",
  "description": "",
  "id": "techfios-add-customer-new-account-functionality-validation;user-should-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should able to see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on customers",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks on add customers",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should able to see the add contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User fill up form entering fullName as \"\u003cfullName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User fill up the form entering email as \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User fill up form entering phone as \"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User fill up the form entering address as \"\u003caddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User fill up the form entering city as \"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User fill up the form entering stateandregion as \"\u003cstate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User fill up the form entering zipcode as \"\u003czip\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on save button",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "techfios-add-customer-new-account-functionality-validation;user-should-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "fullName",
        "email",
        "phone",
        "address",
        "city",
        "state",
        "zip"
      ],
      "line": 24,
      "id": "techfios-add-customer-new-account-functionality-validation;user-should-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Kajol D",
        "dream1@techfios.com",
        "214 435 5547",
        "2741 E Belt Line Rd",
        "Carrollton",
        "Texas",
        "75006"
      ],
      "line": 25,
      "id": "techfios-add-customer-new-account-functionality-validation;user-should-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3095023299,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TF login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition1.user_is_on_the_TF_login_page()"
});
formatter.result({
  "duration": 1486835900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should able to login with valid credentials",
  "description": "",
  "id": "techfios-add-customer-new-account-functionality-validation;user-should-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should able to see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on customers",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks on add customers",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should able to see the add contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User fill up form entering fullName as \"Kajol D\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User fill up the form entering email as \"dream1@techfios.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User fill up form entering phone as \"214 435 5547\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User fill up the form entering address as \"2741 E Belt Line Rd\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User fill up the form entering city as \"Carrollton\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User fill up the form entering stateandregion as \"Texas\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User fill up the form entering zipcode as \"75006\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on save button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition1.user_enter_username_as(String)"
});
formatter.result({
  "duration": 2236207700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition1.user_enter_password_as(String)"
});
formatter.result({
  "duration": 2100451000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition1.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1478888300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition1.user_should_able_to_see_the_dashboard()"
});
formatter.result({
  "duration": 2016775400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition1.user_clicks_on_customers()"
});
formatter.result({
  "duration": 2104813000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition1.user_clicks_on_add_customers()"
});
formatter.result({
  "duration": 2778154200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition1.user_should_able_to_see_the_add_contacts_page()"
});
formatter.result({
  "duration": 2006605600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kajol D",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinition1.user_fill_up_form_entering_fullName_as(String)"
});
formatter.result({
  "duration": 107681700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dream1@techfios.com",
      "offset": 41
    }
  ],
  "location": "LoginStepDefinition1.user_fill_up_the_form_entering_email_as(String)"
});
formatter.result({
  "duration": 2175004200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "214 435 5547",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition1.user_fill_up_form_entering_phone_as(String)"
});
formatter.result({
  "duration": 2156877699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2741 E Belt Line Rd",
      "offset": 43
    }
  ],
  "location": "LoginStepDefinition1.user_fill_up_the_form_entering_address_as(String)"
});
formatter.result({
  "duration": 2173973600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carrollton",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinition1.user_fill_up_the_form_entering_city_as(String)"
});
formatter.result({
  "duration": 2150047700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Texas",
      "offset": 50
    }
  ],
  "location": "LoginStepDefinition1.user_fill_up_the_form_entering_stateandregion_as(String)"
});
formatter.result({
  "duration": 2174100900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75006",
      "offset": 43
    }
  ],
  "location": "LoginStepDefinition1.user_fill_up_the_form_entering_zipcode_as(String)"
});
formatter.result({
  "duration": 2224143700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition1.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 2123861299,
  "status": "passed"
});
formatter.after({
  "duration": 4772964701,
  "status": "passed"
});
});