import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-GB',

  title: 'Product documentation HCA 2.0',
  description: 'Documentation for Headless Configuration API 2.0',
  lastUpdated: true,
  cleanUrls: true,
  // srcDir: '../',
  srcExclude: ['**/node_modules'],

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
        text: 'CONTENT', link: '/components/',
      },
      {
        text: '1 Introduction', link: '/introduction/',
      },
      {
        text: '2 Glossary', link: '/glossary/',
        items: [
          {text: '2.1 Terms relating to the configuration infrastructure', link: '/glossary/terms-infrastructure/'},
          {text: '2.2 Terms relating to the configuration modelling', link: '/glossary/terms-modelling/'},
          {text: '2.3 Terms relating to the configuration state', link: '/glossary/terms-state/'}
        ]
      },
      {
        text: '3 The Usage Scenarios', link: '/usage-scenarios/',
        items: [
          {text: '3.1 Without Components', link: '/usage-scenarios/without-comp/'},
          {text: '3.2 With Components', link: '/usage-scenarios/with-comp/'}
        ]
      },
      {
        text: '4 The Configuration Models', link: '/configuration-models/',
        items: [
          {text: '4.1 Without Components', link: '/configuration-models/without-comp/'},
          {text: '4.2 With Components', link: '/configuration-models/with-comp/'}
        ]
      },
      {
        text: '5 The basic configuration workflow', link: '/basic-workflow/',
        items: [
          {text: '5.1 Overview', link: '/basic-workflow/overview/'},
          {text: '5.2 Initialization of the Configuration Dialogue', link: '/basic-workflow/initialization/'}
        ]
      },
      {
        text: '6 Exemplary Configuration Dialogues', link: '/exemplary-configuration-dialogues/',
        items: [
          {text: '6.1 Without Components', link: '/exemplary-configuration-dialogues/without-comp/'},
          {text: '6.2 With Components', link: '/exemplary-configuration-dialogues/with-comp/'},
          {text: '6.2.1 The Configuration Dialogue', link: '/exemplary-configuration-dialogues/with-comp/dialogue/'},
          {text: '6.2.2 The Rules of the Configuration Model', link: '/exemplary-configuration-dialogues/with-comp/rules/'},
          {text: '6.2.3 Consequences', link: '/exemplary-configuration-dialogues/with-comp/consequences/'}
        ]
      },
      {
        text: '7 Restore a Configuration State', link: '/restore/',
        items: [
          {text: '7.1 Without changes in the Configuration Model ', link: '/restore/without-changes/'},
          {text: '7.2 With changes in the Configuration Model', link: '/restore/with-changes/'},
          {text: '7.2.1 One Attribute Value has been removed or renamed', link: '/restore/with-changes/value-removed/'},
          {text: '7.2.2 One Attribute has been removed or renamed', link: '/restore/with-changes/attribute-removed/'},
          {text: '7.2.3 One Rule has been added', link: '/restore/with-changes/rule-added/'}
        ]
      },
      {
        text: '8 Explanations of Configuration States', link: '/explanation/',
        items: [
          {text: '8.1 Why is an Attribute not satisfied ', link: '/explanation/why-attribute-not-satisfied/'},
          {text: '8.2 Why is the Configuration Model not satisfied ', link: '/explanation/why-configuration-not-satisfied/'},
          {text: '8.3 Why is a State not possible', link: '/explanation/why-state-not-possible/'}
        ]
      },
      {
        text: '9 Integration into an application to obtain a Configurator', link: '/integration/',
      },
      {
        text: '10 No-Code Configurator Apps', link: '/no-code/',
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
});
