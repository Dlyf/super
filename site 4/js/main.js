
var userScoreNumber = 0;
var cpuScoreNumber = 0;

// var circleIcon = document.getElementById('test');
//
// // circleIcon.onclick = function () {
// //   this.style.backgroundColor = "yellow";
// // }


//clique une fois une couleur
function myFunction() {
  var x = document.getElementsByClassName("circleIcon");
  x[0].style.backgroundColor = "yellow";
  x++;
}

function myFunction1() {
  var x = document.getElementsByClassName("circleIcon1");
  x[0].style.backgroundColor = "yellow";
}

function myFunction2() {
  var x = document.getElementsByClassName("circleIcon2");
  x[0].style.backgroundColor = "yellow";
}

  var target = document.getElementsByClassName("displayUserScore");
  target.onclick = function () {
      target.style.backgroundColor = "yellow";
  }

var pierre = document.getElementById("pierre");


// var circleIcon1 = document.getElementsByClassName('circleIcon1')[0];
// var circleIcon2 = document.getElementsByClassName('circleIcon2')[0];
//
// circleIcon1.style.backgroundColor="yellow";
// circleIcon2.style.backgroundColor="blue";





// circleIcon1.onclick = function () {
//   this.style.backgroundColor = "yellow";
// }

document.getElementById("userScore").innerHTML = "<p>" + "User Score : " + userScoreNumber + " - " + "VS" + " - " + "CPU " + "Score" + " : " + cpuScoreNumber + "</p>";

// function scoreNumberTest(n) {
//   document.getElementById('test').value = ++userScoreNumber;
// }


// function userScoreTest () {
//   var value = parseInt(document.getElementById("userScore")).value;
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById("userScore").value = value;
// }
