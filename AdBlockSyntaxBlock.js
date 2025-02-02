// Copyright https://www.RedDragonWebDesign.com/ All rights reserved.

"use strict";

import { AdBlockSyntaxLine }  from './AdBlockSyntaxLine.js';

export class AdBlockSyntaxBlock {
	string = "";
	richText = "";
	countTrue = 0;
	countFalse = 0
	countNotSure = 0;
	countComments = 0;
	countMismatches = 0;
	lineCount = 0;
	
	parseString(s) {
		this._parse(s);
	}
	
	_unescapeHTML(input) {
		return input
			.replace(/&amp;/g, "&")
			.replace(/&lt;/g, "<")
			.replace(/&gt;/g, ">")
			.replace(/&quot;/g, "\"")
			.replace(/&#039;/g, "'");
	}
	
	parseRichText(richText) {
		let s = richText;
		// remove spans
		s = s.replace(/<span class=\".*?\">/g, "");
		s = s.replace(/<\/span>/g, "");
		// convert <br> to \n
		s = s.replace(/<br>/g, "\n");
		// remove <div> </div> - these are placed when the user hits enter
		s = s.replace(/<div>/g, "\n");
		s = s.replace(/<\/div>/g, "");
		// remove <font color="#000000"> </font> - these are placed when the user hits enter
		s = s.replace(/<font.*?>/g, "");
		s = s.replace(/<\/font>/g, "");
		// remove &nbsp;
		s = s.replace(/&nbsp;/g, " ");
		// replace tab with 4 spaces
		s = s.replace(/\t/g, "    ");
		s = this._unescapeHTML(s);
		this._parse(s);
	}
	
	getRichText() {
		return this.richText;
	}
	
	getLineCount() {
		return this.lineCount;
	}
	
	getErrorCount() {
		return this.countFalse;
	}
	
	_parse(s) {
		this.string = s;
		let lines = s.split("\n");
		this.lineCount = lines.length - 1; // I'm not sure why array has an extra line, but it does, subtract 1 line from count
		let counter = 0;
		for ( let lineString of lines) {
			this.richText += "<span class='line'>";
			if ( lineString !== '' ) {
				let line = new AdBlockSyntaxLine(lineString);
				if ( ( line.isValid === false || line.isValid === "mismatch" ) ) {
					counter++;
				}
				this.richText += line.getRichText();
			
				// increment the true/false counters
				this._incrementCounters(line);
			}
			this.richText += "</span>";
		}
		this.richText = this.richText.slice(0, this.richText.length - 4);
	}
			
	_incrementCounters(line) {
		if ( line.syntax['comment'] ) {
			this.countComments++;
		} else {
			switch( line.isValid ) {
				case true:
					this.countTrue++;
					break;
				case false:
					this.countFalse++;
					break;
				case "not sure":
					this.countNotSure++;
					break;
				case "mismatch":
					this.countMismatches++;
					break;
			}
		}
	}
}