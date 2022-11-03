---
title: "Creating A Custom PDF Template With Merge Tags"
sidebar_label: "Templates with Mergetags"
description: ""
---

import ResponsiveEmbed from 'react-responsive-embed'

<div class="message">If you haven't <a href="/v3/custom-templates-introduction/">read our introduction guide to custom templates</a>, do this first.</div>
Using merge tags in your custom PDF template is a simple and effective way to include information from your Gravity Form in your PDF. However, this method is the least flexible as you cannot manipulate the data using PHP.
<h3>Finding Your Form's Merge Tags</h3>
To find the merge tags associated with your form we recommend navigating to your form's notifications section. The main textarea of individual notifications allows you to generate merge tags for specific fields.

<img class="size-full wp-image-4869" src="https://resources.gravitypdf.com/uploads/sites/2/2014/11/accessing-mergetags.png" alt="A preview of the Gravity Forms notifications settings page with the merge tag selector open." width="715" height="326" /> A preview of the Gravity Forms notifications settings page with the mergetag selector open.

Once you have the merge tags you want you can copy them over to your PDF template file and the entry information will be included when the PDF is rendered.
<h3 id="video">Getting Started With Merge Tags</h3>
We've put together a handy video running through the basics of setting up a custom PDF template and display entry data with merge tags.

<ResponsiveEmbed src="https://www.youtube-nocookie.com/embed/JITdgLS6UPs" />