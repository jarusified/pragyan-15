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

	var states={
		1:$("#logo-one"),
		2:$("#logo-two"),
		3:$("#logo-three"),
		4:$("#logo-four"),
		5:$("#logo-five")
	}
 
	function init(){
		loader.start();
		$("#logo-one").css('transform','rotateZ(30deg)');
		$("#logo-two").css('transform','rotateZ(-30deg)');
		$("#logo-three").css('transform','rotateZ(80deg)');
		$("#logo-four").css('transform','rotateZ(-80deg)');
		$("#logo-five").css('transform','rotateZ(130deg)');
	}
	function change(count){
		value=Math.floor(count*5);
		console.log(states[value]);
		rotate(states[value],0);
	}
	function rotate(elem,angle){
		elem.css('-webkit-transform','rotateZ('+angle+'deg)');
		elem.css('-moz-transform','rotateZ('+angle+'deg)');
		elem.css('-ms-transform','rotateZ('+angle+'deg)');
		elem.css('-o-transform','rotateZ('+angle+'deg)');
		elem.css('transform','rotateZ('+angle+'deg)');					
	}
	init();
}(window.jQuery);