// Copyright https://www.RedDragonWebDesign.com/ All rights reserved.

"use strict";

import { AdBlockSyntaxBlock }  from './AdBlockSyntaxBlock.js';
import { Cursor }  from './Cursor.js';
import { tooltips } from './tooltips.js';

// This line not optional. Content loads top to bottom. Need to wait until DOM is fully loaded.
window.addEventListener('DOMContentLoaded', (e) => {
	let richText = document.getElementById('rich-text');
	let clear = document.getElementById('clear');
	let lineCount = document.getElementById('line-count');
	let definition = document.getElementById('definition');
	let filterList = document.getElementById('filter-list');
    let timer = document.getElementById('timer');
    let errorCount = document.getElementById('error-count');

	/** Do some HTML escape, convert tabs to &nbsp, convert enters to <br>. Prevents bugs when pasting and importing from file into richTextBox. */
	function processPastedText(text) {
		text = text.replace(/</g, "&lt;");
		text = text.replace(/>/g, "&gt;");
		text = text.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
		text = text.replace(/\r\n/g, "<br>");
		text = text.replace(/\n/g, "<br>");
		return text;
	}

function updateButtonVisibility() {
    let errorCount = parseInt(document.getElementById('error-count').textContent);
    let scrollToErrorButton = document.getElementById('scrollToError');
    if (errorCount > 0) {
        scrollToErrorButton.style.display = 'inline-block';
    } else {
        scrollToErrorButton.style.display = 'none';
    }
}

	function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
	}

	richText.addEventListener('input', debounce(function(e) {
		const startTime = performance.now();
		// In theory, we should need some escapeHTML's and unescapeHTML's around here. In actual testing, anything being written into the <textarea> by JS didn't need to be escaped.
		let offset = Cursor.getCurrentCursorPosition(richText);
		let block = new AdBlockSyntaxBlock();
		block.parseRichText(richText.innerHTML);
		richText.innerHTML = block.getRichText();
		Cursor.setCurrentCursorPosition(offset, richText);
		const endTime = performance.now();
        const processTime = endTime - startTime;
        timer.textContent = processTime.toFixed(2) + `ms`; // Display process time in milliseconds with two decimal places
		lineCount.innerHTML = block.getLineCount();
		errorCount.textContent = block.getErrorCount();
		richText.focus(); // blinks the cursor
		updateButtonVisibility();

		}, 300)); // 300ms debounce
		
		// When pasting into rich text editor, force plain text. Do not allow rich text or HTML. For example, the default copy/paste from VS Code is rich text. Foreign formatting messes up our syntax highlighting.
		richText.addEventListener("paste", function(e) {
		// cancel paste
		e.preventDefault();
		// get text representation of clipboard
		var text = (e.originalEvent || e).clipboardData.getData('text/plain');
		text = processPastedText(text);
		// insert text manually
		Cursor.setCurrentCursorPosition(0, richText);
		document.execCommand("insertHTML", false, text);
		richText.focus(); // shows the cursor
	});
	
	clear.addEventListener('click', function(e) {
		richText.innerHTML = "";
		timer.textContent = "-";
		lineCount.innerHTML = 0;
		errorCount.textContent = 0;
		filterList.value = "";
		updateButtonVisibility();
	});
	
function addDescription(e) {
    e = e || window.event;

    var targetElem = e.target || e.srcElement;

    // Tags must be capitalized for some reason
    if (targetElem.nodeName === "SPAN") {
        let myClasses = targetElem.className.split(" ");
        let descriptionText = ""; // Initialize descriptionText outside the loop

        // First, check if 'error' class is present and prioritize it
        if (myClasses.includes("error")) {
            let errorMessage = targetElem.getAttribute('data-error-message');
            descriptionText = errorMessage ? `<h2>⛔ <span class="error">error</span></h2>${errorMessage}` : "Error without a message";
        } else {
            // If no 'error' class, proceed with other classes
            for (let myClass of myClasses) {
                if (myClass == 'line') continue; // Skip 'line' class
                if (tooltips[myClass]) { // Check if tooltip exists for the class
                    descriptionText = `<h2><span class="${myClass}">${myClass}</span></h2>` + tooltips[myClass];
                    break; // Exit after the first relevant class is found
                }
            }
        }

        definition.innerHTML = descriptionText;
    }
}

	richText.addEventListener("mouseover", addDescription, false);
	richText.addEventListener("mousewheel", addDescription, false);
	richText.addEventListener("input", addDescription, false);

	// when picking a filter list to load from the combo box
	filterList.addEventListener("change", function(e) {

		richText.innerHTML = "<div class='loading'></div>";

		timer.textContent = "...";
		lineCount.innerHTML = "...";
		errorCount.textContent = "...";

		if ( ! filterList.value ) {
			richText.innerHTML = "";
			return;
		}
		
		let xmlhttp = new XMLHttpRequest();
		xmlhttp.open('GET', filterList.value, true);
		xmlhttp.onload = function() {
		if (xmlhttp.status >= 200 && xmlhttp.status < 300) {
			// Process and display the fetched data
			let text = xmlhttp.responseText;
			text = processPastedText(text);
			richText.innerHTML = text;
		} else {
			// Handle request errors
			richText.innerHTML = "<div class='error'>An error occurred while fetching the filters.</div>";
		}
			Cursor.setCurrentCursorPosition(0, richText);
			richText.dispatchEvent(new Event('input', { bubbles: true }));
		};
		xmlhttp.onerror = function() {
		// Handle network errors
			richText.innerHTML = "<div class='error'>Network error. Unable to fetch the filters.</div>";
		};
		xmlhttp.send();
	});
	
	filterList.dispatchEvent(new Event('change', { bubbles: true }));


    let nextSpanIndex = 0;

	document.getElementById('scrollToError').addEventListener('click', function() {
	    let spans = richText.querySelectorAll('.error');
	    let currentCursorPos = Cursor.getCurrentCursorPosition(richText);
	    
	    let nextSpan = spans[nextSpanIndex];
		Cursor.setCurrentCursorPosition(nextSpan.textContent.length, richText);
	        
	    // Scroll the textarea to the next span
	    // nextSpan.scrollIntoView({ behavior: 'smooth', block: 'center' });
	    richText.scrollTop = nextSpan.offsetTop;

	    nextSpanIndex++;

	    if (nextSpanIndex >= spans.length) {
	    	nextSpanIndex = 0;
	    }
	});

});