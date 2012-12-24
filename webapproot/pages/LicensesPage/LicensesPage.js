dojo.declare("LicensesPage", wm.Page, {
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

	productLookup1Change: function(inSender) {
	  try {
		  var data = inSender.selectedItem.getData() || {};
          this.productIdEditor1.setDataValue(data.id);
          
		  
	  } catch(e) {
		  console.error('ERROR IN productLookup1Change: ' + e); 
	  } 
  },
  customerproductassociateLiveForm1BeforeServiceCall: function(inSender, inOperation, inData) {
	  try {
        inData.id.updatedAt = new Date().getTime();		  
		  
	  } catch(e) {
		  console.error('ERROR IN customerproductassociateLiveForm1BeforeServiceCall: ' + e); 
	  } 
  },
  _end: 0
});