﻿/* global app */'use strict';app.repository = {
adminPortalUserGridButton:{
                                        app.widgetValue['activeUserName'] = app.utils.toTitleCase(r.Cells[1].Value);
                                        app.widgetValue['selectedApplication'] = r.Cells[0].Value; 
                                        app.widgetValue['defaultFilter'] ='[zSYS Analogic UI Widget Parameter].([zSYS Analogic WidgetParameters].[id],[zSYS Analogic UI Widget Parameter Measure].[value]) <> \\"\\"'; 
                                        return app.utils.toTitleCase(r.Cells[1].Value);
                                    }}
adminPortalWidgetCatalogUserGridApplicationDropBox:{
                    return {name: r.Cells[x].FormattedValue, on: r.Cells[x].FormattedValue === v('selectedApplication')};
                }
adminPortalWidgetCatalogUserGridButton:{
                                        app.widgetValue['activeUserName'] = app.utils.toTitleCase(r.Cells[1].Value);
                                        app.widgetValue['selectedApplication'] = r.Cells[0].Value; 
                                        return app.utils.toTitleCase(r.Cells[1].Value);
                                    }}
adminPortalWidgetCatalogFilterGridParentDropBox:{
{TM1SORT( {Filter( {TM1DRILLDOWNMEMBER( { [zSYS Analogic UI Definition].[${db.selectedApplication}] }, ALL, RECURSIVE )}, [zSYS Analogic UI Definition].CurrentMember.Level.Ordinal <> 0)}, ASC)}
ON COLUMNS FROM [}ElementAttributes_zSYS Analogic UI Definition] WHERE ([}ElementAttributes_zSYS Analogic UI Definition].[Caption])"}`
                    return {name: r.Cells[x].FormattedValue, on: false};
                }
adminPortalWidgetCatalogFilterGridTypeDropBox:{
                    return {name: r.value[x].Name, on: false};
                }
adminPortalWidgetCatalogFilterGridFilter1:{
                                        app.widgetValue['filter1Value'] = r.Cells[1].FormattedValue;
                                        return  r.Cells[0].Value ==1 ? true : false;
                                    }}
adminPortalWidgetCatalogFilterGridText1:{
                                        return  r.Cells[0].FormattedValue;

                                    }}
adminPortalWidgetCatalogFilterGridCancel1:{
                "Parameters": [
                                {"Name": "pWidgetID", "Value": "adminPortalWidgetCatalogFilterGridFilter1"},
                            
                       ]
            }`
adminPortalWidgetCatalogFilterGridFilter2:{
                                        app.widgetValue['filter2Value'] = r.Cells[1].FormattedValue;
                                        return  r.Cells[0].Value ==1 ? true : false;


                                    }}
adminPortalWidgetCatalogFilterGridText2:{
                                        return  r.Cells[0].FormattedValue;

                                    }}
adminPortalWidgetCatalogFilterGridCancel2:{
                "Parameters": [
                                {"Name": "pWidgetID", "Value": "adminPortalWidgetCatalogFilterGridFilter2"},
                            
                       ]
            }`
adminPortalWidgetCatalogFilterGridFilter3:{
                                        app.widgetValue['filter3Value'] = r.Cells[1].FormattedValue;
                                        return  r.Cells[0].Value ==1 ? true : false;


                                    }}
adminPortalWidgetCatalogFilterGridText3:{
                                        return  r.Cells[0].FormattedValue;

                                    }}
adminPortalWidgetCatalogFilterGridCancel3:{
                "Parameters": [
                                {"Name": "pWidgetID", "Value": "adminPortalWidgetCatalogFilterGridFilter3"},
                            
                       ]
            }`
adminPortalWidgetCatalogFilterGridFilter4:{
                                        app.widgetValue['filter4Value'] = r.Cells[1].FormattedValue;
                                        return  r.Cells[0].Value ==1 ? true : false;


                                    }}
adminPortalWidgetCatalogFilterGridText4:{
                                        return  r.Cells[0].FormattedValue;

                                    }}
adminPortalWidgetCatalogFilterGridCancel4:{
                "Parameters": [
                                {"Name": "pWidgetID", "Value": "adminPortalWidgetCatalogFilterGridFilter4"},
                            
                       ]
            }`
adminPortalWidgetCatalogFilterGridFilter5:{
                                        app.widgetValue['filter5Value'] = r.Cells[1].FormattedValue;
                                        return  r.Cells[0].Value ==1 ? true : false;
                                    }}
adminPortalWidgetCatalogFilterGridText5:{
                                        return  r.Cells[0].FormattedValue;

                                    }}
adminPortalWidgetCatalogFilterGridCancel5:{
                "Parameters": [
                                {"Name": "pWidgetID", "Value": "adminPortalWidgetCatalogFilterGridFilter5"},
                            
                       ]
            }`
adminPortalWidgetCatalogFilterGridDeleteAll:{
                                        return  r.Cells[0].Value ==1 ? true : false;
                                        app.widgetValue['filter1Value'] = r.Cells[1].FormattedValue;

                                    }}
adminPortalWidgetCatalogPageNumber:{
COUNT({
	       {FILTER( {FILTER({ {FILTER({ {FILTER({TM1DRILLDOWNMEMBER({[zSYS Analogic UI Definition].[${db.selectedApplication}]},ALL, RECURSIVE )},
               [zSYS Analogic UI Definition].[Application Caption] = '${db.selectedApplication}'
                  	)}
               },InStr([zSYS Analogic UI Definition].[Parent], '${ db.adminPortalWidgetCatalogFilterGridParentDropBox && db.adminPortalWidgetCatalogFilterGridParentDropBox.value ? db.adminPortalWidgetCatalogFilterGridParentDropBox.value : ''}') <> 0
			   )}
				},
               InStr([zSYS Analogic UI Definition].[Type], '${db.adminPortalWidgetCatalogFilterGridTypeDropBox && db.adminPortalWidgetCatalogFilterGridTypeDropBox.value ? db.adminPortalWidgetCatalogFilterGridTypeDropBox.value : ''}' ) <> 0
			   )},
               InStr([zSYS Analogic UI Definition].[ID], '${db.adminPortalWidgetCatalogSearchBox && db.adminPortalWidgetCatalogSearchBox.value ? db.adminPortalWidgetCatalogSearchBox.value : ''}' ) <> 0 OR
               InStr([zSYS Analogic UI Definition].[Caption], '${db.adminPortalWidgetCatalogSearchBox && db.adminPortalWidgetCatalogSearchBox.value ? db.adminPortalWidgetCatalogSearchBox.value : ''}' ) <> 0 )}})
SELECT
{[zSYS Analogic UI Definition].[${db.selectedApplication}]} ON ROWS,
{[}ElementAttributes_zSYS Analogic UI Definition].[RowCount]} ON COLUMNS
FROM [}ElementAttributes_zSYS Analogic UI Definition]"}`
                                        app.widgetValue['systemValueMaxPage'] = v('adminPortalWidgetCatalogPagingDropBox.value')  ? Math.ceil(parseInt(r.Cells[0].FormattedValue)/parseInt(v('adminPortalWidgetCatalogPagingDropBox.value'))) : 10;
                                        return v('adminPortalWidgetCatalogPageNumber.value') ? v('adminPortalWidgetCatalogPageNumber.value') : 1;
                                    }}
