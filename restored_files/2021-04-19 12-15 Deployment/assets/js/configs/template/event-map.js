/* global app */'use strict';app.eventMap = {
	'launch.hrdemoMainPanelsGridButton3' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoOrgBudgetPage'	}	],
	'launch.hrdemoSettingsTitleGridCellButton' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoMain'	}	],
	'launch.hrdemoMainPanelsGridButton1' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoFilter'	}	],
	'launch.hrdemoReportTitleGridCellButton' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoMain'	}	],
	'launch.hrdemoMainPanelsGridButton2' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoReport'	}	],
	'launch.hrdemoReportChart1SectionButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportCommentShow1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoReportComment2Show1','hrdemoReportComment3Show1','hrdemoReportComment4Show1','hrdemoReportComment5Show1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoReportComment2Edit1','hrdemoReportComment3Edit1','hrdemoReportComment4Edit1','hrdemoReportComment5Edit1']	}	],
	'segmentedControlTab1.HRDemoSimulationSegmented' : [	{ 		action: app.fn.hideWidgets, 		argument: ['HRDemoSimulationOrgBudgetGridTable','HRDemoSimulationControlGridRow2_OrgBudget','HRDemoSimulationOrgBudgetGridTable2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['hrdemoSimulationGridTable','HRDemoSimulationControlGridRow2','hrdemoSimulationGridTable','sandyDevSimulationGridTable2','HRDemoSimulationAddNewButton']	}	],
	'segmentedControlTab2.HRDemoSimulationSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['HRDemoSimulationOrgBudgetGridTable','HRDemoSimulationControlGridRow2_OrgBudget','HRDemoSimulationOrgBudgetGridTable2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoSimulationGridTable','HRDemoSimulationControlGridRow2','sandyDevSimulationControlGridRow2_Opened1','sandyDevSimulationGridTable2','HRDemoSimulationAddNewButton']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandyDevSimulationFilterUnitDropBox','HRDemoSimulationControlGridRow2_Opened']	}	],
	'launch.hrdemoSimulationGridTableButton2' : [	{ 		action: app.fn.showPopup, 		argument: 'HRDemoSimulationPopUp'	}	],
	'launch.HRDemoSimulationControlGridCellButton1' : [	{ 		action: app.fn.showWidgets, 		argument: ['hrdemoSimulationGridTableOpened','HRDemoSimulationControlGridRow2_Opened']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoSimulationGridTable','HRDemoSimulationControlGridRow2','sandyDevSimulationGridTable2']	},
	{ 		action: app.fn.addSystemValue, 		argument: ['selectedYear','1']	}	],
	'launch.HRDemoSimulationControlGridCellButton2' : [	{ 		action: app.fn.showWidgets, 		argument: ['hrdemoSimulationGridTableOpened','HRDemoSimulationControlGridRow2_Opened']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoSimulationGridTable','HRDemoSimulationControlGridRow2','sandyDevSimulationGridTable2']	},
	{ 		action: app.fn.addSystemValue, 		argument: ['selectedYear','1']	}	],
	'segmentedControlTab1.HRDemoSimulationControlDeltaSegmented' : [	{ 		action: app.fn.addSystemValue, 		argument: ['selectedVersion','0']	}	],
	'segmentedControlTab2.HRDemoSimulationControlDeltaSegmented' : [	{ 		action: app.fn.addSystemValue, 		argument: ['selectedVersion','1']	}	],
	'launch.HRDemoSimulationControlGridCellButton1_Opened' : [	{ 		action: app.fn.showWidgets, 		argument: ['hrdemoSimulationGridTable','HRDemoSimulationControlGridRow2','sandyDevSimulationGridTable2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoSimulationGridTableOpened','HRDemoSimulationControlGridRow2_Opened']	},
	{ 		action: app.fn.addSystemValue, 		argument: ['selectedYear','0']	}	],
	'launch.HRDemoSimulationControlGridCellButton2_Opened' : [	{ 		action: app.fn.showWidgets, 		argument: ['hrdemoSimulationGridTable','HRDemoSimulationControlGridRow2','sandyDevSimulationGridTable2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoSimulationGridTableOpened','HRDemoSimulationControlGridRow2_Opened']	},
	{ 		action: app.fn.addSystemValue, 		argument: ['selectedYear','0']	}	],
	'segmentedControlTab1.HRDemoSimulationControlDeltaSegmented_Opened' : [	{ 		action: app.fn.addSystemValue, 		argument: ['selectedVersion','0']	}	],
	'segmentedControlTab2.HRDemoSimulationControlDeltaSegmented_Opened' : [	{ 		action: app.fn.addSystemValue, 		argument: ['selectedVersion','1']	}	],
	'segmentedControlTab1.HRDemoSimulationControlDeltaSegmented_OrgBudget' : [	{ 		action: app.fn.addSystemValue, 		argument: ['selectedVersion','0']	}	],
	'segmentedControlTab2.HRDemoSimulationControlDeltaSegmented_OrgBudget' : [	{ 		action: app.fn.addSystemValue, 		argument: ['selectedVersion','1']	}	],
	'launch.HRDemoSimulationPopUpGridButton3_1' : [	{ 		action: app.fn.toggleInfoWidget, 		argument: ['hrdemoSimulationInfoPopup',{body:'You can upgrade or downgrade the Hay level here in accordance with the change of task and responsibilty level the position has. Please bear in mind that in case of shifts between certain Hay levels, some remuneration elements also change.'},'hrdemoSimulationInfoText']	}	],
	'launch.HRDemoSimulationPopUpGridButton4_1' : [	{ 		action: app.fn.toggleInfoWidget, 		argument: ['hrdemoSimulationInfoPopup',{body: 'The agile competence level of the employee.'},'hrdemoSimulationInfoText']	}	],
	'launch.HRDemoSimulationPopUpGridButton5_1' : [	{ 		action: app.fn.toggleInfoWidget, 		argument: ['hrdemoSimulationInfoPopup',{body: 'Current base salary of the employee. If you would like to change the base salary, then you can give the amount in the „salary adjustment HUF” cell or the % of increase in the „salary adjustment %” cell.'},'hrdemoSimulationInfoText']	}	],
	'launch.HRDemoSimulationPopUpGridTButton6_1' : [	{ 		action: app.fn.toggleInfoWidget, 		argument: ['hrdemoSimulationInfoPopup',{body: 'Please insert the amount of salary adjustment in HUF that you would like to give to the employee. Please bear in mind that the cost of adjustment should be financed within your organization’s TWM 1-2 budget and please take into consideration the salary ranges.'},'hrdemoSimulationInfoText']	}	],
	'launch.HRDemoSimulationPopUpGridButton7_1' : [	{ 		action: app.fn.toggleInfoWidget, 		argument: ['hrdemoSimulationInfoPopup',{body: 'Please insert the amount of salary adjustment in % that you would like to give to the employee. Please bear in mind that the cost of adjustment should be financed within your organization’s TWM 1-2 budget and please take into consideration the salary ranges.'},'hrdemoSimulationInfoText']	}	],
	'launch.HRDemoSimulationPopUpGridButton8_1_1' : [	{ 		action: app.fn.toggleInfoWidget, 		argument: ['hrdemoSimulationInfoPopup',{body: 'The measure of annual bonus in % of base salary the employee can earn with 100% performance. The % is regulated by Directive Nr 156.'},'hrdemoSimulationInfoText']	}	],
	'launch.HRDemoSimulationPopUpGridButton8_2_1' : [	{ 		action: app.fn.toggleInfoWidget, 		argument: ['sandyDevSimulationInfoPopup',{body: 'The amount of commission the employee can earn with 100% performance.'},'sandyDevSimulationInfoText']	}	],
	'launch.HRDemoSimulationPopUpGridButton8_3_1' : [	{ 		action: app.fn.toggleInfoWidget, 		argument: ['hrdemoSimulationInfoPopup',{body: 'Employee who works on projects of strategic importance for the company is in possession of information of key significance, intensively sought for on the market, having (presently) unique knowledge for a definite period of time can get retention bonus. Please bear in mind that the cost of retention bonus should be financed within your organization’s TWM 1-2 budget.'},'hrdemoSimulationInfoText']	}	],
	'launch.HRDemoSimulationPopUpGridButton8_4_1' : [	{ 		action: app.fn.toggleInfoWidget, 		argument: ['hrdemoSimulationInfoPopup',{body: 'The employee can receive extra bonus for performing defined extra target(s). Please bear in mind that the cost of target bonus should be financed within your organization’s TWM 1-2 budget.'},'hrdemoSimulationInfoText']	}	],
	'launch.HRDemoSimulationPopUpGridButton8_6_1' : [	{ 		action: app.fn.toggleInfoWidget, 		argument: ['hrdemoSimulationInfoPopup',{body:'You can upgrade or downgrade the Hay level here in accordance with the change of task and responsibilty level the position has. Please bear in mind that in case of shifts between certain Hay levels, some remuneration elements also change.'},'hrdemoSimulationInfoText']	}	],
	'launch.HRDemoSimulationPopUpGridButtonGridOkButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'HRDemoSimulationPopUp'	},
	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoSimulationInfoPopup'	}	],
	'launch.HRDemoSimulationPopUpGridButtonGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'HRDemoSimulationPopUp'	}	],
	'launch.HRDemoSimulationOrgBudgetGridTable2HeaderCellButton14' : [	{ 		action: app.fn.showWidgets, 		argument: ['HRDemoSimulationOrgBudgetGridTable2HeaderCellButtonON14','HRDemoSimulationOrgBudgetGridTable2HeaderCellButton15','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudgetGridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['HRDemoSimulationOrgBudgetGridTable2HeaderCellButton14','HRDemoSimulationOrgBudgetGridTable2HeaderCellButtonON15','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudget2021GridTable','sandySimulationOrgBudget2022GridTable']	},
	{ 		action: app.fn.addSystemValue, 		argument: ['selectedYear','0']	}	],
	'launch.HRDemoSimulationOrgBudgetGridTable2HeaderCellButton15' : [	{ 		action: app.fn.showWidgets, 		argument: ['HRDemoSimulationOrgBudgetGridTable2HeaderCellButtonON15','HRDemoSimulationOrgBudgetGridTable2HeaderCellButton14','sandySimulationOrgBudgetGridTableHeaderCellButton16','sandySimulationOrgBudget2021GridTable']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['HRDemoSimulationOrgBudgetGridTable2HeaderCellButton15','HRDemoSimulationOrgBudgetGridTable2HeaderCellButtonON14','sandySimulationOrgBudgetGridTableHeaderCellButtonON16','sandySimulationOrgBudgetGridTable','sandySimulationOrgBudget2022GridTable']	},
	{ 		action: app.fn.addSystemValue, 		argument: ['selectedYear','1']	}	],
	'launch.hrdemoReportChart2SectionButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportComment2Show1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoReportCommentShow1','hrdemoReportComment3Show1','hrdemoReportComment4Show1','hrdemoReportComment5Show1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoReportCommentEdit1','hrdemoReportComment3Edit1','hrdemoReportComment4Edit1','hrdemoReportComment5Edit1']	}	],
	'launch.hrdemoReportChart3SectionButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportComment3Show1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoReportCommentShow1','hrdemoReportComment2Show1','hrdemoReportComment4Show1','hrdemoReportComment5Show1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoReportCommentEdit1','hrdemoReportComment2Edit1','hrdemoReportComment4Edit1','hrdemoReportComment5Edit1']	}	],
	'launch.hrdemoReportChart4SectionButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportComment4Show1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoReportCommentShow1','hrdemoReportComment2Show1','hrdemoReportComment3Show1','hrdemoReportComment5Show1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoReportCommentEdit1','hrdemoReportComment2Edit1','hrdemoReportComment3Edit1','hrdemoReportComment5Edit1']	}	],
	'launch.hrdemoReportChart5SectionButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportComment5Show1'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoReportCommentShow1','hrdemoReportComment2Show1','hrdemoReportComment3Show1','hrdemoReportComment4Show1']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['sandyDevReportComment2Edit1','sandyDevReportComment3Edit1','sandyDevReportComment4Edit1','sandyDevReportCommentEdit1']	}	],
	'launch.hrdemoReportSideMenuBackToTop' : [	{ 		action: app.fn.scrollTo, 		argument: 'hrdemoReportTitleGrid'	}	],
	'launch.hrdemoReportSideMenuFteHc' : [	{ 		action: app.fn.scrollTo, 		argument: 'hrdemoReportChart1Section'	}	],
	'launch.hrdemoReportSideMenuTWMValue' : [	{ 		action: app.fn.scrollTo, 		argument: 'hrdemoReportChart2SectionRow'	}	],
	'launch.hrdemoReportSideMenuEmptyPos' : [	{ 		action: app.fn.scrollTo, 		argument: 'hrdemoReportChart3SectionRow'	}	],
	'launch.hrdemoReportSideMenuSpecInf' : [	{ 		action: app.fn.scrollTo, 		argument: 'hrdemoReportChart4Section'	}	],
	'launch.hrdemoReportSideMenuCar' : [	{ 		action: app.fn.scrollTo, 		argument: 'hrdemoReportChart5Section'	}	],
	'launch.hrdemoSimulationAddNewGridButton2' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoSimulationAddNewContainer'	}	],
	'launch.hrdemoSimulationTypePopUpGridButtonComp' : [	{ 		action: app.fn.showWidget, 		argument: 'HRDemoSimulationPopUp'	},
	{ 		action: app.fn.forceRefresh, 		argument: 'HRDemoSimulationPopUp'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	}	],
	'launch.hrdemoSimulationTypePopUpGridButtonPos' : [	{ 		action: app.fn.showWidget, 		argument: 'hrdemoSimulationStatusPopUp'	},
	{ 		action: app.fn.forceRefresh, 		argument: 'hrdemoSimulationStatusPopUp'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	}	],
	'launch.hrdemoSimulationTypePopUpGridButtonEmp' : [	{ 		action: app.fn.showWidget, 		argument: 'hrdemoSimulationEmployeePopUp'	},
	{ 		action: app.fn.forceRefresh, 		argument: 'hrdemoSimulationEmployeePopUp'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	}	],
	'launch.hrdemoSimulationTypePopUpGridDeleteButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	}	],
	'launch.hrdemoSimulationStatusPopUpStatusGridButtonGridOkButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoSimulationStatusPopUp'	},
	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoSimulationInfoPopup'	}	],
	'launch.hrdemoSimulationStatusPopUpStatusGridButtonGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoSimulationStatusPopUp'	},
	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoSimulationInfoPopup'	}	],
	'launch.hrdemoSimulationEmployeePopUpEmployeeGridButton55_1' : [	{ 		action: app.fn.toggleInfoWidget, 		argument: ['hrdemoSimulationInfoPopup',{body: 'In case the employee handled sensitive, strategic business information, please condiser that non-compete payment (certain Nr of base salary) is to be paid to prevent the employee being employed by competitor for a definite period. '},'hrdemoSimulationInfoText']	}	],
	'launch.hrdemoSimulationEmployeePopUpEmployeeGridButtonGridOkButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoSimulationEmployeePopUp'	},
	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoSimulationInfoPopup'	}	],
	'launch.hrdemoSimulationEmployeePopUpEmployeeGridButtonGridCancelButton' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoSimulationEmployeePopUp'	},
	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoSimulationInfoPopup'	}	],
	'launch.hrdemoSimulationGridTable2OpenedButton2' : [	{ 		action: app.fn.showPopup, 		argument: 'sandySimulationPopUp'	}	],
	'launch.hrdemoSimulationGridTable_row_4' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTable','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTable','1','label']	}	],
	'launch.hrdemoSimulationGridTable_row_5' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTable','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTable','1','label']	}	],
	'launch.hrdemoSimulationGridTable_row_6' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTable','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTable','1','label']	}	],
	'launch.hrdemoSimulationGridTable_row_7' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTable','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTable','1','label']	}	],
	'launch.hrdemoSimulationGridTable_row_8' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTable','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTable','1','label']	}	],
	'launch.hrdemoSimulationGridTable_row_9' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTable','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTable','1','label']	}	],
	'launch.hrdemoSimulationGridTable_row_10' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTable','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTable','1','label']	}	],
	'launch.hrdemoSimulationGridTable_row_11' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTable','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTable','1','label']	}	],
	'launch.hrdemoSimulationGridTable_row_12' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTable','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTable','1','label']	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	}	],
	'launch.hrdemoSimulationGridTable_row_13' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTable','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTable','1','label']	}	],
	'launch.hrdemoSimulationGridTable_row_14' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTable','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTable','1','label']	}	],
	'launch.hrdemoSimulationGridTable_row_15' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTable','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTable','1','label']	}	],
	'launch.hrdemoSimulationGridTableOpened_row_5' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTableOpened','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTableOpened']	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	}	],
	'launch.hrdemoSimulationGridTableOpened_row_6' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTableOpened','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTableOpened','1','title']	}	],
	'launch.hrdemoSimulationGridTableOpened_row_7' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTableOpened','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTableOpened','1']	}	],
	'launch.hrdemoSimulationGridTableOpened_row_8' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTableOpened','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTableOpened','1','title']	}	],
	'launch.hrdemoSimulationGridTableOpened_row_9' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTableOpened','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTableOpened','1','title']	}	],
	'launch.hrdemoSimulationGridTableOpened_row_10' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTableOpened','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTableOpened','1','title']	}	],
	'launch.hrdemoSimulationGridTableOpened_row_11' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTableOpened','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTableOpened','1','title']	}	],
	'launch.hrdemoSimulationGridTableOpened_row_12' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTableOpened','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTableOpened','1','title']	}	],
	'launch.hrdemoSimulationGridTableOpened_row_13' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTableOpened','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTableOpened','1','title']	}	],
	'launch.hrdemoSimulationGridTableOpened_row_14' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTableOpened','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTableOpened','1','title']	}	],
	'launch.hrdemoSimulationGridTableOpened_row_15' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTableOpened','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTableOpened','1','title']	}	],
	'launch.hrdemoSimulationGridTableOpened_row_16' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationTypePopUp'	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionID','hrdemoSimulationGridTableOpened','0','title']	},
	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedPositionName','hrdemoSimulationGridTableOpened','1','title']	}	],
	'launch.hrdemoFilterGridTableButton1' : [	{ 		action: app.fn.showPopup, 		argument: 'HRDemoSimulationPopUp'	}	],
	'launch.hrdemoFilterGridTableButton1_5' : [	{ 		action: app.fn.showPopup, 		argument: 'HRDemoSimulationPopUp'	}	],
	'launch.hrdemoReportControlGridMinButton1' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControl'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControlMin'	}	],
	'launch.hrdemoReportControlGridMinButton2' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControl'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControlMin'	}	],
	'launch.hrdemoReportControlMinGridMinButton1' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControl'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControlMin'	}	],
	'launch.hrdemoReportControlMinGridMinButton2' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControl'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControlMin'	}	],
	'launch.hrdemoReportControlMinGridText1' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControl'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControlMin'	}	],
	'launch.hrdemoReportControlMinGridText2' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControl'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControlMin'	}	],
	'launch.hrdemoReportControlMinGridText3' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControl'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoReportControlMin'	}	],
	'launch.hrdemoFilterTitleGridCellButton' : [	{ 		action: app.fn.backToMain, 	}	],
	'segmentedControlTab1.hrdemoEditGroupSegmented' : [	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupListGridTable','HRDemoSimulationControlGridRow2_OrgBudget','HRDemoSimulationOrgBudgetGridTable2']	},
	{ 		action: app.fn.showWidgets, 		argument: ['hrdemoEditGroupSelectorGrid','HRDemoSimulationControlGridRow2','hrdemoSimulationGridTable','sandyDevSimulationGridTable2','HRDemoSimulationAddNewButton']	}	],
	'segmentedControlTab2.hrdemoEditGroupSegmented' : [	{ 		action: app.fn.showWidgets, 		argument: ['hrdemoEditGroupListGridTable','HRDemoSimulationControlGridRow2_OrgBudget','HRDemoSimulationOrgBudgetGridTable2']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGrid','HRDemoSimulationControlGridRow2','sandyDevSimulationControlGridRow2_Opened1','sandyDevSimulationGridTable2','HRDemoSimulationAddNewButton']	}	],
	'launch.hrdemoEditGroupSelectorGridLevel2GridTable_row_0' : [	{ 		action: app.fn.showWidget, 		argument: 'hrdemoEditGroupSelectorGridRow_01_03'	},
	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoEditGroupSelectorGridRow_01_04'	}	],
	'launch.hrdemoEditGroupSelectorGridLevel1GridTable_row_0' : [	{ 		action: app.fn.showWidget, 		argument: 'hrdemoEditGroupSelectorGridRow_01_02'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_04']	}	],
	'launch.hrdemoReportCommentEditSaveBtn' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoReportCommentEdit1'	},
	{ 		action: app.fn.showWidget, 		argument: 'hrdemoReportCommentShow1'	}	],
	'launch.hrdemoReportCommentShowEditBtn' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoReportCommentShow1'	},
	{ 		action: app.fn.showWidget, 		argument: 'hrdemoReportCommentEdit1'	}	],
	'launch.hrdemoReportComment2ShowEditBtn' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoReportComment2Show1'	},
	{ 		action: app.fn.showWidget, 		argument: 'hrdemoReportComment2Edit1'	}	],
	'launch.hrdemoReportComment3ShowEditBtn' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoReportComment3Show1'	},
	{ 		action: app.fn.showWidget, 		argument: 'hrdemoReportComment3Edit1'	}	],
	'launch.hrdemoReportComment5EditSaveBtn' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoReportComment5Edit1'	},
	{ 		action: app.fn.showWidget, 		argument: 'hrdemoReportComment5Show1'	}	],
	'launch.hrdemoReportComment5ShowEditBtn' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoReportComment5Show1'	},
	{ 		action: app.fn.showWidget, 		argument: 'hrdemoReportComment5Edit1'	}	],
	'launch.hrdemoReportComment4ShowEditBtn' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoReportComment4Show1'	},
	{ 		action: app.fn.showWidget, 		argument: 'hrdemoReportComment4Edit1'	}	],
	'launch.hrdemoReportComment4EditSaveBtn' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoReportComment4Edit1'	},
	{ 		action: app.fn.showWidget, 		argument: 'hrdemoReportComment4Show1'	}	],
	'launch.hrdemoReportComment3EditSaveBtn' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoReportComment3Edit1'	},
	{ 		action: app.fn.showWidget, 		argument: 'hrdemoReportComment3Show1'	}	],
	'launch.hrdemoReportComment2EditSaveBtn' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoReportComment2Edit1'	},
	{ 		action: app.fn.showWidget, 		argument: 'hrdemoReportComment2Show1'	}	],
	'launch.hrdemoEditGroupFilterGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterContainer'	}	],
	'launch.hrdemoEditGroupFilterGridRefresh' : [	{ 		action: app.fn.forceRefresh, 		argument: 'adminPortalWidgetCatalogHorizontalTable'	}	],
	'launch.hrdemoEditGroupFilterContainerGridButton1' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType1Container'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterContainer'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['FilterType','Salary']	}	],
	'launch.hrdemoEditGroupFilterContainerGridButton2' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterContainer'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType2Container'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['FilterType','Age']	}	],
	'launch.hrdemoEditGroupFilterContainerGridButton3' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType3Container'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterContainer'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['FilterType','Supervisor']	}	],
	'launch.hrdemoEditGroupFilterContainerGridButton4' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType4Container'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterContainer'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['FilterType','Sex']	}	],
	'launch.hrdemoEditGroupFilterContainerGridButton5' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterContainer'	},
	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType5Container'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['FilterType','Status']	}	],
	'launch.hrdemoEditGroupFilterContainerGridButton6' : [	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterContainer'	},
	{ 		action: app.fn.togglePopup, 		argument: 'adminPortalWidgetCatalogFilterType6Container'	},
	{ 		action: app.fn.addSystemValue, 		argument: ['FilterType','PageWidget']	}	],
	'launch.hrdemoEditGroupFilterContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterContainer'	}	],
	'launch.hrdemoEditGroupFilterType1ContainerGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType1Container'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_04','hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_02']	}	],
	'launch.hrdemoEditGroupFilterType1ContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType1Container'	}	],
	'launch.hrdemoEditGroupFilterType2ContainerGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType2Container'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_04','hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_02']	}	],
	'launch.hrdemoEditGroupFilterType2ContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType2Container'	}	],
	'launch.hrdemoEditGroupFilterType3ContainerGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType3Container'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_04','hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_02']	}	],
	'launch.hrdemoEditGroupFilterType3ContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType3Container'	}	],
	'launch.hrdemoEditGroupFilterType4ContainerGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType4Container'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_04','hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_02']	}	],
	'launch.hrdemoEditGroupFilterType4ContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType4Container'	}	],
	'launch.hrdemoEditGroupFilterType5ContainerGridAddButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType5Container'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_04','hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_02']	}	],
	'launch.hrdemoEditGroupFilterType5ContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupFilterType5Container'	}	],
	'launch.hrselector1' : [	{ 		action: app.fn.showWidget, 		argument: 'hrdemoEditGroupSelectorGridRow_01_02'	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_04']	}	],
	'launch.hrselector2' : [	{ 		action: app.fn.showWidget, 		argument: 'hrdemoEditGroupSelectorGridRow_01_03'	},
	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoEditGroupSelectorGridRow_01_04'	}	],
	'launch.hrselector3' : [	{ 		action: app.fn.showWidget, 		argument: 'hrdemoEditGroupSelectorGridRow_01_04'	}	],
	'launch.hrdemoSimulationGridTable_row_1' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationPersonPopUp'	}	],
	'launch.hrdemoFilterGridTable_row_3' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoEditGroup'	}	],
	'launch.hrdemoEditGroupTitleGridEditButton' : [	{ 		action: app.fn.showWidgets, 		argument: ['hrdemoEditGroupTitleGridTextEditable','hrdemoEditGroupTitleGridSaveNameButton']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupTitleGridText','hrdemoEditGroupTitleGridEditButton']	}	],
	'launch.hrdemoEditGroupTitleGridSaveNameButton' : [	{ 		action: app.fn.showWidgets, 		argument: ['hrdemoEditGroupTitleGridText','hrdemoEditGroupTitleGridEditButton']	},
	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupTitleGridSaveNameButton','hrdemoEditGroupTitleGridTextEditable']	}	],
	'launch.hrdemoFilterGridTable_row_4' : [	{ 		action: app.fn.openPage, 		argument: 'HRDemoSimulation'	}	],
	'launch.hrdemoFilterGridTableButton15' : [	{ 		action: app.fn.showPopup, 		argument: 'HRDemoSimulationPopUp'	}	],
	'launch.hrdemoEditGroupTitleGridSaveButton' : [	{ 		action: app.fn.openPrevPage, 	}	],
	'launch.hrdemoFilterAddNewGridButton2' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoFilterAddNewContainer'	}	],
	'launch.hrdemoFilterAddNewGroupButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoFilterAddNewContainer'	}	],
	'launch.hrdemoFilterAddNewGridCancelButton2' : [	{ 		action: app.fn.toggleWidget, 		argument: 'hrdemoFilterAddNewContainer'	}	],
	'launch.HRDemoSimulationAddNewButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationAddNewContainer'	}	],
	'launch.hrdemoSimulationAddNewGridCancelButton2' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationAddNewContainer'	}	],
	'launch.hrdemoEditGroupTitleGridCellButton' : [	{ 		action: app.fn.openPrevPage, 	}	],
	'launch.HRDemoSimulationTitleGridCellButton' : [	{ 		action: app.fn.openPrevPage, 	}	],
	'launch.hrdemoEditGroupFilterGridCancel1' : [	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_04','hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_02']	}	],
	'launch.hrdemoEditGroupFilterGridCancel2' : [	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_04','hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_02']	}	],
	'launch.hrdemoEditGroupFilterGridCancel3' : [	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_04','hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_02']	}	],
	'launch.hrdemoEditGroupFilterGridCancel4' : [	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_04','hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_02']	}	],
	'launch.hrdemoEditGroupFilterGridCancel5' : [	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_04','hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_02']	}	],
	'launch.hrdemoEditGroupFilterGridDeleteAll' : [	{ 		action: app.fn.hideWidgets, 		argument: ['hrdemoEditGroupSelectorGridRow_01_04','hrdemoEditGroupSelectorGridRow_01_03','hrdemoEditGroupSelectorGridRow_01_02']	}	],
	'launch.hrdemoEditGroupShareContainerGridCancelButton' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoEditGroupShareContainer'	}	],
	'launch.hrdemoEditGroupTitleGridShareButton' : [	{ 		action: app.fn.toggleWidget, 		argument: 'hrdemoEditGroupShareContainer'	}	],
	'segmentedControlTab1.hrdemoFilterSegmented' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoFilter'	}	],
	'segmentedControlTab2.hrdemoFilterSegmented' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoOrgLevels'	}	],
	'segmentedControlTab1.hrdemoOrgBudgetSegmented' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoFilter'	}	],
	'segmentedControlTab2.hrdemoOrgBudgetSegmented' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoOrgBudgetPage'	}	],
	'launch.hrdemoOrgLevelsTitleGridCellButton' : [	{ 		action: app.fn.backToMain, 	}	],
	'segmentedControlTab1.hrdemoOrgLevelsSegmented' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoFilter'	}	],
	'segmentedControlTab2.hrdemoOrgLevelsSegmented' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoOrgLevels'	}	],
	'launch.hrdemoOrgLevelsGridTableButton1_5' : [	{ 		action: app.fn.showPopup, 		argument: 'HRDemoSimulationPopUp'	}	],
	'launch.hrdemoOrgLevelsAddNewGridCancelButton2' : [	{ 		action: app.fn.toggleWidget, 		argument: 'hrdemoFilterAddNewContainer'	}	],
	'launch.hrdemoOrgLevelsAddNewGridButton2' : [	{ 		action: app.fn.hideWidget, 		argument: 'hrdemoFilterAddNewContainer'	}	],
	'launch.hrdemoOrgLevelsGridTable_row_1' : [	{ 		action: app.fn.addGridTableSystemValue, 		argument: ['SelectedOrgLevel','hrdemoOrgLevelsGridTable','0','title']	},
	{ 		action: app.fn.openPage, 		argument: 'hrdemoOrgBudgetPage'	}	],
	'launch.hrdemoOrgBudgetTitleGridCellButton' : [	{ 		action: app.fn.openPage, 		argument: 'hrdemoOrgLevels'	}	],
	'launch.HRDemoSimulationAddNewButton_Opened' : [	{ 		action: app.fn.togglePopup, 		argument: 'hrdemoSimulationAddNewContainer'	}	],
};
