var first = -10;

while(first <= 19){
	console.log(first);
	first++;
}

console.log("/************************/");

var second = 10;

while(second <= 40){
	console.log(second);
	second+=2;
}

console.log("/************************/");

var third = 300;

while(third <= 333){
	if (third % 2 === 0) {
		third++;
	}
	else{
		console.log(third);
		third++;
	}
}

console.log("/************************/");

var four = 5;

while(four <= 50){
	if(four % 5 === 0 && four % 3 === 0){
		console.log(four);
		four++;
	}
	else{
		four++;
	}
}
