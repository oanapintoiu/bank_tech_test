const BankAccount = require('../controllers/bankAccount');

describe('transactions feature within the Bank Account', () => {
  let account;
  let transactionArray;

  beforeEach(() => {
    account = new BankAccount();
    transactionArray = account.bankTransaction.transactions;
  });

  describe('transaction', () => {
    it('should add a transaction with the correct credit amount and balance', () => {
      account.deposit(1000);
      expect(transactionArray[0].credit).toBe(1000);
      expect(transactionArray.length).toBe(1);
      expect(transactionArray[0].debit).toBe(0);
      expect(transactionArray[0].balance).toBe(1000);
    });

    it('should add a transaction with the correct debit amount and balance', () => {
      account.deposit(1500);
      account.withdraw(500);
      expect(transactionArray[1].credit).toBe(0);
      expect(transactionArray.length).toBe(2);
      expect(transactionArray[1].debit).toBe(500);
      expect(transactionArray[1].balance).toBe(1000);
    });
  });
});
