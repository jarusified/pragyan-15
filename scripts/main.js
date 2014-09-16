!function($){
	var baseUrl = './media/loading/', 
    	$progress = $('#percent'), 
    	loader = new PxLoader(); 
 	
 	var images=["1.png","2.png","3.png","4.png","5.png","loading.png","dummy/1.png",
 				"dummy/2.png","dummy/3.png","dummy/4.png","dummy/5.png","dummy/6.png","dummy/7.png",
 				"dummy/8.png","dummy/9.png","dummy/10.png","dummy/11.png","dummy/12.png","dummy/13.png","dummy/14.png","dummy/15.png"];

	for(var i=0; i<images.length ; i++) {
       	var pxImage = new PxLoaderImage(baseUrl+images[i]); 
       	pxImage.imageNumber = i + 1; 
 		loader.add(pxImage); 
 	}

	loader.addProgressListener(function(e) { 
    	var completed=(e.completedCount/e.totalCount)*100;
    	$progress.text(completed); 
    	change(e.completedCount/e.totalCount);
	}); 

	states={
		1:$("#logo-one img"),
		2:$("#logo-two img"),
		3:$("#logo-three img"),
		4:$("#logo-four img"),
		5:$("#logo-five img")
	}
 
	function init(){
		loader.start();
	}
	function change(count){
		value=Math.floor(count*5);
		if(value!=0){
			rotate(states[6-value],0);
		}
	}
	function rotate(elem,angle){
		console.log(angle);
		elem.css('-webkit-transform','rotateZ('+angle+'deg)');
		elem.css('-moz-transform-origin','rotateZ('+angle+'deg)');
		elem.css('-ms-transform-origin','rotateZ('+angle+'deg)');
		elem.css('-o-transform-origin','rotateZ('+angle+'deg)');
		elem.css('transform','rotateZ('+angle+'deg)');					
	}
	init();
}(window.jQuery);