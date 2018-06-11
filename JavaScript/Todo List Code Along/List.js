window.setTimeout(function() {

  // put all of your JS code from the lecture here
	var todos = [];

	var input = prompt("What would you like to do ?");

	while(input !== "quit"){

		// HANDLES INPUT
		if(input === "list"){
      listTodos();
		}else if(input === "new"){
			addTodo();
		}else if(input === "delete"){
      deleteTodo();
    }
      // ASK AGAING FOR A NEW INPUT
      input = prompt("What would you like to do ?");
	}
	console.log("OK, YOU QUIT THE APP");

  // FUNCTION THAT LISTS THE TODOS
  function listTodos(){
    console.log("*********************");
    todos.forEach(function(todo, index){ 
      console.log(index + ": " + todo);
    });
    console.log("*********************");
  }

  // FUNCTION THAT ADDS TODOS
  function addTodo(){
    // ASK FOR A NEW TO DO
    var newToDo = prompt("Enter a new task");

    // ADD TO THE ARRAY
    todos.push(newToDo);
    console.log("Added Todo");
  }

  // FUNCTION THAT DELETES TODOS
  function deleteTodo(){
    // ASK FOR THE INDEX TO BELETE
    var index = prompt("What index of todo do you want to delete ?");

    // DELETE THAT todo
    todos.splice(index, 1);
    console.log("Deleted Todo");
  }

}, 500);
