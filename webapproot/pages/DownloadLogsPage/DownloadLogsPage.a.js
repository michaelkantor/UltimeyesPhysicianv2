dojo.declare("DownloadLogsPage", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
/*******************************************
* Navigation functions
*******************************************/
navGridSelect: function(inSender) {
wm.onidle(this, function() {
var selectedName = inSender.selectedItem.getValue("dataValue");
switch(selectedName) {
case "Summaries":
this.summariesLayer.activate();
break;
case "Calibrations":
this.calibrationsLayer.activate();
break;
case "Dynamic":
this.dynamicLogsLayer.activate();
break;
case "Static":
this.staticLogsLayer.activate();
break;
}
this.sessionNumberGridSelect(this.sessionNumberGrid);
});
},
dynamicSessionAndExerciseListSVarSuccess: function(inSender, inDeprecated) {
this.dynamicSessionOptionsGridSelectionChange(this.dynamicSessionOptionsGrid);
},
staticSessionAndExerciseListSVarSuccess: function(inSender, inDeprecated) {
this.staticSessionOptionsGridSelectionChange(this.staticSessionOptionsGrid);
},
calibrationSessionAndExerciseListSVarSuccess: function(inSender, inDeprecated) {
this.calibrationSessionOptionsGridSelectionChange(this.calibrationSessionOptionsGrid);
},
sessionNumberGridSelect: function(inSender) {
try {
var data = inSender.selectedItem.getData() || [];
var logIdList = [];
var sessionNumberList = [];
for (var i = 0; i < data.length; i++) {
logIdList.push(data[i].logId);
sessionNumberList.push(data[i].sessionNumber);
}
/* Filter by Log File ID */
this.listSummariesSVar.input.setValue("logIdList", logIdList);
/* Filter by Session Number */
this.staticSessionAndExerciseListSVar.input.setValue("sessionNumberList", sessionNumberList);
this.dynamicSessionAndExerciseListSVar.input.setValue("sessionNumberList", sessionNumberList);
this.calibrationSessionAndExerciseListSVar.input.setValue("sessionNumberList", sessionNumberList);
//this.getCalibrationLogsSVar.input.setValue("sessionNumberList", sessionNumberList);
switch(this.logNavLayers.getActiveLayer().name) {
case "summariesLayer":
this.listSummariesSVar.update();
break;
case "calibrationsLayer":
this.updateCalibrationsLayer();
//this.getCalibrationLogsSVar.update();
break;
case "staticLogsLayer":
this.updateStaticsLayer();
break;
case "dynamicLogsLayer":
this.updateDynamicsLayer();
break;
}
} catch(e) {
console.error('ERROR IN sessionNumberGridSelectionChange: ' + e);
}
},
updateCalibrationsLayer: function() {
this.calibrationSessionAndExerciseListSVar.update();
},
updateStaticsLayer: function() {
this.staticSessionAndExerciseListSVar.update();
},
updateDynamicsLayer: function() {
this.dynamicSessionAndExerciseListSVar.update();
},
/***********************************************
* Functions for working with the selection grids
* for dynamic and static logs layers
***********************************************/
calibrationSessionOptionsGridSelectionChange: function(inSender) {
try {
var data = inSender.selectedItem.getData();
if (!data || data.length == 0) {
data = inSender.dataSet.getData();
}
if (!data) data = [];
var fileIdList = [];
for (var i = 0; i < data.length; i++) {
fileIdList.push(data[i].fileId);
}
this.getCalibrationLogsSVar.input.setValue("fileIdList", fileIdList);
} catch(e) {
console.error('ERROR IN staticSessionOptionsGridSelectionChange: ' + e);
}
},
dynamicSessionOptionsGridSelectionChange: function(inSender) {
try {
var data = inSender.selectedItem.getData();
if (!data || data.length == 0) {
data = inSender.dataSet.getData();
}
if (!data) data = [];
var fileIdList = [];
for (var i = 0; i < data.length; i++) {
fileIdList.push(data[i].fileId);
}
this.getDynamicLogsSVar.input.setValue("fileIdList", fileIdList);
} catch(e) {
console.error('ERROR IN staticSessionOptionsGridSelectionChange: ' + e);
}
},
staticSessionOptionsGridSelectionChange: function(inSender) {
try {
var data = inSender.selectedItem.getData();
if (!data || data.length == 0) {
data = inSender.dataSet.getData();
}
if (!data) data = [];
var fileIdList = [];
for (var i = 0; i < data.length; i++) {
fileIdList.push(data[i].fileId);
}
this.getStaticLogsSVar.input.setValue("fileIdList", fileIdList);
} catch(e) {
console.error('ERROR IN staticSessionOptionsGridSelectionChange: ' + e);
}
},
/****************************************
* Functions for generating CSV files
****************************************/
getUsername: function(inCustomer) {
return inCustomer.getValue("customerProductAssociates.username");
},
gridToCSV: function(inGrid, inFileName) {
try {
var data = inGrid.dataSet.getData();
var csvdata = [];
var csvheader = [];
dojo.forEach(inGrid.columns, function(column) {
var field = column.field;
if (column.show) {
csvheader.push(field);
}
});
csvdata.push("%" + csvheader.join("\t"));
dojo.forEach(data, function(row) {
var csvrow = [];
// add data to the csvrow array in the order specified by the Grid's columns setup
// which controls the order they are displayed in the dialog
dojo.forEach(inGrid.columns, function(column) {
var field = column.field;
if (column.show) {
csvrow.push(row[field]);
}
}, this);
csvdata.push(csvrow.join("\t"));
}, this);
app.echoFile(csvdata.join("\n"), "application/csv", inFileName);
} catch(e) {
console.error('ERROR IN gridToCSV: ' + e);
}
},
summaryToCSVButtonClick: function(inSender) {
this.gridToCSV(this.fullSummariesGrid, "UltimeyesLogSummaryFor_" + this.getUsername(this.currentCustomer) + ".csv");
},
calibrationToCSVButtonClick: function(inSender) {
this.gridToCSV(this.fullSummariesGrid, "UltimeyesLogCalibrationFor_" + this.getUsername(this.currentCustomer) + ".csv");
},
staticToCSVButtonClick: function(inSender) {
this.gridToCSV(this.staticLogGrid,
"UltimeyesStaticLogsFor_" +this.getUsername(this.currentCustomer)+
"_" + "FileIDs_" + this.staticLogGrid.dataSet.input.getValue("fileIdList").join(".") + ".csv");
},
dynamicToCSVButtonClick: function(inSender) {
this.gridToCSV(this.dynamicLogGrid,
"UltimeyesDynamicLogsFor_" + this.getUsername(this.currentCustomer) +
"_" + "FileIDs_" + this.dynamicLogGrid.dataSet.input.getValue("fileIdList").join(".") + ".csv");
},
logSessionsSVarSuccess: function(inSender, inDeprecated) {
var data = inSender.getData();
if (data) {
var newdata = [];
var logIdHash = {};
for (var i = 0; i < data.length; i++) {
if (!logIdHash[data[i].logId]) {
logIdHash[data[i].logId] = true;
newdata.push(data[i]);
}
}
inSender.setData(newdata);
wm.onidle(this, function() {
this.sessionNumberGrid.select(0);
});
}
},
fullSreenToCsvButtonClick: function(inSender) {
this.fullScreenToCsvMethod();
},
summaryFullScreenButtonClick: function(inSender) {
this.fullScreenDialog.show();
this.fullScreenGrid.columns = this.fullSummariesGrid.columns;
this.fullScreenGrid.setDataSet(this.fullSummariesGrid.dataSet);
this.fullScreenToCsvMethod = dojo.hitch(this, "summaryToCSVButtonClick");
},
calibrationsFullScreenButtonClick: function(inSender) {
this.fullScreenDialog.show();
this.fullScreenGrid.columns = this.calibrationsGrid.columns;
this.fullScreenGrid.setDataSet(this.calibrationsGrid.dataSet);
this.fullScreenToCsvMethod = dojo.hitch(this, "calibrationToCSVButtonClick");
},
dynamicsFullScreenButtonClick: function(inSender) {
this.fullScreenDialog.show();
this.fullScreenGrid.columns = this.dynamicLogGrid.columns;
this.fullScreenGrid.setDataSet(this.dynamicLogGrid.dataSet);
this.fullScreenToCsvMethod = dojo.hitch(this, "dynamicToCSVButtonClick");
},
staticFullScreenButtonClick: function(inSender) {
this.fullScreenDialog.show();
this.fullScreenGrid.columns = this.staticLogGrid.columns;
this.fullScreenGrid.setDataSet(this.staticLogGrid.dataSet);
this.fullScreenToCsvMethod = dojo.hitch(this, "staticToCSVButtonClick");
},
_end: 0
});

