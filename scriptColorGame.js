// var complexity = 6;
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colordisplay');
var length = squares.length;
var pickedColor = pickColor();
var messageDisplay = document.querySelector('#message');
var wincolorH1 = document.getElementsByTagName('h1')[0];
var resetButton = document.querySelector('#reset');
var easyButton = document.getElementById('easy');
var hardButton = document.getElementById('hard');

resetButton.textContent = "New Game";
colorDisplay.textContent = pickedColor;
messageDisplay.textContent = " ";
hardButton.classList.add("selected");

easyButton.addEventListener("mouseout", function(){
	if(numberOfSquares===6)
	easyButton.classList.remove("selected");
})

easyButton.addEventListener("mouseover", function(){
	easyButton.classList.add("selected");
})

easyButton.addEventListener("click", function(){
	numberOfSquares=3;
	resetButton.textContent = "New Game";
	wincolorH1.style.backgroundColor = "steelblue";
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	messageDisplay.textContent = " ";
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++)
	{
		if (colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		
		else
		
		{
			squares[i].style.display = "none";
		}
	}
	// alert("Easy" + squares.length);
	// complexity=3;
	
	// colors = generateRandomColors(complexity);
	// colors[3] = "rgb(35, 35, 35)"; 
	// colors[4] = "rgb(35, 35, 35)"; 
	// colors[5] = "rgb(35, 35, 35)"; 
	// console.log(colors[0] + " "+ colors[3]);
	
	// for(var i = 0; i< length; i++)
	// {
	// 	squares[i].style.backgroundColor = colors[i];
	// 	console.log(squares[i]);
	// }

	// length=3;
});

hardButton.addEventListener("mouseout", function(){
	if(numberOfSquares===3)
	hardButton.classList.remove("selected");
})

hardButton.addEventListener("mouseover", function(){
	hardButton.classList.add("selected");
})

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	messageDisplay.textContent = " ";
	resetButton.textContent = "New Game";
	wincolorH1.style.backgroundColor = "steelblue";
	numberOfSquares=6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		
	}
	
	// alert("Hard" + squares.length);
	// complexity=6;
	// length=6;
	// colors = generateRandomColors(complexity);
});

resetButton.addEventListener("mouseout", function(){
	resetButton.classList.remove("selected");
})

resetButton.addEventListener("mouseover", function(){
	resetButton.classList.add("selected");
})


resetButton.addEventListener("click",function(){
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked Color
	colorDisplay.textContent = pickedColor;
	//range colors of squares
	wincolorH1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = " ";
	resetButton.textContent = "New Game";
	for(var i = 0; i< squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
})

for(var i = 0; i<squares.length; i++ )
{
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];


	//add click listeners to squares
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
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var randomI = Math.floor(Math.random()*numberOfSquares);
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