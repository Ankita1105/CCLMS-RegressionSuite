$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Servertel-DIY.feature");
formatter.feature({
  "name": "This feature will cover regression of Servertel-DIY campaign",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Lead created Successfully when registraion Number is valid and Details found successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@servertelDiyLeadCreate"
    }
  ]
});
formatter.step({
  "name": "user logged in the cc panel web with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter fullName as \"\u003cfullname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I clear the Phone number already filled",
  "keyword": "And "
});
formatter.step({
  "name": "I enter phoneNumber as \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter regNumber as \"\u003cregNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on get details button",
  "keyword": "And "
});
formatter.step({
  "name": "I select Make",
  "keyword": "And "
});
formatter.step({
  "name": "I select Model",
  "keyword": "And "
});
formatter.step({
  "name": "I select Year",
  "keyword": "And "
});
formatter.step({
  "name": "I select Fuel Type",
  "keyword": "And "
});
formatter.step({
  "name": "I select Transmission Type",
  "keyword": "And "
});
formatter.step({
  "name": "I select Variant",
  "keyword": "And "
});
formatter.step({
  "name": "I select odometer",
  "keyword": "And "
});
formatter.step({
  "name": "I select State",
  "keyword": "And "
});
formatter.step({
  "name": "I select RTO",
  "keyword": "And "
});
formatter.step({
  "name": "I click on location",
  "keyword": "And "
});
formatter.step({
  "name": "I enter \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select location",
  "keyword": "And "
});
formatter.step({
  "name": "I click on checkBox of whatsapp consent",
  "keyword": "And "
});
formatter.step({
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "name": "Lead created successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "fullname",
        "phoneNumber",
        "regNumber",
        "location"
      ]
    },
    {
      "cells": [
        "anupam.chauhan@cars24.com",
        "anupam.chauhan@cars24.com@$",
        "Ankita",
        "7503636181",
        "HR26AV5475",
        "Cars24"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the application using URL",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.launchURl()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: unhandled inspector error: {\"code\":-32000,\"message\":\"Inspected target navigated or closed\"}\n  (Session info: chrome\u003d116.0.5845.187)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ankitasrivastavcars24com.local\u0027, ip: \u00272401:4900:1c68:eb38:d09a:ccb7:e2ff:d63f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_345\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: /var/folders/pz/2_xtb25s1_j...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:54643}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b4a47dee2f7b1f079ff0f16d002bda4a\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat stepDefinition.ServertelDIYStepDef.launchURl(ServertelDIYStepDef.java:20)\n\tat ✽.Launch the application using URL(file:///Users/cars24/eclipse-workspace/CCLMS-RegressionSuite/src/test/java/features/Servertel-DIY.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Lead created Successfully when registraion Number is valid and Details found successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@servertelDiyLeadCreate"
    }
  ]
});
formatter.step({
  "name": "user logged in the cc panel web with \"anupam.chauhan@cars24.com\" and \"anupam.chauhan@cars24.com@$\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.user_logged_in_the_cc_panel_web_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter fullName as \"Ankita\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_enter_fullName_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I clear the Phone number already filled",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_clear_the_Phone_number_already_filled()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter phoneNumber as \"7503636181\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_enter_phoneNumber_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter regNumber as \"HR26AV5475\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_enter_regNumber_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on get details button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_click_on_get_details_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Make",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_select_Make()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Model",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_select_Model()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Year",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_select_Year()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Fuel Type",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_select_Fuel_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Transmission Type",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_select_Transmission_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Variant",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_select_Variant()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select odometer",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_select_odometer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select State",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_select_State()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select RTO",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_select_RTO()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on location",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_click_on_location()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"Cars24\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_enter(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select location",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_select_location()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on checkBox of whatsapp consent",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_click_on_checkBox_of_whatsapp_consent()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.i_click_on_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Lead created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.ServertelDIYStepDef.lead_created_successfully()"
});
formatter.result({
  "status": "skipped"
});
});