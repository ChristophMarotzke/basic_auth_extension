//@ui5-bundle test/Sample/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"test/Sample/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","test/Sample/model/models","sap/ui/core/ComponentSupport"],function(e,t,i){"use strict";return e.extend("test.Sample.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"test/Sample/controller/App.controller.js":function(){"use strict";sap.ui.define(["test/Sample/controller/BaseController"],function(t){"use strict";return t.extend("test.Sample.controller.App",{onInit:function(){}})});
},
	"test/Sample/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History"],function(e,t){"use strict";return e.extend("test.Sample.controller.BaseController",{onInit:function(){},getRouter:function(){return this.getOwnerComponent().getRouter()},getModel:function(e){return this.getView().getModel(e)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},onNavBack:function(){const e=t.getInstance().getPreviousHash();if(e!==undefined){history.go(-1)}else{this.getRouter().navTo("RouteMain",{},true)}}})});
},
	"test/Sample/controller/Main.controller.js":function(){sap.ui.define(["test/Sample/controller/BaseController","sap/m/MessageToast","sap/ui/model/json/JSONModel"],function(e,t,n){"use strict";return e.extend("test.Sample.controller.Main",{onInit:function(){this.getOwnerComponent().getModel().read("/Customers('TRAIH')");const e={inputValue:"test Input Value !!!",buttonText:"Don't press me !!! -> binded"};let t=new n(e);this.getView().setModel(t,"testModel")},navFwd:function(){return this.getOwnerComponent().getRouter().navTo("RouteOther")},onPress:function(e){t.show(`${e.getSource().getId()} pressed`)},onBoo:function(e){t.show(`👻`)},onTest:function(e){this.onBoo(e)}})});
},
	"test/Sample/controller/Other.controller.js":function(){sap.ui.define(["test/Sample/controller/BaseController"],function(e){"use strict";return e.extend("test.Sample.controller.Other",{onInit:function(){}})});
},
	"test/Sample/i18n/i18n.properties":'appTitle=Sample\nappDescription=App Description\n\n###\n\nstartPage.navButton.text=to Other view\nstartPage.currentUI5.text=most current UI5 version available\nstartPage.title.text=UI5 demo\nstartPage.text.username=Benutzername\n\n###\n\notherPage.title=Another View...\notherPage.listHeader=...bites the dust!\n\n',
	"test/Sample/i18n/i18n_en.properties":'appTitle=Sample\nappDescription=App Description\n\n###\n\nstartPage.navButton.text=to Other view\nstartPage.currentUI5.text=most current UI5 version available\nstartPage.title.text=UI5 demo\nstartPage.text.username=Username\n\n###\n\notherPage.title=Another View...\notherPage.listHeader=...bites the dust!\n',
	"test/Sample/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"test.Sample","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","ach":"ach","dataSources":{"BackendDataSource":{"uri":"/V2/Northwind/Northwind.svc/","type":"OData","settings":{"odataVersion":"2.0"}},"LatestUI5Datasource":{"uri":"","type":"JSON"}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"test.Sample.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.68.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ui.layout":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"test.Sample.i18n.i18n"}},"":{"dataSource":"BackendDataSource","settings":{"useBatch":false,"autoExpandSelect":true,"operationMode":"Server","groupId":"$direct","synchronizationMode":"None"}},"LatestUI5":{"type":"sap.ui.model.json.JSONModel","dataSource":"LatestUI5Datasource"}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"test.Sample.view","controlAggregation":"pages","controlId":"app"},"routes":[{"name":"RouteMain","pattern":"","target":["TargetMain"]},{"name":"RouteOther","pattern":"other","target":["TargetOther"]}],"targets":{"TargetMain":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Main","viewName":"Main"},"TargetOther":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Other","viewName":"Other"}}}}}',
	"test/Sample/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"test/Sample/view/App.view.xml":'<mvc:View controllerName="test.Sample.controller.App" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m"><Shell id="shell"><App id="app" /></Shell></mvc:View>\n',
	"test/Sample/view/Main.view.xml":'<mvc:View controllerName="test.Sample.controller.Main" \n\txmlns:core="sap.ui.core" \n\txmlns:mvc="sap.ui.core.mvc" displayBlock="true" \n\txmlns="sap.m"><Page id="page" title="{i18n>appTitle}"><headerContent><core:Icon color="#1873B4" src="sap-icon://sap-ui5" size="2rem" /><Text text="{LatestUI5>/latest}" /></headerContent><content><VBox alignItems="Center" justifyContent="Center" height="100%"><Title level="H1" titleStyle="H1" text="{i18n>startPage.title.text}" width="100%" textAlign="Center" /><Button icon="sap-icon://forward" id="NavFwdButton" text="{i18n>startPage.navButton.text}" press="navFwd" /><Button text="IA Sync" press="onPress" /><Text text="{i18n>startPage.text.username}"/><Input id="mainUserInput" value="{/Customers(\'TRAIH\')/ContactName}"/><Panel expandable="true"><headerToolbar><OverflowToolbar><Title text="Custom Toolbar with a header text" /></OverflowToolbar></headerToolbar><content><Text text="Lorem ipsum dolor st amet" /></content></Panel><DateTimePicker placeholder="Enter Date ..." /><Button text="{testModel>/buttonText}" press="onTest" class="myTestClass"/><Input value="{testModel>/inputValue}"/></VBox></content></Page></mvc:View>\n',
	"test/Sample/view/Other.view.xml":'<mvc:View controllerName="test.Sample.controller.Other" \n\txmlns:mvc="sap.ui.core.mvc" displayBlock="true" \n\txmlns="sap.m"><Page title="{i18n>otherPage.title}" showNavButton="true" navButtonPress="onNavBack"><content><List id="PeopleList" headerText="{i18n>otherPage.listHeader}" items="{/Employees}"><StandardListItem title="{FirstName} {LastName}" /></List></content></Page></mvc:View>\n'
}});
