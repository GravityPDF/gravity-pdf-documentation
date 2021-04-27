---
title: "Using the Font Manager to Install Fonts for Gravity PDF"
sidebar_label: "Custom Fonts"
description: "Gravity PDF is pre-installed with over 30 different fonts which support the majority of languages worldwide. For those not supported you can use the Font Manager."
---

![Font Manager](https://resources.gravitypdf.com/uploads/2021/03/v6-Font-Manager.png) 

Use the Font Manager to add, update, search, select, and delete custom fonts that can be used in your Gravity PDF documents. While Gravity PDF [ships with a variety of fonts that support most languages](core-pdf-fonts.md), installing and using custom fonts allow you to match your branding, and enhance the overall look and feel of your PDFs.

:::info
Looking for open-source fonts to use with Gravity PDF? [Google Fonts has a large directory of free fonts available for commercial use](https://fonts.google.com).
:::

:::note
The Font Manager will only display custom fonts you've installed, and doesn't list or display the [Core PDF fonts](core-pdf-fonts.md). 
:::

If you enjoy learning through video, you can watch this 9-minute video with Gravity PDF's lead developer showing you the ropes:

https://www.youtube.com/watch?v=f7Z44PzJzDk

## Open the Font Manager

![Manage Font via Global PDF Settings page](https://resources.gravitypdf.com/uploads/2021/04/v6-Open-Font-Manager.png)

You can access the Font Manager from the Global PDF Settings page via the [Default Font setting](global-settings.md#default-font-type), or [on the Tools tab](global-settings.md#fonts). You'll also find it when [configuring a PDF on a form](setup-pdf.md#font); just look for the *Manage* button that will appear next to the font dropdown box.

The manager is split into two panes. On the left is the list of installed custom fonts, and on the right is where you add a new font, or update an existing font.

## Font List

![Font List](https://resources.gravitypdf.com/uploads/2021/04/v6-Font-List.png)

The left pane shows all the installed custom fonts, and whether a file has been associated with each of the four font variants, denoted by a ✅ or ❌. 

### Searching

![Search Font](https://resources.gravitypdf.com/uploads/2021/04/v6-Search-Font.png)

At the top of the left pane is a search bar that will show you live results in the list below. The search will match both the name you've given to the font, and any of the uploaded font file names. 

### Selecting

![Select Font](https://resources.gravitypdf.com/uploads/2021/04/v6-Select-a-Font.png)

If the Font Manager is accessed via the [Default Font](global-settings.md#default-font-type) or [Font setting](setup-pdf.md#font) setting, you'll have the option to select a font using the radio button found to the left of each name in the list. This will automatically update the associated font dropdown setting (don't forget to save afterwards).

### Editing

![Edit Font](https://resources.gravitypdf.com/uploads/2021/04/v6-Edit-Font.png)

Clicking on the font name in the list will open a new pane on the right where you can modify any of the font settings. Refer to the [Add/Update Font documentation](#add--update-font) for details about the available settings and actions. 

### Deleting

![Delete Font](https://resources.gravitypdf.com/uploads/2021/04/v6-PDF-Delete-a-Font.png)

On the right side of the list is a trash icon for each font. This action allows you to delete the font and its associated files. An alert prompt will be displayed, asking you to confirm, before the deletion occurs.

:::caution
If you delete a font that has been assigned to a PDF, any newly-generated documents will use the fallback font _DejaVu Sans Condensed_ instead.
:::

## Add Font

![Add Font Interface](https://resources.gravitypdf.com/uploads/2021/04/v6-Adding-a-Font.png)

The right pane is where you add or update the font settings. By default the add pane is shown, allowing you to quickly install new fonts. 

:::note 
The update pane will be displayed if you [click on an installed fonts in the Font List](#editing). Clicking on the `← Cancel` button will close the update pane and reopen the add pane.
:::

When adding a new font (or updating an existing one), the following options are available: 

#### Font Name (required) 
* This is the name that gets displayed through all Gravity PDF's interfaces. It doesn't have to be the same name as your font, but it's a good idea to keep them similar.
* Only alphanumeric characters and spaces are allowed in the font name (A-Z / 0-9).
* The font name doesn't have to be unique and multiple fonts can share the same name (although it isn't recommended).

#### Regular (required) 
* This field references the main font file for your [typeface](https://en.wikipedia.org/wiki/Typeface). Drag and drop your font to this box, or click the box and select your font from the dialog box that appears.

#### Bold (optional) 
* If your [typeface](https://en.wikipedia.org/wiki/Typeface) includes a bold version of your font, you can add it here. Drag and drop your font to this box, or click the box and select your font from the dialog box that appears.
* This field is optional and if not provided the PDF software will mimic bold when referenced. However, you will get a better result if a bold font file is installed.

#### Italics (optional) 
* If your [typeface](https://en.wikipedia.org/wiki/Typeface) includes an italics version of your font, you can add it here. Drag and drop your font to this box, or click the box and select your font from the dialog box that appears.
* This field is optional and if not provided the PDF software will mimic italics when referenced. However, you will get a better result if an italics font file is installed.

#### Bold Italics (optional) 
* If your [typeface](https://en.wikipedia.org/wiki/Typeface) includes a bold-italics version of your font, you can add it here. Drag and drop your font to this box, or click the box and select your font from the dialog box that appears.
* This field is optional and if not provided the PDF software will mimic bold-italics when referenced. However, you will get a better result if a bold-italics font file is installed.

:::tip
Bold, Italics, and Bold Italics are usually different variants of the same font, but they don't have to be. You can use a mix of unrelated fonts to get the results you're after.  
:::

#### Custom Template Usage

![Use font in custom PDF templates](https://resources.gravitypdf.com/uploads/2021/04/v6-Custom-Template-Usage.png)

* This is a read-only field which displays a simple CSS example for use in [custom PDF templates](../developers/start-customising.md). Use this if you would like to utilise multiple fonts in a single PDF. If you only need the entire PDF to use your custom font then change the [Font setting](setup-pdf.md#font) when you setup your PDF.

## Edit Font 

![Edit Font Interface](https://resources.gravitypdf.com/uploads/2021/04/v6-Edit-a-Font.png) 

Once you've installed a custom font or two, you'll see a list of fonts in the left pane when you open the *Font Manager*. You can edit the font [by selecting the font name in the list](#editing), updating the details in the right pane and clicking the `Update Font →` button when done. Simple!

### Selecting

![Select Font Interface](https://resources.gravitypdf.com/uploads/2021/04/v6-Edit-Font-Select.png)

If the Font Manager is accessed via the [Default Font](global-settings.md#default-font-type) or [Font setting](setup-pdf.md#font), you'll have the option to select a font using the ✅ button found to the right of the `Update Font →` button in the update pane. This will automatically select this font in the associated font dropdown setting (don't forget to save afterwards).

The font is deselected when the ✅ button is grey and selected when it is green.

### Deleting

![Delete Font Interface](https://resources.gravitypdf.com/uploads/2021/04/v6-Edit-Font-Delete.png) 

You can delete the currently-edited font by selecting the red trash can icon to the right of the ✅ button in the update pane. When you hover over the icon, it will turn red and after being clicked a warning box will pop up asking you to confirm before a font is deleted.

:::caution
If you delete a font that has been assigned to a PDF, any newly-generated documents will use the fallback font _DejaVu Sans Condensed_ instead.
:::
