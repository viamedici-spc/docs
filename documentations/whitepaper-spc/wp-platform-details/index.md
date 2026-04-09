# 4 The SCP platform in detail

Following on from the summary of the key architectural principles and
business benefits in the previous chapter, this chapter describes the
SCP platform in detail. It explains the technical components, how they
interact, and the mechanisms that ensure scalability, security and
flexibility.

In order to understand the approach pursued by the SPC platform, it is
necessary to consider it from different perspectives and at different
levels of detail.

## 4.1 Main components of the SPC Platform

The following figure shows a greatly simplified diagram of the SPC
Platform:

![](../media/MainComponentsSimplified.png "Main Components Simplified")
Figure 4.1: Highly simplified diagram of the main components of the SPC
Platform

Two overarching aspects relate to the platform components: the
development paradigm and the governance of component access.

### Development paradigm

The SPC Platform is based on the MACH paradigm, a modern architectural
concept for software applications. It stands for:

**Microservices:** Applications consist of independent, modular services
that can be developed, deployed, and scaled individually based on
specific functions.

**API-first:** All components communicate via APIs, which increases
interoperability and flexibility.

**Cloud-native:** The architecture is optimized for cloud environments,
enabling scalability and reduced infrastructure costs.

**Headless:** The front end is decoupled from the back end, enabling
flexible user interfaces and better adaptability across various channels
(web, mobile, IoT).

The MACH paradigm promotes agility, scalability, and innovation speed in
software development and enables the development of reliable,
high-quality software.

### Access Control and Identity Management

With regard to **access control**, the software modules of the SPC Platform
support a secure and interoperable Identity and Access Management (IAM)
that is flexible, scalable, and compliant with common security
standards.\
Fundamentally, the platform supports standard authentication protocols
such as OAuth 2.0, OpenID Connect (OIDC), and SAML (Security Assertion
Markup Language), enabling secure authentication and authorization.
These standards provide Single Sign-On (SSO) capabilities and simplify
integration with other enterprise systems.\
Access to the central creation and maintenance component, the Configuration
Model Developer, is managed via OpenID, while access to
the Configuration Engine is controlled through access tokens.

The **Data Backend** component of the SPC Platform is responsible for
managing and providing configuration attributes and Rules. In addition,
configuration-related data such as pricing information, multilingual
texts, and images must also be made available.

In Viamedici’s product configuration solutions, the Product Information
Management System EPIM serves as the standard Data Backend. Other data
storage systems used to manage configuration-relevant data and digital
assets can be integrated through appropriate interfaces.

### Creation and Maintenance Components
The central creation and maintenance component is the Configuration Model Developer by Viamedici, which is used
primarily to define and maintain configuration Rules.\
Additional components in this area include specialized frontend libraries and a UI Kit for the web design tool
**Framer**. Both simplify the development of product configuration frontends and support the creation of
so-called no-code frontends.

### Configuration Engine
TheConfiguration Engine is the core of every Viamedici configuration solution. The result of years of development and
optimization, it processes Configuration Models at exceptional speed while maintaining a non-blocking operational
state at all times.

### Communication via REST Interfaces

Both external and internal communications are implemented through **REST interfaces**.

- **External communication** refers to interactions between configuration
  frontends and backends, i.e., outside the platform components.

- **Internal communication** takes place between the components of the
  platform itself, as illustrated in Figure 4.1 (see above).

## 4.2 The Two Key Aspects of a Product Configuration System

![](../media/RuntimeAndMaintenanceSystems1.png "Overview Runtime and Maintenance Systems")

Figure 4.2: Processing and Maintenance of a Configuration Model

The logical foundation of a Viamedici configuration solution is
the Configuration Model, referred to simply as the Model.\
Such a model consists of attributes, which represent the properties of
products, and Rules and Constraints, which define the set of valid
configurations.

Instead of defining every possible combination explicitly — as in a
declarative approach — this Model specifies general Rules that ensure
the validity of configurations.\
A product configurator automatically verifies whether a configuration is
valid by evaluating the Rules and Constraints defined in the model.
Users are guided only through valid options, eliminating the need to
predefine every possible combination.

Within a specific Configuration Model, the combinatorial structure of a
complex product or an entire product line is represented.\
In product configuration runtime systems commonly referred to
as „product configurators“, or shortly as „configurators“, such a model
is executed.\
Functionally specialized configurators can be provided for different
stakeholders, as illustrated in Figure 4.2 above on the left side.

A model-based approach to product configuration offers multiple
advantages, particularly for complex, highly variant products:

- **Reduced maintenance effort:**\
  Because product changes or new options can be implemented directly
  through modifications to the Configuration Model, this approach saves
  time and costs in the long term.

