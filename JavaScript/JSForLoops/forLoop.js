alert("CONNECTED");

// A LOOP THAT PRINTS ALL THE NUMBERS FROM -10 TO 19 //
console.log("PRINT THE NUMBER FROM -10 TO YOUR NUMBER --> allNumbers");
function allNumbers(number){
	for(var i = -10; i <= number; i++){
		console.log(i);
	}
}

// A LOOP THAT PRINTS ALL THE ODD NUMBERS FROM 10 TO 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 TO YOUR NUMBER --> evenNumber");
function evenNumber(number){
	for (var i = 10; i <= number; i++) {
		if(i % 2 === 0){
			console.log(i)
		}
	}
}

// A LOOP THAT PRINTS ALL THE EVEN NUBERS FROM 300 TO 333
console.log("PRINT ALL ODD NUMBERS BETWEEN 0 TO YOUR NUMBER --> oddNumber");
function oddNumber(number){
	for (var i = 0; i <= number; i++) {
		if(i % 2 !== 0){
			console.log(i);
		}
	}
}
// A FOR LOOP THAT PRINTS ALL THE NUMBERS THAT ARE DIVISIBLE BY 3 AND 50
console.log("PRINT ALL THE NUMBERS DEVISIBLE BY 3 AND 5 BETWEEN 5 AND 50 --> threeAndFive");
function threeAndFive(number){
	for(var i = 5; i <= number; i++){
		if(i % 5 === 0 && i % 3 === 0){
			console.log(i);
		}
	}
}

// CREATINNG A FUNCTION FOR THE FIZZBUZZ WITH THE FOR LOOP
console.log("PRINTING 'FIZZ' IS DIVISIBLE BY 5 , 'BUZZ' IS DIVISIBLE BY 5 OR 'FIZZBUZZ' BY BOTH --> fizzBuzz");
function fizzBuzz(number){
  for(var pointer = 1; pointer <= number; pointer++){
    if(pointer % 5 === 0 && pointer % 3 === 0){
			console.log("FIZZBUZZ");
		}else if (pointer % 5 === 0) {
			console.log("FIZZ");
		}else if (pointer % 3 === 0) {
			console.log("BUZZ");
		}
		else{
			console.log(pointer);
		}
  }
}
