window.setTimeout(function() {
  
  	// put all of your JS code from the lecture here

	alert("CONNECTED");

	// // ASKING THE USER //
	// var firstName = prompt("What is your first name?");
	// var lastName = prompt("What is your lastname?");
	// var age = prompt("What is your age?");

	// var fullName = firstName + " " + lastName;

	// // PRINTING OUT TO THE CONSOLE //
	// console.log("Your full name is " + fullName);
	// console.log("Your age is " + age + " years old" );

	// *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***  //  

	// ASKING THE USER //
	var age = prompt("what is your age?");
	var result = age * 365.25;
	alert(age + " is roughly " + result + " days ");
	console.log(age + " is roughly " + result + " days ");


}, 500);
