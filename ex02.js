// accessing and manipulating DOM with JS

window.onload = function() {
	var clickMeButton = document.getElementByID('clickme');
	clickMeButton.onclick = whatIsIt;
}

function whatIsIt() {
	var myElement = document.getElementByID("p1");
	var myNodeName = myElement.nodeName;
	alert(myNodeName);
}