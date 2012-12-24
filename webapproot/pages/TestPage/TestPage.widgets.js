TestPage.widgets = {
	liveVariable1: ["wm.LiveVariable", {"ignoreCase":true,"liveSource":"com.logs_ultimeyesvision_comdb.data.InternalUploadSessionFile","matchMode":"anywhere"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":"\"JDEVEAU\"","targetProperty":"filter.internalUploadSessionFile.username"}, {}],
			wire1: ["wm.Wire", {"expression":"\"JDEVEAU\"","targetProperty":"filter.username"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		dojoGrid1: ["wm.DojoGrid", {"columns":[{"show":true,"id":"id","title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"username","title":"Username","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"filename","title":"Filename","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"createdAt","title":"CreatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"updatedAt","title":"UpdatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"iterationNumber","title":"IterationNumber","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"liveVariable1","targetProperty":"dataSet"}, {}]
			}]
		}]
	}]
}