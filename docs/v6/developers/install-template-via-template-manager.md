---
title: "Install Template via Template Manager"
sidebar_label: "Install Template via Template Manager"
description: "A guide on how to correctly zip up your custom PDF template so it can be installed via the PDF Template Manager. Your zip can contain a single PHP template, or multiple templates."
---

After you've created your custom template, you can zip up the files and [install them via the PDF Template Manager](../users/pdf-template-manager.md#install).

## Zip Archive Structure

To create a `.zip` package, just zip up your PDF template file(s) in the root of the zip archive:

```text
+-- PACKAGE.zip
|   +-- hello-world.php
```

Multiple templates can be installed via a single zip archive:

```text
+-- PACKAGE.zip
|   +-- hello-world.php
|   +-- hello-moon.php
```

If you've created a [configuration](template-configuration-and-image.md) and/or [image](template-preview-image.md) file for your template, include them in their correct directories (`config`/`images`):

```text
+-- PACKAGE.zip
|   +-- hello-world.php
|   +-- /config/
|       +-- hello-world.php
|   +-- /images/
|       +-- hello-world.png
```

## Common Problems

### No valid PDF template found in Zip archive / The PHP file [Name] is not a valid PDF Template.

These errors can occur if:

1. The PHP template is NOT in the root of your zip archive. Open the archive and make sure there's not a directory in the root which then contains your template file(s). If they are, re-create the zip archive.

2. The PHP template [does not contain a valid header structure](first-custom-pdf.md#template-structure). Edit your template and ensure you add all the required headers, then zip up and try again.

### I uploaded my template to the PDF Working Directory using (S)FTP but it isn't showing up/the old header information is still showing when I configure my PDF

Gravity PDF caches the installed custom templates and the [associated header data](first-custom-pdf.md#template-structure). The cache is automatically flushed when (re)installing a templates via the PDF Template Manager. But if you upload the template via (S)FTP or a File Manager, you should [toggle on Debug Mode](../users/global-settings.md#debug-mode) to clear it.