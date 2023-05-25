class Transaction {
    constructor () {
        this.transactions = [];
    }
    
    addTransaction(credit, debit) {
        const transaction = {
            credit,
            debit,
        };
        this.transactions.push(transaction);
    }

    }
    
    module.exports = Transaction;