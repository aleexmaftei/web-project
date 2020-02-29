window.onload = function()
{
    /* sa mearga butonul "acasa" si detalii */
    var butoane_nav = document.getElementsByClassName("buton");
    butoane_nav[0].onclick = function()
    {
        window.open("index.html", "_self");
    }
    butoane_nav[2].onclick = function()
    {
        window.open("detalii.html", "_self");
    }
    butoane_nav[3].onclick = function()
    {
        window.open("pr2.html", "_self");
    }

    //adaugarea unui text in html care cand apesi iti adauga poze
    var paragraf = document.createElement("p");
    var text = document.createTextNode("Click aici pentru a incarca poze!"); //crearea textului
    paragraf.appendChild(text); //punerea textului in paragraf
    paragraf.style.fontSize = "18px";
    paragraf.style.marginLeft = "25px";
    document.getElementById("galerie").appendChild(paragraf); /* sa il puna in body */
    
    //adaugarea unor poze 
    var galerie_poze = document.getElementsByClassName("galerie_poze");
    var figure = document.getElementsByClassName("figure");
    var nrPozeCurent = 0;

    paragraf.onclick = function()
    {
        galerie_poze[nrPozeCurent].style.width = "300px";
        galerie_poze[nrPozeCurent].style.height = "auto";
        galerie_poze[nrPozeCurent].style.display = "inline-block";
        galerie_poze[nrPozeCurent].style.padding = "20px";
        galerie_poze[nrPozeCurent].style.verticalAlign = "top";
        figure[nrPozeCurent].style.display = "inline-block";
        nrPozeCurent++;

        figure[nrPozeCurent - 1].onclick = function()
        {
            this.remove();
            nrPozeCurent--;
        }
    }


    //selector CSS pentru h1 din detalii ca sa imi schimbe culoarea in alb, returneaza primul ID cu cel cerut
    document.querySelector("#titluBody").style.backgroundColor = "#F2F3F4";
}