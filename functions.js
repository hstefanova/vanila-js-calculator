// https://www.youtube.com/watch?v=6v4vBXL-qkY
var oneBtn = document.getElementById('calc-one');
var twoBtn = document.getElementById('calc-two');
var threeBtn = document.getElementById('calc-three');
var fourBtn = document.getElementById('calc-four');
var fiveBtn = document.getElementById('calc-five');
var sixBtn = document.getElementById('calc-six');
var sevenBtn = document.getElementById('calc-seven');
var eightBtn = document.getElementById('calc-eight');
var nineBtn = document.getElementById('calc-nine');
var zeroBtn = document.getElementById('calc-zero');

var decimalBtn = document.getElementById('calc-decimal');
var clearBtn = document.getElementById('calc-clear');
var backspaceBtn = document.getElementById('calc-backspace');
var displayValElement = document.getElementById('calc-display-val');

var plusBtn = document.getElementById('calc-multiply');
var minusBtn = document.getElementById('calc-minus');
var multiplyBtn = document.getElementById('calc-multiply');
var divideBtn = document.getElementById('calc-divide');
var equalBtn = document.getElementById('calc-equal');

// all of the calc numbers 0 ... 9
var calcNumberBtns = document.getElementsByClassName('calc-btn-num');
var calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

// add click event listener to each number btn
for(var i = 0; i < calcNumberBtns.length; i++) {
	calcNumberBtns[i].addEventListener('click', updateDisplayVal, false)
}

//add click event listener to each operator
// for( let i = 0; i <= calcOperatorBtns.length; i++ ) {
// 	calcOperatorBtns[i].addEventListener('click', performOperation, false)
// }

// Stop to 28:00 minute
// var updateDisplayVal = () => {
// 	alert("test")
// }

function updateDisplayVal(clickedNumber) {
	var numberValue = Number(clickedNumber.target.textContent);
	displayValElement.textContent += numberValue;

	console.log(typeof(displayValElement.textContent))
}

// Backspace delete the last symbol

// Clear - the whole value

var performOperation = () => {
	
}



// var btns = document.querySelectorAll('button');

// console.log(btns)

// for(var i = 0; i < btns.length; i++) {
// 	btns[i].addEventListener('click', function (event) {
// 		console.log('clicked');
// 	}, false);
// }