---
title: "Creating Your First Custom PDF Template: An Introduction"
sidebar_label: "Custom Template Introduction"
description: ""
---

Creating a custom template allows you to control exactly how you want the generated PDF document to look. Our software uses HTML and CSS to generate the PDF documents, so you can use a language you already know to automate the document creation process with Gravity Forms. You also have full access to all PHP and WordPress functions and APIs to create advanced PDFs, and pull data from multiple sources.
<h3>Before You Begin</h3>
If you haven’t <a href="/v3/getting-started-with-gravity-pdf-configuration/">reviewed our five part installation and configuration guide</a> yet we recommend taking a look. You should also be familiar with (S)FTPing into your website.
<h3>Getting Started</h3>
(S)FTP into your web server and navigate to the PDF_EXTENDED_TEMPLATES folder, which is in your uploads directory. Inside you'll find a directory labelled with your site name. If running a multisite you'll see multiple directories. Select the appropriate folder.
<div class="message">The upload directory on a standard WordPress website is located in the <code>/wp-content/</code> folder.</div>
<div class="note">Gravity PDF 3.6.0 moved the <code>PDF_EXTENDED_TEMPLATES</code> folder from your active theme to your uploads directory.</div>

<img src="https://resources.gravitypdf.com/uploads/sites/2/2013/05/intro1.png" alt="An example of the plugins folder structure." width="719" height="460" /> An example of the plugins folder structure.

Inside this directory structure you will find the PDF templates that we feed to the plugin. There are a number of example templates to show off the features of the plugin and help give you a starting point for building your PDF templates.

The first step you want to take is copy and rename one of the example template files. Do <strong>NOT</strong> copy any of the default template files, as they are missing vital snippets for creating custom template files.
<div class="note">Ensure you copy one of the <strong><em>example</em></strong> template files and <strong>NOT </strong>the <em>default </em>template files.</div>

<img src="https://resources.gravitypdf.com/uploads/sites/2/2013/05/intro2.png" alt="We've copied the example-template.php file and renamed it my-custom-template.php" width="679" height="437" /> We've copied the example-template.php file and renamed it my-custom-template.php

Open your newly copied template file in your favourite editor and review the code. It's a standard looking HTML document with bits of PHP thrown in the mix.

<img class="size-full wp-image-4860" src="https://resources.gravitypdf.com/uploads/sites/2/2013/05/intro3.png" alt="The PDF template structure" width="695" height="899" /> The PDF template structure

Like HTML, the <code>&lt;body&gt;</code> section holds our structure. You should ensure any modifications to the <code>&lt;body&gt;</code> are made in between the <code>foreach</code> loop.

The last step in preparing your new PDF template is to remove the old template's <code>&lt;body&gt;</code> HTML.

<img class="size-full wp-image-4861" src="https://resources.gravitypdf.com/uploads/sites/2/2013/05/intro4.png" alt="Remove the example template's HTML so you can start fresh with your own custom HTML." width="692" height="854" /> Remove the example template's HTML so you can start fresh with your own custom HTML.
<h3>Including Gravity Form Fields in Your Template</h3>
There are two methods you can use to access Gravity Forms data in your custom PDF template:
<ol>
 	<li><a href="/v3/custom-templates-with-mergetags/">Gravity Forms merge tags</a></li>
 	<li><a href="/v3/custom-templates-with-form-data-array/">The $form_data array</a></li>
</ol>
Which method you use depends on your technical knowledge. If you are confident using PHP we recommend the $form_data array as you’ll be able to use and manipulate the entry data. While merge tags are easier to use they are rendered right before the PDF is processed which means you cannot manipulate or change the data. Anyone <strong>unfamiliar</strong> with PHP should stick with using merge tags.
<h3>Configure the Plugin</h3>
Once you create your PDF template you need to tell the software to use it. If you aren't familiar with configuring the software we recommend you review <a href="/v3/getting-started-with-gravity-pdf-configuration/">our five-part video series</a> on configuration, and <a href="/v3/configuration-options-examples/">all the configuration options available</a> to you.

Open your <code>configuration.php</code> file and create a configuration node using the <code>template</code> config option.

```
/* the very basic configuration telling the plugin to use your custom PDF template on form #3 */
$gf_pdf_config[] = array(
	'form_id'        => 3,
	'template'       => 'my-custom-template.php' /* you need to set this to your custom template name */
);
```

Once saved and uploaded back to your server you will be able to navigate to your form's entry page and view your custom PDF via the <em>View PDF </em>link.

<a id="entries-list" href="https://resources.gravitypdf.com/uploads/sites/2/2013/05/view-pdf-e1417511267926.png"><img class="wp-image-4877 size-full" src="https://resources.gravitypdf.com/uploads/sites/2/2013/05/view-pdf-e1417511267926.png" alt="The View PDF button on the form's entry list page." width="706" height="155" /></a> The View PDF button on the form's entry list page.

You can also view the PDF when viewing details of the entry. The PDF <em>View </em>and <em>Download </em>buttons are located in the right hand sidebar.

<a href="https://resources.gravitypdf.com/uploads/sites/2/2013/05/entry-details-page-e1417511292705.png"><img class="wp-image-4878 size-full" src="https://resources.gravitypdf.com/uploads/sites/2/2013/05/entry-details-page-e1417511292705.png" alt="The entry details page also has PDF View and Download buttons for easy access." width="851" height="601" /></a> The entry details page also has PDF View and Download buttons for easy access.
<h3>Using Custom Fonts</h3>
You can <a href="/v3/language-support/#installation">include TTF font files in your PDF documents</a> - provided the font author hasn't put restrictions on the font file. Users who need CJK-supported fonts in there PDFs will need to <a href="/v3/language-support/#cjk-support">download and install extra fonts</a>.
<h3>Supported HTML and CSS</h3>
mPDF, the software we use to generate the PDFs, is extremely powerful but <a href="/v3/css-and-html-support/">does have limitations in its HTML and CSS support</a>. Most notably is the lack of cascading styles, elements fixed to either inline or block, and the limited float and fixed positioning support.

Before beginning on your custom PDF template we recommend you <a href="/v3/css-and-html-support/">review the supported HTML and CSS tags and attributes</a>.
<h3 id="debug">Debugging Templates</h3>
In certain circumstances it is helpful to be able to view the HTML source that is being generated by your PDF template. To do this is as simple as adding <code>&amp;html=1</code> to your PDF URL.

First, view your PDF <a href="#entries-list">from the entries list page</a>. Then modify the URL with the <code>&amp;html=1</code> code. For example, the full PDF URL might look like this:

<code>https://gravitypdf.com/?gf_pdf=1&amp;fid=3&amp;lid=20&amp;template=my-custom-template.php<em>&amp;html=1</em></code>

You can then view the HTML source or use a developers tool like Firebug to help you review the PDF template.
<div class="note">Due to the limited support for some HTML and CSS features in mPDF the output of the HTML view may differ from the produced PDF.</div>