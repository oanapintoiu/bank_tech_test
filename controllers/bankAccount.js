const Statement = require('./statement');
const Transaction = require('./transaction');

const isValidAmount = (amount) => {
  const formattedAmount = parseFloat(amount.toFixed(2));
  return formattedAmount === amount;
};

class BankAccount {
  constructor() {
    this.balance = 0;
    this.bankTransaction = new Transaction();
    this.bankStatement = new Statement(this.bankTransaction);
  }

  deposit(amount) {
    if (!isValidAmount(amount)) {
      console.log('Error: Only 2 decimal places allowed.');
      return;
    }

    this.balance += amount;
    this.bankTransaction.addTransaction(amount, 0, this.balance);
  }

  withdraw(amount) {
    if (!isValidAmount(amount)) {
      console.log('Error: Only 2 decimal places allowed.');
      return;
    }

    if (this.balance - amount < 0) {
      console.log('Error: Insufficient funds.');
      return;
    }

    this.balance -= amount;
    this.bankTransaction.addTransaction(0, amount, this.balance);
  }

  printStatement() {
    this.bankStatement.printStatement();
  }
}

module.exports = BankAccount;
