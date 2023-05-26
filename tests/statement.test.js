const BankAccount = require('../controllers/bankAccount');

let consoleSpy;
let account;

beforeEach(() => {
  account = new BankAccount();
  consoleSpy = jest.spyOn(console, 'log');
});

describe('print statement', () => {
  
  it('should print the account statement displaying a credit, debit, balance string thier values', () => {
    account.deposit(1000);

    account.printStatement();

    expect(consoleSpy).toHaveBeenCalledWith('credit, debit, balance');
    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Date), 1000, 0, 1000);
  });

});
