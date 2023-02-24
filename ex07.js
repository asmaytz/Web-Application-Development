//child nodes

window.onload = function(){
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick = howManyChildren();
}
function howManyChildren(){
	var myElement = document.getElementById("top");
	var numberOfChildren = myElement.childNodes.length;
	alert(numberOfChildren);
}