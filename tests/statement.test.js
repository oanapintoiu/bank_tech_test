const { afterEach } = require('jest-circus');
const BankAccount = require('../controllers/bankAccount');

let consoleSpy;
let account;
let timeSpy;

beforeEach(() => {
  account = new BankAccount();
  consoleSpy = jest.spyOn(console, 'log');
  const mockedDate = new Date(2023, 5, 26)
  timeSpy = jest.spyOn(global, "Date").mockImplementation(() => {
    return mockedDate;
  });
});

afterEach(() => {
  timeSpy.mockRestore();
})

describe('print statement', () => {
  
  it('should print the account statement displaying a credit, debit, balance string thier values', () => {
    account.deposit(1000);

    account.printStatement();

    expect(consoleSpy).toHaveBeenCalledWith('date || credit || debit || balance');
    expect(consoleSpy).toHaveBeenCalledWith("26/06/2023", 1000, 0, 1000);
  });

  describe("mock the dependency of time", () => {
    it('tests the date 26th of June 2023', () => {
      const today = new Date();

      expect(today.toLocaleDateString('en-GB')).toBe('26/06/2023')
    })
  })

});
