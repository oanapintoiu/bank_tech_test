const Statement = require('./statement');
const Transaction = require('./transaction');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.bankTransaction = new Transaction();
    this.bankStatement = new Statement(this.bankTransaction);
  }

  deposit(amount) {
    this.balance += amount;
    this.bankTransaction.addTransaction(amount, 0, this.balance);
  }

  withdraw(amount) {
    if (this.balance - amount < 0) {
      console.log('Insufficient funds.');
    } else {
      this.balance -= amount;
      this.bankTransaction.addTransaction(0, amount, this.balance);
    }
  }

  printStatement() {
    this.bankStatement.printStatement();
  }
}

module.exports = BankAccount;