adminPortalWidgetCatalogPagingDropBox:{
adminPortalWidgetCatalogHorizontalTable:{
SELECT
    {SUBSET(
	            { FILTER(
	               {FILTER(
	                  {FILTER( 
	                    {FILTER( 
	                      {FILTER( 
	                        {FILTER( 
	                          {FILTER( 
	                            {TM1DRILLDOWNMEMBER({[zSYS Analogic UI Definition].[${db.selectedApplication}]},ALL, RECURSIVE )},
	                           [zSYS Analogic UI Definition].[Application Caption] = '${db.selectedApplication}')},
	                         ${db.filter1Value && db.filter1Value.length > 0 ? db.filter1Value : db.defaultFilter})},
	                        ${db.filter1Value && db.filter2Value.length > 0 ? db.filter2Value : db.defaultFilter})},
	                      ${db.filter1Value && db.filter3Value.length > 0 ? db.filter3Value : db.defaultFilter})},
	                    ${db.filter1Value && db.filter4Value.length > 0 ? db.filter4Value : db.defaultFilter})},
	                  ${db.filter1Value && db.filter5Value.length > 0 ? db.filter5Value : db.defaultFilter})},      
          InStr(UCASE([zSYS Analogic UI Definition].[ID]), '${db.adminPortalWidgetCatalogSearchBox && db.adminPortalWidgetCatalogSearchBox.value ? db.adminPortalWidgetCatalogSearchBox.value.toUpperCase() : ''}' ) <> 0 OR
               InStr(UCASE([zSYS Analogic UI Definition].[Caption]), '${db.adminPortalWidgetCatalogSearchBox && db.adminPortalWidgetCatalogSearchBox.value ? db.adminPortalWidgetCatalogSearchBox.value.toUpperCase() : ''}' ) <> 0 )},
              ${db.adminPortalWidgetCatalogPageNumber && db.adminPortalWidgetCatalogPagingDropBox.value ? (db.adminPortalWidgetCatalogPageNumber.value -1) * db.adminPortalWidgetCatalogPagingDropBox.value : 0} , ${db.adminPortalWidgetCatalogPagingDropBox && db.adminPortalWidgetCatalogPagingDropBox.value ? db.adminPortalWidgetCatalogPagingDropBox.value : 10})}
                  ON ROWS,
                  ({[}ElementAttributes_zSYS Analogic UI Definition].[ID],
                  [}ElementAttributes_zSYS Analogic UI Definition].[Parent],
                  [}ElementAttributes_zSYS Analogic UI Definition].[Caption],
                  [}ElementAttributes_zSYS Analogic UI Definition].[Type]})
                   ON COLUMNS
                  FROM [}ElementAttributes_zSYS Analogic UI Definition]"}`
                        return {active: r.Cells[x].Members[0].Attributes.WidgetsEnabled === "1" ? true : false};
                        app.widgetValue['systemValuePageMaximum'] = 5;
                    },(r, x) => {
                        return {value: r.Cells[x].FormattedValue};
                    },(r, x) => {
                        return {value: r.Cells[x + 2].FormattedValue};
                    },(r, x) => {
                        return {value: r.Cells[x + 3].FormattedValue};
                    },(r, x) => {
                        return {value: r.Cells[x + 1].FormattedValue};
                    },(r, x) => {
                        return {active: r.Cells[x + 3].FormattedValue !== "PageWidget" && r.Cells[x + 3].FormattedValue !== "Application"};
                    },(r, x) => {
                        return {active: r.Cells[x + 3].FormattedValue !== "Application"};

                    }]
adminPortalWidgetCatalogAddNewTitle:{
            return {body: db.adminPortalWidgetCatalogHorizontalTable && db.adminPortalWidgetCatalogHorizontalTable.choose ? db.adminPortalWidgetCatalogHorizontalTable.choose.widget: ""};
        },
adminPortalWidgetCatalogAddNewGridType:{
                    return {name: r.value[x].Name, on: false};
	             }
adminPortalWidgetCatalogAddNewGridUserSpec:{
adminPortalWidgetCatalogAddNewGridColumnNum:{
            return {visible: v('adminPortalWidgetCatalogAddNewGridType.value') && (v('adminPortalWidgetCatalogAddNewGridType.value') === 'GridWidget' || v('adminPortalWidgetCatalogAddNewGridType.value') === 'GridTableWidget') };
        },
adminPortalWidgetCatalogAddNewGridRowNum:{
            return {visible: v('adminPortalWidgetCatalogAddNewGridType.value') && v('adminPortalWidgetCatalogAddNewGridType.value') === 'GridWidget'};
        },
adminPortalWidgetCatalogAddNewGridButton:{
                "Parameters": [
                                {"Name": "pParentWidget", "Value": "${db.adminPortalWidgetCatalogHorizontalTable.choose.widget}"},
                                {"Name": "pWidgetName", "Value": "${db.adminPortalWidgetCatalogAddNewGridElementName.value}"},
                                {"Name": "pWidgetPosition", "Value": "${db.adminPortalWidgetCatalogAddNewGridPosition.value}"},
                                {"Name": "pWidgetType", "Value": "${db.adminPortalWidgetCatalogAddNewGridType.value}"},
                                {"Name": "pUserSpecific", "Value": "${db.adminPortalWidgetCatalogAddNewGridUserSpec.value}"},
                                {"Name": "pColumnNumber", "Value": "${db.adminPortalWidgetCatalogAddNewGridColumnNum.value}"},
                                {"Name": "pRowNumber", "Value": "${db.adminPortalWidgetCatalogAddNewGridRowNum.value}"}



                       ]
            }`
adminPortalWidgetCatalogAddNewGridSourceApplication:{
                    return {name: r.Cells[x].FormattedValue, on: r.Cells[x].FormattedValue === v('selectedApplication')};
                }
adminPortalWidgetCatalogAddNewGridSourceWidget:{
		SELECT NON EMPTY
               {FILTER( {TM1SUBSETALL( [zSYS Analogic UI Definition] )}, [zSYS Analogic UI Definition].[ApplicationCaption] = '${(db.adminPortalWidgetCatalogAddNewGridSourceApplication || {}).value || db.selectedApplication}')}
                   ON COLUMNS 
                  FROM [}ElementAttributes_zSYS Analogic UI Definition]
                  WHERE ([}ElementAttributes_zSYS Analogic UI Definition].[Caption])
                  "}`
                    return {name: r.Cells[x].FormattedValue, on: false};
                }
