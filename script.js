//Skapa en div variabel.
var divFirst = document.createElement("div");
    //Lägg till diven i body i index.html och ge den ett id.
    document.body.appendChild(divFirst);
    divFirst.id = "divFirst";

//Skapa en p variabel.
var pNamn = document.createElement("p");
    //Spara mitt namn i p och lägg till i den första diven.
    pNamn.innerText = "Simon Jansson";
    document.getElementById("divFirst").appendChild(pNamn);

//Skapa en andra div variabel.
var divSecond = document.createElement("div");
    //Lägg till diven i body efter den första diven och ge den ett id.
    document.body.appendChild(divSecond);
    divSecond.id = "divSecond";

//Skapa en array med 4 saker jag är bra på.
var goodStuff = ["Ha för många flikar uppe i webläsaren", "dricka kaffe", "åka snowboard", "komma ihåg saker"];

//Skapa en p variabel att spara en string från arrayen.
var pGoodStuff = document.createElement("p");

//Skapa en string från arrayen och spara den i en TextNode.
var t = document.createTextNode(goodStuff[0] + ", " + goodStuff[1] + ", " + goodStuff[2] + ", " + goodStuff[3]);

    //Lägg till TextNoden i p variabeln och lägg till p variabeln i den andra diven i index.html.
    pGoodStuff.appendChild(t);
    document.getElementById("divSecond").appendChild(pGoodStuff);
