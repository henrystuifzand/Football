/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nl/henrystuifzand/ed/Eredivisie/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});