adminPortalWidgetCatalogAddNewGridCloneButton:{
                "Parameters": [
                                {"Name": "pWidgetID", "Value": "${db.adminPortalWidgetCatalogAddNewGridCloneElementName.value}"},
                                {"Name": "pParentWidget", "Value": "${db.adminPortalWidgetCatalogHorizontalTable.choose.widget}"},
                                {"Name": "pSourceWidgetID", "Value": "${db.adminPortalWidgetCatalogAddNewGridSourceWidget.value}"},
                                {"Name": "pContentDefinition", "Value": "${db.adminPortalWidgetCatalogAddNewGridContent.value}"},
                                {"Name": "pWidgetPosition", "Value": "${db.adminPortalWidgetCatalogAddNewGridClonePosition.value}"}
                       ]
            }`
adminPortalWidgetCatalogAddNewGridCloneAllSourceApplication:{
                    return {name: r.Cells[x].FormattedValue, on: r.Cells[x].FormattedValue === v('selectedApplication')};
                }
adminPortalWidgetCatalogAddNewGridCloneAllSourceWidget:{
		SELECT NON EMPTY
               {FILTER( {TM1SUBSETALL( [zSYS Analogic UI Definition] )}, [zSYS Analogic UI Definition].[ApplicationCaption] = '${(db.adminPortalWidgetCatalogAddNewGridCloneAllSourceApplication || {}).value || 
  db.selectedApplication}')}
                   ON COLUMNS 
                  FROM [}ElementAttributes_zSYS Analogic UI Definition]
                  WHERE ([}ElementAttributes_zSYS Analogic UI Definition].[Caption])
                  "}`
                    return {name: r.Cells[x].FormattedValue, on: false};
                }
adminPortalWidgetCatalogAddNewGridCloneAllButton:{
                "Parameters": [
                                {"Name": "pParentWidget", "Value": "${db.adminPortalWidgetCatalogHorizontalTable.choose.widget}"},
                                {"Name": "pSourceWidgetID", "Value": "${db.adminPortalWidgetCatalogAddNewGridCloneAllSourceWidget.value}"},
                                {"Name": "pContentDefinition", "Value": "${db.adminPortalWidgetCatalogAddNewGridCloneAllContent.value}"},
                                {"Name": "pWidgetPosition", "Value": "${db.adminPortalWidgetCatalogAddNewGridCloneAllPosition.value}"},
                                {"Name": "pSearchSubstring", "Value": "${db.adminPortalWidgetCatalogAddNewGridCloneAllSearch.value}"},
                                {"Name": "pReplacementString", "Value": "${db.adminPortalWidgetCatalogAddNewGridCloneAllReplace.value}"},
                                {"Name": "pAddPrefix", "Value": "${db.adminPortalWidgetCatalogAddNewGridCloneAllPrefix.value}"},
                                {"Name": "pAddPostfix", "Value": "${db.adminPortalWidgetCatalogAddNewGridCloneAllPostfix.value}"},

                       ]
            }`
adminPortalWidgetCatalogDeleteWarnGridButton:{
                "Parameters": [
                                {"Name": "pWidgetName", "Value": "${db.adminPortalWidgetCatalogHorizontalTable.open.widget}"}
                       ]
            }`
adminPortalWidgetCatalogDeployWarnGridButton:{
adminPortalWidgetCatalogFilterType1ContainerGridDropboxName:{
                    return {name: r.Cells[x].Members[1].Name, on: false};
                }
adminPortalWidgetCatalogFilterType1ContainerGridAddButton:{
                "Parameters": [
                                {"Name": "pFilterType", "Value": "${db.FilterType}"},
                                {"Name": "pFilterValue", "Value": "${db.adminPortalWidgetCatalogFilterType1ContainerGridTextBoxValue.value}"},
                                {"Name": "pWidgetParameterName", "Value": "${db.adminPortalWidgetCatalogFilterType1ContainerGridDropboxName.value}"},
                                {"Name": "pWidgetParamterLogExp", "Value": "${db.FilterLogExp}"}                           
                       ]
            }`
adminPortalWidgetCatalogFilterType2ContainerGridDropBox:{
adminPortalWidgetCatalogFilterType2ContainerGridAddButton:{
                "Parameters": [
                                {"Name": "pFilterType", "Value": "${db.FilterType}"},
                                {"Name": "pFilterValue", "Value": "${db.adminPortalWidgetCatalogFilterType2ContainerGridDropBox.value}"}                         
                       ]
            }`
adminPortalWidgetCatalogFilterType3ContainerGridDropBox:{
adminPortalWidgetCatalogFilterType3ContainerGridAddButton:{
                "Parameters": [
                                {"Name": "pFilterType", "Value": "${db.FilterType}"},
                                {"Name": "pFilterValue", "Value": "${db.adminPortalWidgetCatalogFilterType3ContainerGridDropBox.value}"}                           
                       ]
            }`
adminPortalWidgetCatalogFilterType4ContainerGridDropBox:{
adminPortalWidgetCatalogFilterType4ContainerGridAddButton:{
                "Parameters": [
                                {"Name": "pFilterType", "Value": "${db.FilterType}"},
                                {"Name": "pFilterValue", "Value": "${db.adminPortalWidgetCatalogFilterType4ContainerGridDropBox.value}"}
                       ]
            }`
adminPortalWidgetCatalogFilterType5ContainerGridDropBox:{
{TM1SORT( {Filter( {TM1DRILLDOWNMEMBER( { [zSYS Analogic UI Definition].[${db.selectedApplication}] }, ALL, RECURSIVE )}, [zSYS Analogic UI Definition].CurrentMember.Level.Ordinal <> 0)}, ASC)}
ON COLUMNS FROM [}ElementAttributes_zSYS Analogic UI Definition] WHERE ([}ElementAttributes_zSYS Analogic UI Definition].[Caption])"}`
                    return {name: r.Cells[x].FormattedValue, on: false};
                }
adminPortalWidgetCatalogFilterType5ContainerGridAddButton:{
                "Parameters": [
                                {"Name": "pFilterType", "Value": "${db.FilterType}"},
                                {"Name": "pFilterValue", "Value": "${db.adminPortalWidgetCatalogFilterType5ContainerGridDropBox.value}"}                      
                       ]
            }`
adminPortalWidgetCatalogFilterType6ContainerGridDropBox:{
{TM1SORT( {Filter( {TM1DRILLDOWNMEMBER( { [zSYS Analogic UI Definition].[${db.selectedApplication}] }, ALL, RECURSIVE )}, [zSYS Analogic UI Definition].CurrentMember.Level.Ordinal =1)}, ASC)}
ON COLUMNS FROM [}ElementAttributes_zSYS Analogic UI Definition] WHERE ([}ElementAttributes_zSYS Analogic UI Definition].[Caption])"}`
                    return {name: r.Cells[x].FormattedValue, on: false};
                }
