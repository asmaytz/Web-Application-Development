// DOM Events : there are different categories: Mouse Events, Keyboard events, Frame/Object events, Form events, drag events, and more!
// onmouseenter and onmouseleave events

window.onload = function(){
	var heading = document.getElementById("title");
	heading.onmouseenter = changeHeading;
	heading.onmouseleave = changeBack;
}
function changeHeading(){
	document.getElementById("title").innerHTML = "Whoa!";
}
function changeBack(){
	document.getElementById("title").innerHTML = "Let's Learn About the DOM!";
}