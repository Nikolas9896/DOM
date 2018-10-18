var p1button = document.querySelector('#bplayer1');
var p2button = document.getElementById('bplayer2');
var p1display = document.getElementById('p1display');
var p2display = document.getElementById('p2display');
var preset = document.getElementById('breset');
var numInput = document.querySelector("input");
var p = document.querySelector('p');
var winningScore = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winLimit = 5;

p1button.addEventListener("click", function(){
	if(!gameOver)
		p1score++;

	if(p1score === winLimit)
	{
		p1display.classList.add("winner");		
		gameOver = true;
		//****Try without class*******
		// p1display.style.color = "green";
	}
	p1display.textContent = p1score;
	
});

p2button.addEventListener("click", function(){
	if(!gameOver)
		p2score++;

	if(p2score === winLimit)
	{
		gameOver = true;
		p2display.classList.add("winner");
		//****Try without class*******
		// p2display.style.color = "green";
	}
	p2display.textContent = p2score;
	
});



preset.addEventListener("click", function()
{
reset();	// body...
}
	//****Try without class*******
	// p1display.style.color = "black";
	//****Try without class*******
	// p2display.style.color = "black";

);

function reset() {
	p1score = 0;
	p2score = 0;
	gameOver = false;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
}

numInput.addEventListener("change",function(){
winningScore.textContent = numInput.value;
winLimit = Number(numInput.value);
reset();
});