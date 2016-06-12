window.onload = function(){
	//set last edited tag
	commentUpdated = document.getElementById("updateComment");
	commentUpdatedString = "This site was last updated on: ";
	date = new Date();
	commentUpdated.innerHTML = commentUpdatedString + (date.getDate()-1)+"."+date.getMonth()+"."+date.getFullYear();
	
	imageFiles = [
					"statistics/illiteracy.gif",
					"statistics/religious-leaders.gif",
					"statistics/Frenchnames.gif",
					"statistics/DolanAndHillary.gif"
					];
	imageNames = [
					"EU Literacy",
					"Religious leaders trained in combat",
					"French male names",
					"Donald Trump vs. Hillary Clinton"
					];
					
	imageDescr = [
					"Estimated amount of illiterate EU citizens",
					"Percentage of religious leader with military/combat training",
					"Most used French names for boys",
					"Donald Trump and Hillary Clinton compared over time"
					];
	statDiv = document.getElementById("statDiv");
		
	for(i=0;i<imageFiles.length;i++){
		div = document.createElement("div");
		div.classList.add("leftStatistic");
		header = document.createElement("h2");
		header.innerHTML = imageNames[i];
		img = document.createElement("img");
		img.setAttribute("src",imageFiles[i]);
		img.setAttribute("alt",imageDescr[i]);
		div.appendChild(header);
		div.appendChild(img);
		statDiv.appendChild(div);
	}
}