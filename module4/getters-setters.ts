class BankAccountt {
    public id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // Getter for _balance
    get balance(): number {
        return this._balance;
    }

    // Setter for adding deposit
    set deposit(amount: number) {
        this._balance += amount;
    }

    // Method to get balance with message
    getBalance(): number {
        console.log(`My Current Balance: ${this.balance}`);
        return this.balance;
    }

    // Method to add deposit directly
    addDeposit(amount: number) {
        this._balance += amount;
    }
}

class StudentAccountt extends BankAccountt {
    depositAndCheckBalance() {
        this.addDeposit(50); // Example: Adding 50 to balance
        console.log(`After deposit using method: ${this.balance}`);
    }
}

// Using StudentAccount
const studentAccountt = new StudentAccountt(4, 'Student', 50);
studentAccountt.depositAndCheckBalance(); // Output: After deposit using method: 100