adminPortalWidgetCatalogFilterType6ContainerGridAddButton:{
                "Parameters": [
                                {"Name": "pFilterType", "Value": "${db.FilterType}"},
                                {"Name": "pFilterValue", "Value": "${db.adminPortalWidgetCatalogFilterType6ContainerGridDropBox.value}"}                     
                       ]
            }`
adminPortalEventCatalogUserGridApplicationDropBox:{
                    return {name: r.Cells[x].FormattedValue, on: r.Cells[x].FormattedValue === v('selectedApplication')};
                }
adminPortalEventCatalogUserGridButton:{
                                        app.widgetValue['activeUserName'] = app.utils.toTitleCase(r.Cells[1].Value);
                                        app.widgetValue['selectedApplication'] = r.Cells[0].Value; 
                                        return app.utils.toTitleCase(r.Cells[1].Value);
                                    }}
adminPortalEventCatalogHorizontalTable:{
		SELECT NON EMPTY
                {FILTER( { HIERARCHIZE( {TM1SUBSETALL( [zSYS Analogic UI Action] )} ) }, 
                ([zSYS Analogic UI Action].[Application Caption] = '${db.selectedApplication}' AND
                [zSYS Analogic UI Action].[Application Caption] <> 'Application')
                )}*
            {TM1FILTERBYLEVEL( {TM1SUBSETALL( [zSYS Analogic UI ActionList] )}, 0)} *
        	{[zSYS Analogic UI Action Definition Measure].[action]}
                   ON COLUMNS 
                  FROM [zSYS Analogic UI Action Definition]
                  "}`
                        return {active: true};
                    },(r, x) => {
                        return {value: r.Cells[x].Members[0].Attributes.Caption_Default};
                    },(r, x) => {
                        return {value: r.Cells[x].Members[0].Attributes.WidgetType ? r.Cells[x].Members[0].Attributes.WidgetType : ''};
                    },(r, x) => {
                        return {value: r.Cells[x].Members[1].Attributes.Caption_Default};
                    },(r, x) => {
                        return {value: r.Cells[x].FormattedValue ? r.Cells[x].FormattedValue : ''};
                    },() => {
                        return {active: true};
                    }]
                "Parameters": [
                                {"Name": "pAction", "Value": "${db.HorizontalTableEventMap.delete.eventid}"},
                                {"Name": "pActionList", "Value": "${db.HorizontalTableEventMap.delete.actionorder}"},
                                {"Name": "pActionType", "Value": "${db.HorizontalTableEventMap.delete.actionname}"}
                       ]
            }`
adminPortalDataCatalogUserGridApplicationDropBox:{
                    return {name: r.Cells[x].FormattedValue, on: r.Cells[x].FormattedValue === v('selectedApplication')};
                }
adminPortalDataCatalogUserGridButton:{
                                        app.widgetValue['activeUserName'] = app.utils.toTitleCase(r.Cells[1].Value);
                                        app.widgetValue['selectedApplication'] = r.Cells[0].Value; 
                                        return app.utils.toTitleCase(r.Cells[1].Value);
                                    }}
adminPortalDataCatalogHorizontalTable:{

		SELECT FILTER (
    		 {FILTER(  {TM1SUBSETALL( [zSYS Analogic UI Definition] )}, 
                InStr([zSYS Analogic UI Definition].[ApplicationCaption], '${db.selectedApplication}' ) <> 0 
                )} *
            {TM1FILTERBYLEVEL( {TM1SUBSETALL( [zSYS Analogic UI DataSet List] )}, 0)} *
            {TM1FILTERBYLEVEL( {TM1SUBSETALL( [zSYS Analogic UI Data Repository Event Type] )}, 0)} 
            
            ,
            [zSYS Analogic UI Data Repository Measure].[UsedinWidget] > 0)
                   ON COLUMNS, 
                 {[zSYS Analogic UI Data Repository Measure].[UsedinWidget]}  ON ROWS
                  FROM [zSYS Analogic UI Data Repository]
                  "}`
                        return {active: true};
                    },(r, x) => {
                        return {value: r.Cells[x].Members[1].Attributes.Caption};
                    },(r, x) => {
                        return {value: r.Cells[x].Members[3].Attributes.Caption};
                    },(r, x) => {
                        return {value: r.Cells[x].Members[2].Attributes.Caption};
                    }]
adminPortalSystemConfigUserGridApplicationDropBox:{
                    return {name: r.Cells[x].FormattedValue, on: r.Cells[x].FormattedValue === v('selectedApplication')};
                }
adminPortalSystemConfigUserGridButton:{
                                        app.widgetValue['activeUserName'] = app.utils.toTitleCase(r.Cells[1].Value);
                                        app.widgetValue['selectedApplication'] = r.Cells[0].Value; 
                                        return app.utils.toTitleCase(r.Cells[1].Value);
                                    }}
adminPortalSystemConfigHorizontalTable:{
                        return {value: r.Cells[x].Members[1].Name};
                    },(r, x) => {
                        return {value: r.Cells[x].FormattedValue, editable: true, ordinal: x};
                    }]
adminPortalSystemConfigJSHorizontalTable:{
                        return {value: r.Cells[x].Members[1].Name};
                    },(r, x) => {
                        return {value: r.Cells[x].FormattedValue, editable: true, ordinal: x};
                    }]
adminPortalSystemConfigWidgetTypeHorizontalTable:{
                        return {value: r.Cells[x].Members[0].Name};
                    },(r, x) => {
                        return {value: r.Cells[x].FormattedValue};
                    },(r, x) => {
                        return {value: r.Cells[x + 1].FormattedValue};
                    }]
adminPortalEventLogsUserGridButton:{
                                        app.widgetValue['activeUserName'] = app.utils.toTitleCase(r.Cells[0].Value);
                                        return app.utils.toTitleCase(r.Cells[0].Value);
                                    }}
adminPortalEventLogsApplicationLogsGridHorizontalTable:{
            TimeStamp ge ${app.utils.getTimestamp((db.adminPortalEventLogsApplicationLogsGridFrom || {}).value || "")} and
            TimeStamp le ${app.utils.getTimestamp((db.adminPortalEventLogsApplicationLogsGridTo || {}).value || "", true)}
            &$top=${ db.adminPortalEventLogsApplicationLogsGridTop ? (isNaN(parseInt(db.adminPortalEventLogsApplicationLogsGridTop.value, 10)) ? 10 : parseInt(db.adminPortalEventLogsApplicationLogsGridTop.value, 10)) : 1}&$orderby=TimeStamp desc`,
                        return {value: r.value[x].TimeStamp};
                    },(r, x) => {
                        return {value: r.value[x].Message};
                    }]
adminPortalEventLogsAuditLogsGridHorizontalTable:{
            TimeStamp ge ${app.utils.getTimestamp((db.adminPortalEventLogsAuditLogsGridFrom || {}).value || "")} and
            TimeStamp le ${app.utils.getTimestamp((db.adminPortalEventLogsAuditLogsGridTo || {}).value || "", true)}
            &$top=${ db.adminPortalEventLogsAuditLogsGridTop ? (isNaN(parseInt(db.adminPortalEventLogsAuditLogsGridTop.value, 10)) ? 10 : parseInt(db.adminPortalEventLogsAuditLogsGridTop.value, 10)) : 10}&$orderby=TimeStamp desc`,
                        return {value: r.value[x].TimeStamp ? r.value[x].TimeStamp : 'null'};
                    },(r, x) => {
                        return {value: r.value[x].User ? r.value[x].User : 'null'};
                    },(r, x) => {
                        return {value: r.value[x].Cube ? r.value[x].Cube : 'null'};
                    },(r, x) => {
                        return {value: r.value[x].Tuple ? r.value[x].Tuple.toString() : 'null'};
                    },(r, x) => {
                        return {value: r.value[x].OldValue ? r.value[x].OldValue : 'null'};
                    },(r, x) => {
                        return {value: r.value[x].NewValue ? r.value[x].NewValue.toString() : 'null'};
                    }]
