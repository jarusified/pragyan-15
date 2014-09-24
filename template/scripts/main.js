!(function($){
	var URL = document.URL;
	var a = document.createElement('a');
	a.href = URL;


	function contacts_start() {
		$('.boxframe1').removeClass('openFrame');
		$('.slidebox').css('width','100px');
		$('img').removeClass('fullshine');
		var thewidth = $('#firstRowImages').contents('.size1:nth-child(2)').contents().width();
		$('.size1:nth-child(2)').width(thewidth);
		$('.size1:nth-child(2)').contents().addClass('fullshine');
		$('#firstRowImages').addClass('openFrame');
	};
	function switchimg(){
		var thewidth = (this).width;
		console.log(this);
		$('.slidebox').css('width','100px');
		$('img').removeClass('fullshine');
		$('.boxframe1').removeClass('openFrame');
		$(this).addClass('fullshine').parent('div').width(thewidth).parent().addClass('openFrame');
	};


	function render(pathname) {
		$('#'+pathname).addClass('active',function(err){
			if(err){
				console.log(err);
			}
		});
		if(pathname=="contacts"){
			contacts_start();
		}
	}
	var gallery=document.querySelector('.gallery');
	console.log(gallery);
	gallery.addEventListener('click',switchimg,false);
	render('contacts');
})(window.jQuery);