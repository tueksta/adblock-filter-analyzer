// Copyright https://www.RedDragonWebDesign.com/ All rights reserved.

"use strict";

// https://help.eyeo.com/en/adblockplus/how-to-write-filters#options
// https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#modifiers

// [a-z0-9\-~]  no capital letters allowed
export let optionsWithoutEquals = [
	'1p',
	'3p',
	'all',
	'app', // adguard
	'badfilter',
	'beacon', // undocumented shortcut for ping
	'cname',
	'content', // adguard
	'cookie', // adguard
	'csp', // allowed both without equals and with equals
	'css',
	'doc',
	'document',
	'domain', // domain with no equals is adguard only
	'ehide',
	'elemhide',
	'empty',
	'extension', // adguard
	'first-party',
	'font',
	'frame',
	'genericblock', // adguard
	'generichide',
	'ghide',
	'image',
	'important',
	'inline-font',
	'inline-script',
	'jsinject', // adguard
	'match-case',
	'media',
	'mp4',
	'network', // adguard
	'object',
	'object-subrequest', // adguard
	'other',
	'ping',
	'popunder',
	'popup',
	'script',
	'shide',
	'specifichide',
	'stealth', // adguard
	'stylesheet',
	'subdocument',
	'third-party',
	'urlblock', // adguard
	'webrtc',
	'websocket',
	'xhr',
	'xmlhttprequest',
    'header',
    'permissions',
    'strict1p',
    'strict3p',
];

export let optionsWithEquals = [
	'csp', // = [a-z\-:' *]  // allowed both without equals and with equals
	'denyallow', // = [a-z.|]
	'domain', // = [~|a-z.]
	'redirect', // = [a-z0-9\-./]
	'redirect-rule', // = [a-z0-9\-./]     // ubo specific
	'removeparam', // adguard
	'replace', // adguard
	'rewrite', // = [a-z\-:]
	'sitekey', // = [a-z]
    'empty', // Assuming this covers $redirect=empty
    'mp4', // Assuming this covers $redirect=noopmp4-1s
    'method', // Assuming usage with equals, based on context
    'to', // Assuming usage with equals, based on context
];