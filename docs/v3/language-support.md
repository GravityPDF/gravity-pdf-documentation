---
title: "Fonts/Language Support"
sidebar_label: "Fonts/Language Support"
description: ""
---

<h2>Available Fonts</h2>
Along with the standard fonts available to all PDF documents, mPDF ships with a four unicode font faces which covers most worldwide languages. The exception to this is CJK (Chinese, Japanese and Korean) font support, however <a href="#cjk-support">CJK language-supporting-fonts can be manually installed</a>.
<div class="message">The default and fall-back font is DejaVu Sans Condensed</div>
<table>
<tbody>
<tr>
<th>Available Fonts</th>
<th>CSS Declaration</th>
</tr>
<tr>
<td>Arial / Helvetica (default PDF font)</td>
<td><code>font-family: Arial, Helvetica, sans-serif;</code></td>
</tr>
<tr>
<td>Times New Roman</td>
<td><code>font-family: "Times New Roman", Times, serif;</code></td>
</tr>
<tr>
<td>Courier</td>
<td><code>font-family: Courier, monospace;</code></td>
</tr>
<tr>
<td>DejaVu Sans
DejaVu Sans Condensed
DejaVu Serif
DejaVu Serif Condensed
DejaVu Sans Mono</td>
<td><code>font-family: "DejaVu Sans", sans-serif;</code>
<code>font-family: "DejaVu Sans Condensed", sans-serif;</code>
<code>font-family: "DejaVu Serif", serif;</code>
<code>font-family: "DejaVu Serif Condensed", serif;</code>
<code>font-family: "DejaVu Sans Mono", monospace;</code></td>
</tr>
<tr>
<td>Garuda</td>
<td><code>font-family: Garuda, sans-serif;</code></td>
</tr>
<tr>
<td>Norasi</td>
<td><code>font-family: Norasi, serif;</code></td>
</tr>
<tr>
<td>XB Zar</td>
<td><code>font-family: "XB Zar", serif;</code></td>
</tr>
<tr>
<td>XB Riyaz</td>
<td><code>font-family: "XB Riyaz", sans-serif;</code></td>
</tr>
<tr>
<td>Indic (Bengali)</td>
<td><code>font-family: ind_bn_1_001;</code></td>
</tr>
<tr>
<td>Indic (Devanagari)</td>
<td><code>font-family: ind_hi_1_001;</code></td>
</tr>
<tr>
<td>Indic (Malayalam)</td>
<td><code>font-family: ind_ml_1_001;</code></td>
</tr>
<tr>
<td>Indic (Kannada)</td>
<td><code>font-family: ind_kn_1_001;</code></td>
</tr>
<tr>
<td>Indic (Oriya)</td>
<td><code>font-family: ind_or_1_001;</code></td>
</tr>
<tr>
<td>Indic (Punjabi / Gurmuhki)</td>
<td><code>font-family: ind_pa_1_001;</code></td>
</tr>
<tr>
<td>Indic (Tamil)</td>
<td><code>font-family: ind_ta_1_001;</code></td>
</tr>
<tr>
<td>Indic (Telugu)</td>
<td><code>font-family: ind_te_1_001;</code></td>
</tr>
<tr>
<td colspan="2">Additionally, any character from the <a href="https://en.wikipedia.org/wiki/Symbol_%28typeface%29">Symbols</a> or <a href="https://en.wikipedia.org/wiki/Zapf_Dingbats">Zapf Dingbats</a> fonts can be used in your PDF without any <code>font-family</code> declaration.</td>
</tr>
</tbody>
</table>
<h3 id="install-custom-fonts">Installing Custom Fonts</h3>
Users can install their own font files and use them in their PDFs, however there are a couple of restrictions, including:
<ol>
	<li>Only support for Truetype fonts (.ttf font files)</li>
	<li>Fonts must follow the Truetype specification and use Unicode mapping to the characters.</li>
</ol>
<h4 id="installation">Installation</h4>
<div class="note"><strong>Note:</strong> Font file names should contain <strong>only</strong> alphanumeric English characters (A-Z and 0-9), spaces or hyphens. Rename font files before uploading if not a valid name.</div>
To install a custom font you should upload the .TTF font file to the <code>/fonts/</code> directory <a href="/v3/wheres-configuration-folder/">in your site's PDF_EXTENDED_TEMPLATES folder</a>. To complete the installation you need to navigate to the Gravity PDF settings page in your admin area - Forms -&gt; Settings -&gt; PDF - and select the <code>Initialise Fonts</code>button.

<img class="size-full wp-image-4916" src="https://resources.gravitypdf.com/uploads/sites/2/2013/05/installing-fonts.png" alt="Once the TTF font file has been uploaded to the server you'll need to install it." width="420" height="156" /> Once the TTF font file has been uploaded to the server you'll need to install it.
<h4>Usage</h4>
After installation you can use the new font in your PDF templates by setting the <code>font-family</code> CSS property. Your font-family name will be the name of your TTF file without the .tff extension.

```css 
/* 
 * Apply custom font to your PDF 
 * Note: It's important to include a font-family type at the end of your font chain (in this example it is sans-serif) in case your font is missing characters. 
 * By default, the plugin will substitute missing characters from a fallback font.
 **/

/* File Name: Menfis.ttf */
body {
 font-family: Mefis, sans-serif;
}

/* File Name: Dite Alla Giovine.ttf */
body {
 font-family: "Dite Alla Giovine", sans-serif;
}

/* File Name: Lato-Black */
body {
 font-family: Lato-Black, sans-serif;
}
```

<h3 id="cjk-support">CJK Font Support</h3>
Gravity PDF doesn't support Chinese, Japanese or Korean languages out of the box due to licensing restrictions (or rather lack of a license).

If you need CJK support you will need to manually download Sun-ExtA, Sun-ExtB and UnBatang. <a href="#install-custom-fonts">After the fonts are installed</a> you can use them like any other custom font:
<ul>
	<li><code>font-family: UnBatang, sans-serif;</code></li>
	<li><code>font-family: Sun-ExtA, sans-serif;</code></li>
	<li><code>font-family: Sun-ExtB, sans-serif;</code></li>
</ul>
<h4>DOWNLOAD</h4>
<ul>
	<li><a href="https://www.alanwood.net/downloads/sun-exta.zip">Sun-ExtA</a></li>
	<li><a href="https://www.alanwood.net/downloads/sun-extb.zip">Sun-ExtB</a></li>
	<li><a href="https://www.fontsaddict.com/font/un-batang.html">UnBatang</a></li>
</ul>