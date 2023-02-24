// Screen Object: 
// displaying information about the user's screen resolution

window.onload = function(){
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick =getScreenResolution;
}
function getScreenResolution(){
	var width = screen.width;
	var height = screen.height;
	alert("Screen resolution: " +width +"x" +height);
}