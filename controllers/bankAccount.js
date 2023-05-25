class BankAccount {
constructor() {
    this.balance = 0;
}

deposit(amount) {
    this.balance += amount;
}

withdraw(amount) {
    if (this.balance - amount < 0) {
        console.log("Insufficient funds.")
    } else {
    this.balance -= amount;
    }
}

}

module.exports = BankAccount;