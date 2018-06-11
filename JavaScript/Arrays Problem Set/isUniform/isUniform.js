alert("CONNECTED");

function isUniform(array){

  // VARIABLE THAT EQUAL TO THE VERY FIRST ITEM
  var pointer = array[0];

  // LOOP THROUGH THE ARRAY AND COMPARE THAT FIRST ITEM TO EVERY OTHER ITEM
  for(var i = 1; i < array.length; i++){
    if (array[i] !== pointer) {
      return false;
    }
  }
  return true;
}

isUniform([1, 3, 1, 1, 1]);
