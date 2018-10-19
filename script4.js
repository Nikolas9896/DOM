var LiAll =document.querySelectorAll("li");
var sizeLiAll = LiAll.length;
for(i = 0; i<sizeLiAll; i++)
{
	LiAll[i].addEventListener("mouseover", function(){

	this.style.color = "green";
});
LiAll[i].addEventListener("mouseout", function(){

	this.style.color = "black";
});
}


