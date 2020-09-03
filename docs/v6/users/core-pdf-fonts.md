---
title: "How to download and install the Core PDF Fonts"
sidebar_label: "Core PDF Fonts"
description: "Gravity PDF v5 decouples the Core PDF fonts from the plugin, which means when the plugin is first activated the fonts need to be installed."
---

Gravity PDF v5 decouples the Core PDF fonts from the plugin. This means that the fonts need to be installed when the plugin is first activated. The easiest way to do this is via the Core Font Installer, but we've also included manual installation instructions as well as an automated solution for the server-administrators out there. 

## Installation

### via Core Font Installer 

![The Core Font Installer Prompt](https://resources.gravitypdf.com/uploads/2017/12/core-fontdownload-prompt.png)

![The Core Font Installer in action](https://resources.gravitypdf.com/uploads/2017/12/core-font-installer.png) 

When the plugin is activated / upgraded, Gravity PDF will detect if the Core Fonts have been previously installed and show a prompt if they have not. When the prompt is shown, click the **Install Core Fonts** button to begin the installation. If you need to reinstall the Core Fonts for any reason, you can initiate the installation from the [PDF Global Settings Tools tab](global-settings.md#tools-tab). If any fonts fail to download, the installer will ask if you want to retry the installation. Only the failed downloads will be retried.

### via FTP 

[Download the Core Fonts](https://github.com/GravityPDF/mpdf-core-fonts/archive/master.zip), unzip the files and upload to `/wp-content/uploads/PDF_EXTENDED_TEMPLATES/fonts` via your FTP client. Note: depending on your internet upload speed, it could take some time.

### via Trellis / Ansible 

[Trellis](https://roots.io/trellis/) (which uses [Ansible](https://www.ansible.com/how-ansible-works)) is a popular way to setup and manage a server that can automatically deploy your WordPress website (we use it extensively at Gravity PDF). Because of the shared uploads directory, out-of-the-box Trellis users can safely run the Core PDF Font installation with the Font Manager. 

If you've moved the [PDF Working Directory](../developers/first-custom-pdf.md#working-directory) to a location outside your uploads folder (the default location), and don't want to commit the Core PDF fonts to your Git repo (we didn't), you'll need to install the fonts with each deployment. Trellis makes this very simple using their deployment hooks. 

To start, [create a custom task and override the `deploy_build_after` hook](https://roots.io/trellis/docs/deploys/#custom-tasks). After adding the custom task, your `group_vars/all/main.yml` configuration file should look similar to this:

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

Each time you deploy, right after the build process, Git will checkout the latest version of the `mpdf-core-fonts` repository and then use rsync to move the files into the PDF Working Directory's `fonts` folder.

## Why do we need to download the Core Fonts? 

The PDF library we use to generate PDFs (Mpdf) includes a large number of unicode fonts to display almost all languages worldwide. This is a great feature as it means the software will work out of the box for anyone – no matter what language you're using. However, because WordPress doesn't include any package manager, we had to bundle and distribute 35MB of fonts with every release (Mpdf actually includes 87MB of fonts but we removed [the heaviest CJK fonts](https://en.wikipedia.org/wiki/List_of_CJK_fonts) to keep the plugin size smaller). It was a waste of everyone's bandwidth and caused installation and upgrade issues for hosts with more conservative PHP settings. 

Now that we've decoupled the fonts:

1.  Zipped up, the plugin size comes in under 5MB, so more users should be able to install it using WordPress's Upload Plugin feature.
2.  Users who had trouble with one-click updates in the past should have no problems doing updates in the future.
3.  Gravity PDF can now support most CJK characters right out of the box – we now include all Mpdf fonts.
4.  Our team can be more agile with releases as we don't have to wait around while the fonts are uploaded to WordPress.org (Australia has slow internet).
