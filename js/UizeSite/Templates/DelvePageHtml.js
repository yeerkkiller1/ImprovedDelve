 /*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.DelvePageHtml.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name: 'UizeSite.Templates.DelvePageHtml',required: ['Uize.Url', 'Uize.Json'],builder: function() {
        'use strict';
        return Uize.package({process: function(input) {
                var m = this, output = [];
                var _a = Uize.Url.from(input.pathToResources).fullDomain;
                output.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n'
+'<html xmlns="http://www.w3.org/1999/xhtml">\r\n'
+'<head>\r\n'
+'	<title>DELVE</title>\r\n'
+'	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>\r\n'
+'	<base href="', _a, '"/>\r\n'
+'	<link rel="stylesheet" href="css/page.css"/>\r\n'
+'	<link rel="stylesheet" href="css/widget.datatable.css"/>\r\n'
+'	<link rel="stylesheet" href="css/widget.tabs.css"/>\r\n'
+'	<link rel="stylesheet" href="css/page.delve.css"/>\r\n'
+'  <link rel="stylesheet" href="/quize/callStacker.css"></link>\r\n'
+'  <script type="text/javascript" src="/quize/knockout.js"></script>\r\n'
+'  <script type="text/javascript" src="/quize/bindingHandlers.js"></script>\r\n'
+'  <script type="text/javascript" src="/quize/callStacker.js"></script>\r\n'
+'  <script type="text/html" src="/quize/stackTraceHTML.html"></script>\r\n'
+'</head>\r\n'
+'\r\n'
+'<body>\r\n'
+'\r\n'
+'<script type="text/javascript" src="', input.pathToResources, 'Uize.js"></script>\r\n'
+'\r\n'
+'<script type="text/javascript">\r\n'
+'\r\n'
+'Uize.require (\r\n'
+'	\'UizeSite.Delve.library\',\r\n'
+'	function () {\r\n'
+'		Uize.require (\r\n'
+'			[\r\n'
+'				\'UizeSite.Templates.DelveUiHtml\',\r\n'
+'				\'Uize.Dom.Basics\',\r\n'
+'				\'UizeSite.Delve\'\r\n'
+'			],\r\n'
+'			function () {\r\n'
+'				/*** inject the guts of the page ***/\r\n'
+'					Uize.Dom.Basics.injectHtml (document.body,UizeSite.Templates.DelveUiHtml.process ());\r\n'
+'\r\n'
+'				/*** create the example page widget ***/\r\n'
+'					var _page = window.page = UizeSite.Delve ({baseUrl:', Uize.Json.to(_a), ',window:top.opener});\r\n'
+'\r\n'
+'				/*** wire up the page widget ***/\r\n'
+'					_page.wireUi ();\r\n'
+'			}\r\n'
+'		);\r\n'
+'	}\r\n'
+');\r\n'
+'\r\n'
+'</script>\r\n'
+'\r\n'
+'</body>\r\n'
+'</html>\r\n'
+'\r\n'
+'');
                return output.join('');
            },input: {pathToResources: 'string'}});
    }});
