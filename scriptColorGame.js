var colors = [
			"rgb(255, 0, 0)",
			"rgb(255, 255, 0)",
			"rgb(255, 0, 255)",
			"rgb(0, 255, 0)",
			"rgb(0, 255, 255)",
			"rgb(0, 0, 255)"
			];

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colordisplay');
var length = 6;
var pickedColor = colors[3];
colorDisplay.textContent = pickedColor;
for(var i = 0; i<length; i++ )
{
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];


	//add click listeners to spquares
	squares[i].addEventListener("click", function(){
	//grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	if(clickedColor === pickedColor)
		{
			alert("Corrent");
		}
	else
		{
			alert("Wrong");
		}

	});


}