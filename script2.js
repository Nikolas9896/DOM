var p_text = document.getElementsByTagName('p')[0];
var button0 = document.getElementsByTagName('button')[0];
var h1_js = document.querySelector('h1');
var list_black = document.querySelectorAll('li');

button0.addEventListener("click", function(){

	h1_js.style.color = "Green";
	p_text.textContent = "Goodbye!";

})

for(var i = 0; i < list_black.length; i++)
{
	
	list_black[i].addEventListener("click", function(){
		this.style.color = "orange";

	})
	
}


