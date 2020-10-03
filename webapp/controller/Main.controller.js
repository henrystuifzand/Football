sap.ui.define([
	"nl/henrystuifzand/ed/Eredivisie/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("nl.henrystuifzand.ed.Eredivisie.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf nl.henrystuifzand.ed.Eredivisie.view.Main
		 */

		onInit: function () {
			debugger;
			var oTeamsModel = this.getOwnerComponent().getModel("teams");
			var aTeams = oTeamsModel.getProperty('/teams');
			//oTeamsModel.setProperty("/teams", this.addMissingLogo(aTeams));

			var oStandingsModel = this.getOwnerComponent().getModel("standings");
			aTeams = oStandingsModel.getProperty('/standings/0/table');
			//oStandingsModel.setProperty("/standings/0/table", this.addMissingLogo(aTeams));
		},

		onItemPress: function (oEvent) {
			var sPath = oEvent.getSource().getBindingContext('standings').getPath();
			var oModel = this.getOwnerComponent().getModel("standings");
			var oRowData = oModel.getProperty(sPath);

			this.getRouter().navTo("detail", {
				teamId: oRowData.team.id
			});
		},

		addMissingLogo: function (aTeams) {

			var index = aTeams.findIndex(x => x.name === 'VVV Venlo');
			if (index === -1) {
				index = aTeams.findIndex(x => x.team.name === 'VVV Venlo');
				aTeams[index].team.crestUrl = "https://upload.wikimedia.org/wikipedia/en/6/60/VVV-Venlo_logo.svg";
			} else {
				aTeams[index].crestUrl = "https://upload.wikimedia.org/wikipedia/en/6/60/VVV-Venlo_logo.svg";
			}

			index = aTeams.findIndex(x => x.name === 'Fortuna Sittard')
			if (index === -1) {
				index = aTeams.findIndex(x => x.team.name === 'Fortuna Sittard');
				aTeams[index].team.crestUrl = "https://upload.wikimedia.org/wikipedia/en/2/2d/Fortuna_Sittard_logo.svg";
			} else {
				aTeams[index].crestUrl = "https://upload.wikimedia.org/wikipedia/en/2/2d/Fortuna_Sittard_logo.svg";
			}

			index = aTeams.findIndex(x => x.name === 'ADO Den Haag')
			if (index === -1) {
				index = aTeams.findIndex(x => x.team.name === 'ADO Den Haag');
				aTeams[index].team.crestUrl = "https://upload.wikimedia.org/wikipedia/en/a/ad/ADO_Den_Haag_logo.svg";
			} else {
				aTeams[index].crestUrl = "https://upload.wikimedia.org/wikipedia/en/a/ad/ADO_Den_Haag_logo.svg";
			}

			index = aTeams.findIndex(x => x.name === 'NAC Breda')
			if (index === -1) {
				index = aTeams.findIndex(x => x.team.name === 'NAC Breda');
				aTeams[index].team.crestUrl = "https://upload.wikimedia.org/wikipedia/commons/c/c9/Logo_NAC_Breda.png";
			} else {
				aTeams[index].crestUrl = "https://upload.wikimedia.org/wikipedia/commons/c/c9/Logo_NAC_Breda.png";
			}

			index = aTeams.findIndex(x => x.name === 'VBV De Graafschap')
			if (index === -1) {
				index = aTeams.findIndex(x => x.team.name === 'VBV De Graafschap');
				aTeams[index].team.crestUrl = "https://upload.wikimedia.org/wikipedia/commons/2/28/VBV_De_Graafschap_Doetinchem.svg";
			} else {
				aTeams[index].crestUrl = "https://upload.wikimedia.org/wikipedia/commons/2/28/VBV_De_Graafschap_Doetinchem.svg";
			}

			index = aTeams.findIndex(x => x.name === 'FC Emmen')
			if (index === -1) {
				index = aTeams.findIndex(x => x.team.name === 'FC Emmen');
				aTeams[index].team.crestUrl = "https://upload.wikimedia.org/wikipedia/en/8/83/FC_Emmen_logo.svg";
			} else {
				aTeams[index].crestUrl = "https://upload.wikimedia.org/wikipedia/en/8/83/FC_Emmen_logo.svg";
			}
			return aTeams;
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf nl.henrystuifzand.ed.Eredivisie.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf nl.henrystuifzand.ed.Eredivisie.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf nl.henrystuifzand.ed.Eredivisie.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});