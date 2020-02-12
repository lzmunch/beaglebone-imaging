var status_reports = document.getElementById("status-reports-div");
console.log(status_reports);

function makeElementString(elem, text){
	return "<" + elem + ">" + text + "</" + elem + ">";
}

function makeLink(link, text){
	return "<a href=" + link + " target='_blank'>" + text + "</a>";
}

function addReport(num, date, report){
	var div = document.createElement("DIV");
	div.className = "status-report";
	console.log(report)
	// var titleText = document.createElement("p");
	// var title = "Status Report " + num + " (" + date + "):";
	// titleText.innerHTML += title;

	// var changesText = document.createTextNode(changes);
	// var progressText = document.createTextNode(progress);
	// var nextText = document.createTextNode(next_steps);

	// div.appendChild(titleText);
	// div.appendChild(changesText);
	// div.appendChild(progressText);
	// div.appendChild(nextText);	

	var title = "Status Report " + num + " (" + date + "):";
	div.innerHTML += makeElementString("i", title);
	div.innerHTML += makeElementString("p", report);

	status_reports.appendChild(div);
}

function addReportLink(num, date, link){
	var div = document.createElement("DIV");
	div.className = "status-report";

	var title = "Status Report " + num + " (" + date + ")";
	div.innerHTML += makeLink(link, title);

	status_reports.appendChild(div);
}


var links = [
	"https://docs.google.com/document/d/1Rp15YF9jEi1y6cfX6WfeEBngCpJYm9clnj26Y-rXzFg/edit?usp=sharing",
	"https://docs.google.com/document/d/1A3iiBJfFLHXPewnho3F9rmC1P7XPCF5gqLLQU3we9FQ/edit?usp=sharing"	
];


addReportLink("01", "01/29/2020", links[0]);
addReportLink("02", "02/12/2020", links[1]);


