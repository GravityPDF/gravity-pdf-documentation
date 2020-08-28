---
title: "Configuration Options"
sidebar_label: "Configuration Options"
description: ""
---

<div id="config-location" class="message">All configuration should be added to your <code>/wp-content/uploads/PDF_EXTENDED_TEMPLATES/configuration.php</code> file. Multisite installations will have an extra directory in the PDF templates folder which are named with each website's ID number - <code>/wp-content/uploads/PDF_EXTENDED_TEMPLATES/5/configuration.php</code>.</div>
<div class="note">Gravity PDF 3.6.0 moved the <code>PDF_EXTENDED_TEMPLATES</code> folder from your active theme to your uploads directory.</div>
<strong>BASIC USAGE</strong>

It is simple to generate PDFs and have them attached to Gravity Form notifications. The following will send the default PDF template to all form notifications.

```
$gf_pdf_config[] = array(
	'form_id' => 1, 
	'notifications' => true,
);
```

It's worth noting that each 'block' or 'node' as we like to call them is representative of one PDF. If you add a second node with the same form ID as the first you <strong>are creating two separate PDFs</strong>. If you would like to <a href="/v3/configuration-options-examples/#example">apply multiple options to a single node</a> you can.

<strong id="default-template">DEFAULT TEMPLATE-ONLY CONFIGURATION</strong>
<div class="note">You can exclude fields from the default PDF template by adding the class name <code>exclude</code> to the field's <em>Custom CSS Class</em> option (in the fields Appearance or Advanced tab).</div>
Users can use these options to change the look and feel of any of the default template files (any template prepended with default-) to change their look and feel.

<em>Description:</em>
<ul>
	<li><strong>default-show-html</strong> - This option will display HTML blocks in your default template (added in v3.1.0).</li>
	<li><strong>default-show-empty</strong> - All form fields will be displayed in the PDF, regardless of what the user input is (added in v3.1.0).</li>
	<li><strong>default-show-page-names</strong> - If you are using page breaks you can display the page names in the PDF (added in v3.1.0).</li>
	<li><strong>default-show-section-content</strong> - By default only the section break title is displayed in the PDF. Enabling this option will also show the section break content (added in v3.7).</li>
</ul>

```
/* set individual options for default templates */
$gf_pdf_config[] = array(
	'form_id' => 1, 
	'template' => 'default-template.php',		
	'default-show-html' => true,
);  

$gf_pdf_config[] = array(
	'form_id' => 1, 
	'template' => 'default-template.php',	
	'default-show-empty' => true,
); 

$gf_pdf_config[] = array(
	'form_id' => 1, 
	'template' => 'default-template.php',		
	'default-show-page-names' => true,
);   

$gf_pdf_config[] = array(
	'form_id' => 1, 
	'template' => 'default-template.php',		
	'default-show-section-content' => true,
); 

/*
* Or use a combination of the new options to achieve the results you want
*/
$gf_pdf_config[] = array(
	'form_id' => 1, 
	'template' => 'default-template.php',		
	'default-show-html' => true,
	'default-show-empty' => true,
	'default-show-page-names' => true,
	'default-show-section-content' => true,
);
```

<strong>ATTACH DEFAULT TEMPLATE TO NOTIFICATION</strong>

By default the software doesn't attach PDFs to notifications. By using the <em>notifications</em> option you can choose to attach PDFs to all notifications of a form, or restrict it to particular notifications.

```
/* only send default template to the notification called Admin Attachment */ 
$gf_pdf_config[] = array(
	'form_id' => 1, 
  	'notifications' => 'Admin Notification', 
); 
  
/* multiple attachments but not all */  
$gf_pdf_config[] = array(
	'form_id' => '1', 
  	'notifications' => array('Admin Notification', 'User Notification'), 
);  
  
/* attach PDF to all form notifications */  
$gf_pdf_config[] = array(
	'form_id' => '1', 
  	'notifications' => true, 
);  
```

<strong id="pdf-name">CUSTOM PDF NAME</strong>

Using this option you can change the PDF name and even use MERGETAGS to customise the PDFs for each user.
<div class="message"><strong>Note:</strong> The MERGETAG <code>&#123;all_fields&#125;</code> will not be processed.</div>
<div class="message"><strong>Note: </strong>Remember to add <code>.pdf</code> to the end of your custom PDF name</div>

