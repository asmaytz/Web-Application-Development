//onkeydown and onkeyup event 

window.onload = function(){
	window.addEventListener("keydown", keyPressed);
	window.addEventListener("keyup", changeItBack);
}
function keyPressed(e) {
	if(e.code == "KeyB"){
		document.getElementById("title").innerHTML ="You pressed the 'b' key!";
	}
}
function changeItBack() {
	document.getElementById("title").innerHTML = "Lets Learn About the DOM!";
}