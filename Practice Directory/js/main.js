var cities = ['Corvallis', 'Portland', 'Eugene',  'Albany' ];
var pops = ['59,920', '652,500', '176,650', '56,470' ];

function final(){
	var table = document.createElement("table");

	var headerRow = document.createElement("tr");

	var cityHeader = document.createElement("th");
		cityHeader.innerHTML = "City";
		headerRow.appendChild(cityHeader);

	var popHeader = document.createElement("th");
		popHeader.innerHTML = "Population";
		headerRow.appendChild(popHeader);
	table.appendChild(headerRow);

	for (var i=0; i < cities.length; i++){
		var tr = document.createElement("tr");
		var city = document.createElement("td");
		city.InnerHTML = cities[i]
		tr.appendChild(city);
		var pop = document.createElement("td");
		pop.innerHTML = pops[i];
		tr.appendChild(pop);

table.appendChild(tr);
};

var  myDiv = document.getElementById("mydiv");
myDiv.appendChild(table);
};
window.onload = final();


