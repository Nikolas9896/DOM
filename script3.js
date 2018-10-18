var p1button = document.querySelector('#bplayer1');
var p2button = document.getElementById('bplayer2');
var p1display = document.getElementById('p1display');
var p2display = document.getElementById('p2display');
var preset = document.getElementById('breset');
var p1score = 0;
var p2score = 0;

p1button.addEventListener("click", function(){
p1score++;
p1display.textContent = p1score;
});

p2button.addEventListener("click", function(){
	p2score++;
p2display.textContent = p2score;
});

preset.addEventListener("click", function(){
	
	p1score=0;
	p2score=0;
	p1display.textContent=p1score;
	p2display.textContent=p2score;
})