dojo.declare("Main", wm.Page, {
	"preferredDevice": "desktop",
	"i18n": false,
	start: function() {
		try {
			this.label3.setCaption("Ultimeyes (" + app.getFullVersionNumber() + ")");
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

	_end: 0
});
