

class Bank{
	constructor(bankName){
		//takes in the name of the bank.
		//makes an object to store all accounts into
		this.bankName = bankName;
		this.bankAccounts = {};
	}
	makeAccount( accountNumber ){
		//makes an account
		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
		if(this.bankAccounts.hasOwnProperty(accountNumber)) {
			//if already exists, returns false
			return false;
		} else {
			//otherwise makes an new Account object, storing it into the storage object in the constructor
			const newAccount = new Account();
			//returns the Account object that was constructed
			return this.bankAccounts[accountNumber] = newAccount;
		}
			
	}
	checkForAccount( accountNumber ){
		//checks if an account exists or not
		//takes in the account number of an account
		if(this.bankAccounts.hasOwnProperty(accountNumber)) {
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
			return true;
		} else {
			return false;
		}
		
	}
	removeAccount( accountNumber ){
		//removes an account
		//takes in an account number
		if(this.bankAccounts.hasOwnProperty(accountNumber)) {
			//if the account is not empty, returns
			//'account is not empty'
			if(this.bankAccounts.accountNumber > 0){
				return 'account is not empty';
			} else {
				//otherwise deletes the account from the constructor storage
				delete this.bankAccounts[accountNumber];
				//returns 
				return "account " + accountNumber + " deleted"
			}
		} else {
			//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
			return "account " + accountNumber +  " does not exist"
		}

	}
	deposit( accountNumber, depositAmount ){
		//deposits money into an account
		//takes in an account number and a numeric amount
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
	}
	withdraw( accountNumber, withdrawAmount ){
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
	}
}

const testBank = new Bank;
testBank.makeAccount('32457639845');
testBank.removeAccount('32457639845');