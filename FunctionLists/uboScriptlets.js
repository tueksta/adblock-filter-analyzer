// Copyright https://www.RedDragonWebDesign.com/ All rights reserved.

"use strict";

// [a-zA-Z\-]  I assume it's case sensitive. ubo validator doesn't validate js functions tho so can't say for sure
export let uboScriptlets = [
	'acis',
	'abort-current-inline-script',
	'aopr',
	'abort-on-property-read',
	'aopw',
	'abort-on-property-write',
	'aeld',
	'addEventListener-defuser',
	'aell',
	'addEventListener-logger',
	'cookie-remover',
	'disable-newtab-links',
	'json-prune',
	'noeval',
	'noeval-silent',
	'noeval-if',
	'norafif',
	'no-requestAnimationFrame-if',
	'nosiif',
	'no-setInterval-if',
	'nostif',
	'no-setTimeout-if',
	'nowebrtc',
	'ra',
	'remove-attr',
	'rc',
	'remove-class',
	'set',
	'set-constant',
	'nano-sib',
	'nano-setInterval-booster',
	'nano-stb',
	'nano-setTimeout-booster',
	'webrtc-if',
	'nowoif',
	'window.open-defuser',
	'window.name-defuser',
	'overlay-buster',
	'alert-buster',
	'ampproject_v0',
	'fingerprint2',
	'nobab',
	'nofab',
	'popads-dummy',
	'popads',
	'gpt-defuser',
	'adfly-defuser',
	'damoh-defuser',
	'addthis_widget',
	'amazon_ads',
	'amazon_apstag',
	'monkeybroker',
	'doubleclick_instream_ad_status',
	'google-analytics_ga',
	'google-analytics_analytics',
	'google-analytics_inpage_linkid',
	'google-analytics_cx_api',
	'googletagservices_gpt',
	'googletagmanager_gtm',
	'googlesyndication_adsbygoogle',
	'scorecardresearch_beacon',
	'outbrain-widget',
	'hd-main',
	'disqus_forums_embed',
	'disqus_embed',
	'twitch-videoad',
	'trusted-replace-xhr-response',
	'trusted-replace-fetch-response',
	'aost',
	'rmnt',
	'rpnt',
	'no-fetch-if',
	'no-xhr-if',
	'acs',
	'set-cookie',
	'json-prune-fetch-response',
	// ********** DEPRECATED *************
	'csp',
	'silent-noeval',
	'raf-if',
	'requestAnimationFrame-if',
	'sid',
	'setInterval-defuser',
	'sil',
	'setInterval-logger',
	'std',
	'setTimeout-defuser',
	'stl',
	'setTimeout-logger',
	'sharedWorker-defuser',
	'ampproject.org/v0',
	'bab-defuser',
	'fuckadblock',
	'popads.net',
	'golem.de',
	'upmanager-defuser',
	'chartbeat',
	'static.chartbeat.com/chartbeat',
	'ligatus_angular-tag',
	'ligatus.com/*/angular-tag',
	'addthis.com/addthis_widget',
	'amazon-adsystem.com/aax2/amzn_ads',
	'd3pkae9owd2lcf.cloudfront.net/mb105',
	'doubleclick.net/instream/ad_status',
	'google-analytics.com/ga',
	'google-analytics.com/analytics',
	'google-analytics.com/inpage_linkid',
	'google-analytics.com/cx/api',
	'googletagservices.com/gpt',
	'googletagmanager.com/gtm',
	'googlesyndication.com/adsbygoogle',
	'scorecardresearch.com/beacon',
	'widgets.outbrain.com/outbrain',
	'disqus.com/forums/*/embed',
	'disqus.com/embed',
];