sap.ui.controller("ztest_ui5_sonar.ztest_ui5_sonar_iview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ztest_ui5_sonar.ztest_ui5_sonar_iview
*/
	onInit: function() {
	
	document.write("<h2>Table of Factorials</h2>");
	for(i = 1, fact = 1; i < 10; i++, fact *= i) {
	    document.write(i + "! = " + fact);
	    document.write("<br>");
	}
	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ztest_ui5_sonar.ztest_ui5_sonar_iview
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ztest_ui5_sonar.ztest_ui5_sonar_iview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ztest_ui5_sonar.ztest_ui5_sonar_iview
*/
//	onExit: function() {
//
//	}

});