DownloadLogsPage.widgets = {
listSummariesSVar: ["wm.ServiceVariable", {"operation":"getSummariesByLogFileId","service":"logs_ultimeyesvision_com_devDB"}, {}, {
input: ["wm.ServiceInput", {"type":"getSummariesByLogFileIdInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentCustomer.id","targetProperty":"customerId"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"ultimeyeslogsummaryDojoGrid","targetProperty":"loadingDialog"}, {}]
}]
}],
getStaticLogsSVar: ["wm.ServiceVariable", {"operation":"getStaticLogs","service":"logs_ultimeyesvision_com_devDB"}, {}, {
input: ["wm.ServiceInput", {"type":"getStaticLogsInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentCustomer.id","targetProperty":"customerId"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"staticLogGrid","targetProperty":"loadingDialog"}, {}]
}]
}],
getCalibrationLogsSVar: ["wm.ServiceVariable", {"operation":"getCalibrationLogs","service":"logs_ultimeyesvision_com_devDB"}, {"onSuccess":"getCalibrationLogsSVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"getCalibrationLogsInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentCustomer.id","targetProperty":"customerId"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"calibrationsGrid","targetProperty":"loadingDialog"}, {}]
}]
}],
getDynamicLogsSVar: ["wm.ServiceVariable", {"operation":"getDynamicLogs","service":"logs_ultimeyesvision_com_devDB"}, {}, {
input: ["wm.ServiceInput", {"type":"getDynamicLogsInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentCustomer.id","targetProperty":"customerId"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dynamicLogGrid","targetProperty":"loadingDialog"}, {}]
}]
}],
staticSessionAndExerciseListSVar: ["wm.ServiceVariable", {"operation":"getStaticSessionAndExerciseNumbersForCustomer","service":"logs_ultimeyesvision_com_devDB"}, {"onSuccess":"staticSessionAndExerciseListSVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"getStaticSessionAndExerciseNumbersForCustomerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentCustomer.id","targetProperty":"customerId"}, {}]
}]
}]
}],
dynamicSessionAndExerciseListSVar: ["wm.ServiceVariable", {"operation":"getDynamicSessionAndExerciseNumbersForCustomer","service":"logs_ultimeyesvision_com_devDB"}, {"onSuccess":"dynamicSessionAndExerciseListSVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"getDynamicSessionAndExerciseNumbersForCustomerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentCustomer.id","targetProperty":"customerId"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dynamicSessionOptionsGrid","targetProperty":"loadingDialog"}, {}]
}]
}],
calibrationSessionAndExerciseListSVar: ["wm.ServiceVariable", {"operation":"getCalibrationSessionAndExerciseNumbersForCustomer","service":"logs_ultimeyesvision_com_devDB"}, {"onSuccess":"calibrationSessionAndExerciseListSVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"getCalibrationSessionAndExerciseNumbersForCustomerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentCustomer.id","targetProperty":"customerId"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"calibrationSessionOptionsGrid","targetProperty":"loadingDialog"}, {}]
}]
}],
logNavVar: ["wm.Variable", {"isList":true,"json":"[{\"dataValue\":\"Summaries\"},{\"dataValue\":\"Calibrations\"},{\"dataValue\":\"Dynamic\"},{\"dataValue\":\"Static\"}]","type":"StringData"}, {}],
currentCustomer: ["wm.Variable", {"type":"com.logs_ultimeyesvision_com_devdb.data.Customer"}, {"onSetData":"currentCustomerSetData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[customersPage].customerDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}]
}],
logSessionsSVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getSessionIdsForCustomer","service":"logs_ultimeyesvision_com_devDB"}, {"onSuccess":"logSessionsSVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"getSessionIdsForCustomerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentCustomer.id","targetProperty":"customerId"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"sessionNumberGrid","targetProperty":"loadingDialog"}, {}]
}]
}],
fullScreenDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","height":"100%","title":undefined,"width":"100%"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
fullScreenGrid: ["wm.DojoGrid", {"height":"100%","localizationStructure":{},"margin":"0","minDesktopHeight":60,"singleClickEdit":true}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","borderColor":"#959DAB","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
fullSreenToCsvButton: ["wm.Button", {"caption":"Download CSV","margin":"4","width":"120px"}, {"onclick":"fullSreenToCsvButtonClick"}],
closeDialogButton: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"fullScreenDialog.hide"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
navGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"dataValue","title":"Sections","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Sections: \" + ${dataValue} + \"</div>\"\n"}],"deviceType":["desktop"],"height":"100%","margin":"0","minDesktopHeight":60,"selectFirstRow":true,"width":"100px"}, {"onSelect":"navGridSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"logNavVar","targetProperty":"dataSet"}, {}]
}]
}],
sessionNumberGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"MOBILE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>SessionNumber: \" + ${sessionNumber} + \"</div>\"\n","isCustomField":true,"mobileColumn":true},{"show":true,"field":"sessionNumber","title":"Session #","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"dateTaken","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"dateType":"date"},"expression":"","mobileColumn":false},{"show":false,"field":"logId","title":"LogId","width":"100%","displayType":"Java.lang.Integer","align":"left","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"0","minDesktopHeight":60,"selectionMode":"extended","width":"217px"}, {"onSelect":"sessionNumberGridSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"logSessionsSVar","targetProperty":"dataSet"}, {}]
}]
}],
logNavLayers: ["wm.Layers", {"defaultLayer":4}, {}, {
summariesLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
fullSummariesGrid: ["wm.DojoGrid", {"border":"0","columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${dateTaken}) + \"</div>\"\n+ \"<div class='MobileRow'>Session#: \" + ${sessionNumber} + \"</div>\"\n+ \"<div class='MobileRow'>Excercise: \" + ${excercise} + \"</div>\"\n+ \"<div class='MobileRow'>Type: \" + ${type} + \"</div>\"\n+ \"<div class='MobileRow'>Distract Lev: \" + ${distractorLevel} + \"</div>\"\n+ \"<div class='MobileRow'>CalSf64: \" + ${calSf64} + \"</div>\"\n+ \"<div class='MobileRow'>CalSf32: \" + ${calSf32} + \"</div>\"\n+ \"<div class='MobileRow'>CalSf16: \" + ${calSf16} + \"</div>\"\n+ \"<div class='MobileRow'>CalSf8: \" + ${calSf8} + \"</div>\"\n+ \"<div class='MobileRow'>CalSf4: \" + ${calSf4} + \"</div>\"\n+ \"<div class='MobileRow'>CasSf2: \" + ${casSf2} + \"</div>\"\n+ \"<div class='MobileRow'>CalOr0: \" + ${calOrientation0} + \"</div>\"\n+ \"<div class='MobileRow'>CalOr45: \" + ${calOrientation45} + \"</div>\"\n+ \"<div class='MobileRow'>CalOr90: \" + ${calOrientation90} + \"</div>\"\n+ \"<div class='MobileRow'>CalOr135: \" + ${calOrientation135} + \"</div>\"\n+ \"<div class='MobileRow'>CushionSf64: \" + ${cushionSf64} + \"</div>\"\n+ \"<div class='MobileRow'>CushionSf32: \" + ${cushionSf32} + \"</div>\"\n+ \"<div class='MobileRow'>CushionSf16: \" + ${cushionSf16} + \"</div>\"\n+ \"<div class='MobileRow'>CushionSf8: \" + ${cushionSf8} + \"</div>\"\n+ \"<div class='MobileRow'>CushionSf4: \" + ${cushionSf4} + \"</div>\"\n+ \"<div class='MobileRow'>CushionSf2: \" + ${cushionSf2} + \"</div>\"\n+ \"<div class='MobileRow'>Soa: \" + ${soa} + \"</div>\"\n+ \"<div class='MobileRow'>CalcSize82: \" + ${calcSize82} + \"</div>\"\n+ \"<div class='MobileRow'>CalcSize42: \" + ${calcSize42} + \"</div>\"\n+ \"<div class='MobileRow'>CalcSize22: \" + ${calcSize22} + \"</div>\"\n+ \"<div class='MobileRow'>CalcSize13: \" + ${calcSize13} + \"</div>\"\n+ \"<div class='MobileRow'>CalcSize7: \" + ${calcSize7} + \"</div>\"\n+ \"<div class='MobileRow'>CalcSize6: \" + ${calcSize6} + \"</div>\"\n+ \"<div class='MobileRow'>Score: \" + ${score} + \"</div>\"\n+ \"<div class='MobileRow'>ScreenDistance: \" + ${screenDistance} + \"</div>\"\n+ \"<div class='MobileRow'>ScreenWidth: \" + ${screenWidth} + \"</div>\"\n+ \"<div class='MobileRow'>CreatedAt: \" + wm.List.prototype.dateFormatter({}, null,null,null,${createdAt}) + \"</div>\"\n+ \"<div class='MobileRow'>ScreenResX: \" + ${screenResX} + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"dateTaken","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"sessionNumber","title":"Session#","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"excercise","title":"Excercise","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"type","title":"Type","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"distractorLevel","title":"Distract Lev","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"calSf64","title":"CalSf64","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calSf32","title":"CalSf32","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calSf16","title":"CalSf16","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calSf8","title":"CalSf8","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calSf4","title":"CalSf4","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"casSf2","title":"CasSf2","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calOrientation0","title":"CalOr0","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calOrientation45","title":"CalOr45","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calOrientation90","title":"CalOr90","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"calOrientation135","title":"CalOr135","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"cushionSf64","title":"CushionSf64","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"cushionSf32","title":"CushionSf32","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"cushionSf16","title":"CushionSf16","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"cushionSf8","title":"CushionSf8","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"cushionSf4","title":"CushionSf4","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"cushionSf2","title":"CushionSf2","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"soa","title":"Soa","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calcSize82","title":"CalcSize82","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calcSize42","title":"CalcSize42","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calcSize22","title":"CalcSize22","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calcSize13","title":"CalcSize13","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calcSize7","title":"CalcSize7","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"calcSize6","title":"CalcSize6","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"score","title":"Score","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"screenDistance","title":"ScreenDistance","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"screenWidth","title":"ScreenWidth","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"updatedAt","title":"UpdatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":true,"field":"screenResX","title":"ScreenResX","width":"80px","align":"right","formatFunc":"","mobileColumn":false}],"height":"100%","localizationStructure":{},"margin":"","minDesktopHeight":60}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"listSummariesSVar","targetProperty":"dataSet"}, {}]
}]
}],
panel1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
summaryToCSVButton: ["wm.Button", {"caption":"Download CSV","height":"100%","margin":"4","width":"127px"}, {"onclick":"summaryToCSVButtonClick"}],
summaryFullScreenButton: ["wm.Button", {"caption":"Full Screen","height":"100%","margin":"4","width":"127px"}, {"onclick":"summaryFullScreenButtonClick"}]
}]
}],
calibrationsLayer: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {"onShow":"updateCalibrationsLayer"}, {
calibrationsGridPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
calibrationSessionOptionsGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>FileId: \" + ${fileId} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + ${dateTaken} + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"fileId","title":"FileId","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"dateTaken","title":"Date","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sessionNumber","title":"SessionNumber","width":"100%","align":"left","formatFunc":"","mobileColumn":false}],"height":"100%","margin":"4","minDesktopHeight":60,"selectionMode":"extended","width":"150px"}, {"onDeselect":"getCalibrationLogsSVar","onSelect":"getCalibrationLogsSVar","onSelectionChange":"calibrationSessionOptionsGridSelectionChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"calibrationSessionAndExerciseListSVar","targetProperty":"dataSet"}, {}]
}]
}],
calibrationsGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>DateTaken: \" + wm.List.prototype.dateFormatter({}, null,null,null,${dateTaken}) + \"</div>\"\n+ \"<div class='MobileRow'>SessionNumber: \" + ${sessionNumber} + \"</div>\"\n+ \"<div class='MobileRow'>AtStart: \" + ${atStart} + \"</div>\"\n+ \"<div class='MobileRow'>Screen: \" + ${screen} + \"</div>\"\n+ \"<div class='MobileRow'>GaborCount: \" + ${gaborCount} + \"</div>\"\n+ \"<div class='MobileRow'>Sf: \" + ${sf} + \"</div>\"\n+ \"<div class='MobileRow'>Contrast: \" + ${contrast} + \"</div>\"\n+ \"<div class='MobileRow'>LocationX: \" + ${locationX} + \"</div>\"\n+ \"<div class='MobileRow'>LocationY: \" + ${locationY} + \"</div>\"\n+ \"<div class='MobileRow'>Clicked: \" + ${clicked} + \"</div>\"\n+ \"<div class='MobileRow'>CreatedAt: \" + wm.List.prototype.dateFormatter({}, null,null,null,${createdAt}) + \"</div>\"\n+ \"<div class='MobileRow'>UpdatedAt: \" + wm.List.prototype.dateFormatter({}, null,null,null,${updatedAt}) + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"dateTaken","title":"DateTaken","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":true,"field":"sessionNumber","title":"SessionNumber","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"atStart","title":"AtStart","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"screen","title":"Screen","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"gaborCount","title":"GaborCount","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"sf","title":"Sf","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"contrast","title":"Contrast","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"locationX","title":"LocationX","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"locationY","title":"LocationY","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"clicked","title":"Clicked","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"updatedAt","title":"UpdatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false}],"height":"100%","margin":"4","minDesktopHeight":60}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"getCalibrationLogsSVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
calibrationsToCSVButton: ["wm.Button", {"caption":"Download CSV","height":"100%","margin":"4","width":"127px"}, {"onclick":"calibrationToCSVButtonClick"}],
calibrationsFullScreenButton: ["wm.Button", {"caption":"Full Screen","height":"100%","margin":"4","width":"127px"}, {"onclick":"calibrationsFullScreenButtonClick"}]
}]
}],
dynamicLogsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {"onShow":"updateDynamicsLayer"}, {
dynamicSessionOptionsGrid1Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dynamicSessionOptionsGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"fileId","title":"FileId","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"dateTaken","title":"Date","width":"100%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"dateType":"date"},"mobileColumn":false},{"show":false,"field":"sessionNumber","title":"SessionNumber","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"exerciseNumber","title":"ExerciseNumber","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>FileId: \" + ${fileId} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({\"dateType\":\"date\"}, null,null,null,${dateTaken}) + \"</div>\"\n"}],"height":"100%","margin":"4","minDesktopHeight":60,"selectionMode":"extended","width":"150px"}, {"onSelectionChange":"dynamicSessionOptionsGridSelectionChange","onSelect":"getDynamicLogsSVar","onDeselect":"getDynamicLogsSVar"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dynamicSessionAndExerciseListSVar","targetProperty":"dataSet"}, {}]
}]
}],
dynamicLogGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"dateTaken","title":"DateTaken","width":"80px","align":"left","formatFunc":"wm_date_formatter","formatProps":null,"mobileColumn":false},{"show":true,"field":"sessionNumber","title":"SessionNumber","width":"80px","align":"right","formatFunc":"","expression":"","mobileColumn":false},{"show":true,"field":"excerciseNumber","title":"ExcerciseNumber","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"programNumber","title":"ProgramNumber","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"stimOnSetTime","title":"StimOnSetTime","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"stimType","title":"StimType","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"size","title":"Size","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"locationX","title":"LocationX","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"locationY","title":"LocationY","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"orientation","title":"Orientation","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"sf","title":"Sf","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"onsetContrast","title":"OnsetContrast","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"whenClicked","title":"WhenClicked","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"contrastWhenClicked","title":"ContrastWhenClicked","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"wasFlashingWhenClicked","title":"WasFlashingWhenClicked","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"wasMadeSuperBright","title":"WasMadeSuperBright","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"numTeleports","title":"NumTeleports","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"currentCalValue","title":"CurrentCalValue","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"currentCushion","title":"CurrentCushion","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"cushionChange","title":"CushionChange","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"currentSoaVal","title":"CurrentSoaVal","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"bonusMuliplier","title":"BonusMuliplier","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","formatProps":null,"mobileColumn":false},{"show":true,"field":"updatedAt","title":"UpdatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","formatProps":null,"mobileColumn":false},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>DateTaken: \" + wm.List.prototype.dateFormatter({}, null,null,null,${dateTaken}) + \"</div>\"\n+ \"<div class='MobileRow'>SessionNumber: \" + ${sessionNumber} + \"</div>\"\n+ \"<div class='MobileRow'>ExcerciseNumber: \" + ${excerciseNumber} + \"</div>\"\n+ \"<div class='MobileRow'>ProgramNumber: \" + ${programNumber} + \"</div>\"\n+ \"<div class='MobileRow'>StimOnSetTime: \" + ${stimOnSetTime} + \"</div>\"\n+ \"<div class='MobileRow'>StimType: \" + ${stimType} + \"</div>\"\n+ \"<div class='MobileRow'>Size: \" + ${size} + \"</div>\"\n+ \"<div class='MobileRow'>LocationX: \" + ${locationX} + \"</div>\"\n+ \"<div class='MobileRow'>LocationY: \" + ${locationY} + \"</div>\"\n+ \"<div class='MobileRow'>Orientation: \" + ${orientation} + \"</div>\"\n+ \"<div class='MobileRow'>Sf: \" + ${sf} + \"</div>\"\n+ \"<div class='MobileRow'>OnsetContrast: \" + ${onsetContrast} + \"</div>\"\n+ \"<div class='MobileRow'>WhenClicked: \" + ${whenClicked} + \"</div>\"\n+ \"<div class='MobileRow'>ContrastWhenClicked: \" + ${contrastWhenClicked} + \"</div>\"\n+ \"<div class='MobileRow'>WasFlashingWhenClicked: \" + ${wasFlashingWhenClicked} + \"</div>\"\n+ \"<div class='MobileRow'>WasMadeSuperBright: \" + ${wasMadeSuperBright} + \"</div>\"\n+ \"<div class='MobileRow'>NumTeleports: \" + ${numTeleports} + \"</div>\"\n+ \"<div class='MobileRow'>CurrentCalValue: \" + ${currentCalValue} + \"</div>\"\n+ \"<div class='MobileRow'>CurrentCushion: \" + ${currentCushion} + \"</div>\"\n+ \"<div class='MobileRow'>CushionChange: \" + ${cushionChange} + \"</div>\"\n+ \"<div class='MobileRow'>CurrentSoaVal: \" + ${currentSoaVal} + \"</div>\"\n+ \"<div class='MobileRow'>BonusMuliplier: \" + ${bonusMuliplier} + \"</div>\"\n+ \"<div class='MobileRow'>CreatedAt: \" + wm.List.prototype.dateFormatter({}, null,null,null,${createdAt}) + \"</div>\"\n+ \"<div class='MobileRow'>UpdatedAt: \" + wm.List.prototype.dateFormatter({}, null,null,null,${updatedAt}) + \"</div>\"\n"}],"height":"100%","margin":"4","minDesktopHeight":60}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"getDynamicLogsSVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel4: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dynamicToCSVButton: ["wm.Button", {"caption":"Download CSV","height":"100%","margin":"4","width":"127px"}, {"onclick":"dynamicToCSVButtonClick"}],
dynamicsFullScreenButton: ["wm.Button", {"caption":"Full Screen","height":"100%","margin":"4","width":"127px"}, {"onclick":"dynamicsFullScreenButtonClick"}]
}]
}],
staticLogsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {"onShow":"updateStaticsLayer"}, {
staticSessionOptionsGrid1Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
staticSessionOptionsGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>FileId: \" + ${fileId} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${dateTaken}) + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"sessionNumber","title":"SessionNumber","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"fileId","title":"FileId","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"dateTaken","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":null,"mobileColumn":false},{"show":false,"field":"exerciseNumber","title":"ExerciseNumber","width":"100%","align":"left","formatFunc":"","mobileColumn":false}],"height":"100%","margin":"4","minDesktopHeight":60,"selectionMode":"extended","width":"150px"}, {"onDeselect":"getStaticLogsSVar","onSelect":"getStaticLogsSVar","onSelectionChange":"staticSessionOptionsGridSelectionChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"staticSessionAndExerciseListSVar","targetProperty":"dataSet"}, {}]
}]
}],
staticLogGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>DateTaken: \" + wm.List.prototype.dateFormatter({}, null,null,null,${dateTaken}) + \"</div>\"\n+ \"<div class='MobileRow'>SessionNumber: \" + ${sessionNumber} + \"</div>\"\n+ \"<div class='MobileRow'>Sf: \" + ${sf} + \"</div>\"\n+ \"<div class='MobileRow'>LocationX: \" + ${locationX} + \"</div>\"\n+ \"<div class='MobileRow'>LocationY: \" + ${locationY} + \"</div>\"\n+ \"<div class='MobileRow'>CreatedAt: \" + wm.List.prototype.dateFormatter({}, null,null,null,${createdAt}) + \"</div>\"\n+ \"<div class='MobileRow'>UpdatedAt: \" + wm.List.prototype.dateFormatter({}, null,null,null,${updatedAt}) + \"</div>\"\n+ \"<div class='MobileRow'>ExcerciseNumber: \" + ${excerciseNumber} + \"</div>\"\n+ \"<div class='MobileRow'>ProgramNumber: \" + ${programNumber} + \"</div>\"\n+ \"<div class='MobileRow'>StimOnSetTime: \" + ${stimOnSetTime} + \"</div>\"\n+ \"<div class='MobileRow'>StimType: \" + ${stimType} + \"</div>\"\n+ \"<div class='MobileRow'>Size: \" + ${size} + \"</div>\"\n+ \"<div class='MobileRow'>Orientation: \" + ${orientation} + \"</div>\"\n+ \"<div class='MobileRow'>OnsetContrast: \" + ${onsetContrast} + \"</div>\"\n+ \"<div class='MobileRow'>WhenClicked: \" + ${whenClicked} + \"</div>\"\n+ \"<div class='MobileRow'>ContrastWhenClicked: \" + ${contrastWhenClicked} + \"</div>\"\n+ \"<div class='MobileRow'>WasFlashingWhenClicked: \" + ${wasFlashingWhenClicked} + \"</div>\"\n+ \"<div class='MobileRow'>WasMadeSuperBright: \" + ${wasMadeSuperBright} + \"</div>\"\n+ \"<div class='MobileRow'>NumTeleports: \" + ${numTeleports} + \"</div>\"\n+ \"<div class='MobileRow'>CurrentCalValue: \" + ${currentCalValue} + \"</div>\"\n+ \"<div class='MobileRow'>CurrentCushion: \" + ${currentCushion} + \"</div>\"\n+ \"<div class='MobileRow'>CushionChange: \" + ${cushionChange} + \"</div>\"\n+ \"<div class='MobileRow'>CurrentSoaVal: \" + ${currentSoaVal} + \"</div>\"\n+ \"<div class='MobileRow'>BonusMuliplier: \" + ${bonusMuliplier} + \"</div>\"\n","mobileColumn":false},{"show":true,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"dateTaken","title":"DateTaken","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":true,"field":"sessionNumber","title":"SessionNumber","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"sf","title":"Sf","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"locationX","title":"LocationX","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"locationY","title":"LocationY","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":true,"field":"updatedAt","title":"UpdatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":true,"field":"excerciseNumber","title":"ExcerciseNumber","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"programNumber","title":"ProgramNumber","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"stimOnSetTime","title":"StimOnSetTime","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"stimType","title":"StimType","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"size","title":"Size","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"orientation","title":"Orientation","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"onsetContrast","title":"OnsetContrast","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"whenClicked","title":"WhenClicked","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"contrastWhenClicked","title":"ContrastWhenClicked","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"wasFlashingWhenClicked","title":"WasFlashingWhenClicked","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"wasMadeSuperBright","title":"WasMadeSuperBright","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"numTeleports","title":"NumTeleports","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"currentCalValue","title":"CurrentCalValue","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"currentCushion","title":"CurrentCushion","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"cushionChange","title":"CushionChange","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"currentSoaVal","title":"CurrentSoaVal","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"bonusMuliplier","title":"BonusMuliplier","width":"80px","align":"right","formatFunc":"","mobileColumn":false}],"height":"100%","margin":"4","minDesktopHeight":60}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"getStaticLogsSVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
staticToCSVButton2Panel: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
staticToCSVButton: ["wm.Button", {"caption":"Download CSV","desktopHeight":"40px","height":"40px","margin":"4","width":"161px"}, {"onclick":"staticToCSVButtonClick"}],
staticFullScreenButton: ["wm.Button", {"caption":"Full Screen","desktopHeight":"40px","height":"40px","margin":"4","mobileHeight":"40%","width":"127px"}, {"onclick":"staticFullScreenButtonClick"}]
}]
}],
emptyLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}]
}]
}]
};

DownloadLogsPage.prototype._cssText = '';
DownloadLogsPage.prototype._htmlText = '';