adminPortalApplicationsUserGridButton:{
                                        app.widgetValue['activeUserName'] = app.utils.toTitleCase(r.Cells[0].Value);
                                        return app.utils.toTitleCase(r.Cells[0].Value);
                                    }}
adminPortalApplicationsDeploymentGridApplication:{
                    return {name: r.Cells[x].FormattedValue, on: r.Cells[x].FormattedValue === v('selectedApplication')};
                }
adminPortalApplicationsDeploymentGridFolder:{
            return db.adminPortalApplicationsDeploymentGridApplication && db.adminPortalApplicationsDeploymentGridApplication.value;
        },
            return {text: ''};
        },
                   SELECT (
                   {
                     [zSYS Analogic Framework Parameter Measure].[ParameterValue]
                    }
                    )
                    ON COLUMNS
                    FROM [zSYS Analogic Framework Parameter]
                    WHERE
                    ( [zSYS Analogic Framework Application List].[${db.adminPortalApplicationsDeploymentGridApplication.value}]
                     ,
                     [zSYS Analogic Framework Parameter].[ApplicationDeploymentFolder])
                    "}`
                                return r.Cells[0].Value;
                            }}
adminPortalApplicationsDeploymentGridButton:{
adminPortalApplicationsBackupGridApplication:{
                    return {name: r.Cells[x].FormattedValue, on: r.Cells[x].FormattedValue === v('selectedApplication')};
                }
adminPortalApplicationsBackupGridFolder:{
            return db.adminPortalApplicationsBackupGridApplication && db.adminPortalApplicationsBackupGridApplication.value;
        },
            return {body: ''};
        },
                   SELECT (
                   {
                     [zSYS Analogic Framework Parameter Measure].[ParameterValue]
                    }
                    )
                    ON COLUMNS
                    FROM [zSYS Analogic Framework Parameter]
                    WHERE
                    ( [zSYS Analogic Framework Application List].[${db.adminPortalApplicationsBackupGridApplication.value}]
                     ,
                     [zSYS Analogic Framework Parameter].[ApplicationDeploymentBackupFolder])
                    "}`
                                return r.Cells[0].Value;
                            }}
adminPortalApplicationsRestoreGridApplication:{
                    return {name: r.Cells[x].FormattedValue, on: r.Cells[x].FormattedValue === v('selectedApplication')};
                }
adminPortalApplicationsRestoreGridBackupList:{
            return db.adminPortalApplicationsRestoreGridApplication && db.adminPortalApplicationsRestoreGridApplication.value;
        },
            return [];
        },
{TM1SORT( {FILTER( {TM1SUBSETALL( [zSYS Analogic Framework Backup List] )}, [zSYS Analogic Framework Backup List].[ApplicationCaption] = \\"${db.adminPortalApplicationsRestoreGridApplication.value}\\")}, DESC)} on ROWS, 
NON EMPTY {[}ElementAttributes_zSYS Analogic Framework Backup List].[ApplicationCaption]} on COLUMNS 
FROM [}ElementAttributes_zSYS Analogic Framework Backup List]"}`
                    return {name: r.Cells[x].Members[0].Name, on: x === 0};
                }
adminPortalApplicationsRestoreGridButtonRefresh:{
adminPortalApplicationsRestoreGridButton:{
adminPortalApplicationsAddSkinGridSkinFamily:{
                    return {name: r.Cells[x].Members[1].Name, on: false};
                }
adminPortalApplicationsAddSkinGridWidgetType:{
                    return {name: r.value[x].Name, on: false};
                }
adminPortalApplicationsAddSkinGridButton:{
{"Name": "pSkinName","Value": "${db.adminPortalApplicationsAddSkinGridSkinName.value}"},
{"Name": "pWidgetType","Value": "${db.adminPortalApplicationsAddSkinGridWidgetType.value}"}]}`
adminPortalApplicationsDeleteSkinGridSkinFamily:{
                    return {name: r.Cells[x].Members[1].Name, on: false};
                }
adminPortalApplicationsDeleteSkinGridButton:{
{"Name": "pSkinName","Value": "${db.adminPortalApplicationsDeleteSkinGridSkinName.value}"}]}`
adminPortalApplicationsExportSkinGridSkinFamily:{
                    return {name: r.Cells[x].Members[1].Name, on: false};
                }
adminPortalApplicationsExportSkinGridButton:{
{"Name": "pSkinFamily","Value": "${db.adminPortalApplicationsExportSkinGridSkinFamily.value}"}]}`
adminPortalApplicationsImportSkinGridSkinFamily:{
                    return {name: r.Cells[x].Members[1].Name, on: false};
                }
adminPortalApplicationsImportSkinGridButton:{
{"Name": "pSkinFamily","Value": "${db.adminPortalApplicationsImportSkinGridSkinFamily.value}"}]}`
adminPortalApplicationsCreateNewConfigSource:{
		SELECT NON EMPTY
               {FILTER( {TM1SUBSETALL( [zSYS Analogic UI Definition] )}, [zSYS Analogic UI Definition].[Type] = \\"Application\\")}
                   ON COLUMNS 
                  FROM [}ElementAttributes_zSYS Analogic UI Definition]
                  WHERE ([}ElementAttributes_zSYS Analogic UI Definition].[Caption])
                  "}`
                    return {name: r.Cells[x].FormattedValue};
                }
adminPortalApplicationsCreateNewGridButton:{
adminPortalApplicationsDeleteApplication:{
                    return {name: r.Cells[x].FormattedValue, on: r.Cells[x].FormattedValue === v('selectedApplication')};
                }
adminPortalApplicationsDeleteGridButton:{
adminPortalWidgetConfigurationTitleGridTitle1:{
            return {title: 'Widget Configuration - ' + db.adminPortalWidgetCatalogHorizontalTable.edit.widget};
        },
adminPortalWidgetConfigurationUserGridButton:{
                                        app.widgetValue['activeUserName'] = app.utils.toTitleCase(r.Cells[0].Value);
                                        return app.utils.toTitleCase(r.Cells[0].Value);
                                    }}
adminPortalWidgetConfigurationTitleGridTitle3:{
                        return r.Cells[0].FormattedValue ;
                        }}
adminPortalWidgetConfigurationChangeGridOldParentWidget:{
            return {body: db.adminPortalWidgetCatalogHorizontalTable.edit.parentwidget};
        },
