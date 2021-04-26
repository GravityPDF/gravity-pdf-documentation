---
title: "Display PDF in Browser"
sidebar_label: "Display PDF in Browser"
description: ""
---

The generated PDF can easily and securely be displayed in a users browser once the form has been submitted using the Gravity Form redirect setting.
<h3>Security</h3>
Before we discuss these methods just a note on security. To prevent unwanted users accessing sensitive data each PDF displayed using this method will check three things:
<ol>
	<li>If the user is logged in and their user ID matches the ID on the entry.</li>
	<li>Or, if the user's IP address matches the IP address on file for the entry.</li>
	<li>Or, if an administrator is logged in with read privileges for Gravity Forms entries.</li>
</ol>
<h3>Passing Form Values</h3>
You'll need to pass all of the following values to a URL you create in order to display the PDF in the browser:
<ul>
	<li><code>fid=&#123;form_id&#125;</code></li>
	<li><code>lid=&#123;entry_id&#125;</code></li>
	<li><code>gf_pdf=1</code></li>
	<li><code>template=custom-template.php</code></li>
</ul>
The <code>fid</code> and <code>lid</code> parameters take information using Merge Tags, <code>gf_pdf</code> won't change and template will refer to the template file you would like to use when generating the PDF.
<h3>Example</h3>
<h4 id="text-confirmation">Text Confirmation Method</h4>
<a href="https://resources.gravitypdf.com/uploads/sites/2/2013/06/display-in-browser-1.png"><img src="https://resources.gravitypdf.com/uploads/sites/2/2013/06/display-in-browser-1.png" alt="The Gravity Forms text confirmation message." width="800" height="516" /></a> You can pass in the appropriate values to the 'text' confirmation and allow users to download a copy of the PDF right after submitting their form.
<h4 id="page-confirmation">Page Confirmation Method</h4>
This option is more complex than the other two options as you need to install a third party plugin which allows you to use the URL parameters in the page you point to.

First download and install the <a href="https://wordpress.org/plugins/url-params/">URL Params plugin</a>. Next, go to your form's confirmation page and configure it to look like the screenshot below.

<img class="wp-image-5168 size-large" src="https://resources.gravitypdf.com/uploads/sites/2/2013/06/display-in-browser-page-method-1-1024x608.png" alt="Set you form's configuration settings like so." width="1024" height="608" /> Set you form's configuration settings like so. You can point to any page you like.

Finally, go to your WordPress page you linked to and, using the PDF Params plugin, you can construct the PDF link and access the form ID and entry ID parameters.
<div class="note">The WordPress 4.2.3 Security Release <a href="https://make.wordpress.org/core/2015/07/23/changes-to-the-shortcode-api/">changes the way the Shortcode API works</a>. You can <strong>no longer</strong> include a shortcode with the matching quotes inside a HTML attribute - this is invalid: <code>&lt;a href="[urlparam param="lead_id"]"&gt;</code>. The simple fix is to remove the quotes from the shortcode - this is valid: <code>&lt;a href="[urlparam param=lead_id]"&gt;</code>.</div>
<a href="https://resources.gravitypdf.com/uploads/sites/2/2013/06/gravity-pdf-page-redirect.png"><img class="alignnone wp-image-5205 size-full" src="https://resources.gravitypdf.com/uploads/sites/2/2013/06/gravity-pdf-page-redirect.png" alt="" width="539" height="455" /></a>
<h4 id="redirect-confirmation">Redirect Confirmation Method</h4>
<a href="https://resources.gravitypdf.com/uploads/sites/2/2013/06/display-in-browser-2.png"><img src="https://resources.gravitypdf.com/uploads/sites/2/2013/06/display-in-browser-2.png" alt="The Gravity Forms redirect confirmation message" width="800" height="516" /></a> You can automatically redirect users to the generated PDF right after submitting their form

&nbsp;
<h3>Automatically print when PDF is opened</h3>
<div class="note"><strong>Note:</strong> This feature isn't compatible with the PDF security features or when sending PDFs via email.</div>
<div class="note"><strong>Note:</strong> Some PDF viewers don't adhere to this option.</div>
<div class="message"><em>Added in v3.4.0</em></div>

<a href="https://resources.gravitypdf.com/uploads/sites/2/2013/06/display-in-browser-3.png"><img src="https://resources.gravitypdf.com/uploads/sites/2/2013/06/display-in-browser-3.png" alt="Adding &amp;print=1 to the PDF URL" width="800" height="435" /></a> By adding &amp;print=1 to the URL a print dialog box will automatically open when the PDF does.

To automatically force a print dialog box to be displayed when the PDF is viewed or downloaded from your website you can append <code>&amp;print=1</code> to your PDF link.

&nbsp;