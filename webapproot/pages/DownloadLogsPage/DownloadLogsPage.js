dojo.declare("DownloadLogsPage", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",
/*******************************************
  * Navigation functions
  *******************************************/
  navGridSelect: function(inSender) {
      wm.onidle(this, function() {
        var selectedName = inSender.selectedItem.getValue("dataValue");
        switch(selectedName) {
            case "Summaries":
                this.summariesLayer.activate();
                break;
            case "Calibrations":
                this.calibrationsLayer.activate();
                break;
            case "Dynamic":
                this.dynamicLogsLayer.activate();
                break;
            case "Static":
                this.staticLogsLayer.activate();
                break;           
        }
        this.sessionNumberGridSelect(this.sessionNumberGrid);
      });
    },
    
    
    
      dynamicSessionAndExerciseListSVarSuccess: function(inSender, inDeprecated) {
        this.dynamicSessionOptionsGridSelectionChange(this.dynamicSessionOptionsGrid);
    },
  staticSessionAndExerciseListSVarSuccess: function(inSender, inDeprecated) {
      this.staticSessionOptionsGridSelectionChange(this.staticSessionOptionsGrid);
    },

  calibrationSessionAndExerciseListSVarSuccess: function(inSender, inDeprecated) {
      this.calibrationSessionOptionsGridSelectionChange(this.calibrationSessionOptionsGrid);
    },
sessionNumberGridSelect: function(inSender) {
      try {
          var data = inSender.selectedItem.getData() || [];
          var logIdList = [];
          var sessionNumberList = [];
          for (var i = 0; i < data.length; i++) {
              logIdList.push(data[i].logId);
              sessionNumberList.push(data[i].sessionNumber);
          }
          
          /* Filter by Log File ID */
          this.listSummariesSVar.input.setValue("logIdList", logIdList);             

          /* Filter by Session Number */
    	  this.staticSessionAndExerciseListSVar.input.setValue("sessionNumberList", sessionNumberList);  
          this.dynamicSessionAndExerciseListSVar.input.setValue("sessionNumberList", sessionNumberList);  
          this.calibrationSessionAndExerciseListSVar.input.setValue("sessionNumberList", sessionNumberList);
          //this.getCalibrationLogsSVar.input.setValue("sessionNumberList", sessionNumberList);  
        
          switch(this.logNavLayers.getActiveLayer().name) {              
              case "summariesLayer":
                this.listSummariesSVar.update();                
              break;
              case "calibrationsLayer":
                this.updateCalibrationsLayer();
                //this.getCalibrationLogsSVar.update();
              break;
              case "staticLogsLayer":
                this.updateStaticsLayer();
              break;
              case "dynamicLogsLayer":
                this.updateDynamicsLayer();                
              break;
          }

	  } catch(e) {
		  console.error('ERROR IN sessionNumberGridSelectionChange: ' + e); 
	  } 
  },
  updateCalibrationsLayer: function() {
      this.calibrationSessionAndExerciseListSVar.update();
  },
  updateStaticsLayer: function() {
      this.staticSessionAndExerciseListSVar.update();
  },
  updateDynamicsLayer: function() {
      this.dynamicSessionAndExerciseListSVar.update();
  },
  
  
  /***********************************************
 * Functions for working with the selection grids 
 * for dynamic and static logs layers
 ***********************************************/
   calibrationSessionOptionsGridSelectionChange: function(inSender) {
      try {
           var data = inSender.selectedItem.getData();
           if (!data || data.length == 0) {
               data = inSender.dataSet.getData();
           }
           if (!data) data = [];
          var fileIdList = [];
          for (var i = 0; i < data.length; i++) {
              fileIdList.push(data[i].fileId);
          }	  
		  this.getCalibrationLogsSVar.input.setValue("fileIdList", fileIdList);          
	  } catch(e) {
		  console.error('ERROR IN staticSessionOptionsGridSelectionChange: ' + e); 
	  } 

    },
	dynamicSessionOptionsGridSelectionChange: function(inSender) {
	  try {
    	   var data = inSender.selectedItem.getData();
           if (!data || data.length == 0) {
               data = inSender.dataSet.getData();
           }
           if (!data) data = [];
          var fileIdList = [];
          for (var i = 0; i < data.length; i++) {
              fileIdList.push(data[i].fileId);
          }	  
		  this.getDynamicLogsSVar.input.setValue("fileIdList", fileIdList);
	  } catch(e) {
		  console.error('ERROR IN staticSessionOptionsGridSelectionChange: ' + e); 
	  } 
  },
  
  
  
      staticSessionOptionsGridSelectionChange: function(inSender) {
	  try {
          var data = inSender.selectedItem.getData();
           if (!data || data.length == 0) {
               data = inSender.dataSet.getData();
           }
           if (!data) data = [];
           var fileIdList = [];
          for (var i = 0; i < data.length; i++) {
              fileIdList.push(data[i].fileId);
          }	  
		  this.getStaticLogsSVar.input.setValue("fileIdList", fileIdList);
	  } catch(e) {
		  console.error('ERROR IN staticSessionOptionsGridSelectionChange: ' + e); 
	  } 
  },
 
 /****************************************
  * Functions for generating CSV files
  ****************************************/
  getUsername: function(inCustomer) {
    return inCustomer.getValue("customerProductAssociates.username");
  },


 gridToCSV: function(inGrid, inFileName) {
      try {
          var data = inGrid.dataSet.getData();
          var csvdata = [];
          var csvheader = [];
          dojo.forEach(inGrid.columns, function(column) {
                var field = column.field;
                if (column.show) {
                    csvheader.push(field);
                }
          });
          csvdata.push("%" + csvheader.join("\t"));

          dojo.forEach(data, function(row) {
              var csvrow = [];
             
             // add data to the csvrow array in the order specified by the Grid's columns setup
             // which controls the order they are displayed in the dialog
             dojo.forEach(inGrid.columns, function(column) {
                var field = column.field;
                if (column.show) {
                    csvrow.push(row[field]);
                }
             }, this);
             csvdata.push(csvrow.join("\t"));
          }, this);
        app.echoFile(csvdata.join("\n"), "application/csv", inFileName);
    	  
	  } catch(e) {
		  console.error('ERROR IN gridToCSV: ' + e); 
	  }             
  },
  summaryToCSVButtonClick: function(inSender) {
      this.gridToCSV(this.fullSummariesGrid, "UltimeyesLogSummaryFor_" + this.getUsername(this.currentCustomer) + ".csv");  
  },

  calibrationToCSVButtonClick: function(inSender) {	  
    this.gridToCSV(this.fullSummariesGrid, "UltimeyesLogCalibrationFor_" + this.getUsername(this.currentCustomer) + ".csv");  		  
  },
   staticToCSVButtonClick: function(inSender) {
        this.gridToCSV(this.staticLogGrid, 
                      "UltimeyesStaticLogsFor_" +this.getUsername(this.currentCustomer)+ 
                      "_" + "FileIDs_" + this.staticLogGrid.dataSet.input.getValue("fileIdList").join(".") + ".csv");

  },
  dynamicToCSVButtonClick: function(inSender) {
        this.gridToCSV(this.dynamicLogGrid, 
                      "UltimeyesDynamicLogsFor_" + this.getUsername(this.currentCustomer) + 
                      "_" + "FileIDs_" + this.dynamicLogGrid.dataSet.input.getValue("fileIdList").join(".") + ".csv");
  }, 
  logSessionsSVarSuccess: function(inSender, inDeprecated) {
      var data = inSender.getData();
      if (data) {
          var newdata = [];
          var logIdHash = {};
          for (var i = 0; i < data.length; i++) {
              if (!logIdHash[data[i].logId]) {
                  logIdHash[data[i].logId] = true;
                  newdata.push(data[i]);
              }
          }
          inSender.setData(newdata);
          wm.onidle(this, function() {
            this.sessionNumberGrid.select(0);
          });
      }
  },
  fullSreenToCsvButtonClick: function(inSender) {
    	this.fullScreenToCsvMethod();
	}, 
	summaryFullScreenButtonClick: function(inSender) {
      this.fullScreenDialog.show();
	  this.fullScreenGrid.columns = this.fullSummariesGrid.columns;
      this.fullScreenGrid.setDataSet(this.fullSummariesGrid.dataSet);
      this.fullScreenToCsvMethod = dojo.hitch(this, "summaryToCSVButtonClick");
	},

	calibrationsFullScreenButtonClick: function(inSender) {
      this.fullScreenDialog.show();
      this.fullScreenGrid.columns = this.calibrationsGrid.columns;
      this.fullScreenGrid.setDataSet(this.calibrationsGrid.dataSet);
      this.fullScreenToCsvMethod = dojo.hitch(this, "calibrationToCSVButtonClick");	
    },
  dynamicsFullScreenButtonClick: function(inSender) {
     this.fullScreenDialog.show();
      this.fullScreenGrid.columns = this.dynamicLogGrid.columns;
      this.fullScreenGrid.setDataSet(this.dynamicLogGrid.dataSet);
      this.fullScreenToCsvMethod = dojo.hitch(this, "dynamicToCSVButtonClick");    
  },
  staticFullScreenButtonClick: function(inSender) {
     this.fullScreenDialog.show();
      this.fullScreenGrid.columns = this.staticLogGrid.columns;
      this.fullScreenGrid.setDataSet(this.staticLogGrid.dataSet);
      this.fullScreenToCsvMethod = dojo.hitch(this, "staticToCSVButtonClick"); 
   },
  _end: 0
});