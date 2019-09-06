var div = document.createElement("div");
var paragraph = document.createElement("p");
var text = document.createTextNode("Hej! Mitt namn är Jonas");
paragraph.appendChild(text);
div.appendChild(paragraph);
document.body.appendChild(div)


var div2 = document.createElement("div");

var bra = [
    "steka fisk",
    "koka soppa",
    "hacka lök",
    "baka bröd",
];

for (var i = 0; i < bra.length; i++) {
    var paragraph = document.createElement("p");
    var text = document.createTextNode(bra[i]);
    paragraph.appendChild(text);
    div2.appendChild(paragraph);
    document.body.appendChild(div2);

}
