const Transaction = require('./transaction');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.bankTransaction = new Transaction();
  }

  deposit(amount) {
    this.balance += amount;
    this.bankTransaction.addTransaction(amount, 0, this.balance);
  }

  withdraw(amount) {
    if (this.balance - amount < 0) {
    // eslint-disable-next-line no-console
      console.log('Insufficient funds.');
    } else {
      this.balance -= amount;
      this.bankTransaction.addTransaction(0, amount, this.balance);
    }
  }
}

module.exports = BankAccount;
