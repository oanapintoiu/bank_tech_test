# Bank Tech Test README Summary 

1. Specifications
2. Observations
3. User Story
4. Methodology Implementaion
5. Diagram  
6. Tickets
7. Test Covarage
8. Screenshots
9. Instructions
10. Self assessment citeria

## 1. Specifications

### Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

### Specification

#### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

#### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```


## 2. Observations


## 3. User Story


## 4. Methodology Implementation


## 5. Diagram


## 6. Tickets


## 7. Test Covarage


## 8. Screenshots


## 9. Instructions

### Running JavaScript

#### Introduction

This program uses Javascript, a dynamic computer programming language and one of the core technologies for developing web page content, alongside HTML and CSS. 

For this exercise to be run, a program called Node.js will have to be installed. Node.js is a JavaScript runtime, i.e. it reads JavaScript code and executes it as a programs

<ins> Step 1: Clone this repo to your machine: 

```
# Create a folder/directory where you would like to store the cloned repo: 
$ mkdir cloned-repo

# Then switch to the newly created directory:
$ cd cloned-repo

# Inside the new fodler clone the repo, command which will copy all the existing files from the Git repository:
$ git clone link-to-git-repository

```

<ins> Step 2: Install nvm

Nvm stands for Node Version Manager, a tool that allows you to install and swtich in between different versions of Node. 

```
# NVM is distributed using github - you can find installation instructions for the latest version [here](https://github.com/nvm-sh/nvm#installing-and-updating). You'll need to run a command that looks like this:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Once that step is complete, reload your ~/.zshrc file:
source ~/.zshrc

# Now you can install Node by running: 
$ nvm install node
```


<ins> Step 3: Setting up the project

```
# When NVM is installed, once can automatically install and use the latest, stable version. You can set up the enviroment by running: 

$ nvm use node

#The next step would be to set up the folder structure, however this is not required as this has been already done. 

# Initialize NPM project, i.e. create the package.json file: 
$ npm init -y

# Add the jest package to run tests in the tests directory:
$ npm add jest
```

<ins> Step 4: Running tests: 

```
# Please check that all tests are running in the test directory before running the program in REPL: 

$ jest
```

<ins> Step 5: Running the program/app in REPL: 

```
# Run node to open the node REPL:
$ node

# Require the class within the file:
$

# Create a new instance of the class, i.e. create a new bank accout: 
$

# Deposit the desired amount: 
$

# Withdraw the desired amount: 
$

# Print statement: 
$
```


## 10. Self-assement criteria

### Self-assessment

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit




<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->