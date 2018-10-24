var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colordisplay');
var length = squares.length;
var pickedColor = pickColor();
var messageDisplay = document.querySelector('#message');
var wincolorH1 = document.getElementsByTagName('h1')[0];
var resetButton = document.querySelector('#reset');
resetButton.textContent = "New Game";
colorDisplay.textContent = pickedColor;
messageDisplay.textContent = " ";
resetButton.addEventListener("click",function(){
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked Color
	colorDisplay.textContent = pickedColor;
	//range colors of squares
	wincolorH1.style.backgroundColor = "#232323";
	messageDisplay.textContent = " ";
	resetButton.textContent = "New Game";
	for(var i = 0; i< length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
})

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
			messageDisplay.textContent = "Correct!";
			wincolorH1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);

			
		}
	else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}

	});


}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < length; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var randomI = Math.floor(Math.random()*length);
	return colors[randomI];
}

function generateRandomColors(num)
{
	//make an array
		var arr = [];
	// add num random
	for(var i = 0; i<num; i++)
	{
		//get random color and push into arr
		arr.push(randomColor());

	}
	//return that array
	return arr;
}

function randomColor()
{
	//pick "red" from 0 - 255
	var red1 =Math.floor(Math.random()*256);
	//pick "green" from 0 - 255
	var green1 = Math.floor(Math.random()*256);
	//pick "blue" from 0 - 255
	var blue1 = Math.floor(Math.random()*256);
	
	return "rgb("+ red1 +", " + green1 + ", " + blue1 + ")";

}