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
			$('#loading-container').delay(2000).fadeOut();
			$('#main').delay(2500).fadeIn();
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
			theta=(i*2*Math.PI/planets.length)+40;
			x=orbit.h + orbit.a*Math.cos(theta);
			y=orbit.k + orbit.b*Math.sin(theta);

			//x=orbit.h+orbit.a*Math.cos(theta);
			//y=orbit.k+orbit.a*Math.sin(theta);
			$('#'+planets[i].id).css({'left':x+'%','top':y+'%'});
			positions.push({'x':x,'y':y});
		}
	}
	function elements(counter,arr) {
  		var currentItem = arr[counter];
  		var priorItem = arr[counter - 1] ? arr[counter - 1] : arr[arr.length - 1];
  		var nextItem = arr[counter + 1] ? arr[counter + 1] : arr[0];
  		//console.log(priorItem,currentItem,nextItem);
  		return currentItem;

	}

	function shiftArrayRight(arr,count){
		arr.unshift(arr.pop());
		return arr;
	}
		
	function shiftArrayLeft(arr){
		arr.push(arr.shift(arr[0]));
		return arr;
	}

	function move(current,planets,arr){
		for(var i=0;i<planets.length;i++){
			$('#'+planets[i].id).css('transform','scale(1.0,1.0)');
		}

		$('#'+current).css('transform','scale(2.0,2.0)');
		for(var i=0;i<arr.length;i++){	
			$('#'+planets[i].id).animate({'top':arr[i].y+'%','left':arr[i].x+'%'});
		}
	}

	function init(){
		//variables
		var orbit={
			h:35,
			k:25,
			a:40,
			b:25
		},
		planets=$('.planets'),
		planets_id=[],
		x,
		y,
		theta,
		positions={
			x:0,
			y:0
		},
		direction = true, //forward
		press=false,
		default_planet=$('#pragyan');
		positions=[];

		document.addEventListener('keydown',onkeydown,false);
		document.addEventListener('keyup',onkeyup,false);


		loader.start();  // starts preloader 
		planetFormation(planets,orbit,positions);

		for(var i=0;i<planets.length;i++){
			planets_id.push(planets[i].id);
		}
		function onkeydown(event){
			press=true;
			if(event.keyCode==37){
				positions=shiftArrayLeft(positions);
				planets_id=shiftArrayLeft(planets_id);
				defaule_planet=elements(0,planets_id);
				move(default_planet,planets,positions);
			}
			else if(event.keyCode==39){
				arr=shiftArrayRight(positions);
				planets_id=shiftArrayRight(planets_id);
				default_planet=elements(0,planets_id);
				console.log(default_planet);
				move(default_planet,planets,positions);
			}	
		
		}
		function onkeyup(event){
			press=false;
		}
	}
	init();
}(window.jQuery);