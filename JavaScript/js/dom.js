// var square1 = document.getElementsByClassName('square1')[0];
// var square2 = document.getElementsByClassName('square2')[0];
//positionnement du flag ou oun en est l'état
toogle = false;

// Sélection de l'élement bouton par son id (id est unique, fait pour js)
var btn = document.getElementById('toogle');

// Déclenchement d'une fonction sur l'événement ""clic
btn.onclick = function () {
  toogleThis ();
}
var toogleThis = function () {

  toogle = !toogle;

  var square1 = document.getElementsByClassName('square1')[0];
  var square2 = document.getElementsByClassName('square2')[0];

if (toogle) {
  square1.style.backgroundColor = "green";
  square2.style.backgroundColor = "red";
} else {
    square1.style.backgroundColor = "red";
    square2.style.backgroundColor = "green";
}

return;
}



// square1.style.backgroundColor = "blue";
