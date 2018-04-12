let genButton = $('#genButton');
let rollButton = $('#rollButton');
let sumButton = $('#sumButton');
let diceContainer = $('#diceContainer');
let allDice = [];

class Die {
	constructor() {
		this.div = $('<div />');
		this.div.addClass('die');
		this.roll();
		$('body').append(this.div);
		this.div.click(() => {
			this.roll();
		});
		this.div.dblclick(() => {
			let index = allDice.indexOf(this);
			this.div.remove();
			allDice.splice(index, 1);
		});
	}
	roll() {
		let dieFace = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
		let num = Math.floor(Math.random() * 6);
		this.value = num + 1;
		console.log(this.value);
		this.div.text(dieFace[num]);
	}
}

genButton.click(() => {
	let d = new Die();
	allDice.push(d);
	console.log(allDice);
});
rollButton.click(() => {
	for (let i = 0; i < allDice.length; i++) {
		allDice[i].roll();
	}
});

sumButton.click(() => {
	let finalSum = sumDice();
	alert(`The sum is ${finalSum}`);
});

function sumDice() {
	let sum = 0;
	for (let i = 0; i < allDice.length; i++) {
		sum += allDice[i].value;
	}
	return sum;
}
