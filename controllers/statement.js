class Statement {
  constructor(bankStatement) {
    this.bankStatement = bankStatement;
  }

  static formatAmount(amount) {
    return amount !== 0 ? amount.toFixed(2) : '';
  }

  printStatement() {
    console.log('date || credit || debit || balance');
    this.bankStatement.transactions.reverse().forEach((transaction) => {
      console.log(
        `${transaction.date.toLocaleDateString('en-GB')} ||${
          Statement.formatAmount(transaction.credit)
            ? ` ${Statement.formatAmount(transaction.credit)}`
            : ''
        } ||${
          Statement.formatAmount(transaction.debit)
            ? ` ${Statement.formatAmount(transaction.debit)}`
            : ''
        } || ${Statement.formatAmount(transaction.balance)}`,
      );
    });
  }
}

module.exports = Statement;