- **Increased flexibility and adaptability:**\
  A Configuration Model can be quickly adapted to new requirements or
  product changes — an essential benefit when products are frequently
  updated or extended.

- **Enhanced usability:**\
  Automatic validity checking minimizes user errors and significantly
  simplifies the configuration process.

- **Reusability:**\
  A well-designed Configuration Model can be applied to similar products
  or variants, simplifying the development and maintenance of additional
  configurators.

A Configuration Model must be maintained, updated, and extended over
time.\
This Configuration Model Maintenance — shown on the right side of Figure
4.2 — encompasses three primary areas:

1.  **Maintenance of Product Structures:\**
    Product structures (hierarchical or network-based) are more than
    just an organizational representation.\
    Within a Viamedici configuration solution, configuration Rules can
    be automatically derived from product structures — a unique
    capability.\
    Maintaining structures therefore inherently involves maintaining
    part of the Rule set.

2.  **Management of Configuration-Relevant Attributes:**\
    Configuration-related product attributes are preferably created and
    maintained in a Product Information Management (PIM) system.\
    Viamedici’s EPIM offers seamless integration for this purpose, while
    other data management systems — even simple Excel-based sources —
    can be connected via standard interfaces.

3.  **Rule Definition and Maintenance:**\
    Rules that cannot be automatically generated are created and
    maintained using Viamedici’s intuitive Rule Editor, which provides a
    comfortable environment for defining complex logic.

Runtime System und Maintenance System

In a runtime system for product configuration, the Configuration Model
processing takes place — see Figure 4.2, left-hand side. It basically
consists of one or more frontends and a backend based on components of
the SPC platform.

The frontends represent the configurator applications (configurators)
that are used by various stakeholders: end customers, external sales,
internal sales, and production planning. Based on a common Rule set, the
level of detail of the configuration-relevant product information can be
controlled for each user group. End customers, for example, would be
overwhelmed by the detailed information required by internal sales.

Any type of web application that communicates with the Configuration
Backend via REST can serve as a Configuration Frontend. If one of
Viamedici’s frontend libraries is used when developing the frontend, the
REST interface is completely encapsulated. This makes a so-called
no-code frontend possible. Specifically for this purpose — the creation
of configurator no-code frontends — the “Configurator UIKit” was
developed for the “Framer” web design tool.

![](../media/MainComponetsRunTimeSystem.png "Main Components Runtime System")

Figure 4.3: Main components of a runtime system for product configuration based on
SPC platform

The components of the SPC platform used to implement configuration
backends are REST interfaces and microservices that communicate with
each other according to the actor paradigm.

The diagram in Figure 4.3 shows the two services that are central to
configuration: Configuration Engine and Configuration Model Deployment
Store. The [*Configuration Engine*](../../docu-hca/glossary/terms-infrastructure/#configuration-engine) searches the
possible attribute values and checks whether the Rules and Constraints
are satisfied. As a result, it returns a valid configuration (product
variant). The Configuration Model Deployment Store provides the released
Configuration Models for processing by the Configuration Engine.

Viamedici’s product configuration solutions have the following unique
selling points:

- Absolute fail-safety through microservices in combination with the
  cloud

- Extremely short response times as a result of an innovative
  Configuration Engine

- High flexibility and scalability due to the model- and
  Constraint-based approach

- Outstanding user experience of the configurator applications, among
  other things because invalid or impermissible combinations are
  excluded

- Easy maintainability, as only adjustments to the models are usually
  required.

From the very beginning, Viamedici was aware that the maintainability of
a product configuration system is a key factor in terms of long-term
effort and cost. The maintenance tools were therefore developed with
great care and foresight.

Figure 4.4 schematically shows the structure of a maintenance system for
the management and maintenance of configuration data.

First, the attributes and their values must be reviewed and updated on a
regular basis to ensure accuracy and relevance. Errors must be
corrected, outdated data removed, and new data added. For this purpose,
a user interface for attribute maintenance is used, which accesses a
data store for attributes and their values. Within SPC, the
corresponding area in EPIM is used for this by default. Any other
application for data management and maintenance can be integrated as
well, up to and including Excel spreadsheets (which indeed occurs in
practice).

A different tool is required for the maintenance and management of
configuration Rules. Here too, several options would be conceivable.
Viamedici, however, uses exclusively the specially developed
Configuration Model Developer tool — and for good reasons. The tool
offers a unique level of usability (user experience), enabling extremely
efficient work. Modified or new Rules are validated at runtime in the
context of the complete Rule set and can then be made available for
release immediately.

![](media/MainComponetsMaintenanceSystem.png "Main Components Maintenance System")

Figure 4.4: Main components of a care and maintenance system for
product configuration based on SPC platform
