// Commentaire sur une ligne

/*

  Commentaire de type bloc

*/

/*************** Les Variable ******************/

//
// var a = 2;
// var b = "5";
// var result = a + b;
//
// console.log(typeof(result), result);
//
// /*************** Les Booléens ******************/
//
// var string = 1;
// var string = "0"; false
// var vrai = true;
// var faux = "false"; // vrai
//
// /*************** Forcer le type d'une variable (caster) ******************/
//
// var str = "37"
// var num = parseInt(str);
//
// /*************** Les fonctions ******************/
//
// // var sayHello = function (name) {
// //   alert("Hello " + name);
// // };
// // sayHello("Domi");
// //
// // function sayHello2 (name) {
// //   alert("Hello2" + name);
// // }
//
// var addOne = function (n) {
//   return parseInt(n) + 1;
// }
//
// var res = addOne(12);
//
//
// /*************** Les boucles ******************/
//
// // FOR
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
//
// // WHILE
// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
//
// // DO while
//
// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);
//
// var fruits = [
//   "Banane",
//   "Cerise",
//   "Fraise",
//   "Citron"
// ];
//
// var displayFruits = function (arr) {
//   var str = "";
//   str += "<ul>"
//   for (var i = 0; i < arr.length; i++) {
//     str += "<li>" + arr[i] + "</li>";
//   }
//   str += "</ul>";
//   document.body.append = str;
// };
//
// displayFruits(fruits);

var users = {
  "user1": {
    "firstname" : "Dominique",
    "surname" : "Domi",
    "age" : 31,
    "role" : "étudiant"
  },
  "user2": {
    "firstname" : "John",
    "surname" : "Doe",
    "age" : 99,
    "role" : "inconnu"
  }
}

var displayUsers = function (arr) {
 for (var key in arr) {
   if (arr.hasOwnProperty(key)) {
     var pFirstName = document.createElement('p');
     var pSurName = document.createElement('p');
     var pAge = document.createElement('p');
     var pRole = document.createElement('p');

     var firstNameTxt = document.createTextNode("Prénom: " + arr[key].firstname);
     var surNameTxt = document.createTextNode("Nom: " + arr[key].surname);
     var ageTxt = document.createTextNode("Age: " + arr[key].age);
     var roleTxt = document.createTextNode("Role: " + arr[key].role);

     pFirstName.append(firstNameTxt);
     pSurName.append(surNameTxt);
     pAge.append(ageTxt);
     pRole.append(roleTxt);

     document.body.append(pFirstName);
     document.body.append(pSurName);
     document.body.append(pAge);
     document.body.append(pRole);

     document.write("<br>");
   }
  }
};
// alert(users.user1.firstname);

// displayUsers(users);

// document.location.href = "http://google.com";
