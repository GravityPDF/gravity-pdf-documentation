---
title: "Postscript outlines are not supported"
sidebar_label: "Postscript Outlines are Not Supported"
description: "If you see the error \"Postscript outlines are not supported\" this means the `.otf` font file you installed via the Font Installer is incompatible."
---

When viewing your PDF, if you see the error "Postscript outlines are not supported" this means the `.otf` font file you installed [via the Font Installer](user-custom-fonts.md#font-installer) is incompatible with Gravity PDF.

*"Hang on. It says on your website .otf font files are supported. What gives?"*

Some `.otf` font files are supported. However, `.otf` files come in two flavours:

1. The supported Truetype Outlines
1. The unsupported Postscript Outlines

Not to fear. You can still use that font in your PDF document, but you'll need to convert it to a `.ttf` file first. [Use this simple converter](https://everythingfonts.com/otf-to-ttf) and then replace the `.otf` font with your new `.ttf` font in the Font Installer.