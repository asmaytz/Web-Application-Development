// Parent Node, findMyParent()

window.onload = function(){
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick = findMyParent();
}

function findMyParent() {
	myElement = document.getElementById("p2");
	alert(myElement.parentNode.nodeName);
}