
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



    //timer pentru intrebari
    const start = Date.now();
    console.log("Timer-ul incepe acum acum!");

    const buton_intrebari = document.getElementsByClassName("buton_intrebari");
    
    buton_intrebari[0].onclick = function()
    {
        //afisarea timpului in care s-a raspuns
        const milisecunde = Date.now() - start;
        console.log(`Timp de raspuns = ${Math.floor(milisecunde/1000)} s`);
          

        //valorile alese de user
        const int1 = document.intrebari.raspuns1.value;
        const int2 = document.intrebari.raspuns2.value;
        const int3 = document.intrebari.raspuns3.value;
        const int4 = document.intrebari.raspuns4.value;

        var ok1 = 0; 
        var ok2 = 0; 
        var ok3 = 0; 
        var ok4 = 0;

        if(int1 == "rasp1")
            ok1 = 1;
        if(int2 == "rasp5")
            ok2 = 1;
        if(int3 == "rasp9")
            ok3 = 1;
        if(int4 == "rasp13")
            ok4 = 1;
        

        const raspunsuri = document.getElementsByClassName("wrap_intrebare");
        if(ok1 == 0)
           raspunsuri[0].classList.add("gresit");
        else raspunsuri[0].classList.add("corect");

        if(ok2 == 0)
            raspunsuri[1].classList.add("gresit");
        else raspunsuri[1].classList.add("corect");

        if(ok3 == 0)
            raspunsuri[2].classList.add("gresit");
        else raspunsuri[2].classList.add("corect");

        if(ok4 == 0)
            raspunsuri[3].classList.add("gresit");
        else raspunsuri[3].classList.add("corect");

    }


    //https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
        // pentru local storage
        const form_lista = document.getElementById("form_lista");
        const ul_lista = document.getElementById("ul_lista");
        const input_lista = document.getElementById("input_lista");
        const buton_lista = document.getElementById("sterge_lista");

        
        //functie pentru adaugare in lista (pentru ca se va executa de mai multe ori)
        const adaugaInLista = text => {
            //crearea continutului unui ul
            const li = document.createElement("li");
            li.textContent = text;
            ul_lista.appendChild(li);
        }

        //daca exista ceva inainte in localStorage va prelua valorile din el
    let vector_lista = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

    //setItem(unde, de unde);
    //ca sa adauge in localStorage
    localStorage.setItem("items", JSON.stringify(vector_lista)); //sa adauge in items ce e in vector
    const data = JSON.parse(localStorage.getItem("items")); //ca sa converteasca ce e in localStorage si sa putem lucra mai tarziu cu ele

        /*
        pentru fiecare submit va opri actiunea default de submit pentru ca nu
        trimitem intr-o baza de date
        in schimb ea va trimite valoarea din input_lista
        */
        form_lista.addEventListener("submit", function(ev) {
            ev.preventDefault(); //daca dau enter, o sa imi reseteze pagina, de asta e pus asta aici

            //pentru fiecare input nou, bagam in vector_lista
            vector_lista.push(input_lista.value);
            //ca sa adauge in localStorage
            localStorage.setItem("items", JSON.stringify(vector_lista));
            adaugaInLista(input_lista.value);
            //input_lista = '';
        });

        //adauga in front-end de fiecare data cand redeschidem pagina pentru orice este in data
        data.forEach(item => {
            adaugaInLista(item);
        });

        //stergerea la tot ce e in lista
        buton_lista.addEventListener("click", function(){
            localStorage.clear();
            while(ul_lista.firstChild)
            {
                ul_lista.removeChild(ul_lista.firstChild);
            }
        });

    var cateLiniiTabel = document.getElementById("ul_lista").children.length;
    console.log("linii tabel: " + cateLiniiTabel);
    
    document.getElementsByTagName("ul")[0].style.backgroundColor = "red";
    
    let element = document.getElementsByTagName("li")[0];
    if(typeof(element) != 'undefined' && element != null) //daca exista si nu e null
    {
        document.getElementsByTagName("li")[0].parentElement.style.backgroundColor = "white";
    }

    //colorat text
    const buton = document.getElementsByClassName("buton_formular");
    const text = document.getElementsByClassName("text");
    const culori_butoane = document.getElementsByClassName("culori");

    var n = text.length - 1;
    buton[0].onclick = function()
    {
        var culoare;
        for(let i = 0; i < culori_butoane.length; i++)
            if(culori_butoane[i].checked)
                {
                    ///sa imi afiseze valorile rgb din css in consola
                    const valoriRGB = window.getComputedStyle(text[n]);
                    console.log(valoriRGB.backgroundColor);

                    culoare = culori_butoane[i].value;
                    text[n].style.color = culoare;

                    //chestii random pt background text
                    var r, g, b;
                    var M = 255;
                    r = Math.floor(Math.random() * M);
                    g = Math.floor(Math.random() * M);
                    b = Math.floor(Math.random() * M);

                    text[n].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
                    
                    ///innerHTMl ca sa imi schimbe textul fix cand imi modifica culoarea
                    text[n].innerHTML = "S-au schimbat: textul, culorile si clasa!";

                    
                    ///schimbarea clasei formular1 -> formular2
                    document.getElementById("ModificatDupaClick").className = "formular2";
                }
    }

    

    // Functie ca sa modifici valorile din t2 la fiecare click
        function modifyText() 
        {
            console.log("S-a modificat textul");
            const t2 = document.getElementById("t2");
            if (t2.firstChild.nodeValue == "S-a modificat linia") 
            {
                t2.firstChild.nodeValue = "A doua linie";
            } 
            else 
            {
                t2.firstChild.nodeValue = "S-a modificat linia";
            }
        }
        
        // event listener cu 3 parametrii + pageX, pageY
        const el = document.getElementById("outside");
        el.addEventListener("click", modifyText, true);

        const div_tabel = document.getElementById("divTabel");
        div_tabel.addEventListener("click", showCoords, true);

        function showCoords(event) 
        {
            console.log("S-au modificat coordonatele");
            var x = event.pageX;
            var y = event.pageY;
            var coord = "S-a dat click pe div-ul de mai sus cu coordonatele: X : " + x + ", Y : " + y;
            document.getElementById("coordonate").innerHTML = coord;
        }
        
        // pentru footer sa isi schimbe culoarea textului constant
        var myVar = setInterval(setCuloare, 1500, "Text Footer care isi schimba culoarea");
        let text_footer = document.getElementById("footerText");

        function setCuloare(param1) 
        {
            text_footer.innerHTML = param1;
            text_footer.style.backgroundColor = text_footer.style.backgroundColor == "yellow" ? "pink" : "yellow";
        }

        text_footer.addEventListener("click", stopCuloare);

        function stopCuloare() 
        {
            clearInterval(myVar);
        }

    // pentru examen
    // C5-C8 -javascript 
    // C9-C11 - json XML node
}