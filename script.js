function execute(){
	var randomNumber = document.getElementById("randomNumber");
	randomNumber.innerHTML = Math.floor(Math.random() * 6) + 1;
}