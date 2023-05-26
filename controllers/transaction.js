class Transaction {
  constructor() {
    this.transactions = [];
  }

  addTransaction(credit, debit, balance) {
    const transaction = {
      credit,
      debit,
      balance,
    };
    this.transactions.push(transaction);
  }
}

module.exports = Transaction;
