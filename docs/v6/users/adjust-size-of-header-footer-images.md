---
title: "Adjust Size of Header / Footer Images"
sidebar_label: "Adjust Size of Header / Footer Images"
description: ""
---

## How do I adjust the size of images in the Header / Footer of Core and Universal templates?

Gravity PDF automatically restricts the height of images in headers/footers to prevent them taking up a large portion of a page. You can override this behaviour by including the style attribute in your `img` HTML markup.  

1. Go to [`PDF Settings`](setup-pdf.md), choose the PDF template you want to edit, and click the `Template Tab` 
![](https://resources.gravitypdf.com/uploads/2021/03/v6-Gravity-PDF-Template-Tab.png)

2. Scroll down to the header settings, and click the rich **`Text Editor`**
![](https://resources.gravitypdf.com/uploads/2021/03/v6-Header-Text-Editor.png)
  
3. Add **`style="max-height: 400px"`** to the code
![](https://resources.gravitypdf.com/uploads/2021/03/v6-Header-Style.png)

It should look like this in your editor:

```
<img class="alignnone size-full wp-image-12 aligncenter" src="http://testsite.local/wp-content/uploads/2019/10/Group82InternshipProgramHeaderBanner.png" alt="" width="1030" height="250" style="max-height: 400px" />
```

**You can adjust 400px to the size you need.**

*Before:*
![](https://resources.gravitypdf.com/uploads/2021/03/Header-before-style.png)

*After:*
![](https://resources.gravitypdf.com/uploads/2021/03/Header-after-style.png)
