/* TODO:

 */

dojo.declare("LogsPage", wm.Page, {
	"preferredDevice": "desktop",
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
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

                this.updateSynopsisLayer();
     

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
    updateSynopsisLayer: function() {
                this.listSummariesSVar.update();                
               
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
    return inCustomer.getValue("customerProductAssociates").getValue("id.username");  
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
          this.sessionNumberGrid.select(0);
      }
  },
 
 
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
            default: 
                this.synopsisLayer.activate();
        }
      });
    },
 
  assessmentNeg1SVarSuccess: function(inSender, inDeprecated) {
	  this.assessmentNeg1SFancyMeanVar.setData(inSender.query({calSf64: "!1",
                                                               calSf32: "!1",
                                                               calSf16: "!1",
                                                               calSf8: "!1",
                                                               calSf4: "!1",
                                                               casSf2: "!1"}).map(function(inItem) {
          var sum = Math.log(inItem.getValue("calSf64")) +
                    Math.log(inItem.getValue("calSf32")) +
                    Math.log(inItem.getValue("calSf16")) +
                    Math.log(inItem.getValue("calSf8")) +
                    Math.log(inItem.getValue("calSf4")) +
                    Math.log(inItem.getValue("casSf2"));
          var avg = sum/6;
          return {  dateTaken: inItem.getValue("dateTaken"),
                    calSf8: Math.exp(avg)};
  }));
	},
  
  getCalibrationLogsSVarSuccess: function(inSender, inDeprecated) {
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
    landoltCComparisonFunc: function(inValue) {
        var floorValue = Math.floor(inValue/10) * 10; // round to nearest 10
        var analysisValue = inValue - floorValue;
        return 1/analysisValue;        
    },
  assessmentNeg2SVarSuccess: function(inSender, inDeprecated) {
      if (this.assessmentNeg2SVar.getCount() == 0) return;
      var firstItem = this.assessmentNeg2SVar.getItem(0);
      var bestScoreItem;
      var bestScore = -1;
      this.assessmentNeg2SVar.forEach(function(inItem) {
        if (inItem.getValue("score") > bestScore) {
            bestScore = inItem.getValue("score");
            bestScoreItem = inItem;
        }
      });
      
      var selectedSession = this.landoltC_ContrastFunctionDateGrid.selectedItem;
      
      var data = [{name: "calcSize82",
                   selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calcSize82")),
                   firstSession: this.landoltCComparisonFunc(firstItem.getValue("calcSize82")),
                   bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calcSize82"))},
                   {name: "calcSize42",
                   selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calcSize42")),                   
                   firstSession: this.landoltCComparisonFunc(firstItem.getValue("calcSize42")),
                   bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calcSize42"))},
                   {name: "calcSize22",
                   selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calcSize22")),                   
                   firstSession: this.landoltCComparisonFunc(firstItem.getValue("calcSize22")),
                   bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calcSize22"))},
                   {name: "calcSize13",
                   selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calcSize13")),                   
                   firstSession: this.landoltCComparisonFunc(firstItem.getValue("calcSize13")),
                   bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calcSize13"))},
                   {name: "calcSize7",
                   selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calcSize7")),                   
                   firstSession: this.landoltCComparisonFunc(firstItem.getValue("calcSize7")),
                   bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calcSize7"))},
                   {name: "calcSize6",
                   selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calcSize6")),                   
                   firstSession: this.landoltCComparisonFunc(firstItem.getValue("calcSize6")),
                   bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calcSize6"))}];
      this.landoltC_ContrastFunctionChart.yAxis = selectedSession.getData() ? "firstSession, bestSession, selectedSession" : "firstSession, bestSession";
      this.landoltC_ContrastVar.setData(data);
    },
  assessmentNeg3SVarSuccess: function(inSender, inDeprecated) {
            if (this.assessmentNeg3SVar.getCount() == 0) return;
      var firstItem = this.assessmentNeg3SVar.getItem(0);
      var bestScoreItem;
      var bestScore = -1;
      this.assessmentNeg3SVar.forEach(function(inItem) {
        if (inItem.getValue("score") > bestScore) {
            bestScore = inItem.getValue("score");
            bestScoreItem = inItem;
        }
      });
      
      var selectedSession = this.csfContrastFunctionDateGrid.selectedItem;
      
      var data = [{name: "calSf64",
                   selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calSf64")),
                   firstSession: this.landoltCComparisonFunc(firstItem.getValue("calSf64")),
                   bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calSf64"))},
                   {name: "calSf32",
                   selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calSf32")),                   
                   firstSession: this.landoltCComparisonFunc(firstItem.getValue("calSf32")),
                   bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calSf32"))},
                   {name: "calSf16",
                   selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calSf16")),                   
                   firstSession: this.landoltCComparisonFunc(firstItem.getValue("calSf16")),
                   bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calSf16"))},
                   {name: "calSf8",
                   selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calSf8")),                   
                   firstSession: this.landoltCComparisonFunc(firstItem.getValue("calSf8")),
                   bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calSf8"))},
                   {name: "calSf4",
                   selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("calSf4")),                   
                   firstSession: this.landoltCComparisonFunc(firstItem.getValue("calSf4")),
                   bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("calSf4"))},
                   {name: "casSf2",
                   selectedSession: this.landoltCComparisonFunc(selectedSession.getValue("casSf2")),                   
                   firstSession: this.landoltCComparisonFunc(firstItem.getValue("casSf2")),
                   bestSession: this.landoltCComparisonFunc(bestScoreItem.getValue("casSf2"))}];
            this.csfContrastFunctionChart.yAxis = selectedSession.getData() ? "firstSession, bestSession, selectedSession" : "firstSession, bestSession";

      this.csfContrastVar.setData(data);
    },
  _end: 0
});