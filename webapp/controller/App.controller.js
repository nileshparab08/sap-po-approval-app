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
          { PO_ID: "PO123456", Status: "Pending", Vendor: "TCS", Amount: "1,200 EUR", CreatedOn: "2024-04-05" },
          { PO_ID: "PO123457", Status: "Approved", Vendor: "Wipro", Amount: "1,300 EUR", CreatedOn: "2024-04-10" },
          { PO_ID: "PO123458", Status: "Rejected", Vendor: "Infosys", Amount: "1,100 EUR", CreatedOn: "2024-04-15" }
        ]
      };
      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);
    }
  });
});
