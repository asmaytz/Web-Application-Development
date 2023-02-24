//wait for page to load, then find html buttom and attach an event handler to it, 
// that will result in JS alert being generated when the button is clicked
//line 5, conatins code that creates a function when web page finishs loading completely

window.onload = function(){ 
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick = youClicked;
}
//fucntion that will run when the buttons is clicked 
function youClicked(){
	alert("You Clicked!");
}