```
$gf_pdf_config[] = array(
	'form_id' => '1', 
	'notifications' => true, 
	'filename' => 'User &#123;Name:1&#125;.pdf', 
);
```

<strong id="custom-template">CUSTOM TEMPLATE</strong>
<div class="message">Please see our dedicated documentation page which discusses how <a href="/v3/custom-templates-introduction/">to create a custom template file</a>.</div>
You can set the custom template using the template parameter.

```
$gf_pdf_config[] = array(
	'form_id' => 1,
	'template' => 'example-template.php',
);

```

<strong id="paper-size">CUSTOM PDF SIZE AND ORIENTATION</strong>

You can change the default size of your PDF from A4 to a number of pre-defined sizes, including letter and legal, or use a custom size. You are also able to change if the document is landscape or portrait.
<div class="message"><strong>Note:</strong> PDF size presets include: A0 - A10, B0 - B10, C0 - C10, 4A0, 2A0, RA0 - RA4, SRA0 - SRA4, Letter, Legal, Executive, Folio, Demy and Royal</div>

```
/* generate a PDF the size of US letter in landscape */
$gf_pdf_config[] = array(
	'form_id' => 1,
	'pdf_size' => 'letter',
	'orientation' => 'landscape',
);

/* generate an A3 PDF document */
$gf_pdf_config[] = array(
	'form_id' => 1,
	'pdf_size' => 'A3',
);

/* generate a custom PDF (specified in millimeters) */
$gf_pdf_config[] = array(
	'form_id' => 1,
	'pdf_size' => array(150, 250),
);
```

<strong id="rtl">RTL LANGUAGE SUPPORT</strong>

mPDF supports a range of languages out of the box and if you are generating PDFs in RTL languages like Arabic or Hebrew you can call the RTL parameter to correctly display text in your PDF.
<div class="message"><strong>Note: </strong>If you want to output PDFs in Japanese, Korean or Chinese you will need to <a href="/v3/language-support/">install additional fonts</a>.</div>

```
$gf_pdf_config[] = array(
	'form_id' => 1,
	'rtl' => true,
);
```

<strong id="security">PDF SECURITY</strong>

You can easily restrict what users can do with generated PDFs by applying privileges to the document. You can also password protect it and set a master password to prevent any of the security settings being modified.

To enable the security methods you first need to set the <em>security</em> option to true.

```
$gf_pdf_config[] = array(
	'form_id' => 1,
	'notifications' => true,

	'security' => true,
	'pdf_password' => 'myPDFpass', /* remember to CHANGE this */
	'pdf_privileges' => array('copy', 'print', 'modify', 'annot-forms', 'fill-forms', 'extract', 'assemble', 'print-highres'),
	'pdf_master_password' => 'admin password', /* remember to CHANGE this */
);
```

<div class="note"><strong>Warning:</strong> If <code>pdf_master_password</code> is omitted a random one will be generated</div>
<div class="note"><strong>Note:</strong> Passing a blank array or not passing anything to <code>pdf_privileges</code> will deny all permissions to the user.</div>
<div class="message"><strong>Note:</strong> Valid privileges include: <code>copy</code>, <code>print</code>, <code>modify</code>, <code>annot-forms</code>, <code>fill-forms</code>, <code>extract</code>, <code>assemble</code>, <code>print-highres</code></div>
<div class="message"><strong>Note:</strong> The use of <code>print</code> will only allow low-resolution printing from the document; you must specify <code>print-highres</code> to allow full resolution printing.</div>
<strong id="pdfa1b">CREATE PDF/A-1b DOCUMENTS</strong>
<div class="message">Added in v3.4.0</div>
PDF/A1-b is a file format for the long-term archiving of electronic documents. A key element to this reproducibility is the requirement for PDF/A documents to be 100% self-contained.

The software will automatically make appropriate changes to your document to generates a valid PDF/A-1b document, however the following items cannot be automatically fixed and are disallowed:
<ol>
	<li>Watermarks - text or image - are not permitted (transparency is disallowed so will make text unreadable)</li>
	<li>PNG images with alpha channel transparency ('masks' not allowed)</li>
