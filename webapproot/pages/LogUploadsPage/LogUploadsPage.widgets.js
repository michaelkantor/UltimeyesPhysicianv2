LogUploadsPage.widgets = {
	internaluploadsessionfileLiveVariable1: ["wm.LiveVariable", {"matchMode":"exact","type":"com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile"}, {"onSuccess":"internaluploadsessionfileLiveVariable1Success"}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"expression":undefined,"source":"usernameFilter.dataValue","targetProperty":"filter.username"}, {}],
			wire: ["wm.Wire", {"expression":undefined,"source":"licenseFilter.dataValue","targetProperty":"filter.internalUploadSession.license"}, {}],
			wire3: ["wm.Wire", {"expression":undefined,"source":"logIdFilter.dataValue","targetProperty":"filter.id"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile","related":["customer","customer.physician"],"view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4000},{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4001},{"caption":"Filename","sortable":true,"dataIndex":"filename","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4002},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4004},{"caption":"IterationNumber","sortable":true,"dataIndex":"iterationNumber","type":"java.lang.Integer","displayType":"Number","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4005},{"caption":"Id","sortable":true,"dataIndex":"customer.id","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":5000},{"caption":"FirstName","sortable":true,"dataIndex":"customer.firstName","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":5001},{"caption":"LastName","sortable":true,"dataIndex":"customer.lastName","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":5002},{"caption":"FirstName","sortable":true,"dataIndex":"customer.physician.firstName","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":6001},{"caption":"LastName","sortable":true,"dataIndex":"customer.physician.lastName","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":6002}]}, {}]
	}],
	getLicensesSVar: ["wm.ServiceVariable", {"operation":"getLicensesFromLogs","service":"logs_ultimeyesvision_com_devDB","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getLicensesFromLogsInputs"}, {}]
	}],
	getUsernamesSVar: ["wm.ServiceVariable", {"operation":"getUsernamesFromLogs","service":"logs_ultimeyesvision_com_devDB","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUsernamesFromLogsInputs"}, {}]
	}],
	unlinkFile: ["wm.LiveVariable", {"autoUpdate":false,"operation":"update","startUpdate":false,"type":"com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"internaluploadsessionfileDojoGrid.selectedItem","targetProperty":"sourceData"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Filename","sortable":true,"dataIndex":"filename","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"IterationNumber","sortable":true,"dataIndex":"iterationNumber","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
		internaluploadsessionfileLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
			usernameFilterPanel: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				usernameFilter: ["wm.SelectMenu", {"allowNone":true,"caption":"Usernames","dataField":"username","dataType":"com.logs_ultimeyesvision_com_devdb.data.output.GetUsernamesFromLogsRtnType","dataValue":undefined,"displayField":"username","displayValue":"","width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"getUsernamesSVar","targetProperty":"dataSet"}, {}]
					}]
				}],
				licenseFilter: ["wm.SelectMenu", {"allowNone":true,"caption":"Licenses","dataField":"license","dataType":"com.logs_ultimeyesvision_com_devdb.data.output.GetLicensesFromLogsRtnType","dataValue":undefined,"displayField":"license","displayValue":"","width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"getLicensesSVar","targetProperty":"dataSet"}, {}]
					}]
				}],
				logIdFilter: ["wm.Number", {"caption":"internalUploadSessionFile ID","captionSize":"180px","dataValue":undefined,"displayValue":""}, {}]
			}],
			internaluploadsessionfileDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"MOBILE COLUMN","title":"-","width":"100%","align":"left","expression":"'<div class=\"MobileRowTitle\">Id: ' + ${id} + '</div>'","isCustomField":true,"mobileColumn":true},{"show":true,"field":"id","title":"Log Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"username","title":"Username","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","expression":"","mobileColumn":false},{"show":true,"field":"filename","title":"Filename","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"updatedAt","title":"UpdatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":true,"field":"iterationNumber","title":"Iteration Number","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"customer.id","title":"Customer.id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"customer.firstName","title":"Customer","width":"100%","align":"left","expression":"${customer.firstName} + \" \" + ${customerLastName}","mobileColumn":false},{"show":true,"field":"customer.lastName","title":"Customer.lastName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"customer.physician.firstName","title":"Physician","width":"100%","align":"left","formatFunc":"","expression":"${customer.physician.firstName} + \" \" + ${customer.physician.lastName}","mobileColumn":false},{"show":false,"field":"customer.physician.lastName","title":"Customer.physician.lastName","width":"100%","align":"left","formatFunc":"","mobileColumn":false}],"height":"100%","liveEditing":true,"localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"internaluploadsessionfileLiveVariable1","targetProperty":"dataSet"}, {}]
				}]
			}],
			dataNavigator1: ["wm.DataNavigator", {"border":"0","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"internaluploadsessionfileLiveVariable1","targetProperty":"liveSource"}, {}]
				}]
			}],
			unlinkButton: ["wm.Button", {"caption":"Unlink from Customer","margin":"4","width":"201px"}, {"onclick":"unlinkButtonClick"}]
		}],
		logDetailsPage: ["wm.PageContainer", {"border":"0","pageName":"LogUploadsDetailsPage","subpageEventlist":{},"subpageProplist":{"currentSessionFileVarDataSet":"currentSessionFileVar.dataSet"},"width":"793px"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"internaluploadsessionfileDojoGrid.selectedItem","targetProperty":"currentSessionFileVarDataSet"}, {}],
				wire: ["wm.Wire", {"expression":"window[\"Studio\"] || !${internaluploadsessionfileDojoGrid.emptySelection}","targetProperty":"showing"}, {}]
			}]
		}]
	}]
}