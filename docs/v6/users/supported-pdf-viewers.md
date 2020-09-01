---
title: "Gravity PDF's Officially Supported PDF Viewers"
sidebar_label: "Supported PDF Viewers"
description: "Gravity PDF officially supports the free Adobe Reader software. After all, Adobe is the company who developed the PDF specification."
---

Gravity PDF officially supports [Adobe Acrobat Reader](https://get.adobe.com/reader/) and Adobe Acrobat Pro – Adobe is the company who developed the [PDF specification](http://www.adobe.com/devnet/pdf/pdf_reference.html). This means if a PDF generated with Gravity PDF has display issues in your PDF reader, but shows correctly in Adobe Reader, we won't consider it a bug. 

![FireFox PDF Rendering Issues](https://resources.gravitypdf.com/uploads/2015/10/Firefox-PDF-viewer-warning.png) 

These days browsers are shipping with a their own PDF viewing software so you don't have to install a third-party plugin. Firefox uses PDF.js, Chrome and Opera includes their own PDF plugin, Safari uses Preview and Microsoft's new browser, Edge, even ships with a document reader. This is great in theory, but in practice it causes problems. Why? Because building software that correctly renders PDFs is hard (just take a look at the [latest PDF specification](http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/adobe_supplement_iso32000.pdf) and tell us it doesn't give you a headache). And if that's not a compelling enough reason, check [Firefox's PDF.js current open issues](https://github.com/mozilla/pdf.js/issues). 

If you notice your generated PDF displays incorrectly in your browser's viewer, the best option is to save any PDF documents to your computer and open them with Adobe Reader.