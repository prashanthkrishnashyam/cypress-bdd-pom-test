# Cypress BDD POM Test Framework

Cypress is a Javascript development tool which can be used to write Test Automation scripts. Cypress is built on top of MochaJS test framework, hence the default test is in spec. 

This framework supports Behaviour Driven Development(BDD) style of gherkin feature development and Page Object test design style


Refer [Cypress.io](https://www.cypress.io/)

## Installation

Use npm to install the dependencies

```bash
npm install
```

## Command

#### Run all features
```python
npx cypress run 
```
#### Run all features on specific browser
```python
npx cypress run --browser browser
```

#### Run a specific feature file
```python
npx cypress run --spec cypress/integration/{featurefile.feature}
```



## Credits
1. cypress-cucumber-preprocessor - https://www.npmjs.com/package/cypress-cucumber-preprocessor

2. cypress-terminal-report - https://www.npmjs.com/package/cypress-terminal-report

3. cypress-xpath - https://www.npmjs.com/package/cypress-xpath
