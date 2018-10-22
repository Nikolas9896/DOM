var LiAll =document.querySelectorAll("li");
var sizeLiAll = LiAll.length;
for(i = 0; i<sizeLiAll; i++)
{
	LiAll[i].addEventListener("mouseover", function(){

	this.classList.add("selected");
});
LiAll[i].addEventListener("mouseout", function(){

	this.classList.remove("selected");
});

	LiAll[i].addEventListener("click", function(){
		this.classList.toggle("done");
	})


}


