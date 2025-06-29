sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
  "use strict";
  
// This controller initializes mock data for the PO list
// TODO: In future, connect this to live OData service
// PO_ID and Status are hardcoded here for demo purpose

  return Controller.extend("demo.controller.App", {
    onInit: function() {
      var oData = {
        PurchaseOrders: [
          { PO_ID: "PO123456", Status: "Pending" },
          { PO_ID: "PO123457", Status: "Approved" },
          { PO_ID: "PO123458", Status: "Rejected" }
        ]
      };
      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);
    }
  });
});
