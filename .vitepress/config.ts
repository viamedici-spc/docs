import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid(
  defineConfig({
    lang: 'en-GB',

    title: 'SPC Documentation',
    description: 'Documentation for the SPC Configuration Platform',
    lastUpdated: true,
    cleanUrls: true,
    // srcDir: '../',
    srcExclude: ['**/node_modules'],

    base: '/', // vitepress does no to support relative path here https://vitepress.dev/reference/site-config#base
    outDir: 'dist',

    themeConfig: {
      search: {
        provider: 'local'
      },
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        {text: 'Home', link: '/'},
        // { text: 'Introduction', link: '/introduction/' }
      ],

      sidebar: [
        {
          text: 'CONTENT', link: '/documentations/',
          items: [
            {text: 'Documentation HCA 2.0', link: '/documentations/docu-hca/',
              collapsed: true,
              items: [
                {text: '1 Introduction', link: '/documentations/docu-hca/introduction/'},
                {
                  text: '2 Glossary', link: '/documentations/docu-hca/glossary/',collapsed: true,
                  items: [
                    {text: '2.1 Configuration Infrastructure', link: '/documentations/docu-hca/glossary/terms-infrastructure/'},
                    {text: '2.2 Configuration Modeling', link: '/documentations/docu-hca/glossary/terms-modeling/'},
                    {text: '2.3 Configuration State', link: '/documentations/docu-hca/glossary/terms-state/'}
                  ]
                },
                {
                  text: '3 The Usage Scenarios', link: '/documentations/docu-hca/usage-scenarios/', collapsed: true,
                  items: [
                    {text: '3.1 Without Components', link: '/documentations/docu-hca/usage-scenarios/without-comp/'},
                    {text: '3.2 With Components', link: '/documentations/docu-hca/usage-scenarios/with-comp/'}
                  ]
                },
                {
                  text: '4 The Configuration Models', link: '/documentations/docu-hca/configuration-models/', collapsed: true,
                  items: [
                    {text: '4.1 Without Components', link: '/documentations/docu-hca/configuration-models/without-comp/'},
                    {text: '4.2 With Components', link: '/documentations/docu-hca/configuration-models/with-comp/'}
                  ]
                },
                {
                  text: '5 The basic configuration workflow', link: '/documentations/docu-hca/basic-workflow/', collapsed: true,
                  items: [
                    {text: '5.1 Overview', link: '/documentations/docu-hca/basic-workflow/overview/'},
                    {text: '5.2 Initialization of the Configuration Dialogue', link: '/documentations/docu-hca/basic-workflow/initialization/'}
                  ]
                },
                {
                  text: '6 Exemplary Configuration Dialogues', link: '/documentations/docu-hca/exemplary-configuration-dialogues/', collapsed: true,
                  items: [
                    {text: '6.1 Without Components', link: '/documentations/docu-hca/exemplary-configuration-dialogues/without-comp/'},
                    {text: '6.2 With Components', link: '/documentations/docu-hca/exemplary-configuration-dialogues/with-comp/'},
                    {text: '6.2.1 The Configuration Dialogue', link: '/documentations/docu-hca/exemplary-configuration-dialogues/with-comp/dialogue/'},
                    {text: '6.2.2 The Rules of the Configuration Model', link: '/documentations/docu-hca/exemplary-configuration-dialogues/with-comp/rules/'},
                    {text: '6.2.3 Consequences', link: '/documentations/docu-hca/exemplary-configuration-dialogues/with-comp/consequences/'}
                  ]
                },
                {
                  text: '7 Restore a Configuration State', link: '/documentations/docu-hca/restore/', collapsed: true,
                  items: [
                    {text: '7.1 Without changes in the Configuration Model ', link: '/documentations/docu-hca/restore/without-changes/'},
                    {text: '7.2 With changes in the Configuration Model', link: '/documentations/docu-hca/restore/with-changes/'},
                    {text: '7.2.1 One Attribute Value has been removed or renamed', link: '/documentations/docu-hca/restore/with-changes/value-removed/'},
                    {text: '7.2.2 One Attribute has been removed or renamed', link: '/documentations/docu-hca/restore/with-changes/attribute-removed/'},
                    {text: '7.2.3 One Rule has been added', link: '/documentations/docu-hca/restore/with-changes/rule-added/'}
                  ]
                },
                {
                  text: '8 Explanations of Configuration States', link: '/documentations/docu-hca/explanation/', collapsed: true,
                  items: [
                    {text: '8.1 Why an Attribute is not satisfied ', link: '/documentations/docu-hca/explanation/why-attribute-not-satisfied/'},
                    {text: '8.2 Why the Configuration Model is not satisfied ', link: '/documentations/docu-hca/explanation/why-configuration-not-satisfied/'},
                    {text: '8.3 Why a State is not possible', link: '/documentations/docu-hca/explanation/why-state-not-possible/'}
                  ]
                },
                {
                  text: '9 Integration into an application to obtain a Configurator', link: '/documentations/docu-hca/integration/',
                },
                {
                  text: '10 No-Code Configurator Apps', link: '/documentations/docu-hca/no-code/',
                }
              ]
            },
            {text: 'White Paper SPC platform', link: '/documentations/whitepaper-spc/',
              collapsed: true,
              items: [
                {text: '1 Introduction', link: '/documentations/whitepaper-spc/wp-introduction'},
                {text: '2 Challenges of traditional systems', link: '/documentations/whitepaper-spc/wp-challenges/'},
                {text: '3 Executive Summary', link: '/documentations/whitepaper-spc/wp-exsummary/'},
                {text: '4 The SCP platform in detail', link: '/documentations/whitepaper-spc/wp-platform-details/'},
                {
                  text: '5 The basic configuration workflow', link: '/basic-workflow/', collapsed: true,
                  items: [
                    {text: '5.1 Overview', link: '/basic-workflow/overview/'},
                    {text: '5.2 Initialization of the Configuration Dialogue', link: '/basic-workflow/initialization/'}
                  ]
                },
                {
                  text: '6 Exemplary Configuration Dialogues', link: '/exemplary-configuration-dialogues/', collapsed: true,
                  items: [
                    {text: '6.1 Without Components', link: '/exemplary-configuration-dialogues/without-comp/'},
                    {text: '6.2 With Components', link: '/exemplary-configuration-dialogues/with-comp/'},
                    {text: '6.2.1 The Configuration Dialogue', link: '/exemplary-configuration-dialogues/with-comp/dialogue/'},
                    {text: '6.2.2 The Rules of the Configuration Model', link: '/exemplary-configuration-dialogues/with-comp/rules/'},
                    {text: '6.2.3 Consequences', link: '/exemplary-configuration-dialogues/with-comp/consequences/'}
                  ]
                },
                {
                  text: '7 Restore a Configuration State', link: '/restore/', collapsed: true,
                  items: [
                    {text: '7.1 Without changes in the Configuration Model ', link: '/restore/without-changes/'},
                    {text: '7.2 With changes in the Configuration Model', link: '/restore/with-changes/'},
                    {text: '7.2.1 One Attribute Value has been removed or renamed', link: '/restore/with-changes/value-removed/'},
                    {text: '7.2.2 One Attribute has been removed or renamed', link: '/restore/with-changes/attribute-removed/'},
                    {text: '7.2.3 One Rule has been added', link: '/restore/with-changes/rule-added/'}
                  ]
                },
                {
                  text: '8 Explanations of Configuration States', link: '/explanation/', collapsed: true,
                  items: [
                    {text: '8.1 Why an Attribute is not satisfied ', link: '/explanation/why-attribute-not-satisfied/'},
                    {text: '8.2 Why the Configuration Model is not satisfied ', link: '/explanation/why-configuration-not-satisfied/'},
                    {text: '8.3 Why a State is not possible', link: '/explanation/why-state-not-possible/'}
                  ]
                },
                {
                  text: '9 Integration into an application to obtain a Configurator', link: '/integration/',
                },
                {
                  text: '10 No-Code Configurator Apps', link: '/no-code/',
                }
              ]
            },
            {text: 'Configuration Modeling Guide', link: '/documentations/modeling-guide/'}
          ]
        }
      ],
      socialLinks: [
        {icon: 'github', link: 'https://git.ceventis.de/viamedici/spc/engine/hca-documentation.git'}
      ],
      footer: {
        copyright: `Copyright © 2024-${new Date().getFullYear()}`
      }
    },
    rewrites: {
      'Readme.md': 'index.md',
      // Infrastructure
      'deploy/kustomize/infrastructure/Readme.md': 'infrastructure/index.md',
      'deploy/kustomize/infrastructure/:pkg/(.*)': 'infrastructure/:pkg/index.md',
      // # Components
      'deploy/kustomize/components/Readme.md': 'components/index.md'
    }
  })
);
