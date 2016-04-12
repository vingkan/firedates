var Generator = {

	generateUser: function(callback){
		$.ajax({
			url: 'https://randomuser.me/api/',
			dataType: 'json',
			success: function(data){
				callback(data);
			}
		});
	}
	
}