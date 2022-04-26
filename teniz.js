var addontextarr =[];
var yearList = ["2000", "1982", "1984", "2002", "2020", "1972", "1973", "1985", "1972", "2005", "1996", "1985", "2011", "1976", "2019", "1993", "1977", "2018", "1970", "2013", "1982", "1972", "1997", "1977", "1977", "2018", "1978", "2014", "2001", "1975", "2017", "1998", "1995", "1983", "2002", "1994", "1990", "1991", "1968", "1980", "1979", "2009", "2003", "1977", "1999", "2000", "2020", "2021", "2012", "2010", "1971", "2016", "1994", "1971", "2018", "1998", "2016", "2004", "1998", "1969", "2013", "1978", "1978", "2021", "1989", "1970", "1991", "1997", "1976", "1984", "1998", "2007", "1985", "1991", "2000", "1991", "2021", "2014", "1977", "1987", "1981", "2002", "2017", "2011", "2009", "2003", "1998", "2008", "1976", "1972", "2001", "2004", "2015", "2001", "1979", "2011", "2013", "1977", "2010", "1992", "2008", "2019", "2010", "2003", "2000", "2020", "1972", "2006", "1988", "1990", "2018",]
var countryList = ["USA", "USA", "USA", "ESP", "USA", "ESP", "AUS", "SWE", "GBR", "RUS", "NLD", "CZE", "SRB", "ITA", "AUS", "USA", "USA", "GER", "AUS", "FRA", "USA", "ROM", "CRO", "USA", "AUS", "ROM", "AUS", "CRO", "USA", "ESP", "USA", "CZE", "AUT", "FRA", "USA", "ESP", "ARG", "USA", "USA", "USA", "USA", "ARG", "BEL", "YUG", "RUS", "FRA", "POL", "RUS", "BLR", "BEL", "CZE", "ESP", "ESP", "AUS", "DEN", "ESP", "SWI", "ARG", "CZE", "AUS", "USA", "ARG", "ROM", "GBR", "USA", "USA", "GER", "SWI", "AUS", "USA", "ESP", "SWI", "CZE", "GER", "BRA", "GER", "CZE", "CHN", "SWE", "AUS", "USA", "SWE", "LAT", "CZE", "RUS", "ESP", "AUS", "RUS", "GBR", "USA", "CRO", "RUS", "ITA", "AUS", "USA", "AUS", "GBR", "AUS", "ESP", "YUG", "SRB", "CAN", "ITA", "USA", "USA", "AUT", "USA", "FRA", "SWE", "ECU", "JPN",]
var continentList = ["NAM", "NAM", "NAM", "EUR", "NAM", "EUR", "AUS", "EUR", "EUR", "ASA", "EUR", "EUR", "EUR", "EUR", "AUS", "NAM", "NAM", "EUR", "AUS", "EUR", "NAM", "EUR", "EUR", "NAM", "AUS", "EUR", "AUS", "EUR", "NAM", "EUR", "NAM", "EUR", "EUR", "EUR", "NAM", "EUR", "SAM", "NAM", "NAM", "NAM", "NAM", "SAM", "EUR", "EUR", "ASA", "EUR", "EUR", "ASA", "EUR", "EUR", "EUR", "EUR", "EUR", "AUS", "EUR", "EUR", "EUR", "SAM", "EUR", "AUS", "NAM", "SAM", "EUR", "EUR", "NAM", "NAM", "EUR", "EUR", "AUS", "NAM", "EUR", "EUR", "EUR", "EUR", "SAM", "EUR", "EUR", "ASA", "EUR", "AUS", "NAM", "EUR", "EUR", "EUR", "ASA", "EUR", "AUS", "ASA", "EUR", "NAM", "EUR", "ASA", "EUR", "AUS", "NAM", "AUS", "EUR", "AUS", "EUR", "EUR", "EUR", "NAM", "EUR", "NAM", "NAM", "EUR", "NAM", "EUR", "EUR", "SAM", "ASA",]
var firstnameList = ["Lindsay", "Jimmy", "John", "Albert", "Sofia", "Andres", "John", "Mats", "Virginia", "Marat", "Richard", "Hana", "Novak", "Adriano", "Ashleigh", "Pete", "Vitas", "Angelique", "Margaret", "Marion", "Johan", "Ilie", "Iva", "Roscoe", "Evonne", "Simona", "Chris", "Marin", "Venus", "Manuel", "Sloane", "Jana", "Thomas", "Yannick", "Jennifer", "Sergi", "Gabriela", "Jim", "Nancy", "Brian", "Barbara", "JuanMartin", "Justine", "Mima", "Yevgeny", "Mary", "Iga", "Daniil", "Victoria", "Kim", "Jan", "Garbine", "Conchita", "Ken", "Caroline", "Arantxa", "Stan", "Gaston", "Petr", "Rod", "Serena", "Guillermo", "Virginia", "Emma", "Michael", "Arthur", "Michael", "Martina", "Mark", "Chris", "Carlos", "Roger", "Ivan", "Boris", "Gustavo", "Steffi", "Barbora", "Li", "Bjorn", "Pat", "Martina", "Thomas", "Jelena", "Petra", "Svetlana", "JuanCarlos", "Patrick", "Maria", "Sue", "Stan", "Goran", "Anastasia", "Flavia", "Lleyton", "Tracy", "Samantha", "Andy", "Kerry", "Rafael", "Monica", "Ana", "Bianca", "Francesca", "Andy", "Andre", "Dominic", "BillieJean", "Amelie", "Stefan", "Andres", "Naomi",]
var lastnameList = ["Davenport", "Connors", "McEnroe", "Costa", "Kenin", "Gimeno", "Newcombe", "Wilander", "Wade", "Safin", "Krajicek", "Mandlikova", "Djokovic", "Panatta", "Barty", "Sampras", "Gerulaitis", "Kerber", "Court", "Bartoli", "Kriek", "Nastase", "Majoli", "Tanner", "Goolagong", "Halep", "ONeil", "Cilic", "Williams", "Orantes", "Stephens", "Novotna", "Muster", "Noah", "Capriati", "Bruguera", "Sabatini", "Courier", "Richey", "Teacher", "Jordan", "DelPotro", "Henin", "Jausovec", "Kafelnikov", "Pierce", "Swiatek", "Medvedev", "Azarenka", "Clijsters", "Kodes", "Muguruza", "Martinez", "Rosewall", "Wozniacki", "Sanchez", "Wawrinka", "Gaudio", "Korda", "Laver", "Williams", "Vilas", "Ruzici", "Raducanu", "Chang", "Ashe", "Stich", "Hingis", "Edmondson", "Evert", "Moya", "Federer", "Lendl", "Becker", "Kuerten", "Graf", "Krejcikova", "Na", "Borg", "Cash", "Navratilova", "Johansson", "Ostapenko", "Kvitova", "Kuznetsova", "Ferrero", "Rafter", "Sharapova", "Barker", "Smith", "Ivanisevic", "Myskina", "Pennetta", "Hewitt", "Austin", "Stosur", "Murray", "Reid", "Nadal", "Seles", "Ivanovic", "Andreescu", "Schiavone", "Roddick", "Agassi", "Thiem", "King", "Mauresmo", "Edberg", "Gomez", "Osaka",]
var nameList = ["lindsaydavenport", "jimmyconnors", "johnmcenroe", "albertcosta", "sofiakenin", "andresgimeno", "johnnewcombe", "matswilander", "virginiawade", "maratsafin", "richardkrajicek", "hanamandlikova", "novakdjokovic", "adrianopanatta", "ashleighbarty", "petesampras", "vitasgerulaitis", "angeliquekerber", "margaretcourt", "marionbartoli", "johankriek", "ilienastase", "ivamajoli", "roscoetanner", "evonnegoolagong", "simonahalep", "chrisoneil", "marincilic", "venuswilliams", "manuelorantes", "sloanestephens", "jananovotna", "thomasmuster", "yannicknoah", "jennifercapriati", "sergibruguera", "gabrielasabatini", "jimcourier", "nancyrichey", "brianteacher", "barbarajordan", "juanmartindelpotro", "justinehenin", "mimajausovec", "yevgenykafelnikov", "marypierce", "igaswiatek", "daniilmedvedev", "victoriaazarenka", "kimclijsters", "jankodes", "garbinemuguruza", "conchitamartinez", "kenrosewall", "carolinewozniacki", "arantxasanchez", "stanwawrinka", "gastongaudio", "petrkorda", "rodlaver", "serenawilliams", "guillermovilas", "virginiaruzici", "emmaraducanu", "michaelchang", "arthurashe", "michaelstich", "martinahingis", "markedmondson", "chrisevert", "carlosmoya", "rogerfederer", "ivanlendl", "borisbecker", "gustavokuerten", "steffigraf", "barborakrejcikova", "lina", "bjornborg", "patcash", "martinanavratilova", "thomasjohansson", "jelenaostapenko", "petrakvitova", "svetlanakuznetsova", "juancarlosferrero", "patrickrafter", "mariasharapova", "suebarker", "stansmith", "goranivanisevic", "anastasiamyskina", "flaviapennetta", "lleytonhewitt", "tracyaustin", "samanthastosur", "andymurray", "kerryreid", "rafaelnadal", "monicaseles", "anaivanovic", "biancaandreescu", "francescaschiavone", "andyroddick", "andreagassi", "dominicthiem", "billiejeanking", "ameliemauresmo", "stefanedberg", "andresgomez", "naomiosaka",]
var GSList = ["AO", "USO", "USO", "FO", "AO", "FO", "AO", "FO", "AO", "AO", "WIM", "USO", "USO", "FO", "FO", "USO", "AO", "WIM", "WIM", "WIM", "AO", "USO", "FO", "AO", "AO", "FO", "AO", "USO", "USO", "USO", "USO", "WIM", "FO", "FO", "AO", "FO", "USO", "FO", "FO", "AO", "AO", "USO", "USO", "FO", "AO", "FO", "FO", "USO", "AO", "USO", "FO", "FO", "WIM", "AO", "AO", "FO", "USO", "FO", "AO", "USO", "USO", "AO", "FO", "USO", "FO", "AO", "WIM", "USO", "AO", "AO", "FO", "WIM", "USO", "AO", "FO", "WIM", "FO", "AO", "WIM", "WIM", "AO", "AO", "FO", "WIM", "FO", "FO", "USO", "AO", "FO", "WIM", "WIM", "FO", "USO", "USO", "USO", "USO", "WIM", "AO", "FO", "AO", "FO", "USO", "FO", "USO", "AO", "USO", "USO", "AO", "WIM", "FO", "USO",]
var GenList = ["SHE", "HE", "HE", "HE", "SHE", "HE", "HE", "HE", "SHE", "HE", "HE", "SHE", "HE", "HE", "SHE", "HE", "HE", "SHE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "SHE", "SHE", "SHE", "HE", "SHE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "SHE", "HE", "HE", "HE", "HE", "SHE", "HE", "SHE", "SHE", "HE", "HE", "HE", "SHE", "HE", "SHE", "HE", "HE", "HE", "HE", "HE", "SHE", "SHE", "SHE", "HE", "HE", "SHE", "HE", "SHE", "SHE", "SHE", "HE", "HE", "SHE", "SHE", "HE", "HE", "SHE", "SHE", "HE", "SHE", "SHE", "HE", "SHE", "HE", "SHE", "SHE", "SHE", "SHE", "HE", "HE", "HE", "SHE", "SHE", "HE", "HE", "SHE",]
var GSTitleList = ["3", "8", "7", "1", "1", "1", "7", "7", "3", "2", "1", "4", "20", "1", "3", "14", "1", "3", "24", "1", "2", "2", "1", "1", "7", "2", "1", "1", "7", "1", "1", "1", "1", "1", "3", "2", "1", "4", "2", "1", "1", "1", "7", "1", "2", "2", "1", "1", "2", "4", "3", "2", "1", "8", "1", "4", "3", "1", "1", "11", "23", "4", "1", "1", "1", "3", "1", "5", "1", "18", "1", "20", "8", "6", "3", "22", "1", "2", "11", "1", "18", "1", "1", "2", "2", "1", "2", "5", "1", "2", "1", "1", "1", "2", "2", "1", "3", "1", "21", "9", "1", "1", "1", "1", "8", "1", "12", "2", "6", "1", "4",]
var PlaysList = ["RH", "LH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "LH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "LH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "RH", "LH", "RH",]
var search_terms = ["Adriano Panatta", "Albert Costa", "Amelie Mauresmo", "Ana Ivanovic", "Anastasia Myskina", "Andre Agassi", "Andres Gimeno", "Andres Gomez", "Andy Murray", "Andy Roddick", "Angelique Kerber", "Arantxa Sanchez", "Arthur Ashe", "Ashleigh Barty", "Barbara Jordan", "Barbora Krejcikova", "Bianca Andreescu", "Billie Jean King", "Bjorn Borg", "Boris Becker", "Brian Teacher", "Carlos Moya", "Caroline Wozniacki", "Chris Evert", "Chris O Neil", "Conchita Martinez", "Daniil Medvedev", "Dominic Thiem", "Emma Raducanu", "Evonne Goolagong", "Flavia Pennetta", "Francesca Schiavone", "Gabriela Sabatini", "Garbine Muguruza", "Gaston Gaudio", "Goran Ivanisevic", "Guillermo Vilas", "Gustavo Kuerten", "Hana Mandlikova", "Iga Swiatek", "Ilie Nastase", "Iva Majoli", "Ivan Lendl", "Jan Kodes", "Jana Novotna", "Jelena Ostapenko", "Jennifer Capriati", "Jim Courier", "Jimmy Connors", "Johan Kriek", "John McEnroe", "John Newcombe", "Juan Carlos Ferrero", "Juan Martin Del Potro", "Justine Henin", "Ken Rosewall", "Kerry Reid", "Kim Clijsters", "Li Na", "Lindsay Davenport", "Lleyton Hewitt", "Manuel Orantes", "Marat Safin", "Margaret Court", "Maria Sharapova", "Marin Cilic", "Marion Bartoli", "Mark Edmondson", "Martina Hingis", "Martina Navratilova", "Mary Pierce", "Mats Wilander", "Michael Chang", "Michael Stich", "Mima Jausovec", "Monica Seles", "Nancy Richey", "Naomi Osaka", "Novak Djokovic", "Pat Cash", "Patrick Rafter", "Pete Sampras", "Petr Korda", "Petra Kvitova", "Rafael Nadal", "Richard Krajicek", "Rod Laver", "Roger Federer", "Roscoe Tanner", "Samantha Stosur", "Serena Williams", "Sergi Bruguera", "Simona Halep", "Sloane Stephens", "Sofia Kenin", "Stan Smith", "Stan Wawrinka", "Stefan Edberg", "Steffi Graf", "Sue Barker", "Svetlana Kuznetsova", "Thomas Johansson", "Thomas Muster", "Tracy Austin", "Venus Williams", "Victoria Azarenka", "Virginia Ruzici", "Virginia Wade", "Vitas Gerulaitis", "Yannick Noah", "Yevgeny Kafelnikov",];
var ul = document.getElementById("result");
ul.onclick = function (event) {
	var target = getEventTarget(event);
	document.getElementById("submitbutton").disabled = false;
	document.getElementById("answertext").value = target.innerHTML;
};
function autocompleteMatch(input) {
	input = input.toLowerCase();
	if (input == '') {
		return [];
	}
	var reg = new RegExp(input)
	return search_terms.filter(function (term) {
		if (term.toLowerCase().match(reg)) {
			return term;
		}
	});
}

function showResults(val) {
	document.getElementById("result").hidden = false;
	document.getElementById("submitbutton").disabled = true;
	res = document.getElementById("result");
	res.innerHTML = '';
	let list = '';
	let terms = autocompleteMatch(val);
	for (i = 0; i < terms.length; i++) {
		if (i === 5) { break; }
		list += '<li>' + terms[i] + '</li>';
	}
	res.innerHTML = '<ul>' + list + '</ul>';
	document.getElementById("result").focus();
	document.getElementById("result").scrollIntoView(true);
}


function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

function Dummy() {
	//do nothing
}

function clearzoomin() {
	document.getElementById(0).classList.remove("zoom-in-box");
	document.getElementById(1).classList.remove("zoom-in-box");
	document.getElementById(2).classList.remove("zoom-in-box");
	document.getElementById(3).classList.remove("zoom-in-box");
	document.getElementById(4).classList.remove("zoom-in-box");
	document.getElementById(5).classList.remove("zoom-in-box");
}

function changemode() {
	localStorage.modet = "Easy";	
	localStorage.gltttext = localStorage.gltttext.replace("Normal", "Easy");
	//document. location. reload();
	switchmode();
}

function storedadd() {
	var storedaddon = JSON.parse(localStorage.getItem("addonttext"));
	for (let j = 0; j < storedaddon.length; j++) {
		var storedaddonelem = storedaddon[j];
		for (let k = 0; k < storedaddonelem.length; k++) {
			document.getElementById("trydetail"+(j+1)).style.display = "flex";
			if (storedaddonelem[k] == "r"){
				document.getElementById("trydetail"+(j+1)).getElementsByClassName("detail"+(k+1))[0].innerHTML += "<br>🔴";
			}
			else if (storedaddonelem[k] == "y"){
				document.getElementById("trydetail"+(j+1)).getElementsByClassName("detail"+(k+1))[0].innerHTML += "<br>🟡";
			}
			else if (storedaddonelem[k] == "g"){
				document.getElementById("trydetail"+(j+1)).getElementsByClassName("detail"+(k+1))[0].innerHTML += "<br>🟢";
			}        
		}					
	}
}

function getindices() {
	const indices = [];
	const element = guess;
	let idx = nameList.indexOf(element);
	while (idx != -1) {
		indices.push(idx);
		idx = nameList.indexOf(element, idx + 1);
	}
	//console.log(indices);
	var addyr = "🔴";
	var icon1 = "r";
	for (let i = 0; i < indices.length; i++) {
		if (yearList[indices[i]] == yearList[index]) {
			addyr = "🟢";
			icon1 = "g";
			break;
		}
		else if (Math.abs(Number(yearList[indices[i]]) - Number(yearList[index])) <= 3) {
			addyr = "🟡";
			icon1 = "y";
		}		
	}
	document.getElementById("answertext").disabled = true;
	document.getElementById("submitbutton").disabled = true;	
	document.getElementById("MODEButton").disabled = true;		
	if (localStorage.modet == "Normal"){
		document.getElementById(0).classList.add("zoom-in-box");
		document.getElementById(0).innerHTML = "<span class='revealicon'>" + addyr + "</span><br><span class='revealsiz'>Year</span>";
	}
	var tempyear = [];
	for (let j = 0; j < indices.length; j++) {
	    tempyear.push(yearList[indices[j]]);
		tempyear.sort();
		tempyear = [...new Set(tempyear)];
	}	
	setTimeout(function(){ 
		if (clueCount == 7 && localStorage.try5topen != "-----" && localStorage.try6topen == "-----"){
			document.getElementById("trydetail"+(clueCount-2)).style.display = "flex"; 
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail1")[0].innerHTML += "<br>" + addyr;	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).style.display = "flex";
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail1")[0].innerHTML += "<br>" + addyr;	
		}
	}, 0);
	for (let k = 0; k < tempyear.length; k++) { 
		if (clueCount == 7 && localStorage.try5topen == "-----" && localStorage.try6topen == "-----"){ 
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail1")[0].innerHTML += "<br>" + "<span class='smallfont'>" + tempyear[k] + "</span>";	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail1")[0].innerHTML += "<br>" + "<span class='smallfont'>" + tempyear[k] + "</span>";
		}
	}
	var addongs = "🔴";
	var icon2 = "r";
	for (let i = 0; i < indices.length; i++) {
		if (GSList[indices[i]] == GSList[index]) {
			addongs = "🟢";
			icon2 = "g";
			break;
		}
	}
	if (localStorage.modet == "Normal"){
		document.getElementById(1).classList.add("zoom-in-box");
		document.getElementById(1).innerHTML = "<span class='revealicon'>" + addongs + "</span><br><span class='revealsiz'>Slam</span>";
	}
	var tempslam = [];
	for (let j = 0; j < indices.length; j++) {
	    tempslam.push(GSList[indices[j]]);
		tempslam.sort();
		tempslam = [...new Set(tempslam)];
	}	
	  setTimeout(function(){ 
		if (clueCount == 7 && localStorage.try5topen != "-----" && localStorage.try6topen == "-----"){
			document.getElementById("trydetail"+(clueCount-2)).style.display = "flex";
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail2")[0].innerHTML += "<br>" + addongs;	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail2")[0].innerHTML += "<br>" + addongs;
		}
	}, 300);
	for (let k = 0; k < tempslam.length; k++) { 
		if (clueCount == 7 && localStorage.try5topen == "-----" && localStorage.try6topen == "-----"){ 
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail2")[0].innerHTML += "<br>" + "<span class='smallfont'>" + tempslam[k] + "</span>";	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail2")[0].innerHTML += "<br>" + "<span class='smallfont'>" + tempslam[k] + "</span>";
		}
	}	
	var addonctry = "🔴";
	var icon3 = "r";
	for (let i = 0; i < indices.length; i++) {
		if (countryList[indices[i]] == countryList[index]) {
			addonctry = "🟢";
			icon3 = "g";
			break;
		}
		else if (continentList[indices[i]] == continentList[index]) {
			addonctry = "🟡";
			icon3 = "y";
		}		
	}
	if (localStorage.modet == "Normal"){
		document.getElementById(2).classList.add("zoom-in-box");	
		document.getElementById(2).innerHTML = "<span class='revealicon'>" + addonctry + "</span><br><span class='revealsiz'>Country</span>";
	}
	var tempctry = [];
	for (let j = 0; j < indices.length; j++) {
	    tempctry.push(countryList[indices[j]]);
		tempctry.sort();
		tempctry = [...new Set(tempctry)];
	}
	  setTimeout(function(){ 
		if (clueCount == 7 && localStorage.try5topen != "-----" && localStorage.try6topen == "-----"){
			document.getElementById("trydetail"+(clueCount-2)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail3")[0].innerHTML += "<br>" + addonctry;	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail3")[0].innerHTML += "<br>" + addonctry;
		}
	}, 600);	
	for (let k = 0; k < tempctry.length; k++) { 
		if (clueCount == 7 && localStorage.try5topen == "-----" && localStorage.try6topen == "-----"){ 
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail3")[0].innerHTML += "<br>" + "<span class='smallfont'>" + tempctry[k] + "</span>";
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail3")[0].innerHTML += "<br>" + "<span class='smallfont'>" + tempctry[k] + "</span>";
		}
	}	
	var addongnder = "🔴";
	var icon4 = "r";
	if (GenList[indices[0]] == GenList[index]) {
		addongnder = "🟢";
		icon4 = "g";
	}
	if (localStorage.modet == "Normal"){
		document.getElementById(3).classList.add("zoom-in-box");	
		document.getElementById(3).innerHTML = "<span class='revealicon'>" + addongnder + "</span><br><span class='revealsiz'>Gender</span>";
	}
	  setTimeout(function(){ 
		if (clueCount == 7 && localStorage.try5topen != "-----" && localStorage.try6topen == "-----"){
			document.getElementById("trydetail"+(clueCount-2)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail4")[0].innerHTML += "<br>" + addongnder;	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail4")[0].innerHTML += "<br>" + addongnder;
		}
	}, 900);
	if (clueCount == 7 && localStorage.try5topen == "-----" && localStorage.try6topen == "-----"){ 
		document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail4")[0].innerHTML += "<br>" + "<span class='smallfont'>" + GenList[indices[0]] + "</span>";
	}
	else{
		document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail4")[0].innerHTML += "<br>" + "<span class='smallfont'>" + GenList[indices[0]] + "</span>";
	}	
	var addontitle = "🔴";
	var icon5 = "r";
	if (GSTitleList[indices[0]] == GSTitleList[index]) {
		addontitle = "🟢";
		icon5 = "g";
	}
	else if (Math.abs(Number(GSTitleList[indices[0]]) - Number(GSTitleList[index])) <= 3) {
		addontitle = "🟡";
		icon5 = "y";
	}	
	if (localStorage.modet == "Normal"){
		document.getElementById(4).classList.add("zoom-in-box");	
		document.getElementById(4).innerHTML = "<span class='revealicon'>" + addontitle + "</span><br><span class='revealsiz'>Titles</span>";
	}
	  setTimeout(function(){ 
		if (clueCount == 7 && localStorage.try5topen != "-----" && localStorage.try6topen == "-----"){
			document.getElementById("trydetail"+(clueCount-2)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail5")[0].innerHTML += "<br>" + addontitle;	
		}
		else{
			document.getElementById("trydetail"+(clueCount-1)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail5")[0].innerHTML += "<br>" + addontitle;
		}
	}, 1200);	
	if (clueCount == 7 && localStorage.try5topen == "-----" && localStorage.try6topen == "-----"){ 
		document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail5")[0].innerHTML += "<br>" + "<span class='smallfont'>" + GSTitleList[indices[0]] + "</span>";	
	}
	else{
		document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail5")[0].innerHTML += "<br>" + "<span class='smallfont'>" + GSTitleList[indices[0]] + "</span>";
	}	
	var addonplays = "🔴";
	var icon6 = "r";
	if (PlaysList[indices[0]] == PlaysList[index]) {
		addonplays = "🟢";
		icon6 = "g";
	}
	if (localStorage.modet == "Normal"){
		document.getElementById(5).classList.add("zoom-in-box");	
		document.getElementById(5).innerHTML = "<span class='revealicon'>" + addonplays + "</span><br><span class='revealsiz'>Plays</span>";		
	}
	  setTimeout(function(){ 
		if (clueCount == 7 && localStorage.try5topen != "-----" && localStorage.try6topen == "-----"){
			document.getElementById("trydetail"+(clueCount-2)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail6")[0].innerHTML += "<br>" + addonplays;
		}
		else {
			document.getElementById("trydetail"+(clueCount-1)).style.display = "flex";			
			document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail6")[0].innerHTML += "<br>" + addonplays;
		}
		document.getElementById("answertext").disabled = false;
		document.getElementById("submitbutton").disabled = false;
		document.getElementById("MODEButton").disabled = false;
	}, 1500);		
	if (clueCount == 7 && localStorage.try5topen == "-----" && localStorage.try6topen == "-----"){ 
		document.getElementById("trydetail"+(clueCount-2)).getElementsByClassName("detail6")[0].innerHTML += "<br>" + "<span class='smallfont'>" + PlaysList[indices[0]] + "</span>";	
	}
	else{
		document.getElementById("trydetail"+(clueCount-1)).getElementsByClassName("detail6")[0].innerHTML += "<br>" + "<span class='smallfont'>" + PlaysList[indices[0]] + "</span>";
	}	
	addon = addyr + addongs + addonctry + addongnder + addontitle + addonplays;
	var addonttext = icon1 + icon2 + icon3 + icon4 + icon5 + icon6;
	if (addontextarr.length == 0){
		var temp = JSON.parse(localStorage.getItem("addonttext"));
		if (temp != ""){
			addontextarr.push(temp);
		}
	}
	addontextarr.push(addonttext);
	addontextarr = [].concat.apply([], addontextarr);
	localStorage.setItem("addonttext", JSON.stringify(addontextarr));
	return addon;
}

//Confetti Begin
btnParty.addEventListener("click", () => {
	confetti("tsparticles", {
		angle: 90,
		count: 300,
		position: { x: 50, y: 50 },
		spread: 90,
		startVelocity: 50,
		decay: 0.9,
		gravity: 1,
		drift: 0,
		ticks: 200,
		colors: ["#fff", "#f00"],
		shapes: ["square", "circle"],
		scalar: 1,
		zIndex: 2000,
		disableForReducedMotion: true
	});
});
//Confetti End
//Local Storage Initial Setting
window.localStorage;
if (!localStorage.totaltgames) {
	localStorage.setItem("totaltgames", 0);
	localStorage.setItem("totaltwins", 0)
	localStorage.setItem("currenttstreak", 0)
	localStorage.setItem("longesttstreak", 0);
	//localStorage.setItem("cluet0count", 0);
	localStorage.setItem("cluet1count", 0);
	localStorage.setItem("cluet2count", 0);
	localStorage.setItem("cluet3count", 0);
	localStorage.setItem("cluet4count", 0);
	localStorage.setItem("cluet5count", 0);
	localStorage.setItem("cluet6count", 0);
	localStorage.setItem("cluetxcount", 0);
	localStorage.setItem("cluetcount", "");
	localStorage.setItem("gametwon", 0);
	//setTimeout(OpenRules, 1100);
}

if (localStorage.cluet0count > 0) {
	localStorage.cluet1count = Number(localStorage.cluet0count) + Number(localStorage.cluet1count);
	localStorage.setItem("tempcluet0count", 0);
	localStorage.tempcluet0count = localStorage.cluet0count;
	localStorage.removeItem("cluet0count");
}

//Counter Construct
var div = document.getElementById("bb");
setInterval(function () {
	var toDate = new Date();
	var tomorrow = new Date();
	tomorrow.setHours(24, 0, 0, 0);
	var diffMS = tomorrow.getTime() / 1000 - toDate.getTime() / 1000;
	var diffHr = Math.floor(diffMS / 3600);
	diffMS = diffMS - diffHr * 3600;
	var diffMi = Math.floor(diffMS / 60);
	diffMS = diffMS - diffMi * 60;
	var diffS = Math.floor(diffMS);
	var result = ((diffHr < 10) ? "0" + diffHr : diffHr);
	result += ":" + ((diffMi < 10) ? "0" + diffMi : diffMi);
	result += ":" + ((diffS < 10) ? "0" + diffS : diffS);
	if (localStorage.getItem('gameover' + days) == 1) {
		div.innerHTML = result;
	}
}, 1000);

//Open Stats at end of game
function OpenStats() {
	document.getElementById("statsbutton").click();
}

//Open Rules the very first time
function OpenRules() {
	document.getElementById("rulesbutton").click();
}

//Confetti after game successfully completed 
function ConfettiStart() {
	document.getElementById("btnParty").click();
}

//Final Clue Text Attenion 
function FinalClue() {
	document.getElementById("answer").classList.add("popanswer");
}

function disablederror() {
	if (document.getElementById("submitbutton").disabled == true) {
		document.getElementById("answer").style.color = "#dc143c";
		document.getElementById("answer").innerText = "CODE VIOLATION! \nSELECT PLAYER FROM SEARCH RESULTS!";
	}
}

//Button Text
function ResetButton() {
	let HTMLButton = document.getElementById("HTMLButton");
	HTMLButton.innerText = "Share Stats🔊"
}

//Adjustment of ClueCount for last guess
function SetClueCount() {
	clueCount += 1;
	if (clueCount == 6) {
		clueCount = 7;
	}
}

//Display Footer after game
function displayFooter() {
	document.getElementById("pzlhdr").style.display = "block";
	document.getElementById("pzl").style.display = "block";
	document.getElementById("bbhdr").style.display = "block";
	document.getElementById("bb").style.display = "block";
	document.getElementById("HTMLButton").style.display = "block";
	document.getElementById("CoffeButton").style.display = "block";
}
//Baseline Date
var a = new Date(); // Current date now.
var b = new Date(2022, 3, 10, 0, 0, 0, 0); // Start of TENIZ.
var d = (a - b); // Difference in milliseconds.
var days = [Math.floor(Math.random()*yearList.length)];
if (localStorage.getItem('gameover' + days) != 0 && localStorage.getItem('gameover' + days) != 1) {
	localStorage['gameover' + days] = 0;
	localStorage.yeartopen = 0;
	localStorage.slamtopen = 0;
	localStorage.ctrytopen = 0;
	localStorage.gndrtopen = 0;
	//localStorage.fnfltopen = 0;
	//localStorage.lnfltopen = 0;
	localStorage.titltopen = 0;
	localStorage.playtopen = 0;
	localStorage.try1topen = "-----";
	localStorage.try2topen = "-----";
	localStorage.try3topen = "-----";
	localStorage.try4topen = "-----";
	localStorage.try5topen = "-----";
	localStorage.try6topen = "-----";
	//localStorage.try7topen = "";	
	localStorage.firsttload = 0;
    localStorage.modet = "Normal";
	localStorage.gltttext = "ATTEMPT: 1/6 " + "MODE: " + localStorage.modet;	
	localStorage.setItem("addonttext", JSON.stringify(""));
}

function tryload() {
	localStorage.try1topen = document.getElementById('try1').innerText;
	localStorage.try2topen = document.getElementById('try2').innerText;
	localStorage.try3topen = document.getElementById('try3').innerText;
	localStorage.try4topen = document.getElementById('try4').innerText;
	localStorage.try5topen = document.getElementById('try5').innerText;
	localStorage.try6topen = document.getElementById('try6').innerText;
	localStorage.gltttext = document.getElementById('glt').innerText;
	//localStorage.try7topen = document.getElementById('try7').innerText;
}

//Clipboard Code
function myFunction() {

	if (Math.round(localStorage.totaltwins / localStorage.totaltgames * 100) < 50) {
		var winhdr = "🔴"
	}
	else if (Math.round(localStorage.totaltwins / localStorage.totaltgames * 100) >= 50 && Math.round(localStorage.totaltwins / localStorage.totaltgames * 100) < 75) {
		var winhdr = "🟡"
	}
	else if (Math.round(localStorage.totaltwins / localStorage.totaltgames * 100) >= 75) {
		var winhdr = "🟢"
	}
	// //
	if (localStorage.currenttstreak == 0) {
		var cshdr = "🔴"
	}
	else if (localStorage.currenttstreak > 0 && localStorage.currenttstreak < 10) {
		var cshdr = "🟡"
	}
	else if (localStorage.currenttstreak >= 10) {
		var cshdr = "🟢"
	}
	// //
	// if (localStorage.longesttstreak == 0) {
	// 	var mshdr = "\n🔴Max Streak: "
	// }
	// else if (localStorage.longesttstreak > 0 && localStorage.longesttstreak < 20) {
	// 	var mshdr = "\n🟡Max Streak: "
	// }
	// else if (localStorage.longesttstreak >= 20) {
	// 	var mshdr = "\n🟢Max Streak: "
	// }
	cluehdr = "/6 Clues Used To Win!"
/* 	if (localStorage.cluetcount == 0) {
		var clueicon = "🟢⚪⚪⚪⚪⚪⚪";
	}
	else */ if (localStorage.cluetcount == 1) {
		var clueicon = "🟢⚪⚪⚪⚪⚪";
	}
	else if (localStorage.cluetcount == 2) {
		var clueicon = "🔴🟢⚪⚪⚪⚪";
	}
	else if (localStorage.cluetcount == 3) {
		var clueicon = "🔴🔴🟢⚪⚪⚪";
	}
	else if (localStorage.cluetcount == 4) {
		var clueicon = "🔴🔴🔴🟢⚪⚪";
	}
	else if (localStorage.cluetcount == 5) {
		var clueicon = "🔴🔴🔴🔴🟢⚪";
	}
	else if (localStorage.cluetcount == 6) {
		var clueicon = "🔴🔴🔴🔴🔴🟢";
	}
	else if (localStorage.cluetcount == "X") {
		var clueicon = "🔴🔴🔴🔴🔴🔴";
		cluehdr = "/6. All Clues Exhausted!";
	}
	var avggss = Math.round(((localStorage.cluet1count * 1) + (localStorage.cluet2count * 2) + (localStorage.cluet3count * 3) + (localStorage.cluet4count * 4) + (localStorage.cluet5count * 5) + (localStorage.cluet6count * 6) + (localStorage.cluetxcount * 7)) / (Number(localStorage.cluet1count) + Number(localStorage.cluet2count) + Number(localStorage.cluet3count) + Number(localStorage.cluet4count) + Number(localStorage.cluet5count) + Number(localStorage.cluet6count) + Number(localStorage.cluetxcount)));
	if (avggss <= 2) {
		var avggsshdr = "🟢"
	}
	else if (avggss > 2 && avggss < 5) {
		var avggsshdr = "🟡"
	}
	else if (avggss >= 5) {
		var avggsshdr = "🔴"
	}
	//var copyText = "🎾 TENIZ! - Day " + days + " 🎾: " + localStorage.cluetcount + "/6" + "\n\n🟢Played: " + localStorage.totaltgames + winhdr + Math.round(localStorage.totaltwins / localStorage.totaltgames * 100) + cshdr + localStorage.currenttstreak + mshdr + localStorage.longesttstreak + "\n\n💻https://tenizgame.github.io/";
	var copyText = "🎾 TENIZ - Day " + days + " (Mode : " + localStorage.modet + ") 🎾\n\n" + localStorage.cluetcount + cluehdr + "\n" + clueicon + "\nPlayed: " + localStorage.totaltgames + "|Win %: " + Math.round(localStorage.totaltwins / localStorage.totaltgames * 100) + winhdr + "|Avg. Clues: " + avggss + avggsshdr + "\n\n💻https://tenizgame.github.io/";
	/* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText);

	//Button Text
	let HTMLButton = document.getElementById("HTMLButton");
	HTMLButton.innerText = "Copied☑️"
	setTimeout(ResetButton, 1000);
}

//clue reveal 
function ballvanish0() {
	document.getElementById(0).innerHTML = "<span class='revealcol'>" + year + "</span><br><br><span class='revealsiz'>(Year)</span>";
}
function ballvanish1() {
	document.getElementById(1).innerHTML = "<span class='revealcol'>" + grandslam + "</span><br><br><span class='revealsiz'>(Slam)</span>";
}
function ballvanish2() {
	document.getElementById(2).innerHTML = "<span class='revealcol'>" + country + "</span><br><br><span class='revealsiz'>(Country)</span>";
}
function ballvanish3() {
	document.getElementById(3).innerHTML = "<span class='revealcol'>" + gender + "</span><br><br><span class='revealsiz'>(Gender)</span>";
}
function ballvanish4() {
	document.getElementById(4).innerHTML = "<span class='revealcol'>" + titles + "</span><br><br><span class='revealsiz'>(Titles)</span>";
}
function ballvanish5() {
	document.getElementById(5).innerHTML = "<span class='revealcol'>" + plays + "</span><br><br><span class='revealsiz'>(Plays)</span>";
}

//final clue reveal 
function finalcluereveal() {
	document.getElementById(0).innerHTML = "<span class='revealcol'>" + year + "</span><br><br><span class='revealsiz'>Year</span>";
	document.getElementById(1).innerHTML = "<span class='revealcol'>" + grandslam + "</span><br><br><span class='revealsiz'>Slam</span>";
	document.getElementById(2).innerHTML = "<span class='revealcol'>" + country + "</span><br><br><span class='revealsiz'>Country</span>";
	document.getElementById(3).innerHTML = "<span class='revealcol'>" + gender + "</span><br><br><span class='revealsiz'>Gender</span>";
	document.getElementById(4).innerHTML = "<span class='revealcol'>" + titles + "</span><br><br><span class='revealsiz'>Titles</span>";
	document.getElementById(5).innerHTML = "<span class='revealcol'>" + plays + "</span><br><br><span class='revealsiz'>Plays</span>";
}

//Array Manipulation for Clues
function FetchDataEasy() {
	if (!gameOver) {
		var elementid = GetElemid(arrayid);
		elementid = Number(elementid);
		switch (elementid) {
			case 0: document.getElementById(0).classList.add("zoom-in-out-box");
				setTimeout(ballvanish0, 1500);
				localStorage.yeartopen = 1;
				break;
			case 1: document.getElementById(1).classList.add("zoom-in-out-box");
				setTimeout(ballvanish1, 1500);
				localStorage.slamtopen = 1;
				break;
			case 2: document.getElementById(2).classList.add("zoom-in-out-box");
				setTimeout(ballvanish2, 1500);
				localStorage.ctrytopen = 1;
				break;
			case 3: document.getElementById(3).classList.add("zoom-in-out-box");
				setTimeout(ballvanish3, 1500);
				localStorage.gndrtopen = 1;
				break;
			case 4: document.getElementById(4).classList.add("zoom-in-out-box");
				setTimeout(ballvanish4, 1500);
				//localStorage.fnfltopen = 1;
				localStorage.titltopen = 1;
				break;
			case 5: document.getElementById(5).classList.add("zoom-in-out-box");
				setTimeout(ballvanish5, 1500);
				//localStorage.lnfltopen = 1;
				localStorage.playtopen = 1;
				break;
		}
		arrayid.splice(arrayid.indexOf(elementid), 1);
		clueCount += 1;
	}
}

function FetchDataNormal() {
	if (!gameOver) {
		var elementid = GetElemid(arrayid);
		elementid = Number(elementid);
		switch (elementid) {
			case 0: 
				localStorage.yeartopen = 1;
				break;
			case 1: 
				localStorage.slamtopen = 1;
				break;
			case 2: 
				localStorage.ctrytopen = 1;
				break;
			case 3: 
				localStorage.gndrtopen = 1;
				break;
			case 4: 
				//localStorage.fnfltopen = 1;
				localStorage.titltopen = 1;
				break;
			case 5: 
				//localStorage.lnfltopen = 1;
				localStorage.playtopen = 1;
				break;
		}
		arrayid.splice(arrayid.indexOf(elementid), 1);
		clueCount += 1;
	}
}

function GetElemid() {
	var arrayidind = [Math.floor(Math.random() * arrayid.length)];
	var returnid = arrayid[arrayidind];
	return returnid;
}

// *************************Initial Declaration******************************
var enterHit = false;
var clueCount = 0;
var gameOver = false;
var arrayid = [0, 1, 2, 3, 4, 5]
var index = days;
var firstname = firstnameList[index].toLowerCase();
var lastname = lastnameList[index].toLowerCase();
//var firstname = "martina"
//var lastname = "navratilova"
var year = yearList[index];
var gender = GenList[index];
var grandslam = GSList[index];
var country = countryList[index];
var titles = GSTitleList[index];
var plays = PlaysList[index];
//var fnfl = firstname.slice(0, 1).toUpperCase();
//var lnfl = lastname.slice(0, 1).toUpperCase();
var fnwidth = firstname.length;
var lnwidth = lastname.length;
var width = fnwidth + lnwidth;
var answername = "";
answername = firstname.concat(lastname).toLowerCase();
//console.log(answername);
var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

//Modal Code
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)
	})
})

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active')
	modals.forEach(modal => {
		closeModal(modal)
	})
})

closeModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal')
		closeModal(modal)
	})
})

function openModal(modal) {
	if (modal == null) return
	modal.classList.add('active')
	overlay.classList.add('active')
}

function closeModal(modal) {
	if (modal == null) return
	modal.classList.remove('active')
	overlay.classList.remove('active')
}

const openSummaryButtons = document.querySelectorAll('[data-summary-target]')
const closeSummaryButtons = document.querySelectorAll('[data-close1-button]')
const overlay1 = document.getElementById('overlay1')


openSummaryButtons.forEach(button => {
	button.addEventListener('click', () => {
		const summary = document.querySelector(button.dataset.summaryTarget)
		openSummary(summary)
	})
})

overlay1.addEventListener('click', () => {
	const summarys = document.querySelectorAll('.summary.active')
	summarys.forEach(summary => {
		closeSummary(summary)
	})
})

closeSummaryButtons.forEach(button => {
	button.addEventListener('click', () => {
		const summary = button.closest('.summary')
		closeSummary(summary)
	})
})

function openSummary(summary) {
	if (summary == null) return
	UpdateChart();
	summary.classList.add('active')
	overlay1.classList.add('active')
}

function closeSummary(summary) {
	if (summary == null) return
	summary.classList.remove('active')
	overlay1.classList.remove('active')
}

//Chart Code
//color0 = "brown"
color1 = "brown"
color2 = "brown"
color3 = "brown"
color4 = "brown"
color5 = "brown"
color6 = "brown"
colorx = "brown"
function UpdateChart() {
	// var xValues = ["0", "1", "2", "3", "4", "5", "6", "X"];
	var xValues = ["1", "2", "3", "4", "5", "6", "X"];
	// var yValues = [localStorage.cluet0count, localStorage.cluet1count, localStorage.cluet2count, localStorage.cluet3count, localStorage.cluet4count, localStorage.cluet5count, localStorage.cluet6count, localStorage.cluetxcount];
	var yValues = [localStorage.cluet1count, localStorage.cluet2count, localStorage.cluet3count, localStorage.cluet4count, localStorage.cluet5count, localStorage.cluet6count, localStorage.cluetxcount];
	//var barColors = ["red", "green","blue","orange","brown","yellow","cyan","white"];
	// var barColors = [color0, color1, color2, color3, color4, color5, color6, colorx];
	var barColors = [color1, color2, color3, color4, color5, color6, colorx];

	new Chart("myChart", {
		type: "bar",
		data: {
			labels: xValues,
			datasets: [{
				backgroundColor: barColors,
				data: yValues
			}]
		},
		options: {
			legend: { display: false },
			title: {
				display: true,
				text: "Guess Distribution"
			}
		}
	});
}

// Window Load
window.onload = function () {
	intialize();
	UpdateChart();
}


function intialize() {
	let ele = document.getElementById("daycount");
	ele.innerHTML += (days);
	document.getElementById("pzlhdr").style.display = "none";
	document.getElementById("pzl").style.display = "none";
	document.getElementById("bbhdr").style.display = "none";
	document.getElementById("bb").style.display = "none";
	document.getElementById("HTMLButton").style.display = "none";
	document.getElementById("CoffeButton").style.display = "none";
	document.getElementById("historyfirst").style.display = "none";
	document.getElementById("historylast").style.display = "none";
	document.getElementById("trydetail1").style.display = "none";
	document.getElementById("trydetail2").style.display = "none";
	document.getElementById("trydetail3").style.display = "none";
	document.getElementById("trydetail4").style.display = "none";
	document.getElementById("trydetail5").style.display = "none";
	document.getElementById("trydetail6").style.display = "none";
	if (localStorage.modet == "Easy"){
		document.getElementById("MODEButton").style.display = "none";
		document.getElementById("historyfirst").style.display = "flex";
		document.getElementById("historylast").style.display = "flex";		
	}
	document.getElementById('try1').innerText = localStorage.try1topen;
	document.getElementById('try2').innerText = localStorage.try2topen;
	document.getElementById('try3').innerText = localStorage.try3topen;
	document.getElementById('try4').innerText = localStorage.try4topen;
	document.getElementById('try5').innerText = localStorage.try5topen;
	document.getElementById('try6').innerText = localStorage.try6topen;
	document.getElementById('glt').innerText = localStorage.gltttext;
	//document.getElementById('try7').innerText = localStorage.try7topen;
	// Create the game board
	for (let clueindex = 0; clueindex < 6; clueindex++) {
		// <span id="0-0" class="tile">P</span>
		let clue = document.createElement("span");
		clue.id = clueindex;
		clue.classList.add("clue-ball");
		if (clueindex == 0) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Year</div>';
		}
		else if (clueindex == 1) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Slam</div>';
		}
		else if (clueindex == 2) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Country</div>';
		}
		else if (clueindex == 3) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Gender</div>';
		}
		else if (clueindex == 4) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Titles</div>';
		}
		else if (clueindex == 5) {
			clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Plays</div>';
		}
		document.getElementById("clue-ball").appendChild(clue);
	}

	let f = 1
	for (let c = 0; c < fnwidth; c++) {
		let histile = document.createElement("span");
		histile.id = 2 + "-" + c.toString();
		histile.classList.add("histile");
		histile.innerText = "";
		document.getElementById("historyfirst").appendChild(histile);
	}


	let l = 1
	for (let c = fnwidth; c < width; c++) {
		let histile = document.createElement("span");
		histile.id = 2 + "-" + c.toString();
		histile.classList.add("histile");
		histile.innerText = "";
		document.getElementById("historylast").appendChild(histile);
	}

	var winpct = Math.round(localStorage.totaltwins / localStorage.totaltgames * 100);
	document.getElementById(6).innerText = "Played: " + localStorage.totaltgames;
	document.getElementById(7).innerText = "Win %: " + winpct;
	document.getElementById(8).innerText = "Current Streak: " + localStorage.currenttstreak;
	document.getElementById(9).innerText = "Max Streak: " + localStorage.longesttstreak;
	var storedaddon = JSON.parse(localStorage.getItem("addonttext"));
	//Current Day Game Over
	if (localStorage.getItem('gameover' + days) == 1) {
		document.getElementById("answertext").hidden = true;
		document.getElementById("submitbutton").hidden = true;
		document.getElementById("MODEButton").style.display = "none";
		document.getElementById("historyfirst").style.display = "flex";
		document.getElementById("historylast").style.display = "flex";	
		finalcluereveal();
		storedadd();
		if (localStorage.gametwon == 1) {
			for (let c = 0; c < width; c++) {
				let gameTile = document.getElementById(2 + '-' + c.toString());
				gameTile.innerText = answername[c];
				gameTile.classList.add("correct", "animated");
			}
			document.getElementById("answer").style.color = "#FDFEFF";
			document.getElementById("answer").innerText = "YOU HAVE ALREADY WON THIS ROUND.\nNEXT MATCH SCHEDULED FOR TOMORROW!";
			/* setTimeout(ConfettiStart, 1000); */
			setTimeout(OpenStats, 1100);
		}
		else {
			for (let c = 0; c < width; c++) {
				let gameTile = document.getElementById(2 + '-' + c.toString());
				gameTile.innerText = answername[c];
				gameTile.classList.remove("correct");
				gameTile.classList.add("absent", "animated");
			}
			document.getElementById("answer").style.color = "#dc143c";
			document.getElementById("answer").innerText = "HARD LUCK TODAY. \nNEXT TOURNAMENT STARTS TOMORROW!";
			setTimeout(OpenStats, 1100);
		}
		displayFooter();
	}
	// Default Path
	else {
		if (localStorage.firsttload == 0) {
			document.getElementById("answer").classList.remove("popanswer");
			document.getElementById("answer").style.color = "#FDFEFF";
			document.getElementById("answer").innerText = "LOVE-ALL!\nREAD THE GAME RULES BEFORE PLAYING.";
			setTimeout(FinalClue, 2000);
			if (localStorage.modet == "Easy") {
			setTimeout(FetchDataEasy, 1000);
			}
			else {
			setTimeout(FetchDataNormal, 1000);
			}				
			localStorage.firsttload = 1
		}
		else {
			document.getElementById("answer").classList.remove("popanswer");
			document.getElementById("answer").style.color = "#FDFEFF";
			if (localStorage.modet == "Normal"){
				document.getElementById("answer").innerText = "MATCH RESUMED. PLAY!";
			}
			else {
				document.getElementById("answer").innerText = "MATCH RESUMED IN EASY MODE. PLAY!";
			}
			if (localStorage.yeartopen == 1) {
				if (localStorage.modet == "Easy") {
					document.getElementById(0).innerHTML = "<span class='revealcol'>" + year + "</span><br><br><span class='revealsiz'>(Year)</span>";
				}
				arrayid.splice(arrayid.indexOf(0), 1);
				SetClueCount();
			}
			if (localStorage.slamtopen == 1) {
				if (localStorage.modet == "Easy") {
					document.getElementById(1).innerHTML = "<span class='revealcol'>" + grandslam + "</span><br><br><span class='revealsiz'>(Slam)</span>";
				}
				arrayid.splice(arrayid.indexOf(1), 1);
				SetClueCount();
			}
			if (localStorage.ctrytopen == 1) {
				if (localStorage.modet == "Easy") {
					document.getElementById(2).innerHTML = "<span class='revealcol'>" + country + "</span><br><br><span class='revealsiz'>(Country)</span>";
				}
				arrayid.splice(arrayid.indexOf(2), 1);
				SetClueCount();
			}
			if (localStorage.gndrtopen == 1) {
				if (localStorage.modet == "Easy") {
					document.getElementById(3).innerHTML = "<span class='revealcol'>" + gender + "</span><br><br><span class='revealsiz'>(Gender)</span>";
				}
				arrayid.splice(arrayid.indexOf(3), 1);
				SetClueCount();
			}
			//if (localStorage.fnfltopen == 1) {
			if (localStorage.titltopen == 1) {
				if (localStorage.modet == "Easy") {
					document.getElementById(4).innerHTML = "<span class='revealcol'>" + titles + "</span><br><br><span class='revealsiz'>(Titles)</span>";
				}
				arrayid.splice(arrayid.indexOf(4), 1);
				SetClueCount();
			}
			//if (localStorage.lnfltopen == 1) {
			if (localStorage.playtopen == 1) {
				if (localStorage.modet == "Easy") {
					document.getElementById(5).innerHTML = "<span class='revealcol'>" + plays + "</span><br><br><span class='revealsiz'>(Plays)</span>";
				}
				arrayid.splice(arrayid.indexOf(5), 1);
				SetClueCount();
			}
			if (localStorage.modet == "Normal") {
				var storedaddonlast = storedaddon[storedaddon.length-1];
				for (let i = 0; i < storedaddonlast.length; i++) {
					if (storedaddonlast[i] == "r"){	
						document.getElementById(i).innerHTML = "<span class='revealicon'>" + "🔴";
					}
					else if (storedaddonlast[i] == "y"){
						document.getElementById(i).innerHTML = "<span class='revealicon'>" + "🟡";
					}
					else if (storedaddonlast[i] == "g"){
						document.getElementById(i).innerHTML = "<span class='revealicon'>" + "🟢";
					}                                        
				}
				if (localStorage.addonttext != ""){
					document.getElementById(0).innerHTML += "</span><br><span class='revealsiz'>Year</span>";
					document.getElementById(1).innerHTML += "</span><br><span class='revealsiz'>Slam</span>";
					document.getElementById(2).innerHTML += "</span><br><span class='revealsiz'>Country</span>";
					document.getElementById(3).innerHTML += "</span><br><span class='revealsiz'>Gender</span>";
					document.getElementById(4).innerHTML += "</span><br><span class='revealsiz'>Titles</span>";
					document.getElementById(5).innerHTML += "</span><br><span class='revealsiz'>Plays</span>";
				}
			}
			storedadd();
		}	
		if (localStorage.try1topen == "-----"){
			document.getElementById('try1').style.border = "2px solid #6AAA64"
		}
		else if (localStorage.try2topen == "-----"){
			document.getElementById('try2').style.border = "2px solid #6AAA64"
		}
		else if (localStorage.try3topen == "-----"){
			document.getElementById('try3').style.border = "2px solid #6AAA64"
		}
		else if (localStorage.try4topen == "-----"){
			document.getElementById('try4').style.border = "2px solid #6AAA64"
		}
		else if (localStorage.try5topen == "-----"){
			document.getElementById('try5').style.border = "2px solid #6AAA64"
		}
		else if (localStorage.try6topen == "-----"){
			document.getElementById('try6').style.border = "2px solid #6AAA64"
		}	
		// Listen for Key Press
		/* 		document.addEventListener("keyup", (e) => {
					processInput(e);
				}) */
	}
}

