/* global app */'use strict';app.eventMap = {
	'launch.sandyMainPanelsGridButton3' : [	{ 		action: app.fn.openPageWithState, 		argument: ['sandySettings']	}	],
	'choose.sandySettingsHorizontalTable' : [	{ 		action: app.fn.openPage, 		argument: 'sandyPositionSettings'	}	],
	'open.sandySettingsHorizontalTable' : [	{ 		action: app.fn.openPage, 		argument: 'sandyConfiguration'	}	],
	'add.sandySettingsHorizontalTable' : [	{ 		action: app.fn.showWidget, 		argument: 'sandySettingsAddNewContainer'	}	],
	'launch.sandySettingsAddNewGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewContainer'	}	],
	'launch.sandySettingsAddNewGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewContainer'	}	],
	'segmentedControlTab1.sandySettingsAddNewSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'sandySettingsAddNewGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewGrid2'	}	],
	'segmentedControlTab2.sandySettingsAddNewSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'sandySettingsAddNewGrid2'	},
	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewGrid'	}	],
	'launch.sandySettingsAddNewGridButton2' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewContainer'	}	],
	'launch.sandySettingsAddNewGridCancelButton2' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewContainer'	}	],
	'launch.sandyConfigurationTitleGridCellButton' : [	{ 		action: app.fn.openPage, 		argument: 'sandySettings'	}	],
	'segmentedControlTab1.sandyConfigurationSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'PanelChangeWidgetConfigure'	},
	{ 		action: app.fn.hideWidget, 		argument: 'PanelChangeEventConfigure'	},
	{ 		action: app.fn.hideWidget, 		argument: 'PanelChangeDataConfigure'	},
	{ 		action: app.fn.hideWidget, 		argument: 'createWidgetCopyWidgetContentPanel'	}	],
	'segmentedControlTab2.sandyConfigurationSegmented' : [	{ 		action: app.fn.hideWidget, 		argument: 'PanelChangeWidgetConfigure'	},
	{ 		action: app.fn.showWidget, 		argument: 'PanelChangeEventConfigure'	},
	{ 		action: app.fn.hideWidget, 		argument: 'PanelChangeDataConfigure'	},
	{ 		action: app.fn.hideWidget, 		argument: 'createWidgetCopyWidgetContentPanel'	}	],
	'segmentedControlTab3.sandyConfigurationSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'PanelChangeDataConfigure'	},
	{ 		action: app.fn.hideWidget, 		argument: 'PanelChangeWidgetConfigure'	},
	{ 		action: app.fn.hideWidget, 		argument: 'PanelChangeEventConfigure'	},
	{ 		action: app.fn.hideWidget, 		argument: 'createWidgetCopyWidgetContentPanel'	}	],
	'segmentedControlTab4.sandyConfigurationSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'createWidgetCopyWidgetContentPanel'	},
	{ 		action: app.fn.hideWidget, 		argument: 'PanelChangeDataConfigure'	},
	{ 		action: app.fn.hideWidget, 		argument: 'PanelChangeEventConfigure'	},
	{ 		action: app.fn.hideWidget, 		argument: 'PanelChangeWidgetConfigure'	}	],
	'launch.sandyPositionSettingsTitleGridCellButton' : [	{ 		action: app.fn.openPage, 		argument: 'sandySettings'	}	],
	'open.sandyPositionSettingsHorizontalTable' : [	{ 		action: app.fn.openPage, 		argument: 'sandyPositionConfiguration'	}	],
	'add.sandyPositionSettingsHorizontalTable' : [	{ 		action: app.fn.showWidget, 		argument: 'sandySettingsAddNewContainer'	}	],
	'segmentedControlTab1.sandyPositionSettingsAddNewSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'sandySettingsAddNewGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewGrid2'	}	],
	'segmentedControlTab2.sandyPositionSettingsAddNewSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'sandySettingsAddNewGrid2'	},
	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewGrid'	}	],
	'launch.sandyPositionSettingsAddNewGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandyPositionSettingsAddNewContainer'	}	],
	'launch.sandyPositionSettingsAddNewGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandyPositionSettingsAddNewContainer'	}	],
	'launch.sandyPositionSettingsAddNewGridButton2' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewContainer'	}	],
	'launch.sandyPositionSettingsAddNewGridCancelButton2' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewContainer'	}	],
	'launch.sandyPositionSettingsFilterGridRemoveFilter' : [	{ 		action: app.fn.showWidget, 		argument: 'sandyPositionSettingsAddNewContainer'	}	],
	'launch.sandyPositionConfigurationTitleGridCellButton' : [	{ 		action: app.fn.openPrevPage, 	}	],
	'launch.sandyPositionSettingsReorgGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandyPositionSettingsReorgContainer'	}	],
	'launch.sandyPositionSettingsReorgGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandyPositionSettingsReorgContainer'	}	],
	'launch.sandyPositionSettingsFilterGridRefresh' : [	{ 		action: app.fn.showWidget, 		argument: 'sandyPositionSettingsReorgContainer'	}	],
	'segmentedControlTab1.sandySimulationSegmented' : [	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTable','sandySimulationControlGridRow2_OrgBudget','sandySimulationOrgBudget2021GridTable','sandySimulationOrgBudget2022GridTable']	},
	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationGridTable','sandySimulationControlGridRow2','sandySimulationGridTable']	}	],
	'segmentedControlTab2.sandySimulationSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTable','sandySimulationControlGridRow2_OrgBudget']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationDeltaGridTable','sandySimulationGridTable','sandySimulationOpened1GridTable','sandySimulationControlGridRow2','sandySimulationControlGridRow2_Opened1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationFilterUnitDropBox']	}	],
	'launch.sandyMainPanelsGridButton1' : [	{ 		action: app.fn.openPage, 		argument: 'sandyFilter'	}	],
	'launch.sandySimulationGridTableButton2' : [	{ 		action: app.fn.showPopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_2' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_3' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_4' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_5' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_6' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_7' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_8' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_9' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_10' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_11' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_12' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_13' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationStatusPopUp'	}	],
	'launch.sandySimulationGridTable_row_14' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationGridTable_row_15' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationPopUpGridButtonGridOkButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationPopUpGridButtonGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationDeltaGridTableButton2' : [	{ 		action: app.fn.showPopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationOpened1GridTableButton2' : [	{ 		action: app.fn.showPopup, 		argument: 'sandySimulationPopUp'	}	],
	'segmentedControlTab1.sandySimulationControlDeltaSegmented_Opened1' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationDeltaGridTable']	}	],
	'segmentedControlTab2.sandySimulationControlDeltaSegmented_Opened1' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationDeltaGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationGridTable']	}	],
	'segmentedControlTab1.sandySimulationControlDeltaSegmented_Opened2' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationDeltaGridTable']	}	],
	'segmentedControlTab2.sandySimulationControlDeltaSegmented_Opened2' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationDeltaGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationGridTable']	}	],
	'launch.sandySimulationControlGridCellButton1_Opened1' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationControlGridRow2','sandySimulationGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationControlGridRow2_Opened1','sandySimulationOpened1GridTable']	}	],
	'launch.sandySimulationControlGridCellButton2_Opened1' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationControlGridRow2','sandySimulationGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationControlGridRow2_Opened1','sandySimulationOpened1GridTable']	}	],
	'launch.sandySimulationOrgBudgetGridTableHeaderCellButton14' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudgetGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudget2021GridTable','sandySimulationOrgBudget2022GridTable']	}	],
	'launch.sandySimulationOrgBudgetGridTableHeaderCellButton15' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudget2021GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudgetGridTable','sandySimulationOrgBudget2022GridTable']	}	],
	'launch.sandySimulationOrgBudget2021GridTableHeaderCellButton14' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudgetGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudget2021GridTable','sandySimulationOrgBudget2022GridTable']	}	],
	'launch.sandySimulationOrgBudget2021GridTableHeaderCellButton15' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudget2021GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudgetGridTable','sandySimulationOrgBudget2022GridTable']	}	],
	'launch.sandySimulationOrgBudget2022GridTableHeaderCellButton14' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudgetGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudget2021GridTable','sandySimulationOrgBudget2022GridTable']	}	],
	'launch.sandySimulationOrgBudget2022GridTableHeaderCellButton15' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudget2021GridTable','sandySimulationOrgBudget2021GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudgetGridTable','sandySimulationOrgBudget2022GridTable']	}	],
	'launch.sandySimulationOrgBudget2022GridTableHeaderCellButton16' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudget2022GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTable','sandySimulationOrgBudget2021GridTable']	}	],
	'segmentedControlTab1.sandySimulationPopUpSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationPopUpGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationPopUpStatusGrid','sandySimulationPopUpEmployeeGrid']	}	],
	'segmentedControlTab2.sandySimulationPopUpSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationPopUpStatusGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationPopUpGrid','sandySimulationPopUpEmployeeGrid']	}	],
	'segmentedControlTab3.sandySimulationPopUpSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationPopUpEmployeeGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationPopUpStatusGrid','sandySimulationPopUpGrid']	}	],
	'launch.sandySimulationPopUpStatusGridButtonGridOkButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationPopUpStatusGridButtonGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationPopUp'	}	],
	'segmentedControlTab1.sandySimulationStatusPopUpSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationStatusPopUpGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationStatusPopUpStatusGrid']	}	],
	'segmentedControlTab2.sandySimulationStatusPopUpSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationStatusPopUpStatusGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationStatusPopUpGrid']	}	],
	'launch.sandySimulationStatusPopUpGridButtonGridOkButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationStatusPopUp'	}	],
	'launch.sandySimulationStatusPopUpGridButtonGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationStatusPopUp'	}	],
	'launch.sandySimulationStatusPopUpStatusGridButtonGridOkButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationStatusPopUp'	}	],
	'launch.sandySimulationStatusPopUpStatusGridButtonGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationStatusPopUp'	}	],
	'launch.sandySimulationControlGridCellButton3' : [	{ 		action: app.fn.openPage, 	}	],
	'launch.sandyMainUserGridButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'rocheMainSiteMenu'	}	],
	'launch.sandyFilterTitleGridCellButton' : [	{ 		action: app.fn.backToMain, 	}	],
	'segmentedControlTab1.sandyFilterSegmented' : [	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTable','sandySimulationControlGridRow2_OrgBudget','sandySimulationOrgBudget2021GridTable','sandySimulationOrgBudget2022GridTable']	},
	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationGridTable','sandySimulationControlGridRow2','sandySimulationGridTable']	}	],
	'segmentedControlTab2.sandyFilterSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTable','sandySimulationControlGridRow2_OrgBudget']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationDeltaGridTable','sandySimulationGridTable','sandySimulationOpened1GridTable','sandySimulationControlGridRow2','sandySimulationControlGridRow2_Opened1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationFilterUnitDropBox']	}	],
	'launch.sandyFilterControlGridCellButton1' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationControlGridRow2_Opened1','sandySimulationOpened1GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationGridTable','sandySimulationControlGridRow2']	}	],
	'launch.sandyFilterControlGridCellButton2' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationControlGridRow2_Opened1','sandySimulationOpened1GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationGridTable','sandySimulationControlGridRow2']	}	],
	'launch.sandyFilterControlGridCellButton3' : [	{ 		action: app.fn.openPage, 	}	],
	'segmentedControlTab1.sandyFilterControlDeltaSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationDeltaGridTable']	}	],
	'segmentedControlTab2.sandyFilterControlDeltaSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationDeltaGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationGridTable']	}	],
	'launch.sandyFilterControlGridCellButton1_Opened1' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationControlGridRow2','sandySimulationGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationControlGridRow2_Opened1','sandySimulationOpened1GridTable']	}	],
	'launch.sandyFilterControlGridCellButton2_Opened1' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationControlGridRow2','sandySimulationGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationControlGridRow2_Opened1','sandySimulationOpened1GridTable']	}	],
	'segmentedControlTab1.sandyFilterControlDeltaSegmented_Opened1' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationDeltaGridTable']	}	],
	'segmentedControlTab2.sandyFilterControlDeltaSegmented_Opened1' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationDeltaGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationGridTable']	}	],
	'segmentedControlTab1.sandyFilterControlDeltaSegmented_Opened2' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationDeltaGridTable']	}	],
	'segmentedControlTab2.sandyFilterControlDeltaSegmented_Opened2' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationDeltaGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationGridTable']	}	],
	'segmentedControlTab1.sandyFilterPopUpSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationPopUpGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationPopUpStatusGrid']	}	],
	'segmentedControlTab2.sandyFilterPopUpSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationPopUpStatusGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationPopUpGrid']	}	],
	'launch.sandyFilterPopUpGridButtonGridOkButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterPopUpGridButtonGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterPopUpStatusGridButtonGridOkButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterPopUpStatusGridButtonGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationPopUp'	}	],
	'segmentedControlTab1.sandyFilterStatusPopUpSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationStatusPopUpGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationStatusPopUpStatusGrid']	}	],
	'segmentedControlTab2.sandyFilterStatusPopUpSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationStatusPopUpStatusGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationStatusPopUpGrid']	}	],
	'launch.sandyFilterStatusPopUpGridButtonGridOkButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationStatusPopUp'	}	],
	'launch.sandyFilterStatusPopUpGridButtonGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationStatusPopUp'	}	],
	'launch.sandyFilterStatusPopUpStatusGridButtonGridOkButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationStatusPopUp'	}	],
	'launch.sandyFilterStatusPopUpStatusGridButtonGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationStatusPopUp'	}	],
	'launch.sandyFilterGridTable_row_2' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterGridTable_row_3' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterGridTable_row_4' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterGridTable_row_5' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterGridTable_row_6' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterGridTable_row_7' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterGridTable_row_8' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterGridTable_row_9' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterGridTable_row_10' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterGridTable_row_11' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterGridTable_row_12' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterGridTable_row_13' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationStatusPopUp'	}	],
	'launch.sandyFilterGridTable_row_14' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterGridTable_row_15' : [	{ 		action: app.fn.togglePopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterDeltaGridTableButton2' : [	{ 		action: app.fn.showPopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterOpened1GridTableButton2' : [	{ 		action: app.fn.showPopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandyFilterOrgBudgetGridTableHeaderCellButton14' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudgetGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudget2021GridTable','sandySimulationOrgBudget2022GridTable']	}	],
	'launch.sandyFilterOrgBudgetGridTableHeaderCellButton15' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudget2021GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudgetGridTable','sandySimulationOrgBudget2022GridTable']	}	],
	'launch.sandyFilterOrgBudgetGridTableHeaderCellButton16' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudget2022GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTable','sandySimulationOrgBudget2021GridTable']	}	],
	'launch.sandyFilterOrgBudget2021GridTableHeaderCellButton14' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudgetGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudget2021GridTable','sandySimulationOrgBudget2022GridTable']	}	],
	'launch.sandyFilterOrgBudget2021GridTableHeaderCellButton15' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudget2021GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudgetGridTable','sandySimulationOrgBudget2022GridTable']	}	],
	'launch.sandyFilterOrgBudget2021GridTableHeaderCellButton16' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudget2022GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTable','sandySimulationOrgBudget2021GridTable']	}	],
	'launch.sandyFilterOrgBudget2022GridTableHeaderCellButton14' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudgetGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudget2021GridTable','sandySimulationOrgBudget2022GridTable']	}	],
	'launch.sandyFilterOrgBudget2022GridTableHeaderCellButton15' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudget2021GridTable','sandySimulationOrgBudget2021GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudgetGridTable','sandySimulationOrgBudget2022GridTable']	}	],
	'launch.sandyFilterOrgBudget2022GridTableHeaderCellButton16' : [	{ 		action: app.fn.showWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudgetGridTableHeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButton15','sandySimulationOrgBudget2022GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudgetGridTableHeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButtonON15','sandySimulationOrgBudgetGridTable','sandySimulationOrgBudget2021GridTable']	}	],
	'launch.sandyReportTitleGridCellButton' : [	{ 		action: app.fn.backToMain, 	}	],
	'launch.sandyMainPanelsGridButton2' : [	{ 		action: app.fn.openPage, 		argument: 'sandyReport'	}	],
	'launch.sandyFilterGridTable_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'sandySimulation'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedUnit','sandyFilterGridTable','0','label']	}	],
	'launch.sandySimulationTitleGridCellButton' : [	{ 		action: app.fn.openPrevPageWithState, 	}	],
	'launch.sandySimulationPopUpEmployeeGridButtonGridOkButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationPopUpEmployeeGridButtonGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationPopUp'	}	],
	'launch.sandySimulationAddNewButton' : [	{ 		action: app.fn.showWidget, 		argument: 'sandySimulationAddNewContainer'	}	],
	'segmentedControlTab1.sandySimulationAddNewSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'sandySettingsAddNewGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewGrid2'	}	],
	'segmentedControlTab2.sandySimulationAddNewSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'sandySettingsAddNewGrid2'	},
	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewGrid'	}	],
	'launch.sandySimulationAddNewGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationAddNewContainer'	}	],
	'launch.sandySimulationAddNewGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewContainer'	}	],
	'launch.sandySimulationAddNewGridButton2' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySettingsAddNewContainer'	}	],
	'launch.sandySimulationAddNewGridCancelButton2' : [	{ 		action: app.fn.hideWidget, 		argument: 'sandySimulationAddNewContainer'	}	],
	'launch.sandySettingsTitleGridCellButton' : [	{ 		action: app.fn.openPage, 		argument: 'sandyMain'	}	],
	'launch.sandyReportSideMenuBackToTop' : [	{ 		action: app.fn.scrollTo, 		argument: 'rocheCaseDetailsTitleGrid'	}	],
	'launch.sandyReportSideMenuFteHc' : [	{ 		action: app.fn.scrollTo, 		argument: 'sandyReportChart1Section'	}	],
	'launch.sandyReportSideMenuCar' : [	{ 		action: app.fn.scrollTo, 		argument: 'sandyConfigurationGridTableDropBox1'	}	],
	'launch.sandyReportSideMenuTWMValue' : [	{ 		action: app.fn.scrollTo, 		argument: 'sandyReportChartTWMValueSection'	}	],
	'launch.sandyReportSideMenuEmptyPos' : [	{ 		action: app.fn.scrollTo, 		argument: 'sandyReportChartEmptyPosSection'	}	],
};
