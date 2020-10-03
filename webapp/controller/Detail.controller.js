sap.ui.define([
	"nl/henrystuifzand/ed/Eredivisie/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("nl.henrystuifzand.ed.Eredivisie.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf nl.henrystuifzand.ed.Eredivisie.view.Detail
		 */
		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched : function (oEvent) {
			var oArgs = oEvent.getParameter("arguments");
			var sTeamUrl = "/destinations/fb02/teams/" + oArgs.teamId;
			var oModel = new JSONModel(sTeamUrl);
	       	this.getView().setModel(oModel, "team");
	       	
	       	var sMatchesUrl = sTeamUrl + "/matches";
	       	oModel = new JSONModel(sMatchesUrl);
	       	this.getView().setModel(oModel, "matches");
	       	console.log(oModel);
		},
		_onBindingChange : function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		}
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf nl.henrystuifzand.ed.Eredivisie.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf nl.henrystuifzand.ed.Eredivisie.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf nl.henrystuifzand.ed.Eredivisie.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});