</ol>
<div class="note"><strong>Important:</strong> The software is not guaranteed to produce fully PDF/A1-b compliant files in all circumstances. It is the users responsibility to check compliance if this is essential.</div>
<div class="message"><strong>Note:</strong> The security features aren't compatible with PDF/A-1b and will be automatically removed.</div>

```
$gf_pdf_config[] = array(
	'form_id' => 1, 
	'pdfa1b' => true,
);
```

You can read more about <a href="http://mpdf.github.io/what-else-can-i-do/pdf-a1-b-compliance.html">generating a PDF/A1-b document on the mPDF website</a>.

<strong id="pdfx1a">CREATE PDF/X-1a DOCUMENTS</strong>
<div class="message">Added in v3.4.0</div>
PDF/X-1a is a file format to facilitate printing of electronic documents. Two key elements to this function are the requirement for PDF/X-1a documents to be 100% self-contained, and all images need to be CMYK or spot colors.

The software will automatically make appropriate changes to your document to generates a valid PDF/X-1a document, however the following items cannot be automatically fixed and are disallowed:
<ol>
	<li>Watermarks - text or image - are not permitted (transparency is disallowed so will make text unreadable)</li>
	<li>PNG images with alpha channel transparency ('masks' not allowed)</li>
</ol>
<div class="note"><strong>Important:</strong> The software is not guaranteed to produce fully PDF/X-1a compliant files in all circumstances. It is the users responsibility to check compliance if this is essential.</div>
<div class="message"><strong>Note:</strong> The security features aren't compatible with PDF/X-1a and will be automatically removed.</div>

```
$gf_pdf_config[] = array(
	'form_id' => 1, 
	'pdfx1a' => true,    
);
```

You can read more about <a href="http://mpdf.github.io/what-else-can-i-do/pdf-x-1a-compliance.html">generating a PDF/X-1a document on the mPDF website</a>.

<strong id="save">SAVE PDF TO SERVER</strong>
<div class="message">Added in 3.4.0</div>
Use this option if you want to save the PDF to your server when an entry is submitted. This is useful if you aren't sending PDF notifications (which need to save the PDFs so they can be attached to emails) and would still like the PDFs generated.

```
$gf_pdf_config[] = array(
    'form_id' => 1, 
    'save' => true,  
);
```

<strong id="dpi">SET IMAGE DPI</strong>
<div class="message">Added in v3.4.0</div>
<div class="message"><strong>Note:</strong> The default DPI is 96</div>
For when you need control over the image DPI - which is usually set to 300 when used in professional printing.

```
$gf_pdf_config[] = array(
	'form_id' => 1, 
	'dpi' => 300,  
);   
```

<strong id="advanced">ADVANCED USAGE</strong>

You can generate and attach multiple PDFs on the same form by creating two different configuration arrays using the same form_id.
<div class="note"><strong>Warning: </strong>You need to <strong>explicitly</strong> set the filename when using this method otherwise the default file name will be used and only generate one PDF.</div>

```
$gf_pdf_config[] = array(
	'form_id' => 1,
	'notifications' => true,
	'template' => 'custom-template.php',
	'filename' => 'Custom.pdf',
);

$gf_pdf_config[] = array(
	'form_id' => 1,
	'notifications' => true,
	'template' => 'custom2.php',
	'filename' => 'Custom Template 2.pdf',
);
```

<strong id="default-config-options">DEFAULT CONFIGURATION OPTIONS</strong>
<div class="note"><strong>Warning: </strong> The default configuration settings will only work if the configuration option <code>GFPDF_SET_DEFAULT_TEMPLATE</code> is set to <code>true</code>.</div>
Users have the ability to set default configuration options for all forms that you haven't explicitly set a configuration for. Users can use any configuration option which you would use in the normal configuration.

```
global $gf_pdf_default_configuration;

$gf_pdf_default_configuration = array(
	'template' => 'default-template.php',
	'pdf_size' => 'A4',
);
```

<strong id="example">PUTTING IT ALL TOGETHER</strong>

We've put together an example that uses all the configuration options (minus the default template-specific options) for Gravity PDF.

