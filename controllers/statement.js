class Statement {
  constructor(bankStatement) {
    this.bankStatement = bankStatement;
  }

  printStatement() {
    console.log('date || credit || debit || balance');
    this.bankStatement.transactions.forEach((transaction) => {
      console.log(transaction.date.toLocaleDateString('en-GB'), transaction.credit, transaction.debit, transaction.balance);
    });
  }
}

module.exports = Statement;
