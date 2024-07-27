/* global app */'use strict';app.eventMap = {
	'launch.vidanetMainMenuGridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetMainMenuGridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionSideBar'	}	],
	'launch.vidanetSubscriptionMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionMozgasMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionMozgasSideBar'	}	],
	'launch.vidanetSubscriptionMozgasMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionMozgasMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionMozgasMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionMozgasGrid3GridButton1' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetSubscriptionMozgasPopup2'	}	],
	'launch.vidanetSubscriptionMozgasGrid2GridButton2' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetSubscriptionMozgasPopup1'	}	],
	'launch.vidanetSubscriptionMozgasGrid3GridButton2' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetSubscriptionMozgasPopup2'	}	],
	'launch.vidanetSubscriptionGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionGridRow6Button' : [	{ 		action: app.fn.openPage, 	}	],
	'launch.vidanetSubscriptionGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionMozgasGrid1Toggle1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMovementValue','Új']	}	],
	'launch.vidanetSubscriptionMozgasGrid1Toggle2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMovementValue','Migrált']	}	],
	'launch.vidanetSubscriptionMozgasGrid1Toggle3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMovementValue','Felmondott']	}	],
	'launch.vidanetSubscriptionMozgasPage_row_2' : [	{ 		action: app.fn.openPage, 	}	],
	'launch.vidanetSubscriptionWeightsGridTable_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y001']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	}	],
	'launch.vidanetSubscriptionWeightsPopUpGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	}	],
	'launch.vidanetSubscriptionWeightsGridTable_row_4' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y004']	}	],
	'launch.vidanetSubscriptionWeightsGridTable_row_3' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y003']	}	],
	'launch.vidanetSubscriptionWeightsGridTable_row_2' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y002']	}	],
	'launch.vidanetSubscriptionWeightsGridTable_row_5' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y005']	}	],
	'launch.vidanetSubscriptionWeightsGridTable_row_6' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y006']	}	],
	'launch.vidanetSubscriptionWeightsGridTable_row_7' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y007']	}	],
	'launch.vidanetSubscriptionWeightsGridTable_row_8' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y008']	}	],
	'launch.vidanetSubscriptionWeightsGridTable_row_9' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y009']	}	],
	'launch.vidanetSubscriptionWeightsGridTable_row_10' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y010']	}	],
	'launch.vidanetSubscriptionWeightsGridTable_row_11' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y011']	}	],
	'launch.vidanetSubscriptionWeightsGridTable_row_12' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y012']	}	],
	'launch.vidanetSubscriptionControlGridCellButton1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionControlGridRow2_Opened1','vidanetSubscriptionWeightsOpened1GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionWeightsGridTable','vidanetSubscriptionControlGridRow2']	}	],
	'launch.vidanetSubscriptionControlGridCellButton1_Opened1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionControlGridRow2','vidanetSubscriptionWeightsGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionControlGridRow2_Opened1','vidanetSubscriptionWeightsOpened1GridTable']	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTableButton2' : [	{ 		action: app.fn.showPopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.vidanetSubscriptionZaroSzint0MainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionZaroSzint0SideBar'	}	],
	'launch.vidanetSubscriptionZaroSzint0MainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0MainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0MainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint1Page'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y-1']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionAttekintesSzint0MainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionAttekintesSzint0SideBar'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0MainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0MainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0MainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1MainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionAttekintesSzint1SideBar'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1MainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1MainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1MainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridTable_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes2Value','vidanetSubscriptionAttekintesSzint1GridTable','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint2Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridTable_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint1Page'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes1Value','vidanetSubscriptionAttekintesSzint0GridTable','0','label']	}	],
	'launch.vidanetSubscriptionAttekintesSzint2MainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionAttekintesSzint2SideBar'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2MainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2MainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2MainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridTable_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes3Value','vidanetSubscriptionAttekintesSzint2GridTable','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint3Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3MainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionAttekintesSzint3SideBar'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3MainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3MainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3MainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridTable_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes4Value','vidanetSubscriptionAttekintesSzint3GridTable','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint4Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4MainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionAttekintesSzint4SideBar'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4MainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4MainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4MainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4GridTableHeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint3Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridTableHeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint2Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridTableHeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint1Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridTableHeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint0Page'	}	],
	'launch.vidanetSubscriptionZaroSzint1MainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionZaroSzint1SideBar'	}	],
	'launch.vidanetSubscriptionZaroSzint1MainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1MainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1MainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0Grid3Toggle' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid5','vidanetSubscriptionZaroSzint0GridTable5','vidanetSubscriptionZaroSzint0GridTable3','vidanetSubscriptionZaroSzint0GridTable3Y1']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0ButtonGrid3','vidanetSubscriptionZaroSzint0GridTableZart3']	}	],
	'launch.vidanetSubscriptionZaroTermekMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionZaroTermekSideBar'	}	],
	'launch.vidanetSubscriptionZaroTermekMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionZaroTermekMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionZaroTermekMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroTermekGridTable2HeaderButton' : [	{ 		action: app.fn.openPrevPage, 	}	],
	'launch.vidanetSubscriptionGrid2Toggle1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicSelectedSubscriptionToggle','KTV']	}	],
	'launch.vidanetSubscriptionGrid2Toggle2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicSelectedSubscriptionToggle','Internet']	}	],
	'launch.vidanetSubscriptionGrid2Toggle3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicSelectedSubscriptionToggle','Telefon']	}	],
	'launch.vidanetSubscriptionGrid2Toggle4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicSelectedSubscriptionToggle','UzletiNagyker']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroDropdown2','vidanetSubscriptionZaroSzint1GridTable2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint2Page'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y002']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y003']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y004']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y005']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y006']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y007']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y008']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y009']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y010']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y011']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y012']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroTermekPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridTableHeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y-1']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y002']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y003']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y004']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y005']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y006']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y007']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y008']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y009']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y010']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y011']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y012']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2MainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionZaroSzint2SideBar'	}	],
	'launch.vidanetSubscriptionZaroSzint2MainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionZaroSzint2MainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionZaroSzint2MainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint1Page'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y-1']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y002']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y003']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y004']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y005']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y006']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y007']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y008']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y009']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y010']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y011']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y012']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroDropdown3','vidanetSubscriptionZaroSzint2GridTable2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint3Page'	}	],
	'launch.vidanetSubscriptionMozgasGridTable_row_1' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasGrid4Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionMozgasPopup1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable3_row_0' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasPopupszerk'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['MozgasTermek','vidanetSubscriptionMozgasGridTable3','0','label']	}	],
	'launch.vidanetSubscriptionMozgasPopupszerkButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionMozgasPopup2'	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasPopupszerk'	}	],
	'launch.vidanetSubscriptionZaroSzint3MainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionZaroSzint3SideBar'	}	],
	'launch.vidanetSubscriptionZaroSzint3MainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionZaroSzint3MainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionZaroSzint3MainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint2Page'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroDropdown4','vidanetSubscriptionZaroSzint3GridTable2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y-1']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y002']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y003']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y004']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y005']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y006']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y007']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y008']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y009']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y010']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y011']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y012']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4MainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionZaroSzint4SideBar'	}	],
	'launch.vidanetSubscriptionZaroSzint4MainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionZaroSzint4MainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionZaroSzint4MainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint3Page'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroDropdown5','vidanetSubscriptionZaroSzint4GridTable2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint5Page'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y-1']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y002']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y003']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y004']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y005']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y006']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y007']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y008']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y009']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y010']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y011']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y012']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5MainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionZaroSzint5SideBar'	}	],
	'launch.vidanetSubscriptionZaroSzint5MainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionZaroSzint5MainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionZaroSzint5MainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y-1']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y002']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y003']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y004']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y005']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y006']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y007']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y008']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y009']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y010']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y011']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y012']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionMozgasGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionMozgasGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionMozgasGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetSubscriptionMozgasGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionMozgasGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionMozgasGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionMozgasGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionZaroTermekGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionZaroTermekGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionZaroTermekGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionZaroTermekGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionZaroTermekGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionZaroTermekGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4GridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4GridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4GridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4GridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4GridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4GridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionRiportMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionRiportSideBar'	}	],
	'launch.vidanetSubscriptionRiportMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionRiportMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionRiportMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionRiportMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionMainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionMozgasMainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionZaroSzint0MainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionZaroSzint1MainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionZaroSzint2MainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionZaroSzint3MainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionZaroSzint4MainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionZaroSzint5MainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0MainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1MainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2MainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3MainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4MainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionZaroTermekMainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetPlanDriverGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetPlanDriverGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetPlanDriverGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetPlanDriverGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetPlanDriverGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetPlanDriverGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetPlanDriverGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionRiportGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionRiportGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionRiportGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetSubscriptionRiportGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionRiportGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionRiportGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionRiportGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionMozgasGridTable01_row_2' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasGridTable01_row_3' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasGridTable01_row_4' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasGridTable01_row_5' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasGridTable01_row_6' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasGridTable01_row_7' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasGridTable01_row_8' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasGridTable01_row_9' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasGridTable01_row_10' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasGridTable01_row_11' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasGridTable01_row_12' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasGridTable01_row_13' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionAttekintesMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionAttekintesSideBar'	}	],
	'launch.vidanetSubscriptionAttekintesMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetSubscriptionAttekintesMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionMozgasPage'	}	],
	'launch.vidanetSubscriptionAttekintesMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionAttekintesMainContainerGridCell2GridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionRiport'	}	],
	'launch.vidanetSubscriptionAttekintesGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetSubscriptionAttekintesGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetSubscriptionAttekintesGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetSubscriptionAttekintesGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetSubscriptionAttekintesGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetSubscriptionAttekintesGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionAttekintesGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionAttekintesGridTable_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint0Page'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes0Value','vidanetSubscriptionAttekintesGridTable','0','label']	}	],
	'launch.vidanetServiceCostMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetServiceCostSideBar'	}	],
	'launch.vidanetServiceCostMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetServiceCostSideBar'	}	],
	'launch.vidanetServiceCostGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetServiceCostGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetServiceCostGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetServiceCostGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetServiceCostGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetServiceCostGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetServiceCostGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetServiceCostInputMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetServiceCostInputSideBar'	}	],
	'launch.vidanetServiceCostInputGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetServiceCostInputGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetServiceCostInputGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetServiceCostInputGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetServiceCostInputGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetServiceCostInputGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetServiceCostInputMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetServiceCostInputSideBar'	}	],
	'launch.vidanetServiceCostMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostInputPage'	}	],
	'launch.vidanetServiceCostInputMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetSubscriptionRiportGrid1Cell1Toggle1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicDateValue','Havi']	}	],
	'launch.vidanetSubscriptionRiportGrid1Cell2Toggle2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicDateValue','Eves']	}	],
	'launch.vidanetServiceCostGridTableButton1' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetServiceCostGridTable'	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostGridTable2']	}	],
	'launch.vidanetServiceCostGridTable2HeaderCell1Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostGridTable2']	}	],
	'launch.vidanetServiceCostGridTable_row_0' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetServiceCostGridTable2'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetServiceCostGridTable'	}	],
	'launch.vidanetServiceCostGrid1Cell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y0']	}	],
	'launch.vidanetServiceCostGrid1RowCell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y1']	}	],
	'launch.vidanetServiceCostGrid1Row2Cell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','01']	}	],
	'launch.vidanetServiceCostGrid1Row2Cell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','02']	}	],
	'launch.vidanetServiceCostGrid1Row2Cell3Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','03']	}	],
	'launch.vidanetServiceCostGrid1Row2Cell4Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','04']	}	],
	'launch.vidanetServiceCostGrid1Row2Cell12Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','12']	}	],
	'launch.vidanetServiceCostGrid1Row2Cell11Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','11']	}	],
	'launch.vidanetServiceCostGrid1Row2Cell10Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','10']	}	],
	'launch.vidanetServiceCostGrid1Row2Cell9Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','09']	}	],
	'launch.vidanetServiceCostGrid1Row2Cell8Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','08']	}	],
	'launch.vidanetServiceCostGrid1Row2Cell7Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','07']	}	],
	'launch.vidanetServiceCostGrid1Row2Cell6Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','06']	}	],
	'launch.vidanetServiceCostGrid1Row2Cell5Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','05']	}	],
	'launch.vidanetServiceCostMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostKarbantartasiDijakPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetServiceCostKarbantartasiDijakSideBar'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostInputPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostKarbantartasiDijjakPage'	}	],
	'launch.vidanetServiceCostInputMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostKarbantartasiDijakPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakButtonGridCellButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetServiceCostKarbantartasiDijakGridTable1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetServiceCostKarbantartasiDijakGridTable2'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetServiceCostKarbantartasiDijakButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetServiceCostKarbantartasiDijakButtonGrid2'	}	],
	'launch.vidanetSubscriptionZaroSzint1MainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionZaroSzint2MainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionZaroSzint3MainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionZaroSzint4MainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionZaroSzint5MainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionZaroTermekMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0MainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1MainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2MainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4MainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3MainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakButtonGrid2CellButton' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetServiceCostKarbantartasiDijakGridTable1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetServiceCostKarbantartasiDijakButtonGrid'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostKarbantartasiDijakButtonGrid2','vidanetServiceCostKarbantartasiDijakGridTable2']	}	],
	'launch.vidanetServiceCostKarbantartasiDijakButtonGrid3Cell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetServiceCostKarbantartasiDijakGridTable1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetServiceCostKarbantartasiDijakGridTable3'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetServiceCostKarbantartasiDijakButtonGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetServiceCostKarbantartasiDijakButtonGrid3'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakButtonGridCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostKarbantartasiDijakButtonGrid','vidanetServiceCostKarbantartasiDijakGridTable1']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostKarbantartasiDijakButtonGrid3','vidanetServiceCostKarbantartasiDijakGridTable3']	}	],
	'launch.vidanetMainMenuGridRow3Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetMainMenuGridRow3Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetMarginPlanAttekintesMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanAttekintesSideBar'	}	],
	'launch.vidanetMarginPlanAttekintesMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanInput'	}	],
	'launch.vidanetMainMenuGridRow1Button6' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetMarginPlanAttekintesGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetMarginPlanAttekintesGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetMarginPlanAttekintesGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetMarginPlanAttekintesGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetMarginPlanAttekintesGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetMarginPlanAttekintesGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetServiceCostMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostOtherPage'	}	],
	'launch.vidanetServiceCostInputMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostOtherPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostOtherPage'	}	],
	'launch.vidanetMarginPlanInputMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputSideBar'	}	],
	'launch.vidanetMarginPlanInputMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetMarginPlanInputGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetMarginPlanInputGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetMarginPlanInputGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetMarginPlanInputGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetMarginPlanInputGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetMarginPlanInputGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetMarginPlanInputButtonGrid1RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputGridTable2'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetMarginPlanInputGridTableSima','vidanetMarginPlanInputButtonGrid1']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputButtonGrid2'	}	],
	'launch.vidanetMarginPlanInputButtonGrid1RowCell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputGridTable1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetMarginPlanInputGridTableSima'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputButtonGrid3'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetMarginPlanInputButtonGrid1'	}	],
	'launch.vidanetMarginPlanInputButtonGrid2RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputButtonGrid1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetMarginPlanInputGridTable2','vidanetMarginPlanInputButtonGrid2']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputGridTableSima'	}	],
	'launch.vidanetMarginPlanInputButtonGrid3RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputGridTable2'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetMarginPlanInputGridTable1','vidanetMarginPlanInputButtonGrid3']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputButtonGrid2'	}	],
	'launch.vidanetMarginPlanInputButtonGrid3RowCell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputGridTableSima'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetMarginPlanInputButtonGrid3'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputButtonGrid1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetMarginPlanInputGridTable1'	}	],
	'launch.vidanetMarginPlanInputButtonGrid4RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputGridTable5'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetMarginPlanInputButtonGrid4','vidanetMarginPlanInputGridTable4']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputButtonGrid5'	}	],
	'launch.vidanetMarginPlanInputButtonGrid4RowCell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputGridTable6'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetMarginPlanInputGridTable4'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputButtonGrid6'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetMarginPlanInputButtonGrid4'	}	],
	'launch.vidanetMarginPlanInputButtonGrid5RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputButtonGrid4'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetMarginPlanInputGridTable5','vidanetMarginPlanInputButtonGrid5']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputGridTable4'	}	],
	'launch.vidanetMarginPlanInputButtonGrid6RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputButtonGrid5'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetMarginPlanInputButtonGrid6','vidanetMarginPlanInputGridTable6']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputGridTable5'	}	],
	'launch.vidanetMarginPlanInputButtonGrid6RowCell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputGridTable4'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetMarginPlanInputButtonGrid6'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanInputButtonGrid4'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetMarginPlanInputGridTable6'	}	],
	'launch.vidanetServiceCostInputGrid3RowCell1Button1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostInputGridTable0','vidanetServiceCostInputGridTable1','vidanetServiceCostInputGrid3Row2','vidanetServiceCostInputGrid3Row2Cell2_2','vidanetServiceCostInputGrid3Row2Cell1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostInputGrid3Row','vidanetServiceCostInputGridTable2','vidanetServiceCostInputGridTable2fejlec','vidanetServiceCostInputGrid3Row2Cell1Button2020','vidanetServiceCostInputGrid3Row2Cell2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostInputGrid3Row2Cell1_1','vidanetServiceCostInputGrid3Row2Cell3_1']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostInputGrid3Row2Cell3']	}	],
	'launch.vidanetServiceCostInputGrid3RowCell2Button1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostInputGridTable3','vidanetServiceCostInputGridTable3fejlec','vidanetServiceCostInputGrid3Row2','vidanetServiceCostInputGrid3Row2Cell1Button2020','vidanetServiceCostInputGrid3Row2Cell2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostInputGrid3Row','vidanetServiceCostInputGridTable2','vidanetServiceCostInputGridTable2fejlec','vidanetServiceCostInputGrid3Row2Cell2_2','vidanetServiceCostInputGrid3Row2Cell1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostInputGrid3Row2Cell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostInputGrid3Row2Cell1_1','vidanetServiceCostInputGrid3Row2Cell3_1','vidanetServiceCostInputGrid3Row2Cell1_1Button2020']	}	],
	'launch.vidanetServiceCostOtherMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetServiceCostOtherSideBar'	}	],
	'launch.vidanetServiceCostOtherMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetServiceCostOtherMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostInputPage'	}	],
	'launch.vidanetServiceCostOtherMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostKarbantartasiDijakPage'	}	],
	'launch.vidanetServiceCostOtherMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostOtherPage'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetServiceCostOtherSideBar'	}	],
	'launch.vidanetServiceCostOtherGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetServiceCostOtherGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetServiceCostOtherGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetServiceCostOtherGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetServiceCostOtherGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetServiceCostOtherGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetServiceCostOtherGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetServiceCostOtherButtonGridCellButton' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostOtherGridTable1','vidanetServiceCostOtherButtonGrid']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostOtherGridTable2','vidanetServiceCostOtherButtonGrid2']	}	],
	'launch.vidanetServiceCostOtherButtonGridCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostOtherButtonGrid','vidanetServiceCostOtherGridTable1']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostOtherButtonGrid3','vidanetServiceCostOtherGridTable3']	}	],
	'launch.vidanetServiceCostOtherButtonGrid2CellButton' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostOtherButtonGrid2','vidanetServiceCostOtherGridTable2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostOtherGridTable1','vidanetServiceCostOtherButtonGrid']	}	],
	'launch.vidanetServiceCostOtherButtonGrid3Cell3Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostOtherGridTable1','vidanetServiceCostOtherButtonGrid']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostOtherGridTable3','vidanetServiceCostOtherButtonGrid3']	}	],
	'launch.vidanetServiceCostInputGrid3Row2Cell2Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostInputGridTable2','vidanetServiceCostInputGridTable2fejlec','vidanetServiceCostInputGrid3Row']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostInputGrid3Row2','vidanetServiceCostInputGridTable0','vidanetServiceCostInputGridTable3','vidanetServiceCostInputGridTable1','vidanetServiceCostInputGridTable3fejlec']	}	],
	'launch.vidanetServiceCostInputGrid3Row2Cell1Button2020' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostInputGridTable0','vidanetServiceCostInputGridTable1','vidanetServiceCostInputGrid3Row2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostInputGrid3Row','vidanetServiceCostInputGridTable3','vidanetServiceCostInputGridTable3fejlec','vidanetServiceCostInputGrid3Row2Cell1Button2020']	}	],
	'launch.vidanetOtherCostMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostSideBar'	}	],
	'launch.vidanetOtherCostMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostHitel'	}	],
	'launch.vidanetOtherCostMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostTelefonBetaPage'	}	],
	'launch.vidanetOtherCostMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKotber'	}	],
	'launch.vidanetMainMenuGridRow3Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetOtherCostGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetOtherCostGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetOtherCostGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetOtherCostGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherCostGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetOtherCostGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetOtherCostHitelMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostHitelSideBar'	}	],
	'launch.vidanetOtherCostHitelMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetOtherCostHitelMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostTelefonBetaPage'	}	],
	'launch.vidanetOtherCostHitelMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKotber'	}	],
	'launch.vidanetOtherCostHitelGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetOtherCostHitelGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetOtherCostHitelGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetOtherCostHitelGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherCostHitelGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetOtherCostHitelGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetOtherCostMainContainerGridCell2GridRow1Cell7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKozmuado'	}	],
	'launch.vidanetOtherCostMainContainerGridCell2GridRow1Cell6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostGepjarmu'	}	],
	'launch.vidanetOtherCostMainContainerGridCell2GridRow1Cell5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPostai'	}	],
	'launch.vidanetOtherCostHitelMainContainerGridCell2GridRow1Cell7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKozmuado'	}	],
	'launch.vidanetOtherCostHitelMainContainerGridCell2GridRow1Cell6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostGepjarmu'	}	],
	'launch.vidanetOtherCostHitelMainContainerGridCell2GridRow1Cell5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPostai'	}	],
	'launch.vidanetOtherCostHitelButtonGridCellButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostHitelGridTable1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostHitelGridTable2'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostHitelButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostHitelButtonGrid2'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostHitelGridTableInput1']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostHitelGridTableInput2']	}	],
	'launch.vidanetOtherCostHitelButtonGridCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostHitelButtonGrid','vidanetOtherCostHitelGridTable1','vidanetOtherCostHitelGridTableInput1']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetvidanetOtherCostHitelButtonGrid3','vidanetOtherCostHitelGridTable3','vidanetOtherCostHitelGridTableInput3']	}	],
	'launch.vidanetOtherCostHitelButtonGrid2CellButton' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostHitelButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostHitelGridTable1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostHitelButtonGrid2','vidanetOtherCostHitelGridTable2','vidanetOtherCostHitelGridTableInput2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostHitelGridTableInput1']	}	],
	'launch.vidanetvidanetOtherCostHitelButtonGrid3Cell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostHitelGridTable1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostHitelGridTable3'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostHitelButtonGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetvidanetOtherCostHitelButtonGrid3'	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostHitelGridTableInput1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostHitelGridTableInput3']	}	],
	'launch.vidanetOtherCostTelefonMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonSideBar'	}	],
	'launch.vidanetOtherCostTelefonMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostHitel'	}	],
	'launch.vidanetOtherCostTelefonMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKotber'	}	],
	'launch.vidanetOtherCostTelefonMainContainerGridCell2GridRow1Cell5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPostai'	}	],
	'launch.vidanetOtherCostTelefonMainContainerGridCell2GridRow1Cell6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostGepjarmu'	}	],
	'launch.vidanetOtherCostTelefonMainContainerGridCell2GridRow1Cell7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKozmuado'	}	],
	'launch.vidanetOtherCostTelefonGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetOtherCostTelefonGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetOtherCostTelefonGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetOtherCostTelefonGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherCostTelefonGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetOtherCostTelefonGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetOtherCostTelefonMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetvidanetOtherCostHitelButtonGrid3Button1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostHitelButtonGrid2','vidanetOtherCostHitelGridTable2','vidanetOtherCostHitelGridTableInput2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetvidanetOtherCostHitelButtonGrid3','vidanetOtherCostHitelGridTable3','vidanetOtherCostHitelGridTableInput3']	}	],
	'launch.vidanetOtherCostGrid1Cell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y0']	}	],
	'launch.vidanetOtherCostGrid1RowCell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y1']	}	],
	'launch.vidanetOtherCostGrid1Row2Cell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','01']	}	],
	'launch.vidanetOtherCostGrid1Row2Cell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','02']	}	],
	'launch.vidanetOtherCostGrid1Row2Cell3Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','03']	}	],
	'launch.vidanetOtherCostGrid1Row2Cell4Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','04']	}	],
	'launch.vidanetOtherCostGrid1Row2Cell5Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','05']	}	],
	'launch.vidanetOtherCostGrid1Row2Cell6Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','06']	}	],
	'launch.vidanetOtherCostGrid1Row2Cell7Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','07']	}	],
	'launch.vidanetOtherCostGrid1Row2Cell8Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','08']	}	],
	'launch.vidanetOtherCostGrid1Row2Cell9Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','09']	}	],
	'launch.vidanetOtherCostGrid1Row2Cell10Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','10']	}	],
	'launch.vidanetOtherCostGrid1Row2Cell11Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','11']	}	],
	'launch.vidanetOtherCostGrid1Row2Cell12Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','12']	}	],
	'launch.vidanetOtherCostGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetOtherCostKotberMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostKotberSideBar'	}	],
	'launch.vidanetOtherCostKotberMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostHitel'	}	],
	'launch.vidanetOtherCostKotberMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostTelefonBetaPage'	}	],
	'launch.vidanetOtherCostKotberMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKotberek'	}	],
	'launch.vidanetOtherCostKotberMainContainerGridCell2GridRow1Cell5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPostai'	}	],
	'launch.vidanetOtherCostKotberMainContainerGridCell2GridRow1Cell6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostGepjarmu'	}	],
	'launch.vidanetOtherCostKotberMainContainerGridCell2GridRow1Cell7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKozmuado'	}	],
	'launch.vidanetOtherCostKotberGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetOtherCostKotberGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetOtherCostKotberGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetOtherCostKotberGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherCostKotberGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetOtherCostKotberGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetOtherCostKotberGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetOtherCostKotberButtonGridCellButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostKotberGridTable1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostKotberGridTable2'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostKotberButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostKotberButtonGrid2'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostKotberGridTableInput1']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostKotberGridTableInput2']	}	],
	'launch.vidanetOtherCostKotberButtonGridCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostKotberButtonGrid','vidanetOtherCostKotberGridTable1','vidanetOtherCostKotberGridTableInput1']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetvidanetOtherCostKotberButtonGrid3','vidanetOtherCostKotberGridTable3','vidanetOtherCostKotberGridTableInput3']	}	],
	'launch.vidanetOtherCostKotberButtonGrid2CellButton' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostKotberButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostKotberGridTable1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostKotberButtonGrid2','vidanetOtherCostKotberGridTable2','vidanetOtherCostKotberGridTableInput2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostKotberGridTableInput1']	}	],
	'launch.vidanetvidanetOtherCostKotberButtonGrid3Button1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostKotberButtonGrid2','vidanetOtherCostKotberGridTable2','vidanetOtherCostKotberGridTableInput2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetvidanetOtherCostKotberButtonGrid3','vidanetOtherCostKotberGridTable3','vidanetOtherCostKotberGridTableInput3']	}	],
	'launch.vidanetvidanetOtherCostKotberButtonGrid3Cell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostKotberGridTable1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostKotberGridTable3'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostKotberButtonGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetvidanetOtherCostKotberButtonGrid3'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostKotberGridTableInput3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostKotberGridTableInput1']	}	],
	'launch.vidanetOtherCostTelefonButtonGridCellButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostTelefonButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonGridTable2'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostTelefonGridTable1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonButtonGrid2'	}	],
	'launch.vidanetOtherCostTelefonButtonGrid2CellButton' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonGridTable1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostTelefonGridTable2','vidanetOtherCostTelefonButtonGrid2']	}	],
	'launch.vidanetOtherCostTelefonButtonGrid3Button1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostTelefonButtonGrid2','vidanetOtherCostTelefonGridTable2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostTelefonGridTable3','vidanetOtherCostTelefonButtonGrid3']	}	],
	'launch.vidanetOtherCostTelefonButtonGrid3Cell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonButtonGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostTelefonButtonGrid3'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonGridTable1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostTelefonGridTable3'	}	],
	'launch.vidanetOtherCostPostaiMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostPostaiSideBar'	}	],
	'launch.vidanetOtherCostPostaiMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetOtherCostPostaiMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostTelefonBetaPage'	}	],
	'launch.vidanetOtherCostPostaiMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKotber'	}	],
	'launch.vidanetOtherCostPostaiMainContainerGridCell2GridRow1Cell5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPostai'	}	],
	'launch.vidanetOtherCostPostaiMainContainerGridCell2GridRow1Cell6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostGepjarmu'	}	],
	'launch.vidanetOtherCostPostaiMainContainerGridCell2GridRow1Cell7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKozmuado'	}	],
	'launch.vidanetOtherCostPostaiGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetOtherCostPostaiGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetOtherCostPostaiGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetOtherCostPostaiGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherCostPostaiGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetOtherCostPostaiGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetServiceCostOtherButtonGrid3CellButton0' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostOtherGridTable3','vidanetServiceCostOtherButtonGrid3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostOtherGridTable2','vidanetServiceCostOtherButtonGrid2']	}	],
	'launch.vidanetOtherCostGepjarmuMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostGepjarmuSideBar'	}	],
	'launch.vidanetOtherCostGepjarmuMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetOtherCostGepjarmuMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostTelefonBetaPage'	}	],
	'launch.vidanetOtherCostGepjarmuMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKotber'	}	],
	'launch.vidanetOtherCostGepjarmuMainContainerGridCell2GridRow1Cell5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPostai'	}	],
	'launch.vidanetOtherCostGepjarmuMainContainerGridCell2GridRow1Cell6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostGepjarmu'	}	],
	'launch.vidanetOtherCostGepjarmuMainContainerGridCell2GridRow1Cell7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKozmuado'	}	],
	'launch.vidanetOtherCostGepjarmuButtonGridCellButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostGepjarmuButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostGepjarmuButtonGrid2'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostGepjarmuGridTable1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostGepjarmuGridTable2'	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostGepjarmuGridTableInput2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostGepjarmuGridTableInput1']	}	],
	'launch.vidanetOtherCostGepjarmuButtonGridCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostGepjarmuButtonGrid','vidanetOtherCostGepjarmuGridTable1','vidanetOtherCostGepjarmuGridTableInput1']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostGepjarmuButtonGrid3','vidanetOtherCostGepjarmuGridTable3','vidanetOtherCostGepjarmuGridTableInput3']	}	],
	'launch.vidanetOtherCostGepjarmuGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetOtherCostGepjarmuGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetOtherCostGepjarmuGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetOtherCostGepjarmuGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherCostGepjarmuGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetOtherCostGepjarmuGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetOtherCostGepjarmuButtonGrid2CellButton' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostGepjarmuGridTable1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostGepjarmuButtonGrid'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostGepjarmuButtonGrid2','vidanetOtherCostGepjarmuGridTable2','vidanetOtherCostGepjarmuGridTableInput2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostGepjarmuGridTableInput1']	}	],
	'launch.vidanetOtherCostGepjarmuButtonGrid3Button1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostGepjarmuButtonGrid2','vidanetOtherCostGepjarmuGridTable2','vidanetOtherCostGepjarmuGridTableInput2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostGepjarmuButtonGrid3','vidanetOtherCostGepjarmuGridTable3','vidanetOtherCostGepjarmuGridTableInput3']	}	],
	'launch.vidanetOtherCostGepjarmuButtonGrid3Cell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostGepjarmuButtonGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostGepjarmuButtonGrid3'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostGepjarmuGridTable1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostGepjarmuGridTable3'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostGepjarmuGridTableInput3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostGepjarmuGridTableInput1']	}	],
	'launch.vidanetOtherCostKotberMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetOtherCostPostaiButtonGridCellButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostPostaiButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostPostaiButtonGrid2'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostPostaiGridTable1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostPostaiGridTable2'	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostPostaiGridTableInput2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostPostaiGridTableInput1']	}	],
	'launch.vidanetOtherCostPostaiButtonGridCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostPostaiButtonGrid','vidanetOtherCostPostaiGridTable1','vidanetOtherCostPostaiGridTableInput1']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostPostaiButtonGrid3','vidanetOtherCostPostaiGridTable3','vidanetOtherCostPostaiGridTableInput3']	}	],
	'launch.vidanetOtherCostPostaiButtonGrid2CellButton' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostPostaiButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostPostaiGridTable1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostPostaiButtonGrid2','vidanetOtherCostPostaiGridTable2','vidanetOtherCostPostaiGridTableInput2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostPostaiGridTableInput1']	}	],
	'launch.vidanetOtherCostPostaiButtonGrid3Button1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostPostaiButtonGrid2','vidanetOtherCostPostaiGridTable2','vidanetOtherCostPostaiGridTableInput2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostPostaiButtonGrid3','vidanetOtherCostPostaiGridTable3','vidanetOtherCostPostaiGridTableInput3']	}	],
	'launch.vidanetOtherCostPostaiButtonGrid3Cell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostPostaiButtonGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostPostaiButtonGrid3'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostPostaiGridTable1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostPostaiGridTable3'	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostPostaiGridTableInput1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostPostaiGridTableInput3']	}	],
	'launch.vidanetOtherCostPostaiMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostHitel'	}	],
	'launch.vidanetOtherCostKozmuadoMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetOtherCostKozmuadoMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostHitel'	}	],
	'launch.vidanetOtherCostKozmuadoMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostTelefonBetaPage'	}	],
	'launch.vidanetOtherCostKozmuadoMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKotber'	}	],
	'launch.vidanetOtherCostKozmuadoMainContainerGridCell2GridRow1Cell5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPostai'	}	],
	'launch.vidanetOtherCostKozmuadoMainContainerGridCell2GridRow1Cell6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostGepjarmu'	}	],
	'launch.vidanetOtherCostKozmuadoMainContainerGridCell2GridRow1Cell7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKozmuado'	}	],
	'launch.vidanetOtherCostKozmuadoGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetOtherCostKozmuadoGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetOtherCostKozmuadoGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetOtherCostKozmuadoGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherCostKozmuadoGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetOtherCostKozmuadoGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetOtherCostKozmuadoGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetMarginPlanAttekintesButtonGridCellButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetMarginPlanAttekintesButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanAttekintesButtonGrid2'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetMarginPlanAttekintesGridTable1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanAttekintesGridTable2'	}	],
	'launch.vidanetMarginPlanAttekintesButtonGridCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetMarginPlanAttekintesGridTable1','vidanetMarginPlanAttekintesButtonGrid']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetMarginPlanAttekintesButtonGrid3','vidanetMarginPlanAttekintesGridTable3']	}	],
	'launch.vidanetMarginPlanAttekintesButtonGrid2CellButton' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanAttekintesGridTable1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanAttekintesButtonGrid'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetMarginPlanAttekintesButtonGrid2','vidanetMarginPlanAttekintesGridTable2']	}	],
	'launch.vidanetMarginPlanAttekintesButtonGrid3Button1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetMarginPlanAttekintesGridTable2','vidanetMarginPlanAttekintesButtonGrid2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetMarginPlanAttekintesButtonGrid3','vidanetMarginPlanAttekintesGridTable3']	}	],
	'launch.vidanetMarginPlanAttekintesButtonGrid3Cell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanAttekintesGridTable1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetMarginPlanAttekintesGridTable3'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetMarginPlanAttekintesButtonGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetMarginPlanAttekintesButtonGrid3'	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTable_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y101']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTable_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y102']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTable_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y103']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTable_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y104']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTable_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y105']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTable_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y106']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTable_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y107']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTable_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y108']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTable_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y109']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTable_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y110']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTable_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y111']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionWeightsOpened1GridTable_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['WeightsDate','Y112']	},
	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y-1']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y002']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y003']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y004']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y005']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y006']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y007']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y008']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y009']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y010']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y011']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y012']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3','0','label']	}	],
	'launch.vidanetSubscriptionMozgasPopupszerkButton2' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasPopupszerk'	}	],
	'launch.vidanetSubscriptionMozgasFlagPopupButton1' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetSubscriptionMozgasFlagPopupButton2' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetSubscriptionMozgasFlagPopup'	}	],
	'launch.vidanetMainMenuGridRow1Button5' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherRevenueGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetOtherRevenueGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetOtherRevenueGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetOtherRevenueGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherRevenueGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetOtherRevenueGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetOtherRevenueGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetOtherRevenueGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetOtherRevenueModemContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemSideBar'	}	],
	'launch.vidanetOtherRevenueModemContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueModem'	}	],
	'launch.vidanetOtherRevenueModemContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueEladas'	}	],
	'launch.vidanetOtherRevenueGridModemRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetOtherRevenueGridModemRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetOtherRevenueGridModemRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetOtherRevenueGridModemRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherRevenueGridModemRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetOtherRevenueGridModemRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetOtherRevenueGridModemRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetOtherRevenueGridModemRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetOtherRevenueModemButtonGrid1RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid2'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherRevenueModemGridTable1','vidanetOtherRevenueModemButtonGrid1']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemGridTable2'	}	],
	'launch.vidanetOtherRevenueModemButtonGrid1RowCell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid3'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemGridTable3'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueModemGridTable1'	}	],
	'launch.vidanetOtherRevenueModemButtonGrid2RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemGridTable1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherRevenueModemButtonGrid2','vidanetOtherRevenueModemGridTable2']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid1'	}	],
	'launch.vidanetOtherRevenueModemButtonGrid3RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemGridTable2'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherRevenueModemButtonGrid3','vidanetOtherRevenueModemGridTable3']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid2'	}	],
	'launch.vidanetOtherRevenueModemButtonGrid3RowCell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemGridTable1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid3'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueModemGridTable3'	}	],
	'launch.vidanetOtherRevenueModemButtonGrid4RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid5'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherRevenueModemButtonGrid4','vidanetOtherRevenueModemGridTable4']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemGridTable5'	}	],
	'launch.vidanetOtherRevenueModemButtonGrid4RowCell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemGridTable6'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid4'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid6'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueModemGridTable4'	}	],
	'launch.vidanetOtherRevenueModemButtonGrid5RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemGridTable4'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherRevenueModemButtonGrid5','vidanetOtherRevenueModemGridTable5']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid4'	}	],
	'launch.vidanetOtherRevenueModemButtonGrid6RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid5'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherRevenueModemGridTable6','vidanetOtherRevenueModemButtonGrid6']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemGridTable5'	}	],
	'launch.vidanetOtherRevenueModemButtonGrid6RowCell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid4'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueModemButtonGrid6'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueModemGridTable4'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueModemGridTable6'	}	],
	'launch.vidanetOtherRevenueModemContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherRevenueAttekintoContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueSideBar'	}	],
	'launch.vidanetOtherRevenueAttekintoContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherRevenueAttekintoContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueModem'	}	],
	'launch.vidanetOtherRevenueAttekintoContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueEladas'	}	],
	'launch.vidanetOtherRevenueEladasContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasSideBar'	}	],
	'launch.vidanetOtherRevenueEladasContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherRevenueEladasContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueModem'	}	],
	'launch.vidanetOtherRevenueEladasContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueEladas'	}	],
	'launch.vidanetOtherRevenueEladasGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetOtherRevenueEladasGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetOtherRevenueEladasGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetOtherRevenueEladasGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherRevenueEladasGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetOtherRevenueEladasGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetOtherRevenueEladasGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetOtherRevenueEladasGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetOtherRevenueEladasButtonGrid1RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid2'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherRevenueEladasGridTable1','vidanetOtherRevenueEladasButtonGrid1']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasGridTable2'	}	],
	'launch.vidanetOtherRevenueEladasButtonGrid1RowCell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid3'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasGridTable3'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueEladasGridTable1'	}	],
	'launch.vidanetOtherRevenueEladasButtonGrid2RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasGridTable1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherRevenueEladasButtonGrid2','vidanetOtherRevenueEladasGridTable2']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid1'	}	],
	'launch.vidanetOtherRevenueEladasButtonGrid3RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasGridTable2'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherRevenueEladasButtonGrid3','vidanetOtherRevenueEladasGridTable3']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid2'	}	],
	'launch.vidanetOtherRevenueEladasButtonGrid3RowCell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasGridTable1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid3'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueEladasGridTable3'	}	],
	'launch.vidanetMarginPlanAttekintesGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetMarginPlanInputGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetServiceCostInputGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherCostHitelGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetOtherCostTelefonGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetOtherCostPostaiGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetOtherCostGepjarmuGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetOtherCostKozmuadoMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostKozmuadoSideBar'	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridCell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y0']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRowCell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y1']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRow2Cell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','01']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRow2Cell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','02']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRow2Cell3Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','03']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRow2Cell4Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','04']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRow2Cell5Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','05']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRow2Cell6Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','06']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRow2Cell7Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','07']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRow2Cell8Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','08']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRow2Cell9Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','09']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRow2Cell10Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','10']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRow2Cell11Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','11']	}	],
	'launch.vidanetOtherRevenueAttekintoToogleGridRow2Cell12Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','12']	}	],
	'launch.vidanetPlanDriverMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetPlanDriverSideBar'	}	],
	'launch.vidanetPlanDriverSideBarGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetPlanDriverSideBarGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetPlanDriverSideBarGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetPlanDriverSideBarGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetPlanDriverSideBarGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetPlanDriverSideBarGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetPlanDriverSideBarGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetPlanDriverButtonGrid4RowCell2Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetPlanDriverGridTableOpenedIncome2020','vidanetPlanDriverButtonGrid5']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetPlanDriverGridTable1','vidanetPlanDriverButtonGrid4']	}	],
	'launch.vidanetPlanDriverButtonGrid4RowCell3Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetPlanDriverGridTableOpenedIncome2021','vidanetPlanDriverButtonGrid6']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetPlanDriverGridTable1','vidanetPlanDriverButtonGrid4']	}	],
	'launch.vidanetPlanDriverButtonGrid5RowCell2Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetPlanDriverButtonGrid4','vidanetPlanDriverGridTable1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetPlanDriverGridTableOpenedIncome2020','vidanetPlanDriverButtonGrid5']	}	],
	'launch.vidanetPlanDriverButtonGrid6RowCell2Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetPlanDriverGridTableOpenedIncome2020','vidanetPlanDriverButtonGrid5']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetPlanDriverButtonGrid6','vidanetPlanDriverGridTableOpenedIncome2021']	}	],
	'launch.vidanetPlanDriverButtonGrid6RowCell3Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetPlanDriverButtonGrid4','vidanetPlanDriverGridTable1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetPlanDriverButtonGrid6','vidanetPlanDriverGridTableOpenedIncome2021']	}	],
	'launch.vidanetPlanDriverButtonGrid7RowCell2Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetPlanDriverButtonGrid8','vidanetPlanDriverGridTableOpenedFee2020']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetPlanDriverButtonGrid7','vidanetPlanDriverGridTableFee']	}	],
	'launch.vidanetPlanDriverButtonGrid7RowCell3Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetPlanDriverButtonGrid9','vidanetPlanDriverGridTableOpenedFee2021']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetPlanDriverButtonGrid7','vidanetPlanDriverGridTableFee']	}	],
	'launch.vidanetPlanDriverButtonGrid8RowCell2Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetPlanDriverButtonGrid7','vidanetPlanDriverGridTableFee']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetPlanDriverGridTableOpenedFee2020','vidanetPlanDriverButtonGrid8']	}	],
	'launch.vidanetPlanDriverButtonGrid9RowCell2Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetPlanDriverGridTableOpenedFee2020','vidanetPlanDriverButtonGrid8']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetPlanDriverButtonGrid9','vidanetPlanDriverGridTableOpenedFee2021']	}	],
	'launch.vidanetPlanDriverButtonGrid9RowCell3Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetPlanDriverButtonGrid7','vidanetPlanDriverGridTableFee']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetPlanDriverButtonGrid9','vidanetPlanDriverGridTableOpenedFee2021']	}	],
	'launch.vidanetMarginPlanAttekintesToggleGridCell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicValue','Revenue']	}	],
	'launch.vidanetMarginPlanAttekintesToggleGridRowCell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicValue','Cost']	}	],
	'launch.vidanetOtherRevenueEladasButtonGrid4RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid5'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherRevenueEladasGridTable4','vidanetOtherRevenueEladasButtonGrid4']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasGridTable5'	}	],
	'launch.vidanetOtherRevenueEladasButtonGrid4RowCell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid6'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid4'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasGridTable6'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueEladasGridTable4'	}	],
	'launch.vidanetOtherRevenueEladasButtonGrid5RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasGridTable4'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherRevenueEladasButtonGrid5','vidanetOtherRevenueEladasGridTable5']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid4'	}	],
	'launch.vidanetOtherRevenueEladasButtonGrid6RowCell2Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasGridTable5'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherRevenueEladasButtonGrid6','vidanetOtherRevenueEladasGridTable6']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid5'	}	],
	'launch.vidanetOtherRevenueEladasButtonGrid6RowCell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasGridTable4'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid6'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherRevenueEladasButtonGrid4'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherRevenueEladasGridTable6'	}	],
	'launch.vidanetSubscriptionWeightsPopUp2GridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'launch.vidanetSubscriptionMozgasGrid2GridButton1' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetSubscriptionMozgasPopup1'	}	],
	'launch.vidanetSubscriptionMozgasButtonGrid1RowCell2Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionMozgasGridTable','vidanetSubscriptionMozgasGridTable00','vidanetSubscriptionMozgasGridTable01','vidanetSubscriptionMozgasButtonGrid2','vidanetSubscriptionMozgasGridTable2Y0']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionMozgasGridTableZart0','vidanetSubscriptionMozgasButtonGrid1','vidanetSubscriptionMozgasGridTable2','vidanetSubscriptionMozgasGridTable3']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionMozgasGridTable3Y0'	}	],
	'launch.vidanetSubscriptionMozgasButtonGrid1RowCell3Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionMozgasGridTable20','vidanetSubscriptionMozgasGridTable21','vidanetSubscriptionMozgasGridTable22','vidanetSubscriptionMozgasButtonGrid3','vidanetSubscriptionMozgasGridTable2Y1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionMozgasGridTableZart0','vidanetSubscriptionMozgasButtonGrid1','vidanetSubscriptionMozgasGridTable2','vidanetSubscriptionMozgasGridTable3']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionMozgasGridTable3Y1'	}	],
	'launch.vidanetSubscriptionMozgasFlagPopupY1Button1' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasFlagPopupY1Button2' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable22_row_2' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable22_row_3' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable22_row_4' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable22_row_5' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable22_row_6' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable22_row_7' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable22_row_8' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable22_row_9' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable22_row_10' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable22_row_11' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable22_row_12' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasGridTable22_row_13' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasFlagPopupY1'	}	],
	'launch.vidanetSubscriptionMozgasButtonGrid2RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionMozgasButtonGrid2','vidanetSubscriptionMozgasGridTable','vidanetSubscriptionMozgasGridTable00','vidanetSubscriptionMozgasGridTable01','vidanetSubscriptionMozgasGridTable2Y0']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionMozgasButtonGrid1','vidanetSubscriptionMozgasGridTableZart0','vidanetSubscriptionMozgasGridTable2','vidanetSubscriptionMozgasGridTable3']	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetSubscriptionMozgasGridTable3Y0'	}	],
	'launch.vidanetSubscriptionMozgasButtonGrid3RowCell2Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionMozgasButtonGrid2','vidanetSubscriptionMozgasGridTable','vidanetSubscriptionMozgasGridTable00','vidanetSubscriptionMozgasGridTable01','vidanetSubscriptionMozgasGridTable2Y0']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionMozgasButtonGrid3','vidanetSubscriptionMozgasGridTable20','vidanetSubscriptionMozgasGridTable21','vidanetSubscriptionMozgasGridTable22','vidanetSubscriptionMozgasGridTable2Y1']	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetSubscriptionMozgasGridTable3Y0'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetSubscriptionMozgasGridTable3Y1'	}	],
	'launch.vidanetSubscriptionMozgasButtonGrid3RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionMozgasButtonGrid3','vidanetSubscriptionMozgasGridTable20','vidanetSubscriptionMozgasGridTable21','vidanetSubscriptionMozgasGridTable22','vidanetSubscriptionMozgasGridTable2Y1']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionMozgasButtonGrid1','vidanetSubscriptionMozgasGridTableZart0','vidanetSubscriptionMozgasGridTable2','vidanetSubscriptionMozgasGridTable3']	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetSubscriptionMozgasGridTable3Y1'	}	],
	'launch.vidanetMainMenuGridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetCommissionGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetCommissionGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetCommissionGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetCommissionGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetCommissionGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetCommissionGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetCommissionGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetCommissionGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetCommissionContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetCommissionSideBar'	}	],
	'launch.vidanetCommissionContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetCommissionContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetGiftPage'	}	],
	'launch.vidanetCommissionContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetComGiftCostPage'	}	],
	'launch.vidanetCommissionToggleGridCell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y0']	}	],
	'launch.vidanetCommissionToggleGridRowCell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y1']	}	],
	'launch.vidanetCommissionToggleGridRow2Cell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','01']	}	],
	'launch.vidanetCommissionToggleGridRow2Cell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','02']	}	],
	'launch.vidanetCommissionToggleGridRow2Cell3Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','03']	}	],
	'launch.vidanetCommissionToggleGridRow2Cell4Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','04']	}	],
	'launch.vidanetCommissionToggleGridRow2Cell5Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','05']	}	],
	'launch.vidanetCommissionToggleGridRow2Cell6Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','06']	}	],
	'launch.vidanetCommissionToggleGridRow2Cell7Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','07']	}	],
	'launch.vidanetCommissionToggleGridRow2Cell8Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','08']	}	],
	'launch.vidanetCommissionToggleGridRow2Cell9Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','09']	}	],
	'launch.vidanetCommissionToggleGridRow2Cell10Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','10']	}	],
	'launch.vidanetCommissionToggleGridRow2Cell11Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','11']	}	],
	'launch.vidanetCommissionToggleGridRow2Cell12Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','12']	}	],
	'launch.vidanetCommissionToggleGridRowCell3Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y2']	}	],
	'launch.vidanetCommissionToggleGridRowCell4Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y3']	}	],
	'launch.vidanetCommissionToggleGridRowCell5Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y4']	}	],
	'launch.vidanetCommissionToggleGridRowCell6Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y5']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid1RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableZart0','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid1RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableZart0','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell3','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableY1','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid1RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableZart0','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid1RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableY1','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell4']	}	],
	'launch.vidanetServiceCostInputGrid3Row2Cell2_2Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostInputGridTable2','vidanetServiceCostInputGridTable2fejlec','vidanetServiceCostInputGrid3Row']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostInputGrid3Row2','vidanetServiceCostInputGridTable0','vidanetServiceCostInputGridTable3','vidanetServiceCostInputGridTable1','vidanetServiceCostInputGridTable3fejlec']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid1RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableY1','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableZart0','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint0ButtonGrid1RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2'	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid2RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableZart2','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable2','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid2RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableZart2','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell3','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable2Y1','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid2RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable2','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableZart2','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid2RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable2Y1','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable2','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid2RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable2Y1','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableZart2','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint0ButtonGrid2RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart2_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint1Page'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y0']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart2_row_1' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroTermekPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart2_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y1']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTableZart2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart2_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y2']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTableZart2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart2_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y3']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTableZart2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart2_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y4']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTableZart2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart2_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y5']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTableZart2'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y101']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y102']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y103']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y104']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y105']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y106']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y107']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y108']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y109']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y110']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y111']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable2Y1_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y112']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid4','vidanetSubscriptionZaroSzint0GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable2Y1'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid3RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableZart3','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell2','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable3','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid3RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableZart3','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell3','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable3Y1','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell5','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid3RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable3','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableZart3','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell2','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid3RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable3Y1','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell5','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable3','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint0ButtonGrid3RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTable3Y1','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell5','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint0GridTableZart3','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell2','vidanetSubscriptionZaroSzint0ButtonGrid3RowCell3']	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridTableZartHeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesButtonGridRowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesGridTableZart','vidanetSubscriptionAttekintesButtonGridRowCell2','vidanetSubscriptionAttekintesButtonGridRowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesGridTable','vidanetSubscriptionAttekintesButtonGridRowCell4']	}	],
	'launch.vidanetSubscriptionAttekintesButtonGridRowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesGridTableZart','vidanetSubscriptionAttekintesButtonGridRowCell3','vidanetSubscriptionAttekintesButtonGridRowCell2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesGridTable2','vidanetSubscriptionAttekintesButtonGridRowCell5','vidanetSubscriptionAttekintesButtonGridRowCell6']	}	],
	'launch.vidanetSubscriptionAttekintesButtonGridRowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesGridTable','vidanetSubscriptionAttekintesButtonGridRowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesGridTableZart','vidanetSubscriptionAttekintesButtonGridRowCell2','vidanetSubscriptionAttekintesButtonGridRowCell3']	}	],
	'launch.vidanetSubscriptionAttekintesButtonGridRowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesGridTable2','vidanetSubscriptionAttekintesButtonGridRowCell5','vidanetSubscriptionAttekintesButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesGridTable','vidanetSubscriptionAttekintesButtonGridRowCell4']	}	],
	'launch.vidanetSubscriptionAttekintesButtonGridRowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesGridTable2','vidanetSubscriptionAttekintesButtonGridRowCell5','vidanetSubscriptionAttekintesButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesGridTableZart','vidanetSubscriptionAttekintesButtonGridRowCell2','vidanetSubscriptionAttekintesButtonGridRowCell3']	}	],
	'launch.vidanetSubscriptionAttekintesGridTableZart_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint0Page'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes0Value','vidanetSubscriptionAttekintesGridTableZart','0','label']	}	],
	'launch.vidanetSubscriptionAttekintesGridTable2_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint0Page'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes0Value','vidanetSubscriptionAttekintesGridTable2','0','label']	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridTable2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0ButtonGridRowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint0GridTableZart','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint0GridTable','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell4']	}	],
	'launch.vidanetSubscriptionAttekintesSzint0ButtonGridRowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint0GridTableZart','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell3','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint0GridTable2','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell6']	}	],
	'launch.vidanetSubscriptionAttekintesSzint0ButtonGridRowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint0GridTable','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint0GridTableZart','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell3']	}	],
	'launch.vidanetSubscriptionAttekintesSzint0ButtonGridRowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint0GridTable2','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint0GridTable','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell4']	}	],
	'launch.vidanetSubscriptionAttekintesSzint0ButtonGridRowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint0GridTable2','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint0GridTableZart','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint0ButtonGridRowCell3']	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridTableZart_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint1Page'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes1Value','vidanetSubscriptionAttekintesSzint0GridTableZart','0','label']	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridTable2_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint1Page'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes1Value','vidanetSubscriptionAttekintesSzint0GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridTableZartHeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint0Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridTable2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint0Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridTableZart_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint2Page'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes2Value','vidanetSubscriptionAttekintesSzint1GridTableZart','0','label']	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridTable2_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint2Page'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes2Value','vidanetSubscriptionAttekintesSzint1GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionAttekintesSzint1ButtonGridRowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint1GridTableZart','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell3','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint1GridTable','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell4']	}	],
	'launch.vidanetSubscriptionAttekintesSzint1ButtonGridRowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint1GridTableZart','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint1GridTable2','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell6']	}	],
	'launch.vidanetSubscriptionAttekintesSzint1ButtonGridRowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint1GridTable','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint1GridTableZart','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell3']	}	],
	'launch.vidanetSubscriptionAttekintesSzint1ButtonGridRowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint1GridTable2','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint1GridTable','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell4']	}	],
	'launch.vidanetSubscriptionAttekintesSzint1ButtonGridRowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint1GridTable2','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint1GridTableZart','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint1ButtonGridRowCell3']	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridTableZartHeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint1Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridTable2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint1Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2ButtonGridRowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint2GridTableZart','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell3','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint2GridTable','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell4']	}	],
	'launch.vidanetSubscriptionAttekintesSzint2ButtonGridRowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint2GridTableZart','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint2GridTable2','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell6']	}	],
	'launch.vidanetSubscriptionAttekintesSzint2ButtonGridRowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint2GridTable','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint2GridTableZart','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell3']	}	],
	'launch.vidanetSubscriptionAttekintesSzint2ButtonGridRowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint2GridTable2','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint2GridTable','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell4']	}	],
	'launch.vidanetSubscriptionAttekintesSzint2ButtonGridRowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint2GridTable2','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint2GridTableZart','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint2ButtonGridRowCell3']	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridTableZart_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes3Value','vidanetSubscriptionAttekintesSzint2GridTableZart','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint3Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridTable2_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes3Value','vidanetSubscriptionAttekintesSzint2GridTable','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint3Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridTableZartHeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint2Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridTable2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint2Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridTableZart_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint4Page'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes4Value','vidanetSubscriptionAttekintesSzint3GridTableZart','0','label']	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridTable2_row_0' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint4Page'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['Attekintes4Value','vidanetSubscriptionAttekintesSzint3GridTable','0','label']	}	],
	'launch.vidanetSubscriptionAttekintesSzint3ButtonGridRowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint3GridTableZart','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell3','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint3GridTable','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell4']	}	],
	'launch.vidanetSubscriptionAttekintesSzint3ButtonGridRowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint3GridTableZart','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint3GridTable2','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell6']	}	],
	'launch.vidanetSubscriptionAttekintesSzint3ButtonGridRowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint3GridTable','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint3GridTableZart','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell3']	}	],
	'launch.vidanetSubscriptionAttekintesSzint3ButtonGridRowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint3GridTable2','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint3GridTable','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell4']	}	],
	'launch.vidanetSubscriptionAttekintesSzint3ButtonGridRowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint3GridTable2','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint3GridTableZart','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint3ButtonGridRowCell3']	}	],
	'launch.vidanetSubscriptionAttekintesSzint4GridTableZartHeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint3Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4GridTable2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint3Page'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4ButtonGridRowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint4GridTableZart','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint4GridTable','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell4']	}	],
	'launch.vidanetSubscriptionAttekintesSzint4ButtonGridRowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint4GridTableZart','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint4GridTable2','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell6']	}	],
	'launch.vidanetSubscriptionAttekintesSzint4ButtonGridRowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint4GridTable','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint4GridTableZart','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell3']	}	],
	'launch.vidanetSubscriptionAttekintesSzint4ButtonGridRowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint4GridTable2','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint4GridTable','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell4']	}	],
	'launch.vidanetSubscriptionAttekintesSzint4ButtonGridRowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint4GridTable2','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell5','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionAttekintesSzint4GridTableZart','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell2','vidanetSubscriptionAttekintesSzint4ButtonGridRowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroTermekPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y0']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y101']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y102']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y103']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y104']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y105']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y106']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y107']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y108']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y109']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y110']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y111']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTable3Y1_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y112']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTable3Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTable3Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart3_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart3','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroTermekPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart3_row_1' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart3','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroTermekPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart3_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y1']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart3','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTableZart3'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart3_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y2']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart3','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTableZart3'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart3_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y3']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart3','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTableZart3'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart3_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y4']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart3','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTableZart3'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart3_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y5']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint0GridTableZart3','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint0Grid8','vidanetSubscriptionZaroSzint0GridTable8']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint0GridTableZart3'	}	],
	'launch.vidanetGiftContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetGiftSideBar'	}	],
	'launch.vidanetGiftContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetGiftContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetGiftPage'	}	],
	'launch.vidanetGiftContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetComGiftCostPage'	}	],
	'launch.vidanetGiftGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetGiftGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetGiftGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetGiftGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetGiftGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetGiftGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetGiftGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetGiftGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetComGiftCostContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetComGiftCostSideBar'	}	],
	'launch.vidanetComGiftCostContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetComGiftCostContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetGiftPage'	}	],
	'launch.vidanetComGiftCostContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetGiftCostPage'	}	],
	'launch.vidanetComGiftCostGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetComGiftCostGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetComGiftCostGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetComGiftCostGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetComGiftCostGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetComGiftCostGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetComGiftCostGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetComGiftCostGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionZaroTermekGridTable2Y1HeaderButton' : [	{ 		action: app.fn.openPrevPage, 	}	],
	'launch.vidanetSubscriptionZaroTermekGridTableZart2HeaderButton' : [	{ 		action: app.fn.openPrevPage, 	}	],
	'launch.vidanetSubscriptionZaroTermekButtonGrid1RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroTermekGridTableZart2','vidanetSubscriptionZaroTermekButtonGrid1RowCell2','vidanetSubscriptionZaroTermekButtonGrid1RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroTermekGridTable2','vidanetSubscriptionZaroTermekButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroTermekButtonGrid1RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroTermekGridTableZart2','vidanetSubscriptionZaroTermekButtonGrid1RowCell3','vidanetSubscriptionZaroTermekButtonGrid1RowCell2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroTermekGridTable2Y1','vidanetSubscriptionZaroTermekButtonGrid1RowCell5','vidanetSubscriptionZaroTermekButtonGrid1RowCell6']	}	],
	'launch.vidanetSubscriptionZaroTermekButtonGrid1RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroTermekGridTable2','vidanetSubscriptionZaroTermekButtonGrid1RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroTermekGridTableZart2','vidanetSubscriptionZaroTermekButtonGrid1RowCell3','vidanetSubscriptionZaroTermekButtonGrid1RowCell2']	}	],
	'launch.vidanetSubscriptionZaroTermekButtonGrid1RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroTermekGridTable2Y1','vidanetSubscriptionZaroTermekButtonGrid1RowCell5','vidanetSubscriptionZaroTermekButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroTermekGridTable2','vidanetSubscriptionZaroTermekButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroTermekButtonGrid1RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroTermekGridTable2Y1','vidanetSubscriptionZaroTermekButtonGrid1RowCell5','vidanetSubscriptionZaroTermekButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroTermekGridTableZart2','vidanetSubscriptionZaroTermekButtonGrid1RowCell2','vidanetSubscriptionZaroTermekButtonGrid1RowCell3']	}	],
	'launch.vidanetComGiftCostButtonGridRowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetComGiftCostGridTableZart','vidanetComGiftCostButtonGridRowCell2','vidanetComGiftCostButtonGridRowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetComGiftCostGridTable','vidanetComGiftCostButtonGridRowCell4']	}	],
	'launch.vidanetComGiftCostButtonGridRowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetComGiftCostGridTableZart','vidanetComGiftCostButtonGridRowCell2','vidanetComGiftCostButtonGridRowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetComGiftCostGridTable2','vidanetComGiftCostButtonGridRowCell5','vidanetComGiftCostButtonGridRowCell6']	}	],
	'launch.vidanetComGiftCostButtonGridRowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetComGiftCostGridTable','vidanetComGiftCostButtonGridRowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetComGiftCostGridTableZart','vidanetComGiftCostButtonGridRowCell2','vidanetComGiftCostButtonGridRowCell3']	}	],
	'launch.vidanetComGiftCostButtonGridRowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetComGiftCostGridTable2','vidanetComGiftCostButtonGridRowCell5','vidanetComGiftCostButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetComGiftCostGridTable','vidanetComGiftCostButtonGridRowCell4']	}	],
	'launch.vidanetComGiftCostButtonGridRowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetComGiftCostGridTable2','vidanetComGiftCostButtonGridRowCell5','vidanetComGiftCostButtonGridRowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetComGiftCostGridTableZart','vidanetComGiftCostButtonGridRowCell2','vidanetComGiftCostButtonGridRowCell3']	}	],
	'launch.vidanetGiftToggleGridCell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y0']	}	],
	'launch.vidanetGiftToggleGridRowCell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y1']	}	],
	'launch.vidanetGiftToggleGridRowCell3Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y2']	}	],
	'launch.vidanetGiftToggleGridRowCell4Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y3']	}	],
	'launch.vidanetGiftToggleGridRowCell5Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y4']	}	],
	'launch.vidanetGiftToggleGridRowCell6Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y5']	}	],
	'launch.vidanetGiftToggleGridRow2CellEvesToogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','00']	}	],
	'launch.vidanetGiftToggleGridRow2Cell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','01']	}	],
	'launch.vidanetGiftToggleGridRow2Cell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','02']	}	],
	'launch.vidanetGiftToggleGridRow2Cell3Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','03']	}	],
	'launch.vidanetGiftToggleGridRow2Cell4Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','04']	}	],
	'launch.vidanetGiftToggleGridRow2Cell5Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','05']	}	],
	'launch.vidanetGiftToggleGridRow2Cell6Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','06']	}	],
	'launch.vidanetGiftToggleGridRow2Cell7Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','07']	}	],
	'launch.vidanetGiftToggleGridRow2Cell8Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','08']	}	],
	'launch.vidanetGiftToggleGridRow2Cell9Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','09']	}	],
	'launch.vidanetGiftToggleGridRow2Cell10Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','10']	}	],
	'launch.vidanetGiftToggleGridRow2Cell11Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','11']	}	],
	'launch.vidanetGiftToggleGridRow2Cell12Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','12']	}	],
	'launch.vidanetComGiftCostButtonGrid2RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetComGiftCostGridTable4','vidanetComGiftCostButtonGrid2RowCell2','vidanetComGiftCostButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetComGiftCostGridTable5','vidanetComGiftCostButtonGrid2RowCell4']	}	],
	'launch.vidanetComGiftCostButtonGrid2RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetComGiftCostGridTable4','vidanetComGiftCostButtonGrid2RowCell2','vidanetComGiftCostButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetComGiftCostGridTable6','vidanetComGiftCostButtonGrid2RowCell5','vidanetComGiftCostButtonGrid2RowCell6']	}	],
	'launch.vidanetComGiftCostButtonGrid2RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetComGiftCostGridTable5','vidanetComGiftCostButtonGrid2RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetComGiftCostGridTable4','vidanetComGiftCostButtonGrid2RowCell2','vidanetComGiftCostButtonGrid2RowCell3']	}	],
	'launch.vidanetComGiftCostButtonGrid2RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetComGiftCostGridTable6','vidanetComGiftCostButtonGrid2RowCell5','vidanetComGiftCostButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetComGiftCostGridTable5','vidanetComGiftCostButtonGrid2RowCell4']	}	],
	'launch.vidanetComGiftCostButtonGrid2RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetComGiftCostGridTable6','vidanetComGiftCostButtonGrid2RowCell5','vidanetComGiftCostButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetComGiftCostGridTable4','vidanetComGiftCostButtonGrid2RowCell2','vidanetComGiftCostButtonGrid2RowCell3']	}	],
	'launch.vidanetChannelCostAttekintesMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetChannelCostAttekintesSideBar'	}	],
	'launch.vidanetChannelCostAttekintesMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostCsatornaPage'	}	],
	'launch.vidanetChannelCostAttekintesMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostFlatPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1ButtonGrid1RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTableZart0','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTable','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint1ButtonGrid1RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTableZart0','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTableY1','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint1ButtonGrid1RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTable','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTableZart0','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint1ButtonGrid1RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTableY1','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTable','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint1ButtonGrid1RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTableY1','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTableZart0','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint1ButtonGrid2RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTableZart2','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTable2','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint1ButtonGrid2RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTableZart2','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTable2Y1','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint1ButtonGrid2RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTable2','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTableZart2','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint1ButtonGrid2RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTable2Y1','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTable2','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint1ButtonGrid2RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTable2Y1','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTableZart2','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint1ButtonGrid2RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTableZart2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint0Page'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTableZart2HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetChannelCostAttekintesGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetChannelCostAttekintesGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetChannelCostAttekintesGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetChannelCostAttekintesGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetChannelCostAttekintesGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetChannelCostAttekintesGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetChannelCostAttekintesGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetMainMenuGridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTableZart2_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroDropdown2','vidanetSubscriptionZaroSzint1GridTableZart2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint2Page'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroDropdown2','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint2Page'	}	],
	'launch.vidanetSubscriptionZaroSzint2ButtonGrid1RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTableZart0','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTable','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint2ButtonGrid1RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTableZart0','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTableY1','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint2ButtonGrid1RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTable','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTableZart0','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint2ButtonGrid1RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTableY1','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint1GridTable','vidanetSubscriptionZaroSzint1ButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint2ButtonGrid1RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTableY1','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTableZart0','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint2ButtonGrid1RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTableZart2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint1Page'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTableZart2HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint1Page'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint2ButtonGrid2RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTableZart2','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTable2','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint2ButtonGrid2RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTableZart2','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTable2Y1','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint2ButtonGrid2RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTable2','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTableZart2','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint2ButtonGrid2RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTable2Y1','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTable2','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint2ButtonGrid2RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTable2Y1','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint2GridTableZart2','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint2ButtonGrid2RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint3ButtonGrid1RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTableZart0','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTable','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint3ButtonGrid1RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTableZart0','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTableY1','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint3ButtonGrid1RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTable','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTableZart0','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint3ButtonGrid1RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTableY1','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTable','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint3ButtonGrid1RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTableY1','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTableZart0','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint3ButtonGrid1RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTableZart2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint2Page'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTableZart2HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint2Page'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint3ButtonGrid2RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTableZart2','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTable2','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint3ButtonGrid2RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTableZart2','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTable2Y1','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint3ButtonGrid2RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTable2','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTableZart2','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint3ButtonGrid2RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTable2Y1','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTable2','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint3ButtonGrid2RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTable2Y1','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint3GridTableZart2','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint3ButtonGrid2RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTableZart2_row_1' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTableZart2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroTermekPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTableZart2_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y1']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTableZart2'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTableZart2_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y2']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTableZart2'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTableZart2_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y3']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTableZart2'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTableZart2_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y4']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTableZart2'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTableZart2_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y5']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTableZart2'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y0']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y101']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y102']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y103']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y104']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y105']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y106']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y107']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y108']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y109']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y110']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y111']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTable2Y1_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y112']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint1GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint1Grid4','vidanetSubscriptionZaroSzint1GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint1GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint4ButtonGrid1RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTableZart0','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTable','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint4ButtonGrid1RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTableZart0','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTableY1','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint4ButtonGrid1RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTable','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTableZart0','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint4ButtonGrid1RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTableY1','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTable','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint4ButtonGrid1RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTableY1','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTableZart0','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint4ButtonGrid1RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTableZart2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint3Page'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTableZart2HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint3Page'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint4ButtonGrid2RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTableZart2','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTable2','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint4ButtonGrid2RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTableZart2','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTable2Y1','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint4ButtonGrid2RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTable2','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTableZart2','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint4ButtonGrid2RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTable2Y1','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTable2','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint4ButtonGrid2RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTable2Y1','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint4GridTableZart2','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint4ButtonGrid2RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint5ButtonGrid1RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTableZart0','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTable','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint5ButtonGrid1RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTableZart0','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTableY1','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint5ButtonGrid1RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTable','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTableZart0','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint5ButtonGrid1RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTableY1','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTable','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint5ButtonGrid1RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTableY1','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell5','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTableZart0','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell2','vidanetSubscriptionZaroSzint5ButtonGrid1RowCell3']	}	],
	'launch.vidanetChannelCostAttekintesMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetChannelCostCsatornaMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetChannelCostCsatornaSideBar'	}	],
	'launch.vidanetChannelCostCsatornaMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetChannelCostCsatornaMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostCsatornaPage'	}	],
	'launch.vidanetChannelCostCsatornaMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostFlatPage'	}	],
	'launch.vidanetChannelCostCsatornaGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetChannelCostCsatornaGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetChannelCostCsatornaGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetChannelCostCsatornaGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetChannelCostCsatornaGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetChannelCostCsatornaGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetChannelCostCsatornaGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetChannelCostFlatMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetChannelCostFlatSideBar'	}	],
	'launch.vidanetChannelCostFlatMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetChannelCostFlatMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostCsatornaPage'	}	],
	'launch.vidanetChannelCostFlatMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostFlatPage'	}	],
	'launch.vidanetChannelCostFlatGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetChannelCostFlatGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetChannelCostFlatGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetChannelCostFlatGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetChannelCostFlatGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetChannelCostFlatGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetChannelCostFlatGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionMozgasGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionMozgasGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionZaroTermekGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionZaroTermekGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionAttekintesGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint0GridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint1GridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4GridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint2GridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint3GridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionAttekintesSzint4GridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionRiportGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetSubscriptionRiportGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetPlanDriverSideBarGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetPlanDriverSideBarGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetServiceCostGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetServiceCostGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetServiceCostInputGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetServiceCostInputGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetServiceCostKarbantartasiDijakGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetServiceCostOtherGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetServiceCostOtherGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetOtherCostGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetOtherCostGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetOtherCostHitelGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetOtherCostHitelGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetOtherCostTelefonGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetOtherCostTelefonGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetOtherCostKotberGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetOtherCostKotberGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetOtherCostPostaiGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetOtherCostPostaiGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetOtherCostGepjarmuGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetOtherCostGepjarmuGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetOtherCostKozmuadoGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetOtherCostKozmuadoGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetMarginPlanAttekintesGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetMarginPlanAttekintesGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetMarginPlanInputGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetMarginPlanInputGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetOtherRevenueGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetOtherRevenueGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetOtherRevenueGridModemRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetOtherRevenueGridModemRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetOtherRevenueEladasGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetOtherRevenueEladasGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetChannelCostAttekintesGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetChannelCostAttekintesGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetChannelCostCsatornaGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetChannelCostCsatornaGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetChannelCostFlatGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetChannelCostFlatGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetCommissionGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetCommissionGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetGiftGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetGiftGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetComGiftCostGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetComGiftCostGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTableZart2HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTableZart2HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1HeaderButton' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1HeaderCell3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y001']	}	],
	'launch.vidanetSubscriptionZaroSzint5ButtonGrid2RowCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTableZart2','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTable2','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint5ButtonGrid2RowCell3Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTableZart2','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell3']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTable2Y1','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell6']	}	],
	'launch.vidanetSubscriptionZaroSzint5ButtonGrid2RowCell4Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTable2','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell4']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTableZart2','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint5ButtonGrid2RowCell5Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTable2Y1','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTable2','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell4']	}	],
	'launch.vidanetSubscriptionZaroSzint5ButtonGrid2RowCell6Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTable2Y1','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell5','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell6']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetSubscriptionZaroSzint5GridTableZart2','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell2','vidanetSubscriptionZaroSzint5ButtonGrid2RowCell3']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroDropdown3','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint3Page'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTableZart2_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroDropdown3','vidanetSubscriptionZaroSzint2GridTableZart2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint3Page'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTableZart2_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroDropdown4','vidanetSubscriptionZaroSzint3GridTableZart2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroDropdown4','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTableZart2_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroDropdown5','vidanetSubscriptionZaroSzint4GridTableZart2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint5Page'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_0' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroDropdown5','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint5Page'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTableZart2_row_1' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTableZart2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroTermekPage'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTableZart2_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y1']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTableZart2'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTableZart2_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y2']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTableZart2'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTableZart2_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y3']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTableZart2_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y4']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTableZart2'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTableZart2_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y5']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTableZart2'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTableZart2_row_1' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTableZart2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroTermekPage'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTableZart2_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y1']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTableZart2_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y2']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTableZart2_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y3']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTableZart2_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y4']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTableZart2_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y5']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y0']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y101']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y102']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y103']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y104']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y105']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y106']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y107']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y108']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y109']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y110']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y111']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTable2Y1_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y112']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint3GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint3Grid4','vidanetSubscriptionZaroSzint3GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint3Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y0']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y101']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y102']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y103']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y104']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y105']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y106']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y107']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y108']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y109']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y110']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y111']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTable2Y1_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y112']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint2GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint2Grid4','vidanetSubscriptionZaroSzint2GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint2GridTable2Y1'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTableZart2_row_1' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTableZart2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroTermekPage'	}	],
	'choose.vidanetSubscriptionZaroSzint2Grid1Dropdown2' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueZaroDropdown2','vidanetSubscriptionZaroSzint2Grid1Dropdown2.value']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTableZart2_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y1']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTableZart2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTableZart2_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y2']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTableZart2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTableZart2_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y3']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTableZart2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTableZart2_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y4']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTableZart2_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y5']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y0']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y101']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y102']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y103']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y104']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y105']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y106']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y107']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y108']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y109']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y110']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y111']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTable2Y1_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y112']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint4Grid4','vidanetSubscriptionZaroSzint4GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint4Grid4'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint4GridTable2Y1','0','label']	}	],
	'launch.vidanetCommissionToggleGridRow2CellEvesToogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicMonthValue','00']	}	],
	'choose.vidanetSubscriptionZaroSzint3Grid1Dropdown2' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueZaroDropdown2','vidanetSubscriptionZaroSzint3Grid1Dropdown2.value']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint2Page'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTableZart2_row_1' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTableZart2','0','label']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroTermekPage'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTableZart2_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y1']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTableZart2_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y2']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTableZart2_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y3']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTableZart2_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y4']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTableZart2_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y5']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTableZart2','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y0']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y101']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y102']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y103']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y104']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_6' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y105']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_7' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y106']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_8' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y107']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_9' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y108']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_10' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y109']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_11' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y110']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_12' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y111']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTable2Y1_row_13' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ZaroDate','Y112']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['ZaroErtekTermekValue','vidanetSubscriptionZaroSzint5GridTable2Y1','0','label']	},
	{ 		action: app.fn.toggleWidgets, 		argument: ['vidanetSubscriptionZaroSzint5Grid4','vidanetSubscriptionZaroSzint5GridTable4']	},
	{ 		action: app.fn.scrollTo, 		argument: 'vidanetSubscriptionZaroSzint5Grid4'	}	],
	'choose.vidanetSubscriptionZaroSzint3Grid1Dropdown3' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueZaroDropdown3','vidanetSubscriptionZaroSzint3Grid1Dropdown3.value']	}	],
	'choose.vidanetSubscriptionZaroSzint4Grid1Dropdown3' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueZaroDropdown3','vidanetSubscriptionZaroSzint4Grid1Dropdown3.value']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint3Page'	}	],
	'choose.vidanetSubscriptionAttekintesSzint2Grid1Dropdown2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint1Page'	},
	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueAttekintes1Value','vidanetSubscriptionAttekintesSzint2Grid1Dropdown2.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint3Grid1Dropdown2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint1Page'	},
	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueAttekintes1Value','vidanetSubscriptionAttekintesSzint3Grid1Dropdown2.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint3Grid1Dropdown3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint2Page'	},
	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueAttekintes2Value','vidanetSubscriptionAttekintesSzint3Grid1Dropdown3.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint4Grid1Dropdown2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint1Page'	},
	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueAttekintes1Value','vidanetSubscriptionAttekintesSzint4Grid1Dropdown2.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint4Grid1Dropdown3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint2Page'	},
	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueAttekintes2Value','vidanetSubscriptionAttekintesSzint4Grid1Dropdown3.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint4Grid1Dropdown4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionAttekintesSzint3Page'	},
	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueAttekintes3Value','vidanetSubscriptionAttekintesSzint4Grid1Dropdown4.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint1Grid1Dropdown2' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueAttekintes1Value','vidanetSubscriptionAttekintesSzint1Grid1Dropdown2.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint2Grid1Dropdown3' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueAttekintes2Value','vidanetSubscriptionAttekintesSzint2Grid1Dropdown3.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint3Grid1Dropdown4' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueAttekintes3Value','vidanetSubscriptionAttekintesSzint3Grid1Dropdown4.value']	}	],
	'choose.vidanetSubscriptionZaroSzint4Grid1Dropdown2' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueZaroDropdown2','vidanetSubscriptionZaroSzint4Grid1Dropdown2.value']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint2Page'	}	],
	'choose.vidanetSubscriptionZaroSzint5Grid1Dropdown2' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueZaroDropdown2','vidanetSubscriptionZaroSzint5Grid1Dropdown2.value']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint2Page'	}	],
	'choose.vidanetSubscriptionZaroSzint5Grid1Dropdown3' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueZaroDropdown3','vidanetSubscriptionZaroSzint5Grid1Dropdown3.value']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint3Page'	}	],
	'choose.vidanetSubscriptionZaroSzint4Grid1Dropdown4' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueZaroDropdown4','vidanetSubscriptionZaroSzint4Grid1Dropdown4.value']	}	],
	'choose.vidanetSubscriptionZaroSzint5Grid1Dropdown4' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueZaroDropdown4','vidanetSubscriptionZaroSzint5Grid1Dropdown4.value']	},
	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'choose.vidanetSubscriptionZaroSzint5Grid1Dropdown5' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueZaroDropdown5','vidanetSubscriptionZaroSzint5Grid1Dropdown5.value']	}	],
	'launch.vidanetOtherCostTelefonMainContainerGridCell2GridRow1Button8' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostTelefonBetaPage'	}	],
	'launch.vidanetOtherCostTelefonBetaMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonBetaSideBar'	}	],
	'launch.vidanetOtherCostTelefonBetaMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetOtherCostTelefonBetaMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostHitel'	}	],
	'launch.vidanetOtherCostTelefonBetaMainContainerGridCell2GridRow1Button4' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKotber'	}	],
	'launch.vidanetOtherCostTelefonBetaMainContainerGridCell2GridRow1Cell5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPostai'	}	],
	'launch.vidanetOtherCostTelefonBetaMainContainerGridCell2GridRow1Cell6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostGepjarmu'	}	],
	'launch.vidanetOtherCostTelefonBetaMainContainerGridCell2GridRow1Cell7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostKozmuado'	}	],
	'launch.vidanetOtherCostTelefonBetaMainContainerGridCell2GridRow1Button3' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostTelefon'	}	],
	'launch.vidanetOtherCostTelefonBetaGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetOtherCostTelefonBetaGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetOtherCostTelefonBetaGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetOtherCostTelefonBetaGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetOtherCostTelefonBetaGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetOtherCostTelefonBetaGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetOtherCostTelefonBetaGridRow7Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMarginPlanAttekintes'	}	],
	'launch.vidanetOtherCostTelefonBetaGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetOtherCostTelefonBetaGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetSubscriptionMozgasGridTable3Y0_row_0' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasPopupszerk'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['MozgasTermek','vidanetSubscriptionMozgasGridTable3Y0','0','label']	}	],
	'launch.vidanetSubscriptionMozgasGridTable3Y1_row_0' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionMozgasPopupszerk'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['MozgasTermek','vidanetSubscriptionMozgasGridTable3Y1','0','label']	}	],
	'launch.vidanetChannelCostCsatornaToggleGridCell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y0_input']	}	],
	'launch.vidanetChannelCostCsatornaToggleGridRowCell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y1_input']	}	],
	'launch.vidanetChannelCostCsatornaToggleGridRowCell3Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y2']	}	],
	'launch.vidanetChannelCostCsatornaToggleGridRowCell4Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y3']	}	],
	'launch.vidanetChannelCostCsatornaToggleGridRowCell5Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y4']	}	],
	'launch.vidanetChannelCostCsatornaToggleGridRowCell6Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y5']	}	],
	'choose.vidanetSubscriptionAttekintesSzint4Grid1Dropdown5' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueAttekintes4Value','vidanetSubscriptionAttekintesSzint4Grid1Dropdown5.value']	}	],
	'launch.vidanetSubscriptionZaroSzint5GridTableZart2Ikon' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'launch.vidanetSubscriptionZaroSzint4GridTableZart2Ikon' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'launch.vidanetSubscriptionZaroSzint3GridTableZart2Ikon' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'launch.vidanetSubscriptionZaroSzint2GridTableZart2Ikon' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'launch.vidanetSubscriptionZaroSzint1GridTableZart2Ikon' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart2Ikon' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'launch.vidanetSubscriptionZaroSzint0GridTableZart3Ikon' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionZaroSzint4Page'	}	],
	'choose.vidanetSubscriptionMozgasGrid1Dropdown' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['MozgasDropdownValue','vidanetSubscriptionMozgasGrid1Dropdown.value']	}	],
	'choose.vidanetSubscriptionAttekintesGrid1Dropdown' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['AttekintesMozgasValue','vidanetSubscriptionAttekintesGrid1Dropdown.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint0Grid1Dropdown' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['AttekintesMozgasValue','vidanetSubscriptionAttekintesSzint0Grid1Dropdown.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint1Grid1Dropdown' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['AttekintesMozgasValue','vidanetSubscriptionAttekintesSzint1Grid1Dropdown.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint2Grid1Dropdown' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['AttekintesMozgasValue','vidanetSubscriptionAttekintesSzint2Grid1Dropdown.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint3Grid1Dropdown' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['AttekintesMozgasValue','vidanetSubscriptionAttekintesSzint3Grid1Dropdown.value']	}	],
	'choose.vidanetSubscriptionAttekintesSzint4Grid1Dropdown' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['AttekintesMozgasValue','vidanetSubscriptionAttekintesSzint4Grid1Dropdown.value']	}	],
	'launch.vidanetChannelCostFlatToggleGridCell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y0_input']	}	],
	'launch.vidanetChannelCostFlatToggleGridRowCell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y1_input']	}	],
	'launch.vidanetChannelCostFlatToggleGridRowCell3Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y2']	}	],
	'launch.vidanetChannelCostFlatToggleGridRowCell4Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y3']	}	],
	'launch.vidanetChannelCostFlatToggleGridRowCell5Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y4']	}	],
	'launch.vidanetChannelCostFlatToggleGridRowCell6Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicYearValue','Y5']	}	],
	'choose.vidanetGiftDropdown' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueGift','vidanetGiftDropdown.value']	}	],
	'launch.vidanetServiceCostInputGrid3Row2Cell1_1Button2020' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostInputGridTable0','vidanetServiceCostInputGridTable1','vidanetServiceCostInputGrid3Row2','vidanetServiceCostInputGrid3Row2Cell1','vidanetServiceCostInputGrid3Row2Cell2_2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostInputGrid3Row','vidanetServiceCostInputGridTable3','vidanetServiceCostInputGridTable3fejlec','vidanetServiceCostInputGrid3Row2Cell1_1Button2020','vidanetServiceCostInputGrid3Row2Cell1_1']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostInputGrid3Row2Cell3']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostInputGrid3Row2Cell2','vidanetServiceCostInputGrid3Row2Cell3_1','vidanetServiceCostInputGrid3Row2Cell1Button2020','vidanetServiceCostInputGrid3Row2Cell1Button2020']	}	],
	'launch.vidanetSubscriptionWeightsPopUpGridRow2bRefreshButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp'	}	],
	'launch.vidanetSubscriptionWeightsPopUp2GridRow2bRefreshButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'vidanetSubscriptionWeightsPopUp2'	}	],
	'choose.vidanetSubscriptionGrid2Dropdown' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['SulyDropdownValue','vidanetSubscriptionGrid2Dropdown.value']	}	],
	'write.vidanetChannelCostCsatornaGridTable_row_1' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ChannelCurrency','HUF']	}	],
	'write.vidanetChannelCostCsatornaGridTable_row_2' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ChannelCurrency','EUR']	}	],
	'write.vidanetChannelCostCsatornaGridTable_row_3' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ChannelCurrency','USD']	}	],
	'write.vidanetChannelCostCsatornaGridTable_row_4' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ChannelCurrency','Jogdíj']	}	],
	'write.vidanetChannelCostCsatornaGridTable_row_5' : [	{ 		action: app.fn.addSystemValue, 		argument: ['ChannelCurrency','Összesen-HUF']	}	],
	'choose.vidanetCommissionDropboxGridRowCell1Dropdown' : [	{ 		action: app.fn.showWidget, 	}	],
	'launch.vidanetServiceCostKarbantartasiDijakButtonGrid3Button1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetServiceCostKarbantartasiDijakButtonGrid2','vidanetServiceCostKarbantartasiDijakGridTable2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetServiceCostKarbantartasiDijakButtonGrid3','vidanetServiceCostKarbantartasiDijakGridTable3']	}	],
	'launch.vidanetOtherCostTelefonBetaButtonGridCellButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostTelefonBetaGridTable1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonBetaGridTable1Y0'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostTelefonBetaButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonBetaButtonGrid2'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostTelefonBetaGridTable2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostTelefonBetaGridTable2Y0']	}	],
	'launch.vidanetOtherCostTelefonBetaButtonGridCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostTelefonBetaButtonGrid','vidanetOtherCostTelefonBetaGridTable1','vidanetOtherCostTelefonBetaGridTable2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetvidanetOtherCostTelefonBetaButtonGrid3','vidanetOtherCostTelefonBetaGridTable1Y1','vidanetOtherCostTelefonBetaGridTable2Y1']	}	],
	'launch.vidanetOtherCostTelefonBetaButtonGrid2CellButton' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonBetaButtonGrid'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonBetaGridTable1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostTelefonBetaButtonGrid2','vidanetOtherCostTelefonBetaGridTable1Y0','vidanetOtherCostTelefonBetaGridTable2Y0']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostTelefonBetaGridTable2']	},
	{ 		action: app.fn.showWidgets, ]	}	],
	'launch.vidanetvidanetOtherCostTelefonBetaButtonGrid3Button1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostTelefonBetaButtonGrid2','vidanetOtherCostTelefonBetaGridTable1Y0','vidanetOtherCostTelefonBetaGridTable2Y0']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetvidanetOtherCostTelefonBetaButtonGrid3','vidanetOtherCostTelefonBetaGridTable1Y1','vidanetOtherCostTelefonBetaGridTable2Y1']	}	],
	'launch.vidanetvidanetOtherCostTelefonBetaButtonGrid3Cell3Button' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonBetaGridTable1'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetOtherCostTelefonBetaGridTable1Y1'	},
	{ 		action: app.fn.showWidget, 		argument: 'vidanetOtherCostTelefonBetaButtonGrid'	},
	{ 		action: app.fn.hideWidget, 		argument: 'vidanetvidanetOtherCostTelefonBetaButtonGrid3'	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetOtherCostTelefonBetaGridTable2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetOtherCostTelefonBetaGridTable2Y1']	}	],
	'choose.vidanetOtherCostPostaiDropdown' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValuePosta','vidanetOtherCostPostaiDropdown.value']	}	],
	'choose.vidanetOtherCostGepjarmuDropdown' : [	{ 		action: app.fn.addSystemValueByVal, 		argument: ['systemValueGepjarmu','vidanetOtherCostGepjarmuDropdown.value']	}	],
	'launch.vidanetPnlMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetPnlSideBar'	}	],
	'launch.vidanetPnlMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetReszletekPage'	}	],
	'launch.vidanetPnlGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetPnlGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetPnlGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetPnlGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetPnlGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetPnlGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetPnlGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetPnlGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetPnlGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetReszletekMainContainerGridButton1' : [	{ 		action: app.fn.showWidget, 		argument: 'vidanetReszletekSideBar'	}	],
	'launch.vidanetReszletekMainContainerGridCell2GridRow1Button2' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetReszletekPage'	}	],
	'launch.vidanetReszletekMainContainerGridCell2GridRow1Button1' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetReszletekGridRow1Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetMainPage'	}	],
	'launch.vidanetReszletekGridRow2Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPnlPage'	}	],
	'launch.vidanetReszletekGridRow3Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetSubscriptionPage'	}	],
	'launch.vidanetReszletekGridRow4Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetCommissionPage'	}	],
	'launch.vidanetReszletekGridRow5Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetChannelCostAttekintesPage'	}	],
	'launch.vidanetReszletekGridRow6Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherRevenueAttekintoPage'	}	],
	'launch.vidanetReszletekGridRow8Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetOtherCostPage'	}	],
	'launch.vidanetReszletekGridRow9Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetServiceCostPage'	}	],
	'launch.vidanetReszletekGridRow10Button' : [	{ 		action: app.fn.openPage, 		argument: 'vidanetPlanDriverPage'	}	],
	'launch.vidanetvidanetReszletekToggleGridCell1Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicValue','Fact']	}	],
	'launch.vidanetvidanetReszletekToggleGridRowCell2Toogle' : [	{ 		action: app.fn.addSystemValue, 		argument: ['dynamicValue','Base']	}	],
	'launch.vidanetvidanetReszletekButtonGridCell2Button' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetvidanetReszletekGridTable1','vidanetvidanetReszletekButtonGrid']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetvidanetReszletekButtonGrid3','vidanetvidanetReszletekGridTable3']	}	],
	'launch.vidanetvidanetReszletekButtonGrid2CellButton' : [	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetvidanetReszletekButtonGrid2','vidanetvidanetReszletekGridTable2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['vidanetvidanetReszletekButtonGrid','vidanetvidanetReszletekGridTable1']	}	],
	'launch.vidanetvidanetReszletekButtonGrid3Button1' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetvidanetReszletekGridTable2','vidanetvidanetReszletekButtonGrid2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetvidanetReszletekButtonGrid3','vidanetvidanetReszletekGridTable3']	}	],
	'launch.vidanetvidanetReszletekButtonGridCellButton' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetvidanetReszletekGridTable2','vidanetvidanetReszletekButtonGrid2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetvidanetReszletekGridTable1','vidanetvidanetReszletekButtonGrid']	}	],
	'launch.vidanetvidanetReszletekButtonGrid3Cell3Button' : [	{ 		action: app.fn.showWidgets, 		argument: ['vidanetvidanetReszletekButtonGrid','vidanetvidanetReszletekGridTable1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['vidanetvidanetReszletekButtonGrid3','vidanetvidanetReszletekGridTable3']	}	],
};
