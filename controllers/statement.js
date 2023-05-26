class Statement {
  constructor(bankStatement) {
    this.bankStatement = bankStatement;
  }

  printStatement() {
    console.log("date || credit || debit || balance");
    this.bankStatement.transactions.reverse().forEach((transaction) => {
      console.log(
        `${transaction.date.toLocaleDateString("en-GB")} || ${
          transaction.credit !== 0 ? transaction.credit.toFixed(2) : ""
        } || ${transaction.debit !== 0 ? transaction.debit.toFixed(2) : ""} || ${
          transaction.balance.toFixed(2)
        }`
      );
    });
  }
}

module.exports = Statement;
