
class Calculator{
	constructor(){
		//takes in nothing
		//make storage for the operator and the numbers
		this.operator = '';
		this.numbers = [];
		this.result = null;
	}
	loadOperator( operator ){
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
		if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
			//save the op to the constructor storage
			this.operator = operator;
			//return true
			return true;
		} else {
			//or return false if not the right operator
			return false;
		}
	}
	loadNumber( numbers ){
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		if (Number.isInteger(numbers) && this.numbers.length <= 2) {
			numbers += this.numbers
			//if it is a number, and we have 2 or fewer numbers, store it
			let numArr = (""+numbers).split(""); //converting to array to get length and store
			this.numbers = numArr;
			//return the number of numbers stored
			console.log('numArr length: ', numArr.length);
			console.log("numArr: ", numArr);
			return numArr.length;
		} else {
			//otherwise return false (too many numbers stored)
			return false;
		}
	}
	calculate(){
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		console.log('Calculate Numbers:', this.numbers);
		console.log('Calculate Operator:', this.operator);
		switch (this.operator) {
			case "+":
				this.result = this.numbers[0] + this.numbers[1];
				break;
			case "-":
				this.result = this.numbers[0] - this.numbers[1];
				break;
			case "*":
				this.result = this.numbers[0] * this.numbers[1];
				break;
			case "/":
				this.result = this.numbers[0] / this.numbers[1];
				break;
			default:
				return false;
		}
		console.log('Result:', this.result);
		//clears out the stored numbers
		this.numbers[0] = null;
		this.numbers[1] = null;
		//returns the calculated result
		return this.result;
	}
}