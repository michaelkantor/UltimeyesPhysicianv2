dojo.declare("PhysiciansPage", wm.Page, {
	start: function() {
		try {
			this.connect(this.physicianproductassociateLiveForm1, "_setReadonly", this.idRelatedEditor1, "_setReadonly");
			//this.physicianLiveForm1.liveSaving = false;
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

/*
  physicianLiveForm1InsertData: function(inSender) {
	  try {
        this.physicianFormLVar.setOperation("insert");
        this.physicianFormLVar.sourceData.setData(this.physicianLiveForm1.dataOutput);
        this.physicianFormLVar.sourceData.setValue("createdAt", new Date().getTime());
        this.physicianFormLVar.sourceData.setValue("updatedAt", new Date().getTime());
		this.physicianFormLVar.update();
	  } catch(e) {
		  console.error('ERROR IN physicianLiveForm1InsertData: ' + e); 
	  } 
  },
  physicianLiveForm1DeleteData: function(inSender) {
	  try {
        this.physicianFormLVar.setOperation("delete");
        this.physicianFormLVar.sourceData.setData(this.physicianLiveForm1.dataOutput);		  
    	this.physicianFormLVar.update();		  
	  } catch(e) {
		  console.error('ERROR IN physicianLiveForm1DeleteData: ' + e); 
	  } 
  },
  physicianLiveForm1UpdateData: function(inSender) {
	  try {
        this.physicianFormLVar.setOperation("update");
        this.physicianFormLVar.sourceData.setData(this.physicianLiveForm1.dataOutput);        
        this.physicianFormLVar.sourceData.setValue("updatedAt", new Date().getTime());
    	this.physicianFormLVar.update();		  
		  
	  } catch(e) {
		  console.error('ERROR IN physicianLiveForm1UpdateData: ' + e); 
	  } 
  },

  physicianFormLVarSuccess1: function(inSender, inDeprecated) {
	  try {          
            this.physicianLiveForm1.dataSet.setDataSet(inSender);	  
		  
	  } catch(e) {
		  console.error('ERROR IN physicianFormLVarSuccess1: ' + e); 
	  } 
  },
  */
  physicianLiveForm1BeforeServiceCall: function(inSender, inOperation, inData) {
      try {
            inData.updatedAt = new Date().getTime();
            if (inOperation == "insert") {
                inData.createdAt = new Date().getTime();
            }          
          
      } catch(e) {
          console.error('ERROR IN physicianLiveForm1BeforeServiceCall: ' + e); 
      } 
  },
  _end: 0
});