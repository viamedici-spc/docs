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
            {text: 'White Paper SPC platform', link: '/documentations/whitepaper-spc/', collapsed: true,
              items: [
                {text: '1 Introduction', link: '/documentations/whitepaper-spc/wp-introduction'},
                {text: '2 Challenges of traditional systems', link: '/documentations/whitepaper-spc/wp-challenges/'},
                {text: '3 Executive Summary', link: '/documentations/whitepaper-spc/wp-exsummary/'},
                {
                  text: '4 The SCP platform', link: '/documentations/whitepaper-spc/wp-platform-details/', collapsed: true,
                  items: [
                    {text: '4.1 Main components', link: '/documentations/whitepaper-spc/wp-platform-details/main-comp/'},
                    {text: '4.2 Two Key Aspects', link: '/documentations/whitepaper-spc/wp-platform-details/key-aspects/'}
                  ]
                },
                {
                  text: '5 Architectures', link: '/documentations/whitepaper-spc/wp-architectures/', collapsed: true,
                  items: [
                    {text: '5.1 Platform architecture', link: '/documentations/whitepaper-spc/wp-architectures/platform/'},
                    {text: '5.2 Solution architecture', link: '/documentations/whitepaper-spc/wp-architectures/solution/'},
                    {text: '5.3 Integration', link: '/documentations/whitepaper-spc/wp-architectures/integration/'}
                  ]
                },
                {
                  text: '6 Features', link: '/documentations/whitepaper-spc/wp-features/', collapsed: true,
                  items: [
                    {text: '6.1 Configurator-Apps', link: '/documentations/whitepaper-spc/wp-features/apps/'},
                    {text: '6.2 The specialized IDE', link: '/documentations/whitepaper-spc/wp-features/cmd/'},
                    {text: '6.3 Configuration Engine', link: '/documentations/whitepaper-spc/wp-features/engine/'},
                    {text: '6.4 USP´s', link: '/documentations/whitepaper-spc/wp-features/usps/'}
                  ]
                },
                {
                  text: '7 Advantages / Benefits', link: '/documentations/whitepaper-spc/wp-advantages/', collapsed: true,
                  items: [
                    {text: '7.1 ... of the Paradigm', link: '/documentations/whitepaper-spc/wp-advantages/paradigm/'},
                    {text: '7.2 ... of the Architecture', link: '/documentations/whitepaper-spc/wp-advantages/architecture/'},
                    {text: '7.3 ... of the Engine', link: '/documentations/whitepaper-spc/wp-advantages/engine/'},
                    {text: '7.4 ... of the IDE', link: '/documentations/whitepaper-spc/wp-advantages/cmd/'},
                    {text: '7.5 ... of the Apps', link: '/documentations/whitepaper-spc/wp-advantages/apps/'},
                    {text: '7.6 Sample ROI Calc.', link: '/documentations/whitepaper-spc/wp-advantages/roi/'}
                  ]
                },
                {
                  text: '8 Business Cases', link: '/documentations/whitepaper-spc/wp-cases/', collapsed: true,
                  items: [
                    {text: '8.1 Business Case 1: Gold Mining', link: '/documentations/whitepaper-spc/wp-cases/case1/'},
                    {text: '8.2 Business Case 2: Filling the Piggy Bank', link: '/documentations/whitepaper-spc/wp-cases/case2/'},
                    {text: '8.3 Business Case 3: Switching Horses', link: '/documentations/whitepaper-spc/wp-cases/case3/'}
                  ]
                },
                {
                  text: '9 Implementation', link: '/documentations/whitepaper-spc/wp-implementation/', collapsed: true,
                  items: [
                    {text: '9.1 Implementation steps', link: '/documentations/whitepaper-spc/wp-implementation/steps/'},
                    {text: '9.2 Resources', link: '/documentations/whitepaper-spc/wp-implementation/resources/'},
                    {text: '9.3 Training', link: '/documentations/whitepaper-spc/wp-implementation/training/'},
                    {text: '9.4 Change management', link: '/documentations/whitepaper-spc/wp-implementation/measures/'}
                  ]
                },
                {
                  text: '10 Security / Data Privacy', link: '/documentations/whitepaper-spc/wp-security/',
                },
                {
                  text: '11 Summary', link: '/documentations/whitepaper-spc/wp-summary/',
                },
                {
                  text: '12 Conclusion', link: '/documentations/whitepaper-spc/wp-conclusion/',
                },
                {
                  text: 'Expanded concept SP', link: '/documentations/whitepaper-spc/SPC_ExpandedConcept/',
                }
              ]
            },
            {text: 'Configuration Modeling', link: '/documentations/modeling-guide/', collapsed: true,
              items: [
                {text: '1 Introduction', link: '/documentations/modeling-guide/mg-introduction', collapsed: true},
                {text: '2 Basic Concepts', link: '/documentations/modeling-guide/mg-concepts/', collapsed: true,
                  items: [
                    {text: '2.1 What is product configuration?', link: '/documentations/modeling-guide/mg-concepts/whats-pc/'},
                    {text: '2.2 What is a configurator?', link: '/documentations/modeling-guide/mg-concepts/whats-con/'},
                    {text: '2.3 What is a configuration model?', link: '/documentations/modeling-guide/mg-concepts/whats-mod/'},
                    {text: '2.4 Why isn\'t a simple list of options enough?', link: '/documentations/modeling-guide/mg-concepts/why-not-enough/'},
                    {text: '2.5 What is a configuration rule?', link: '/documentations/modeling-guide/mg-concepts/whats-rule/'},
                    {text: '2.6 What is a valid configuration?', link: '/documentations/modeling-guide/mg-concepts/whats-valid-conf/'},
                    {text: '2.7 What should a configuration model accomplish?', link: '/documentations/modeling-guide/mg-concepts/what-accomplish/'}
                  ]
                },
                {text: '3 Fundamentals of the CSP', link: '/documentations/modeling-guide/mg-csp/', collapsed: true,
                  items: [
                    {text: '3.1 Product Configuration as a Constraint Satisfaction Problem', link: '/documentations/modeling-guide/mg-csp/pc-as-csp/'},
                    {text: '3.2 The elements of a CSP', link: '/documentations/modeling-guide/mg-csp/csp-elements/'},
                    {text: '3.3 The solution of a CSP', link: '/documentations/modeling-guide/mg-csp/csp-solution/'},
                    {text: '3.4 What does a CSP Solver do?', link: '/documentations/modeling-guide/mg-csp/csp-solver/'},
                    {text: '3.5 Direct and Indirect Effects', link: '/documentations/modeling-guide/mg-csp/effects/'},
                    {text: '3.6 Why are Constraints better than manual verification?', link: '/documentations/modeling-guide/mg-csp/why-constraints-better/'},
                    {text: '3.7 What does “satisfy all rules simultaneously” mean?', link: '/documentations/modeling-guide/mg-csp/satisfy-all-rules/'},
                    {text: '3.8 CSP from two perspectives', link: '/documentations/modeling-guide/mg-csp/csp-perspectives/'},
                    {text: '3.9 Summary', link: '/documentations/modeling-guide/mg-csp/summary/'}
                  ]
                },
                {text: '4 Model Structure of the Automotive Example', link: '/documentations/modeling-guide/mg-examplemodel/', collapsed: true,
                  items: [
                    {text: '4.1 Overview of the Model Structure', link: '/documentations/modeling-guide/mg-examplemodel/overview/'},
                    {text: '4.2 Submodels and Attributes', link: '/documentations/modeling-guide/mg-examplemodel/submodels/'},
                    {text: '4.3 Modeling Principles in the Tutorial Example', link: '/documentations/modeling-guide/mg-examplemodel/modeling-principles/'}                  ]
                }
              ]
            }
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
