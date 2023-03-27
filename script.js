
const customer = {
    name: "John Doe's",
    balance: 10000
};


function deposit(amount) {
    customer.balance += amount;
    console.log(`Deposited ${amount} into ${customer.name} account. New balance is ${customer.balance}.`);
}


function withdraw(amount) {
    if (amount > customer.balance) {
        console.log(`Insufficient balance: Cannot withdraw ${amount} from ${customer.name}account.`);
    } else {
        customer.balance -= amount;
        console.log(`Withdrew ${amount} from ${customer.name} account. New balance is ${customer.balance}.`);
    }
}


deposit(15000);
withdraw(5000);
withdraw(25000);
