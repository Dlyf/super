$(function () {
/*
 +  Position de Mario en pixel
 */ 
    var i = 0;

    
/*
 +  hauteur de Mario
 */
    var y = 0;
   
    
/*
 +  Position du niveau
 */ 
    var x = 0;
    var failFlag = false;
    

    
/*
 +  Mario bouge
 */ 
    var move = function (direction) {
        console.log(x,i, y);
        switch (direction) {
            case "left":
                if (i>0) {
                    i-=20;
                } 
                $('#mario').addClass('flip');
                break;
            case "right":
                if (i<250) {
                    i+=20
                    if (i === 100) {
                        getCoin(1);
                    }
                    if (i === 140) {
                        getCoin(2);
                    }
                    if (i === 200) {
                        getCoin(3);
                    }
                } else {
                    if (!failFlag) {
                        x+=20;
                    }
                    if (x<3015) {
                        $('#level').css('margin-left', '-'+x+'px');
                    } else {
                        $('#main-theme-song').remove();
                        $('#music').append('<audio autoplay><source src="music/finish.mp3" type="audio/mp3" /></audio> ');
                        $('#mario').fadeOut(100);
                    }
                }
                $('#mario').removeClass('flip');
                break;
        }
        $('#mario').css('margin-left', i+'px');
    };
    
    
/*
 +  Mario saute
 */ 
    var jump = function () {
        $('#music').append('<audio autoplay id="jump"><source src="music/jump.mp3" type="audio/mp3" /></audio> ');
        $('#mario').animate({
            marginTop: '-88px'
        }, 250 );
        setTimeout(function () {
            $('#mario').animate({
                marginTop: '-58px'
            }, 250 );
            y = 1;
        }, 50);
        setTimeout(function () {
            $('#jump').remove();
            y = 0;
        }, 500);
    };

    
/*
 +  Mario récupère une pièce
 */      
    var getCoin = function (n) {
        if($('#coin'+n).is(':visible')) {
            $('#music').append('<audio autoplay id="coin"><source src="music/coin.mp3" type="audio/mp3" /></audio> ');
            setTimeout(function () {
                $('#coin').remove();
            }, 1000);
            $('#coin'+n).hide("fast");
        }
    };


/*
 +  Si mario se fail dans un trou
 */  
    var fail = function () {
        x+=20;
        $('#level').css('margin-left', '-'+x+'px');
        $('#mario').animate({
            marginTop: '108px'
        }, 250 );
        setTimeout(function () {
            $('#mario').hide();
        }, 70);
        $(".fail").show();
        failFlag = true;
      };
   
    
/*
 +  Execution du code
 */     
    $('body').on('keypress', function (e) {
        switch (e.keyCode) {
            case 113:
                move("left");
                break;
            case 100:
                move("right");
                break;
            case 122:
                jump();
                break;    
        }
    });
});