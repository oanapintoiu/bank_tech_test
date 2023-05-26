# Bank_Tech_Test README

## Table of Contents

[1. Specifications](#1-specifications)  
[2. Observations](#2-observations)  
[3. User Story](#3-user-story)  
[4. Diagram](#4-diagram)  
[5. Methodology Implementaion](#5-methodology-implementation)  
[6. Tickets](#6-tickets)  
[7. Test Covarage](#7-test-covarage)  
[8. Screenshots](#8-screenshots)  
[9. Instructions](#9-instructions)  
[10. Self assessment citeria](#10-self-assement)  

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

* The date in the spcification is for example purposes only, therefore when the program is run it will display the current date.

* The program will follow the STATEMENT specifications and:
  * use .00 or 2 decimals after the main number;
  * format the date as per speicfications DD/MM/YYYY;
  * use 2 pipe characters || to seperate each column;
  * if either the debit or credit amount is missing, this will be replaced by 2 pipe characters ||;
  * statement will display in reverse chronological order, starting with the latest transaction.

* The program will take into account if any withdrawls will cause the balance to become negative and display an error of 'Insufficient funds'.

## 3. User Story

```
1. As a user, I would like to deposit money into my account.
2. As a user, I would like to withdraw money from my account.
3. As a user, I would like to request the printing of my account statement that shows me the date, amount and balance.
4. As a user I would like my statement to have a header. 
5. As a user, I would like to see my latest transaction first when printing my statement.
```

## 4. Diagram

Diagram Version 1
<img src="bank_test_diagram.png"
alt="Bank Test Diagram">

Diagram Version 2
<img src="diagram_v2.png"
alt="Bank Test Diagram v2">

## 5. Methodology Implementation

### SRP vs SOC

Research was conducted on both SOC (separation of concerns principles) and SRP (single responsability principles) to determine the most effcicient, stable and easy to maintain solution. Due to the requirements and low complexity of the program, it was determined that both principles would overlap in terms of code structure and organization and would not look significantly different - if at all. Both principles focus on modularity, maintainability and testability by separating concerns.

For more information on SOC, click [here](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenseperation_concerns_guidl.htm#:~:text=Separation%20of%20concerns%20is%20a,and%20arrangement%20in%20software%20layers.).

For more information on SRC, click [here](https://en.wikipedia.org/wiki/Single-responsibility_principle).

For perspectives on the differences between SRP and SOC, you can view this article [here](https://www.petrosefthymiou.com/post/the-single-concern-vs-the-single-responsibility-principles), a second article [here](https://www.cloudnativemaster.com/post/single-responsibility-and-separation-of-concerns) and another [here](https://beyond-agility.com/what-is-the-difference-between-soc-and-srp/).

### Controller functionality

1. **BankAccount Controller**: handles the overall functionality of the program acting as the main interface, handling operations such as withdrawals, deposits and printing statements; delegates transaction related operations to the transaction controller and statement printing to the statement controller.

2. **Transaction Controller**: manages, records and stores all transactions associated with the bank account class/controller and provides the user with additional information such as the transaction date, credit and debit amount, and resulting balance.

3. **Statement Controller**: generates and prints the account statement in the desired format based on the stored transactions found in the transaction controller.

### Testing

1. **BankAccount Controller Tests**:

* key notes: declared a variable `account` using `let` that will represent the creation of a new instance of the `BankAccount class` at the start of each test.

* deposits (passed):
  * add 1000, expect balance to be 1000;
  * add 1000, add 1000 and expect balance to be 2000;

* withdrawals (developing):
  * add 2000, draw 1000 and expect balance to be 1000;
  * add 2000, draw 1000, draw 500 and expect balance to be 500;
  * should return an error message if withdrawal amount exceeds balance; add 500, draw 1000, exptect to receive "Insufficient funds.'. To achieve this test, a mock environment was created by using jest.spyOn to create a 'spy' on the console.log method. By using .toHaveBeenCalledWith() the test checks the statement in the console log was called with the correct error message. For more information, check the [Jest documentation here](https://jestjs.io/docs/jest-object#jestspyonobject-methodname-accesstype).

* updated tests so that the behaviour (`account.deposit()`, `account.withdraw()`) is furter tested, by focusing on testing the methods and their outcomes (via the state related assertions such as `expect(transaction.length).toBe();`):
  * deposit: expect balance to be 1000; transaction length 1, position in array 0, credit value 1000, debit value 0 and balance value 1000;
  * deposit scenatio 2: expect balance to be 2000; transaction length 2, position in array 0, credit value 2000, debit value 0 and balance value 2000;
  * withdrawal: expect balance to be 1000; transaction length 2, position in array 1, credit value 0, debit value 1000 and balance value 1000 from an initial balance of 2000 in balance array position 0;
  * withdrawal scenation 2: expect balance to be 1000; transaction length 3, position in array 1 for credit value 0, debit value 1000 and balance value 1000, position in array 2 for debit value 500 and position in array 0 for initial debit balance of 2000.

* tests need to be refactored??

2. **Transaction Controller Tests**:

* key notes:
  * created a seperate test file for this controller for ease of use;
  * used the previous test (for bankAccount.js) as a template and built up on it;
  * declared 3 variables: `account` - new instance of `BankAccount class`, `newTransaction` - new instantace of `Transaction class` and lastly `transactionsArray` which creates a new variable that can hold a referece to the actual transactions array found in the controller.  

* add new transaction (passed):
  * added new transaction

  * in a deposit transaction (passed):
  * checking the correct credit amount; (passed)
  * checking the correct debit amount; (passed)
  * checking the correct balance; (passed)
  * all tests passed by calling the addTransaction method directly into each test and assigning values for credit, debit and balance (`newTransaction.addTransaction(1000, 0, 1000)`).

  * in a deposit transaction (passed):
  * checking the correct credit, debit and balance amount; (failed with previous code where addTransaction method was called and values assigned to credit, debit and balance)
  * had to update code to now integrate the addTransaction method to the BankAccount class as per initial design; created a new instance variable `this.bankTransaction` that itself created a new instance of the `Transaction class` via `new Transaction` which will then allow for the definition and use of the `addTransaction` method found withing the `Transaction class`.
  * the assigned values for credit, debit and balance were removed from the test (`newTransaction.addTransaction(1000, 0, 1000)`) and were replaced with a call method within the bankAccount.js controller (`this.bankTransaction.addTransaction(amount, 0, this.balance);`, an example for the deposit method, where one should expect to be in a credit situation where credit has a amount, debit is 0 and the balance is also an ammount defined the number of deposits added)
  * `Transaction class` is no longer being called into the test as it is now being assigned via the `BankAccount class`;
  * checking the correct credit, debit and balance amount in a withdrawal situation;(passed)

3. **Statement Controller Tests**: tbc

## 6. Tickets

1. Develop Folder Structure ==Done==
2. Install nvm, istanbul, setup jest ==Done==
3. Develop tests and then code for deposit feature ==Done==
4. Develop tests and then code for withdrawal feature ==Done==
5. Work on developing tests for adding a transaction. Create an array 'this.transactions' in the transaction.js controller. ==DONE==
6. Define a addTransaction method in the transaction.js controllet and test individually, one at a time, that it adds a transaction with the following data: credit, debit, balance, new Date(). ==DONE==
7. Research how to call transaction.js controller into the bankAccount.js controller.  ==DONE==
8. Update diagram based on research and changes made in the code. ==DONE==
9.
10.

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
NVM is distributed using github - you can find installation instructions for the latest version [here](https://github.com/nvm-sh/nvm#installing-and-updating).

```
# You'll need to run a command that looks like this:
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

# To see test coverage then run: 
$ test
```

<ins> Step 5: Running the program/app in REPL:

```
# Run node to open the node REPL:
$ node

# Require the class within the file:
$ const BankAccount = require('./controllers/bankAccount');

# Create a new instance of the class, i.e. create a new bank accout: 
$ const account = new BankAccount();

# Deposit the desired amount: 
$ account.deposit(1000);
$ account.deposit(2000);

# Withdraw the desired amount: 
$ account.withdraw(500);

# Print statement: 
$
```

## 10. Self-assement

### Questions and Answers

Normal Cnstraints:

```
1. Did you start a feature test?
Yes/No/I don't know

2. Do the tests pass?
Yes/No/I don't know

3. Is the test coverage high? (>95%)
Yes/No/I don't know

4. Do the unit tests mock the dependencies of the object they are testing?
Yes/No/I don't know
```

Additional Constraints:

```
5. Where possible, do you always test for the behaviour rather than the state? 
Yes/No/I don't know

6. Do the test descriptions read clearly?
Yes/No/I don't know

7. Do you make appropriate use of the testing framework's method to keep your test code clean? 
Yes/No/I don't know
```

Strict Constraints:

```
8. Does your project commit history clearly show evidence of a thorough TDD process?
Yes/No/I don't know

9. Have you mocked the dependecy Time?
Yes/No/I don't know

10. Personal perception of the quality of testing (scale of 1-4):
1, 2, 3, 4
```

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: <https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit>

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->