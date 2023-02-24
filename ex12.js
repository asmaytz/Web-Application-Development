// since we can access attributes of href in DOM , we can also change its values
window.onload = function(){
	var clickButton = document.getElementById('clickme');
	clickButton.onclick= changeWhereWeAreGoing;
}
function changeWhereWeAreGoing() {
	var anchor = document.getElementById("myAnchor");
	anchor.href ="http://google.com";
}