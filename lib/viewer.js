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

		init: function(){
			var editor = ace.edit('editor');
			editor.setTheme('ace/theme/monokai');
			editor.getSession().setMode('ace/mode/javascript');
		},

		run: function(){
			return eval(ace.edit('editor').getValue());
		}

	}
}

Viewer.Editor.init();