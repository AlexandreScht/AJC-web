

/*window.localStorage.setItem('try', pp.value); 
let p = localStorage.getItem("try");*/


function res(){
   var pp = document.getElementById("prenom").value;
   localStorage.setItem("sprenom", JSON.stringify(pp));
   let  p = JSON.parse(localStorage.getItem("sprenom"));

   var nn = document.getElementById("nom").value;
   localStorage.setItem("snom", JSON.stringify(nn));
   let  n = JSON.parse(localStorage.getItem("snom"));

   var dd = document.getElementById("date").value;
   localStorage.setItem("sdate", JSON.stringify(dd));
   let  d = JSON.parse(localStorage.getItem("sdate"));

   var hh = document.getElementById("heure").value;
   localStorage.setItem("sheure", JSON.stringify(hh));
   let  h = JSON.parse(localStorage.getItem("sheure"));

    var mm = document.getElementById("minute").value;
    localStorage.setItem("sminute", JSON.stringify(hh));
   let  m = JSON.parse(localStorage.getItem("sminute"));


   document.getElementById("mainrdv").style.display = "none";
   document.getElementById("cont").style.display = "flex";
   document.getElementById("title").innerHTML = ("On attend plus que vous!"); 
   document.getElementById("prend").innerHTML = ("rdv confirmer à " + h + "H" + m + " le " + d + " au nom de " + n + " " + p);

}

