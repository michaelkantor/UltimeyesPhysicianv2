dojo.declare("CustomersPage", wm.Page, {
"preferredDevice": "desktop",
bookmarkletList: [],
start: function() {
try {
//this.customerLiveForm1.liveSaving = false;
this.customerLiveVariable1._includeListProps = true;
} catch(e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
navigationGridSelect: function(inSender) {
if (this.tabLayers4) {
this.tabLayers4.setLayerIndex(inSender.getSelectedIndex());
}
},
physiciansGridSelect: function(inSender) {
app.currentPhysicianVar.setData(inSender.selectedItem.getData());
},
customerLiveVariable1Success: function(inSender, inDeprecated) {
inSender.addItem({firstName: "-- New Customer --", id: -1},0);
if (this._reselectNew) {
var id = this._reselectNew.id;
var count = inSender.getCount();
for (var i = 0; i < count; i++) {
if (inSender.getItem(i).getValue("id") == id) {
this.customerDojoGrid.select(i);
break;
}
}
}
delete this._reselectNew;
},
customerDojoGridSelect: function(inSender) {
/* If New Customer is selected... */
if (inSender.selectedItem.getValue("id") == -1) {
this.editCustomerPageContainer.setValue("customerDBFormDataSet", null);
this.editCustomerLayer.activate();
this.editCustomerPageContainer.page.editNewObject();
this.navigationGrid.select(1); // select Edit Customer
} else {
this.logsPageContainer.loadPage("LogsPage");
}
if (this.navigationGrid) {
this.navigationGrid.setShowing(inSender.selectedItem.getValue("id") != -1);
}
if (this.toggleButtonPanel1) {
this.toggleButtonPanel1.setShowing(inSender.selectedItem.getValue("id") != -1);
}
},
editCustomerPageContainerCustomerDBFormSuccess: function(inSender /*,args*/) {
this.customerLiveVariable1.update();
if (this.editCustomerPageContainer.page.customerDBForm.operation == "insert") {
this._reselectNew = this.editCustomerPageContainer.page.customerDBForm.dataSet.getData();
}
},
_end: 0
});

CustomersPage.widgets = {
customerLiveVariable1: ["wm.LiveVariable", {"ignoreCase":true,"orderBy":"asc: lastName, asc: firstName","startUpdate":false,"type":"com.logs_ultimeyesvision_com_devdb.data.Customer"}, {"onPrepareSetData":"customerLiveVariable1PrepareSetData","onSuccess":"customerLiveVariable1Success"}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid","targetProperty":"loadingDialog"}, {}],
wire: ["wm.Wire", {"expression":"${app.getUserIdVar.dataValue} || -1","targetProperty":"filter.physician.id"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.logs_ultimeyesvision_com_devdb.data.Customer","related":["physician"],"view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Id","sortable":true,"dataIndex":"physician.id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"FirstName","sortable":true,"dataIndex":"firstName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"FirstName","sortable":true,"dataIndex":"physician.firstName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"LastName","sortable":true,"dataIndex":"physician.lastName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"LastName","sortable":true,"dataIndex":"lastName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"MiddleInitial","sortable":true,"dataIndex":"physician.middleInitial","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"MiddleInitial","sortable":true,"dataIndex":"middleInitial","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"MedicalLicenseNumber","sortable":true,"dataIndex":"physician.medicalLicenseNumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Ssn","sortable":true,"dataIndex":"ssn","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Tin","sortable":true,"dataIndex":"tin","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Ssn","sortable":true,"dataIndex":"physician.ssn","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Tin","sortable":true,"dataIndex":"physician.tin","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Dob","sortable":true,"dataIndex":"dob","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Dob","sortable":true,"dataIndex":"physician.dob","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Phone","sortable":true,"dataIndex":"phone","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"physician.address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Email","sortable":true,"dataIndex":"email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Phone","sortable":true,"dataIndex":"physician.phone","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Email","sortable":true,"dataIndex":"physician.email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},{"caption":"Password","sortable":true,"dataIndex":"physician.password","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},{"caption":"Notes","sortable":true,"dataIndex":"notes","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"physician.createdAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},{"caption":"UpdatedAt","sortable":true,"dataIndex":"physician.updatedAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},{"caption":"Address2","sortable":true,"dataIndex":"address2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},{"caption":"CompanyName","sortable":true,"dataIndex":"companyName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},{"caption":"Region","sortable":true,"dataIndex":"region","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},{"caption":"Country","sortable":true,"dataIndex":"country","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},{"caption":"PostalCode","sortable":true,"dataIndex":"postalCode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null},{"caption":"Telephone","sortable":true,"dataIndex":"telephone","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19,"subType":null},{"caption":"Login","sortable":true,"dataIndex":"login","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":20,"subType":null},{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":21,"subType":null}]}, {}]
}],
customerOptions: ["wm.Variable", {"isList":true,"json":"[{\"dataValue\":\"View Logs\"},{\"dataValue\":\"Edit Customer\"},{\"dataValue\":\"Download Logs\"}]","type":"StringData"}, {}],
layoutBox1: ["wm.Layout", {"_classes":{"domNode":["ueLogoBackground"]},"horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#cccccc"},"verticalAlign":"top"}, {}, {
panel4: ["wm.Panel", {"fitToContentWidth":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"302px"}, {}, {
customerDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"columns":[{"show":false,"field":"MOBILE COLUMN","title":"-","width":"100%","align":"left","expression":"'<div class=\"MobileRowTitle\">Id: ' + ${id} + '</div>'","isCustomField":true,"mobileColumn":true},{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"firstName","title":"FirstName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"lastName","title":"Customer","width":"100%","align":"left","formatFunc":"","expression":"${firstName} + \" \" + ${lastName}","mobileColumn":false},{"show":false,"field":"middleInitial","title":"MiddleInitial","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"ssn","title":"Ssn","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"tin","title":"Tin","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"dob","title":"Dob","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"address","title":"Address","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"phone","title":"Phone","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"email","title":"Email","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"updatedAt","title":"UpdatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"notes","title":"Notes","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"physician.id","title":"Physician.id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"physician.firstName","title":"Physician.firstName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"physician.lastName","title":"Physician.lastName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"physician.middleInitial","title":"Physician.middleInitial","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"physician.medicalLicenseNumber","title":"Physician.medicalLicenseNumber","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"physician.ssn","title":"Physician.ssn","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"physician.tin","title":"Physician.tin","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"physician.dob","title":"Physician.dob","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"physician.address","title":"Physician.address","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"physician.phone","title":"Physician.phone","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"physician.email","title":"Physician.email","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"physician.password","title":"Physician.password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"physician.createdAt","title":"Physician.createdAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"physician.updatedAt","title":"Physician.updatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"address2","title":"Address2","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"companyName","title":"CompanyName","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"city","title":"City","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"region","title":"Region","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"country","title":"Country","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"postalCode","title":"PostalCode","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"telephone","title":"Telephone","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"login","title":"Login","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"password","title":"Password","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"","minDesktopHeight":60,"width":"150px"}, {"onSelect":"customerDojoGridSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
navigationGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"dataValue","title":"Actions","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"MOBILE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Actions: \" + ${dataValue} + \"</div>\"\n","isCustomField":true,"mobileColumn":true}],"deviceType":["desktop"],"height":"100%","margin":"0","minDesktopHeight":60,"selectFirstRow":true,"width":"150px"}, {"onSelect":"navigationGridSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerOptions","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":"Boolean(window[\"studio\"]) || ${customerDojoGrid.isRowSelected}","targetProperty":"showing"}, {}]
}]
}]
}],
tabLayers4Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"Boolean(window[\"studio\"]) || ${customerDojoGrid.isRowSelected}","targetProperty":"showing"}, {}]
}],
toggleButtonPanel1: ["wm.ToggleButtonPanel", {"deviceType":["tablet","phone"],"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"editToggleButton","targetProperty":"currentButton"}, {}]
}],
editToggleButton: ["wm.Button", {"caption":"Edit Customer","height":"100%","margin":"0","width":"100%"}, {"onclick":"editCustomerLayer"}],
viewLogsToggleButton: ["wm.Button", {"caption":"Logs","height":"100%","margin":"0","width":"100%"}, {"onclick":"logsLayer"}]
}],
tabLayers4: ["wm.Layers", {"defaultLayer":0}, {}, {
logsLayer: ["wm.Layer", {"borderColor":"","caption":"Logs","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
logsPageContainer: ["wm.PageContainer", {"deferLoad":true,"pageName":"LogsPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}],
editCustomerLayer: ["wm.Layer", {"borderColor":"","caption":"Edit Customer","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
editCustomerPageContainer: ["wm.PageContainer", {"deferLoad":true,"pageName":"EditCustomerPage","styles":{"backgroundColor":"#ffffff"},"subpageEventlist":{"onDeleteCustomerSVarSuccess":"deleteCustomerSVar.onSuccess","onCustomerDBFormSuccess":"customerDBForm.onSuccess"},"subpageMethodlist":{},"subpageProplist":{"customerDBFormDataSet":"customerDBForm.dataSet"}}, {"onCustomerDBFormSuccess":"editCustomerPageContainerCustomerDBFormSuccess","onDeleteCustomerSVarSuccess":"customerLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem","targetProperty":"customerDBFormDataSet"}, {}]
}]
}]
}],
downloadLogsLayer: ["wm.Layer", {"borderColor":"","caption":"Download","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"DownloadLogsPage"}, {}]
}]
}]
}]
}]
};

CustomersPage.prototype._cssText = '';
CustomersPage.prototype._htmlText = '';