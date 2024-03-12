[![pages-build-deployment](https://github.com/tueksta/adblock-filter-analyzer/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/tueksta/adblock-filter-analyzer/actions/workflows/pages/pages-build-deployment)

# adblock-filter-analyzer
JavaScript library that analyzes AdBlock Filter Syntax. Colorizes and explains the syntax. Good for learning.

Live version located at https://tueksta.github.io/adblock-filter-analyzer/index.html

This is a fork of https://github.com/RedDragonWebDesign/adblock-filter-analyzer

## Features

- Mainly a code coloring and learning tool. But does some validation too.
- Handles very large files (30,000 lines will take a couple of seconds, but will work)
- Gives an error count and detailed error report
- Colors 29 different kinds of syntax
- Checks for some common errors
- Validates RegEx
- Checks options and uboScriptlets against a list of valid functions, marks as error if not found.
- Colors and error checks as you type
