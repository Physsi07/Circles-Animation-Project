// CHECK OFF SPECIFIC TO DOS BY CLICKING
// WHEN AN LI IS CLICKED INSIDE OF THE UL
// RUN THE CODE
$("ul").on("click", "li",function(){
  $(this).toggleClass("completed");
});

// CLICK ON 'X' TO DELETE TODOS
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, () => {
    $(this).remove();
  });
  event.stopPropagation(); // IT WILL STOP THE EVENT FROM BUBBLING UP
});

// LISTENER TO THE TEXT INPUT THAT FIRES WHEN WE HIT THE ENTER KEY
$("input[type='text']").keypress(function(event) {
  if(event.which === 13){
    // GRABBING NEW TODO TEXT
    var todoText = $(this).val();
    $(this).val("");
    // CREATE A NEW LI AND ADD IT TO THE UL
    $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
  }
});

// SELECTING THE PLUS AND SHOWING IT AND HIDING IT
$(".fa-plus").click( () => {
  $("input[type='text']").fadeToggle();
});
