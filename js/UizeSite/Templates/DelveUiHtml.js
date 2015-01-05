 /*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.DelveUiHtml.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name: 'UizeSite.Templates.DelveUiHtml',builder: function() {
        'use strict';

        function loadHTTPSynchronous(url) {
            var httpReq = new XMLHttpRequest();
            
            httpReq.open("GET", url, false);
            httpReq.send();
         
            if(httpReq.status !== 200) {
                console.error("HTTP Request '" + url + "' failed with status " + httpReq.status);
            }
            
            return httpReq.responseText;
        }

        return Uize.package({process: function(input) {
                var m = this, output = [];
                output.push(
        '<script type="text/html" id="stackTrace">'
+'\n' + '<div class="trace" data-bind="css: {pinned: pinned}, hoverBind: hover">'
+'\n' + '  <div class="belowthreshold" data-bind="visible: stack.filter(function(x){return +x.rating() < 0;}).length > 0 && active()">     '
+'\n' + '    <label for="belowThresholdCheckbox">Show hidden calls</label>'
+'\n' + '    <input id="belowThresholdCheckbox" type="checkbox" data-bind="checked: showHidden"/> '
+'\n' + '  </div>'
+'\n' + '  <div class="eventname" data-bind="'
+'\n' + '                            text: event, '
+'\n' + '                            clickToggle: {observ: pinned, values: [true, false]},'
+'\n' + '                            persistObserv:{observ: pinned, key: \'pinned\'+event}'
+'\n' + '                         "></div>'
+'\n' + '  '
+'\n' + '  <div class="stack">  '
+'\n' + '    <!-- ko foreach: stack -->'
+'\n' + '    '
+'\n' + '    <!-- Basically various factors increase the visibility rating, and positive values are shown. If it is pinned or hovered that is good. If it is pinned or hovered, and hidden are shown, then everything is basically shown. Also if its rating is good it will be always shown. -->'
+'\n' + '      <div class="fnccall" data-bind="visibleWithClass:                         '
+'\n' + '          (+rating() '
+'\n' + '           + (($parent.active()) ? 1 : 0)'
+'\n' + '           + ((($parent.active()) && $parent.showHidden()) ? 1 : 0)'
+'\n' + '            ) > 0,'
+'\n' + '          persistObserv:{observ: rating, key: text + \'rating\'}">'
+'\n' + '        <div class="fncname" data-bind="text: text"></div>'
+'\n' + '       '
+'\n' + '        <div class="votebuttons">'
+'\n' + '          <div class="vote down" data-bind="clickToggle: {observ: rating, values: [-1, 0]}, css: {checked: rating() === -1, unchecked: rating() !== -1}"></div>'
+'\n' + '          <div class="vote up" data-bind="clickToggle: {observ: rating, values: [1, 0]}, css: {checked: rating() === +1, unchecked: rating() !== +1}"></div>'
+'\n' + '        </div>'
+'\n' + '      </div>'
+'\n' + '      <div class="hiddenfnccall"></div>'
+'\n' + '    <!-- /ko -->'
+'\n' + '  </div>'
+'\n' + '</div>'
+'\n' + '</script>'


+'<h1 class="header">\r\n'
+'	<a id="page-homeLink" href="index.html" title="UIZE JavaScript Framework home"></a>\r\n'
+'	<span class="breadcrumb breadcrumbWithArrow">DELVE</span>\r\n'
+'	<span id="page-windowInspected" class="windowInspected"></span>\r\n'
+'	<div class="pageActions">\r\n'
+'		<a id="page-refresh" href="javascript://" class="buttonLink" title="Re-synchronize to the page being inspected">REFRESH</a>\r\n'
+'		<a id="page-getWidgetFromNodeId" href="javascript://" class="buttonLink" title="Find the widget that owns a particular implied node">GET WIDGET FROM NODE ID</a>\r\n'
+'		<a id="page-help" href="javascript://" class="buttonLink" title="Tips on using the DELVE tool">HELP</a>\r\n'
+'		<a id="page-close" href="javascript://" class="buttonLink" title="Close the DELVE tool">X</a>\r\n'
+'	</div>\r\n'
+'</h1>\r\n'
+'\r\n' 
+'<div class="leftPane">\r\n'
+'	<div class="paneChrome">\r\n'
+'		<div class="paneInputOuterShell">\r\n'
+'			<div class="paneInputShell">\r\n'
+'				<select id="page-treeListDropdown" class="paneInput"></select>\r\n'
+'			</div>\r\n'
+'		</div>\r\n'
+'		<div class="treeListActions">\r\n'
+'			<a id="page-expandTreeListOneLevel" href="javascript://" title="expand the tree to just one level deep">1 level</a>\r\n'
+'			<span class="separator">|</span>\r\n'
+'			<a id="page-expandTreeListTwoLevels" href="javascript://" title="expand the tree to two levels deep">2 levels</a>\r\n'
+'			<span class="separator">|</span>\r\n'
+'			<a id="page-expandTreeListThreeLevels" href="javascript://" title="expand the tree to three levels deep">3 levels</a>\r\n'
+'			<span class="separator">|</span>\r\n'
+'			<a id="page-expandTreeListAll" href="javascript://" title="expand the entire tree">expand all</a>\r\n'
+'			<span class="separator">|</span>\r\n'
+'			<a id="page-getTreeListItemsAsReport" href="javascript://" title="get all the items as a plain text report in a popup window">as report</a>\r\n'
+'			<span class="separator">|</span>\r\n'
+'			<a id="page-getAllQueriesSummary" href="javascript://" title="get a summary of all available queries as a plain text report in a popup window">uber summary</a>\r\n'
+'		</div>\r\n'
+'		<div id="page-treeList" class="tree-list"></div>\r\n'
+'	</div>\r\n'
+'</div>\r\n'
+'<div class="rightPane">\r\n'
+'	<div class="paneChrome">\r\n'
+'		<div class="paneInputOuterShell">\r\n'
+'			<div class="paneInputShell">\r\n'
+'				<input id="page_objectEntry-input" type="text" class="paneInput"/>\r\n'
+'			</div>\r\n'
+'		</div>\r\n'
+'		<div class="tabShell">\r\n'
+'			<div class="tabStubShell">\r\n'
+'				<a id="page_objectInspectorTabs_option0" class="tabStub" href="javascript://">SUMMARY</a>\r\n'
+'				<a id="page_objectInspectorTabs_option1" class="tabStub" href="javascript://">STATE</a>\r\n'
+'				<a id="page_objectInspectorTabs_option2" class="tabStub" href="javascript://">FEATURES</a>\r\n'
+'				<a id="page_objectInspectorTabs_option3" class="tabStub" href="javascript://">DOCUMENTATION</a>\r\n'
+'				<a id="page_objectInspectorTabs_option4" class="tabStub" href="javascript://">EVENTS</a>\r\n'
+'				<br style="clear:left;"/>\r\n'
+'			</div>\r\n'
+'			<div class="tabBodyShell">\r\n'
+'				<div id="page_objectInspectorTabs-option0TabBody" class="tabBodyInactive">\r\n'
+'					<div id="page_objectInspectorSummary" class="tabBodyContentsShell objectInspectorSummary"></div>\r\n'
+'				</div>\r\n'
+'				<div id="page_objectInspectorTabs-option1TabBody" class="tabBodyInactive">\r\n'
+'					<div id="page_objectInspectorState" class="tabBodyContentsShell objectInspectorSummary"></div>\r\n'
+'				</div>\r\n'
+'				<div id="page_objectInspectorTabs-option2TabBody" class="tabBodyInactive">\r\n'
+'					<div id="page_objectInspectorFeatures" class="tabBodyContentsShell objectInspectorFeatures"></div>\r\n'
+'				</div>\r\n'
+'				<div id="page_objectInspectorTabs-option3TabBody" class="tabBodyInactive">\r\n'
+'					<div class="tabBodyContentsShell objectInspectorDocumentationShell">\r\n'
+'					<iframe id="page-documentation" src="javascript:\'&lt;html&gt;&lt;body&gt;---&lt;/body&gt;&lt;/html&gt;\'" class="objectInspectorDocumentation" frameborder="0"></iframe>\r\n'
+'				</div>\r\n'
+'				</div>\r\n'
+'				<div id="page_objectInspectorTabs-option4TabBody" class="tabBodyInactive">\r\n'
+'					<div id="page-objectInspectorEventsLog"></div>\r\n'
+'				</div>\r\n'
+'			</div>\r\n'
+'		</div>\r\n'
+'	</div>\r\n'
+'</div>\r\n'
+'\r\n'
+'');
                return output.join('');
            },input: {}});
    }});
