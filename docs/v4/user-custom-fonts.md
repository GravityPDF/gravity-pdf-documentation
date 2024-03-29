---
title: "Using the Font Manager to Install Custom PDF Fonts"
sidebar_label: "Custom Fonts"
description: "Gravity PDF is pre-installed with over 30 different fonts which support a lot of languages worldwide. For those not supported you can use our Font Manager."
---

![Font Manager](https://resources.gravitypdf.com/uploads/2015/10/font-manager.png)

Gravity PDF is pre-installed with over 30 different fonts which support a large percentage of languages worldwide. For languages that aren't supported out of the box additional fonts can be installed to fill the gap. Of course, this feature isn't limited to additional language support. You can use it to enhance the overall look and feel of your PDF.

---

### Font Installer

The font installer is found in the plugin setting's [*Tools* tab](user-global-settings.md#tools) – navigate to `Forms -> Settings -> PDF -> Tools` in your WordPress admin area – and is accessed by selecting the *Manage Fonts* button.

> In Gravity PDF 4.0 we allows `.otf` font files but based on a large amount of testing we found most are incompatible with the PDF engine we used so they are no longer supported.

Accepted fonts are `.ttf` **only* and all fonts *must* be uploaded through your media library.

> If you experience the error "Sorry, this file type is not permitted for security reasons." while trying to upload the font please install and activate the [Disable Real Mime Type plugin](https://wordpress.org/plugins/disable-real-mime-check/) temporarily and try again. [There's a bug introduced in WordPress 4.7.x](https://core.trac.wordpress.org/ticket/39550) which has caused this problem.

**Jump To Section**

* [Adding a Font](#adding-font)
* [Editing a Font](#editing-font)
* [Deleting a Font](#deleting-font)

---

#### Adding a Font

![Add Font Interface](https://resources.gravitypdf.com/uploads/2015/10/add-font.png)

Click the *Add Font* "plus" icon and an empty form will be displayed where you can name and upload your font files. The form fields available include:

Font Name (required)
:    This is the name that gets displayed through all Gravity PDF's interfaces and is used when setting the font in your PDF. It doesn't have to be the same name as your font but it's a good idea to keep them similar.
:    Due to how the PDF software handles fonts only alphanumeric characters and spaces are allowed in the name (A-Z / 0-9).

Regular (required)
:    This field references the main font file for your [typeface](https://en.wikipedia.org/wiki/Typeface). Use the *Select Font* button to open your media library and upload a `.ttf` font file. Once uploaded, select your font and press the blue *Select Font* button in the bottom right hand corner of your screen.
:    While the field accepts a URL to the font, the file **must** be uploaded through your media library for it to be correctly loaded in the PDF software. External font links will not work. This rule also applies to the [*Bold*](#bold), [*Italics*](#italics) and [*Bold Italics*](#bold-italics) fields.

Bold (optional)
:    If your [typeface](https://en.wikipedia.org/wiki/Typeface) includes a bold version of your font you can add it here. Use the *Select Font* button to open your media library and select the font.
:    This field is optional and if not provided the PDF software will mimic bold when referenced. However, you will get a better result if a bold font file is installed.

Italics (optional)
:    If your [typeface](https://en.wikipedia.org/wiki/Typeface) includes an italics version of your font you can add it here. Use the *Select Font* button to open your media library and select the font.
:    This field is optional and if not provided the PDF software will mimic italics when referenced. However, you will get a better result if an italics font file is installed.

Bold Italics (optional)
:    If your [typeface](https://en.wikipedia.org/wiki/Typeface) includes a bold-italics version of your font you can add it here. Use the *Select Font* button to open your media library and select the font.
:    This field is optional and if not provided the PDF software will mimic bold-italics when referenced. However, you will get a better result if a bold-italics font file is installed.

Custom Template Usage [#custom-template-usage](#custom-template-usage)
:    This is a read-only field which displays a simple CSS statement for use in [custom PDF templates](developer-start-customising.md). If you want the entire PDF to use your custom font then change the [Font setting](user-setup-pdf.md#font) when you setup your PDF.

---

#### Editing a Font

![Edit Font Interface](https://resources.gravitypdf.com/uploads/2015/10/edit-font.png)

Once you've installed a custom font or two you'll see a list of those fonts when you open the *Font Manager*. You can edit the font by clicking on its name, updating the details and clicking *Save*. Simple!

---

#### Deleting a Font

![Delete Font Interface](https://resources.gravitypdf.com/uploads/2015/10/delete-font.png)

In the *Font Manager* there is a blue trash can icon to the right of each installed font. When you hover over the icon it will turn red and after being clicked a warning box will pop up asking you to confirm before a font is deleted. *Deleting a font from the Font Manager does not delete the font files you've uploaded in your media library.*