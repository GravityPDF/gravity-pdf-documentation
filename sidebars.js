module.exports = {
  v3: [
    {
      type: 'category',
      label: 'User',
      items: [
        {
          'type': 'category',
          'label': 'Installation',
          'items': [
            'v3/installation-requirements',
            'v3/installation-via-wordpress-admin',
            'v3/installation-manual-initialisation',
            'v3/installation-via-ftp'
          ]
        },
        {
          'type': 'category',
          'label': 'Configuration',
          'items': [
            'v3/display-pdf-in-browser',
            'v3/getting-started-with-gravity-pdf-configuration',
            'v3/configuration-options-examples',
            'v3/wheres-configuration-folder'
          ]
        },
        {
          'type': 'category',
          'label': 'Config Video Series',
          'items': [
            'v3/getting-started-with-gravity-pdf-configuration/basic-configuration-video-part-one',
            'v3/getting-started-with-gravity-pdf-configuration/how-to-automated-pdf-email-part-two',
            'v3/getting-started-with-gravity-pdf-configuration/how-to-allow-user-pdf-downloads-video-part-three',
            'v3/getting-started-with-gravity-pdf-configuration/how-to-manual-review-before-pdf-email-part-four',
            'v3/getting-started-with-gravity-pdf-configuration/send-pdf-after-accepting-payment-video-part-five'
          ]
        },
        {
          'type': 'category',
          'label': 'Troubleshooting',
          'items': [
            'v3/known-issues-and-limitations',
            'v3/memory-problems'
          ]
        },
      ],
    },

    {
      type: 'category',
      label: 'Developers',
      items: [
        {
          'type': 'category',
          'label': 'Getting Started',
          'items': [
            'v3/custom-templates-introduction',
            'v3/custom-templates-with-mergetags',
            'v3/custom-templates-with-form-data-array',
            'v3/accessing-product-data',
            'v3/accessing-survey-poll-quiz-data',
            'v3/filters-and-hooks',
            'v3/reserved-variables',
          ]
        },
        {
          'type': 'category',
          'label': 'mPDF Features',
          'items': [
            'v3/language-support',
            'v3/css-and-html-support',
          ]
        },
        {
          'type': 'category',
          'label': 'mPDF Demos',
          'items': [
            'v3/basic-html-pdf-template-example',
            'v3/background-images-and-rounded-corners-pdf-template-example',
            'v3/images-pdf-template-example',
            'v3/tables-pdf-template-example',
            'v3/floats-and-fixed-positioning-pdf-template-example',
            'v3/headers-and-footers-pdf-template-example',
            'v3/change-document-size-pdf-template-example',
            'v3/watermarks-pdf-template-example'
          ]
        }
      ],
    },
  ],

  v4: [
    {
      type: 'category',
      label: 'User',
      items: [
        {
          type: 'category',
          label: 'Getting Started',

          items: [
            'v4/five-minute-install',
            'v4/user-installation',
            'v4/user-global-settings',
            'v4/user-setup-pdf',
            'v4/user-viewing-pdfs',
            'v4/user-shortcodes',
            'v4/user-managing-pdfs',
            'v4/user-pdf-template-manager',
            'v4/user-custom-fonts',
            'v4/user-additional-templates',
            'v4/user-gravity-forms-compatibility',
          ],

          'collapsed': false,
        },

        {
          'type': 'category',
          'label': 'Under The Hood',
          'items': [
            'v4/user-css-ready-classes',
            'v4/user-adding-page-breaks',
            'v4/user-hide-form-fields',
            'v4/uploaded-images',
            'v4/user-importing-exporting-and-duplicating',
            'v4/user-pdf-security',
            'v4/gravityview-support',
            'v4/gravity-flow-support',
            'v4/gdpr-and-gravity-pdf',
            'v4/v3-to-v4-migration',
          ]
        },

        {
          'type': 'category',
          'label': 'Common Problems',
          'items': [
            'v4/user-activation-errors',
            'v4/user-increasing-memory-limit',
            'v4/user-supported-pdf-viewers',
            'v4/user-white-screen-of-death',
            'v4/user-email-notifications',
            'v4/postscript-outlines-not-supported',
            'v4/user-weird-characters-showing-instead-of-pdf',
            'v4/user-why-arent-columns-showing-in-pdf',
            'v4/user-generated-in-x-seconds',
            'v4/user-setup_ids-depreciated-gravity-pdf-4-0',
            'v4/user-pdf-menu-items-under-dashboard',
            'v4/user-restricted-site-access-plugin-conflict',
            'v4/user-500-internal-server-error',
            'v4/user-no-gravity-form-entry-id-passed-to-gravity-pdf'
          ]
        },
      ]
    },

    {
      type: 'category',
      label: 'Extension Shop',
      items: [
        {
          'type': 'doc',
          'id': 'v4/shop-installing-upgrading-extensions',
        },

        {
          'type': 'category',
          'label': 'Plugins',
          'items': [
            'v4/shop-plugin-core-booster-add-on',
            'v4/shop-plugin-previewer-add-on'
          ],
          'collapsed': false,
        }
      ],
    },

    {
      type: 'category',
      label: 'Template Shop',
      items: [
        {
          'type': 'doc',
          'id': 'v4/shop-installing-upgrading-premium-templates',
        },

        {
          'type': 'category',
          'label': 'Universal Templates',
          'items': [
            'v4/shop-pdf-template-barot',
            'v4/shop-pdf-template-sabre',
            'v4/shop-pdf-template-cellulose',
            'v4/shop-pdf-template-formium',
            'v4/shop-pdf-template-colossus',
            'v4/shop-pdf-template-tritan'
          ]
        },
        {
          'type': 'category',
          'label': 'Invoice Templates',
          'items': [
            'v4/shop-pdf-template-invoice-classic',
            'v4/shop-pdf-template-invoice-modern',
            'v4/shop-pdf-template-invoice-aurora',
            'v4/shop-pdf-template-invoice-iconic'
          ]
        },
        {
          'type': 'category',
          'label': 'Letter Templates',
          'items': [
            'v4/shop-pdf-template-formal-letter',
            'v4/shop-pdf-template-business-letter-1',
            'v4/shop-pdf-template-business-letter-2'
          ]
        },
      ],
    },

    {
      type: 'category',
      label: 'Developers',
      items: [
        {
          'type': 'category',
          'label': 'Core Concepts',
          'items': [
            'v4/developer-start-customising',
            'v4/developer-first-custom-pdf',
            'v4/developer-mergetags-and-conditional-shortcodes',
            'v4/developer-php-form-data-array',
            'v4/developer-template-configuration-and-image',
            'v4/developer-template-hierarchy',
            'v4/development-helper-parameters'
          ],
          'collapsed': false,
        },
        {
          'type': 'category',
          'label': 'PDF Features',
          'items': [
            'v4/developer-supported-html-and-css',
            'v4/developer-headers-and-footers',
            'v4/developer-images',
            'v4/developer-watermarks',
            'v4/developer-backgrounds',
            'v4/developer-rounded-corners',
            'v4/developer-tables',
            'v4/developer-floats',
            'v4/developer-positioning',
            'v4/developer-pagebreaks',
          ]
        },
        {
          'type': 'category',
          'label': 'API',
          'items': [
            'v4/developer-api-whats-it-for',
            'v4/api_get_log_class',
            'v4/api_get_notice_class',
            'v4/get_data_class',
            'v4/api_get_options_class',
            'v4/api_get_misc_class',
            'v4/api_get_form_class',
            'v4/api_get_mvc_class',
            'v4/api_get_form_pdfs',
            'v4/api_get_pdf',
            'v4/api_add_pdf',
            'v4/api_update_pdf',
            'v4/api_delete_pdf',
            'v4/api_get_plugin_settings',
            'v4/api_get_plugin_option',
            'v4/api_add_plugin_option',
            'v4/api_update_plugin_option',
            'v4/api_delete_plugin_option',
            'v4/api_create_pdf',
            'v4/api_product_table',
            'v4/likert_table',
            'v4/api_add_pdf_font',
            'v4/delete_pdf_font',
            'v4/api_get_pdf_fonts',
            'v4/api_get_form_data'
          ]
        },
        {
          'type': 'category',
          'label': 'Filter Hooks',
          'items': [
            'v4/gfpdf_gf_noconflict_scripts',
            'v4/gfpdf_gf_noconflict_styles',
            'v4/gfpdf_one_time_action_routes',
            'v4/gfpdf_localised_script_array',
            'v4/gfpdf_template_args',
            'v4/gfpdf_settings_general',
            'v4/gfpdf_settings_general_security',
            'v4/gfpdf_settings_tools',
            'v4/gfpdf_form_settings',
            'v4/gfpdf_form_settings_appearance',
            'v4/gfpdf_form_settings_advanced',
            'v4/gfpdf_registered_fields',
            'v4/gfpdf_pdf_html_output',
            'v4/gfpdf_mpdf_class',
            'v4/gfpdf_mpdf_init_class',
            'v4/gfpdf_pdf_actions',
            'v4/gfpdf_pdf_list_columns',
            'v4/gfpdf_field_value',
            'v4/gfpdf_field_html_value',
            'v4/gfpdf_get_settings',
            'v4/gfpdf_pdf_config',
            'v4/gfpdf_form_add_pdf',
            'v4/gfpdf_form_update_pdf',
            'v4/gfpdf_get_option',
            'v4/gfpdf_update_option',
            'v4/gfpdf_capabilities',
            'v4/gfpdf_settings_sanitize',
            'v4/gfpdf_signature_width',
            'v4/gfpdf_form_settings_sanitize',
            'v4/gfpdf_core_template_fields_list',
            'v4/gfpdf_working_folder_name',
            'v4/gfpdf_template_location',
            'v4/gfpdf_template_location_uri',
            'v4/gfpdf_font_location',
            'v4/gfpdf_tmp_location',
            'v4/gfpdf_multisite_template_location',
            'v4/gfpdf_multisite_template_location_uri',
            'v4/gfpdf_pdf_middleware',
            'v4/gfpdf_pdf_filename',
            'v4/gfpdf_field_class',
            'v4/gfpdf_gravityforms_shortcode_attributes',
            'v4/gfpdf_include_list_styles',
            'v4/gfpdf_include_product_styles',
            'v4/gfpdf_field_section_break_html',
            'v4/gfpdf_show_field_value',
            'v4/gfpdf_field_label',
            'v4/gfpdf_pdf_field_content',
            'v4/gfpdf_enable_master_password_field',
            'v4/gfpdf_field_middleware',
            'v4/gfpdf_get_pdf_display_list',
            'v4/gfpdf_get_active_pdfs',
            'v4/gfpdf_override_pdf_bypass',
            'v4/gfpdf_maybe_attach_to_notification',
            'v4/gfpdf_form_data',
            'v4/gfpdf_current_pdf_configuration',
            'v4/gfpdf_form_data_key_order',
            'v4/gfpdf_container_disable_faux_columns'
          ]
        },
        {
          'type': 'category',
          'label': 'Action Hooks',
          'items': [
            'v4/gfpdf_tool_tab_actions',
            'v4/gfpdf_pdf_list_column_id',
            'v4/gfpdf_core_template',
            'v4/gfpdf_fully_loaded',
            'v4/gfpdf_version_changed',
            'v4/gfpdf_plugin_installed',
            'v4/gfpdf_post_save_pdf',
            'v4/gfpdf_post_general_settings_page',
            'v4/gfpdf_post_tools_settings_page',
            'v4/gfpdf_post_help_settings_page',
            'v4/gfpdf_pre_html_fields',
            'v4/gfpdf_post_html_fields',
            'v4/gfpdf_pre_generate_and_save_pdf_notification',
            'v4/gfpdf_post_generate_and_save_pdf_notification',
            'v4/gfpdf_pre_generate_and_save_pdf',
            'v4/gfpdf_post_generate_and_save_pdf',
            'v4/gfpdf_pre_view_or_download_pdf'
          ]
        },

      ],
    },
  ],

  v5: [
    {
      type: 'category',
      label: 'User',
      items: [
        {
          type: 'category',
          label: 'Getting Started',

          items: [
            'v5/five-minute-install',
            'v5/user-installation',
            'v5/user-core-pdf-fonts',
            'v5/user-global-settings',
            'v5/user-setup-pdf',
            'v5/user-viewing-pdfs',
            'v5/user-shortcodes',
            'v5/user-managing-pdfs',
            'v5/user-pdf-template-manager',
            'v5/user-custom-fonts',
          ],

          'collapsed': false,
        },

        {
          'type': 'category',
          'label': 'Under The Hood',
          'items': [
            'v5/user-pdf-security',
            'v5/user-hide-form-fields',
            'v5/user-adding-page-breaks',
            'v5/user-css-ready-classes',
            'v5/displaying-uploaded-images',
            'v5/background-processing',
            'v5/gravityview-support',
            'v5/gravity-flow-support',
            'v5/user-additional-templates',
            'v5/gdpr-and-gravity-pdf',
            'v5/user-gravity-forms-compatibility',
            'v5/v4-to-v5-migration',
          ]
        },

        {
          'type': 'category',
          'label': 'Common Problems',
          'items': [
            'v5/user-500-internal-server-error',
            'v5/user-white-screen-of-death',
            'v5/user-increasing-memory-limit',
            'v5/cannot-find-ttf-truetype-font-file',
            'v5/user-supported-pdf-viewers',
            'v5/user-activation-errors',
            'v5/user-email-notifications',
            'v5/user-generated-in-x-seconds',
            'v5/user-why-arent-columns-showing-in-pdf',
            'v5/user-weird-characters-showing-instead-of-pdf',
            'v5/user-pdf-menu-items-under-dashboard',
            'v5/user-no-gravity-form-entry-id-passed-to-gravity-pdf',
            'v5/how-to-display-the-nested-forms-table-shown-prior-to-v5-1',
            'v5/columns-in-nested-forms-do-not-work-in-the-pdf',
            'v5/user-setup_ids-depreciated-gravity-pdf-4-0',
            'v5/adjust-size-of-header-footer-images'
          ]
        },
      ]
    },

    {
      type: 'category',
      label: 'Extension Shop',
      items: [
        {
          'type': 'doc',
          'id': 'v5/shop-installing-upgrading-extensions',
        },

        {
          'type': 'category',
          'label': 'Plugins',
          'items': [
            'v5/shop-plugin-bulk-generator-add-on',
            'v5/shop-plugin-core-booster-add-on',
            'v5/shop-plugin-previewer-add-on',
            'v5/shop-plugin-reports-for-gfchart-add-on',
            'v5/shop-plugin-watermark-add-on',
          ],
          'collapsed': false,
        }
      ],
    },

    {
      type: 'category',
      label: 'Template Shop',
      items: [
        {
          'type': 'doc',
          'id': 'v5/shop-installing-upgrading-premium-templates',
        },

        {
          'type': 'category',
          'label': 'Universal Templates',
          'items': [
            'v5/shop-pdf-template-aryal',
            'v5/shop-pdf-template-leo',
            'v5/shop-pdf-template-formialt',
            'v5/shop-pdf-template-tritan',
            'v5/shop-pdf-template-sabre',
            'v5/shop-pdf-template-cellulose',
            'v5/shop-pdf-template-formium',
            'v5/shop-pdf-template-barot',
            'v5/shop-pdf-template-colossus',
          ]
        },
        {
          'type': 'category',
          'label': 'Invoice Templates',
          'items': [
            'v5/shop-pdf-template-invoice-classic',
            'v5/shop-pdf-template-invoice-modern',
            'v5/shop-pdf-template-invoice-aurora',
            'v5/shop-pdf-template-invoice-iconic'
          ]
        },
        {
          'type': 'category',
          'label': 'Letter Templates',
          'items': [
            'v5/shop-pdf-template-formal-letter',
            'v5/shop-pdf-template-business-letter-1',
            'v5/shop-pdf-template-business-letter-2'
          ]
        },
      ],
    },

    {
      type: 'category',
      label: 'Developers',
      items: [
        {
          'type': 'category',
          'label': 'Core Concepts',
          'items': [
            'v5/developer-start-customising',
            'v5/developer-first-custom-pdf',
            'v5/developer-mergetags-and-conditional-shortcodes',
            'v5/developer-php-form-data-array',
            'v5/developer-template-configuration-and-image',
            'v5/template-preview-image',
            'v5/install-template-via-template-manager',
            'v5/developer-template-hierarchy',
            'v5/development-helper-parameters',
          ],
          'collapsed': false,
        },
        {
          'type': 'category',
          'label': 'PDF Features',
          'items': [
            'v5/developer-supported-html-and-css',
            'v5/developer-headers-and-footers',
            'v5/developer-images',
            'v5/developer-watermarks',
            'v5/developer-backgrounds',
            'v5/developer-rounded-corners',
            'v5/developer-tables',
            'v5/developer-floats',
            'v5/developer-positioning',
            'v5/developer-pagebreaks',
          ]
        },
        {
          'type': 'category',
          'label': 'API',
          'items': [
            'v5/developer-api-whats-it-for',
            'v5/api_get_log_class',
            'v5/api_get_notice_class',
            'v5/get_data_class',
            'v5/api_get_options_class',
            'v5/api_get_misc_class',
            'v5/api_get_form_class',
            'v5/api_get_mvc_class',
            'v5/api_get_form_pdfs',
            'v5/api_get_pdf',
            'v5/api_add_pdf',
            'v5/api_update_pdf',
            'v5/api_delete_pdf',
            'v5/api_get_plugin_settings',
            'v5/api_get_plugin_option',
            'v5/api_add_plugin_option',
            'v5/api_update_plugin_option',
            'v5/api_delete_plugin_option',
            'v5/api_create_pdf',
            'v5/api_product_table',
            'v5/likert_table',
            'v5/api_get_pdf_fonts',
            'v5/api_add_pdf_font',
            'v5/delete_pdf_font',
            'v5/api_get_form_data'
          ]
        },
        {
          'type': 'category',
          'label': 'Filter Hooks',
          'items': [
            'v5/gfpdf_capabilities',
            'v5/gfpdf_container_disable_faux_columns',
            'v5/gfpdf_container_skip_fields',
            'v5/gfpdf_core_template_fields_list',
            'v5/gfpdf_current_pdf_configuration',
            'v5/gfpdf_disable_global_addon_data',
            'v5/gfpdf_disable_product_table',
            'v5/gfpdf_enable_master_password_field',
            'v5/gfpdf_field_class',
            'v5/gfpdf_field_html_value',
            'v5/gfpdf_field_label',
            'v5/gfpdf_field_middleware',
            'v5/gfpdf_field_section_break_html',
            'v5/gfpdf_field_value',
            'v5/gfpdf_font_location',
            'v5/gfpdf_form_add_pdf',
            'v5/gfpdf_form_data',
            'v5/gfpdf_form_data_key_order',
            'v5/gfpdf_form_settings',
            'v5/gfpdf_form_settings_advanced',
            'v5/gfpdf_form_settings_appearance',
            'v5/gfpdf_form_settings_sanitize',
            'v5/gfpdf_form_update_pdf',
            'v5/gfpdf_get_active_pdfs',
            'v5/gfpdf_get_option',
            'v5/gfpdf_get_pdf_display_list',
            'v5/gfpdf_get_settings',
            'v5/gfpdf_gf_noconflict_scripts',
            'v5/gfpdf_gf_noconflict_styles',
            'v5/gfpdf_gravityforms_shortcode_attributes',
            'v5/gfpdf_include_list_styles',
            'v5/gfpdf_include_product_styles',
            'v5/gfpdf_localised_script_array',
            'v5/gfpdf_maybe_attach_to_notification',
            'v5/gfpdf_mpdf_class',
            'v5/gfpdf_mpdf_init_class',
            'v5/gfpdf_mpdf_post_init_class',
            'v5/gfpdf_mpdf_tmp_location',
            'v5/gfpdf_multisite_template_location',
            'v5/gfpdf_multisite_template_location_uri',
            'v5/gfpdf_one_time_action_routes',
            'v5/gfpdf_override_pdf_bypass',
            'v5/gfpdf_pdf_actions',
            'v5/gfpdf_pdf_config',
            'v5/gfpdf_pdf_field_content',
            'v5/gfpdf_pdf_filename',
            'v5/gfpdf_pdf_html_output',
            'v5/gfpdf_pdf_list_columns',
            'v5/gfpdf_pdf_middleware',
            'v5/gfpdf_registered_fields',
            'v5/gfpdf_settings_general',
            'v5/gfpdf_settings_general_security',
            'v5/gfpdf_settings_sanitize',
            'v5/gfpdf_settings_tools',
            'v5/gfpdf_show_field_value',
            'v5/gfpdf_signature_width',
            'v5/gfpdf_template_args',
            'v5/gfpdf_template_location',
            'v5/gfpdf_template_location_uri',
            'v5/gfpdf_tmp_location',
            'v5/gfpdf_update_option',
            'v5/gfpdf_working_folder_name',
          ]
        },
        {
          'type': 'category',
          'label': 'Action Hooks',
          'items': [
            'v5/gfpdf_core_template',
            'v5/gfpdf_fully_loaded',
            'v5/gfpdf_pdf_list_column_id',
            'v5/gfpdf_plugin_installed',
            'v5/gfpdf_post_general_settings_page',
            'v5/gfpdf_post_generate_and_save_pdf',
            'v5/gfpdf_post_generate_and_save_pdf_notification',
            'v5/gfpdf_post_help_settings_page',
            'v5/gfpdf_post_html_fields',
            'v5/gfpdf_post_save_pdf',
            'v5/gfpdf_post_tools_settings_page',
            'v5/gfpdf_pre_generate_and_save_pdf',
            'v5/gfpdf_pre_generate_and_save_pdf_notification',
            'v5/gfpdf_pre_html_fields',
            'v5/gfpdf_pre_view_or_download_pdf',
            'v5/gfpdf_tool_tab_actions',
            'v5/gfpdf_version_changed',
          ]
        },

      ],
    },

  ],

  v6: [
    {
      type: 'category',
      label: 'Users',
      items: [
        {
          type: 'category',
          label: 'Getting Started',

          items: [
            'v6/users/five-minute-install',
            'v6/users/installation',
            'v6/users/core-pdf-fonts',
            'v6/users/global-settings',
            'v6/users/setup-pdf',
            'v6/users/viewing-pdfs',
            'v6/users/shortcodes',
            'v6/users/managing-pdfs',
            'v6/users/pdf-template-manager',
            'v6/users/custom-fonts',
          ],

          'collapsed': false,
        },

        {
          'type': 'category',
          'label': 'Under The Hood',
          'items': [
            'v6/users/pdf-security',
            'v6/users/hide-form-fields',
            'v6/users/adding-page-breaks',
            'v6/users/css-ready-classes',
            'v6/users/displaying-uploaded-images',
            'v6/users/background-processing',
            'v6/users/gravityview-support',
            'v6/users/gravity-flow-support',
            'v6/users/additional-templates',
            'v6/users/gdpr-and-gravity-pdf',
            'v6/users/gravity-forms-compatibility',
            'v6/users/v4-to-v5-migration',
          ]
        },

        {
          'type': 'category',
          'label': 'Common Problems',
          'items': [
            'v6/users/500-internal-server-error',
            'v6/users/white-screen-of-death',
            'v6/users/increasing-memory-limit',
            'v6/users/cannot-find-ttf-truetype-font-file',
            'v6/users/supported-pdf-viewers',
            'v6/users/activation-errors',
            'v6/users/email-notifications',
            'v6/users/generated-in-x-seconds',
            'v6/users/why-arent-columns-showing-in-pdf',
            'v6/users/weird-characters-showing-instead-of-pdf',
            'v6/users/pdf-menu-items-under-dashboard',
            'v6/users/no-gravity-form-entry-id-passed-to-gravity-pdf',
            'v6/users/how-to-display-the-nested-forms-table-shown-prior-to-v5-1',
            'v6/users/columns-in-nested-forms-do-not-work-in-the-pdf',
            'v6/users/setup_ids-depreciated-gravity-pdf-4-0',
            'v6/users/adjust-size-of-header-footer-images'
          ]
        },
      ]
    },

    {
      type: 'category',
      label: 'Extensions',
      items: [
        {
          'type': 'doc',
          'id': 'v6/extensions/installing-upgrading-extensions',
        },

        {
          'type': 'category',
          'label': 'Plugins',
          'items': [
            'v6/extensions/bulk-generator-add-on',
            'v6/extensions/core-booster-add-on',
            'v6/extensions/previewer-add-on',
            'v6/extensions/reports-for-gfchart-add-on',
            'v6/extensions/watermark-add-on',
          ],
          'collapsed': false,
        }
      ],
    },

    {
      type: 'category',
      label: 'Templates',
      items: [
        {
          'type': 'doc',
          'id': 'v6/templates/installing-upgrading-premium-templates',
        },

        {
          'type': 'category',
          'label': 'Universal Templates',
          'items': [
            'v6/templates/aryal',
            'v6/templates/leo',
            'v6/templates/formialt',
            'v6/templates/tritan',
            'v6/templates/sabre',
            'v6/templates/cellulose',
            'v6/templates/formium',
            'v6/templates/barot',
            'v6/templates/colossus',
          ]
        },
        {
          'type': 'category',
          'label': 'Invoice Templates',
          'items': [
            'v6/templates/invoice-classic',
            'v6/templates/invoice-modern',
            'v6/templates/invoice-aurora',
            'v6/templates/invoice-iconic'
          ]
        },
        {
          'type': 'category',
          'label': 'Letter Templates',
          'items': [
            'v6/templates/formal-letter',
            'v6/templates/business-letter-1',
            'v6/templates/business-letter-2'
          ]
        },
      ],
    },

    {
      type: 'category',
      label: 'Developers',
      items: [
        {
          'type': 'category',
          'label': 'Core Concepts',
          'items': [
            'v6/developers/start-customising',
            'v6/developers/first-custom-pdf',
            'v6/developers/mergetags-and-conditional-shortcodes',
            'v6/developers/php-form-data-array',
            'v6/developers/template-configuration-and-image',
            'v6/developers/template-preview-image',
            'v6/developers/install-template-via-template-manager',
            'v6/developers/template-hierarchy',
            'v6/developers/helper-parameters',
          ],
          'collapsed': false,
        },
        {
          'type': 'category',
          'label': 'PDF Features',
          'items': [
            'v6/developers/pdf-features/supported-html-and-css',
            'v6/developers/pdf-features/headers-and-footers',
            'v6/developers/pdf-features/images',
            'v6/developers/pdf-features/watermarks',
            'v6/developers/pdf-features/backgrounds',
            'v6/developers/pdf-features/rounded-corners',
            'v6/developers/pdf-features/tables',
            'v6/developers/pdf-features/floats',
            'v6/developers/pdf-features/positioning',
            'v6/developers/pdf-features/pagebreaks',
          ]
        },
        {
          'type': 'category',
          'label': 'API',
          'items': [
            'v6/developers/api/whats-it-for',
            'v6/developers/api/get_log_class',
            'v6/developers/api/get_notice_class',
            'v6/developers/api/get_data_class',
            'v6/developers/api/get_options_class',
            'v6/developers/api/get_misc_class',
            'v6/developers/api/get_form_class',
            'v6/developers/api/get_mvc_class',
            'v6/developers/api/get_form_pdfs',
            'v6/developers/api/get_pdf',
            'v6/developers/api/add_pdf',
            'v6/developers/api/update_pdf',
            'v6/developers/api/delete_pdf',
            'v6/developers/api/get_plugin_settings',
            'v6/developers/api/get_plugin_option',
            'v6/developers/api/add_plugin_option',
            'v6/developers/api/update_plugin_option',
            'v6/developers/api/delete_plugin_option',
            'v6/developers/api/create_pdf',
            'v6/developers/api/product_table',
            'v6/developers/api/likert_table',
            'v6/developers/api/get_pdf_fonts',
            'v6/developers/api/add_pdf_font',
            'v6/developers/api/delete_pdf_font',
            'v6/developers/api/get_form_data'
          ]
        },
        {
          'type': 'category',
          'label': 'Filter Hooks',
          'items': [
            'v6/developers/filters/gfpdf_capabilities',
            'v6/developers/filters/gfpdf_container_disable_faux_columns',
            'v6/developers/filters/gfpdf_container_skip_fields',
            'v6/developers/filters/gfpdf_core_template_fields_list',
            'v6/developers/filters/gfpdf_current_pdf_configuration',
            'v6/developers/filters/gfpdf_disable_global_addon_data',
            'v6/developers/filters/gfpdf_disable_product_table',
            'v6/developers/filters/gfpdf_enable_master_password_field',
            'v6/developers/filters/gfpdf_field_class',
            'v6/developers/filters/gfpdf_field_html_value',
            'v6/developers/filters/gfpdf_field_label',
            'v6/developers/filters/gfpdf_field_middleware',
            'v6/developers/filters/gfpdf_field_section_break_html',
            'v6/developers/filters/gfpdf_field_value',
            'v6/developers/filters/gfpdf_font_location',
            'v6/developers/filters/gfpdf_form_add_pdf',
            'v6/developers/filters/gfpdf_form_data',
            'v6/developers/filters/gfpdf_form_data_key_order',
            'v6/developers/filters/gfpdf_form_settings',
            'v6/developers/filters/gfpdf_form_settings_advanced',
            'v6/developers/filters/gfpdf_form_settings_appearance',
            'v6/developers/filters/gfpdf_form_settings_sanitize',
            'v6/developers/filters/gfpdf_form_update_pdf',
            'v6/developers/filters/gfpdf_get_active_pdfs',
            'v6/developers/filters/gfpdf_get_option',
            'v6/developers/filters/gfpdf_get_pdf_display_list',
            'v6/developers/filters/gfpdf_get_settings',
            'v6/developers/filters/gfpdf_gf_noconflict_scripts',
            'v6/developers/filters/gfpdf_gf_noconflict_styles',
            'v6/developers/filters/gfpdf_gravityforms_shortcode_attributes',
            'v6/developers/filters/gfpdf_include_list_styles',
            'v6/developers/filters/gfpdf_include_product_styles',
            'v6/developers/filters/gfpdf_localised_script_array',
            'v6/developers/filters/gfpdf_maybe_attach_to_notification',
            'v6/developers/filters/gfpdf_mpdf_class',
            'v6/developers/filters/gfpdf_mpdf_init_class',
            'v6/developers/filters/gfpdf_mpdf_post_init_class',
            'v6/developers/filters/gfpdf_mpdf_tmp_location',
            'v6/developers/filters/gfpdf_multisite_template_location',
            'v6/developers/filters/gfpdf_multisite_template_location_uri',
            'v6/developers/filters/gfpdf_one_time_action_routes',
            'v6/developers/filters/gfpdf_override_pdf_bypass',
            'v6/developers/filters/gfpdf_pdf_actions',
            'v6/developers/filters/gfpdf_pdf_config',
            'v6/developers/filters/gfpdf_pdf_field_content',
            'v6/developers/filters/gfpdf_pdf_filename',
            'v6/developers/filters/gfpdf_pdf_html_output',
            'v6/developers/filters/gfpdf_pdf_list_columns',
            'v6/developers/filters/gfpdf_pdf_middleware',
            'v6/developers/filters/gfpdf_registered_fields',
            'v6/developers/filters/gfpdf_settings_general',
            'v6/developers/filters/gfpdf_settings_general_security',
            'v6/developers/filters/gfpdf_settings_sanitize',
            'v6/developers/filters/gfpdf_settings_tools',
            'v6/developers/filters/gfpdf_show_field_value',
            'v6/developers/filters/gfpdf_signature_width',
            'v6/developers/filters/gfpdf_template_args',
            'v6/developers/filters/gfpdf_template_location',
            'v6/developers/filters/gfpdf_template_location_uri',
            'v6/developers/filters/gfpdf_tmp_location',
            'v6/developers/filters/gfpdf_update_option',
            'v6/developers/filters/gfpdf_working_folder_name',
          ]
        },
        {
          'type': 'category',
          'label': 'Action Hooks',
          'items': [
            'v6/developers/actions/gfpdf_core_template',
            'v6/developers/actions/gfpdf_fully_loaded',
            'v6/developers/actions/gfpdf_pdf_list_column_id',
            'v6/developers/actions/gfpdf_plugin_installed',
            'v6/developers/actions/gfpdf_post_general_settings_page',
            'v6/developers/actions/gfpdf_post_generate_and_save_pdf',
            'v6/developers/actions/gfpdf_post_generate_and_save_pdf_notification',
            'v6/developers/actions/gfpdf_post_help_settings_page',
            'v6/developers/actions/gfpdf_post_html_fields',
            'v6/developers/actions/gfpdf_post_save_pdf',
            'v6/developers/actions/gfpdf_post_tools_settings_page',
            'v6/developers/actions/gfpdf_pre_generate_and_save_pdf',
            'v6/developers/actions/gfpdf_pre_generate_and_save_pdf_notification',
            'v6/developers/actions/gfpdf_pre_html_fields',
            'v6/developers/actions/gfpdf_pre_view_or_download_pdf',
            'v6/developers/actions/gfpdf_tool_tab_actions',
            'v6/developers/actions/gfpdf_version_changed',
          ]
        },

      ],
    },

  ]
}
