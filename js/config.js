(function(w){
	var config = {};
	//check where to get data (from local json file)
	config.offline = true;
	var prefix = config.offline ? 'data/' : 'http://domain';

	//a map helps to get a shorter name for plugins/modules
	config.plugins = {
		chart:     'js/plugins/chart.min.js',
		highchart: 'js/plugins/highcharts.min.js',
		justgage:  'js/plugins/justgage.1.0.1.min.js',
		justgage:  'js/plugins/raphael.2.1.0.min.js'
	};
	config.modules = {
		app: 'js/modules/app.js',
		topic:  'js/modules/topic.js'
	};

	//the api url to call (based on the offline value)
	config.url = {
		GET_MAP_GRID: 'test.json'
	};

	for (prop in config.url) {
		config.url[prop] += prefix;
	}
	//the input parameter passed from the first page
	//TODO: these data may be changed to get from backend
	config.parameter = {

	};	

	(!w.wind) && (w.wind = {});
	w.wind.config = config;
})(window);