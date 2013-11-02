$(function(){
	yepnope({
		load: wind.config.modules.app,
		callback: function() {
			wind.app.start();
		}
	});	
});