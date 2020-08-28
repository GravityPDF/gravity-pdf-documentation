---
title: "Known Issues and Limitations"
sidebar_label: "Known Issues and Limitations"
description: ""
---

<h3>Block and Inline HTML</h3>
All HTML elements have been hardcoded to either <code>block</code> or <code>inline</code>. This cannot be changed and using <code>display: block</code> or <code>display: inline</code> won't have any effect.
<h3>Tables</h3>
Block elements like <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, or <code>&lt;li&gt;</code>tags are not supported inside tables. The content is displayed, but any CSS properties which apply are ignored.
<h3>Block Floating/Positioning</h3>
Blocks which are defined as <code>position: absolute</code> or <code>position: fixed</code>, or are floated <a href="/v3/floats-and-fixed-positioning-pdf-template-example/">have only limited support</a>.
<h3>Corrupt PDF File</h3>
This is usually caused by PHP errors generated while the PDF is created. The easiest fix is to turn off PHP error reporting and log the errors to a file (something that should be done in all production environments).

To debug the issue save the PDF to disk and open it up in a text document. The start of the PDF will contain a PHP error message which will help narrow down the issue.
<h3>Text being replaced by random numbers / dates.</h3>
mPDF uses a <a href="/v3/reserved-variables/">number of reserved variables</a> which can be inserted into a template and replaced when generating a PDF.
<h3>Blank Screen and no PDF</h3>
If you are getting a blank screen when attempting to generate a PDF there may be a script error. Setting <code>WP_DEBUG</code> to <code>true</code> in your <code>wp-config.php</code> file and viewing the PDF again should reveal the problem. In a majority of cases this is caused by <a href="/v3/installation-requirements/">a lack of RAM assigned to your web server</a>.