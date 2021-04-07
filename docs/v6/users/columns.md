---
title: "Gravity Forms 2.5 Column Support in Gravity PDF"
sidebar_label: "Column Support"
description: "Gravity PDF supports columns in Core and the majority of Universal templates through the use of Gravity Forms 2.5+ Drag and Drop Columns."
---

[pic]

In the Core PDF templates (and the majority of [Universal templates](https://gravitypdf.com/template-shop/#universal)), column layouts are supported when using [Gravity Forms Drag and Drop column feature in the Form Editor](https://docs.gravityforms.com/working-with-columns/).

In the Form Editor you to easily build advanced form layouts visually. Fields can be placed into columns  and then resize to varying widths. Gravity PDF will automatically mimic your form column behaviour (when a template supports it).

[Gravity Forms doesn't allow the following fields to be used in drag-and-drop columns](https://docs.gravityforms.com/working-with-columns/#known-issues-or-limitations) and Gravity PDF will match this behaviour:

* Page
* Section
* Hidden

[pic]

You can create up to four columns per row in the Form Editor. The default output is for each column is to be of equal width, but you can resize individual columns to suit your needs eg. `25% / 25% / 50%` or `20% / 80%`.

[pic]

You don't need each column to equal 100% of the row width. You could have two columns only taking up 25% each and then begin a new row. **Bonus:** this works for single column rows too! 

:::note
Prior to Gravity Forms 2.5 columns were handled using CSS Ready Classes. They are still [supported in PDFs](css-ready-classes.md), but **only when the [form is in Legacy Mode](https://docs.gravityforms.com/guide-to-gravity-forms-2-5-for-theme-developers/#legacy-mode)**.
:::

:::caution
If you upgraded from Gravity PDF v5 or earlier, had previously run the [Setup Custom Template tool](../../v5/user-global-settings.md#setup-custom-templates), and didn't complete the [v5 to v6 migration steps](@TODO), the Core templates may be outdated and won't support drag-and-drop columns. You can check if this affects you by viewing the [Gravity Forms System Status page](@TODO).
:::
