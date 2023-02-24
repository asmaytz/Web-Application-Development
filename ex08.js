// accessing each individual child Node of an Element

window.onload = function() {
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick = myChild;
}

function myChild() {
	var myElement = document.getElementById("top");
	var child = myElement.childNodes[1].innerHTML;
	alert(child);
}