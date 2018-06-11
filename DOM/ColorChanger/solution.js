alert("CONNECTED");

// GETTING THE BODY OF THE PAGE
var body = document.body;

// BOOLEAN VARIABLE
var hasColor = false;

// GETTING THE BUTTON ID
var button = document.getElementById("changeBackgroundColor");


// FUNCTION THAT CHANGES THE BACKGROUND COLOR
function changeColor(){
  if(hasColor){
    body.style.background = "white"
    hasColor = false;
  }else{
    body.style.background = "yellow";
    hasColor = true;
  }

  // OR NEGATING THE BOOLEAN
  // hasColor = !hasColor;
}

// EVENT LISTENER FOR WHEN THE BUTTON IS CLICKED
button.addEventListener("click", changeColor);
