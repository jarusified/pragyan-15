!function($){
	var baseUrl = './media/', 
    	$progress = $('#percent'), 
    	loader = new PxLoader();

    var rotateWorld = 0,
    	translateWorldX = [-8,-4,4,8,0], translateWorldY = [-8,-4,4,8,0], count = 4; 
    	
 	//add images here
 	var images=["home/planets/archives.png","home/planets/sponsors.png","home/planets/contacts.png",
 	"home/planets/gallery.png","home/planets/pragyan.png", "header.png",
 	"contacts/aplhonse.png","contacts/director.png","contacts/1.ajay.png", "contacts/2.gm.png", "contacts/3.sarath.png", "contacts/4.prathamesh.png", 
 	"contacts/5.sriram.png", "contacts/6.siva.png", "contacts/7.naren.png", "contacts/8.kram.png", "contacts/9.ruban.png",
 	"contacts/neethi.png", "contacts/11.dhuwaara.png", "contacts/12.yaazhini.png",  "contacts/13.julian.png",
 	"contacts/14.prasanna.png",  "contacts/15.vishnu.png",  "contacts/16.aravind.png"];

	for(var i=0; i<images.length ; i++) {
       	var pxImage = new PxLoaderImage(baseUrl+images[i]); 
       	pxImage.imageNumber = i + 1; 
 		loader.add(pxImage); 
 	}

	loader.addProgressListener(function(e) { 
    	var completed=(e.completedCount/e.totalCount)*100; // calculates the percentage loaded
    	$progress.text(Math.floor(completed)); 
    	initialise(e.completedCount/e.totalCount); 
	}); 

	//preloader stuff
	var states={
		1:$("#logo-one img"),
		2:$("#logo-two img"),
		3:$("#logo-three img"),
		4:$("#logo-four img"),
		5:$("#logo-five img")
	}
 
	function initialise(count){
		value=Math.floor(count*5);
		if(value!=0){
			rotate(states[value],0);
		}

		//fadeout when loading completes
		if(value==5){
			$('#loading-container').delay(2000).fadeOut(400,function(){
				$('#main').fadeIn(400);
			});	
		}
	}
	function rotate(elem,angle){
		elem.css('-webkit-transform','rotateZ('+angle+'deg)');
		elem.css('-moz-transform-origin','rotateZ('+angle+'deg)');
		elem.css('-ms-transform-origin','rotateZ('+angle+'deg)');
		elem.css('-o-transform-origin','rotateZ('+angle+'deg)');
		elem.css('transform','rotateZ('+angle+'deg)');					
	}


	// home page stuff
 	function planetFormation(planets,orbit,positions,scale,zindex){
		for(var i=0;i<planets.length;i++){
			theta=(((i*360)/planets.length)+90)*Math.PI/180;
			x=orbit.h+orbit.a*Math.cos(theta);
			y=orbit.k+orbit.b*Math.sin(theta);
			positions.push({'angle':theta,'x':x,'y':y});
			$('#'+planets[i].id).transition({top:positions[i].y+'%',left:positions[i].x+'%',scale:(scale[i],scale[i])},1000,'ease');

		}
	}
	

	function move(planets,positions,map,scale,zindex,direction){
	  var animationEnd = false;
	  $.transit.useTransitionEnd = true;
	  $('#capsule').removeClass('planets-zoom-in planets-zoom-out');
	  $('#capsule').addClass('planets-zoom-out').bind('animationend	animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(){
	   if(animationEnd === false){
	   	animationEnd = true;
	   	for(var i=0;i<planets.length;i++){	
			$('#'+planets[i].id).removeClass('planet-current planet-neighbour planet-others').addClass(map[i]);
			$('#'+planets[i].id).bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
			    $('#capsule').removeClass('planets-zoom-in planets-zoom-out').addClass('planets-zoom-in');	
			});
			$('#'+planets[i].id).css('z-index',zindex[i]);
			$('#'+planets[i].id).transition({top:positions[i].y+'%',left:positions[i].x+'%',scale:(scale[i],scale[i])},1000,'ease');	
		}
		if(direction=='left'){
			if(count==0) count=4;
			else count--; 
			rotateWorld -= 72;
			$('#bg-img div').css('-webkit-transform', 'translateX('+translateWorldX[count]+'%) translateY('+translateWorldY[count]+'%) rotateZ('+rotateWorld+'deg)');
			$('#bg-img div').css('-moz-transform', 'translateX('+translateWorldX[count]+'%) translateY('+translateWorldY[count]+'%) rotateZ('+rotateWorld+'deg)');
			$('#bg-img div').css('-o-transform', 'translateX('+translateWorldX[count]+'%) translateY('+translateWorldY[count]+'%) rotateZ('+rotateWorld+'deg)');
			$('#bg-img div').css('-ms-transform', 'translateX('+translateWorldX[count]+'%) translateY('+translateWorldY[count]+'%) rotateZ('+rotateWorld+'deg)');
			$('#bg-img div').css('transform', 'translateX('+translateWorldX[count]+'%) translateY('+translateWorldY[count]+'%) rotateZ('+rotateWorld+'deg)');
		}
		else if(direction=='right'){
			if(count==4) count=0;
			else count++;
			rotateWorld += 72;
			$('#bg-img div').css('-webkit-transform', 'translateX('+translateWorldX[count]+'%) translateY('+translateWorldY[count]+'%) rotateZ('+rotateWorld+'deg)');
			$('#bg-img div').css('-moz-transform', 'translateX('+translateWorldX[count]+'%) translateY('+translateWorldY[count]+'%) rotateZ('+rotateWorld+'deg)');
		    $('#bg-img div').css('-o-transform', 'translateX('+translateWorldX[count]+'%) translateY('+translateWorldY[count]+'%) rotateZ('+rotateWorld+'deg)');
		    $('#bg-img div').css('-ms-transform', 'translateX('+translateWorldX[count]+'%) translateY('+translateWorldY[count]+'%) rotateZ('+rotateWorld+'deg)');
		    $('#bg-img div').css('transform', 'translateX('+translateWorldX[count]+'%) translateY('+translateWorldY[count]+'%) rotateZ('+rotateWorld+'deg)');
	    }
	  }
	 });
	
	}

	function openPage(elem){
		if(elem=='contacts'){
			$('#contacts-info').show();
		}
		if(elem=='pragyan'){
			$('#pragyan-info').show();
		}
        $('.planet-title').fadeOut(400);
        $('.planets img').animate({'opacity':0.8}, 500);
		if(elem=='archives'){
			$('#archives-info').show();
		}
		$('#footer').fadeOut('slow');
		$('#capsule').animate({'bottom':'-45%'}, 1000, function(){
			$('.content-divs').css({'display':'none'});
			$('.avgrund-cover').css({'display':'block'});
			$('#content-'+elem).css({'display':'block'});	
			$('#content').animate({'top':'10%', 'opacity':1}, 400);
			$('#planet-cover').animate({'opacity':1}, 400);
			$('#updates').text('ESC to close');
		});
		if(elem=="gallery"){
			$('#gallery-info').show();
			/*
			$('#content-gallery').css({'display':'block'});
		    window.myFlux = new flux.slider('#content-gallery', {
		        autoplay: false,
		        pagination: true
		    });*/
			$('#content-gallery').gallerie({
					thumbboxTriggerWidth: 0.10,
    				thumbboxSpeed: 0.5,
    				imageEvent: 'click',
				});
			$('#content-gallery').gallerie('open');
		}
		if(elem=='sponsors'){
			$('#sponsors-info').show();
			console.log('Increase Size');
			$('#button-2013').click(function(){
                $('#sponsors-2014').css('display','none');
                $('#button-2014').css({'color': '#60D8DF', 'background-color': 'black','border-color':'rgb(94, 94, 94)'});
                $('#button-2013').css({'background': '#60D8DF','color': 'black','border-color': 'black'});
                $('#sponsors-2013').hide().fadeIn('slow');
            });

            $('#button-2014').click(function(){
                $('#sponsors-2013').css('display','none');
                $('#button-2013').css({'color': '#60D8DF', 'background-color': 'black','border-color':'rgb(94, 94, 94)'});
                $('#button-2014').css({'background': '#60D8DF','color': 'black','border-color': 'black'});
                $('#sponsors-2014').hide().fadeIn('slow');
            });
		}
	}


	function countdown(){
	    var clock,
        	pragyan = new Date(2015,02,26,18,00,00,00);
            var diff = ((pragyan.getTime()-Date.now())/1000 - 28*86400);
		clock = $('.clock').FlipClock(diff,{
		    clockFace: 'DailyCounter',
		    countdown: true,
		    showSeconds: false,
		    callbacks: {
	        	stop: function() {
	        	    console.log("Pragyan'15 Is Here!");
	        	}
		    }
		});                
	}

	function init(){
		var aspectRatio = window.innerWidth/window.innerHeight;
		var orbit={
				h:50,
				k:55,
				a:40,
				b:5
			};

		var planets=$('.planets').toArray(),
		x,
		y,
		theta,
		press=false,
		content=false,
		animationComplete = false,
		positions=[];
		var map=['planet-current','planet-neighbour','planet-others','planet-others', 'planet-neighbour'];
		var scale=[0.8,0.4,0.2,0.2,0.4];
		var zindex=[5,3,1,1,3];
		var double_click=true;
		//scroll bar
		//$('#content-contacts').jScrollPane();

		document.addEventListener('keydown',onkeydown,false);
		document.addEventListener('keyup',onkeyup,false);
		

		var planet_id = [], from, to;

		$('.planets').bind('click', function(event){
			if($('#'+this.id).hasClass('planets') && double_click==false){
				for(i=0; i<planets.length; i++){
					planet_id[i] = planets[i].id;
				}
				to = planet_id.indexOf(this.id);
				from = planet_id.indexOf($('.planet-current').attr('id'));
				
				if(from!=to)
					if(positions[from].x-positions[to].x>0){
						planets=shiftArrayLeft(planets, 1);
						move(planets,positions,map,scale,zindex,'left');
					}
					else{
						planets=shiftArrayRight(planets, 1);
						move(planets,positions,map,scale,zindex,'right');		
					}
			}
			if($('#'+this.id).hasClass('planet-current')){
				content=true;
				$('#'+this.id).removeClass('planet-current').addClass('planet-current-scale');
				var shifted_orbit={
					h:50,
					k:55,
					a:70,
					b:0
				};
				positions=[];
				planetFormation(planets,shifted_orbit,positions,scale,zindex);
				openPage(this.id);
			}
		});


		window.onload = function(){
			$('.content-close').bind('click', function(){
				console.log('aaa');
				closeModal();
			});
		}

		// starts preloader
		loader.start();  
		
		
		planetFormation(planets,orbit,positions,scale,zindex);
		for(var i=0;i<planets.length;i++){
			theta=(((i*360)/planets.length)+90)*Math.PI/180;
			x=orbit.h+orbit.a*Math.cos(theta);
 			y=orbit.k+orbit.b*Math.sin(theta);
			positions.push({'angle':theta,'x':x,'y':y});
			$('#'+planets[i].id).css({'left':x+'%','top':y+'%'});
		}

		countdown();

		function shiftArrayRight(arr, count){
			for(i=0; i<count; i++)
				arr.unshift(arr.pop());
			return arr;
		}
		
		function shiftArrayLeft(arr, count){
			for(i=0; i<count; i++)
				arr.push(arr.shift(arr[0]));
			return arr;
		}
		
		$('.planets').bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
			press = false;
		});
		
		function closeModal(){
        	$('.info-field').hide();
        	$('.planet-title').show();
	        $('#footer').fadeIn('slow');
			$('#updates').text('Use arrow keys to navigate');
			$('.avgrund-cover').css({'display':'none'});
			$('#content').css({'top':'10%', 'opacity':0});
			$('#planet-cover').css({'opacity':0});
			for(var i=0;i<planets.length;i++){
				if($('#'+planets[i].id).hasClass('planet-current-scale')){
					$('#'+planets[i].id).removeClass('planet-current-scale').addClass('planet-current');
				}
			}
			$('.planets img').animate({'opacity':1.0}, 500);
			$('#capsule').animate({'bottom':'0%'}, 1000, function(){
				press = false;
			});
			positions=[];
			planetFormation(planets,orbit,positions,scale,zindex);
			content=false;
			press = true;
		}
		
		jQuery.fn.single_double_click = function(single_click_callback, double_click_callback, timeout) {
  			return this.each(function(){
    			var clicks = 0, self = this;
    			jQuery(this).click(function(event){
      				clicks++;
      				if (clicks == 1) {
        				setTimeout(function(){
          					if(clicks == 1) {
           						 single_click_callback.call(self, event);
          					} else {
           						 double_click_callback.call(self, event);
         					}
          					clicks = 0;
        				}, timeout || 300);
      				}
    			});
  			});
		}

		
		$('.planets').single_double_click(function(){
			double_click=false;
		},function(){
			double_click=true;
		})
		function onkeydown(event){

			if(!press){
				if(event.keyCode==27){
					closeModal();
				}
				else if(event.keyCode==37 && !content){
					planets=shiftArrayLeft(planets, 1);
					move(planets,positions,map,scale,zindex,'left');
					press=true;
				}
				else if(event.keyCode==39 && !content){
					planets=shiftArrayRight(planets, 1);
					move(planets,positions,map,scale,zindex,'right');
					press=true;
				}	
			}

		}	
	}
	init();
		
}(window.jQuery);
