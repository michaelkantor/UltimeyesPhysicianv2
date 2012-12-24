PhysiciansPage.widgets = {
	physicianproductassociateLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.physicianproductassociateLiveView1"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		physicianLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
			physicianDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0,1,1,1","columns":[{"show":false,"id":"id","title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"firstName","title":"FirstName","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"lastName","title":"LastName","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"middleInitial","title":"MiddleInitial","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"medicalLicenseNumber","title":"MedicalLicenseNumber","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ssn","title":"Ssn","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"tin","title":"Tin","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"dob","title":"Dob","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"address","title":"Address","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"phone","title":"Phone","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"email","title":"Email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"password","title":"Password","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"createdAt","title":"CreatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"updatedAt","title":"UpdatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"}],"height":"100%","localizationStructure":{},"margin":"4","width":"228px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"app.physiciansLVar","targetProperty":"dataSet"}, {}]
				}]
			}],
			tabLayers3: ["wm.TabLayers", {}, {}, {
				layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Edit Physician","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					physicianLiveForm1: ["wm.LiveForm", {"autoScroll":true,"captionSize":"160px","height":"100%","horizontalAlign":"left","margin":"","readonly":true,"verticalAlign":"top"}, {"onSuccess":"app.physiciansLVar","onBeforeServiceCall":"physicianLiveForm1BeforeServiceCall"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"physicianDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
							wire1: ["wm.Wire", {"expression":"new Date()","source":false,"targetProperty":"dataOutput.updatedAt"}, {}]
						}],
						idEditor5: ["wm.Number", {"caption":"Id","captionSize":"160px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
						firstNameEditor2: ["wm.Text", {"caption":"FirstName","captionSize":"160px","dataValue":"","emptyValue":"emptyString","formField":"firstName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
						lastNameEditor2: ["wm.Text", {"caption":"LastName","captionSize":"160px","dataValue":"","emptyValue":"emptyString","formField":"lastName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
						middleInitialEditor2: ["wm.Text", {"caption":"MiddleInitial","captionSize":"160px","dataValue":"","emptyValue":"emptyString","formField":"middleInitial","height":"26px","readonly":true,"width":"100%"}, {}],
						medicalLicenseNumberEditor1: ["wm.Text", {"caption":"MedicalLicenseNumber","captionSize":"160px","dataValue":"","emptyValue":"emptyString","formField":"medicalLicenseNumber","height":"26px","readonly":true,"width":"100%"}, {}],
						ssnEditor2: ["wm.Text", {"caption":"Ssn","captionSize":"160px","dataValue":"","emptyValue":"emptyString","formField":"ssn","height":"26px","readonly":true,"width":"100%"}, {}],
						tinEditor2: ["wm.Text", {"caption":"Tin","captionSize":"160px","dataValue":"","emptyValue":"emptyString","formField":"tin","height":"26px","readonly":true,"width":"100%"}, {}],
						dobEditor2: ["wm.DateTime", {"caption":"Dob","captionSize":"160px","dateMode":"Date","emptyValue":"emptyString","formField":"dob","height":"26px","readonly":true,"width":"100%"}, {}],
						addressEditor2: ["wm.Text", {"caption":"Address","captionSize":"160px","dataValue":"","emptyValue":"emptyString","formField":"address","height":"26px","readonly":true,"width":"100%"}, {}],
						phoneEditor2: ["wm.Text", {"caption":"Phone","captionSize":"160px","dataValue":"","emptyValue":"emptyString","formField":"phone","height":"26px","readonly":true,"width":"100%"}, {}],
						emailEditor2: ["wm.Text", {"caption":"Email","captionSize":"160px","dataValue":"","emptyValue":"emptyString","formField":"email","height":"26px","readonly":true,"width":"100%"}, {}],
						passwordEditor1: ["wm.Text", {"caption":"Password","captionSize":"160px","dataValue":"","emptyValue":"emptyString","formField":"password","height":"26px","readonly":true,"width":"100%"}, {}],
						createdAtEditor5: ["wm.DateTime", {"caption":"CreatedAt","captionSize":"160px","dateMode":"Date","emptyValue":"emptyString","formField":"createdAt","height":"26px","ignoreParentReadonly":true,"readonly":true,"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"new Date()","source":false,"targetProperty":"defaultInsert"}, {}]
							}]
						}],
						updatedAtEditor5: ["wm.DateTime", {"caption":"UpdatedAt","captionSize":"160px","dateMode":"Date","emptyValue":"emptyString","formField":"updatedAt","height":"26px","ignoreParentReadonly":true,"readonly":true,"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"new Date()","source":false,"targetProperty":"defaultInsert"}, {}]
							}]
						}]
					}],
					physicianLiveForm1EditPanel: ["wm.EditPanel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","isCustomized":true,"liveForm":"physicianLiveForm1","lock":false,"operationPanel":"operationPanel5","savePanel":"savePanel5"}, {}, {
						savePanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton5: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"physicianLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"physicianLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton5: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"physicianLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton5: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"physicianLiveForm1EditPanel.beginDataInsert"}],
							updateButton5: ["wm.Button", {"caption":"Edit","margin":"4"}, {"onclick":"physicianLiveForm1EditPanel.beginDataUpdate"}],
							deleteButton5: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"physicianLiveForm1EditPanel.deleteData"}]
						}]
					}]
				}],
				layer5: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Products For Physician","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					physicianproductassociateLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						physicianproductassociateGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Physicianproductassociate"}, {}, {
							physicianproductassociateDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"columns":[{"show":false,"id":"product.id","title":"Product.id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"product.name","title":"Product","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"product.version","title":"Version","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"product.createdAt","title":"Product.createdAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"product.updatedAt","title":"Product.updatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"id.physicianId","title":"Id.physicianId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"id.productId","title":"Id.productId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"id.createdAt","title":"Id.createdAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"id.updatedAt","title":"Id.updatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"physician.id","title":"Physician.id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"physician.firstName","title":"Physician","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"${physician.lastName} + \", \" + {physician.firstName}"},{"show":false,"id":"physician.lastName","title":"Physician.lastName","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"physician.middleInitial","title":"Physician.middleInitial","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"physician.medicalLicenseNumber","title":"Physician.medicalLicenseNumber","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"physician.ssn","title":"Physician.ssn","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"physician.tin","title":"Physician.tin","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"physician.dob","title":"Physician.dob","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"physician.address","title":"Physician.address","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"physician.phone","title":"Physician.phone","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"physician.email","title":"Physician.email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"physician.password","title":"Physician.password","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"physician.createdAt","title":"Physician.createdAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"physician.updatedAt","title":"Physician.updatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"}],"height":"100%","margin":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"physicianproductassociateLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						physicianproductassociateDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"166px","title":"Details"}, {}, {
							physicianproductassociateLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"136px","horizontalAlign":"left","margin":"","readonly":true,"verticalAlign":"top"}, {"onSuccess":"physicianproductassociateLiveVariable1"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"physicianproductassociateDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
									wire1: ["wm.Wire", {"expression":undefined,"source":"idRelatedEditor1.dataOutput","targetProperty":"dataOutput.id"}, {}]
								}],
								idRelatedEditor1: ["wm.RelatedEditor", {"editingMode":"editable subform","fitToContentHeight":true,"formField":"id","height":"104px"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"physicianproductassociateDojoGrid.selectedItem.id","targetProperty":"dataSet"}, {}]
									}],
									physicianEditor: ["wm.SelectMenu", {"caption":"PhysicianId","captionSize":"200px","dataField":"id","displayExpression":"${lastName} + \", \" + ${firstName}","formField":"physicianId","height":"26px","readonly":true,"width":"100%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"app.physiciansLVar","targetProperty":"dataSet"}, {}]
										}]
									}],
									productEditor: ["wm.SelectMenu", {"caption":"ProductId","captionSize":"200px","dataField":"id","displayExpression":"${name} + \" \" + ${version}","formField":"productId","height":"26px","readonly":true,"width":"100%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"app.productsLVar","targetProperty":"dataSet"}, {}]
										}]
									}],
									createdAtEditor6: ["wm.DateTime", {"caption":"CreatedAt","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"createdAt","height":"26px","readonly":true,"required":true,"width":"100%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":"new Date()","source":false,"targetProperty":"defaultInsert"}, {}]
										}]
									}],
									updatedAtEditor6: ["wm.DateTime", {"caption":"UpdatedAt","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"updatedAt","height":"26px","readonly":true,"required":true,"width":"100%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":"new Date()","source":false,"targetProperty":"defaultInsert"}, {}]
										}]
									}]
								}],
								physicianproductassociateLiveForm1EditPanel: ["wm.EditPanel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","isCustomized":true,"liveForm":"physicianproductassociateLiveForm1","operationPanel":"operationPanel6","savePanel":"savePanel6"}, {}, {
									savePanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										saveButton6: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"physicianproductassociateLiveForm1EditPanel.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"physicianproductassociateLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
											}]
										}],
										cancelButton6: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"physicianproductassociateLiveForm1EditPanel.cancelEdit"}]
									}],
									operationPanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										newButton6: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"physicianproductassociateLiveForm1EditPanel.beginDataInsert"}],
										deleteButton6: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"physicianproductassociateLiveForm1EditPanel.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"physicianproductassociateLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}