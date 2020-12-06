var myVar=setInterval(prikaziVreme,1000);
function prikaziVreme() {
    var d= new Date();
    document.getElementById("datum").innerHTML=d.toLocaleTimeString();
    /*var d = new Date().getHours();
    var d1 = new Date().getMinutes();
    var d2 = new Date().getSeconds();
    document.getElementById("datum").innerHTML = d + ":" + d1 + ":" + d2;
    var t = setTimeout(prikaziVreme, 500);*/
}   
function skini2(){
    document.getElementById("slika2").style.opacity=0.8;
}

function prelaz2(){
    document.getElementById("slika2").style.opacity=1;
}

function skini3(){
    document.getElementById("slika3").style.opacity=0.8;  
}

function prelaz3(){
    document.getElementById("slika3").style.opacity=1;
}
function kontakt(){
    
    var iznos = document.getElementById("box1").value;
    
    var ime=document.getElementById('box2').value;
    var prezime=document.getElementById('box1').value;
    var broj=document.getElementById('box3').value;
    var poruka=document.getElementById('poruka').value;
    var mejl=document.getElementById("boxEmail").value;
    var n = mejl.includes("@");
    var drzava=document.getElementById("drzava").value;
    var grad=document.getElementById("grad").value;
   var postanskiBroj=document.getElementById("posBroj").value;
    var ulicaIBroj=document.getElementById("ulica").value;
  
    if(ime.length<3 ){
        alert("Pogresan unos imena! Popunite ponovo formu.");
        document.getElementById("box2").value="";
    }else if(prezime.length<4){
        document.getElementById("box1").value="";
        alert("Pogresan unos prezimena! Popunite ponovo formu.");
    }else if(broj.length<9){
        alert("Pogresan unos broja! Popunite ponovo formu.");
        document.getElementById("box3").value="";
    }else if(document.getElementById("boxEmail")==""){
        alert("Pogresan unos mejla! Popunite ponovo formu.");
        document.getElementById("boxEmail").value="";
    }else if(document.getElementById("drzava")==""){
        alert("Pogresan unos drzave! Popunite ponovo!");
        document.getElementById("drzava").value="";
    }
    else if(document.getElementById("grad")==""){
        alert("Pogresan unos grada! Popunite ponovo!");
        document.getElementById("grad").value="";
    }
    else if(document.getElementById("posBroj")==""){
        alert("Pogresan unos postanskog broja! Popunite ponovo!");
        document.getElementById("posBroj").value="";
    }
    else if(document.getElementById("ulica")==""){
        alert("Pogresan unos ulice! Popunite ponovo!");
        document.getElementById("ulica").value="";
    }
    else if(n==false) {
        alert("Pogresan unos mejla! Popunite ponovo formu.");
        document.getElementById("boxEmail").value="";
    }
    else if(poruka.length<20){
        alert("Kratka poruka! Popunite ponovo formu.");
        document.getElementById("poruka").value="";
    }else{
        document.getElementById("box1").value="";
        document.getElementById("box2").value="";
        document.getElementById("box3").value="";
        document.getElementById("boxEmail").value="";
        document.getElementById("poruka").value="";
       document.getElementById("drzava").value="";
        document.getElementById("grad").value="";
       document.getElementById("posBroj").value="";
        document.getElementById("ulica").value="";
        alert("Uspesno ste izvrsili narudzbinu!");
    }
}
$(function () {
    $("img").hover(
        function() {
            $(this).stop().animate({"opacity": "0.5"}, 350);
        },
        function() {
            $(this).stop().animate({"opacity": "1"}, 350);
    });
});





