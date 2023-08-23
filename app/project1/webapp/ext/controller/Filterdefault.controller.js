sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('project1.ext.controller.Filterdefault', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf project1.ext.controller.Filterdefault
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			onBeforeRendering: async function(oEvent) {
				debugger;
				// this.getView().byId("felist::ProductsList--fe::FilterBar::Products::FilterField::IDStr-inner").setValue("1001");
				this.getView().byId("project1::ProductsList--fe::FilterBar::Products::FilterField::expDate-inner").setValue("2023-12-31");
				debugger;
				// Promise.resolve(this.getView().byId("felist::ProductsList--fe::FilterBar::Products::FilterBar").setFilterValues("IDStr","EQ","1002"));
				Promise.resolve(this.getView().byId("project1::ProductsList--fe::FilterBar::Products::FilterBar").setFilterValues("IDStr","GT","1000"));
				// .then((err)=>{alert(err);});
			}
		}
	});
});
