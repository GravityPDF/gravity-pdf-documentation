---
title: "How to download and install the Core PDF Fonts"
sidebar_label: "Core PDF Fonts"
description: "Before Gravity PDF can be used for the first time, the Core font files need to be downloaded and installed on your site."
---

Before Gravity PDF can be used for the first time, the Core font files need to be downloaded and installed on your site. The simplest way to do this is to click the `Install Core Fonts` button in the admin notice that is shown. We've also included manual installation instructions, as well as an automated solution for the server-administrators out there.

## Installation

### via Core Font Installer

![The Core Font Installer Prompt](https://resources.gravitypdf.com/uploads/2021/03/Download-Core-Font-Prompt.png)

![The Core Font Installer in action](https://resources.gravitypdf.com/uploads/2021/03/Download-Core-Fonts-.png)

When the plugin is activated, Gravity PDF will detect if the Core Fonts have been installed and show a prompt if they cannot be found. When the prompt is shown, click the `Install Core Fonts` button to begin the installation. If you need to reinstall the Core Fonts for any reason, you can do so from the [Global Settings Tools tab](global-settings.md#tools-tab). If any fonts fail to download, the installer will ask if you want to retry. Only the failed font downloads will be retried.

:::info
The Core Fonts are hosted and will be downloaded to your web server [from a public GitHub repository (maintained by Gravity PDF)](https://github.com/gravityPDF/mpdf-core-fonts) when you use the Core Font Installer. For further information about GitHub you can refer to their [Terms of Service](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service) and/or [Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement#the-short-version).
:::

### via FTP

[Download the Core Fonts](https://github.com/GravityPDF/mpdf-core-fonts/archive/master.zip), unzip the files and upload to `/wp-content/uploads/PDF_EXTENDED_TEMPLATES/fonts` via your FTP client. Depending on your internet upload speed, it could take some time to complete the upload.

### via Trellis / Ansible

[Trellis](https://roots.io/trellis/) (which uses [Ansible](https://www.ansible.com/how-ansible-works)) is a popular way to set up and manage a server that can automatically deploy your WordPress website. Because of the shared `uploads` directory, out-of-the-box Trellis users can safely use the Core Font installer without needing to rerun it on every deploy.

If you've moved the [PDF Working Directory](../developers/first-custom-pdf.md#pdf-working-directory) to a location outside `uploads`, and don't want to commit the Core PDF fonts to your Git repo, you'll need to install the fonts with each deployment. Trellis makes this very simple using their deployment hooks.

To start, [create a custom task and override the `deploy_build_after` hook](https://roots.io/trellis/docs/deployments/#custom-tasks). After adding the custom task, your `group_vars/all/main.yml` configuration file should look similar to this:

    # Overriding a hook that Trellis already uses by default
    deploy_build_after:
      - "{{ playbook_dir }}/roles/deploy/hooks/build-after.yml"
      - "{{ playbook_dir }}/deploy-hooks/build-after.yml" # add this line

Next, create `/deploy-hooks/build-after.yml` and include the block below. In our case, we moved and renamed the PDF Working Directory from `/web/app/uploads/PDF_EXTENDED_TEMPLATES/fonts` to `/web/app/PDF-Templates/fonts` which is reflected in the line `dest: "{{ deploy_helper.new_release_path }}/web/app/PDF-Templates/fonts`. Update the path as needed.

    ---
    # Download and sync core Gravity PDF fonts
    - git:
        repo: 'https://github.com/GravityPDF/mpdf-core-fonts'
        dest: "{{ deploy_helper.shared_path }}/mpdf-core-fonts"
        version: master
        force: yes

    - synchronize:
        src: "{{ deploy_helper.shared_path }}/mpdf-core-fonts/"
        dest: "{{ deploy_helper.new_release_path }}/web/app/PDF-Templates/fonts
        rsync_opts:
          - "--exclude=.git"
      delegate_to: "{{ inventory_hostname }}"

Each time you deploy, Git will checkout the latest version of the `mpdf-core-fonts` repository and use rsync to move the files into the PDF Working Directory's `fonts` folder.

## Why do we need to download the Core Fonts?

The PDF library we use to generate PDFs ([mPDF](http://mpdf.github.io)) includes many unicode fonts to display almost all languages worldwide. This is a great feature as it means the software will work out of the box for anyone – no matter what language you're using. However, bundling 87MB of fonts for every release is a huge waste of everyone's bandwidth, and can cause installation and upgrade issues for websites on shared hosting. 

Because the fonts are decoupled from the plugin:

1. Zipped up, Gravity PDF's plugin size comes in under 5MB, making it accessible to more users who install using WordPress's Upload Plugin feature.
1. Users who had trouble with one-click updates in the past should have no problems doing updates in the future.
1. Downloads, installs, and upgrades can be done faster
1. Gravity PDF can support most languages right out of the box, including Chinese, Japanese, and Korean.
