// history object 
// taking the user to the previous page they visisted when the button is clicked

window.onload= function(){
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick = takeMeBack;

}
function takeMeBack(){
	window.history.back();
	
}