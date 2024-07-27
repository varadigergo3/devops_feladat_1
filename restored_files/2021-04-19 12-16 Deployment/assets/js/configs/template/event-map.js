/* global app */'use strict';app.eventMap = {
	'launch.riskMainButtonGridButton1' : [	{ 		action: app.fn.openPage, 		argument: 'riskCharPage'	}	],
	'launch.riskDataPTitleGridButton' : [	{ 		action: app.fn.openPrevPage, 	}	],
	'launch.riskCharTitleGridButton' : [	{ 		action: app.fn.openPrevPage, 	}	],
	'open.riskMainHorizontalTable' : [	{ 		action: app.fn.openPage, 		argument: 'riskDataPage'	},
	{ 		action: app.fn.forceRefresh, 		argument: 'riskDataModelInputGridSim2Histo1'	},
	{ 		action: app.fn.forceRefresh, 		argument: 'riskDataModelInputGridSim2Histo2'	},
	{ 		action: app.fn.forceRefresh, 		argument: 'riskDataModelInputGridSim2Histo2SegBar'	}	],
	'launch.riskMeasuresTitleGridButton' : [	{ 		action: app.fn.openPrevPage, 	}	],
	'launch.riskMainButtonGridButton2' : [	{ 		action: app.fn.openPage, 		argument: 'riskMeasuresPage'	}	],
	'segmentedControlTab1.riskDataSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['riskDataTable1Text','riskDataGridTable','riskDataGridTableChar','riskDataTable2Text']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['riskDataModelInputGrid']	},
	{ 		action: app.fn.showWidgets, 		argument: ['riskDataTable3Text','riskDataParamGrid']	}	],
	'segmentedControlTab2.riskDataSegmented' : [	{ 		action: app.fn.hideWidgets, 		argument: ['riskDataGridTable','riskDataHorizontalTable','riskDataTable1Text','riskDataTable2Text']	},
	{ 		action: app.fn.showWidgets, 		argument: ['riskDataModelInputGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['riskDataTable3Text','riskDataParamGrid']	},
	{ 		action: app.fn.forceRefresh, 		argument: 'riskDataModelInputGridSim2Histo1'	}	],
	'launch.riskMainContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskMainPage']	}	],
	'launch.riskMainContainerGridButton2' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskFinancialsPage']	},
	{ 		action: app.fn.changeSystemValue, 		argument: ['IFSGroup.value','All']	}	],
	'launch.riskMainContainerGridButton3' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskReportPage']	}	],
	'launch.riskDataContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskMainPage']	}	],
	'launch.riskDataContainerGridButton2' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskFinancialsPage']	}	],
	'launch.riskDataContainerGridButton3' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskReportPage']	}	],
	'launch.riskCharContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskMainPage']	}	],
	'launch.riskCharContainerGridButton2' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskFinancialsPage']	}	],
	'launch.riskCharContainerGridButton3' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskReportPage']	}	],
	'launch.riskMeasuresContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskMainPage']	}	],
	'launch.riskMeasuresContainerGridButton2' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskFinancialsPage']	}	],
	'launch.riskMeasuresContainerGridButton3' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskReportPage']	}	],
	'launch.riskFinancialsContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskMainPage']	}	],
	'launch.riskFinancialsContainerGridButton2' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskFinancialsPage']	}	],
	'launch.riskFinancialsContainerGridButton3' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskReportPage']	}	],
	'launch.riskReportContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskMainPage']	}	],
	'launch.riskReportContainerGridButton2' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskFinancialsPage']	}	],
	'launch.riskReportContainerGridButton3' : [	{ 		action: app.fn.openPageWithState, 		argument: ['riskReportPage']	}	],
	'segmentedControlTab1.riskReportGridCell4_1Segmented' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicSelectedTimeline','Y1']	}	],
	'segmentedControlTab2.riskReportGridCell4_1Segmented' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicSelectedTimeline','Y2']	}	],
	'launch.riskFinancialsGridTableHeaderButton6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicSelectedYear','Y1']	},
	{ 		action: app.fn.openPageWithWaitingForEvent, 		argument: ['launch.riskFinancialsGridTableHeaderButton6.finished','riskFinancialsBreakdownPage']	}	],
	'launch.riskFinancialsBreakdownIncludeButton2_5' : [	{ 		action: app.fn.toggleWidgets, 		argument: ['riskFinancialsIncludeToggle2_1','riskFinancialsIncludeToggle2_2','riskFinancialsIncludeToggle2_3','riskFinancialsIncludeToggle2_4']	}	],
	'launch.riskFinancialsBreakdownTitleGridButton' : [	{ 		action: app.fn.openPrevPage, 	}	],
	'launch.riskFinancialsGridTableHeaderButton7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicSelectedYear','Y2']	},
	{ 		action: app.fn.openPageWithWaitingForEvent, 		argument: ['launch.riskFinancialsGridTableHeaderButton7.finished','riskFinancialsBreakdownPage']	}	],
	'launch.riskFinancialsGridTableHeaderButton8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicSelectedYear','Y3']	},
	{ 		action: app.fn.openPageWithWaitingForEvent, 		argument: ['launch.riskFinancialsGridTableHeaderButton8.finished','riskFinancialsBreakdownPage']	}	],
	'launch.riskFinancialsGridTableHeaderButton9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicSelectedYear','Y4']	},
	{ 		action: app.fn.openPageWithWaitingForEvent, 		argument: ['launch.riskFinancialsGridTableHeaderButton9.finished','riskFinancialsBreakdownPage']	}	],
	'launch.riskFinancialsGridTableHeaderButton10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicSelectedYear','Y5']	},
	{ 		action: app.fn.openPageWithWaitingForEvent, 		argument: ['launch.riskFinancialsGridTableHeaderButton10.finished','riskFinancialsBreakdownPage']	}	],
	'launch.riskFinancialsIncludeToggle4_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicIFSValue','IFS - Income Statement']	}	],
	'launch.riskFinancialsIncludeToggle4_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicIFSValue','IFS - Balance Sheet']	}	],
	'launch.riskFinancialsIncludeToggle4_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicIFSValue','IFS - Cash Flow']	}	],
	'launch.riskFinancialsIncludeToggle4_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicIFSValue','IFS - All']	}	],
	'launch.riskFinancialsBreakdownIncludeToggle4_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicIFSBreakdownValue','IFS - All']	}	],
	'launch.riskFinancialsBreakdownIncludeToggle4_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicIFSBreakdownValue','IFS - Cash Flow']	}	],
	'launch.riskFinancialsBreakdownIncludeToggle4_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicIFSBreakdownValue','IFS - Balance Sheet']	}	],
	'launch.riskFinancialsBreakdownIncludeToggle4_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicIFSBreakdownValue','IFS - Income Statement']	}	],
};
