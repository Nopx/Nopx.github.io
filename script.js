window.onload = function(){
	commentUpdated = document.getElementById("updateComment");
	commentUpdatedString = "This site was last updated on: ";
	date = new Date();
	commentUpdated.innerHTML = commentUpdatedString + (date.getDate()-1)+"."+date.getMonth()+"."+date.getFullYear();
}