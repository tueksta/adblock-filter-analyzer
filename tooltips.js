export let tooltips = {
	'uboPreParsingDirective': // !#
		`
		<ul>
		<li>@syntax - <span class="code">!#</span></li>
		<li>@name - uBlock Origin Pre-Parsing Directive</li>
		<li>@description - The pre-parsing directives are executed before a list content is parsed, and influence the final content of a filter list.</li>
		<li>@example - <span class="code">!#include ublock-filters.txt</span></li>
		<li>@documentation - <a href="https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#pre-parsing-directives">uBlock Origin Wiki</a></li>
		<li>@plugin-variations - May only work for uBlock Origin</li>
		<li>@special-characters - <span class="code">!not</span></li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'agHint': // !+
		`
		<ul>
		<li>@syntax - <span class="code">!+</span></li>
		<li>@name - AdGuard Hint</li>
		<li>@description - </li>
		<li>@example - <span class="code">!+</span> NOT_OPTIMIZED PLATFORM(android)</li>
		<li>@documentation - <a href="https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#hints-1">AdGuard.com KB</a></li>
		<li>@plugin-variations - May only work for AdGuard</li>
		<li>@special-characters - </li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'comment': // ! or [
		`
		<ul>
		<li>@syntax - <span class="code">! or <span class="code">[</li>
		<li>@name - Comment</li>
		<li>@description - </li>
		<li>@example - <span class="code">! this is a comment</span></li>
		<li>@documentation - <a href="https://help.eyeo.com/en/adblockplus/how-to-write-filters#comments">AdBlockPlus How To</a></li>
		<li>@plugin-variations - </li>
		<li>@special-characters -</li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'domain':
		`
		<ul>
		<li>@syntax - </li>
		<li>@name - URL To Block</li>
		<li>@description - </li>
		<li>@example - <span class="code">||picreel.com^</span></li>
		<li>@documentation - <a href="https://adblockplus.org/en/filter-cheatsheet">AdBlockPlus Cheat Sheet</a></li>
		<li>@plugin-variations - uBlock Origin will silently convert <span class="code">example.com</span> to <span class="code">||example.com^</span> <a href="https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#hosts-files">[More Info]</a></li>
		<li>@special-characters -
			<a href="https://adblockplus.org/filter-cheatsheet#blocking2"><span class="code">||domainNameAnchor</span></a>,
			<a href="https://adblockplus.org/filter-cheatsheet#blocking2"><span class="code">^separator</span></a>,
			<a href="https://adblockplus.org/filter-cheatsheet#blocking3"><span class="code">|anchor</span></a>,
			<a href="https://adblockplus.org/filter-cheatsheet#blocking1"><span class="code">*wildcard</span></a>,
			<span class="code">,multiple</span></li>
		<li>@function-library - </li>
		<li>@tip - Ad blockers add an invisible wildcard <span class="code">*</span> to the beginning and end of the URL you type in. Use the special characters above to set limits on these wildcards.</li>
		<li>@tip - Browsers will silently add a slash to the end of http://domain.com, even if they don't display it.</li>
		<li>@tip - There's no way to easily exclude subdomains. A filter written for domain.com will match subdomain.domain.com. To exclude subdomains, you can write a RegEx for non cosmetic filters.</li>
		</ul>
		`,
	'exception': // @@
		`
		<ul>
		<li>@syntax - <span class="code">@@</span></li>
		<li>@name - Exception URL</li>
		<li>@description - </li>
		<li>@example - <span class="code">@@||cdn.optimizely.com/js/*.js</span></li>
		<li>@documentation - <a href="https://help.eyeo.com/en/adblockplus/how-to-write-filters#whitelist">AdBlockPlus How To</a></li>
		<li>@plugin-variations - AdBlockPlus will add a wildcard at the beginning and end of all URL's. uBlock Origin will do the same, with one exception: it silently converts <span class="code">example.com</span> to <span class="code">||example.com^</span>. <a href="https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#hosts-files">More Info</a></li>
		<li>@special-characters -
			<a href="https://adblockplus.org/filter-cheatsheet#blocking2"><span class="code">||domainNameAnchor</span></a>,
			<a href="https://adblockplus.org/filter-cheatsheet#blocking2"><span class="code">^separator</span></a>,
			<a href="https://adblockplus.org/filter-cheatsheet#blocking3"><span class="code">|anchor</span></a>,
			<a href="https://adblockplus.org/filter-cheatsheet#blocking1"><span class="code">*wildcard</span></a>,
			,multiple</li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'domainRegEx': // /regex/
		`
		<ul>
		<li>@syntax - <span class="code">/regex/</span></li>
		<li>@name - URL To Block that uses Regular Expressions</li>
		<li>@description - </li>
		<li>@example - <span class="code">/^https://www\.narcity\.com/assets/[0-9a-f]{24,}\.js/</span></li>
		<li>@documentation - <a href="https://help.eyeo.com/en/adblockplus/how-to-write-filters#regexps">AdBlockPlus How To</a>, <a href="https://regexone.com/">RegEx Tutorial</a></li>
		<li>@plugin-variations - </li>
		<li>@special-characters - RegEx -[]{}()*+?.,\^$|#/</li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'exceptionRegEx': // @@/regex/
		`
		<ul>
		<li>@syntax - <span class="code">@@/regex/</span></li>
		<li>@name - Exception URL that uses Regular Expressions</li>
		<li>@description - </li>
		<li>@example - </li>
		<li>@documentation - <a href="https://help.eyeo.com/en/adblockplus/how-to-write-filters#regexps">AdBlockPlus How To</a>, <a href="https://regexone.com/">RegEx Tutorial</a></li>
		<li>@plugin-variations - </li>
		<li>@special-characters - RegEx <span class="code">-[]{}()*+?.,\^$|#/</span></li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`, // TODO: make sure that this line displays correctly
	'option': // $
		`
		<ul>
		<li>@syntax - <span class="code">$</span></li>
		<li>@name - Filter Option</li>
		<li>@description - </li>
		<li>@example - <span class="code">$script,domain=bloombergquint.com|dnaindia.com</span></li>
		<li>@documentation - <a href="https://help.eyeo.com/en/adblockplus/how-to-write-filters#options">AdBlockPlus How To</a></li>
		<li>@plugin-variations - </li>
		<li>@special-characters - <span class="code">~except |or ,multiple =list</span></li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'selectorException': // #@#
		`
		<ul>
		<li>@syntax - <span class="code">#@#</span></li>
		<li>@name - CSS Selector Exception</li>
		<li>@description - </li>
		<li>@example - <span class="code">#@#.social-footer-wrapper</span></li>
		<li>@documentation - <a href="https://help.eyeo.com/en/adblockplus/how-to-write-filters#elemhide_exceptions">AdBlockPlus How To</a>, <a href="https://www.w3schools.com/cssref/css_selectors.asp">W3Schools CSS Selectors</a></li>
		<li>@plugin-variations - </li>
		<li>@special-characters - CSS Selectors <span class="code">.#*,>+~[]=|^$:()</span></li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'selector': // ##
		`
		<ul>
		<li>@syntax - <span class="code">##</span></li>
		<li>@name - CSS Selector</li>
		<li>@description - </li>
		<li>@example - <span class="code">##.component-sticky.site-header div[style*="overflow: hidden; height:"]</span></li>
		<li>@documentation - <a href="https://help.eyeo.com/en/adblockplus/how-to-write-filters#content-filters">AdBlockPlus How To</a>, <a href="https://www.w3schools.com/cssref/css_selectors.asp">W3Schools CSS Selectors</a></li>
		<li>@plugin-variations - </li>
		<li>@special-characters - CSS Selectors <span class="code">.#*,>+~[]=|^$:()</span></li>
		<li>@function-library - </li>
		<li>@tip - Blocking an element by <span class="code">#id</span> or <span class="code">.class</span> are the most common. You'd type this in as <span class="code">example.com###id</span> or <span class="code">example.com##.class</span></li>
		<li>@tip2 - <span class="code">:has-text(text)</span> or <span class="code">:has-text(/regex/)</span> is a great way to block elements containing specific text</li>
		</ul>
		`,
	'htmlFilter': // ##^
		`
		<ul>
		<li>@syntax - <span class="code">##^</span></li>
		<li>@name - HTML Filter</li>
		<li>@description - </li>
		<li>@example - <span class="code">##^script:has-text(===):has-text(/[\w\W]{14000}/)</span></li>
		<li>@documentation - <a href="https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#html-filters">uBlock Origin Wiki</a>, <a href="https://www.w3schools.com/cssref/css_selectors.asp">W3Schools CSS Selectors</a></li>
		<li>@plugin-variations - uBlockOrigin on Firefox only, does not work on Chrome</li>
		<li>@special-characters - CSS Selectors <span class="code">.#*,>+~[]=|^$:()</span></li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'htmlFilterException': // #@#^
		`
		<ul>
		<li>@syntax - <span class="code">#@#^</span></li>
		<li>@name - HTML Filter Exception</li>
		<li>@description - </li>
		<li>@example - <span class="code">#@#^script:has-text(===):has-text(/[\w\W]{14000}/)</span></li>
		<li>@documentation - <a href="https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#html-filters">uBlock Origin Wiki</a>, <a href="https://www.w3schools.com/cssref/css_selectors.asp">W3Schools CSS Selectors</a></li>
		<li>@plugin-variations - uBlockOrigin on Firefox only, does not work on Chrome</li>
		<li>@special-characters - CSS Selectors <span class="code">.#*,>+~[]=|^$:()</span></li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'abpExtendedSelector': // #?#
		`
		<ul>
		<li>@syntax - <span class="code">#?#</span></li>
		<li>@name - AdBlockPlus Extended CSS Selector</li>
		<li>@description - </li>
		<li>@example - <span class="code">#?#div:-abp-has(> a[target="_self"][rel="nofollow,noindex"])</span></li>
		<li>@documentation - <a href="https://help.eyeo.com/en/adblockplus/how-to-write-filters#elemhide-emulation">AdBlockPlus How To</a>, <a href="https://www.w3schools.com/cssref/css_selectors.asp">W3Schools CSS Selectors</a></li>
		<li>@plugin-variations - Specifically designed for AdBlockPlus. uBlock Origin may actually understand these just fine if you use <span class="code">##</span></li>
		<li>@special-characters - CSS Selectors <span class="code">.#*,>+~[]=|^$:()</span></li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'actionOperator': // :style() :remove()
		`
		<ul>
		<li>@syntax - <span class="code">:style()</span> or <span class="code">:remove()</span></li>
		<li>@name - Action Operator</li>
		<li>@description - </li>
		<li>@example - <span class="code">:style(position: absolute !important;)</span></li>
		<li>@documentation - <a href="https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#action-operators">uBlock Origin Wiki</a>, <a href="https://www.w3schools.com/cssref/default.asp">W3Schools CSS Properties</a></li>
		<li>@plugin-variations - </li>
		<li>@special-characters - CSS Properties <span class="code">:;,()!</span></li>
		<li>@function-library - </li>
		<li>@tip - <span class="code">:style(position: absolute !important;)</span> or <span class="code">:style(position: relative !important)</span> is a great way to make floating toolbars not float anymore.</li>
		</ul>
		`,
	'uboScriptlet': // ##+js()
		`
		<ul>
		<li>@syntax - <span class="code">##+js()</span></li>
		<li>@name - uBlock Origin Scriptlet</li>
		<li>@description - </li>
		<li>@example - <span class="code">##+js(aopr, document.getElementById)</span></li>
		<li>@documentation - <a href="https://github.com/gorhill/uBlock/wiki/Resources-Library">uBlock Origin Wiki</a></li>
		<li>@plugin-variations - May only work for uBlock Origin</li>
		<li>@special-characters - <span class="code">,</span></li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'uboScriptletException': // #@#+js()
		`
		<ul>
		<li>@syntax - <span class="code">#@#+js()</span></li>
		<li>@name - uBlock Origin Scriptlet Exception</li>
		<li>@description - </li>
		<li>@example - </li>
		<li>@documentation - <a href="https://github.com/gorhill/uBlock/wiki/Resources-Library">uBlock Origin Wiki</a></li>
		<li>@plugin-variations - May only work for uBlock Origin</li>
		<li>@special-characters - <span class="code">,</span></li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'abpSnippet': // #$#
		`
		<ul>
		<li>@syntax - <span class="code">#$#</span></li>
		<li>@name - AdBlockPlus Snippet</li>
		<li>@description - </li>
		<li>@example - <span class="code">#$#abort-on-property-read TextDecoder; abort-on-property-read require; abort-current-inline-script _audiofanzineProductStack</span></li>
		<li>@documentation - <a href="https://help.eyeo.com/en/adblockplus/snippet-filters-tutorial">AdBlockPlus Snippet Filters Tutorial</a></li>
		<li>@plugin-variations - May only work for AdBlockPlus</li>
		<li>@special-characters - <span class="code">;</span></li>
		<li>@function-library - </li>
		<li>@tip - </li>
		</ul>
		`,
	'line': // linebreak
		`
		a linebreak
		`
};