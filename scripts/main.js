!function($){
	var baseUrl = './media/loading/', 
    	$progress = $('#percent'), 
    	loader = new PxLoader();

    var rotateWorld = 0,
    	translateWorld = [-8,-4,4,8,0], count = 4; 
    	

 	//add images here
 	var images=["1.png","2.png","3.png","4.png","5.png","loading.png"];

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
			rotate(states[value],0); //call to method rotate
		}

		//fadeout when loading completes
		if(value==5){
			$('#loading-container').delay(0).fadeOut(function(){
				$('#main').fadeIn();
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

 	function planetFormation(planets,orbit,positions){

		for(var i=0;i<planets.length;i++){
			theta=(((i*360)/planets.length)+90)*Math.PI/180;
			x=orbit.h+orbit.a*Math.cos(theta);
 				y=orbit.k+orbit.b*Math.sin(theta);
			positions.push({'angle':theta,'x':x,'y':y});
			$('#'+planets[i].id).animate({'left':x+'%', 'top':y+'%'},1000);
			//$('#'+planets[i].id).css({'left':x+'%','top':y+'%'});
			//$('#'+planets[i].id).toggle('bounce',{ times: 3},"slow");
		}
	}
	
	function move(planets,positions,map,direction){
	  var animationEnd = false;
	  $('#capsule').removeClass('planets-zoom-in planets-zoom-out').addClass('planets-zoom-out').bind('animationend	animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(){
	   if(animationEnd === false){
	   	animationEnd = true;
	   	console.log(positions.length);
		for(var i=0;i<planets.length;i++){	
			$('#'+planets[i].id).removeClass('planet-current planet-neighbour planet-others').addClass(map[i]).bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
			    $('#capsule').removeClass('planets-zoom-in planets-zoom-out').addClass('planets-zoom-in');	
			});
			$('#'+planets[i].id).animate({'top':positions[i].y+'%','left':positions[i].x+'%'}, 1000);				
			//$('#bg-img div').removeClass('bg-zoom-in bg-zoom-out').addClass('bg-zoom-out');
			//$('#planet-set').removeClass('planets-zoom-in planets-zoom-out').addClass('planets-zoom-out');
			//$('#'+planets[i].id).animate({'top':positions[i].y+'%','left':positions[i].x+'%'}, 1000);
		}/*
		for(var i=0;i<positions.length;i++){
			console.log($('#sponsors'));	
			$('#'+planets[i].id).removeClass('planet-current planet-neighbour planet-others').addClass(map[i]);
			$('#bg-img div').removeClass('bg-zoom').addClass('bg-zoom');
			$('#'+planets[i].id).animate({'top':positions[i].y+'%','left':positions[i].x+'%'}, 1000);
		}*/
		if(direction=='right'){
			console.log('sdf');
			if(count==0) count=4;
			else count--; 
			//console.log(count);
			rotateWorld -= 72;
			$('#bg-img div').css('-webkit-transform', 'translateX('+translateWorld[count]+'%) rotateZ('+rotateWorld+'deg)');
			$('#bg-img div').css('-moz-transform', 'translateX('+translateWorld[count]+'%) rotateZ('+rotateWorld+'deg)');
			$('#bg-img div').css('-o-transform', 'translateX('+translateWorld[count]+'%) rotateZ('+rotateWorld+'deg)');
			$('#bg-img div').css('-ms-transform', 'translateX('+translateWorld[count]+'%) rotateZ('+rotateWorld+'deg)');
			$('#bg-img div').css('transform', 'translateX('+translateWorld[count]+'%) rotateZ('+rotateWorld+'deg)');
		}
		else if(direction=='left'){
			if(count==4) count=0;
			else count++;
			//console.log(count);
			rotateWorld += 72;
			$('#bg-img div').css('-webkit-transform', 'translateX('+translateWorld[count]+'%) rotateZ('+rotateWorld+'deg)');
			$('#bg-img div').css('-moz-transform', 'translateX('+translateWorld[count]+'%) rotateZ('+rotateWorld+'deg)');
		    $('#bg-img div').css('-o-transform', 'translateX('+translateWorld[count]+'%) rotateZ('+rotateWorld+'deg)');
		    $('#bg-img div').css('-ms-transform', 'translateX('+translateWorld[count]+'%) rotateZ('+rotateWorld+'deg)');
		    $('#bg-img div').css('transform', 'translateX('+translateWorld[count]+'%) rotateZ('+rotateWorld+'deg)');
	    }
	  }
	 });
	
	}

	function openPage(elem){
		$('.planets img').animate({'opacity':0.7}, 500);
		$('#capsule').animate({'bottom':'-45%'}, 1000, function(){
			$('.content-divs').css({'display':'none'});
			$('#content-'+elem).css({'display':'block'});
			$('.avgrund-cover').css({'display':'block'});
			$('#content').animate({'top':'15%', 'opacity':1}, 500);
			$('#planet-cover').animate({'opacity':1}, 200);
		});
		//Avgrund.show('#'+elem);
		if(elem=="gallery"){
			$('#content-gallery').gallerie({
					thumbboxTriggerWidth: 0.10,
    				thumbboxSpeed: 0.5,
    				imageEvent: 'click',
				});
			$('#content-gallery').gallerie('open');
		}
	}




	function init(){
		//variables
		var aspectRatio = window.innerWidth/window.innerHeight;
		var orbit={
				h:50,
				k:65,
				a:40,
				b:-5
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

		// scroll bar
//		$('#content-contacts').jScrollPane();

		document.addEventListener('keydown',onkeydown,false);
		document.addEventListener('keyup',onkeyup,false);
		

		var planet_id = [], from, to;

		$('.planets').click(function(event){
			if($('#'+this.id).hasClass('planets')){
				for(i=0; i<planets.length; i++){
					planet_id[i] = planets[i].id;
				}
				to = planet_id.indexOf(this.id);
				from = planet_id.indexOf($('.planet-current').attr('id'));
				//console.log(positions[from].x, positions[to].x);
				
				if(from!=to)
					if(positions[from].x-positions[to].x>0){
						planets=shiftArrayLeft(planets, 1);
						move(planets,positions,map,'left');
					}
					else{
						planets=shiftArrayRight(planets, 1);
						move(planets,positions,map,'right');		
					}
			}
			if($('#'+this.id).hasClass('planet-current')){
				content=true;
				$('#'+this.id).removeClass('planet-current').addClass('planet-current-scale');
				var shifted_orbit={
					h:50,
					k:60,
					a:70,
					b:0
				};
				positions=[];
				planetFormation(planets,shifted_orbit,positions);
				openPage(this.id);
			}
		});



		loader.start();  // starts preloader
		planetFormation(planets,orbit,positions);	

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
		
		function onkeydown(event){

			if(!press){
				if(event.keyCode==27){
					$('.avgrund-cover').css({'display':'none'});
					$('#content').css({'top':'15%', 'opacity':0});
					$('#planet-cover').css({'opacity':0});
					//$('.avgrund-cover').fadeOut(500);
					//Avgrund.deactivate();
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
					planetFormation(planets,orbit,positions);
					content=false;
					press = true;
				}
				else if(event.keyCode==37 && !content){
					planets=shiftArrayLeft(planets, 1);
					move(planets,positions,map,'left');
					press=true;
				}
				else if(event.keyCode==39 && !content){
					planets=shiftArrayRight(planets, 1);
					move(planets,positions,map,'right');
					press=true;
				}	
			}

		}	
	}
	init();

}(window.jQuery);
