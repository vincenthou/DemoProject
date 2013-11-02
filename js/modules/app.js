(function(w){
	var app = {};
	app.start = function() {
		alert('test')
	};

	//(!w.wind) && (w.wind = {});
	w.wind.app = app;
})(window);