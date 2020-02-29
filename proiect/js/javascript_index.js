
//functie de ascundere pentru tag-uri
function ascundereTag(elementDeAscuns, timp_ascundere)
{    
    setTimeout(function(){
            elementDeAscuns.style.opacity = 0;
    }, timp_ascundere);
}




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

    /* vector de butoane ca sa pot deschide linkuri cu tag-ul button din html*/
    var butoane_divDesen = document.getElementsByClassName("butonTabel");

    var desen = document.getElementsByClassName("desen");

    var butoane_nav = document.getElementsByClassName("buton");

    butoane_nav[0].onclick = function()
    {
        window.open("index.html", "_self");
    }
    /* pe click sa imi deschida un link nou, in tab-ul curent */
    butoane_divDesen[0].onclick = function()
    {
        ascundereTag(desen[1], 400);
        ascundereTag(desen[2], 800);
        ascundereTag(desen[3], 1200);
        ascundereTag(desen[0], 1500);
        setTimeout(function(){
            window.open("naruto.html", "_self");
        }, 1900);
        
    }

    butoane_divDesen[1].onclick = function()
    {
        
        ascundereTag(desen[0], 400);
        ascundereTag(desen[2], 800);
        ascundereTag(desen[3], 1200);
        ascundereTag(desen[1], 1500);
        setTimeout(function(){
            window.open("spongebob.html", "_self");
        }, 1900);
    }

    butoane_divDesen[2].onclick = function()
    {
        ascundereTag(desen[0], 400);
        ascundereTag(desen[1], 800);
        ascundereTag(desen[3], 1200);
        ascundereTag(desen[2], 1500);
        setTimeout(function(){
            window.open("scoobydoo.html", "_self");
        }, 1900);
    }

    butoane_divDesen[3].onclick = function()
    {
        ascundereTag(desen[0], 400);
        ascundereTag(desen[1], 800);
        ascundereTag(desen[2], 1200);
        ascundereTag(desen[3], 1500);
        setTimeout(function(){
            window.open("tom.html", "_self");
        }, 1900);
    }


    
}

