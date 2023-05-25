class Transaction {
    constructor () {
        this.transactions = [];
    }
    
    addTransaction(credit) {
        const transaction = {
            credit,
        };
        this.transactions.push(transaction);
    }

    }
    
    module.exports = Transaction;