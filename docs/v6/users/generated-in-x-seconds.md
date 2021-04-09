---
title: "Why does it say \"Generated in X seconds\" in my PDF?"
sidebar_label: "Generated in X seconds"
description: "Debug Mode in Gravity PDF will trigger PDF generation statistics to be shown at the end of the PDF documents."
---

When [Debug Mode is enabled in the global PDF settings](global-settings.md#debug-mode), Gravity PDF will show debug information at the bottom of the PDFs it generates (PDF stats). This may look like:

    Generated in 1.13 seconds
    Peak Memory usage 64.00 MB
    Number of fonts 3

This is useful information [when building a custom PDF template](../developers/start-customising.md), but not something you'll want enabled during production. You can disable this by toggling off Debug Mode.