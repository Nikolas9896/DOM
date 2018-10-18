var p_text = document.getElementsByTagName('p')[0];
var button0 = document.getElementsByTagName('button')[0];
var h1_js = document.querySelector('h1');
var list_black = document.querySelectorAll('li');
var body_background = document.querySelector('body');
var isBlue = false;


button0.addEventListener("click", function(){

	h1_js.style.color = "Green";
	p_text.textContent = "Goodbye!";
	document.body.classList.toggle("lightblue");
	
// 	if(!isBlue){
// 	body_background.style.background = "lightblue";
		
// 	}
// 	else{
// 	body_background.style.background = "white";
	 
// }
// 	isBlue=!isBlue;

})

for(var i = 0; i < list_black.length; i++)
{
	
	list_black[i].addEventListener("click", function(){
		this.style.color = "orange";
		this.textContent = "Orange";

	})
	
}


