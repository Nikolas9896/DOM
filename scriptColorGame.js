var colors = [
			"rgb(255, 0, 0)",
			"rgb(255, 255, 0)",
			"rgb(255, 0, 255)",
			"rgb(0, 255, 0)",
			"rgb(0, 255, 255)",
			"rgb(0, 0, 255)"
			];

var squares = document.querySelectorAll(".square");
var length = 6;
for(var i = 0; i<length; i++ )
{
	squares[i].style.backgroundColor = colors[i];
}