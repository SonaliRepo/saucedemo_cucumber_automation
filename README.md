# saucedemo_cucumber_automation
Saucedemo End-to-End Automation using WebdriverIO , Javascript and NodeJS

## Pre-requisite
1. NodeJS v12 and above
2. JRE 8 or above

## Quick start
1. Download the latest stable release from here or clone the git repository https://github.com/SonaliRepo/saucedemo_cucumber_automation.git 
(git remote add origin <RemoteRepoURL>).
2. Install Dependencies ( npm install)

## How tests are written
Tests are written in Gherkin syntax. All test files are located in ./features/featurefiles/* and have the file ending .feature

## How to run the test
To run the test call the WDIO Runner:

npx wdio run wdio.conf.js

## Configuration
wdio.conf.js has been used to set all the general configs like (CucumberOpts, specs, reporters) that don't change. Project baseURL is also set in this config file.

## Reporting
Allure and spec reports have been used for reporting purpose. 'reporters' array has been used to define the same:

reporters: ['spec',
        ['allure', 
            {   
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                useCucumberStepReporter: true,
                disableWebdriverStepsReporting: false
            }
        ]
    ]
    
## Running single feature
Sometimes it's useful to only execute a single feature file, to do so use the following command:

npx wdio wdio.conf.js --spec ./test/features/featurefiles/E2Eproductspurchase.feature

## Using tags
If you want to run only specific tests you can mark your scenario with tags. These tags will be placed before each scenario like this:

@tag-name
Scenario: ...
  
To run only the specific tag, set the below parameter in wdio.conf.js :
  
tagExpression: '@e2eproductspurchase',
  
## Pending tests
Unimplemented tests are marked as "Pending" so they will get skipped:

@pending
Scenario: ...
  
## Defining steps
The step-definition files are placed under .test/features/step-definitions/e2esuccesspurchase.js. They are separated in Given, When and Then. Code snippets have been defined using regular expressions.
