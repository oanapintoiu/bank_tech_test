const BankAccount = require('../controllers/bankAccount');

let consoleSpy;
let account;

beforeEach(() => {
  account = new BankAccount();
  consoleSpy = jest.spyOn(console, 'log');
});

describe('print statement', () => {
  it('should print the account statement displaying a credit string its value', () => {
    account.deposit(1000);

    account.printStatement();

    expect(consoleSpy).toHaveBeenCalledWith('credit');
    expect(consoleSpy).toHaveBeenCalledWith(1000);
  });
});
