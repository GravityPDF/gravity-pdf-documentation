---
title: "How do I adjust the size of images in the Header / Footer of Core and Universal templates?"
sidebar_label: "Adjust Size of Header / Footer Images"
description: ""
---

Gravity PDF automatically restricts the height of images in headers/footers to prevent them taking up a large portion of a page. This is a good thing, as headers/footers with too large a height can cause display problems.

If you trying to add content to the header/footer that really should be in the document body, [there is a better way to handle this](add-custom-content.md).

If you **would like the image to extend the full width of the header/footer** we recommend creating a long and thin image. The exact dimensions will be Paper Size specific, but for the common sizes use:

* A4 (Portrait): 1076 x 140px
* A4 (Landscape): 1570 x 140px
* Letter (Portrait): 1110 x 140px
* Letter (Landscape): 1470 x 140px

If you really want to make the image taller in the header/footer, you can override the default behaviour by including a style attribute in your `img` HTML markup. Follow these steps to make the adjustment:

1. Go to [PDF List Page](managing-pdfs.md) and edit the PDF you want to adjust. Scroll down until you locate the _Template_ section.

![PDF Settings - Template Tab](https://resources.gravitypdf.com/uploads/2021/04/v6-GPDF-Template-Tab.png)

2. Scroll down to the Header/Footer Rich Text Editor you are interested in and select the _Text_ tab to show the raw HTML markup.

![Switch to Header Rich Text Editor](https://resources.gravitypdf.com/uploads/2022/03/v6.2-Header-Switch-to-Text-Editor.png)
 
3. Add `style="max-height: 400px"` to the `<img />` tag and then save/update.

![Include style”max-height: 400px”](https://resources.gravitypdf.com/uploads/2022/03/v6.2-Header-Style.png)

It should look like this in your editor:
```
<img class="alignnone size-full wp-image-12 aligncenter" src="http://testsite.local/wp-content/uploads/2019/10/Group82InternshipProgramHeaderBanner.png" alt="" width="1030" height="250" style="max-height: 400px" />
```

:::info
Increase or decrease the max-height value of the image to get the desired size. Some trial and error may be required.
:::

**Before**

![A screenshot of a PDF with a logo constrained to a fixed height](https://resources.gravitypdf.com/uploads/2021/04/v6-Header-Sample-Before.png)

**After**

![A screenshot of a PDF with the logo size increased to the max-height specified](https://resources.gravitypdf.com/uploads/2021/04/v6-Header-Sample-After.png)
