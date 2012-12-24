/* TODO:
*/
dojo.declare("LogsPage", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
} catch(e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
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
this.updateSynopsisLayer();
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
updateSynopsisLayer: function() {
this.listSummariesSVar.update();
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
return inCustomer.getValue("customerProductAssociates").getValue("id.username");
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
this.sessionNumberGrid.select(0);
}
},
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
default:
this.synopsisLayer.activate();
}
});
},
assessmentNeg1SVarSuccess: function(inSender, inDeprecated) {
this.assessmentNeg1SFancyMeanVar.setData(inSender.query({calSf64: "!1",
calSf32: "!1",
calSf16: "!1",
calSf8: "!1",
calSf4: "!1",
casSf2: "!1"}).map(function(inItem) {
var sum = Math.log(inItem.getValue("calSf64")) +
Math.log(inItem.getValue("calSf32")) +
Math.log(inItem.getValue("calSf16")) +
Math.log(inItem.getValue("calSf8")) +
Math.log(inItem.getValue("calSf4")) +
Math.log(inItem.getValue("casSf2"));
var avg = sum/6;
return {  dateTaken: inItem.getValue("dateTaken"),
calSf8: Math.exp(avg)};
}));
},
getCalibrationLogsSVarSuccess: function(inSender, inDeprecated) {
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
landoltCComparisonFunc: function(inValue) {
var floorValue = Math.floor(inValue/10) * 10; // round to nearest 10
var analysisValue = inValue - floorValue;
return 1/analysisValue;
},
assessmentNeg2SVarSuccess: function(inSender, inDeprecated) {
if (this.assessmentNeg2SVar.getCount() == 0) return;
var firstItem = this.assessmentNeg2SVar.getItem(0);
var bestScoreItem;
var bestScore = -1;
this.assessmentNeg2SVar.forEach(function(inItem) {
if (inItem.getValue("score") > bestScore) {
bestScore = inItem.getValue("score");
bestScoreItem = inItem;
}
});
var selectedSession = this.landoltC_ContrastFunctionDateGrid.selectedItem;
var data = [{name: "calcSize82",
selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calcSize82")),
firstSession: this.landoltCComparisonFunc(firstItem.getValue("calcSize82")),
bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calcSize82"))},
{name: "calcSize42",
selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calcSize42")),
firstSession: this.landoltCComparisonFunc(firstItem.getValue("calcSize42")),
bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calcSize42"))},
{name: "calcSize22",
selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calcSize22")),
firstSession: this.landoltCComparisonFunc(firstItem.getValue("calcSize22")),
bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calcSize22"))},
{name: "calcSize13",
selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calcSize13")),
firstSession: this.landoltCComparisonFunc(firstItem.getValue("calcSize13")),
bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calcSize13"))},
{name: "calcSize7",
selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calcSize7")),
firstSession: this.landoltCComparisonFunc(firstItem.getValue("calcSize7")),
bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calcSize7"))},
{name: "calcSize6",
selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calcSize6")),
firstSession: this.landoltCComparisonFunc(firstItem.getValue("calcSize6")),
bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calcSize6"))}];
this.landoltC_ContrastFunctionChart.yAxis = selectedSession.getData() ? "firstSession, bestSession, selectedSession" : "firstSession, bestSession";
this.landoltC_ContrastVar.setData(data);
},
assessmentNeg3SVarSuccess: function(inSender, inDeprecated) {
if (this.assessmentNeg3SVar.getCount() == 0) return;
var firstItem = this.assessmentNeg3SVar.getItem(0);
var bestScoreItem;
var bestScore = -1;
this.assessmentNeg3SVar.forEach(function(inItem) {
if (inItem.getValue("score") > bestScore) {
bestScore = inItem.getValue("score");
bestScoreItem = inItem;
}
});
var selectedSession = this.csfContrastFunctionDateGrid.selectedItem;
var data = [{name: "calSf64",
selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calSf64")),
firstSession: this.landoltCComparisonFunc(firstItem.getValue("calSf64")),
bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calSf64"))},
{name: "calSf32",
selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calSf32")),
firstSession: this.landoltCComparisonFunc(firstItem.getValue("calSf32")),
bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calSf32"))},
{name: "calSf16",
selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calSf16")),
firstSession: this.landoltCComparisonFunc(firstItem.getValue("calSf16")),
bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calSf16"))},
{name: "calSf8",
selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calSf8")),
firstSession: this.landoltCComparisonFunc(firstItem.getValue("calSf8")),
bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calSf8"))},
{name: "calSf4",
selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calSf4")),
firstSession: this.landoltCComparisonFunc(firstItem.getValue("calSf4")),
bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calSf4"))},
{name: "casSf2",
selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("casSf2")),
firstSession: this.landoltCComparisonFunc(firstItem.getValue("casSf2")),
bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("casSf2"))}];
this.csfContrastFunctionChart.yAxis = selectedSession.getData() ? "firstSession, bestSession, selectedSession" : "firstSession, bestSession";
this.csfContrastVar.setData(data);
},
_end: 0
});

LogsPage.widgets = {
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
currentCustomer: ["wm.Variable", {"type":"com.logs_ultimeyesvision_com_devdb.data.Customer"}, {"onSetData":"currentCustomerSetData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[customersPage].customerDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}]
}],
logNavVar: ["wm.Variable", {"isList":true,"json":"[\n    { dataValue: \"Synopsis\"},\n\t{\n\t\t\"dataValue\": \"Summaries\"\n\t}, \n\t{\n\t\t\"dataValue\": \"Calibrations\"\n\t}, \n\t{\n\t\t\"dataValue\": \"Dynamic\"\n\t}, \n\t{\n\t\t\"dataValue\": \"Static\"\n\t}\n]","type":"StringData"}, {}],
assessmentNeg2SVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getSummariesForExerciseId","service":"logs_ultimeyesvision_com_devDB"}, {"onSuccess":"assessmentNeg2SVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"getSummariesForExerciseIdInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentCustomer.id","targetProperty":"customerId"}, {}],
wire1: ["wm.Wire", {"expression":"-2","targetProperty":"exerciseId"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"assessment1Chart","targetProperty":"loadingDialog"}, {}]
}]
}],
assessmentNeg3SVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getSummariesForExerciseId","service":"logs_ultimeyesvision_com_devDB"}, {"onSuccess":"assessmentNeg3SVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"getSummariesForExerciseIdInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentCustomer.id","targetProperty":"customerId"}, {}],
wire1: ["wm.Wire", {"expression":"-3","targetProperty":"exerciseId"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"assessment2Chart","targetProperty":"loadingDialog"}, {}]
}]
}],
assessmentNeg1SVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getSummariesForExerciseId","service":"logs_ultimeyesvision_com_devDB"}, {"onSuccess":"assessmentNeg1SVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"getSummariesForExerciseIdInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentCustomer.id","targetProperty":"customerId"}, {}],
wire1: ["wm.Wire", {"expression":"-1","targetProperty":"exerciseId"}, {}]
}]
}]
}],
assessmentNeg1SFancyMeanVar: ["wm.Variable", {"isList":true,"type":"com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary"}, {}],
landoltC_ContrastVar: ["wm.Variable", {"isList":true,"type":"LandoltC_ChartType"}, {}],
csfContrastVar: ["wm.Variable", {"isList":true,"type":"LandoltC_ChartType"}, {}],
calibrationLoadingIndicator: ["wm.LoadingDialog", {}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"calibrationsGrid","targetProperty":"widgetToCover"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"getCalibrationLogsSVar","targetProperty":"serviceVariableToTrack"}, {}]
}]
}],
staticLogsLoadingIndicator1: ["wm.LoadingDialog", {}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"staticSessionOptionsGrid","targetProperty":"widgetToCover"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"staticSessionAndExerciseListSVar","targetProperty":"serviceVariableToTrack"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
sessionNumberGridPanel: ["wm.Panel", {"fitToContentWidth":true,"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"219px"}, {}, {
sessionNumberGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"MOBILE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>SessionNumber: \" + ${sessionNumber} + \"</div>\"\n","isCustomField":true,"mobileColumn":true},{"show":true,"field":"sessionNumber","title":"Session #","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"dateTaken","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"dateType":"date"},"expression":"","mobileColumn":false},{"show":false,"field":"logId","title":"LogId","width":"100%","displayType":"Java.lang.Integer","align":"left","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"0","minDesktopHeight":60,"selectionMode":"extended","width":"217px"}, {"onSelect":"sessionNumberGridSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"logSessionsSVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
logNavLayers: ["wm.Layers", {}, {}, {
synopsisLayer: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"layer1","horizontalAlign":"center","themeStyleType":"","verticalAlign":"top"}, {"onShow":"updateSynopsisLayer"}, {
ultimeyeslogsummaryDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"columns":[{"show":true,"field":"dateTaken","title":"Date","width":"60px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":true,"field":"sessionNumber","title":"Session#","width":"80px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"MOBILE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Date: \" + wm.DojoGrid.prototype.dateFormatter({}, null,null,null,${dateTaken}) + \"</div>\"\n+ \"<div class='MobileRow'>Session#: \" + ${sessionNumber} + \"</div>\"\n+ \"<div class='MobileRow'>Type: \" + ${type} + \"</div>\"\n+ \"<div class='MobileRow'>Score: \" + ${score} + \"</div>\"\n+ \"<div class='MobileRow'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>Excercise: \" + ${excercise} + \"</div>\"\n+ \"<div class='MobileRow'>CalOrientation90: \" + ${calOrientation90} + \"</div>\"\n","isCustomField":true,"mobileColumn":true},{"show":false,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"excercise","title":"Excercise","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"type","title":"Type","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"distractorLevel","title":"DistractorLevel","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calSf64","title":"CalSf64","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calSf32","title":"CalSf32","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calSf16","title":"CalSf16","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calSf8","title":"CalSf8","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calSf4","title":"CalSf4","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"casSf2","title":"CasSf2","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calOrientation0","title":"CalOrientation0","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calOrientation45","title":"CalOrientation45","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calOrientation90","title":"CalOrientation90","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calOrientation135","title":"CalOrientation135","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"cushionSf64","title":"CushionSf64","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"cushionSf32","title":"CushionSf32","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"cushionSf16","title":"CushionSf16","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"cushionSf8","title":"CushionSf8","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"cushionSf4","title":"CushionSf4","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"cushionSf2","title":"CushionSf2","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"soa","title":"Soa","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calcSize82","title":"CalcSize82","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calcSize42","title":"CalcSize42","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calcSize22","title":"CalcSize22","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calcSize13","title":"CalcSize13","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calcSize7","title":"CalcSize7","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"calcSize6","title":"CalcSize6","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"score","title":"Score","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"screenDistance","title":"ScreenDistance","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"screenWidth","title":"ScreenWidth","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"createdAt","title":"CreatedAt","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"updatedAt","title":"UpdatedAt","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"screenResX","title":"ScreenResX","width":"80px","displayType":"Number","align":"right","formatFunc":""}],"height":"400px","margin":"4","minDesktopHeight":60,"selectionMode":"multiple"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"listSummariesSVar","targetProperty":"dataSet"}, {}]
}]
}],
assessment1Chart: ["wm.DojoChart", {"chartTitle":"Landolt C","height":"400px","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"dateTaken","xdisplay":"Date","yAxis":"score"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"assessmentNeg2SVar","targetProperty":"dataSet"}, {}]
}],
xformat: ["wm.DateFormatter", {"formatLength":"short"}, {}]
}],
landoltC_ContrastFunctionChartPanel: ["wm.Panel", {"height":"400px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
landoltC_ContrastFunctionDateGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"dateTaken","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"sessionNumber","title":"SessionNumber","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"excercise","title":"Excercise","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"type","title":"Type","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"distractorLevel","title":"DistractorLevel","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calSf64","title":"CalSf64","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calSf32","title":"CalSf32","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calSf16","title":"CalSf16","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calSf8","title":"CalSf8","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calSf4","title":"CalSf4","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"casSf2","title":"CasSf2","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calOrientation0","title":"CalOrientation0","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calOrientation45","title":"CalOrientation45","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calOrientation90","title":"CalOrientation90","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calOrientation135","title":"CalOrientation135","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"cushionSf64","title":"CushionSf64","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"cushionSf32","title":"CushionSf32","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"cushionSf16","title":"CushionSf16","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"cushionSf8","title":"CushionSf8","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"cushionSf4","title":"CushionSf4","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"cushionSf2","title":"CushionSf2","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"soa","title":"Soa","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calcSize82","title":"CalcSize82","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calcSize42","title":"CalcSize42","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calcSize22","title":"CalcSize22","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calcSize13","title":"CalcSize13","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calcSize7","title":"CalcSize7","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calcSize6","title":"CalcSize6","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"score","title":"Score","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"screenDistance","title":"ScreenDistance","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"screenWidth","title":"ScreenWidth","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"updatedAt","title":"UpdatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"screenResX","title":"ScreenResX","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${dateTaken}) + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4","minDesktopHeight":60,"width":"100undefined"}, {"onSelect":"assessmentNeg2SVarSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"assessmentNeg2SVar","targetProperty":"dataSet"}, {}]
}]
}],
landoltC_ContrastFunctionChart: ["wm.DojoChart", {"chartTitle":"Landolt C Contrast Function","chartType":"Lines","height":"400px","padding":"4","width":"100%","xAxis":"name","yAxis":"firstSession,bestSession"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"landoltC_ContrastVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
assessment2Chart: ["wm.DojoChart", {"chartTitle":"CSF","height":"400px","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"dateTaken","xdisplay":"Date","yAxis":"score"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"assessmentNeg3SVar","targetProperty":"dataSet"}, {}]
}],
xformat: ["wm.DateFormatter", {"formatLength":"short"}, {}]
}],
csfContrastFunctionChartPanel: ["wm.Panel", {"height":"400px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
csfContrastFunctionDateGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"dateTaken","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"sessionNumber","title":"SessionNumber","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"excercise","title":"Excercise","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"type","title":"Type","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"distractorLevel","title":"DistractorLevel","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calSf64","title":"CalSf64","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calSf32","title":"CalSf32","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calSf16","title":"CalSf16","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calSf8","title":"CalSf8","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calSf4","title":"CalSf4","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"casSf2","title":"CasSf2","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calOrientation0","title":"CalOrientation0","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calOrientation45","title":"CalOrientation45","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calOrientation90","title":"CalOrientation90","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calOrientation135","title":"CalOrientation135","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"cushionSf64","title":"CushionSf64","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"cushionSf32","title":"CushionSf32","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"cushionSf16","title":"CushionSf16","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"cushionSf8","title":"CushionSf8","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"cushionSf4","title":"CushionSf4","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"cushionSf2","title":"CushionSf2","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"soa","title":"Soa","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calcSize82","title":"CalcSize82","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calcSize42","title":"CalcSize42","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calcSize22","title":"CalcSize22","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calcSize13","title":"CalcSize13","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calcSize7","title":"CalcSize7","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"calcSize6","title":"CalcSize6","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"score","title":"Score","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"screenDistance","title":"ScreenDistance","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"screenWidth","title":"ScreenWidth","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"updatedAt","title":"UpdatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"screenResX","title":"ScreenResX","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${dateTaken}) + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4","minDesktopHeight":60,"width":"100px"}, {"onSelect":"assessmentNeg3SVarSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"assessmentNeg3SVar","targetProperty":"dataSet"}, {}]
}]
}],
csfContrastFunctionChart: ["wm.DojoChart", {"chartTitle":"CSF Contrast Function","chartType":"Lines","height":"400px","padding":"4","width":"100%","xAxis":"name","yAxis":"firstSession,bestSession"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"csfContrastVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
contrastBySFMeanChart: ["wm.DojoChart", {"chartTitle":"Calibration","height":"400px","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"dateTaken","xdisplay":"Date","yAxis":"calSf8"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"assessmentNeg1SVar","targetProperty":"dataSet"}, {}]
}],
xformat: ["wm.DateFormatter", {"formatLength":"short"}, {}]
}],
contrastBySFFancyMeanChart: ["wm.DojoChart", {"chartTitle":"Calibration exp(mean(log(CalSf)))","height":"400px","hideLegend":true,"legendHeight":"0px","padding":"4","width":"100%","xAxis":"dateTaken","xdisplay":"Date","yAxis":"calSf8"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"assessmentNeg1SFancyMeanVar","targetProperty":"dataSet"}, {}]
}],
xformat: ["wm.DateFormatter", {"formatLength":"short"}, {}]
}]
}]
}]
}]
}]
};

LogsPage.prototype._cssText = '';
LogsPage.prototype._htmlText = '';