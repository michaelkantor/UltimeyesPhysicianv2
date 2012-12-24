dojo.declare("DataExplorerMain", wm.Page, {
//dataSet: null,
start: function() {
var types = wm.typeManager.getLiveServiceTypes();
var data = [];
wm.forEachProperty(types, function(typeDef, typeName) {
data.push({dataValue: typeName});
});
this.typeListVar.setData(data);
},
/* Set the parent data structure for the entire viewer */
setDataSet: function(inDataSet) {
//this.dataSet = inDataSet;
this.displayData(inDataSet, inDataSet.type.replace(/.*\./, ""));
},
/* Set the item of data to add to the layers */
displayData: function(inDataSet, inCaption) {
var l;
if (inDataSet.isList) {
l = this.layers.addPageContainerLayer("ListViewerPage", inCaption, true);
} else {
l = this.layers.addPageContainerLayer("ItemViewerPage", inCaption, true);
}
l.c$[0].page.setDataSet(inDataSet);
l.setDestroyable(true);
},
listSelect: function(inSender, inItem) {
var type = inSender.selectedItem.getValue("dataValue");
var lvar = new wm.LiveVariable({
owner: this,
type: type,
maxResults: 500,
ignoreCase: true,
autoUpdate: true,
startUpdate: false
});
this.setDataSet(lvar);
},
_end: 0
});

DataExplorerMain.widgets = {
typeListVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
layers: ["wm.TabLayers", {"desktopHeaderHeight":"28px","headerHeight":"28px"}, {}, {
layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Choose Data","horizontalAlign":"left","margin":"0","padding":"0","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
list: ["wm.List", {"columns":[{"show":true,"field":"dataValue","title":"Choose Table","width":"100%","expression":"${dataValue}.replace(/^.*\\./,\"\")","mobileColumn":false}],"height":"100%","isRowSelected":false,"minDesktopHeight":60}, {"onSelect":"listSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"typeListVar","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

DataExplorerMain.prototype._cssText = '';
DataExplorerMain.prototype._htmlText = '';