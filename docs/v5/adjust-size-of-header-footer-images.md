---
title: "Adjust Size of Header / Footer Images"
sidebar_label: "Adjust Size of Header / Footer Images"
description: ""
---

## How do I adjust the size of images in the Header / Footer of Core and Universal templates?

Gravity PDF automatically restricts the height of images in headers/footers to prevent them taking up a large portion of a page. You can override this behaviour by including the style attribute in your `img` HTML markup.  

1. Go to [`PDF Settings`](user-setup-pdf.md), choose the PDF template you want to edit, and click the `Template Tab` 
![Go to PDF Settings](https://resources.gravitypdf.com/uploads/2019/10/Go-to-PDF-Settings.gif)

2. Scroll down to the header settings, and click the rich **`Text Editor`**
![Click Rich Text Editor](https://resources.gravitypdf.com/uploads/2019/10/PDF-‹-Forms-‹-testsite-—-WordPress-—-WordPress-2019-10-24-09-14-43.png)
  
3. Add **`style="max-height: 400px"`** to the code
![Add style code](https://resources.gravitypdf.com/uploads/2019/10/Add-style.gif)

It should look like this in your editor:

```
<img class="alignnone size-full wp-image-12 aligncenter" src="http://testsite.local/wp-content/uploads/2019/10/Group82InternshipProgramHeaderBanner.png" alt="" width="1030" height="250" style="max-height: 400px" />
```

**You can adjust 400px to the size you need.**

*Before:*
![Before header](https://resources.gravitypdf.com/uploads/2019/10/BEFORE-1024x467.png)

*After:*
![After header](https://resources.gravitypdf.com/uploads/2019/10/AFTER-1024x504.png)
