// getElementByTagName()

window.onload = function() {
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick = countThem;
}
function countThem() {
	var paragraphs = document.getElementsByTagName('p');
	alert(paragraphs.length);
}