const BankAccount = require('../controllers/bankAccount');

describe('Bank Account', () => {
  let account;
  let transactionArray;

  beforeEach(() => {
    account = new BankAccount();
    transactionArray = account.bankTransaction.transactions;
  });

  describe('deposit feature', () => {
    it('should increase the balance by 1000', () => {
      account.deposit(1000);
      expect(account.balance).toBe(1000);
      expect(transactionArray.length).toBe(1);
      expect(transactionArray[0].credit).toBe(1000);
      expect(transactionArray[0].debit).toBe(0);
      expect(transactionArray[0].balance).toBe(1000);
    });

    it('should increase the balance by 1000', () => {
      account.deposit(1000);
      account.deposit(1000);
      expect(account.balance).toBe(2000);
      expect(transactionArray.length).toBe(2);
      expect(transactionArray[0].credit).toBe(1000);
      expect(transactionArray[0].debit).toBe(0);
      expect(transactionArray[0].balance).toBe(1000);
    });

    describe('withdrawal feature', () => {
      it('should decrease the balance from 2000 to 1000', () => {
        account.deposit(2000);
        account.withdraw(1000);
        expect(account.balance).toBe(1000);
      });

      it('should decrease the balance from 2000 to 1000', () => {
        account.deposit(2000);
        account.withdraw(1000);
        account.withdraw(500);
        expect(account.balance).toBe(500);
      });

      it('should return an error message if withdrawal amount exceeds balance', () => {
        const spy = jest.spyOn(console, 'log');
        account.deposit(500);
        account.withdraw(1000);
        expect(account.balance).toBe(500);
        expect(spy).toHaveBeenCalledWith('Insufficient funds.');
      });
    });
  });
});
