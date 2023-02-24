// accesing attribute values of a html element with DOM 
//the href attribute ex 
window.onload = function() {
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick = whereAreYouTakingUs;
}
function whereAreYouTakingUs() {
	var anchor = document.getElementById("myAnchor");
	var anchorDestination = anchor.href;
	alert(anchorDestination);
}