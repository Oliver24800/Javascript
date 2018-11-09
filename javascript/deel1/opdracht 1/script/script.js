
var titel = document.getElementById("title");
var opdracht = document.getElementById("opdracht");
var link = document.getElementById("0");
var uitwerking = document.getElementById("uitwerking");
var indeling = document.getElementById("indeling");
var naam = document.getElementsByClassName("naam")[0];
var naam1 = document.getElementsByClassName("naam")[1];
var jaar = document.getElementsByClassName("jaar")[0];

titel.innerHTML = "Click Event 1";
opdracht.innerHTML = "Hoi ik ben Oliver ";
uitwerking.innerHTML = "";
naam.innerHTML = "Oliver Scargo";
naam1.innerHTML = "Oliver Scargp";
jaar.innerHTML = "2018";
link.innerText = "Verander de inhoud";
indeling.innerText = "2de jaar student Mediadeveloper";

function changeContent() {
  if (link.id == "0") {
    document.getElementById("foto").src = "images/homer.jpg";
    document.getElementById("0").id = "1";
    titel.innerHTML = "Click Event 2";
    opdracht.innerHTML =
      "Hoi ik ben Homer";
    naam.innerHTML = "Homer";
    naam1.innerHTML = "Homer";
    jaar.innerHTML = "2018";
    indeling.innerHTML = "Springfield";
  } else if (link.id == "1") {
    document.getElementById("foto").src = "images/photo.jpg";
    document.getElementById("1").id = "0";
    titel.innerHTML = "Click Event 1";
    opdracht.innerHTML =
      "Hoi ik ben Oliver";
    naam.innerHTML = "Oliver Scargo";
    naam1.innerHTML = "Oliver Scargo";
    jaar.innerHTML = "2018";
    indeling.innerHTML = "2de jaar student Mediadeveloper";
  }
}
