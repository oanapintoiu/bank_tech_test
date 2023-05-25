const BankAccount = require("../controllers/bankAccount");
const Transaction = require("../controllers/transaction");

describe("transactions feature within the Bank Account", () => {
  let account;
  let newTransaction;
  let transactionArray;

  beforeEach(() => {
    account = new BankAccount();
    newTransaction = new Transaction(); 
    transactionArray = newTransaction.transactions; 
  });

  describe("transaction", () => {
    it("should add a transaction with the correct credit amount", () => {
      account.deposit(1000);
      newTransaction.addTransaction(1000, 0); // calls the add transaction method with the correct credit amount
      expect(transactionArray[0].credit).toBe(1000);
      expect(transactionArray.length).toBe(1);
      expect(transactionArray[0].debit).toBe(0);
    });
  });
});
