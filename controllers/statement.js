class Statement {
  constructor(bankStatement) {
    this.bankStatement = bankStatement;
  }

  printStatement() {
    console.log('credit, debit, balance');
    this.bankStatement.transactions.forEach((transaction) => {
      console.log(transaction.credit, transaction.debit, transaction.balance);
    });
  }
}

module.exports = Statement;
