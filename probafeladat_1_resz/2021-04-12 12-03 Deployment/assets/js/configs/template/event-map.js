/* global app */'use strict';app.eventMap = {
	'launch.modosdavidToggle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['toggleValue','1']	}	],
	'launch.modosdavidNextPage' : [	{ 		action: app.fn.openPage, 		argument: 'modosdavidPage1'	}	],
	'launch.modosdavidPrevPage' : [	{ 		action: app.fn.openPageWithState, 		argument: ['modosdavidMain']	}	],
};
