dojo.declare("EditCustomerPage", wm.Page, {
    start: function() {
            
    },

  customerDBFormInsertSuccess: function(inSender, inResult) {
        // delay so that bindings have time to update customer id
        wm.onidle(this, function() {
            this.customerIdEditor.setDataValue(inSender.serviceVariable.getValue("id"));
            this.customerProductAssociateDBForm1.saveData();
        });
    },
 
  customerproductassociateLiveVariable1Success: function(inSender, inDeprecated) {      
      if (this.customerProductAssociateDBForm1.readonly) {
          this.customerProductAssociateDBForm1.setDataSet(this.customerproductassociateLiveVariable1);
      }
    },    
        
  usernameEditor2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
      if (inDisplayValue.match(/[A-Z]/)) {
          this.usernameEditor2.setDataValue(inDisplayValue.toLowerCase());
      }
    },
 
    deleteCustomerSVarSuccess: function(inSender, inDeprecated) {
      this.customerDBForm.setDataSet(null);
      this.customerProductAssociateDBForm1.setDataSet(null);
    },
  confirmDeleteNotifVarOk: function(inSender, inResult) {
      this.deleteCustomerAssociateSVar.input.setValue("customerId", this.idEditor2.getDataValue());
      this.deleteCustomerSVar.input.setValue("customerId", this.idEditor2.getDataValue());
      this.deleteCustomerAssociateSVar.update();
    },
    editNewObject: function() {
      this.customerDBForm.editNewObject();
      this.customerProductAssociateDBForm1.editNewObject();
    },
  _end: 0
});
