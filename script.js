var status_reports = document.getElementById("status-reports-div");
console.log(status_reports);

function makeElementString(elem, text){
	return "<" + elem + ">" + text + "</" + elem + ">";
}

function makeLink(link, text){
	return "<a href=" + link + " target='_blank'>" + text + "</a>";
}

function addReportLink(num, date, link){
	var div = document.createElement("DIV");
	div.className = "status-report";

	var title = "Status Report " + num + " (" + date + ")";
	div.innerHTML += makeLink(link, title);

	status_reports.appendChild(div);
}

function addResult(caption, imgsrc){
	var div = document.createElement("DIV");
	div.innerHTML += "<p class='caption'>" + caption + "</p>";
	div.innerHTML += "<img class='result-img' src=" + imgsrc + ">";

	document.getElementById("results-div").appendChild(div);
}


var links = [
	"https://docs.google.com/document/d/1Rp15YF9jEi1y6cfX6WfeEBngCpJYm9clnj26Y-rXzFg/edit?usp=sharing",
	"https://docs.google.com/document/d/1A3iiBJfFLHXPewnho3F9rmC1P7XPCF5gqLLQU3we9FQ/edit?usp=sharing"	
];

addReportLink("01", "01/29/2020", links[0]);
addReportLink("02", "02/12/2020", links[1]);

addResult("02/12. HDR imaging progress", "https://i.imgur.com/hSYfD3L.png");


