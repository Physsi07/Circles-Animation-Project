alert("Connected");

function printReverse(array) {
  console.log("Inside of the printReverse");
  for(var i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
}

printReverse([1, 2, 3, 4, 5]);