adminPortalWidgetConfigurationChangeGridParentWidget:{
	WITH MEMBER 
			[}ElementAttributes_zSYS Analogic UI Definition].[flag] AS 
                   IIF ([zSYS Analogic UI Definition].[zSYS Analogic UI Definition].CURRENTMEMBER.Name =
                   
                   [zSYS Analogic UI Definition].[${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}].Parent.Name 
                     , \\"true\\",\\"false\\")         
	SELECT (
		{FILTER(
			{FILTER( {TM1SUBSETALL( [zSYS Analogic UI Definition] )}, [zSYS Analogic UI Definition].[WidgetsEnabled] = \\"1\\")},
			[zSYS Analogic UI Definition].[zSYS Analogic UI Definition].CURRENTMEMBER.Properties(\\"Application\\") 
			= [zSYS Analogic UI Definition].[${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}].Properties(\\"Application\\") )})
	ON COLUMNS,
                ( { 
                [}ElementAttributes_zSYS Analogic UI Definition].[flag] }) 
    on ROWS 
    FROM [}ElementAttributes_zSYS Analogic UI Definition]"}`
                    return {name: r.Cells[x].Members[1].Attributes.Caption, on: r.Cells[x].FormattedValue === 'true'};
                }
adminPortalWidgetConfigurationChangeGridOldPosition:{
                                return r.Cells[x].FormattedValue;
                            }}
adminPortalWidgetConfigurationChangeGridUserSpecific:{
adminPortalWidgetConfigurationChangeGridButton:{
                "Parameters": [
                                {"Name": "pParentWidget", "Value": "${db.adminPortalWidgetConfigurationChangeGridParentWidget.value}"},
                                {"Name": "pWidgetName", "Value": "${db.adminPortalWidgetCatalogHorizontalTable .edit.widget}"},
                                {"Name": "pWidgetPosition", "Value": "${db.adminPortalWidgetConfigurationChangeGridPosition.value}"},
                                {"Name": "pUserSpecific", "Value": "${db.adminPortalWidgetConfigurationChangeGridUserSpecific.value}"}
                       ]
            }`
adminPortalWidgetConfigurationTextGridTable:{
		SELECT TM1SubsetToSet([zSYS Analogic WidgetParameters], \\"zSYS Analogic UI ${db.adminPortalWidgetCatalogHorizontalTable.edit.widgettype} Simple Parameters\\") on ROWS, {[zSYS Analogic UI Widget Parameter Measure].[Value]} on COLUMNS  FROM [zSYS Analogic UI Widget Parameter] WHERE ([zSYS Analogic UI Definition].[${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}])"}`
                        return {title: r.Cells[x].Members[1].Name};
                    },(r, x) => {     
                         return {placeHolder: r.Cells[x].FormattedValue, value: r.Cells[x].FormattedValue, ordinal: x};
                    }]
adminPortalWidgetConfigurationDropBoxGridTable:{
		SELECT TM1SubsetToSet([zSYS Analogic WidgetParameters], \\"zSYS Analogic UI ${db.adminPortalWidgetCatalogHorizontalTable.edit.widgettype} Selectable Parameters\\") on ROWS, {[zSYS Analogic UI Widget Parameter Measure].[Value]} on COLUMNS  FROM [zSYS Analogic UI Widget Parameter] WHERE ([zSYS Analogic UI Definition].[${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}])"}`
                        return {title: r.Cells[x].Members[1].Name};
                    },(r, x) => {
                                return r.Cells[x].HasPicklist === true ?
                                        {items: r.Cells[x].PicklistValues.map(t => {
                                                return {name: t, on: t == r.Cells[x].Value ? true : false};}), ordinal: r.Cells[x].Ordinal}:{items: [], ordinal: x};
                            }]
adminPortalWidgetConfigurationTextGridArrayHorizontalTableHorizontalTable:{
		SELECT TM1SubsetToSet([zSYS Analogic WidgetParameters], \\"zSYS Analogic UI ${db.adminPortalWidgetCatalogHorizontalTable.edit.widgettype} Array Parameters\\") on ROWS, {[zSYS Analogic UI Widget Parameter Measure].[Value]} on COLUMNS  FROM [zSYS Analogic UI Widget Parameter] WHERE ([zSYS Analogic UI Definition].[${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}])"}`
                        return {value: r.Cells[x].Members[1].Name};
                    },() => {
                        return {active: true};
                    }]
adminPortalWidgetConfigurationTextGridArrayTextArea:{
            return db.adminPortalWidgetConfigurationTextGridArrayHorizontalTableHorizontalTable && db.adminPortalWidgetConfigurationTextGridArrayHorizontalTableHorizontalTable.edit;
        },
            return {value: '', ordinal: 0};
        },
		SELECT {[zSYS Analogic WidgetParameters].[${db.adminPortalWidgetConfigurationTextGridArrayHorizontalTableHorizontalTable.edit.parametername}]} on ROWS, {[zSYS Analogic UI Widget Parameter Measure].[Value]} on COLUMNS  FROM [zSYS Analogic UI Widget Parameter] WHERE ([zSYS Analogic UI Definition].[${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}])"}`
                    "Ordinal": 0,
                    "Value": "${db.adminPortalWidgetConfigurationTextGridArrayTextArea.save.value}"
                }`
adminPortalEventEditHorizontalTable:{
		SELECT NON EMPTY
                {FILTER( { HIERARCHIZE( {TM1SUBSETALL( [zSYS Analogic UI Action] )} ) }, 
                ([zSYS Analogic UI Action].[WidgetId] = '${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}' OR
                [zSYS Analogic UI Action].[WidgetId] = 'Application9')
                )} *
            {TM1FILTERBYLEVEL( {TM1SUBSETALL( [zSYS Analogic UI ActionList] )}, 0)} *
        	{[zSYS Analogic UI Action Definition Measure].[action]}
                   ON 0 
                  FROM [zSYS Analogic UI Action Definition]
                  "}`
                        return {value: r.Cells[x].Members[0].Attributes.Caption_Default};
                    },(r, x) => {
                        return {value: r.Cells[x].Members[1].Attributes.Caption_Default};
                    },(r, x) => {
                        return {value: r.Cells[x].FormattedValue ? r.Cells[x].FormattedValue : ''};
                    },() => {
                        return {active: true};
                    },() => {
                        return {active: true};
                    }]
                "Parameters": [
                                {"Name": "pAction", "Value": "${db.analogicPortalEventEditTable.delete.eventid}"},
                                {"Name": "pActionList", "Value": "${db.analogicPortalEventEditTable.delete.actionorder}"},
                                {"Name": "pActionType", "Value": "${db.analogicPortalEventEditTable.delete.actionname}"}
                       ]
            }`
adminPortalEventEditArgumentHorizontalTable:{
            return db.adminPortalEventEditHorizontalTable && db.adminPortalEventEditHorizontalTable.open;
        },
            return [];
        },
		 FILTER (
		{TM1SORT( {TM1FILTERBYPATTERN( {TM1SUBSETALL( [zSYS Analogic UI Action Definition Measure] )}, \\"argument*\\")}, ASC)},
		[zSYS Analogic UI Action Definition].([zSYS Analogic UI Action].[${db.adminPortalEventEditHorizontalTable.open.eventid}],[zSYS Analogic UI ActionList].[${db.adminPortalEventEditHorizontalTable.open.actionorder} Filter]) <> '0')
                   ON COLUMNS 
                  FROM [zSYS Analogic UI Action Definition]
                  WHERE (
                  		[zSYS Analogic UI Action].[${db.adminPortalEventEditHorizontalTable.open.eventid}],
                		[zSYS Analogic UI ActionList].[${db.adminPortalEventEditHorizontalTable.open.actionorder}]
                		)"}`
                        return {value: r.Cells[x + 1].FormattedValue};
                    },(r, x) => {
                        // return {value: r.Cells[x + 1].FormattedValue, editable: db.analogicPortalEventEditTable.choose.actionname.includes(`goToUrl`) ? true : false, ordinal: x + 1};
                        return {value: r.Cells[x].FormattedValue, editable: r.Cells[x + 1].FormattedValue.includes('Edit manually', 0) ? true : false, ordinal: x};
                    },() => {
                        return {active: true};
                    }]
