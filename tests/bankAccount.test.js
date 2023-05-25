const BankAccount = require("../controllers/bankAccount");

describe('Bank Account', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  });

  describe('deposit', () => {
    it('should increase the balance by 1000', () => {
      account.deposit(1000);
      expect(account.balance).toBe(1000);
    });

    it('should increase the balance by 1000', () => {
        account.deposit(1000);
        account.deposit(1000);
        expect(account.balance).toBe(2000);
        
      });


  });
});
