ProductsPage.widgets = {
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		productLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
			productDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0,1,1,1","columns":[{"show":false,"id":"id","title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"name","title":"Name","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"version","title":"Version","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"createdAt","title":"CreatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"updatedAt","title":"UpdatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"}],"height":"100%","margin":"4","width":"184px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"app.productsLVar","targetProperty":"dataSet"}, {}]
				}]
			}],
			fancyPanel1: ["wm.FancyPanel", {}, {}, {
				productLiveForm1: ["wm.LiveForm", {"captionSize":"160px","height":"100%","horizontalAlign":"left","margin":"","readonly":true,"verticalAlign":"top"}, {"onSuccess":"app.productsLVar","onBeforeServiceCall":"productLiveForm1BeforeServiceCall"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"productDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					idEditor6: ["wm.Number", {"caption":"Id","captionSize":"160px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
					nameEditor1: ["wm.Text", {"caption":"Name","captionSize":"160px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"name","height":"26px","readonly":true,"width":"100%"}, {}],
					versionEditor1: ["wm.Text", {"caption":"Version","captionSize":"160px","dataValue":"","emptyValue":"emptyString","formField":"version","height":"26px","readonly":true,"width":"100%"}, {}],
					createdAtEditor7: ["wm.DateTime", {"caption":"CreatedAt","captionSize":"160px","dateMode":"Date","emptyValue":"emptyString","formField":"createdAt","height":"26px","ignoreParentReadonly":true,"readonly":true,"width":"100%"}, {}],
					updatedAtEditor7: ["wm.DateTime", {"caption":"UpdatedAt","captionSize":"160px","dateMode":"Date","emptyValue":"emptyString","formField":"updatedAt","height":"26px","ignoreParentReadonly":true,"readonly":true,"width":"100%"}, {}]
				}],
				productLiveForm1EditPanel: ["wm.EditPanel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","isCustomized":true,"liveForm":"productLiveForm1","operationPanel":"operationPanel7","savePanel":"savePanel7"}, {}, {
					savePanel7: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
						saveButton7: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"productLiveForm1EditPanel.saveData"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"productLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
							}]
						}],
						cancelButton7: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"productLiveForm1EditPanel.cancelEdit"}]
					}],
					operationPanel7: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						newButton7: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"productLiveForm1EditPanel.beginDataInsert"}],
						updateButton7: ["wm.Button", {"caption":"Edit","margin":"4"}, {"onclick":"productLiveForm1EditPanel.beginDataUpdate"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"productLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
							}]
						}],
						deleteButton7: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"productLiveForm1EditPanel.deleteData"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"productLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
							}]
						}]
					}]
				}],
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Edit \" + (${nameEditor1.dataValue} || \"Product\")","source":false,"targetProperty":"title"}, {}]
				}]
			}]
		}]
	}]
}