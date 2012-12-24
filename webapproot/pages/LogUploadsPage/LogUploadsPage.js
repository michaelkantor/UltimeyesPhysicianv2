dojo.declare("LogUploadsPage", wm.Page, {
	start: function() {
		try {
			window.tmp = this.internaluploadsessionfileDojoGrid;
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},
  toggleUnclaimedChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
      this.internaluploadsessionfileDojoGrid.setQuery({"customer.firstName": undefined});
    },
  unlinkButtonClick: function(inSender) {
      this.unlinkFile.sourceData.setValue('customer', {});
      this.unlinkFile.update();
    },
  _end: 0
});