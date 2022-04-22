
var search_terms = ["Adriano Panatta", "Albert Costa", "Amelie Mauresmo", "Ana Ivanovic", "Anastasia Myskina", "Andre Agassi", "Andres Gimeno", "Andres Gomez", "Andy Murray", "Andy Roddick", "Angelique Kerber", "Arantxa Sanchez", "Arthur Ashe", "Ashleigh Barty", "Barbara Jordan", "Barbora Krejcikova", "Bianca Andreescu", "BillieJean King", "Bjorn Borg", "Boris Becker", "Brian Teacher", "Carlos Moya", "Caroline Wozniacki", "Chris Evert", "Chris ONeil", "Conchita Martinez", "Daniil Medvedev", "Dominic Thiem", "Emma Raducanu", "Evonne Goolagong", "Flavia Pennetta", "Francesca Schiavone", "Gabriela Sabatini", "Garbine Muguruza", "Gaston Gaudio", "Goran Ivanisevic", "Guillermo Vilas", "Gustavo Kuerten", "Hana Mandlikova", "Iga Swiatek", "Ilie Nastase", "Iva Majoli", "Ivan Lendl", "Jan Kodes", "Jana Novotna", "Jelena Ostapenko", "Jennifer Capriati", "Jim Courier", "Jimmy Connors", "Johan Kriek", "John McEnroe", "John Newcombe", "JuanCarlos Ferrero", "JuanMartin DelPotro", "Justine Henin", "Ken Rosewall", "Kerry Reid", "Kim Clijsters", "Li Na", "Lindsay Davenport", "Lleyton Hewitt", "Manuel Orantes", "Marat Safin", "Margaret Court", "Maria Sharapova", "Marin Cilic", "Marion Bartoli", "Mark Edmondson", "Martina Hingis", "Martina Navratilova", "Mary Pierce", "Mats Wilander", "Michael Chang", "Michael Stich", "Mima Jausovec", "Monica Seles", "Nancy Richey", "Naomi Osaka", "Novak Djokovic", "Pat Cash", "Patrick Rafter", "Pete Sampras", "Petr Korda", "Petra Kvitova", "Rafael Nadal", "Richard Krajicek", "Rod Laver", "Roger Federer", "Roscoe Tanner", "Samantha Stosur", "Serena Williams", "Sergi Bruguera", "Simona Halep", "Sloane Stephens", "Sofia Kenin", "Stan Smith", "Stan Wawrinka", "Stefan Edberg", "Steffi Graf", "Sue Barker", "Svetlana Kuznetsova", "Thomas Johansson", "Thomas Muster", "Tracy Austin", "Venus Williams", "Victoria Azarenka", "Virginia Ruzici", "Virginia Wade", "Vitas Gerulaitis", "Yannick Noah", "Yevgeny Kafelnikov",];
function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input)
  return search_terms.filter(function(term) {
	  if (term.toLowerCase().match(reg)) {
  	  return term;
	  }
  });
}
 
function showResults(val) {
  res = document.getElementById("result");
  res.innerHTML = '';
  let list = '';
  let terms = autocompleteMatch(val);
  for (i=0; i<terms.length; i++) {
    if (i === 3) { break; }
    list += '<li>' + terms[i] + '</li>';
  }
  res.innerHTML = '<ul>' + list + '</ul>';
}


