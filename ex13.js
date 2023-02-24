//accessing the style object with the DOM 
// changing the color of the H1 elements content

window.onload = function() {
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick = changeColor;
}
function changeColor() {
	toChange = document.getElementById("title");
	toChange.style.color="#7D26CD";
}