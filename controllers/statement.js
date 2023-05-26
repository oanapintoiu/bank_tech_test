class Statement {
  constructor(bankStatement) {
    this.bankStatement = bankStatement;
  }

  formatAmount(amount) {
    return amount !== 0 ? amount.toFixed(2) : '';
  }

  printStatement() {
    console.log('date || credit || debit || balance');
    this.bankStatement.transactions.reverse().forEach((transaction) => {
      console.log(
        `${transaction.date.toLocaleDateString('en-GB')} || ${this.formatAmount(
          transaction.credit
        )} || ${this.formatAmount(transaction.debit)}|| ${this.formatAmount(
          transaction.balance
        )}`
      );
    });
  }
}

module.exports = Statement;
