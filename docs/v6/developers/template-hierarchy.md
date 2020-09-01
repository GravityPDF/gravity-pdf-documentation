---
title: "PDF Template Hierarchy and Loading Order"
sidebar_label: "Template Hierarchy"
description: "Gravity PDF has a template hierarchy much like WordPress theme and child themes. You can override PDF templates, configuration and images."
---

## Introduction 

We [touched on the template hierarchy](first-custom-pdf.md#template-hierarchy) when you created your first custom PDF template, but it's a little more involved – especially for Multisite installations. It's also not just limited to PDF templates; you can override the core configuration and image preview files as well.

## Standard WordPress Installation 

![WordPress Standard Template Hierarchy](https://resources.gravitypdf.com/uploads/2015/11/WordPress-Standard-Hierarchy.png)

On a standard WordPress installation the template hierarchy is straightforward. Files in the [PDF Working Directory](first-custom-pdf.md#working-directory) override templates that ship with the plugin – provided they have the same name. [When you prepare your website for custom PDF templates](first-custom-pdf.md#preparing-the-infrastructure) all the plugin's template files are copied over to your PDF working directory so you can override the settings if you wish. It's straightforward and easy.

## Multisite WordPress Installation 

![WordPress Multisite Template Hierarchy](https://resources.gravitypdf.com/uploads/2015/11/WordPress-Multisite-Hierarchy.png)

To allow more flexibility with PDF templates, Multisite installations add another layer to the template hierarchy. Each site in a Multisite installation [gets its own PDF Working Directory](first-custom-pdf.md#multisite-structure), so different sites can have their own templates that won't be included for other subsites. If installing a template via the [PDF Template Manager](../users/pdf-template-manager.md), it'll be saved in the subsite directory and not directly in the [Working Directory](first-custom-pdf.md#working-directory).

Individual site templates override any global templates in the `PDF_EXTENDED_TEMPLATES` directory (which apply to all Multisite installations), which in turn override the Core Gravity PDF templates (like in a [standard WordPress installation](#standard-wordpress-install)).
