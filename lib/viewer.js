String.prototype.capitalize = function(){
	return this.charAt(0).toUpperCase() + this.slice(1);
}

var Viewer = {

	showUser: function(user, id){
		var out = document.getElementById('user-viewer-' + id);
		var html = '<div class="user-view-box">';
		html += '<img src="' + user.picture.large + '">'
		html += '<h2>' + user.name.first.capitalize() + ' ' + user.name.last.capitalize() + '</h2>'
		html += '</div>';
		out.innerHTML = html;
	},

	Editor: {

		toClear: [],

		init: function(){
			var editor = ace.edit('editor');
			editor.setTheme('ace/theme/monokai');
			editor.getSession().setMode('ace/mode/javascript');
		},

		run: function(){
			var id = eval(ace.edit('editor').getValue());
			if(id){
				this.toClear.push(id);
			}
		},

		stop: function(){
			clearInterval(this.toClear.pop());
		}

	}
}

Viewer.Editor.init();

$('#run-code').click(function(event){
	Viewer.Editor.run();
});

$('#stop-code').click(function(event){
	Viewer.Editor.stop();
});