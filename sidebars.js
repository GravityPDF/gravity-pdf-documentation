module.exports = {
  v3: {
    Installation: [
      'v3/installation-requirements',
      'v3/installation-requirements2',
      'v3/installation-requirements3',
    ],
  },

  v4: {

  },

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

  ]

}
