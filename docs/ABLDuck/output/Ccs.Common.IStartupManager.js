Ext.data.JsonP.Ccs_Common_IStartupManager({"mixedInto":[],"parentMixins":[],"files":[],"alternateClassNames":[],"mixins":[],"requires":[],"uses":[],"aliases":{},"id":"class-Ccs.Common.IStartupManager","tagname":"class","name":"Ccs.Common.IStartupManager","extends":"IManager","author":"pjudge@progress.com","shortDoc":"","html":"\u003cdiv\u003e\u003cpre class\u003d\"hierarchy\"\u003e\u003ch4\u003eHierarchy\u003c/h4\u003e\u003cdiv class\u003d\"subclass first-child\"\u003e\u003ca href\u003d\"#!/api/Ccs.Common.IManager\" rel\u003d\"Ccs.Common.IManager\" class\u003d\"docClass\"\u003eIManager\u003c/a\u003e\u003cdiv class\u003d\"subclass \"\u003e\u003cstrong\u003eCcs.Common.IStartupManager\u003c/strong\u003e\u003c/div\u003e\u003c/div\u003e\u003ch4\u003eSubclasses\u003c/h4\u003e\u003cdiv class\u003d\"dependency\"\u003e\u003ca href\u003d\"#!/api/Spark.Core.Manager.IStartupManager\" rel\u003d\"Spark.Core.Manager.IStartupManager\" class\u003d\"docClass\"\u003eSpark.Core.Manager.IStartupManager\u003c/a\u003e\u003c/div\u003e\u003ch4\u003eAuthor\u003c/h4\u003e\u003cdiv class\u003d\"dependency\"\u003epjudge@progress.com\u003c/div\u003e\u003c/pre\u003e\u003cdiv class\u003d\"doc-contents\"\u003e\u003ch2\u003ePurpose\u003c/h2\u003e\n\u003cp\u003eStartup Manager interface\u003c/p\u003e\n\u003c/div\u003e\u003cdiv class\u003d\"members\"\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-constructor\"\u003eConstructors\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-event\"\u003eEvents\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-property\"\u003eProperties\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-method\"\u003eMethods\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003cdiv id\u003d\"method-getManager\" class\u003d\"member first-child not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Ccs.Common.IStartupManager\"\u003eCcs.Common.IStartupManager\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Ccs.Common.IStartupManager-method-getManager\" class\u003d\"name expandable\"\u003egetManager\u003c/a\u003e(Progress.Lang.Class) : \u003ca href\u003d\"#!/api/Ccs.Common.IManager\" rel\u003d\"Ccs.Common.IManager\" class\u003d\"docClass\"\u003eIManager\u003c/a\u003e\u003cspan class\u003d\"signature\"\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003ePurpose\nRetrieve an instance of the specified IManager object.\nNotes\nIf a manager is not configured, ...\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u003ch2\u003ePurpose\u003c/h2\u003e\n\u003cp\u003eRetrieve an instance of the specified IManager object.\u003c/p\u003e\n\u003ch2\u003eNotes\u003c/h2\u003e\n\u003cp\u003eIf a manager is not configured, no error should be raised, but if it is\nconfigured and fails to load, an exception must be raised.\u003c/p\u003e\n\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epServiceType\u003c/span\u003e : Progress.Lang.Class\u003cdiv class\u003d\"sub-desc\"\u003e\u003cp\u003eThe Progress.Lang.Class repersenting the required service.\u003c/p\u003e\n\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch3 class\u003d\"pa\"\u003eReturns\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003e\u003ca href\u003d\"#!/api/Ccs.Common.IManager\" rel\u003d\"Ccs.Common.IManager\" class\u003d\"docClass\"\u003eIManager\u003c/a\u003e\u003c/span\u003e\u003cdiv class\u003d\"sub-desc\"\u003eIManager implementation of the requested type, or ? if its not configured.\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e","classIcon":"interface","members":[{"id":"method-getManager","name":"getManager","owner":"Ccs.Common.IStartupManager","tagname":"method","signature":"getManager(INPUT:Progress.Lang.Class):IManager","returnComment":"IManager implementation of the requested type, or ? if its not configured.","meta":{}}],"superclasses":["IManager","Ccs.Common.IStartupManager"],"subclasses":["Spark.Core.Manager.IStartupManager"],"meta":{}});