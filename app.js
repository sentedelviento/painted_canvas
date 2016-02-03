var options = document.getElementsByClassName("options");
var paint = "white";
var picture = document.getElementsByClassName("picture");
for (var i = 0; i <options.length; i++) {
	options[i].addEventListener("click", color_select, false)
}
for (var i = 0; i < picture.length; i++) {
	picture[i].addEventListener("click", change_color, false);
}
function color_select(event) {
	var e = event.target;
	paint = getComputedStyle(e).backgroundColor;
	console.log(paint);
	
}
function change_color(event) {
	var e = event.target;
	var bgColor = getComputedStyle(e).backgroundColor;
	bgColor = paint;
	console.log(bgColor);
	this.style.background = paint;
}
