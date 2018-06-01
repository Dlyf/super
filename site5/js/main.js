$(function() {

//   var doSomeMagic = function (effect) {
//   $('#magic').hide('explode', 5000);
//   $('#magic').hide("blind");
//   $('#magic').hide('bounce', {times: 3}, "slow");
//   $('#magic').hide('clip');
//   $('#magic').hide('drop');
//   $('#magic').hide('explode', 5000);
//   $('#magic').hide('fade');
//   $('#magic').hide('fold');
//   $('#magic').hide('highlight');
//   $('#magic').hide('puff');
//   $('#magic').hide('pulsate');
//   $('#magic').hide('scale');
//   $('#magic').hide('shake');
//   $('#magic').hide('size');
//   $('#magic').hide('slide');
//   $('#magic').hide('transfer');
// }
  var doSomeMagic = function (effect) {
    $('#magic').hide().show(effect, 1000);;
  };
    $("#demo").on("click", function () {
    doSomeMagic($("#menu").val() );
    });
});
//  var doSomeMagic = function (effect) {


/*

var options = {};
  // some effects have required parameters
  if ( selectedEffect === "scale" ) {
    options = { percent: 50 };
  } else if ( selectedEffect === "transfer" ) {
    options = { to: "#button", className: "ui-effects-transfer" };
  } else if ( selectedEffect === "size" ) {
    options = { to: { width: 200, height: 60 } };
  }

  // Run the effect
  $( "#effect" ).effect( selectedEffect, options, 500, callback );
};
// Callback function to bring a hidden box back
function callback() {
  setTimeout(function() {
    $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
  }, 1000 );
};
// Set effect from select menu value
$( "#button" ).on( "click", function() {
  runEffect();
  return false;
});

*/
