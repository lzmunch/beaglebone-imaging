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
	"https://docs.google.com/document/d/1A3iiBJfFLHXPewnho3F9rmC1P7XPCF5gqLLQU3we9FQ/edit?usp=sharing",
	"https://docs.google.com/document/d/19juiQhYuVBL_r-datdNNOx91041wsxTv9tW3j7FyfYo/edit?usp=sharing",
	"https://docs.google.com/document/d/1jP1xUOPIcrxBv8ObhT_HCSie88C3STaAIM6TlebSfb0/edit?usp=sharing",
	"https://docs.google.com/document/d/1rGw1KvuHPJzrUSbaa-JYqPzoQqZ5rSypS8fU8kHI3gs/edit?usp=sharing",
	"https://docs.google.com/document/d/1Aeq1POOB_vEqxvq8Eud4PiPrznhWG0f-S2rK-hxZjf8/edit?usp=sharing",
];

addReportLink("06", "04/22/2020", links[5]);
addReportLink("05", "04/01/2020", links[4]);
addReportLink("04", "03/18/2020", links[3]);
addReportLink("03", "02/26/2020", links[2]);
addReportLink("02", "02/12/2020", links[1]);
addReportLink("01", "01/29/2020", links[0]);

addResult("0/26. Tone mapping", "https://i.imgur.com/q4xz3vB.png");
addResult("02/12. HDR imaging progress", "https://i.imgur.com/hSYfD3L.png");
