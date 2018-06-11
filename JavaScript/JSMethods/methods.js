alert("CONNECTED");



var obj = {
    name: "starlyn",
    age: 21,
    isCool: true,
    friends: ["bob", "tina"],
    add: function(x,y){
        return x + y;
    }
}

var dogSpace = {};
var catSpace = {};

dogSpace.speak = function() {
	return "WOOF";
}

catSpace.speak = function() {
	return "MEOW";
}

/**************/
var comments = {};

comments.data = ["Good Job", "Bad Job", "bye", "hello world"];

function print(array){
	array.forEach(function(element){
		console.log(element);
	});
}

// HOW TO BE USING THE KEYWORD 'THIS'
comments.print = function(){
    this.data.forEach(function(element){
        console.log(element);
    });
}
