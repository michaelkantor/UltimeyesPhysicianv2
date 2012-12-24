LicensesPage.widgets = {
	customerproductassociateLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.customerproductassociateLiveView2","startUpdate":false}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"[customersPage].customerDojoGrid.selectedItem.id","targetProperty":"filter.customer.id"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		customerproductassociateLivePanel1: ["wm.LivePanel", {"horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
			customerproductassociateDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"columns":[{"show":false,"id":"product.id","title":"Product.id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"product.name","title":"Product","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","expression":"${product.name} + \" (\" + ${product.version} + \")\""},{"show":false,"id":"product.version","title":"Product.version","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"product.createdAt","title":"Product.createdAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"product.updatedAt","title":"Product.updatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"id.customerId","title":"Id.customerId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"id.productId","title":"Id.productId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"id.license","title":"Id.license","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"id.createdAt","title":"Id.createdAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"id.updatedAt","title":"Id.updatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"customer.id","title":"Customer.id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"customer.firstName","title":"Customer.firstName","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"customer.lastName","title":"Customer.lastName","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"customer.middleInitial","title":"Customer.middleInitial","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"customer.ssn","title":"Customer.ssn","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"customer.tin","title":"Customer.tin","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"customer.dob","title":"Customer.dob","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"customer.address","title":"Customer.address","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"customer.phone","title":"Customer.phone","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"customer.email","title":"Customer.email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"customer.createdAt","title":"Customer.createdAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"customer.updatedAt","title":"Customer.updatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"}],"height":"100%","localizationStructure":{},"margin":"4","width":"197px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"customerproductassociateLiveVariable1","targetProperty":"dataSet"}, {}]
				}]
			}],
			fancyPanel1: ["wm.FancyPanel", {"title":"License"}, {}, {
				customerproductassociateLiveForm1: ["wm.LiveForm", {"captionSize":"120px","height":"100%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeforeServiceCall":"customerproductassociateLiveForm1BeforeServiceCall","onSuccess":"customerproductassociateLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"customerproductassociateDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
						wire1: ["wm.Wire", {"expression":undefined,"source":"idRelatedEditor1.dataOutput","targetProperty":"dataOutput.id"}, {}]
					}],
					productLookup1: ["wm.Lookup", {"caption":"Product","captionSize":"120px","displayExpression":"${name} + \" (\" + ${version} + \")\"","displayField":"version","formField":"product","readonly":true,"required":true,"width":"100%"}, {"onchange":"productLookup1Change"}],
					idRelatedEditor1: ["wm.RelatedEditor", {"captionSize":"120px","editingMode":"editable subform","fitToContentHeight":true,"formField":"id","height":"154px","ignoreParentReadonly":false}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"customerproductassociateDojoGrid.selectedItem.id","targetProperty":"dataSet"}, {}]
						}],
						customerIdEditor1: ["wm.Number", {"caption":"CustomerId","captionSize":"120px","emptyValue":"zero","formField":"customerId","height":"26px","readonly":true,"required":true,"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${customerproductassociateLiveVariable1.filter.id.customerId}","source":false,"targetProperty":"defaultInsert"}, {}]
							}]
						}],
						productIdEditor1: ["wm.Number", {"caption":"ProductId","captionSize":"120px","emptyValue":"zero","formField":"productId","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
						label1: ["wm.Label", {"border":"0","caption":"TODO: Validate this license isn't already in use","padding":"4"}, {}],
						licenseEditor1: ["wm.Text", {"caption":"License","captionSize":"120px","dataValue":"","emptyValue":"emptyString","formField":"license","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
						createdAtEditor1: ["wm.DateTime", {"caption":"CreatedAt","captionSize":"120px","dateMode":"Date","emptyValue":"emptyString","formField":"createdAt","height":"26px","ignoreParentReadonly":true,"readonly":true,"required":true,"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":" new Date().getTime()","source":false,"targetProperty":"defaultInsert"}, {}]
							}]
						}],
						updatedAtEditor1: ["wm.DateTime", {"caption":"UpdatedAt","captionSize":"120px","dateMode":"Date","emptyValue":"emptyString","formField":"updatedAt","height":"26px","ignoreParentReadonly":true,"readonly":true,"required":true,"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":" new Date().getTime()","source":false,"targetProperty":"defaultInsert"}, {}]
							}]
						}]
					}],
					spacer1: ["wm.Spacer", {"height":"100%","width":"96px"}, {}],
					customerproductassociateLiveForm1EditPanel: ["wm.EditPanel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","isCustomized":true,"liveForm":"customerproductassociateLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"customerproductassociateLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"customerproductassociateLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"customerproductassociateLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"customerproductassociateLiveForm1EditPanel.beginDataInsert"}],
							deleteButton1: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"customerproductassociateLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"customerproductassociateLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}