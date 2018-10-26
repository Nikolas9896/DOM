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
//var easyButton = document.getElementById('easy');
//var mediumButton = document.querySelector('#medium');
//var hardButton = document.getElementById('hard');
var modeButtons = document.getElementsByClassName('mode');


for(var i = 0; i < modeButtons.length; i++)
{
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy" ? numberOfSquares = 3: (this.textContent==="Medium" ? numberOfSquares = 6 : numberOfSquares = 9);
		// if(this.textContent ==="Easy"){
		// 	numberOfSquares = 3;
		// }
		// else if(this.textContent === "Medium"){
		// 	numberOfSquares = 6;
		// }
		// else {

		// numberOfSquares = 9;
		// }
		reset();
		//figure out how many squares to show
		//pick new colors
		//pick a new pickedColors
		//update page to reflect changes
	});
}


resetButton.textContent = "New Game";
colorDisplay.textContent = pickedColor;
messageDisplay.textContent = " ";
//mediumButton.classList.add("selected");
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

// easyButton.addEventListener("mouseout", function(){
// 	if(numberOfSquares===6)
// 	easyButton.classList.remove("selected");
	
// })

// easyButton.addEventListener("mouseover", function(){
// 	easyButton.classList.add("selected");

// })


//************* Easy Button CLick ***********************
/*easyButton.addEventListener("click", function(){
	//Number of Squares
	numberOfSquares=3;
	//Update Text "Play Again?" to "New Game" in resetButton
	resetButton.textContent = "New Game";
	//Defaul color for h1 Background
	wincolorH1.style.backgroundColor = "steelblue";
	//Class selected Easy set
	easyButton.classList.add("selected");
	mediumButton.classList.remove("selected");
	hardButton.classList.remove("selected");
	//generate 3 new colors for Easy mode
	colors = generateRandomColors(numberOfSquares);
	//chose 1 of the 3 new colors for task
	pickedColor = pickColor();
	//clear game Status
	messageDisplay.textContent = " ";
	//Update Task on display
	colorDisplay.textContent = pickedColor;
	//Show first 3 colors, and hide other 6
	for (var i = 0; i < squares.length; i++)
	{
		if (colors[i])
		{
			//initialize colors in the easy mode([0]-[2])
			squares[i].style.backgroundColor = colors[i];
		}
		
		else
		
		{
			//hide colors [3]-[8]
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

// hardButton.addEventListener("mouseout", function(){
// 	if(numberOfSquares===3)
// 	hardButton.classList.remove("selected");
// })

// hardButton.addEventListener("mouseover", function(){
// 	hardButton.classList.add("selected");
// })

//************* Medium Button CLick ***********************

mediumButton.addEventListener("click", function(){
	//Class selected Medium set
	hardButton.classList.remove("selected");
	mediumButton.classList.add("selected");
	easyButton.classList.remove("selected");
	//Defaul color for h1 Background
	wincolorH1.style.backgroundColor = "steelblue";
	//Number of Squares
	numberOfSquares=6;
	//Update Text "Play Again?" to "New Game" in resetButton
	resetButton.textContent = "New Game";
	//generate 6 new colors for Medium mode
	colors = generateRandomColors(numberOfSquares);
	//chose random 1 of the 6 new colors for task
	pickedColor = pickColor();
	//clear game Status
	messageDisplay.textContent = " ";
	//Update Task on display
	colorDisplay.textContent = pickedColor;
	//Show first 6 colors, and hide other 3
		for (var i = 0; i < squares.length; i++)
		{
				//initialize colors in the Medium mode([0]-[5])
			if ( colors[i] )
			{
				squares[i].style.backgroundColor = colors[i];
				
				//show colors if before Easy button was clicked for displaying last 3 of 6 colors;
				if( i > 2 )
				squares[i].style.display = "block";
			}
			
			else
			
			{
				//hide colors [6]-[8]
				squares[i].style.display = "none";
			}
		}
	
});

//************* Hard Button CLick ***********************

hardButton.addEventListener("click", function(){
	//Class selected Medium set
	hardButton.classList.add("selected");
	mediumButton.classList.remove("selected");	
	easyButton.classList.remove("selected");

	//clear game Status
	messageDisplay.textContent = " ";

	//Update Text "Play Again?" to "New Game" in resetButton
	resetButton.textContent = "New Game";

	//Defaul color for h1 Background
	wincolorH1.style.backgroundColor = "steelblue";

	//Number of Squares
	numberOfSquares=9;

	//generate 9 new colors for Medium mode
	colors = generateRandomColors(numberOfSquares);

	//chose random 1 of the 9 new colors for task
	pickedColor = pickColor();

	//Update Task on display
	colorDisplay.textContent = pickedColor;

	//Show 9 colors
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

// resetButton.addEventListener("mouseout", function(){
// 	resetButton.classList.remove("selected");
// })

// resetButton.addEventListener("mouseover", function(){
// 	resetButton.classList.add("selected");
// })
*/

/*resetButton.addEventListener("click",function(){
	
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	
	//pick a new random color from array
	pickedColor = pickColor();

	//change color display to match picked Color
	colorDisplay.textContent = pickedColor;

	//range colors of squares
	wincolorH1.style.backgroundColor = "steelblue";

	//clear game Status
	messageDisplay.textContent = " ";

	//Update Text "Play Again?" to "New Game" in resetButton
	this.textContent = "New Game";
	

	for(var i = 0; i< squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
})
*/

//*****************---GAME PROCESS---***************************************
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
//************Functions declaration***************************

function reset(){

	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	
	//pick a new random color from array
	pickedColor = pickColor();

	//change color display to match picked Color
	colorDisplay.textContent = pickedColor;

	//range colors of squares
	wincolorH1.style.backgroundColor = "steelblue";

	//clear game Status
	messageDisplay.textContent = " ";

	//Update Text "Play Again?" to "New Game" in resetButton
	resetButton.textContent = "New Game";
	

	for(var i = 0; i< squares.length; i++)
	{	
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}


}


//FFFFFFFFFFF ---- For changing new colors ---- FFFFFFFFFFFF
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = color;
	}
}

//FFFFFFFFFFF ---- For choosing 1 random color from list Easy 3; Medium 6; Hard 9 colors ---- FFFFFFFFFFFF
function pickColor()
{
	var randomI = Math.floor(Math.random()*numberOfSquares);
	return colors[randomI];
}


//FFFFFFFFFFF ---- For making new colors array ---- FFFFFFFFFFFF
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

//FFFFFFFFFFF ---- For making new colors attributes RGB and transit them to normal format ---- FFFFFFFFFFFF
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