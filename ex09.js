// using named children instead of suing array indexes to access nodes

window.onload = function(){
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick = myFirstChild;
}

function myFirstChild() {
	var myElement = document.getElementById("p4");
	var myFirstChild = myElement.firstChild.innerHTML;
	alert(myFirstChild);
}