// Navigator Object Ex
// displaying information about the user's browser 

window.onload = function() {
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick = getBrowserDetails;
}
function getBrowserDetails(){
	var browser = navigator.appName;
	var version = navigator.appVersion;
	var platform = navigator.plateform;
	var cookies = navigator.cookiesEnhabled;
	alert("Browser:" +browser +"\n" + "Version:" + version +"\n" +"Platform:" +platform +"\n"+"Cookies enhabled: " +cookies);
}