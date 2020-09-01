---
title: "What's the Gravity PDF API for and how can I use it?"
sidebar_label: "What's it for?"
description: ""
---

The Gravity PDF API is a public API that provides a standard set of tools to help developers simplify common tasks when extending the software. It's especially useful because Gravity PDF [makes full use of namespaces](http://php.net/manual/en/language.namespaces.php), and working directly with our namespaced classes can be alien for developers who aren't accustom to them.

In contrast, our API is in the global scope, can be accessed through the `GPDFAPI` class and uses static methods. You can easily call any method using `GPDFAPI::method_name()`. This allows a lower entry barrier for developers looking to extend our software, while still allowing us to take advantage of more modern PHP techniques to streamline our development.

Another benefit of our API [is it's fully unit tested](http://www.sitepoint.com/tutorial-introduction-to-unit-testing-in-php-with-phpunit/). This means when we make updates to Gravity PDF we can better ensure our API returns the expected results, and limits any unexpected breakages.

Our API provides access to our common helper classes, a CRUD for both our global PDF settings and individual PDF settings, the ability to generate PDFs on demand and the output of common complex fields like the product and likert tables.

This section of the documentation goes into detail about the usage of each API method which can be found in the `api.php` file in the root Gravity PDF plugin directory (`/wp-content/plugins/gravity-forms-pdf-extended`). 

Happy coding!
