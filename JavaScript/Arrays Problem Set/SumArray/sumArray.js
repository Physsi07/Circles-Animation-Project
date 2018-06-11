alert("CONNECTED");

function sumArray(array){
  var total = 0;

  array.forEach(function(element){
    total += element;
  });

  return total;
}


sumArray([2, 4, 7]);
