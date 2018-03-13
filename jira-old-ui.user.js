// ==UserScript==
// @name        Jira Old UI
// @description Expands Jira board quick filters like it was in the old UI
// @author      yusitnikov
// @version     1.2
// @updateURL   https://github.com/yusitnikov/jira-old-ui/raw/master/jira-old-ui.user.js
// @match       https://*.atlassian.net/*
// @run-at      document-end
// @grant       none
// ==/UserScript==

setInterval(function() {
    var $li = $('#ghx-quick-filters').children('ul').children('li').eq(1),
        $div = $li.children('div');
    $li.children('button').hide();
    $div.attr('class', '');
    $div.attr('style', '');
    $div.find('li.ghx-filter-panel-dropdown').remove();
    $div.find('li').css('display', 'inline');
    $div.find('ul').css({ 'max-width': 'none', padding: 5 });
}, 500);
