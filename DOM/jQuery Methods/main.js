
// .TEXT()
console.log($("h1").text());
console.log($("li").text());
$("h1").text("jQuery Methods Changed");

// .HTML()
console.log($("h1").html());
$("ul").html("<li>I hacked your UL</li>")

// .ATTR()
$("img").css("width"); // SELECTING AN IMAGE
$("img").css("width", "300px"); // CHANGING ITS WIDTH
$("img").attr("src"); // GETTING THE SOURCE OF THE IMAGE
$("img").attr("src", "https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg"); // CHANGING IT TO ANOTHER
$("input").attr("type", "text"); // CHANGING THE THE TYPE OF THE INPUT FROM THE DEFAULT TYPE TO ANOTHER
