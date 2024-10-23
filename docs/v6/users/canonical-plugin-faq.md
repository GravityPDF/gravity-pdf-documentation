---
title: "Everything you want to know about the Canonical Gravity PDF Plugin"
sidebar_label: "Canonical Release"
description: "Feature-wise, it’s the same free and open-source Gravity PDF plugin you know and love, but distributed directly from GravityPDF.com. "
---

## What is the canonical Gravity PDF plugin?

Feature-wise, it’s the same free and open-source Gravity PDF plugin you know and love, but distributed directly from GravityPDF.com. The canonical release includes its own update mechanism to ensure you can receive new features, security updates, and bug fixes directly from us.

## What about the plugin on WordPress.org?

We are calling this the non-canonical release and will continue to [publish updates to the repository](https://wordpress.org/plugins/gravity-forms-pdf-extended/) while we can. But continued access to publish on WordPress.org is not assured, so it is recommended to switch to the canonical release.

## How do you switch to the canonical release?

It’s easy to do and will only take a few minutes. [Please see this article for instructions on making the switch.](https://gravitypdf.com/news/installing-and-upgrading-to-the-canonical-version-of-gravity-pdf/)

## Will switching to the canonical version affect my existing PDFs?

No. All your existing PDFs, settings, custom templates, and fonts are preserved when you swap. The only issue you may run into is if you’ve created custom translation files for the plugin (see below).

## I have custom translations for Gravity PDF. How do I switch to the canonical release?

The canonical plugin uses `gravity-pdf` for the slug / domain, departing from `gravity-forms-pdf-extended` used on WordPress.org. If you’ve created custom .po or .mo translation files, you’ll just need to rename the files to match the new slug e.g. `gravity-forms-pdf-extended-de_DE.mo` → `gravity-pdf-de_DE.mo`. 

:::note
Custom translations can usually be found in ` /wp-content/languages/plugins/` or ` /wp-content/languages/loco/plugins/` on your server.
:::

## How do I get updates for the canonical release after installing?

The canonical version integrates seamlessly into WordPress’ update mechanism, so you can update the plugin just like all your others – no license key required.

## What happens if I don’t want to switch?

For now, you will continue getting plugin updates while we can publish to WordPress.org. But if we lose access, or the plugin is closed, you may be left with an outdated version of the software and [unaware there are new canonical releases available](https://patchstack.com/articles/security-implications-of-wordpress-repository-access-restrictions-and-plugin-closures/).

## Where can I get support for the canonical release?

You can search our comprehensive documentation for information about the plugin and [get in touch with our friendly support team for help](https://gravitypdf.com/support/).
