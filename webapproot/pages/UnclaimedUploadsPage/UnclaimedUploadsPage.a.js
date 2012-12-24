dojo.declare("UnclaimedUploadsPage", wm.Page, {
start: function() {
},
_end: 0
});

UnclaimedUploadsPage.widgets = {
serviceVariable1: ["wm.ServiceVariable", {"operation":"findUnlinkedFiles","service":"logs_ultimeyesvision_comDB","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"findUnlinkedFilesInputs"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
dojoGrid1: ["wm.DojoGrid", {"columns":[{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"username","title":"Username","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"filename","title":"Filename","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"createdAt","title":"CreatedAt","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":true,"field":"updatedAt","title":"UpdatedAt","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":true,"field":"iterationNumber","title":"IterationNumber","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"mobileColumn":true,"align":"left","field":"MOBILE COLUMN","show":true,"title":"-","width":"100%","expression":"'<div class=\"MobileRowTitle\">Id: ' + ${id} + '</div>'"}],"height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}]
};

UnclaimedUploadsPage.prototype._cssText = '';
UnclaimedUploadsPage.prototype._htmlText = '';