!(function($){
	var URL = document.URL;
	var a = document.createElement('a');
	a.href = URL;

	function render (pathname) {
		console.log($('#'+pathname));
		$('#'+pathname).addClass('active',function(err){
			if(err){
				console.log(err);
			}
		});
	}
	render('contacts');
})(window.jQuery);