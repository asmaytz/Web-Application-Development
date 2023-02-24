//change it()

window.onload = function() {
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick = changeIt;

}

function changeIt() {
	var myElement = document.getElementById("p1");
	if(myElement != null) {
		document.getElementById("p1").innerHTML = "Look at me, I chnage the paragrpagh's content with the DOM";
	}
}