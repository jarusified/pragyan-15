<?php
header('Location: ../');
?>
<!DOCTYPE html>
<html>
<head>
    <title>Pragyan'15, Coming Soon</title>
    <link rel="stylesheet" href="./flipclock.css">
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-19500581-1', 'auto');
  ga('send', 'pageview');

  </script>
    <script src="../scripts/lib/jquery.min.js" type="text/javascript"></script>
    <script src="./flipclock.min.js"></script>
    <style type="text/css">
    @font-face{
      font-family: Geosans;
      src: url('../styles/fonts/Geosans.ttf');
    }
    html,body{
            padding:0;
            margin: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

    #texture{
    z-index: 1;
    width: 100%;
    position: absolute;
    height: 100%;
    /*background-image: -moz-linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.25) 75%, rgba(0, 0, 0, 0.25)), -moz-linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.25) 75%, rgba(0, 0, 0, 0.25));
    background-image: -webkit-linear-gradient(45deg, rgba(0, 0, 0, .25) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, .25) 75%, rgba(0, 0, 0, .25)), -webkit-linear-gradient(45deg, rgba(0, 0, 0, .25) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, .25) 75%, rgba(0, 0, 0, .25));
    background-position: 0 0pt, 4px 4px;
    background-size: 8px 8px;*/
    background-color: #333333;
    background: #0F1217 url('../media/bg.png');
    background-size: 100% 105%;
    }

    #logo{
    position: fixed;
    z-index: 2;
    top: 20%;
    left: 50%;
    }
    .logo-img{
    position:absolute;
    }
    .logo-img img{
    width: 300px;
    height: auto;
    margin-left: -150px;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transition:all 2s ease-out;
    -moz-transition:all 2s ease-out;
    -o-transition:all 2s ease-out;
    -ms-transition:all 2s ease-out;
    transition:all 2s ease-out;
    }

    #logo-one img{
    transform:rotateZ(180deg);
    -webkit-transform:rotateZ(180deg);
    -moz-transform:rotateZ(180deg);
    -o-trasform:rotateZ(180deg);
    -ms-transform:rotateZ(180deg);
    }
    #logo-two img{
    transform:rotateZ(-180deg);
    -webkit-transform:rotateZ(-180deg);
    -moz-transform:rotateZ(-180deg);
    -o-trasform:rotateZ(-180deg);
    -ms-transform:rotateZ(-180deg);
    }
    #logo-three img{
    transform:rotateZ(145deg);
    -webkit-transform:rotateZ(145deg);
    -moz-transform:rotateZ(145deg);
    -o-trasform:rotateZ(145deg);
    -ms-transform:rotateZ(145deg);
    }
    #logo-four img{
    transform:rotateZ(-145deg);
    -webkit-transform:rotateZ(-145deg);
    -moz-transform:rotateZ(-145deg);
    -o-trasform:rotateZ(-145deg);
    -ms-transform:rotateZ(-145deg);
    }
    #logo-five img{
    transform:rotateZ(90deg);
    -webkit-transform:rotateZ(90deg);
    -moz-transform:rotateZ(90deg);
    -o-trasform:rotateZ(90deg);
    -ms-transform:rotateZ(90deg);
    }

    @media(max-height: 700px){
    #loader{
        bottom: 2% !important;
    }   
    }

    #loader{
    position:fixed;
    z-index: 2;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    bottom: 20%;
    left: 50%;

    }
    #loader img{
    z-index:3;
    width: 80px;
    height: auto;
    margin-left: 0px;
    }
    #percent{
    z-index: 4;
    position: absolute;
    width:100%;
    text-align: center;
    top:40%;
    }
    #main-logo{
    position: fixed;
    z-index: 2;
    top: 22%;
    left: 50%;
    width: 700px;
    margin-left: -325px;
    text-align: center;
    }
    #main-logo img{
    display: none;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -o-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);    
    }
    #cs-text{
    display: none;
    margin-top: -40px;
    font-family: Geosans;
    color: #7e7e7e;
    font-size: 14px;
    font-weight: bolder;
    letter-spacing: 1px;
    text-transform: uppercase;
    }
    .eta{
    display: none;
    position: fixed;
    bottom: 27%;
    left: 50%;
    width: 80px;
    height: 35px;
    margin-left: -40px;
    text-align: center;
    font-family: Geosans;
    color: silver;
    font-size: 35px;
    font-weight: bolder;
    text-transform: uppercase;
    z-index: 1;        
    }
    #logo{
    -webkit-transition:all 1s ease-in-out;
    -moz-transition:all 1s ease-in-out;
    -o-transition:all 1s ease-in-out;
    -ms-transition:all 1s ease-in-out;
    transition:all 1s ease-in-out;
    }
    .resize{
    -webkit-transform: translateX(-150px) translateY(150px) scale(0.5);
    -moz-transform: translateX(-150px) translateY(150px) scale(0.5);
    -o-transform: translateX(-150px) translateY(150px) scale(0.5);
    -ms-transform: translateX(-150px) translateY(150px) scale(0.5);
    transform: translateX(-150px) translateY(150px) scale(0.5);
    margin-top: -75px;
    }
    .clock{
    display: none;
    position: absolute;
    bottom: -2%;
    left: 50%;
    margin-left: -200px;
    height: 20%;
    width: 400px;
    display: block;
    z-index: 10;
    }
    .flip-clock-label{
        font-family: Geosans;
        font-size: 15px;
        color: silver !important;
        font-weight: bolder;
    }
    .flip{
        width: 50px !important;
        height: 90px !important;
    }
    .flip-clock-wrapper ul li a div div.inn{
        font-size: 40px !important;
        background-color: #212429 !important;
    }
    .flip-clock-dot{
        background-color: #212429 !important;        
    }
    .flip-clock-divider.minutes .flip-clock-label, .flip-clock-divider.seconds .flip-clock-label, .flip-clock-divider.hours .flip-clock-label{
        right: -80px !important;
    }
    .flip-clock-wrapper ul li a div.up:after{
        height: 0;
    }
    </style>
