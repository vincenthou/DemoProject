(function(w){
	//precondition: jQuey has been loaded
	var topics = {};
	/**
	 * Create a customized topic of the app, pub/sub method will be added
	 * @param {string} the name(id) of the topic
	 */	
	function createTopic(id) {
		var topic, callbacks;
		if (id) {
			topic = topics[id];
			if (!topic) {
				callbacks = $.Callbacks();
				topic = {
					pub: callbacks.fire,
					sub: callbacks.add,
					disble: callbacks.disble,
					remove: callbacks.remove
				};
				topics[id] = topic;
			} else {
				throw new Error('The topic already exists, change another one!');
			}
		}
		return topic;
	}	

	//(!w.wind) && (w.wind = {});
	w.wind.topics = topics;
	w.wind.createTopic = createTopic;
})(window);