```
$gf_pdf_config[] = array(
	'form_id' => 1,
	'notifications' => array('My Notification 1', 'My Notificaiton 2'),
	'template' => 'custom-template.php',
	'filename' => '&#123;date_mdy&#125;_Custom.pdf',

	'rtl' => true,

	'pdfsize' => 'A10',
	'orientation' => 'landscape',

	'security' => true,
	'pdf_password' => 'mypass', /* remember to CHANGE this */
	'pdf_privileges' => array('print', 'fill-forms', 'print-highres'),
	'pdf_master_password' => 'admin password', /* remember to CHANGE this */
);
```

<h2 id="settings">Settings</h2>
<table class="code_display"><colgroup> <col /> <col /> <col /> <col /> <col /> </colgroup>
<tbody>
<tr>
<th>Property</th>
<th>Default</th>
<th>Type</th>
<th>Example</th>
<th>Description</th>
</tr>
<tr>
<td><strong>form_id</strong></td>
<td>N/A</td>
<td>Mixed - Integer/Array</td>
<td>1 or array(1,2,5)</td>
<td>The ID of the form you want to apply the PDF configuration to. The only required option.</td>
</tr>
<tr>
<td><strong>default-show-html</strong> (v3.1.0+)</td>
<td>false</td>
<td>Boolean</td>
<td>true or false</td>
<td>This option will display HTML blocks in your default template.</td>
</tr>
<tr>
<td><strong>default-show-empty</strong> (v3.1.0+)</td>
<td>false</td>
<td>Boolean</td>
<td>true or false</td>
<td>All form fields will be displayed in the PDF, regardless of what the user input is.</td>
</tr>
<tr>
<td><strong>default-show-page-names</strong> (v3.1.0+)</td>
<td>false</td>
<td>Boolean</td>
<td>true or false</td>
<td>If you are using page breaks you can display the page names in the PDF.</td>
</tr>
<tr>
<td><strong>default-show-section-content</strong> (v3.7+)</td>
<td>false</td>
<td>Boolean</td>
<td>true or false</td>
<td>Enabling this option will also show the section break content.</td>
</tr>
<tr>
<td><strong>notifications </strong></td>
<td>N/A</td>
<td>Mixed - String/Array/Boolean</td>
<td>"Admin Notification", array('Not 1', 'Not 2') or true.</td>
<td>The notifications you want to attach the PDF to. Leave blank will not attach PDF to notification.</td>
</tr>
<tr>
<td><strong>template</strong></td>
<td>Default-template.php</td>
<td>String</td>
<td>"my-custom- template.php"</td>
<td>The template file used to generate the PDF document. Note: PDF templates are located in your active theme's PDF_EXTENDED_TEMPLATES folder.</td>
</tr>
<tr>
<td><strong>filename </strong></td>
<td>form-&#123;form_id&#125;- entry-&#123;entry_id&#125;.pdf</td>
<td>String</td>
<td>"My Custom Name.pdf" or " User &#123;Name:1&#125;.pdf"</td>
<td>Change the name of the PDF file. You can now use a form's MERGE TAGS in the file name.</td>
</tr>
<tr>
<td><strong>pdf_size </strong></td>
<td>A4</td>
<td>Mixed - String/Array</td>
<td>"Letter", "A10" or array(50, 200)</td>
<td>Sets the PDF size. Can pass a string with pre-defined size or an array which sets the PDF width and height in millimetres. <strong>PDF Presets</strong> A0 - A10, B0 - B10, C0 - C10, 4A0, 2A0, RA0 - RA4, SRA0 - SRA4, Letter, Legal, Executive, Folio, Demy, Royal</td>
</tr>
<tr>
<td><strong>orientation </strong></td>
<td>Portrait</td>
<td>String</td>
<td>"landscape"</td>
<td>Change the orientation of the PDF to landscape. <strong>Note</strong>: By default the orientation is portrait so you only need to add it for landscape PDFs</td>
</tr>
<tr>
<td><strong>rtl </strong></td>
<td>False</td>
<td>Boolean</td>
<td>True</td>
<td>Change the text direction from right to left for languages like Hebrew and Arabic</td>
</tr>
<tr>
<td><strong>pdfa1b</strong> (v3.4.0+)</td>
<td>false</td>
<td>Boolean</td>
<td>true or false</td>
<td>Changes the PDF output to a PDF/A-1b document</td>
</tr>
<tr>
<td><strong>pdfx1a</strong> (v3.4.0+)</td>
<td>false</td>
<td>Boolean</td>
<td>true or false</td>
<td>Changes the PDF output to a PDF/X-1A document</td>
</tr>
<tr>
<td><strong>save</strong> (v3.4.0+)</td>
<td>false</td>
<td>Boolean</td>
<td>true or false</td>
<td>Save the PDF to your server on form submission.</td>
</tr>
<tr>
<td><strong>dpi</strong> (v3.4.0+)</td>
<td>96</td>
<td>Integer</td>
<td>300</td>
<td>Changes the image DPI. 96 is a good default, but it should be changed to 300 if the document is to be professional printed</td>
</tr>
<tr>
<td><strong>security </strong></td>
<td>False</td>
<td>Boolean</td>
<td>True</td>
<td>Determines whether to restrict access to PDF. Use in conjunction with pdf_master_password, pdf_password and pdf_privileges.</td>
</tr>
<tr>
<td><strong>pdf_master_password</strong></td>
<td>N/A</td>
<td>String</td>
<td>"aSAja4202$@@"</td>
<td>Restricts modification of the PDF document. If omitted a random password will be generated.</td>
</tr>
<tr>
<td><strong>pdf_password</strong></td>
<td>N/A</td>
<td>String</td>
<td>"U5erPa55w%rd"</td>
<td>Restricts access to a PDF. If you pass an empty string there won't be a password on the PDF.</td>
</tr>
<tr>
<td><strong>pdf_privileges</strong></td>
<td>N/A</td>
<td>Array</td>
<td>array('copy', 'print', 'modify', 'annot-forms', 'fill-forms', 'extract', 'assemble', 'print-highres')</td>
<td>Restricts what users are able to do with the PDF. <strong>Note</strong>: The use of print will only allow low-resolution printing from the document; you must specify print-highres to allow full resolution printing. <strong>Note</strong>: Passing a blank array or not passing anything to pdf_privileges will deny all permissions to the user</td>
</tr>
</tbody>
</table>
<h2 id="constants">Advanced Configuration</h2>
At the bottom of the configuration.php file is a number of constants that modify advanced program settings - most related to reducing the software's memory footprint. View the <a href="/v3/memory-problems/">memory footprint portion of the documentation</a> for more information about reducing memory usage.
<table class="code_display"><colgroup> <col /> <col /> <col /> <col /> <col /> </colgroup>
<tbody>
<tr>
<th>Property</th>
<th>Default</th>
<th>Type</th>
<th>Example</th>
<th>Description</th>
</tr>
<tr>
<td>GFPDF_SET_DEFAULT_TEMPLATE</td>
<td>True</td>
<td>Boolean</td>
<td>false</td>
<td>By default, forms that don't have PDFs assigned through the above configuration will automatically use the default template in the admin area. Set to false to disable.</td>
</tr>
<tr>
<td>PDF_ENABLE_MPDF_LITE</td>
<td>False</td>
<td>Boolean</td>
<td>true</td>
<td>Reduce the memory footprint by disabling advanced features like advanced table borders, terms and conditions, columns, index, bookmarks and barcodes.</td>
</tr>
<tr>
<td>PDF_ENABLE_MPDF_TINY</td>
<td>False</td>
<td>Boolean</td>
<td>true</td>
<td>Further reduce memory footprint by disabling all the features of Lite plus positioning, float, watermark and form support</td>
</tr>
<tr>
<td>PDF_DISABLE_FONT_SUBSTITUTION</td>
<td>False</td>
<td>Boolean</td>
<td>true</td>
<td width="246">Disable font substitution. The entire font file will be embedded in PDF. <strong>Note</strong>: embedding entire font files increases PDF file size.</td>
</tr>
<tr>
<td>PDF_ENABLE_SIMPLE_TABLES</td>
<td>False</td>
<td>Boolean</td>
<td>true</td>
<td>Disable the advanced table feature and forces all cells to have the same border and background</td>
</tr>
</tbody>
</table>