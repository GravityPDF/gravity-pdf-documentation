---
title: "Using the Font Manager to Install Custom PDF Fonts"
sidebar_label: "Custom Fonts"
description: "Gravity PDF is pre-installed with over 30 different fonts which support a lot of languages worldwide. For those not supported you can use the Font Manager."
---

![Font Manager](https://resources.gravitypdf.com/uploads/2021/03/v6-Font-Manager.png) 

Use the Font Manager to add, update, search, select, and delete custom fonts that can be used in your Gravity PDF documents. While Gravity PDF [ships with a variety of fonts that support most languages](core-pdf-fonts.md), installing and using custom fonts allow you to match your branding, and enhance the overall look and feel of your PDFs. 

:::info
Looking for open-source fonts to use with Gravity PDF? [Google Fonts has a large directory of free fonts available for commercial use](https://fonts.google.com).
:::

## Open the Font Manager

You can access the Font Manager from the Global PDF Settings page via the [Default Font setting](global-settings.md#default-font-type), or [on the Tools tab](global-settings.md#fonts). You'll also find it when [configuring a PDF on a form](setup-pdf.md#font); just look for the *Manage* button that will appear next to the font dropdown box.

The manager is split into two panes. On the left is the list of installed custom fonts, and on the right is where you add a new font, or update an existing font.

## Font List

The left pane shows all the installed custom fonts, and whether a file has been associated with each of the four font variants, denoted by a ✅ or ❌. 

### Searching

At the top of the left pane is a search bar that will show you live results in the list below. The search will match both the name you've given to the font, and any of the uploaded font file names. 

### Selecting

If the Font Manager is accessed via the _Default Font_ or _Font_ setting, you'll have the option to select a font using the radio button found to the left of each name in the list. This will automatically update the associated font dropdown setting (don't forget to save afterwards).

### Editing

Clicking on the font name in the list will open a new pane on the right where you can modify any of the font settings. Refer to the [Add/Update Font documentation](#add--update-font) for details about the available settings and actions. 

### Deleting

On the right side of the list is a trash icon for each font. This action allows you to delete the font and its associated files. An alert prompt will be displayed, asking you to confirm, before the deletion occurs.

:::caution
@TODO What happens to existing PDFs that use this font???
:::

## Add Font

![Add Font Interface](https://resources.gravitypdf.com/uploads/2021/03/v6-Add-Font.png)

The right pane is where you add or update the font settings. By default the add pane is shown, allowing you to quickly install new fonts. 

:::note 
The update pane will be displayed if you [click on an installed fonts in the Font List](#editing). Clicking on the `← Cancel` button will reopen the add pane.
:::

When adding a new font (or updating an existing one), the following options are available: 

#### Font Name (required) 
* This is the name that gets displayed through all Gravity PDF's interfaces . It doesn't have to be the same name as your font, but it's a good idea to keep them similar.
* Only alphanumeric characters and spaces are allowed in the font name (A-Z / 0-9).

#### Regular (required) 
* This field references the main font file for your [typeface](https://en.wikipedia.org/wiki/Typeface). Use the *Select Font* button to open your media library and upload a `.ttf` font file. Once uploaded, select your font and press the blue *Select Font* button in the bottom right hand corner of your screen.
* While the field accepts a URL to the font, the file **must** be uploaded through your media library for it to be correctly loaded in the PDF software. External font links will not work. This rule also applies to the [*Bold*](#bold-optional), [*Italics*](#italics-optional) and [*Bold Italics*](#bold-italics-optional) fields.

#### Bold (optional) 
* If your [typeface](https://en.wikipedia.org/wiki/Typeface) includes a bold version of your font, you can add it here. Use the *Select Font* button to open your media library and select the font.
* This field is optional and if not provided the PDF software will mimic bold when referenced. However, you will get a better result if a bold font file is installed.

#### Italics (optional) 
* If your [typeface](https://en.wikipedia.org/wiki/Typeface) includes an italics version of your font, you can add it here. Use the *Select Font* button to open your media library and select the font.
* This field is optional and if not provided the PDF software will mimic italics when referenced. However, you will get a better result if an italics font file is installed.

#### Bold Italics (optional) 
* If your [typeface](https://en.wikipedia.org/wiki/Typeface) includes a bold-italics version of your font, you can add it here. Use the *Select Font* button to open your media library and select the font.
* This field is optional and if not provided the PDF software will mimic bold-italics when referenced. However, you will get a better result if a bold-italics font file is installed.

#### Custom Template Usage
* This is a read-only field which displays a simple CSS statement for use in [custom PDF templates](../developers/start-customising.md). If you want the entire PDF to use your custom font then change the [Font setting](setup-pdf.md#font) when you setup your PDF.

### Edit Font 

![Edit Font Interface](https://resources.gravitypdf.com/uploads/2021/03/v6-Edit-Font.png) 

Once you've installed a custom font or two, you'll see a list of those fonts when you open the *Font Manager*. You can edit the font by clicking on its name, updating the details and clicking *Save*. Simple!

### Delete Font 

![Delete Font Interface](https://resources.gravitypdf.com/uploads/2021/03/v6-Delete-Font.png) 

In the *Font Manager*, there is a blue trash can icon to the right of each installed font. When you hover over the icon, it will turn red and after being clicked a warning box will pop up asking you to confirm before a font is deleted. *Deleting a font from the Font Manager does not delete the font files you've uploaded in your media library.*
