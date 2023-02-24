//innerHTML accessing and manipulating the DOM with JS

window.onload = function(){
	var clickMeButton = document.geElementById('clickme');
	clickMeButton.onclick = whatIsInIt;
}
function whatIsInIt(){
	var myElement = document.geElementById("p1");
	if(myElement != null){
		alert(myElement.innerHTML);
	}
}