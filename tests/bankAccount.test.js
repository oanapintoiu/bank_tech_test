const BankAccount = require('../controllers/bankAccount');

describe('Bank Account', () => {
  let account;
  let transactionArray;
  let spy;

  beforeEach(() => {
    account = new BankAccount();
    transactionArray = account.bankTransaction.transactions;
    spy = jest.spyOn(console, 'log');
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

    it('should not allow deposit with more than 2 decimal places', () => {
      account.deposit(1000.123);
      expect(account.balance).toBe(0);
      expect(transactionArray.length).toBe(0);
      expect(spy).toHaveBeenCalledWith('Error: Only 2 decimal places allowed.');
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
        expect(transactionArray.length).toBe(2);
        expect(transactionArray[1].credit).toBe(0);
        expect(transactionArray[1].debit).toBe(1000);
        expect(transactionArray[1].balance).toBe(1000);
        expect(transactionArray[0].balance).toBe(2000);
      });

      it('should decrease the balance from 2000 to 1000', () => {
        account.deposit(2000);
        account.withdraw(1000);
        account.withdraw(500);
        expect(account.balance).toBe(500);
        expect(transactionArray.length).toBe(3);
        expect(transactionArray[1].credit).toBe(0);
        expect(transactionArray[1].debit).toBe(1000);
        expect(transactionArray[2].debit).toBe(500);
        expect(transactionArray[1].balance).toBe(1000);
        expect(transactionArray[0].balance).toBe(2000);
      });

      it('should return an error message if withdrawal amount exceeds balance', () => {
        account.deposit(500);
        account.withdraw(1000);
        expect(account.balance).toBe(500);
        expect(spy).toHaveBeenCalledWith('Error: Insufficient funds.');
      });

      it('should not allow deposit with more than 2 decimal places', () => {
        account.deposit(1100);
        account.withdraw(1000.123);
        expect(account.balance).toBe(1100);
        expect(transactionArray.length).toBe(1);
        expect(spy).toHaveBeenCalledWith(
          'Error: Only 2 decimal places allowed.',
        );
      });
    });
  });
});
