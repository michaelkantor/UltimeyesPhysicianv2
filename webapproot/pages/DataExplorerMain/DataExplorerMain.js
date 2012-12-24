dojo.declare("DataExplorerMain", wm.Page, {
    //dataSet: null,
    start: function() {
        var types = wm.typeManager.getLiveServiceTypes();
        var data = [];
        wm.forEachProperty(types, function(typeDef, typeName) {
            data.push({dataValue: typeName});
        });
        this.typeListVar.setData(data);
    },
    
    /* Set the parent data structure for the entire viewer */
    setDataSet: function(inDataSet) {
        //this.dataSet = inDataSet;
        this.displayData(inDataSet, inDataSet.type.replace(/.*\./, ""));
    },
    
    /* Set the item of data to add to the layers */
    displayData: function(inDataSet, inCaption) {
        var l;
        if (inDataSet.isList) {
            l = this.layers.addPageContainerLayer("ListViewerPage", inCaption, true);            
        } else {
            l = this.layers.addPageContainerLayer("ItemViewerPage", inCaption, true);
        }
        l.c$[0].page.setDataSet(inDataSet);
        l.setDestroyable(true);
    },
  listSelect: function(inSender, inItem) {
      var type = inSender.selectedItem.getValue("dataValue");
      var lvar = new wm.LiveVariable({
                owner: this,
                type: type,
                maxResults: 500,
                ignoreCase: true,
                autoUpdate: true,
                startUpdate: false
            });            
          this.setDataSet(lvar);
      
	},
 
  _end: 0
});