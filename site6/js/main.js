$(function() {
    // $("#mario").mouseover(function() {
    //   $(this).animate({
    //     marginLeft: "80%",
    //     opacity: "2.9"
    //   }, 2000);
    // });
    // $("#level").mouseover(function() {
    //   $(this).animate({
    //     marginLeft: "80%",
    //     opacity: "2.9"
    //   }, 2000);
    // });

    window.addEventListener("keydown", keyPress, false);

    function keyPress(e) {
      if (e.keyCode == "37"/*left*/ ) {
        $("#mario").animate({
          marginLeft: "125px"
        })
      } else if (e.keyCode == "39"/*right*/ ) {
        $("#mario").animate({
          marginLeft: "-125px"
        })
      } else if (e.keyCode == "38"/*up*/ ) {
        $("#mario").animate({
          marginTop: "125px"
        })
      } else if (e.keyCode == "40"/*down*/ ) {
        alert("Je teste");
      }
    }
});
