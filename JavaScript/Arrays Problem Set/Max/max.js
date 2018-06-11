alert("Connected");

function max(array){

  // VARIABLE FOR MY TOTAL
  var max = array[0];

  //LOOPING THROUGH ALL THE ELEMENTS AND GETTING THE MAX
  for(var i = 1; i <= array.length; i++){
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
