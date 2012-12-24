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

EditCustomerPage.widgets = {
customerDBFormDataSet: ["wm.Property", {"bindSource":undefined,"bindTarget":1,"property":"customerDBForm.dataSet","readonly":true,"type":"wm.Variable"}, {}],
confirmDeleteNotifVar: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"confirmDeleteNotifVarOk"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Are you sure you want to delete this user? This can't be undone\"","targetProperty":"text"}, {}]
}]
}]
}],
deleteCustomerAssociateSVar: ["wm.ServiceVariable", {"operation":"deleteCustomerAssociate","service":"logs_ultimeyesvision_comDB"}, {"onSuccess":"deleteCustomerSVar"}, {
input: ["wm.ServiceInput", {"type":"deleteCustomerAssociateInputs"}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerProductAssociateDBForm1","targetProperty":"loadingDialog"}, {}]
}]
}],
deleteCustomerSVar: ["wm.ServiceVariable", {"operation":"deleteCustomer","service":"logs_ultimeyesvision_comDB"}, {"onSuccess":"deleteCustomerSVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"deleteCustomerInputs"}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerDBForm","targetProperty":"loadingDialog"}, {}]
}]
}],
onDeleteCustomerSVarSuccess: ["wm.Property", {"isEvent":true,"property":"deleteCustomerSVar.onSuccess","type":"string"}, {}],
customerproductassociateLiveVariable1: ["wm.LiveVariable", {"startUpdate":false,"type":"com.logs_ultimeyesvision_comdb.data.CustomerProductAssociate"}, {"onSuccess":"customerproductassociateLiveVariable1Success"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${customerDBForm.dataSet.id} || -1\n","targetProperty":"filter.customer.id"}, {}],
wire1: ["wm.Wire", {"expression":"1","targetProperty":"filter.product.id"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.logs_ultimeyesvision_comdb.data.CustomerProductAssociate","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"com.logs_ultimeyesvision_comdb.data.CustomerProductAssociateId","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"License","sortable":true,"dataIndex":"id.license","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"id.createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"UpdatedAt","sortable":true,"dataIndex":"id.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Username","sortable":true,"dataIndex":"id.username","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
deleteLicenseSVar: ["wm.ServiceVariable", {"operation":"deleteLicense","service":"logs_ultimeyesvision_comDB"}, {"onSuccess":"customerLiveForm1.deleteData"}, {
input: ["wm.ServiceInput", {"type":"deleteLicenseInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"licenseEditor.dataValue","targetProperty":"license"}, {}]
}]
}]
}],
onCustomerDBFormSuccess: ["wm.Property", {"isEvent":true,"property":"customerDBForm.onSuccess","type":"string"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
customerDBForm: ["wm.DBForm", {"height":"100%","isCompositeKey":false,"readonly":true,"readonlyManager":true,"type":"com.logs_ultimeyesvision_comdb.data.Customer"}, {"onCancelEdit":"licenseFormPanel.hide","onEditNewObject":"licenseFormPanel.show","onEnterKeyPress":"customerDBForm.saveData","onInsertSuccess":"customerDBFormInsertSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"customerDBFormButtonPanel","targetId":null,"targetProperty":"buttonPanel"}, {}],
wire1: ["wm.Wire", {"source":"customerDBFormNewButton","targetId":null,"targetProperty":"newButton"}, {}],
wire2: ["wm.Wire", {"source":"customerDBFormEditButton","targetId":null,"targetProperty":"editButton"}, {}],
wire3: ["wm.Wire", {"source":"customerDBFormDeleteButton","targetId":null,"targetProperty":"deleteButton"}, {}],
wire4: ["wm.Wire", {"source":"customerDBFormCancelButton","targetId":null,"targetProperty":"cancelButton"}, {}],
wire5: ["wm.Wire", {"source":"customerDBFormSaveButton","targetId":null,"targetProperty":"saveButton"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"app.currentPhysicianLVar","targetProperty":"dataOutput.physician"}, {}]
}],
panel3: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
idEditor2: ["wm.Number", {"caption":"Id","captionSize":"150px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
customerProductAssociateDBForm1: ["wm.DBForm", {"desktopHeight":"156px","fitToContentHeight":true,"height":"156px","isCompositeKey":false,"mobileHeight":"218px","padding":"0","readonly":true,"readonlyManager":true,"type":"com.logs_ultimeyesvision_comdb.data.CustomerProductAssociate"}, {"onEnterKeyPress":"customerProductAssociateDBForm1.saveData","onInsertSuccess":"getUnclaimedLogs"}, {
idSubForm2: ["wm.SubForm", {"desktopHeight":"152px","editingMode":"one-to-one","fitToContentHeight":true,"formField":"id","height":"156px","isCompositeKey":true,"mobileHeight":"214px","padding":"0","readonly":true,"type":"com.logs_ultimeyesvision_comdb.data.CustomerProductAssociateId"}, {}, {
customerIdEditor: ["wm.Number", {"caption":"CustomerId","captionSize":"150px","desktopHeight":"26px","emptyValue":"emptyString","formField":"customerId","height":"26px","ignoreParentReadonly":true,"readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerDBForm.dataOutput.id","targetProperty":"dataValue"}, {}]
}]
}],
productEditor: ["wm.SelectMenu", {"caption":"ProductId","captionSize":"150px","dataField":"id","dataType":"com.logs_ultimeyesvision_comdb.data.Product","desktopHeight":"26px","displayExpression":"${name} + \" (v\" + ${version} + \")\"","displayField":"version","formField":"productId","height":"26px","readonly":true,"required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.productsLVar","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.productsLVar.id","targetProperty":"dataValue"}, {}]
}]
}],
licenseEditor3: ["wm.Text", {"caption":"License","captionSize":"150px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"license","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
createdAtEditor: ["wm.Date", {"caption":"CreatedAt","captionSize":"150px","desktopHeight":"26px","emptyValue":"emptyString","formField":"createdAt","height":"26px","readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}]
}],
updatedAtEditor: ["wm.Date", {"caption":"UpdatedAt","captionSize":"150px","dataValueBindingEvaluated":"both","desktopHeight":"26px","emptyValue":"emptyString","formField":"updatedAt","height":"26px","readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}]
}],
usernameEditor2: ["wm.Text", {"caption":"Username","captionSize":"150px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"username","height":"26px","readonly":true,"required":true,"width":"100%"}, {"onchange":"usernameEditor2Change"}]
}]
}],
firstNameEditor2: ["wm.Text", {"caption":"FirstName","captionSize":"150px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"firstName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
lastNameEditor2: ["wm.Text", {"caption":"LastName","captionSize":"150px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"lastName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
middleInitialEditor2: ["wm.Text", {"caption":"MiddleInitial","captionSize":"150px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"middleInitial","height":"26px","readonly":true,"width":"100%"}, {}],
ssnEditor2: ["wm.Text", {"caption":"Ssn","captionSize":"150px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"ssn","height":"26px","readonly":true,"width":"100%"}, {}],
tinEditor2: ["wm.Text", {"caption":"Tin","captionSize":"150px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"tin","height":"26px","readonly":true,"width":"100%"}, {}],
dobEditor: ["wm.Date", {"caption":"Dob","captionSize":"150px","desktopHeight":"26px","emptyValue":"emptyString","formField":"dob","height":"26px","readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
}]
}],
addressEditor2: ["wm.Text", {"caption":"Address","captionSize":"150px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"address","height":"26px","readonly":true,"width":"100%"}, {}],
phoneEditor2: ["wm.Text", {"caption":"Phone","captionSize":"150px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"phone","height":"26px","readonly":true,"width":"100%"}, {}],
emailEditor2: ["wm.Text", {"caption":"Email","captionSize":"150px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"email","height":"26px","readonly":true,"width":"100%"}, {}],
createdAtEditor2: ["wm.DateTime", {"caption":"CreatedAt","captionSize":"150px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"createdAt","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}]
}],
updatedAtEditor2: ["wm.DateTime", {"caption":"UpdatedAt","captionSize":"150px","dataValueBindingEvaluated":"both","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"updatedAt","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}]
}],
notesEditor1: ["wm.LargeTextArea", {"caption":"Notes","captionAlign":"right","captionPosition":"left","captionSize":"150px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"notes","height":"100%","maxHeight":150,"readonly":true,"width":"100%"}, {}]
}],
customerDBFormButtonPanel: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"desktopHeight":"40px","enableTouchHeight":true,"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
customerDBFormNewButton: ["wm.Button", {"caption":"New","desktopHeight":"40px","height":"40px","margin":"4"}, {"onclick":"customerDBForm.editNewObject","onclick1":"customerProductAssociateDBForm1.editNewObject"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"!${idEditor2.dataValue}","targetProperty":"showing"}, {}]
}]
}],
customerDBFormEditButton: ["wm.Button", {"caption":"Edit","desktopHeight":"40px","height":"40px","margin":"4"}, {"onclick":"customerDBForm.editCurrentObject"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${customerDBForm.dataSet.isEmpty}","targetProperty":"disabled"}, {}]
}]
}],
customerDBFormDeleteButton: ["wm.Button", {"caption":"Delete","desktopHeight":"40px","height":"40px","margin":"4"}, {"onclick":"confirmDeleteNotifVar"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${customerDBForm.dataSet.isEmpty}","targetProperty":"disabled"}, {}]
}]
}],
customerDBFormCancelButton: ["wm.Button", {"caption":"Cancel","desktopHeight":"40px","height":"40px","margin":"4","showing":false}, {"onclick":"customerDBForm.cancelEdit","onclick1":"customerProductAssociateDBForm1.cancelEdit"}],
customerDBFormSaveButton: ["wm.Button", {"caption":"Save","desktopHeight":"40px","height":"40px","margin":"4","showing":false}, {"onclick":"customerDBForm.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${customerDBForm.invalid} || !${customerDBForm.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
};

EditCustomerPage.prototype._cssText = '';
EditCustomerPage.prototype._htmlText = '';