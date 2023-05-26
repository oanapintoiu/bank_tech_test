const BankAccount = require('./controllers/bankAccount');

const account = new BankAccount();

account.deposit(1000);
account.deposit(2000)
account.withdraw(500);

account.printStatement();

console.log();
