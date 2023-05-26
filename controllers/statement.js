class Statement {
  constructor(bankStatement) {
    this.bankStatement = bankStatement;
  }

  printStatement() {
    console.log('credit');
    this.bankStatement.transactions.forEach((transaction) => {
      console.log(transaction.credit);
    });
  }
}

module.exports = Statement;
