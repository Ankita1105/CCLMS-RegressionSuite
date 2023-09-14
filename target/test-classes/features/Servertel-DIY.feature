#Author: Ankita Srivastav
Feature: This feature will cover regression of Servertel-DIY campaign

  Background: 
    Given Launch the application using URL

  @servertelDiyLeadCreate
  Scenario Outline: Lead created Successfully when registraion Number is valid and Details found successfully
    When user logged in the cc panel web with "<username>" and "<password>"
    And I enter fullName as "<fullname>"
    And I clear the Phone number already filled
    And I enter phoneNumber as "<phoneNumber>"
    And I enter regNumber as "<regNumber>"
    And I click on get details button
    And I select Make
    And I select Model
    And I select Year
    And I select Fuel Type
    And I select Transmission Type
    And I select Variant
    And I select odometer
    And I select State
    And I select RTO
    And I click on location
    And I enter "<location>"
    And I select location
    And I click on checkBox of whatsapp consent
    And I click on continue button
    Then Lead created successfully

    Examples: 
      | username                  | password                    | fullname | phoneNumber | regNumber  | location |
      | anupam.chauhan@cars24.com | anupam.chauhan@cars24.com@$ | Ankita   |  7503636181 | HR26AV5475 | Cars24   |
