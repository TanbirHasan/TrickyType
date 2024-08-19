class BankAccount {
    public id: number;
    public name: string;
    protected balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    getBalance() {
        console.log(`My Current Balance: ${this.balance}`);
    }

    addDeposit(amount: number) {
        this.balance = this.balance + amount;
    }
}

class StudentAccount extends BankAccount {
    test() {
        this.addDeposit(100); // Example: Adding 100 to balance
        console.log(`After deposit: ${this.balance}`);
    }
}

const myAccount = new BankAccount(3, 'Elon', 40);
console.log(myAccount);

const studentAccount = new StudentAccount(4, 'Student', 50);
studentAccount.test(); // This will add 100 to the balance and print it
studentAccount.getBalance(); // This will show the updated balance