adminPortalEventEditGridArgumentDropbox:{
            return db.adminPortalEventEditArgumentHorizontalTable && db.adminPortalEventEditArgumentHorizontalTable.open;
        },
            return [];
        },
		SELECT
                    {
    		 	[zSYS Analogic UI Action Definition Measure].[argument${db.adminPortalEventEditArgumentHorizontalTable.open.rowindex+ 1}]
                    }
                   ON COLUMNS 
                  FROM [zSYS Analogic UI Action Definition]
                  WHERE (
                  		[zSYS Analogic UI Action].[${db.adminPortalEventEditHorizontalTable.open.eventid}],
                		[zSYS Analogic UI ActionList].[${db.	adminPortalEventEditHorizontalTable.open.actionorder}]
                		)
                  
                  "}`
                        return r.Cells[x].HasPicklist === true ? r.Cells[x].PicklistValues.map(t => {
                            return {name: t, on: t === r.Cells[x].FormattedValue ? true : false};
                        }) : [];
                    },ordinal: (r, x) => {
                        return r.Cells[x].Ordinal;
                    }}
		{
                        "Tuple@odata.bind": [
                        "Dimensions('zSYS Analogic UI Action')/Hierarchies('zSYS Analogic UI Action')/Elements('${db.adminPortalEventEditHorizontalTable.open.eventid}')",
                        "Dimensions('zSYS Analogic UI ActionList')/Hierarchies('zSYS Analogic UI ActionList')/Elements('${db.adminPortalEventEditHorizontalTable.open.actionorder}')",
                        "Dimensions('zSYS Analogic UI Action Definition Measure')/Hierarchies('zSYS Analogic UI Action Definition Measure')/Elements('argument${db.adminPortalEventEditArgumentHorizontalTable.open.rowindex+ 1}')"
			]
		}
		],
                        "Value": "${db.adminPortalEventEditGridArgumentDropbox.value}"
			}`
adminPortalEventListenHorizontalTable:{
'SELECT NON EMPTY TM1SubsetToSet([zSys Analogic UI Event List],\\"Default\\") on ROWS, {[zSYS Analogic UI Definition].[${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}]}*{[zSys Analogic UI Event List Measure].[sEvent],[zSys Analogic UI Event List Measure].[sMethod],[zSys Analogic UI Event List Measure].[sParameter]} on COLUMNS  FROM [zSys Analogic UI Event List]"}`
                        return {value: r.Cells[x].Members[0].Name};
                    },(r, x) => {
                        return {value: r.Cells[x].FormattedValue};
                    },(r, x) => {
                        return {value: r.Cells[x+1].FormattedValue};
                    },(r, x) => {
                        return {value: r.Cells[x+2].FormattedValue};
                    },() => {
                        return {active: true};
                    },() => {
                        return {active: true};
                    }]
                "Parameters": [
                                {"Name": "pAction", "Value": "${db.analogicPortalEventEditTable.delete.eventid}"},
                                {"Name": "pActionList", "Value": "${db.analogicPortalEventEditTable.delete.actionorder}"},
                                {"Name": "pActionType", "Value": "${db.analogicPortalEventEditTable.delete.actionname}"}
                       ]
            }`
adminPortalWidgetConfigurationAddEventGridEvent:{
adminPortalWidgetConfigurationAddEventGridAction:{
	WITH MEMBER 
			[}ElementAttributes_zSYS Analogic UI Definition].[flag] AS 
                   IIF ([zSYS Analogic UI Definition].[zSYS Analogic UI Definition].CURRENTMEMBER.Name =
                   
                   [zSYS Analogic UI Definition].[${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}].Parent.Name 
                     , \\"true\\",\\"false\\")         
	SELECT (
		{FILTER(
			{FILTER( {TM1SUBSETALL( [zSYS Analogic UI Definition] )}, [zSYS Analogic UI Definition].[WidgetsEnabled] = \\"1\\")},
			[zSYS Analogic UI Definition].[zSYS Analogic UI Definition].CURRENTMEMBER.Properties(\\"Application\\") 
			= [zSYS Analogic UI Definition].[${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}].Properties(\\"Application\\") )})
	ON COLUMNS,
                ( { 
                [}ElementAttributes_zSYS Analogic UI Definition].[flag] }) 
    on ROWS 
    FROM [}ElementAttributes_zSYS Analogic UI Definition]"}`
                    return {name: r.value[x].Name, on: false};
                }
adminPortalWidgetConfigurationAddEventGridActionStatus:{
adminPortalWidgetConfigurationAddEventGridButton:{
                "Parameters": [
                                {"Name": "pWidgetName", "Value": "${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}"},
                                {"Name": "pWidgetEvent", "Value": "${db.adminPortalWidgetConfigurationAddEventGridEvent.value}"},
                                {"Name": "pWidgetAction", "Value": "${db.adminPortalWidgetConfigurationAddEventGridAction.value}"},
                                {"Name": "pWidgetEventState", "Value": "${db.adminPortalWidgetConfigurationAddEventGridActionStatus.value}"}
                       ]
            }`
                    return {success: false, message: 'Please provide values for all Drop Down!'};
                }
                return {success: true};}
adminPortalWidgetConfigurationDataEditHorizontalTable:{

		SELECT FILTER (
    		 {FILTER(  {TM1SUBSETALL( [zSYS Analogic UI Definition] )}, 
               [zSYS Analogic UI Definition].[Caption] = '${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}' 
                )} *
            {TM1FILTERBYLEVEL( {TM1SUBSETALL( [zSYS Analogic UI DataSet List] )}, 0)} *
            {TM1FILTERBYLEVEL( {TM1SUBSETALL( [zSYS Analogic UI Data Repository Event Type] )}, 0)} 
            
            ,
            [zSYS Analogic UI Data Repository Measure].[UsedinWidget] > 0)
                   ON COLUMNS, 
                 {[zSYS Analogic UI Data Repository Measure].[UsedinWidget]}  ON ROWS
                  FROM [zSYS Analogic UI Data Repository]
                  "}`
                        return {active: true};
                    },(r, x) => {
                        return {value: r.Cells[x].Members[1].Attributes.Caption};
                    },(r, x) => {
                        return {value: r.Cells[x].Members[3].Attributes.Caption};
                    },(r, x) => {
                        return {value: r.Cells[x].Members[2].Attributes.Caption};
                    },() => {
                        return {active: true};
                    }]
