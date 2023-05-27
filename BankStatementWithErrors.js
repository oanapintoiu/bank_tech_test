const BankAccount = require('./controllers/bankAccount');

const account = new BankAccount();

account.deposit(1000);
account.deposit(2000);
account.withdraw(500);

account.deposit(1000.152);
account.withdraw(1000.123);
account.withdraw(5000);

account.printStatement();

console.log();
