

class Account{
	constructor(){
		//store the amount of money in the account
		this.totalAmount = 0;
	}
	add( amount ){
		//add money to the amount stored in the account
		//takes in an amount
		let moneyAmount = amount;
		//adds it to the existing amount
		this.totalAmount += moneyAmount;
		//returns the new amount in the account
		return this.totalAmount
	}
	remove( amount ){
		//removes funds from an account
		let moneyAmount = amount;
		//check if the amount to withdraw is more than the account
		if (moneyAmount > this.totalAmount) {
			//if more, only withdraw the amount in the account, not more
			this.totalAmount -= this.totalAmount;
		} else {
			//if less, withdraw the amount specified
			this.totalAmount -= moneyAmount;
		}
		//return the amount actually withdrawn
		return this.totalAmount;
	}
	getAmount(){
		//returns the amount in the account
		return this.totalAmount;
	}
}

const test1 = new Account();
test1.add(100);
test1.remove(50);
console.log('GETAMOUNT', test1.getAmount());