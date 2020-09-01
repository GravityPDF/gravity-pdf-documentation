---
title: "PDF Reports for GFChart: How to Install and Configure"
sidebar_label: "Reports for GFChart"
description: "Beautiful PDF Reports using Gravity Forms and GFChart. Includes 15 unique designs and supports all GFChart types: Pie, Bar, Line, and Progress Bar."
---

![Gravity PDF reports for GFChart Icon](https://resources.gravitypdf.com/uploads/2020/05/gravitypdf-reports-for-gfchart-cover-artwork-opt.png)

*Reports for GFChart* is a premium plugin for Gravity PDF that creates beautiful PDF Reports [using the third-party plugin GFChart](https://gfchart.com/?ref=24). The extension includes 15 report designs for you to choose from and supports all core GFChart types, including Pie, Bar, Column (horizontal bar), Progress Bar, and Calculations. [You can purchase the *Reports for GFChart* plugin from our Extension Shop](https://gravitypdf.com/shop/reports-for-gfchart-add-on/). This guide will walk you through installing and configuring *Reports for GFChart* to its full potential.

## Installation 

[Please follow our installation guide](installing-upgrading-extensions.md), which provides instructions for uploading the add-on to your WordPress website and adding your license key for automatic updates.

## Prerequisites 

Along with having [Gravity Forms](https://rocketgenius.pxf.io/c/1211356/445235/7938) and [Gravity PDF](installation.md) installed on your website, **to use Reports for GFChart [you need a GFChart ALL license](https://gfchart.com/pricing/?ref=24)** and have the following plugins installed:

1. [GFChart v1.17+](https://gfchart.com/?ref=24) with active license key
1. GFChart Image Charts v1.0.0-beta1+

:::tip
The GFChart Image Charts plugins **will NOT** work with *Gravity PDF Report for GFChart* unless you've activated your GFChart license key on your website.
:::

To add additional features to GFChart that enhances *Gravity PDF Reports for GFChart*, install the following plugins:

1. GFChart Scheduled Notifications (send out PDF Reports on a fixed schedule)
1. GFChart Survey Customiser (control chart segment colours and order)

:::info
GFChart Image Charts does not currently support the Charting vs Time extension. If this is a feature you're interested in, [contact GFChart and let them know](https://gfchart.com/support/?ref=24).
:::

## Setup GFChart 

We've put together a quick-start guide to get you up and running fast with GFChart. For an in-depth guide, you should [review the GFChart documentation in full](https://gfchart.com/documentation/?ref=24).

https://www.youtube.com/watch?v=8PYT5GwWuCk

1. Navigate to `Forms -> Settings -> GFChart` in your admin area and activate your GFChart license key. The GFChart Image Charts plugins **will NOT** work without a valid license key.
1. Next, head to the `Forms -> Charts/Calculations` page in your admin area.
1. Click the *Add New* button and in the popup enter a title for your chart and select which Gravity Form will be the data source before saving.
![Adding a new GFChart](https://resources.gravitypdf.com/uploads/2020/06/gfchart-create-chart.png)
1. Under the *Design* tab, select a chart type, and then subsequent style(s) for using a Pie or Bar chart. 
![Selecting a chart type for GFChart](https://resources.gravitypdf.com/uploads/2020/06/gfchart-design-page.png)
1. Under the *Select data* tab, choose the field(s) that you want to include in the chart. Add any other filters you might want. 
![Selecting a data source for GFChart](https://resources.gravitypdf.com/uploads/2020/06/gfchart-data-page.png)
1. Under the *Customiser* tab, adjust the chart width and height options. The ideal proportions are 700 (width) / 450 (height) if the chart will be displayed on its own line in the report, or 600 / 400 if the chart is displayed in a column.  
![Setting the ideal width and height for a GFChart](https://resources.gravitypdf.com/uploads/2020/06/gfchart-customiser-page.png)
1. Review the chart under the *Preview* tab and then make any further adjustments to the settings required before saving. 
![Previewing the configured GFChart](https://resources.gravitypdf.com/uploads/2020/06/gfchart-preview-page.png)

## Setup PDF Reports 

Once you've setup your chart(s) it's time to create your PDF reports! Well, almost...

Before you do anything you should determine what type of report you need, as this will establish which Gravity Form you configure. For example, if you want to generate a report for every form submission you'll setup your reports directly on the desired form. This setup is useful, but not limited to, the following use-cases:

1. **Donation / Charity Auction** - a donation is made via Gravity Forms and the report includes a chart showing the total amount raised. A variation on this is a charity aution where the chart shows the total amount raised / voted for each item.
1. **Quiz** - after completing a quiz/survey the report contains chart(s) showing the aggregate results.
1. **Event/Booking/Registration/Subscription** - after compelting the form, a report PDF is sent showing other user's demographics. 
1. **Report on demand** - rather than scheduling reports, you can create a form that will send out the report on submission.

If you'd prefer to get a report once a day/week/month you would create a new Gravity Form for this purpose . [See our Scheduling Reports section for more details about this configuration](#scheduling-reports). Whichever option you decide, you setup the report PDFs like you would any other: [via your form's PDF settings](setup-pdf.md#locating-pdf-settings). 

All *Reports for GFChart* templates have common settings that can be configured, such as font, security and PDF attachments, and we recommend [reviewing the PDF setup guide](setup-pdf.md) to get a better understanding on all the available options. The individual template-specific configuration is done from the *Template* tab, and below you’ll find detailed information about the available options.

### Templates 

https://www.youtube.com/watch?v=KNABsUDYvD0

*Reports for GFChart* come with five unique report styles to choose from, with each report including two variants – a total of 15 different designs! The templates available are:

1. [Maxwell](#maxwell)
1. [Alice](#alice)
1. [Metro](#metro)
1. [Kiama](#kiama)
1. [Yuna](#yuna)

The reports share a set of common *Template* settings which makes it easy to swap between the designs without losing your configuration. Below is a numbered list of all common settings and an image overlay showing where they are placed in the reports. Just keep in mind each report style will display them differently – the sample below is Maxwell (Standard). 

![Overlaid with numbers showing where each common setting is placed in Maxwell Standard](https://resources.gravitypdf.com/uploads/2020/05/Reports-for-GFChart-Common-Settings1.png)

#### 1. Main Heading 
* Give your report a title so the reader knows exactly what the document is about. Merge tags are supported.
* Leave the field blank to disable.

#### 2. Introduction 
* Control what content gets displayed before your charts. Merge tags are supported.
* GFChart has a [Calculation](https://gfchart.com/documentation/?ref=24#calculations) and [Progress Bar](https://gfchart.com/documentation/?ref=24#progress-bars) type which may not be suitable for the standard chart display. For more control, include the associated shortcode in this setting.
* Leave the field blank to disable.

#### 3. Chart 1/2/3/4 
* Select which GFChart charts you'd like to include in the PDF report. Up to four charts can be included.
* You aren't limited to including charts from the current form; you can add charts assigned to any of your Gravity Forms. 
* For optimal display in the PDF you may need to adjust the GFChart height and width under the *Customiser* tab ([refer to the Setup Charts section](#setup-gfchart)). 
* If you've configured your GFChart to include a Background Colour it will be automatically removed in the PDF. 
* Leave the field blank to disable.

#### 4. Additional Info 
* Control what content gets displayed after your charts. Merge tags are supported.
* GFChart has a [Calculation](https://gfchart.com/documentation/?ref=24#calculations) and [Progress Bar](https://gfchart.com/documentation/?ref=24#progress-bars) type which may not be suitable for the standard chart display. For more control, include the associated shortcode in this setting.
* Leave the field blank to disable.

#### 5. Header 
* Display content (including images) at the top of every page in your report. Merge tags are supported.
* For better control over your image height, select the "Text" tab in the Rich Text Editor, then add `style="max-height: 400px"` to the IMG tag (adjusting 400px to a suitable value).

#### 6. Footer 
* Display content (including images) at the bottom of every page in your report. Merge tags are supported.
* For better control over your image height, select the "Text" tab in the Rich Text Editor, then add `style="max-height: 400px"` to the IMG tag (adjusting 400px to a suitable value).

### Maxwell 

![A sample of the Maxwell Standard Report template](https://resources.gravitypdf.com/uploads/2020/05/Maxwell-Standard.png)

:::note
**Recommended Font:** Roboto (Li/LiI/Reg/RegI) at `12pt` and colour `#221e20` (dark grey).
:::

The standard version of Maxwell has no additional Template settings.

#### Stylized

![A sample of the Maxwell Stylized Report template](https://resources.gravitypdf.com/uploads/2020/05/Maxwell-Stylized.png)

:::note
**Recommended Font:** Roboto (Li/LiI/Reg/RegI) at `12pt` and colour `#221e20` (dark grey).
:::

##### Header Image
* Upload an image to use as a background in the PDF header.
* The optimum image height is 68mm / 2.68in, while the width should be equal to the Paper Size width you've selected (eg. A4 = 210mm, Letter = 8.5in).
* If no image is selected, the default "astronaut" image will be used instead.

##### Primary Colour
* The primary colour is used as a transparent overlay for the Header Image, as well as the Introduction text colour.

##### Secondary Colour
* The secondary colour is used as the border colour for GFChart, as well as a footer accent.

#### Stylized Alt

![A sample of the Maxwell Stylized Alt Report template](https://resources.gravitypdf.com/uploads/2020/05/Maxwell-Stylized-Alt-r1.png)

:::note
**Recommended Font:** Roboto (Li/LiI/Reg/RegI) at `12pt` and colour `#221e20` (dark grey).
:::

##### Primary Colour
* The primary colour is used as the Introduction text and GFChart border colour.

##### Secondary Colour
* The secondary colour is used for the Introduction, divider, and footer colours.

### Alice 

![A sample of the Alice Standard Report template](https://resources.gravitypdf.com/uploads/2020/05/Alice-Standard.png)

:::note
**Recommended Font:** Lato (Li/LiI/Reg/RegI) at `14pt` and colour `#FFFFFF` (white).
:::

#### Background Gradient Colour #1
* Select a colour to use in the linear background gradient. Defaults to `#f43628` (red)

#### Background Gradient Colour #2
* Select the other colour to use in the linear background gradient. Defaults to `#e9e54c` (yellow)

#### Stylized

![A sample of the Alice Stylized Report template](https://resources.gravitypdf.com/uploads/2020/05/Alice-Stylized.png)

:::note
**Recommended Font:** Lato (Li/LiI/Reg/RegI) at `14pt` and colour `#FFFFFF` (white).
:::

##### Background Gradient Colour #1
* Select a colour to use in the linear background gradient. Defaults to `#ff5f20` (orange)

##### Background Gradient Colour #2
* Select the other colour to use in the linear background gradient. Defaults to `#162672` (dark blue)

#### Stylized Alt

![A sample of the Alice Stylized Alt Report template](https://resources.gravitypdf.com/uploads/2020/05/Alice-Stylized-Alt.png)

:::note
**Recommended Font:** Lato (Li/LiI/Reg/RegI) at 14pt with a colour of #FFFFFF (white).
:::

##### Background Gradient Colour #1
* Select a colour to use in the linear background gradient. Defaults to `#f43628` (red)

##### Background Gradient Colour #2
* Select the other colour to use in the linear background gradient. Defaults to `#e9e54c` (yellow)

### Metro 

![A sample of the Metro Standard Report template](https://resources.gravitypdf.com/uploads/2020/05/Metro-Standard.png)

:::note
**Recommended Font:** Ubuntu (Li/LiI/Reg/RegI) at `14pt` and colour `#000000` (black).
:::

This template variant does **NOT** support the Header setting.

#### Logo
* Upload an image to use as a Logo. It is displayed at the beginning of the report.
* The Logo will be displayed in a column to the right of the Main Heading.

#### Background Image
* Upload an image to use as a background in the PDF.
* The optimum image width and height should be equal to the Paper Size (eg. A4 = 210x297mm, Letter = 8.5x11in).
* If no image is selected, the default "city" image will be used instead.

#### Primary Colour
* The primary colour is used as a transparent page overlay and the Footer background colour. The default colour is `#f0c522` (warm yellow).

#### Footer Type
* A radio setting that controls how the Additional Info and Footer settings get displayed in the PDF. There are two options: *Fixed* and *Floating*.
* The *Fixed* footer is absolute-positioned at the bottom of the last page of the report and has limited space for the Additional Info and Footer content. If the PDF only has one page, it will be displayed on the first page.
* The *Floating* footer will always be displayed after the charts and expand to suit the content. Select this type if you have a lot of content to add to the Additional Info and Footer sections.

#### Stylized

![A sample of the Metro Stylized Report template](https://resources.gravitypdf.com/uploads/2020/05/Metro-Stylized.png)

:::note
**Recommended Font:** Ubuntu (Li/LiI/Reg/RegI) at `14pt` and colour `#FFFFFF` (white).
:::

This template variant **DOES** support the Header setting.

##### Background Image
* Upload an image to use as a background in the PDF.
* The optimum image width and height should be equal to the Paper Size (eg. A4 = 210x297mm, Letter = 8.5x11in).
* If no image is selected, the default "city" image will be used instead.

##### Primary Colour
* The primary colour is used as a transparent page overlay. The default colour is `#292c5a` (navy blue).

##### Secondary Colour
* The primary colour is used as a transparent page overlay. The default colour is `#f0c522` (orange).

##### Footer Type
* A radio setting that controls how the Additional Info and Footer settings get displayed in the PDF. There are two options: *Fixed* and *Floating*.
* The *Fixed* footer is absolute-positioned at the bottom of the last page of the report and has limited space for the Additional Info and Footer content. If the PDF only has one page, it will be displayed on the first page.
* The *Floating* footer will always be displayed after the charts and expand to suit the content. Select this type if you have a lot of content to add to the Additional Info and Footer sections.

#### Stylized Alt

![A sample of the Metro Stylized Alt Report template](https://resources.gravitypdf.com/uploads/2020/05/Metro-Stylized-Alt.png)

:::note
**Recommended Font:** Ubuntu (Li/LiI/Reg/RegI) at `14pt` and colour `#2b2e71` (navy blue).
:::

This template variant **DOES** support the Header setting.

##### Background Image
* Upload an image to use as a background in the PDF.
* The optimum image width and height should be equal to the Paper Size (eg. A4 = 210x297mm, Letter = 8.5x11in).
* If no image is selected, the default "city" image will be used instead.

##### Primary Colour
* The primary colour is used as a transparent page overlay. The default colour is `#f0c522` (warm yellow).

##### Footer Type
* A radio setting that controls how the Additional Info and Footer settings get displayed in the PDF. There are two options: *Fixed* and *Floating*.
* The *Fixed* footer is absolute-positioned at the bottom of the last page of the report and has limited space for the Additional Info and Footer content. If the PDF only has one page, it will be displayed on the first page.
* The *Floating* footer will always be displayed after the charts and expand to suit the content. Select this type if you have a lot of content to add to the Additional Info and Footer sections.

### Kiama 

![A sample of the Kiama Standard Report template](https://resources.gravitypdf.com/uploads/2020/05/Kiama-Standard.png)

:::note
**Recommended Font:** Roboto (Med/MedI/Bd/BdI) at `12pt` and colour `#322f31` (dark grey).
:::

#### Sidebar Image
* Upload an image to use as a background in the PDF sidebar.
* The optimum image width is 44mm / 1.73in, while the height should be equal to the Paper Size height (eg. A4 = 297mm, Letter = 11in).
* If no image is selected, the default "building" image will be used instead.

#### Primary Colour
* The primary color is used as a transparent overlay for the Sidebar, Main Header, divider, and Footer accent. The default colour is `#2c2e35` (grey).

#### Stylized

![A sample of the Kiama Stylized Report template](https://resources.gravitypdf.com/uploads/2020/05/Kiama-Stylized.png)

:::note
**Recommended Font:** Roboto (Med/MedI/Bd/BdI) at `12pt` and colour `#322f31` (dark grey).
:::

##### Sidebar Image
* Upload an image to use as a background in the PDF sidebar.
* The optimum image width is 44mm / 1.73in, while the height should be equal to the Paper Size height (eg. A4 = 297mm, Letter = 11in).
* If no image is selected, the default "building" image will be used instead.

##### Primary Colour
* The primary color is used as a transparent overlay for the Sidebar, divider, and footer accents. The default colour is `#172872` (navy blue).

Secondary Colour
* The secondary color is used for the Main Heading text and GFChart border. The default colour is `#FF652D` (orange).

#### Stylized Alt

![A sample of the Kiama Stylized Alt Report template](https://resources.gravitypdf.com/uploads/2020/05/Kiama-Stylized-Alt.png)

:::note
**Recommended Font:** Roboto (Med/MedI/Bd/BdI) at `12pt` and colour `#322f31` (dark grey).
:::

##### Sidebar Image
* Upload an image to use as a background in the PDF sidebar.
* The optimum image width is 44mm / 1.73in, while the height should be equal to the Paper Size height (eg. A4 = 297mm, Letter = 11in).
* If no image is selected, the default "building" image will be used instead.

##### Primary Colour
* The primary color is used as a transparent overlay for the Sidebar. The default colour is `#FF652D` (orange).

##### Secondary Colour
* The secondary color is used for the Main Heading text, GFChart border, divider, and footer accents. The default colour is `#172872` (navy blue).

### Yuna 

![A sample of the Yuna Standard Report template](https://resources.gravitypdf.com/uploads/2020/05/Yuna-Standard.png)

:::note
**Recommended Font:** Vollkorn (Reg/Regl/SemDb/SemBdI) at `13pt` and colour `#231f20` (dark grey).
:::

The standard version of Yuna has no additional Template settings.

#### Stylized

![A sample of the Yuna Stylized Report template](https://resources.gravitypdf.com/uploads/2020/05/Yuna-Stylized.png)

:::note
**Recommended Font:** Fira Sans (Li/LiI/Reg/RegI) at `14pt` and colour `#231f20` (dark grey).
:::

##### Primary Colour
* The primary color is used as the Main Heading text colour.

#### Stylized Alt

![A sample of the Yuna Stylized Alt Report template](https://resources.gravitypdf.com/uploads/2020/05/Yuna-Stylized-Alt.png)

:::note
**Recommended Font:** Fira Sans (Li/LiI/Reg/RegI) at `14pt` and colour `#231f20` (dark grey).
:::

##### Primary Colour
* The primary color is used as the Main Heading text colour + accent, and Additional Info background colour.

## Scheduling Reports 

The ability to get a report emailed to you on a regular schedule is an important feature. GFChart supports this workflow through the use of [relative date filtering in their charts](https://gfchart.com/documentation/?ref=24#relative-date-filtering) and [their new Scheduled Notification add-on](https://gfchart.com/documentation/?ref=24#scheduled-notifications). At the time of writing the Scheduled Notification plugin has very limited schedule controls. For users after robust notification scheduling, [Gravity Flow](https://gravityflow.io/?ref=12) (any license type) or the [Delayed Email Notifications plugin](https://ristrettoapps.com/downloads/gravity-forms-delayed-notifications/) (Doppio or Supremo license) are good alternatives.

### Scheduling Prerequisite 

1. In your WordPress Admin area, navigate to *Settings -> General* and confirm your **Timezone** setting is configured correctly.

1. Create a new Gravity Form specifically for your scheduled reports. Since all the data is pulled from the [configured GFChart graphs and calculations](#setup-gfchart), your form doesn't need to capture any information of importance. However, Gravity Forms won't allow you to submit a new entry unless some data is saved, so add a Single Line Text field to your form – the field label doesn't matter. 
![A basic Gravity Form with one Single Line Text field](https://resources.gravitypdf.com/uploads/2020/06/scheduled-report-basic-form.png)

1. [Create a Notification (or Notifications) that will be emailed on your schedule](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/).

1. [Create the PDF Report(s)](#setup-pdf-reports) that you want sent out and make sure you configure the PDF to [attach to the Notification(s)](setup-pdf.md#notifications) you setup in the previous step.

1. Update the GFChart graphs and/or calculations to be displayed in the report [with a relative date range](https://gfchart.com/documentation/?ref=24#relative-date-filtering). The common setup is to configure a relative date range with the same value as the notification schedule. For example, if you want the report to go out at the beginning of every month with last month's data you'd set the GFChart's Date Range "Start" date to "first day of last month" and leave the "End" date blank. If the report was going out weekly on a Monday morning with last week's data, use "Monday last week" in GFChart's "Start" date. Or if the report is sent out at the beginning of the day, you could use "yesterday" or "-1 day".
![Relative date formatting](https://resources.gravitypdf.com/uploads/2020/06/relative-date-format.png)

1. Once you've go this far it's best to test that the PDF Report(s) are generating correctly and being attached to the Notification(s). Go submit a test entry to the form and then verify the email is received with the PDF Report attached. If you can correctly [view the PDF Report from the Entry List page](viewing-pdfs.md) but are having email delivery issues, [read and impliment our Email Notification Best Practice guide](email-notifications.md) before proceeding with the scheduling setup.

1. **Optional**: all the scheduling plugins make use of [WordPress' in-built Cron mechnasim](https://developer.wordpress.org/plugins/cron/) which relies on traffic to your website to trigger the events. If your website doesn't get the traffic at the scheduled time then your reports will be delayed. If your hosting provided doesn't already include a dedicated cron solution, and you must have these reports at the specific time you've scheduled, [you should disable the default WP Cron and setup a proper system cron instead](https://kinsta.com/knowledgebase/disable-wp-cron/).

### GFChart's Scheduled Notification 

To help with the setup, we've instructions in 📽️ and 📝 format.

https://www.youtube.com/watch?v=Bta_GZMxma8

After installing the plugin, you'll have a new checkbox option on the Notification settings called *Schedule Notifications* which will allow you to enable this feature. When checked, you'll then be able to select the frequency of the report. Available options include:

* Daily
* Weekly
* Monthly

![The GFChart Schedule Notifications setting](https://resources.gravitypdf.com/uploads/2020/06/gfchart-schedule-notification-setting.png)

:::caution
In our testing we found the *Monthly* frequency repeated every 30 days and did not account for months with 28, 29, or 31 days. This means at the end of the year the report will be running 5 days earlier than the original configuration date.
::: 

Once you select a frequency and save the Notification settings, a new task will be added to the WordPress cron and scheduled to run at the desired interval. The scheduled task time will be set to the Notification settings "save" time. Just remember that the default WordPress Cron works off your site traffic, and reports may be sent late if you don't get traffic at the scheduled time ([set up a system cron if timing is important to you](https://kinsta.com/knowledgebase/disable-wp-cron/)).

If you'd like to change the time that a report will be sent, [you can install and active the free WP Crontrol plugin](https://wordpress.org/plugins/wp-crontrol/). After installation, navigate to *Tools -> Cron Events* and search for Hook Names that begin with `gfcsn_` (these are the GFChart Schedule Notification events). If this is the first Notification you're setting up you should find one event. Edit the event and adjust the "Next Run" setting with the correct time you'd like. Save when finished and your Notification will be automatically sent on the interval you've chosen. 

:::caution
GFChart's scheduled event uses the Notification ID as a unique identifier. You can accidentally override the original form's scheduled event if you duplicate a Gravity Form (the Notification IDs don't change when duplicated) and then update the new form's Notification settings. A workaround is to duplicate the Notification(s) on the new form (getting new IDs), deleting the original notifications and then updating the new Notifications settings to re-enabling scheduling.
::: 

![How to manually adjust the date and time of the next GFChart Scheduled Notification event](https://resources.gravitypdf.com/uploads/2020/06/wp-crontrol-event-runtime.png)

**Summary:** This option is best when you want a simple solution to easily send reports daily, weekly, or every 30 days. It lacks advanced scheduling features, but is included in the GFChart All  license (which is required to use the Gravity PDF Reports for GFChart plugin) and so you don't have any additional costs. 

### Gravity Flow's Delayed Notifications 

[Gravity Flow is a tool used to automate business processes](https://gravityflow.io/?ref=12), and one of its features include the ability to [schedule Steps at defined intervals](https://docs.gravityflow.io/article/67-scheduling-a-step). You can use this scheduling functionality with their Notification workflow step to send out your Gravity Forms Notification(s) at specific intervals.

Before you start the Workflow setup, [have a ready of the Gravity Flow Introduction guide](https://docs.gravityflow.io/article/50-an-introduction-to-the-features) so you've the foundational knowledge you need. To set this up correctly we'll create two Notification steps on the form. The first will include the Schedule delay and then send the Notification, while the second is used to create a loop so the workflow never ends and the schedule repeats indefinitely.

![An overview of the Gravity Flow workflow needed to schedule the notification(s)](https://resources.gravitypdf.com/uploads/2020/06/gravity-flow-workflow-overview.png)

When you setup the first Notification step, enable the "Schedule this step" option and and select the appropriate *Delay* interval. Gravity Flow supports delaying by:

* Minute
* Hour
* Day
* Week

![Configuring the delayed Notification step in Gravity Flow](https://resources.gravitypdf.com/uploads/2020/06/gravity-flow-scheduled-notification.png)

Once you've setup the correct interval, enable the appropriate "Gravity Forms Notifications" that you want to schedule. 

In the second Notification step, all you need to do is set the "Next Step" setting to the *Start* option so that the workflow will repeat (all the other non-required settings in this step can be left as is). 

![Configuring the loop Notification step in Gravity Flow](https://resources.gravitypdf.com/uploads/2020/06/gravity-flow-loop-notification.png)

The final step is to submit a form entry to kick off the report scheduling. The first scheduled Notification will be sent using the entry submission time + the delay interval chosen. For example, if you submitted the entry at 9am and have a delay of "1 day" then you'll get the next email at 9am tomorrow. Adjusting the scheduled time manually requires editing the database (**which we do NOT recommend**). The simplest (albeit tedious) approach is to delete the original entry and submit a new entry at your desired time. 

**Summary:** Gravity Flow is a powerhouse piece of software that can help revolutionise your business processes, and offers far more than notification scheduling. But if we only look at the software from the scheduling aspect, Gravity Flow is well-tested and allows interval scheduling – think "send Notification every X days". [Advanced scheduling – like sending on the last day of every month or sending on specific days of the month – can be achieved with developer knowhow](https://docs.gravityflow.io/article/186-gravityflowstepscheduletimestamp), but unfortuantely this is not available via the user interface.

### Ristretto Apps' Delayed Email Notifications 

Out of all the options, [Ristretto Apps' Delayed Email Notifications plugin](https://ristrettoapps.com/downloads/gravity-forms-delayed-notifications/) is the most powerful notification scheduling tool of the bunch. This plugin offers the following recurring scheduling options:

* Daily
* Weekly
* Monthly

There's an easy-to-use UI for setting up the schedule – including the time, which is missing from the other two options – and the ability to easily view and manage the notifications that have been scheduled without the need for a workaround like the WP Crontrol plugin.

After installing, you'll have a new checkbox option on the Notification settings called *Delayed Notifications* which will allow you to enable this feature. When checked, you'll then be able to select the frequency of the report. If you'd like to send the report daily or weekly we recommend setting the delay option to *Days of the Week* and selecting your appropriate day(s) you want to receive the report.

:::note
For daily reports select every day of the week.
:::

Finally, add a time the report should be sent and save the Notification settings.

![Using a weekly schedule for the report](https://resources.gravitypdf.com/uploads/2020/06/delayed-notifications-days-of-week.png)

For a monthly report, set the delay option to *Recurring Pattern* and the repeat interval to *Monthly*. You'll then be able to set the day of the month and time the report should be sent. Even if you'd like the schedule to run indefinitely, **you will need to add an appropriate Start Date and End Date otherwise the emails will not be scheduled**. We recommend adding today as the Start Date and setting the End Date to three years in the future. Save the Notification settings when done. 

![Using a monthly schedule for the report](https://resources.gravitypdf.com/uploads/2020/06/delayed-notifications-monthly.png)

:::caution
In our testing we found that setting the *Monthly* run *Day* to 29, 30 or 31 would skip months that did not include that many days. For example, if the run day was 31, the report would not be sent in February, April, June, September, or November.
::: 

Once you've setup the Notification schedule, submit a new form entry to kick off the process. 

One of the great features of this plugin is the ability to view and manage the scheduled notifications via the `Forms -> Delayed Notifications` page in your admin area. 

![The scheduled notification list](https://resources.gravitypdf.com/uploads/2020/06/delayed-notifications-schedule.png)

If everything has been setup correctly, after submitting the entry to your report form you'll see the scheduled notification(s) in this list. If you decide the schedule is no longer suitable, you can also delete it and start again.

**Summary:** Ristretto Apps' Delayed Email Notifications plugin is the most feature-rich of all the available notification scheduling options. Because it doesn't rely on a delay interval for scheduling, it's the only plugin out of the bunch that handles monthly schedule correctly (with the exception of skipping months that don't have 29, 30, or 31 days, if that's what you've selected). Weekly reports aren't limited to a single day of the week either eg. you can receive a report on Monday, Wednesday, and Friday should you want. You've also got a nice easy-to-read log of all scheduled notifications you can access. What isn't possible is the ability to schedule reports fortnightly, quarterly, half-yearly, or yearly. You also can't configure reports on multiple days in a given month from a single notification – you have to create a notification for each day of the month you want the report sent and make sure the PDF is attached.

## Frequently Asked Questions 

### How are the GFCharts generated in the reports?

The aggrigate form data for the GFChart, as well as the chart settings, are sent securely over HTTPS to a GFChart server for processing, and an image is returned. Whether the aggrigate data is [considered annonymised](https://gdpr-info.eu/recitals/no-26/) will depend on what field(s) and chart settings are configured. The rule of thumb is: if you cannot link the standalone GFChart image to an identifiable natural person then that data is considered annonymised and the GDPR does not apply to the aggrigate data sent to the GFChart server. If you're interested in GFChart's privacy policy, [reach our to their support team with your questions](https://gfchart.com/support/?ref=24). 

Once the GFChart image is returned, the PDF generation is completed like normal using Gravity PDF. [Refer to our GDPR for Gravity PDF guide for more information](gdpr-and-gravity-pdf.md).

### The reports are slow to generate. Is it possible to make it faster?

For each chart you include in the PDF report, an API request has to be made to the GFChart server and we have to await a response. Reports with one or two charts will generate quicker than those with three or four. 

If the bottleneck is during the form submission process, you can dramatically speed this up [by enabling Gravity PDF's Background Processing feature](global-settings.md#background-processing) which will offload the Notification sending process (and PDF generation) to a background queue.