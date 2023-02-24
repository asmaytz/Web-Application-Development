ex19.js
// Location obeject ex
// displaying information about the URL loaded in the browser window

window.onload = function(){
	var clickMeButton = document.getElementById('clickme');
	clickMeButton.onclick = urlDetails;
}
function urlDetails(){
	var hostname = location.hostname;
	var pathname = location.pathname;
	alert("Hostname: " + hostname + "\n" + "Pathname: " + pathname);
}