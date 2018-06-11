alert("CONNECTED");	

// CREATE SECRET NUMBER
var secretNumber = 4;

// ASK USER FOR A GUESS
var guess = prompt("Guess a number ?");


// CONVERTING A STRING 'GUESS' TO A NUMBER
var guessAsNumber = Number(guess);

// CHECK IF THEY GUESS RIGHT
if(guessAsNumber === secretNumber){
	alert("You got it right!");
}

// CHECK IF GUESS IS HIGHER
else if(guessAsNumber > secretNumber){
	alert("Numer too high, guess again!");
}

// CHECK IF IS LOWER
else{
	alert("Numer too low, guess again!");
}