function switchmode() {
	clearzoomin();
    document.getElementById("MODEButton").style.display = "none";
    for (let i = 0; i < 6; i++) {
        document.getElementById(i).innerHTML = "";
    }
	document.getElementById(0).innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Year</div>';	
	document.getElementById(1).innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Slam</div>';
	document.getElementById(2).innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Country</div>';
	document.getElementById(3).innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Gender</div>';
	document.getElementById(4).innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Titles</div>';
	document.getElementById(5).innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Plays</div>';
	document.getElementById("answer").classList.remove("popanswer");
	document.getElementById("answer").style.color = "#FDFEFF";
	document.getElementById("answer").innerText = "MATCH RESUMED IN EASY MODE. PLAY!";

	if (localStorage.yeartopen == 1) {
		document.getElementById(0).innerHTML = "<span class='revealcol'>" + year + "</span><br><br><span class='revealsiz'>(Year)</span>";
	}
	if (localStorage.slamtopen == 1) {
		document.getElementById(1).innerHTML = "<span class='revealcol'>" + grandslam + "</span><br><br><span class='revealsiz'>(Slam)</span>";
	}
	if (localStorage.ctrytopen == 1) {
		document.getElementById(2).innerHTML = "<span class='revealcol'>" + country + "</span><br><br><span class='revealsiz'>(Country)</span>";
	}
	if (localStorage.gndrtopen == 1) {
		document.getElementById(3).innerHTML = "<span class='revealcol'>" + gender + "</span><br><br><span class='revealsiz'>(Gender)</span>";
	}
	if (localStorage.titltopen == 1) {
		document.getElementById(4).innerHTML = "<span class='revealcol'>" + titles + "</span><br><br><span class='revealsiz'>(Titles)</span>";
	}
	if (localStorage.playtopen == 1) {
		document.getElementById(5).innerHTML = "<span class='revealcol'>" + plays + "</span><br><br><span class='revealsiz'>(Plays)</span>";
	}
}

