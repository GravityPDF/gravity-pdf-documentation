---
title: "Memory Problems"
sidebar_label: "Memory Problems"
description: ""
---

Gravity PDF is very memory intensive and it isn't uncommon to have memory issues on shared hosting services. The best way to solve memory issues is to increase memory to <a href="/v3/installation-requirements/">the recommended 128MB</a> but this isn't always possible.
<h3>Things you can do...</h3>
<div class="note"><strong>Note: </strong>All the following constants are located at the bottom of the <code><a href="/v3/configuration-options-examples/#constants">configuration.php</a></code> file which is located in the <code>PDF_EXTENDED_TEMPLATES</code> folder.</div>
<ol>
	<li>If your template uses large tables, you can set <code>PDF_ENABLE_SIMPLE_TABLES</code> to <code>true</code>.</li>
	<li>Another option is to set <code>PDF_DISABLE_FONT_SUBSTITUTION</code> to <code>true</code> which will embed the full font file directly into the PDF. This has the <strong>negative</strong> impact of increasing the PDF's total size, but will keep memory down. PDFs displaying only English characters can negate this effect by setting the font to one of the defaults - <code>Arial</code>, <code>Times</code>, or <code>Courier</code>.</li>
	<li>Setting <code>PDF_ENABLE_MPDF_LITE</code> to <code>true</code> will strip out some of the more advanced features from the package such as complex table borders, terms and conditions, columns, index, bookmarks and barcodes.</li>
	<li>As a last resort you can try set <code>PDF_ENABLE_MPDF_TINY</code> to <code>true</code> which will only load the bare minimum features. Along with the features disabled by enabling <code>PDF_ENABLE_MPDF_LITE</code>, there's no positioning, float, watermark or form support.</li>
</ol>
You should also keep in mind the following when creating your template files.
<ol>
	<li>If using images the best format is JPG, followed by PNG files that aren't interlaced and have no alpha channel. Keep away from GIF files and interlaced or alpha channel PNGs as they require a lot more memory to process.</li>
	<li>Limit the number of fonts used - try stick to one. If you can, you should use the base PDF fonts - Arial, Times, or Courier - which don't need to be embedded into the PDF.
<strong>Note:</strong> the base fonts have limited support for non-Western European languages.</li>
	<li>Instead of using HTML attributes to format the PDF you should use CSS styles.</li>
	<li>Don’t use the CSS property “overflow” as it will slow down the PDF generation time</li>
</ol>