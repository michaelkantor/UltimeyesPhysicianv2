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
}