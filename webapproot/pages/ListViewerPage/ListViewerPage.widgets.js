ListViewerPage.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		listPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			form: ["wm.FormPanel", {"autoScroll":true,"height":"100%","type":"wm.FormPanel","width":"200undefined"}, {}],
			list: ["wm.List", {"height":"100%","minDesktopHeight":60}, {"onSelect":"listSelect"}]
		}],
		dataNavigator1: ["wm.DataNavigator", {"border":"0","width":"100%"}, {}]
	}]
}