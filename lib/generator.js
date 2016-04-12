var Generator = {

	generateUser: function(callback){
		$.ajax({
			url: 'https://randomuser.me/api/',
			dataType: 'json',
			success: function(data){
				callback(data);
			}
		});
	},

	continuousUser: function(callback, timeInterval){
		var gen = this;
		var interval = timeInterval || 3000;
		var stop = setInterval(function(){
			gen.generateUser(callback);
		}, interval);
		return stop;
	}
	
}