adminPortalWidgetConfigurationDataEditTextArea:{
            return db.adminPortalWidgetConfigurationDataEditHorizontalTable && db.adminPortalWidgetConfigurationDataEditHorizontalTable.choose;
        },
            return {value: '', ordinal: 0};
        },
		SELECT 
            {[zSYS Analogic UI Definition].[${db.adminPortalWidgetConfigurationDataEditHorizontalTable.choose.widgetid}]}*
            {[zSYS Analogic UI DataSet List].[All zSYS Analogic UI Dataset List]} *
            {[zSYS Analogic UI Data Repository Event Type].[All zSYS Analogic UI Data Repository Event Type]} *
            {[zSYS Analogic UI Data Repository Measure].[jsExportLine]}


                   ON COLUMNS 
                  FROM [zSYS Analogic UI Data Repository]
                  "}`
adminPortalWidgetConfigurationMDXEditHorizontalTable:{
            return db.adminPortalWidgetConfigurationDataEditHorizontalTable && db.adminPortalWidgetConfigurationDataEditHorizontalTable.open;
        },
            return [];
        },
                SELECT 
                    {TM1FILTERBYLEVEL( {TM1SUBSETALL( [zSYS Analogic UI Data Repository Measure] )}, 0)}
            ON COLUMNS FROM [zSYS Analogic UI Data Repository]
            WHERE ([zSYS Analogic UI Definition].[${db.adminPortalWidgetConfigurationDataEditHorizontalTable.open.widgetid}],
                    [zSYS Analogic UI Data Repository Event Type].[${db.adminPortalWidgetConfigurationDataEditHorizontalTable.open.parameter}],
                    [zSYS Analogic UI DataSet List].[${db.adminPortalWidgetConfigurationDataEditHorizontalTable.open.dataset}])"}`
                        return {active: true};
                    },(r, x) => {
                        return {value: r.Cells[x].Members[1].Name};
                    },(r, x) => {
                        return {value: r.Cells[x].Members[3].Name};
                    },(r, x) => {
                        return {value: r.Cells[x].FormattedValue};
                    }]
adminPortalWidgetConfigurationMDXEditTextArea:{
            return db.adminPortalWidgetConfigurationMDXEditHorizontalTable && db.adminPortalWidgetConfigurationMDXEditHorizontalTable.choose;
        },
            return {text: '', ordinal: 0};
        },
		SELECT               
                  { [zSYS Analogic UI Data Repository Measure].[${db.adminPortalWidgetConfigurationMDXEditHorizontalTable.choose.parameter}]}
                   ON COLUMNS
                  FROM [zSYS Analogic UI Data Repository]
                  WHERE ( [zSYS Analogic UI Definition].[${db.adminPortalWidgetConfigurationDataEditHorizontalTable.open.widgetid}],
                            [zSYS Analogic UI DataSet List].[${db.adminPortalWidgetConfigurationDataEditHorizontalTable.open.dataset}],
                         [zSYS Analogic UI Data Repository Event Type].[${db.adminPortalWidgetConfigurationDataEditHorizontalTable.open.parameter}])
                  "}`
                    "Ordinal": 0,
                    "Value": "${db.adminPortalWidgetConfigurationMDXEditTextArea.save.value}"
                }`
adminPortalWidgetConfigurationCopyContentGridEvent:{
                    return {name: r.value[x].Attributes.Caption, on: false};
                }
adminPortalWidgetConfigurationCopyContentGridButton:{
                "Parameters": [
                                {"Name": "pWidgetID", "Value": "${db.adminPortalWidgetCatalogHorizontalTable .edit.widget}"},
                                {"Name": "pSourceWidgetID", "Value": "${db.adminPortalWidgetConfigurationCopyContentGridEvent.value}"},
                                {"Name": "pContentDefinition", "Value": "${db.adminPortalWidgetConfigurationCopyContentGridAction.value}"}
                       ]
            }`
adminPortalApplicationsDeployWarnGridButton:{
adminPortalWidgetConfigurationDeleteWarnGridButton:{
                "Parameters": [
                                {"Name": "pAction", "Value": "${db.adminPortalEventEditHorizontalTable.choose.eventid}"},
                                {"Name": "pActionList", "Value": "${db.adminPortalEventEditHorizontalTable.choose.actionorder}"},
                                {"Name": "pActionType", "Value": "${db.adminPortalEventEditHorizontalTable.choose.actionname}"}
                       ]
            }`
adminPortalWidgetConfigurationAddListenGridEvent:{
ON COLUMNS FROM [}ElementAttributes_zSYS Analogic UI Action] WHERE ([}ElementAttributes_zSYS Analogic UI Action].[Caption])"}`
                    return {name: r.Cells[x].Members[1].Name};
                }
adminPortalWidgetConfigurationAddListenGridAction:{
adminPortalWidgetConfigurationAddListenGridButton:{
                "Parameters": [
                                {"Name": "pWidgetName", "Value": "${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}"},
                                {"Name": "pEvent", "Value": "${db.adminPortalWidgetConfigurationAddListenGridEvent.value}"},
                                {"Name": "pMethod", "Value": "${db.adminPortalWidgetConfigurationAddListenGridAction.value}"},
                                {"Name": "pNonExistinginEventMap", "Value": "${db.adminPortalWidgetConfigurationAddListenGridNonExist.value}"},
                                {"Name": "pParameter", "Value": "${db.adminPortalWidgetConfigurationAddListenGridParameter.value}"}
                       ]
            }`
adminPortalWidgetConfigurationEditListenGridEvent:{
                    return {name: r.value[x].Name, on: r.value[x].Name === v('adminPortalEventListenHorizontalTable.open.eventname')};
                }
adminPortalWidgetConfigurationEditListenGridAction:{
adminPortalWidgetConfigurationEditListenGridButton:{
                "Parameters": [
                                {"Name": "pWidgetName", "Value": "${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}"},
                                {"Name": "pEvent", "Value": "${db.adminPortalWidgetConfigurationEditListenGridEvent.value}"},
                                {"Name": "pMethod", "Value": "${db.adminPortalWidgetConfigurationEditListenGridAction.value}"},
                                {"Name": "pParameter", "Value": "${db.adminPortalWidgetConfigurationEditListenGridParameter.value}"},
                                {"Name": "pEventID", "Value": "${db.adminPortalEventListenHorizontalTable.open.eventid}"}
                       ]
            }`
adminPortalWidgetConfigurationDeleteListenWarnGridButton:{
                "Parameters": [
                                {"Name": "pWidgetName", "Value": "${db.adminPortalWidgetCatalogHorizontalTable.edit.widget}"},
                                {"Name": "pEventID", "Value": "${db.adminPortalEventListenHorizontalTable.choose.eventid}"}
 
                       ]
            }`
};