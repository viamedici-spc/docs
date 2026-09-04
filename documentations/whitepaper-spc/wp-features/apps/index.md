## 6.1 Configurator Applications (Configurator-Apps)
Configurator-Apps can be implemented using any web technologies.

For the design and prototyping software “Framer,” which strongly focuses
on interactive and responsive web designs, Viamedici provides the
Configurator UI Kit. It includes specially developed,
configuration-specific controls. These enable designers to create
Configurator-Apps without programming knowledge, while also giving
developers the ability to add custom code.

Configurator-Apps built using the **Configurator UI Kit** stand out for
their exceptional user experience. The visualization of configuration
functions can be tailored to specific target groups in a variety of
ways.

To support this, the **Configurator UI Kit** provides various controls
(React components) specifically developed for web-based product
configuration applications using the “Framer” web design tool in
combination with the Viamedici REST APIs. The UI Kit uses the
**Configurator React Library** (see below).

A range of ready-to-use React components is provided, covering most
typical configurator UI scenarios — for example, a toggle switch and a
checkbox for Boolean attributes, or a dropdown list for selection
attributes. They can be customized in color and size to match the
respective corporate identity.

The base components (basic controls) can be combined to create fully
customized components, providing even more flexibility for UI design.

The UI Kit components enable easy access to the functions of the
[*Configuration Engine*](../../../docu-hca/glossary/terms-infrastructure/#configuration-engine), including more advanced functions such as
“Explain” or “Implicit Selection” (see the section Configuration Engine
below).

These special, unique functions are handled and visualized accordingly,
giving users deeper insight into the relationships and dependencies
within their product configuration.

### configurator-ts

The configurator-ts library includes functions that make building a
Configurator-App very easy.

#### Session Management

The Configuration Engine works with [*Configuration Sessions*](../../../docu-hca/glossary/terms-infrastructure/#configuration-session), meaning that
such a session must be created before starting a [*Configuration Dialogue*](../../../docu-hca/glossary/terms-infrastructure/#configuration-dialogue).

The configurator-ts library includes built-in session management that
automatically handles the session lifecycle and ensures a seamless user
experience. For example, if the Configuration Engine ends a session due
to user inactivity, a new session is automatically initiated as soon as
the user resumes activity. The previous [*Configuration State*](../../../docu-hca/glossary/terms-state/#configuration-state) is fully
restored before the next user action is executed.

#### Optimistic Decisions

[*Configuration Decisions*](../../../docu-hca/glossary/terms-state/#decision) — such as “value selected” or “value not
selected”—are applied optimistically to the configuration state, which
significantly improves the perceived responsiveness of the Configurator
Application and the overall user experience.

When a user selects a value, the Configuration State immediately
reflects this selection as an explicit inclusion. The UI component — for
example, a toggle button or a dropdown menu — visually shows the user’s
selection right away. Once the [*Configuration Engine*](../../../docu-hca/glossary/terms-infrastructure/#configuration-engine) has fully processed
the configuration decision, the resulting [*Consequences*](../../../docu-hca/glossary/terms-state/#consequence) are applied
asynchronously to the Configuration State. Depending on what those
Consequences are, this can also affect other UI components, which then
immediately display the final state as well.

#### Apply a Conflict Resolution

When the Configuration Engine detects and explains a [*Configuration
Conflict*](../../../docu-hca/glossary/terms-state/#conflict), the functions in **configurator-ts** make it easier to apply the
proposed [*Conflict Resolution*](../../../docu-hca/glossary/terms-state/#conflict-resolution) selected by the user.

#### Save / Restore Configuration

A versioned data format with backward compatibility is provided for
saving and restoring the Configuration State.

### configurator-react

This library uses **configurator-ts** as its base library. It includes
additional React-specific functions that make building a
Configurator-App even easier.
