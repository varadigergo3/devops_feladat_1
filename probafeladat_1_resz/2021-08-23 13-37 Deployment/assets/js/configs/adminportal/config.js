/* global jQuery, _ */'use strict';(($, _) => {    app = app || {};
	app.useShout = false; 
//Host setting - Tomcat webserver
	app.host = 'https://dev.knowledgeseed.ch:9610/'; 
//Model setting - Name of the used TM1 model
	app.tm1Server = 'Analogic Portal'; 
//Host setting - Domain name of TM1 Server
	app.tm1ServerHost = 'dev.knowledgeseed.ch'; 
//Host setting - Cognos BI Gateway for authentication
	app.cognosHost = 'https://dev.knowledgeseed.ch:9610'; 
//Authentication method - NOAUTH is only for debugging,NOAUTH, CAM
	app.authenticationMode = 'CAM'; 
//Authentication - Cognos Namespace
	app.camNamespace = 'knowledgeseed'; 
	app.noauthUser = 'oravecz.tamas'; 
	app.noauthPwd = ''; 
	app.sessionExpiresInMinutes = 20; 
//Authencitcation - User-password authentication mode for mobile users
	app.useCamNameSpaceForMobileView = false; 
	app.url.cognosAuthenticationBridge = 'https://dev.knowledgeseed.ch:9610/ibmcognos/bi/v1?b_action=xts.run&m=portal/bridge.xts&c_env=portal/variables_TM1.xml&c_cmd=../tm1/web/tm1web.html&ps=https://dev.knowledgeseed.ch:9610&pg=../adminportal/auth.jsp&host=dev.knowledgeseed.ch&server=Analogic Portal'; 
	app.url.apiLogout = 'https://dev.knowledgeseed.ch:5125/roche/adminportal/logout'; 
	app.url.logout = 'https://dev.knowledgeseed.ch:9610/ibmcognos/bi/v1?h_CAM_action=logoff&b_action=xts.run&m=portal/main.xts&m_redirect=https://dev.knowledgeseed.ch:9610/adminportal/'; 
	app.restRequestDebugFlag = false; 
	app.tm1ApiHost = 'https://dev.knowledgeseed.ch:5125/analogicadminapi'; 
	app.tm1ApiSubPath = '/api/v1/'; 
	app.tm1ExecuteMDX = 'ExecuteMDX?'; 
	app.tm1CellsetId = (cellsetId) => `Cellsets('${cellsetId}')?`; 
	app.MDXUrl = 'https://dev.knowledgeseed.ch:5125/analogicadminapi/api/v1/ExecuteMDX?'; 
	app.CellSetUrl = (cellsetId) => app.tm1ApiHost + app.tm1ApiSubPath + app.tm1CellsetId(cellsetId); 
	app.defaultMDXQuery = 'https://dev.knowledgeseed.ch:5125/analogicadminapi/api/v1/ExecuteMDX?$expand=Cells($select=Ordinal,Value)'; 
	app.defaultCellsetIdQuery = (cellsetId) => app.CellSetUrl(cellsetId) + '$expand=Cells($select=Ordinal,Value)'; 
	app.SideBar = 'adminPortalSideBar'; 
	app.MainPage = 'adminPortalMain'; 
})(jQuery);
