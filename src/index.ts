//Properties of the Users class (Bank Example)

class Users {
    id: number;
    name: string;
    balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    addMoney(amount: number) {
        this.balance += amount;
    }

}

const User1 = new Users(1, 'John', 1000);
const User2 = new Users(2, 'Jane', 2000);
User1.addMoney(500);
console.log(User1);