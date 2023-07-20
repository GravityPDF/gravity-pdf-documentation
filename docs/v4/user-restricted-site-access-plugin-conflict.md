---
title: "Restricted Site Access Plugin Conflict"
sidebar_label: "Restricted Site Access Plugin Conflict"
description: "When the Restricted Site Access plugin and Gravity PDF are enabled at the same time users will not be able to view their PDFs."
---

When the [Restricted Site Access](https://wordpress.org/plugins/restricted-site-access/) plugin and Gravity PDF are enabled at the same time users will not be able to view their PDFs. This is due to the way that plugin is coded and we are unable to patch the issue on our end. [We reported the compatibility problem to the author of the Restricted Site Access plugin](https://wordpress.org/support/topic/bug-dont-run-remove_action-in-restrict_access?replies=1) but it hasn't been updated in over two years so a fix isn't very likely.

Instead, we recommend replacing the software with more actively-developed plugins with similar features. Users who reported this issue to us have changed to one of these:

* [Force Login](https://wordpress.org/plugins/wp-force-login/)
* [Simple Members Only](https://wordpress.org/plugins/simple-members-only/)

If one of the above isn't suitable for you a full-blown membership plugin could be viable, or a simple maintenance plugin.