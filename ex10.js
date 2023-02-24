//using the lastChild with id="buttom"

window.onload = function() {
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick= myLastChild;
}
function myLastChild(){
	var myElement = document.getElementById("bottom");
	var myLastChild = myElement.lastChild.nodeName;
	alert(myLastChild);
}