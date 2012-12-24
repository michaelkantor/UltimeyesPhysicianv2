dojo.declare("ProductsPage", wm.Page, {
	start: function() {
		try {
		//	this.productLiveForm1.liveSaving = false;
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},
/*productLiveForm1InsertData: function(inSender) {
      try {
        this.productFormLVar.setOperation("insert");
        this.productFormLVar.sourceData.setData(this.productLiveForm1.dataOutput);
        this.productFormLVar.sourceData.setValue("createdAt", new Date().getTime());
        this.productFormLVar.sourceData.setValue("updatedAt", new Date().getTime());
    	this.productFormLVar.update();
	  } catch(e) {
		  console.error('ERROR IN productLiveForm1InsertData: ' + e); 
	  } 
  },
  productLiveForm1DeleteData: function(inSender) {
	  try {
        this.productFormLVar.setOperation("delete");
        this.productFormLVar.sourceData.setData(this.productLiveForm1.dataOutput);		  
    	this.productFormLVar.update();		  
	  } catch(e) {
		  console.error('ERROR IN productLiveForm1DeleteData: ' + e); 
	  } 
  },
  productLiveForm1UpdateData: function(inSender) {
	  try {
        this.productFormLVar.setOperation("update");
        this.productFormLVar.sourceData.setData(this.productLiveForm1.dataOutput);        
        this.productFormLVar.sourceData.setValue("updatedAt", new Date().getTime());
    	this.productFormLVar.update();		  		  
	  } catch(e) {
		  console.error('ERROR IN productLiveForm1UpdateData: ' + e); 
	  } 
  },
	productFormLVarSuccess: function(inSender, inDeprecated) {
	  try {
            this.productLiveForm1.dataSet.setDataSet(inSender);      		  		  
	  } catch(e) {
		  console.error('ERROR IN productFormLVarSuccess: ' + e); 
	  } 
  },  
*/
  productLiveForm1BeforeServiceCall: function(inSender, inOperation, inData) {
      try {
            inData.updatedAt = new Date().getTime();
            if (inOperation == "insert") {
                inData.createdAt = new Date().getTime();
            }          
          
      } catch(e) {
          console.error('ERROR IN productLiveForm1BeforeServiceCall: ' + e); 
      } 
  },
  _end: 0
});