alert("CONNECTED");

// FOUR DIFFERENT WAYS TO CALL SOMETHING FROM AN HTML FILE //
var tag1ForP1 = document.getElementById("first");
console.log("First " + tag1ForP1);

var tag2ForP1 = document.getElementsByClassName("special")[0];
console.log("Second " + tag2ForP1);

var tag3ForP1 = document.getElementsByTagName('p1');
console.log("Third " + tag3ForP1);

var tag4ForP1 = document.querySelector("#first");
console.log("Four" + tag4ForP1);
