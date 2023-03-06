function validateForm() {
	var lastName = document.getElementById("lastName");
	if( lastName.value.length <= 2){
		alert("Sorry: Last name must contian two ( 2) or more characters. ");
		lastName.focus();
		return false;
	}else {
		return true;
	}
}