﻿/* global app */'use strict';app.eventMap = {
	'launch.adminPortalMainMenuGridCell1_1Button' : [	{ 		action: app.fn.openPage, 		argument: 'adminPortalWidgetCatalog'	}	],
	'choose.adminPortalWidgetCatalogHorizontalTable' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogAddNewContainer'	}	],
	'edit.adminPortalWidgetCatalogHorizontalTable' : [	{ 		action: app.fn.openPage, 		argument: 'adminPortalWidgetConfiguration'	},
	{ 		action: app.fn.removeWidgetValues, 		argument: ['DropBoxUserSpecific','adminPortalWidgetConfigurationMDXEditTextArea','adminPortalWidgetConfigurationMDXEditHorizontalTable']	},
	{ 		action: app.fn.forceRefresh, 		argument: 'adminPortalWidgetConfigurationMDXEditTextArea'	}	],
	'segmentedControlTab2.adminPortalWidgetCatalogHorizontalTable' : [	{ 		action: app.fn.showWidget, 		argument: 'PanelDeleteWidget'	}	],
	'open.adminPortalWidgetCatalogHorizontalTable' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogDeleteWarnContainer'	}	],
	'launch.adminPortalWidgetCatalogContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalWidgetCatalog']	}	],
	'launch.adminPortalWidgetCatalogContainerGridButton5' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalEventLogs']	}	],
	'launch.adminPortalWidgetCatalogContainerGridButton0' : [	{ 		action: app.fn.backToMain, 	},
	{ 		action: app.fn.removeWidgetValues, 		argument: ['adminPortalWidgetCatalogSearchBox','adminPortalWidgetCatalogPagingDropBox']	},
	{ 		action: app.fn.resetWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1']	}	],
	'launch.adminPortalWidgetCatalogContainerGridButton6' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalApplications']	}	],
	'launch.adminPortalWidgetCatalogContainerGridButton7' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogDeployWarnContainer'	}	],
	'launch.adminPortalEventCatalogContainerGridButton0' : [	{ 		action: app.fn.backToMain, 	}	],
	'launch.adminPortalEventCatalogContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalWidgetCatalog']	}	],
	'launch.adminPortalEventCatalogContainerGridButton3' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalDataCatalog']	}	],
	'launch.adminPortalEventCatalogContainerGridButton4' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalSystemConfig']	}	],
	'launch.adminPortalEventCatalogContainerGridButton5' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalEventLogs']	}	],
	'launch.adminPortalEventCatalogContainerGridButton6' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalApplications']	}	],
	'launch.adminPortalEventCatalogContainerGridButton7' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalApplicationsDeployWarnContainer'	}	],
	'launch.adminPortalDataCatalogContainerGridButton0' : [	{ 		action: app.fn.backToMain, 	}	],
	'launch.adminPortalDataCatalogContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalWidgetCatalog']	}	],
	'launch.adminPortalDataCatalogContainerGridButton2' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalEventCatalog']	}	],
	'launch.adminPortalDataCatalogContainerGridButton3' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalDataCatalog']	}	],
	'launch.adminPortalDataCatalogContainerGridButton4' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalSystemConfig']	}	],
	'launch.adminPortalDataCatalogContainerGridButton5' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalEventLogs']	}	],
	'launch.adminPortalDataCatalogContainerGridButton6' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalApplications']	}	],
	'launch.adminPortalDataCatalogContainerGridButton7' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalApplicationsDeployWarnContainer'	}	],
	'launch.adminPortalSystemConfigContainerGridButton0' : [	{ 		action: app.fn.backToMain, 	}	],
	'launch.adminPortalSystemConfigContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalWidgetCatalog']	}	],
	'launch.adminPortalSystemConfigContainerGridButton4' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalSystemConfig']	}	],
	'launch.adminPortalSystemConfigContainerGridButton5' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalEventLogs']	}	],
	'launch.adminPortalSystemConfigContainerGridButton6' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalApplications']	}	],
	'launch.adminPortalSystemConfigContainerGridButton7' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalApplicationsDeployWarnContainer'	}	],
	'launch.adminPortalEventLogsContainerGridButton0' : [	{ 		action: app.fn.backToMain, 	}	],
	'launch.adminPortalEventLogsContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalWidgetCatalog']	}	],
	'launch.adminPortalEventLogsContainerGridButton4' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalSystemConfig']	}	],
	'launch.adminPortalEventLogsContainerGridButton5' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalEventLogs']	}	],
	'launch.adminPortalEventLogsContainerGridButton6' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalApplications']	}	],
	'launch.adminPortalEventLogsContainerGridButton7' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalApplicationsDeployWarnContainer'	}	],
	'launch.adminPortalApplicationsContainerGridButton0' : [	{ 		action: app.fn.backToMain, 	}	],
	'launch.adminPortalApplicationsContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalWidgetCatalog']	}	],
	'launch.adminPortalApplicationsContainerGridButton4' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalSystemConfig']	}	],
	'launch.adminPortalApplicationsContainerGridButton5' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalEventLogs']	}	],
	'launch.adminPortalApplicationsContainerGridButton6' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalApplications']	}	],
	'launch.adminPortalApplicationsContainerGridButton7' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalApplicationsDeployWarnContainer'	}	],
	'segmentedControlTab1.adminPortalWidgetCatalogAddNewSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalWidgetCatalogAddNewGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogAddNewGridClone'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogAddNewGridCloneAll'	}	],
	'segmentedControlTab2.adminPortalWidgetCatalogAddNewSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalWidgetCatalogAddNewGridClone'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogAddNewGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogAddNewGridCloneAll'	}	],
	'launch.adminPortalWidgetCatalogAddNewGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogAddNewContainer'	}	],
	'launch.adminPortalWidgetCatalogAddNewGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogAddNewContainer'	}	],
	'launch.adminPortalWidgetCatalogAddNewGridCloneButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogAddNewContainer'	}	],
	'launch.adminPortalWidgetCatalogAddNewGridCloneCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogAddNewContainer'	}	],
	'segmentedControlTab3.adminPortalWidgetCatalogAddNewSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalWidgetCatalogAddNewGridCloneAll'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogAddNewGridClone'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogAddNewGrid'	}	],
	'launch.adminPortalWidgetCatalogAddNewGridCloneAllButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogAddNewContainer'	}	],
	'launch.adminPortalWidgetCatalogAddNewGridCloneAllCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogAddNewContainer'	}	],
	'launch.adminPortalWidgetConfigurationTitleGridBackButton' : [	{ 		action: app.fn.openPrevPageWithState, 		argument: 'adminPortalWidgetCatalog'	},
	{ 		action: app.fn.removeWidgetValues, 		argument: ['adminPortalWidgetConfigurationMDXEditTextArea']	}	],
	'segmentedControlTab1.adminPortalWidgetConfigurationAddNewSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['adminPortalWidgetConfigurationTextGrid','adminPortalWidgetConfigurationEditTextBox']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['adminPortalEventEditGrid','adminPortalDataEditGrid','adminPortalEventEditAddButton','adminPortalWidgetConfigurationEventAndListenEditGrid']	}	],
	'segmentedControlTab2.adminPortalWidgetConfigurationAddNewSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['adminPortalEventEditGrid','adminPortalEventEditAddButton','adminPortalWidgetConfigurationEventAndListenEditGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['adminPortalDataCatalogHorizontalTable','adminPortalWidgetConfigurationEditTextBox','adminPortalDataEditGrid','adminPortalWidgetConfigurationTextGrid']	}	],
	'segmentedControlTab3.adminPortalWidgetConfigurationAddNewSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['adminPortalDataEditGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['adminPortalWidgetConfigurationHorizontalTable','adminPortalEventEditAddButton','adminPortalEventEditGrid','adminPortalWidgetConfigurationTextGrid','adminPortalWidgetConfigurationEventAndListenEditGrid']	}	],
	'launch.adminPortalWidgetConfigurationContainerGridButton0' : [	{ 		action: app.fn.backToMain, 	}	],
	'launch.adminPortalWidgetConfigurationContainerGridButton1' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalWidgetCatalog']	}	],
	'launch.adminPortalWidgetConfigurationContainerGridButton4' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalSystemConfig']	}	],
	'launch.adminPortalWidgetConfigurationContainerGridButton5' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalEventLogs']	}	],
	'launch.adminPortalWidgetConfigurationContainerGridButton6' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalApplications']	}	],
	'launch.adminPortalWidgetConfigurationContainerGridButton7' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalApplicationsDeployWarnContainer'	}	],
	'launch.adminPortalWidgetConfigurationChangeGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationChangeContainer'	}	],
	'launch.adminPortalWidgetConfigurationChangeGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationChangeContainer'	}	],
	'launch.adminPortalWidgetConfigurationInputChangeButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationChangeContainer'	}	],
	'choose.adminPortalEventEditHorizontalTable' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationDeleteWarnContainer'	}	],
	'launch.adminPortalWidgetConfigurationAddEventGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationAddEventContainer'	}	],
	'launch.adminPortalWidgetConfigurationAddEventGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationAddEventContainer'	}	],
	'launch.adminPortalEventEditAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationAddEventContainer'	}	],
	'launch.adminPortalSiteMenuButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalSiteMenuApplications'	}	],
	'launch.adminPortalSiteMenuApplicationsBack' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalSiteMenuApplications'	}	],
	'launch.adminPortalSiteMenuApplication1' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalSiteMenuApplications'	}	],
	'launch.adminPortalSiteMenuApplication2' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalSiteMenuApplications'	}	],
	'launch.adminPortalSiteMenuApplication3' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalSiteMenuApplications'	}	],
	'launch.adminPortalWidgetConfigurationInputCopyContentButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationCopyContentContainer'	}	],
	'launch.adminPortalWidgetConfigurationCopyContentGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationCopyContentContainer'	}	],
	'launch.adminPortalWidgetConfigurationCopyContentGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationCopyContentContainer'	}	],
	'segmentedControlTab1.adminPortalApplicationsDeploymentSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalApplicationsDeploymentGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalApplicationsBackupGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalApplicationsRestoreGrid'	}	],
	'segmentedControlTab2.adminPortalApplicationsDeploymentSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalApplicationsBackupGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalApplicationsDeploymentGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalApplicationsRestoreGrid'	}	],
	'segmentedControlTab3.adminPortalApplicationsDeploymentSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalApplicationsRestoreGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalApplicationsDeploymentGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalApplicationsBackupGrid'	}	],
	'launch.adminPortalApplicationsDeploymentGridButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationChangeContainer'	}	],
	'launch.adminPortalApplicationsBackupGridButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationChangeContainer'	}	],
	'launch.adminPortalApplicationsRestoreGridButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationChangeContainer'	}	],
	'launch.adminPortalApplicationsRestoreGridButtonRefresh' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationChangeContainer'	},
	{ 		action: app.fn.forceRefresh, 		argument: 'adminPortalApplicationsRestoreGridBackupList'	}	],
	'launch.adminPortalApplicationsSystemGridCreateButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalApplicationsCreateNewContainer'	}	],
	'launch.adminPortalApplicationsSystemGridDeleteButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalApplicationsDeleteContainer'	}	],
	'launch.adminPortalApplicationsSystemGridRestartButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationChangeContainer'	}	],
	'launch.adminPortalApplicationsCreateNewGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalApplicationsCreateNewContainer'	}	],
	'launch.adminPortalApplicationsCreateNewGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalApplicationsCreateNewContainer'	}	],
	'launch.adminPortalApplicationsDeleteGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalApplicationsDeleteContainer'	},
	{ 		action: app.fn.forceRefresh, 		argument: 'adminPortalApplications'	}	],
	'launch.adminPortalApplicationsDeleteGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalApplicationsDeleteContainer'	}	],
	'launch.adminPortalApplicationsDeployWarnGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalApplicationsDeployWarnContainer'	}	],
	'launch.adminPortalApplicationsDeployWarnGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalApplicationsDeployWarnContainer'	}	],
	'choose.adminPortalEventListenHorizontalTable' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationDeleteListenWarnContainer'	}	],
	'launch.adminPortalEventEditListenAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationAddListenContainer'	}	],
	'open.adminPortalEventEditHorizontalTable' : [	{ 		action: app.fn.toggleWidget, 		argument: 'adminPortalEventEditGridCell2_2Grid'	},
	{ 		action: app.fn.removeWidgetValues, 		argument: ['adminPortalEventEditGridArgumentDropbox']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['adminPortalEventEditGridArgumentDropbox']	}	],
	'launch.adminPortalDataCatalogUserGridButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalSiteMenu'	},
	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalApplicationsSiteMenuAppList'	}	],
	'launch.adminPortalWidgetConfigurationUserGridButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalSiteMenu'	},
	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalApplicationsSiteMenuAppList'	}	],
	'launch.adminPortalWidgetCatalogDeleteWarnGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogDeleteWarnContainer'	}	],
	'launch.adminPortalWidgetCatalogDeleteWarnGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogDeleteWarnContainer'	}	],
	'launch.adminPortalWidgetCatalogFilterGridRemoveFilter' : [	{ 		action: app.fn.removeWidgetValues, 		argument: ['adminPortalWidgetCatalogFilterGridParentDropBox','adminPortalWidgetCatalogFilterGridTypeDropBox']	}	],
	'launch.adminPortalWidgetCatalogDeployWarnGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogDeployWarnContainer'	}	],
	'launch.adminPortalWidgetCatalogDeployWarnGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetCatalogDeployWarnContainer'	}	],
	'open.adminPortalWidgetConfigurationDataEditHorizontalTable' : [	{ 		action: app.fn.hideWidgets, 		argument: ['adminPortalWidgetConfigurationDataEditTextArea','adminPortalWidgetConfigurationMDXEditTextArea']	},
	{ 		action: app.fn.scrollTo, 		argument: 'adminPortalWidgetConfigurationMDXEditHorizontalTable'	},
	{ 		action: app.fn.removeWidgetValues, 		argument: ['adminPortalWidgetConfigurationMDXEditTextArea']	},
	{ 		action: app.fn.forceRefresh, 		argument: 'adminPortalWidgetConfigurationMDXEditTextArea'	}	],
	'open.adminPortalEventEditArgumentHorizontalTable' : [	{ 		action: app.fn.toggleWidget, 		argument: 'adminPortalEventEditGridArgumentDropbox'	}	],
	'launch.adminPortalWidgetConfigurationDeleteWarnGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationDeleteWarnContainer'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['adminPortalEventEditGridCell2_2Grid']	}	],
	'launch.adminPortalWidgetConfigurationDeleteWarnGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationDeleteWarnContainer'	}	],
	'launch.adminPortalWidgetCatalogContainerGridButton4' : [	{ 		action: app.fn.openPageWithState, 		argument: ['adminPortalSystemConfig']	}	],
	'launch.adminPortalWidgetConfigurationAddListenGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationAddListenContainer'	}	],
	'launch.adminPortalWidgetConfigurationAddListenGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationAddListenContainer'	}	],
	'launch.adminPortalWidgetConfigurationEditListenGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationEditListenContainer'	}	],
	'launch.adminPortalWidgetConfigurationEditListenGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationEditListenContainer'	}	],
	'open.adminPortalEventListenHorizontalTable' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationEditListenContainer'	}	],
	'launch.adminPortalWidgetConfigurationDeleteListenWarnGridButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationDeleteListenWarnContainer'	}	],
	'launch.adminPortalWidgetConfigurationDeleteListenWarnGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalWidgetConfigurationDeleteListenWarnContainer'	}	],
	'choose.adminPortalWidgetConfigurationMDXEditHorizontalTable' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalWidgetConfigurationMDXEditTextArea'	}	],
	'launch.adminPortalWidgetCatalogPagingButton1' : [	{ 		action: app.fn.forceRefresh, 		argument: 'adminPortalWidgetCatalogPageNumber'	},
	{ 		action: app.fn.decreaseWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1','1']	}	],
	'launch.adminPortalWidgetCatalogPagingButton2' : [	{ 		action: app.fn.forceRefresh, 		argument: 'adminPortalWidgetCatalogPageNumber'	},
	{ 		action: app.fn.increaseWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1','systemValueMaxPage']	}	],
	'choose.adminPortalWidgetCatalogPagingDropBox' : [	{ 		action: app.fn.resetWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1']	}	],
	'choose.adminPortalWidgetCatalogFilterGridParentDropBox' : [	{ 		action: app.fn.resetWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1']	}	],
	'choose.adminPortalWidgetCatalogFilterGridTypeDropBox' : [	{ 		action: app.fn.resetWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1']	}	],
	'segmentedControlTab1.adminPortalApplicationsSkinSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalApplicationsAddSkinGrid'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['adminPortalApplicationsDeleteSkinGrid','adminPortalApplicationsExportSkinGrid','adminPortalApplicationsImportSkinGrid']	}	],
	'segmentedControlTab2.adminPortalApplicationsSkinSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalApplicationsDeleteSkinGrid'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['adminPortalApplicationsAddSkinGrid','adminPortalApplicationsExportSkinGrid','adminPortalApplicationsImportSkinGrid']	}	],
	'segmentedControlTab3.adminPortalApplicationsSkinSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalApplicationsExportSkinGrid'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['adminPortalApplicationsAddSkinGrid','adminPortalApplicationsDeleteSkinGrid','adminPortalApplicationsImportSkinGrid']	}	],
	'launch.adminPortalApplicationsAddSkinGridButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationChangeContainer'	}	],
	'choose.adminPortalApplicationsAddSkinGridWidgetType' : [	{ 		action: app.fn.resetWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1']	}	],
	'launch.adminPortalApplicationsDeleteSkinGridButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationChangeContainer'	}	],
	'launch.adminPortalApplicationsExportSkinGridButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationChangeContainer'	}	],
	'launch.adminPortalApplicationsImportSkinGridButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetConfigurationChangeContainer'	}	],
	'segmentedControlTab4.adminPortalApplicationsSkinSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalApplicationsImportSkinGrid'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['adminPortalApplicationsAddSkinGrid','adminPortalApplicationsDeleteSkinGrid','adminPortalApplicationsExportSkinGrid']	}	],
	'choose.adminPortalApplicationsAddSkinGridSkinFamily' : [	{ 		action: app.fn.resetWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1']	}	],
	'choose.adminPortalApplicationsDeleteSkinGridSkinFamily' : [	{ 		action: app.fn.resetWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1']	}	],
	'choose.adminPortalApplicationsExportSkinGridSkinFamily' : [	{ 		action: app.fn.resetWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1']	}	],
	'choose.adminPortalApplicationsImportSkinGridSkinFamily' : [	{ 		action: app.fn.resetWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1']	}	],
	'launch.adminPortalWidgetCatalogPagingButtonFirst' : [	{ 		action: app.fn.forceRefresh, 		argument: 'adminPortalWidgetCatalogPageNumber'	},
	{ 		action: app.fn.resetWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1']	}	],
	'launch.adminPortalWidgetCatalogPagingButtonLast' : [	{ 		action: app.fn.forceRefresh, 		argument: 'adminPortalWidgetCatalogPageNumber'	},
	{ 		action: app.fn.setWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','systemValueMaxPage']	}	],
	'launch.adminPortalWidgetCatalogFilterGridRefresh' : [	{ 		action: app.fn.forceRefresh, 		argument: 'adminPortalWidgetCatalogHorizontalTable'	}	],
	'launch.adminPortalWidgetCatalogFilterGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterContainer'	}	],
	'launch.adminPortalWidgetCatalogFilterContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterContainer'	}	],
	'launch.adminPortalWidgetCatalogFilterType1ContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType1Container'	}	],
	'choose.adminPortalWidgetCatalogFilterType1ContainerGridDropboxName' : [	{ 		action: app.fn.resetWidgetValue, 		argument: ['adminPortalWidgetCatalogPageNumber','1']	}	],
	'launch.adminPortalWidgetCatalogFilterContainerGridButton1' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType1Container'	},
	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterContainer'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['FilterType','Parameter']	}	],
	'launch.adminPortalWidgetCatalogFilterType2ContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType2Container'	}	],
	'launch.adminPortalWidgetCatalogFilterContainerGridButton2' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterContainer'	},
	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType2Container'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['FilterType','Event Map']	}	],
	'launch.adminPortalWidgetCatalogFilterType3ContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType3Container'	}	],
	'launch.adminPortalWidgetCatalogFilterContainerGridButton3' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType3Container'	},
	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterContainer'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['FilterType','Data Repository']	}	],
	'launch.adminPortalWidgetCatalogFilterType4ContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType4Container'	}	],
	'launch.adminPortalWidgetCatalogFilterContainerGridButton4' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType4Container'	},
	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterContainer'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['FilterType','Changed Since']	}	],
	'launch.adminPortalWidgetCatalogFilterType5ContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType5Container'	}	],
	'launch.adminPortalWidgetCatalogFilterContainerGridButton5' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterContainer'	},
	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType5Container'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['FilterType','Parent Widget']	}	],
	'launch.adminPortalWidgetCatalogFilterType6ContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType6Container'	}	],
	'launch.adminPortalWidgetCatalogFilterContainerGridButton6' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterContainer'	},
	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType6Container'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['FilterType','PageWidget']	}	],
	'launch.adminPortalWidgetCatalogFilterType1ContainerGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType1Container'	}	],
	'launch.adminPortalWidgetCatalogFilterType1ContainerGridIcon1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['FilterLogExp','=']	}	],
	'launch.adminPortalWidgetCatalogFilterType1ContainerGridContains' : [	{ 		action: app.fn.addSystemValue, 		argument: ['FilterLogExp','contains']	}	],
	'launch.adminPortalWidgetCatalogFilterType1ContainerGridIcon2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['FilterLogExp','<>']	}	],
	'launch.adminPortalWidgetCatalogFilterType2ContainerGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType2Container'	}	],
	'launch.adminPortalWidgetCatalogFilterType3ContainerGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType3Container'	}	],
	'launch.adminPortalWidgetCatalogFilterType4ContainerGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType4Container'	}	],
	'launch.adminPortalWidgetCatalogFilterType5ContainerGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType5Container'	}	],
	'launch.adminPortalWidgetCatalogFilterType6ContainerGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType6Container'	}	],
	'segmentedControlTab1.adminPortalSystemConfigVersionSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalSystemConfigHorizontalTable'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalSystemConfigJSHorizontalTable'	}	],
	'segmentedControlTab2.adminPortalSystemConfigVersionSegmented' : [	{ 		action: app.fn.showWidget, 		argument: 'adminPortalSystemConfigJSHorizontalTable'	},
	{ 		action: app.fn.hideWidget, 		argument: 'adminPortalSystemConfigHorizontalTable'	}	],
	'launch.adminPortalWidgetCatalogHorizontalTable' : [	{ 		action: app.fn.goToUrl, 	}	],
	'launch.adminPortalWidgetCatalogFilterGridCancel1.finsihed' : [	{ 		action: app.fn.scrollTo, 	}	],
};