</head>

<body>
    <div id="texture"></div>
    <div class='eta'>E&nbsp;T&nbsp;A</div>
    <div class="clock"></div>
    <div id='main-logo'>
        <img src='../media/main-logo.png' />
        <div id='cs-text'>
            Let's Celebrate Technology
        </div>
    </div>
    <div id="logo">
        <div class="logo-img" id="logo-one"><img src=
        "../media/loading/1.png"></div>

        <div class="logo-img" id="logo-two"><img src=
        "../media/loading/2.png"></div>

        <div class="logo-img" id="logo-three"><img src=
        "../media/loading/3.png"></div>

        <div class="logo-img" id="logo-four"><img src=
        "../media/loading/4.png"></div>

        <div class="logo-img" id="logo-five"><img src=
        "../media/loading/5.png"></div>
    </div>
    <script type="text/javascript">
!function($){
        var states={
            1:$("#logo-one img"),
            2:$("#logo-two img"),
            3:$("#logo-three img"),
            4:$("#logo-four img"),
            5:$("#logo-five img")
        }

        function initialise(value){
            rotate(states[value],0);
        }
        function rotate(elem,angle){
            elem.css('-webkit-transform','rotateZ('+angle+'deg)');
            elem.css('-moz-transform-origin','rotateZ('+angle+'deg)');
            elem.css('-ms-transform-origin','rotateZ('+angle+'deg)');
            elem.css('-o-transform-origin','rotateZ('+angle+'deg)');
            elem.css('transform','rotateZ('+angle+'deg)');                  
        }
        var i=0;
        var timer=setInterval(function(){
            if(i<5){
                i+=1;
                initialise(i);
            }
            else{
                clearInterval(timer);
                $(states[i-1]).bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
                    $('#logo').addClass('resize');
                    $('#main-logo img').delay(1000).fadeIn(500, function(){
                        $('#main-logo #cs-text').fadeIn(300);
                        $('.eta').fadeIn(300);
                        $('.clock').fadeIn(600);
                    });    
                });
            }
        },500);

        function countdown(){
            var clock;

            clock = $('.clock').FlipClock({
                clockFace: 'HourlyCounter',
                autoStart: false,
                callbacks:{  
                            stop:function(){
                                $('.message').html('The clock has stopped!')
                            }
                        }

            });
                    
            var tomo = new Date(2014,10,05,21,00,00,00);
            var seconds=Math.floor((tomo.getTime()-Date.now())/1000 -31*86400);
            if(seconds>0){
                clock.setTime(seconds);
                clock.setCountdown(true);
                clock.start();
            }
            else{
                clock.setTime(0);
                clock.setCountdown(false);
                clock.stop();
                location.href = '../';
            }
            $('.clock').css({'display':'none'});

        }
        countdown();

    }(window.jQuery);
    </script>
</body>
</html>
