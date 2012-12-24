DataExplorationPage.widgets = {
	customerLiveVar: ["wm.LiveVariable", {"type":"com.logs_ultimeyesvision_com_devdb.data.Customer"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.logs_ultimeyesvision_com_devdb.data.Customer","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"FirstName","sortable":true,"dataIndex":"firstName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"LastName","sortable":true,"dataIndex":"lastName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"MiddleInitial","sortable":true,"dataIndex":"middleInitial","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Ssn","sortable":true,"dataIndex":"ssn","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Tin","sortable":true,"dataIndex":"tin","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Dob","sortable":true,"dataIndex":"dob","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Phone","sortable":true,"dataIndex":"phone","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Email","sortable":true,"dataIndex":"email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},{"caption":"Notes","sortable":true,"dataIndex":"notes","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		dojoGrid1: ["wm.DojoGrid", {"columns":[{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"firstName","title":"FirstName","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"lastName","title":"LastName","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"middleInitial","title":"MiddleInitial","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"ssn","title":"Ssn","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"tin","title":"Tin","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"dob","title":"Dob","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"address","title":"Address","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"phone","title":"Phone","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"email","title":"Email","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"createdAt","title":"CreatedAt","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"updatedAt","title":"UpdatedAt","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"notes","title":"Notes","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"mobileColumn":true,"align":"left","field":"MOBILE COLUMN","show":true,"title":"-","width":"100%","expression":"'<div class=\"MobileRowTitle\">Id: ' + ${id} + '</div>'"}],"margin":"4","minDesktopHeight":60}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveVar","targetProperty":"dataSet"}, {}]
			}]
		}],
		propertyTree1: ["wm.PropertyTree", {"border":"0","configJson":"{displayField: \"lastName\"} ","height":"100%"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveVar","targetProperty":"dataSet"}, {}]
			}]
		}]
	}]
}