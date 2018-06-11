alert("CONNECTED");

// function isEven(number) {

// 	if(number % 2 === 0){
// 		return true;
// 	}else if(number % 1 === 0){
// 		return false;
// 	}
// }

function isEven(num) {return num % 2 === 0; }


// ******************************** //
function factorial(number) {
	var factorial = 1;

	if( number < 0 ) { console.log("Invalid numer"); }
		
	for(var i = 2; i <= number; i++) {
		factorial *= i;
	}
	
	return factorial;
}

// ******************************** //

function kebabToSnake(str) {

	var newStr = str.replace(/-/g, "_");

	return newStr;
}