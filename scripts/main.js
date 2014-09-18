!function($){
	var baseUrl = './media/loading/', 
    	$progress = $('#percent'), 
    	loader = new PxLoader();

 	//add images here
 	var images=["1.png","2.png","3.png","4.png","5.png","loading.png","dummy/1.png",
 				"dummy/2.png","dummy/3.png","dummy/4.png","dummy/5.png","dummy/6.png","dummy/7.png",
 				"dummy/8.png","dummy/9.png","dummy/10.png","dummy/11.png","dummy/12.png","dummy/13.png","dummy/14.png","dummy/15.png"];

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
 		/*if(planets.length%2!=0){
 			var mid=Math.floor(planets.length/2);
 			for(var i=1;i<=mid;i++){
 				theta=-(((i*360)/planets.length)+90)*Math.PI/180;
				x=orbit.h+orbit.a*Math.cos(theta);
				y=orbit.k+orbit.b*Math.sin(theta);
				positions.push({'angle':theta,'name':planets[i].id,'x':x,'y':y});
			}
			x=orbit.h+orbit.a*Math.cos(0.5*Math.PI);
			y=orbit.k+orbit.b*Math.sin(0.5*Math.PI);
 			positions.push({'angle':0.5*Math.PI,'name':planets[mid].id,'x':x,'y':y});
			for(var i=mid;i>0;--i){
				theta=(((i*360)/planets.length)+90)*Math.PI/180;
				x=orbit.h+orbit.a*Math.cos(theta);
				y=orbit.k+orbit.b*Math.sin(theta);
				positions.push({'angle':theta,'name':planets[planets.length-i].id,'x':x,'y':y});
			}
 		}
 		console.log(positions);
 		console.log(planets);
 		
		for(var i=0;i<positions.length;i++){
			console.log(positions[i].name);
			$('#'+positions[i].name).css({'left':positions[i].x+'%','top':positions[i].y+'%'});
		}*/

		for(var i=0;i<planets.length;i++){
			theta=(((i*360)/planets.length)+90)*Math.PI/180;
			x=orbit.h+orbit.a*Math.cos(theta);
			y=orbit.k+orbit.b*Math.sin(theta);
			positions.push({'angle':theta,'x':x,'y':y});
			$('#'+planets[i].id).css({'left':x+'%','top':y+'%'});
		}
	}
	function elements(counter,arr) {
  		var currentItem = arr[counter];
  		var priorItem = arr[counter - 1] ? arr[counter - 1] : arr[arr.length - 1];
  		var nextItem = arr[counter + 1] ? arr[counter + 1] : arr[0];
  		return currentItem.name;

	}



	function move(planets,positions,map){

		for(var i=0;i<positions.length;i++){	
			$('#'+planets[i].id).removeClass('planet-current planet-neighbour planet-others').addClass(map[i]);
			console.log(planets[i],map[i]);
			$('#'+planets[i].id).animate({'top':positions[i].y+'%','left':positions[i].x+'%'}, 1000);

		}
	}



	function init(){
		//variables
		var aspectRatio = window.innerWidth/window.innerHeight;
		var orbit;
		if(aspectRatio<5/4)
			orbit={
				h:50,
				k:25,
				a:40,
				b:15
			};
		else
			orbit={
				h:50,
				k:50,
				a:40,
				b:15
			};

		var planets=$('.planets').toArray(),
		x,
		y,
		theta,
		positions={
			'name':'',
			x:0,
			y:0
		},
		direction = true, //forward
		press=false,
		positions=[];
		var map=['planet-current','planet-neighbour','planet-others','planet-others', 'planet-neighbour'];

		document.addEventListener('keydown',onkeydown,false);
		document.addEventListener('keyup',onkeyup,false);


		loader.start();  // starts preloader
		planetFormation(planets,orbit,positions);	

		function shiftArrayRight(arr){
			arr.unshift(arr.pop());
			return arr;
		}
		
		function shiftArrayLeft(arr){
			arr.push(arr.shift(arr[0]));
			return arr;
		}
		
		$('.planets').bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
			press = false;
				console.log('aaaa');
		});
		
		function onkeydown(event){

			if(!press){
				if(event.keyCode==37){
					arr=shiftArrayLeft(planets);
					move(arr,positions,map);
				}
				else if(event.keyCode==39){
					arr=shiftArrayRight(planets);
					move(arr,positions,map);
				}	
				press=true;
			}

		}	
	}
	init();
}(window.jQuery);