/* function processKey() {
	e = { "code": this.id };
	processInput(e);
} */

function submitMe() {
	var input = document.getElementById('answertext').value;
	//console.log(clueCount);
	if (input != "") {
		switch (clueCount) {
			/* 			case 0: document.getElementById('try1').innerText = document.getElementById('answertext').value;
							break; */
			case 1: document.getElementById('try1').innerText = document.getElementById('answertext').value;
				break;
			case 2: document.getElementById('try2').innerText = document.getElementById('answertext').value;
				break;
			case 3: document.getElementById('try3').innerText = document.getElementById('answertext').value;
				break;
			case 4: document.getElementById('try4').innerText = document.getElementById('answertext').value;
				break;
			case 5: document.getElementById('try5').innerText = document.getElementById('answertext').value;
				break;
			case 7: document.getElementById('try6').innerText = document.getElementById('answertext').value;
				break;
		}
		document.getElementById('answertext').value = "";
		document.getElementById("submitbutton").disabled = true;
		document.getElementById("result").hidden = true;
		update(input);
	}
	else {
		document.getElementById("answer").style.color = "#dc143c";
		document.getElementById("answer").innerText = "DISORDERLY CONDUCT!\nPLEASE ENTER ANY NAME TO SUBMIT!";
	}
}

function update(input) {
	//string up the guesses into the word
	//first name
	for (let c = 0; c < fnwidth; c++) {
		let historyTile = document.getElementById(2 + '-' + c.toString());
	}

	//last name
	for (let c = fnwidth; c < width; c++) {
		let historyTile = document.getElementById(2 + '-' + c.toString());

	}

	input = input.replace(/\s+/g, '');
	guess = input.toLowerCase();
	if (localStorage.modet == "Normal") {
		clearzoomin();
	}
	
	//console.log(guess);

	if (guess == answername) {
		for (let c = 0; c < width; c++) {
			let gameTile = document.getElementById(2 + '-' + c.toString());
			gameTile.innerText = answername[c];
			gameTile.classList.remove("correct", "poptile");
			gameTile.classList.add("correct", "animated");
		}
		document.getElementById("MODEButton").style.display = "none";
		document.getElementById("historyfirst").style.display = "flex";
		document.getElementById("historylast").style.display = "flex";	
		document.getElementById("clue-ball").classList.add("animated");
		document.getElementById("answer").style.color = "#FDFEFF";
		localStorage.totaltgames = Number(localStorage.totaltgames) + 1;
		localStorage.totaltwins = Number(localStorage.totaltwins) + 1;
		localStorage.currenttstreak = Number(localStorage.currenttstreak) + 1;
		if (Number(localStorage.currenttstreak) > Number(localStorage.longesttstreak)) {
			localStorage.longesttstreak = localStorage.currenttstreak;
		}
		winpct = Math.round(localStorage.totaltwins / localStorage.totaltgames * 100);
		switch (clueCount) {
			//case 0: localStorage.cluet0count = Number(localStorage.cluet0count) + 1;
			/* 			case 0: document.getElementById('try1').innerText += " ✔️";
							//color0 = "green";
							break; */
			case 1: localStorage.cluet1count = Number(localStorage.cluet1count) + 1;
			    document.getElementById("try1").scrollIntoView(true);
				document.getElementById('try1').innerText += " ✔️";
				color1 = "green";
				break;
			case 2: localStorage.cluet2count = Number(localStorage.cluet2count) + 1;
			    document.getElementById("try2").scrollIntoView(true);
				document.getElementById('try2').innerText += " ✔️";
				color2 = "green";
				break;
			case 3: localStorage.cluet3count = Number(localStorage.cluet3count) + 1;
				document.getElementById("try3").scrollIntoView(true);
				document.getElementById('try3').innerText += " ✔️";
				color3 = "green";
				break;
			case 4: localStorage.cluet4count = Number(localStorage.cluet4count) + 1;
				document.getElementById("try4").scrollIntoView(true);
				document.getElementById('try4').innerText += " ✔️";
				color4 = "green";
				break;
			case 5: localStorage.cluet5count = Number(localStorage.cluet5count) + 1;
				document.getElementById("try5").scrollIntoView(true);
				document.getElementById('try5').innerText += " ✔️";
				color5 = "green";
				break;
			case 7: localStorage.cluet6count = Number(localStorage.cluet6count) + 1;
				document.getElementById("try6").scrollIntoView(true);
				document.getElementById('try6').innerText += " ✔️";
				color6 = "green";
				break;
		}
		tryload();
		if (clueCount == 7) {
			localStorage.cluetcount = 6;
		}
		else {
			localStorage.cluetcount = Number(clueCount);
		}
		document.getElementById(6).innerText = "Played: " + localStorage.totaltgames;
		document.getElementById(7).innerText = "Win %: " + winpct;
		document.getElementById(8).innerText = "Current Streak: " + localStorage.currenttstreak;
		document.getElementById(9).innerText = "Max Streak: " + localStorage.longesttstreak;
		document.getElementById("answer").innerText = "GAME, SET and MATCH!\nDONT FORGET TO SHARE YOUR RESULTS.";
		setTimeout(ConfettiStart, 1000);
		gameOver = true;
		finalcluereveal();
		document.getElementById("answertext").hidden = true;
		document.getElementById("submitbutton").hidden = true;
		displayFooter();
		localStorage.gametwon = 1;
		localStorage.setItem(('gameover' + days), 1);
		setTimeout(OpenStats, 4800);
	}
	/* 	else if (guess == "") {
			document.getElementById("boardfirst").classList.add("shaketile");
			document.getElementById("boardlast").classList.add("shaketile");
			document.getElementById("answer").style.color = "red";
			document.getElementById("answer").innerText = "PLEASE ENTER ANY NAME TO SUBMIT!";
		} */
	else {
		document.getElementById("answer").style.color = "#dc143c";
		if (!gameOver && clueCount < 6) {
			/* 			document.getElementById("boardfirst").classList.add("shaketile");
						document.getElementById("boardlast").classList.add("shaketile"); */
			document.getElementById("answer").innerText = "FAULT! TRY AGAIN.";
			if (localStorage.modet == "Easy") {
				//setTimeout(FetchDataEasy, 1000);
				FetchDataEasy();
				}
			else {
				FetchDataNormal();
			}	
		}
		if (!gameOver && clueCount == 6) {
			/* 			document.getElementById("boardfirst").classList.add("shaketile");
						document.getElementById("boardlast").classList.add("shaketile"); */
			document.getElementById("answer").classList.remove("popanswer");
			if (document.getElementById("answer").classList.contains("popanswer")) {
			}
			document.getElementById("answer").style.color = "#dc143c";
			document.getElementById("answer").innerText = "MATCH POINT DOWN!\nTHIS IS YOUR LAST CHANCE.";
			setTimeout(FinalClue, 2000);
			clueCount += 1;
		}
		else if (!gameOver && clueCount > 6) {
			for (let c = 0; c < width; c++) {
				let gameTile = document.getElementById(2 + '-' + c.toString());
				gameTile.innerText = answername[c];
				gameTile.classList.remove("correct", "poptile");
				gameTile.classList.add("absent", "animated");
			}
			document.getElementById("MODEButton").style.display = "none";
			document.getElementById("historyfirst").style.display = "flex";
			document.getElementById("historylast").style.display = "flex";	
			document.getElementById("clue-ball").classList.add("animated");
			document.getElementById("answer").style.color = "#dc143c";
			document.getElementById("answer").innerText = "HARD LUCK TODAY. \nNEXT TOURNAMENT STARTS TOMORROW!";
			localStorage.totaltgames = Number(localStorage.totaltgames) + 1;
			winpct = Math.round(localStorage.totaltwins / localStorage.totaltgames * 100);
			localStorage.currenttstreak = 0;
			localStorage.cluetxcount = Number(localStorage.cluetxcount) + 1;
			colorx = "green";
			localStorage.cluetcount = "X";
			document.getElementById(6).innerText = "Played:	 " + localStorage.totaltgames;
			document.getElementById(7).innerText = "Win %: " + winpct;
			document.getElementById(8).innerText = "Current Streak: " + localStorage.currenttstreak;
			gameOver = true;
			document.getElementById('try6').innerText += " ❌ ";
			document.getElementById("try6").scrollIntoView(true);
			document.getElementById("try6").classList.add("shaketile");
			var addon = getindices();
			//document.getElementById('try6').innerText += addon;
			document.getElementById('try6').style.border = "2px solid #dc143c";			
			tryload();
			document.getElementById("answertext").hidden = true;
			document.getElementById("submitbutton").hidden = true;
			finalcluereveal();
			displayFooter();
			localStorage.gametwon = 0;
			localStorage.setItem(('gameover' + days), 1);
			setTimeout(OpenStats, 3000);
		}
		if (!gameOver) {
			switch (clueCount) {
				/* 				case 1: document.getElementById('try1').innerText += " ❌";
									break; */
				case 2: document.getElementById('try1').innerText += " ❌ ";
					document.getElementById("try1").scrollIntoView(true);
					document.getElementById("try1").classList.add("shaketile");
					document.getElementById('glt').innerText = "ATTEMPT: 2/6 " + "MODE: " + localStorage.modet;
					var addon = getindices();
					//document.getElementById('try1').innerText += addon;
					document.getElementById('try1').style.border = "2px solid #dc143c";
					document.getElementById('try2').style.border = "2px solid #6AAA64";
					break;
				case 3: document.getElementById('try2').innerText += " ❌ ";
					document.getElementById("try2").scrollIntoView(true);
					document.getElementById("try2").classList.add("shaketile");
					document.getElementById('glt').innerText = "ATTEMPT: 3/6 " + "MODE: " + localStorage.modet;
					var addon = getindices();
					//document.getElementById('try2').innerText += addon;
					document.getElementById('try2').style.border = "2px solid #dc143c";
					document.getElementById('try3').style.border = "2px solid #6AAA64";					
					break;
				case 4: document.getElementById('try3').innerText += " ❌ ";
					document.getElementById("try3").scrollIntoView(true);
					document.getElementById("try3").classList.add("shaketile");
					document.getElementById('glt').innerText = "ATTEMPT: 4/6 " + "MODE: " + localStorage.modet;
					var addon = getindices();
					//document.getElementById('try3').innerText += addon;
					document.getElementById('try3').style.border = "2px solid #dc143c";
					document.getElementById('try4').style.border = "2px solid #6AAA64";					
					break;
				case 5: document.getElementById('try4').innerText += " ❌ ";
					document.getElementById("try4").scrollIntoView(true);	
					document.getElementById("try4").classList.add("shaketile");
					document.getElementById('glt').innerText = "ATTEMPT: 5/6 " + "MODE: " + localStorage.modet;
					var addon = getindices();
					//document.getElementById('try4').innerText += addon;
					document.getElementById('try4').style.border = "2px solid #dc143c";
					document.getElementById('try5').style.border = "2px solid #6AAA64";					
					break;
				case 7: document.getElementById('try5').innerText += " ❌ ";
				    document.getElementById("try5").scrollIntoView(true);			
					document.getElementById("try5").classList.add("shaketile");
					document.getElementById('glt').innerText = "ATTEMPT: 6/6 " + "MODE: " + localStorage.modet;
					var addon = getindices();
					//document.getElementById('try5').innerText += addon;
					document.getElementById('try5').style.border = "2px solid #dc143c";
					document.getElementById('try6').style.border = "2px solid #6AAA64";					
					break;
			}
		}
		tryload();
	}
} 
