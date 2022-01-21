---
title: "Gravity Forms 2.5 Column Support in Gravity PDF"
sidebar_label: "Column Support"
description: "Gravity PDF supports columns in Core and the majority of Universal templates through the use of Gravity Forms 2.5+ Drag and Drop Columns."
---

import ResponsiveEmbed from 'react-responsive-embed'

![PDF Zadani with two, three, and four column support](https://resources.gravitypdf.com/uploads/2021/04/v6-Zadani-PDF-with-Column-Support.png)

In the Core PDF templates (and the majority of [Universal templates](https://gravitypdf.com/store/#universal)), column layouts are supported when using [Gravity Forms Drag and Drop column feature in the Form Editor](https://docs.gravityforms.com/working-with-columns/).

In the Form Editor you to easily build advanced form layouts visually. Fields can be placed into columns  and then resize to varying widths. Gravity PDF will automatically mimic your form column behaviour (when a template supports it).

<ResponsiveEmbed src="https://player.vimeo.com/video/665408186" allowFullScreen />

[Gravity Forms doesn't allow the following fields to be used in drag-and-drop columns](https://docs.gravityforms.com/working-with-columns/#known-issues-or-limitations) and Gravity PDF will match this behaviour:

* Page
* Section
* Hidden

:::caution
If you upgraded from Gravity PDF v5 or earlier, had previously run the [Setup Custom Template tool](../../v5/user-global-settings.md#setup-custom-templates), and didn't complete the [v5 to v6 migration steps](v5-to-v6-migration.md#drag-and-drop-columns), the Core templates may be outdated and won't support Drag and Drop Columns. You can check if this affects you by viewing the [Gravity Forms System Status page](system-status.md).
:::

![Gravity Forms Form Editor with Column Support](https://resources.gravitypdf.com/uploads/2021/04/v6-Gravity-Forms-Column-Support-1.png)

You can create up to four columns per row in the Form Editor. The default output is for each column is to be of equal width, but you can resize individual columns to suit your needs eg. `20% / 80%` or `25% / 25% / 50%`.

![Rubix PDF with 100% column, 20%/80% columns, 25%/25%/50% columns, 50% column, and 25%/25% columns support](https://resources.gravitypdf.com/uploads/2021/04/v6-PDF-Rubix-with-Column-Support.png)

You don't need each column to equal 100% of the row width. You could have a single column take up 50% and then start a new row, or display two columns at 25% each.

:::note
Prior to Gravity Forms 2.5 columns were handled using CSS Ready Classes. They are still [supported in PDFs](css-ready-classes.md), but **only when the [form is in Legacy Mode](https://docs.gravityforms.com/guide-to-gravity-forms-2-5-for-theme-developers/#legacy-mode)**.
:::

## Gravity Wiz / Gravity Perks Nested Forms Support

Gravity PDF supports columns when rendering [Nested Forms fields](https://gravitywiz.com/documentation/gravity-forms-nested-forms/?ref=78) in Core/Universal templates. Provided you've taken advantage of Drag and Drop Columns when building the Nested Form, this feature is enabled automatically in your PDF. 