# Introduction – The Need for a New Approach

For decades, product configuration systems have been a critical enabler
of complex product offerings — yet many of them remain trapped in legacy
architectures and outdated user experiences. As organizations strive for
agility and digital scalability, traditional configurators are
increasingly unable to keep pace with business and customer demands.

Today’s enterprises need configuration platforms that are not only
technically advanced but also adaptable, user-friendly, and fast. They
must empower both product managers and configuration experts to innovate
without dependency on IT specialists.

This White Paper presents a new generation of product configuration
platform — built on microservices, enhanced by no-code frontend
capabilities, seamlessly integrated via REST, and powered by artificial
intelligence. The result: a modular, cloud-ready system that redefines
speed, scalability, and usability in the configuration domain.

The complexity and relevance of the tasks involved in setting up a
configuration solution are presented in detail.

Various use cases are described, the software functions are explained,
and cost and benefit aspects are made transparent.

The white paper can be read with benefit by both technicians and
managers.

# Challenges of Traditional Systems

**The Limitations of Legacy Configurators**

Traditional product configuration systems were designed for stability
and rule consistency — not for agility or scalability. Over time, their
monolithic architectures have become bottlenecks for innovation and
speed. While they continue to manage complex configuration logic
effectively, they fall short in enabling modern digital workflows and
seamless integration.

**The key challenges include:**

1.  **Monolithic Architectures**\
    Legacy systems are hard to scale, difficult to update, and
    inflexible when introducing new features or product lines.

2.  **Limited Integration Capabilities**\
    Rigid APIs or proprietary interfaces make it hard to connect
    configurators with CRM, ERP, and e-commerce platforms.

3.  **Slow Development Cycles**\
    Even small UI changes often require full development and deployment
    cycles, slowing down time-to-market.

4.  **Lack of Usability and Modern UX**\
    Many tools still rely on outdated interfaces that require specialist
    knowledge, hindering adoption and efficiency.

5.  **Absence of Intelligent Assistance**\
    Configuration rules are maintained manually, and end-users receive
    no AI-driven guidance or optimization support.

These limitations lead to higher operational costs, slower innovation,
and missed opportunities in digital sales and customer service.

In a nutshell:

|               | **Legacy Configurator**       | **Next-Gen Platform**       |
|---------------|-------------------------------|-----------------------------|
| Architecture  | Monolithic, static            | Modular Microservices       |
| Frontend      | Developer-dependent           | No-code, customizable       |
| Integration   | Proprietary connektors        | REST / API-first            |
| Performance   | Slow response, scaling limits | High-speed, elastic scaling |
| AI Assistence | None                          | Embedded in modeling & UX   |
| Deployment    | On-premise, manual            | Cloud-native, automated     |

# Executive Summary

**Rethinking Product Configuration –\
Faster, Smarter, Scalable**

In many organizations, traditional configurators have become essential
yet limiting components of the IT ecosystem. Built on monolithic
architectures, they are difficult to integrate, slow to adapt, and
costly to maintain — resulting in delayed innovation and long release
cycles.

The SPC Platform (Smart Product Configuration) was designed from the
ground up to address these challenges. It
combines microservices**, **no-code frontends**, **REST-based
integration, and AI assistance in a unified, cloud-ready environment.

**The Next Generation Platform Architecture**

From Monotiths to Modular Intelligence

The new generation of product configuration platforms is designed around
flexibility, modularity, and intelligence — enabling organizations to
innovate faster and scale effortlessly.

At its core lies a microservices-based architecture, where independent
services handle specific functions such as rule processing, data
management, pricing, or UI delivery. This separation allows each
component to evolve independently, ensuring rapid updates and fault
tolerance.

A no-code frontend layer empowers product teams to design and customize
configuration experiences without writing code. Drag-and-drop
components, and adaptive layouts accelerate development and reduce
dependency on IT specialists.

The platform’s REST-based integration framework ensures seamless
connectivity with CRM, ERP, PIM, and e-commerce systems. Every module
communicates through standardized APIs, supporting both on-premise and
cloud environments.

Artificial Intelligence plays a dual role: it supports modeling by
suggesting configuration rules or detecting inconsistencies, and it
enhances user interaction by providing guided selling, and predictive
recommendations.

This architecture unites speed, scalability, and intelligence —
redefining how enterprises model, maintain, and deliver configurable
products.

This results in a quantifiable business impact: shorter release cycles,
lower total cost of ownership (TCO), improved user satisfaction, and a
foundation for continuous innovation in digital product management.

**Key Benefits and Business Impact**

Transforming Configuration into a Competitive Advantage

The next-generation platform transforms product configuration from a
technical necessity into a strategic differentiator. By combining
modular architecture, no-code flexibility, and AI-driven intelligence,
it delivers measurable improvements across performance, cost, and
innovation speed.

#### **1. Accelerated Time-to-Market**

Microservices and no-code frontends drastically reduce development
cycles. New product configurations can be deployed in hours instead of
weeks — empowering teams to respond instantly to market changes.

#### **2. Scalable by Design**

The platform scales elastically across cloud environments. Whether
handling thousands of concurrent users or complex multi-product
combinations, performance remains consistent and predictable.

#### **3. Reduced Operational Costs**

Modularity and automation simplify maintenance, updates, and extensions.
Independent microservices can be updated without downtime, cutting
operational overhead and risk.

#### **4. Seamless Integration**

With REST-based APIs, the platform connects effortlessly to existing
enterprise systems such as ERP, CRM, or e-commerce platforms — ensuring
end-to-end process continuity and data consistency.

#### **5. Empowered Product Teams**

No-code tools put control back into the hands of product managers and
business experts. Configuration Models and UIs can be created and
adjusted without IT intervention – fostering agility and innovation.

#### **6. Intelligence Everywhere**

AI assistance helps modelers detect inconsistencies, automate rule
creation, and optimize configurations. End-users benefit from guided
selling and predictive recommendations — making configuration faster and
smarter.

# The SCP platform in detail

Following on from the summary of the key architectural principles and
business benefits in the previous chapter, this chapter describes the
SCP platform in detail. It explains the technical components, how they
interact, and the mechanisms that ensure scalability, security and
flexibility.

In order to understand the approach pursued by the SPC platform, it is
necessary to consider it from different perspectives and at different
levels of detail.

Main components of the SPC Platform

The following figure shows a greatly simplified diagram of the SPC
Platform:

<img src="media/media/image1.png"
style="width:5.78022in;height:2.03697in"
alt="Ein Bild, das Text, Screenshot, Schrift, Reihe enthält. Automatisch generierte Beschreibung" />

Figure 4.1: Highly simplified diagram of the main components of the SPC
Platform

Two overarching aspects relate to the platform components: the
development paradigm and the governance of component access.

Development paradigm

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

Access Control and Identity Management

With regard to access control, the software modules of the SPC Platform
support a secure and interoperable Identity and Access Management (IAM)
that is flexible, scalable, and compliant with common security
standards.\
Fundamentally, the platform supports standard authentication protocols
such as OAuth 2.0, OpenID Connect (OIDC), and SAML (Security Assertion
Markup Language), enabling secure authentication and authorization.
These standards provide Single Sign-On (SSO) capabilities and simplify
integration with other enterprise systems.\
Access to the central creation and maintenance component (Configuration
Model Developer) is managed via OpenID, while access to
the Configuration Engine is controlled through access tokens.

The Data Backend component of the SPC Platform is responsible for
managing and providing configuration attributes and rules. In addition,
configuration-related data such as pricing information, multilingual
texts, and images must also be made available.

In Viamedici’s product configuration solutions, the Product Information
Management system EPIM serves as the standard Data Backend. Other data
storage systems used to manage configuration-relevant data and digital
assets can be integrated through appropriate interfaces.

### Creation and Maintenance Components

### The central creation and maintenance component is the Configuration Model Developer by Viamedici, which is used primarily to define and maintain configuration rules.\
Additional components in this area include specialized frontend libraries and a UI Kit for the web design tool „Framer“. Both simplify the development of product configuration frontends and support the creation of so-called no-code frontends.

### Configuration Engine

### The Configuration Engine is the core of every Viamedici configuration solution. The result of years of development and optimization, it processes Configuration Models at exceptional speed while maintaining a non-blocking operational state at all times.

### Communication via REST Interfaces

### Both external and internal communications are implemented through REST interfaces.

- External communication refers to interactions between configuration
  frontends and backends, i.e., outside the platform components.

- Internal communication takes place between the components of the
  platform itself, as illustrated in Figure 4.1 (see above).

The Two Key Aspects of a Product Configuration System

<img src="media/media/image2.png"
style="width:5.78261in;height:1.83766in"
alt="Ein Bild, das Text, Screenshot, Rechteck, Schrift enthält. Automatisch generierte Beschreibung" />

Figure 4.2: Processing and Maintenance of a Configuration Model

The logical foundation of a Viamedici configuration solution is
the Configuration Model, referred to simply as the model.\
Such a model consists of attributes, which represent the properties of
products, and rules and constraints, which define the set of valid
configurations.

Instead of defining every possible combination explicitly — as in a
declarative approach — this model specifies general rules that ensure
the validity of configurations.\
A product configurator automatically verifies whether a configuration is
valid by evaluating the rules and constraints defined in the model.
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
    Within a Viamedici configuration solution, configuration rules can
    be automatically derived from product structures — a unique
    capability.\
    Maintaining structures therefore inherently involves maintaining
    part of the rule set.

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
internal sales, and production planning. Based on a common rule set, the
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

<img src="media/media/image3.png"
style="width:6.00163in;height:2.62637in"
alt="Ein Bild, das Text, Screenshot, Diagramm, Schrift enthält. Automatisch generierte Beschreibung" />

Abbildung 4.3: Main components of a runtime system for product
configuration based on\
SPC platform

The components of the SPC platform used to implement configuration
backends are REST interfaces and microservices that communicate with
each other according to the actor paradigm.

The diagram in Figure 4.3 shows the two services that are central to
configuration: Configuration Engine and Configuration Model Deployment
Store. The [*Configuration Engine*](#configuration_engine) searches the
possible attribute values and checks whether the rules and constraints
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
  constraint-based approach

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
configuration rules. Here too, several options would be conceivable.
Viamedici, however, uses exclusively the specially developed
Configuration Model Developer tool — and for good reasons. The tool
offers a unique level of usability (user experience), enabling extremely
efficient work. Modified or new rules are validated at runtime in the
context of the complete rule set and can then be made available for
release immediately.

<img src="media/media/image4.png"
style="width:5.81173in;height:3.79121in"
alt="Ein Bild, das Text, Screenshot, Diagramm, Schrift enthält. Automatisch generierte Beschreibung" />

Figure 4.4: Main components of a care and maintenance system for
productconfiguration\
based on SPC platform

# Technical Architectures

Two architectural aspects are considered: the architecture of the SPC
platform and that of a typical configuration solution based on the SPC
platform.

1.  Platform architecture

The basic technical architecture of the configuration platform is shown
in the following figure.

<img src="media/media/image5.png"
style="width:5.55677in;height:5.37363in"
alt="Ein Bild, das Text, Screenshot, Schrift, parallel enthält. Automatisch generierte Beschreibung" />

Figure 5.1: Technical architecture of the SPC platform

Creation and maintenance components

A product configuration system must first be created and then
continuously reviewed and updated. This applies to both the frontend(s)
and the backend. The frontends can be implemented using any web
technologies. TypeScript and the React JavaScript framework are
supported by two libraries that Viamedici has developed specifically for
configuration applications.

Configurator Frontend Libraries

**configurator-ts**

This TypeScript library simplifies the development of configuration
applications (configurators) that are based on the Viamedici
Configuration Engine. It exposes all functions of the Configuration
Engine through a strongly typed API. This eliminates the need for
configurator app developers to interact directly with the engine’s REST
API.

The library is designed so that any framework can be used to build a
configuration application. The demo app, available at

<https://viamedici-spc.github.io/configurator-ts-demo/>,

is implemented with Vue.js, for example.

For React users, a dedicated library, configurator-react**,** was
developed, which is built on top of configurator-ts.

**configurator-react**

This React library provides easy-to-use components and hooks to
streamline the development of a configurator application.

It exposes all functions of the Configuration Engine in the form of
strongly typed hooks and logic components. This removes the need to
interact directly with the engine’s REST API. The hooks and logic
components can be easily integrated into your styled React components.

The library is designed to be UI-framework agnostic, so any UI framework
or component library of your choice can be used to build a configurator
application.

The demo app is available at:

<https://viamedici-spc.github.io/configurator-react-demo/>.

It provides a comprehensive example of the Configuration Engine features
exposed by this library. It demonstrates how the library can be
effectively integrated into and used within a React-based single-page
application (SPA).

**Configurator UIKit**

The Viamedici Configurator UIKit provides controls (components)
specifically designed for configuration applications based on the Framer
web design tool in combination with the Viamedici REST APIs. The UIKit
uses the configurator-react library (see above).\
A detailed, very easy-to-understand description of the components of the
UIKit can be found here:

<https://spc-configurator-uikit.framer.ai>.

**Configuration Model Developer**

The central creation and maintenance component is the Configuration
Model Developer (CMD), which is used in particular to define and
maintain configuration rules that are not generated automatically. The
configuration attributes are usually maintained in a third-party system
(e.g., PIM, ERP) and exported to CMD.

CMD is a high-performance single-page application that works together
with all service and infrastructure components (see Figure 5.1).

<img src="media/media/image6.png"
style="width:6.3in;height:3.87917in" />

Figure 5.2: Rule editor of the Configuration Model Developer

**REST-APIs**

**Configuration Engine API**

Through this API, frontend applications have access to all functions of
the Configuration Engine.\
Documentation in the OpenAPI standard can be found here:

<https://alpha.spc-staging.viamedici.io/hca/api/engine/api-docs/index.html#/>.

**Configuration Model-Deployment Store API**

The Configuration Models released for productive use are stored in the
so-called “Configuration Model Deployment Store.” Frontend applications
retrieve the required Configuration Model via the REST interface.

Documentation in the OpenAPI standard can be found here:

<https://alpha.spc-staging.viamedici.io/hca/api/store/api-docs/index.html#/Deployment>.

**Services**

**Configuration Engine**

Earlier it was already mentioned that solutions based on the SPC
platform follow a model-based approach. In a Configuration Model,
product combinatorics are expressed as a set of variables and their
possible values (domains), along with constraints that specify how the
variables are allowed to relate to one another. This approach is known
as a Constraint Satisfaction Problem (CSP). So-called CSP solvers search
through the possible values of the variables and check whether the
constraints are satisfied. In doing so, they eliminate combinations that
violate a constraint in order to reduce the number of possible
solutions.

A CSP solver of this kind forms the core of Viamedici’s Configuration
Engine. Through many years of research and development, the solver
algorithm was extended so that systematic search, backtracking, and the
use of consistency checks and heuristics — in other words, ultimately
finding a solution to the CSP problem — can be performed at a speed that
is unique worldwide.

The practical consequence is that entirely new possibilities open up for
configurator speed and user experience. And with that, a new way of
thinking about product configuration becomes possible.

**Configuration Model-Deployment Store**

The Configuration Models approved for production use are stored in what
is known as the Configuration Model-Deployment Store. Front-end
applications retrieve the required Configuration Model via the REST
interface (see above).

Approved models can be published to different channels (release,
staging, test).

**Configuration Model-Development Store**

The so-called Configuration Model-Development Store makes the
Configuration Models available to the development tools. The REST
interface used for this purpose is not public.

**Infrastructure**

**Configuration Model Inventory**

This is the persistent storage for the Configuration Models. It is based
on the database management system “MongoDB” or MongoDB-compatible
systems.

**Configuration Attribute Inventory**

In principle, the attributes and values can be managed with any tools
(databases, PIM systems, ERP systems, Excel spreadsheets). As part of
SPC, Viamedici’s EPIM is natively integrated and therefore serves as the
standard component for attribute management.

**Authentication**

The software modules of the SPC platform support secure and
interoperable identity and access management (IAM) that is flexible and
scalable and meets common compliance requirements. Fundamentally, the
platform supports standard authentication protocols such as OAuth 2.0,
OpenID Connect (OIDC), and SAML (Security Assertion Markup Language),
which enable secure authentication and authorization. These standards
support single sign-on (SSO) and make integration with other systems
easier.

As a result, access to the central creation and maintenance component
(Configuration Model Developer) is controlled via OpenID, while access
to the Configuration Engine is handled via access tokens.

2.  Solution Architecture

The following figure shows the technical architecture of a solution
based on the SPC configuration platform.

<img src="media/media/image7.png"
style="width:5.87309in;height:7.0099in"
alt="Ein Bild, das Text, Screenshot, Diagramm, Schrift enthält. Automatisch generierte Beschreibung" />

Figure 5.3: Simplified architecture of a configuration solution based on
SPC

The configuration solution shown includes two runtime systems as
examples: Configurator App1 and Configurator App2. Two UI excerpts are
intended to illustrate these apps and, at the same time, demonstrate
that there are no limits to interface design.

<img src="media/media/image8.png"
style="width:4.09251in;height:4.59282in"
alt="Ein Bild, das Text, Screenshot, Design enthält. Automatisch generierte Beschreibung" />

Figure 5.4: UI excerpt of a visually simple configurator

This sample application can be accessed at:

<https://adventure-wheels-simple.framer.ai>.

<img src="media/media/image9.png"
style="width:4.06278in;height:2.83481in"
alt="Ein Bild, das Screenshot, Kreis enthält. Automatisch generierte Beschreibung" />

<img src="media/media/image10.png"
style="width:4.33663in;height:2.47425in"
alt="Ein Bild, das Text, Screenshot, Design enthält. Automatisch generierte Beschreibung" />

Figure 5.5: UI excerpt of a configurator with a more sophisticated
interface design

This sample application can be accessed at:

<https://adventure-wheels-advanced.framer.ai>.

Both configuration applications (configurators) each use an instance of
the Configuration Engine and the same approved Configuration Model of a
product — in this example, a motor vehicle (see below).

The configuration rules are maintained using the Configuration Model
Developer tool (see Figure 5.2). Modified and newly added rules are
evaluated using an instance of the Configuration Engine.

The configuration attributes are maintained in EPIM (see the right side
of Figure 5.6 below).

<img src="media/media/image11.png"
style="width:6.13861in;height:2.86631in"
alt="Ein Bild, das Text, Screenshot, Schrift, Zahl enthält. Automatisch generierte Beschreibung" />

Figure 5.6: Attribute-Maintenance-View in EPIM

These attributes are provided to the Configuration Model Developer via
export; however, they cannot be modified within the tool.

Variant definition rules can be generated automatically from the product
structures that are also maintained in EPIM (see the left side of Figure
5.6). These rules are then likewise provided to the Configuration Model
Developer.

Updated configuration attributes and rules together form an updated
Configuration Model. After approval, it is made available for use
(Configuration Model Deployment).

In most use cases, a configuration process is associated with displaying
product images, drawings, and text (in multiple languages). These
so-called assets are also managed and provided by EPIM (see the top of
Figure 5.3).

3.  Integration with third-party systems

#

Integration with third-party systems — regardless of type — is carried
out exclusively via standard interfaces, as shown in the following
figure.

<img src="media/media/image12.png"
style="width:5.58242in;height:3.25333in"
alt="Ein Bild, das Text, Screenshot, Schrift, Zahl enthält. Automatisch generierte Beschreibung" />

Figure 5.4: Connecting a Viamedici configuration solution to third-party
systems

# Functionalities and Features

**Configurator Applications (Configurator-Apps)**

Configurator-Apps can be implemented using any web technologies.

For the design and prototyping software “Framer,” which strongly focuses
on interactive and responsive web designs, Viamedici provides the
Configurator UI Kit. It includes specially developed,
configuration-specific controls. These enable designers to create
Configurator-Apps without programming knowledge, while also giving
developers the ability to add custom code.

Configurator-Apps built using the Configurator UI Kit stand out for
their exceptional user experience. The visualization of configuration
functions can be tailored to specific target groups in a variety of
ways.

To support this, the Configurator UI Kit provides various controls
(React components) specifically developed for web-based product
configuration applications using the “Framer” web design tool in
combination with the Viamedici REST APIs. The UI Kit uses the
Configurator React Library (see below).

A range of ready-to-use React components is provided, covering most
typical configurator UI scenarios — for example, a toggle switch and a
checkbox for Boolean attributes, or a dropdown list for selection
attributes. They can be customized in color and size to match the
respective corporate identity.

The base components (basic controls) can be combined to create fully
customized components, providing even more flexibility for UI design.

The UI Kit components enable easy access to the functions of the
Configuration Engine, including more advanced functions such as
“Explain” or “Implicit Selection” (see the section Configuration Engine
below).

These special, unique functions are handled and visualized accordingly,
giving users deeper insight into the relationships and dependencies
within their product configuration.

**configurator-ts**

The configurator-ts library includes functions that make building a
Configurator-App very easy.

**Session Management**

The Configuration Engine works with configuration sessions, meaning that
such a session must be created before starting a configuration dialog.

The configurator-ts library includes built-in session management that
automatically handles the session lifecycle and ensures a seamless user
experience. For example, if the Configuration Engine ends a session due
to user inactivity, a new session is automatically initiated as soon as
the user resumes activity. The previous configuration state is fully
restored before the next user action is executed.

**Optimistic Decisions**

Configuration decisions — such as “value selected” or “value not
selected”—are applied optimistically to the configuration state, which
significantly improves the perceived responsiveness of the Configurator
Application and the overall user experience.

When a user selects a value, the Configuration State immediately
reflects this selection as an explicit inclusion. The UI component — for
example, a toggle button or a dropdown menu — visually shows the user’s
selection right away. Once the Configuration Engine has fully processed
the configuration decision, the resulting consequences are applied
asynchronously to the Configuration State. Depending on what those
consequences are, this can also affect other UI components, which then
immediately display the final state as well.

**Apply an Explain Resolution**

When the Configuration Engine detects and explains a Configuration
Conflict, the functions in configurator-ts make it easier to apply the
proposed resolution selected by the user to resolve the conflict.

**\**

**Save / Restore Configuration**

A versioned data format with backward compatibility is provided for
saving and restoring the Configuration State.

**configurator-react**

This library uses configurator-ts as its base library. It includes
additional React-specific functions that make building a
Configurator-App even easier.

**Configuration Model Developer (CMD)**

This central tool for maintaining configuration models offers a unique
level of ease of use (user experience), enabling highly efficient work.

The core part of the user interface is the attribute and rule editor.
Both attributes and rules can be organized into named groups.

On the left and right sides, there are two function panels each, which
are collapsed by default and slide out when clicked. When using larger
screens, multiple panels can be shown at the same time and can also be
pinned (see Figure 5.5).

<img src="media/media/image13.png" style="width:6.3in;height:2.46528in"
alt="Ein Bild, das Screenshot, Text enthält. Automatisch generierte Beschreibung" />

Figure 5.5: The CMD with three expanded function panels

The most innovative function panel is the Evaluator. Using an
automatically generated configuration user interface, modified or new
rules can be validated at runtime in the context of the entire rule set.
After the complete Configuration Model has been successfully validated —
which, of course, also includes the attributes and their values — it can
be approved and made available for use via the Changes panel.

The two function panels on the left side are used to manage the
Configuration Projects and Models of the project owner (tenant) selected
at the top right

**Configuration Engine**

The Configuration Engine attempts to find a solution to a so-called
constraint satisfaction problem (CSP) through systematic search,
backtracking, and the use of consistency checks and heuristics.

In terms of how it interacts with a Configurator-App (a Configurator),
this essentially means verifying a value assignment or value entry made
by the user with respect to a valid Configuration State. If the state is
valid, the next value assignment or entry can be made. Otherwise, the
Configuration Engine provides an explanation for the invalid state along
with one or more proposed resolutions that, when applied, restore a
valid state.

This is illustrated by the following sample application:

<https://adventure-wheels-simple.framer.ai>.

The key differentiator is this: Viamedici’s Configuration Engine never
leaves the user stranded. More than that, it uniquely enables highly
efficient work when the Configurator- App uses the corresponding
functions — which is easy to implement with the frontend libraries (see
above). In the context of a Product Configurator, “efficient work” means
quickly determining a valid product variant.

To that end, the Configuration Engine performs implicit value
assignments, for example when only a single selectable value remains. It
blocks attribute values whose use would lead to a constraint violation.
In addition, for every blocked value it provides an explanation for the
block as well as one or more possible resolutions to unblock it.

An outstanding feature of the Configuration Engine is its support for
Component Configuration. This makes it possible to implement
Configurators for products or systems of any complexity.

A detailed description of all Configuration Engine functions can be
found in the documentation for its REST API ([*Headless Configuration
API*](#headless_configuration_api) 2.0):

<https://spc.cloud.ceventis.de/hca/api/engine/api-docs/index.html>.

**USP’s of the Configuration Platform SPC**

- Fault-tolerant

- Dynamically scalable

- Extremely short response times

- Can be integrated into any web environment.

# Advantages and Benefits

**Model-based configuration paradigm**

**Advantages**

**Flexibility and Scalability**

The constraint-based approach is broadly applicable. It is especially
well-suited for complex products, because it can represent very large
numbers of variants using rules.

**Easy Product Maintenance**

Product changes or new options (variants) can be implemented by
adjusting the configuration model—without having to touch any program
code.

**Better User Guidance**

Users are guided through the configurator and receive immediate feedback
on whether their selection is valid. Invalid or impermissible
combinations are ruled out right away.

**Benefits**

- Managing a large variety of variants for highly configurable products

- Significant time savings in variant specification

- Preventing incorrect specifications (as long as the rules are correct)

- Cost savings by orders of magnitude compared with non-model-based
  Configurators.

**\**

**Microservice-Architecture**

**Advantages**

**Independent Development and Deployment**

Microservices can be developed, tested, deployed, and updated
independently. This enables shorter development cycles and more frequent
releases.

**Scalability**

Each microservice can be scaled individually depending on demand. This
saves resources and costs compared to scaling a monolith.

**Technology Flexibility**

Teams can use different technologies, programming languages, or
databases for different microservices, depending on requirements and
expertise.

**Increased Fault Tolerance**

Failures in one microservice don’t necessarily impact the entire system,
making the overall system more robust and resilient.

**Team Autonomy**

Development teams can work independently since they own specific
microservices. This boosts productivity and enables parallel
development.

**Reusability**

Microservices can be reused across different projects or contexts,
saving development time and cost.

**Easier Maintainability**

Small, specialized services are easier to understand, debug, and
maintain than a large, complex monolith.

**Efficient Fault Isolation and Resolution**

Because microservices are clearly separated, issues can be isolated and
fixed quickly.

**Enabling Modern DevOps Practices**

Continuous integration, continuous deployment (CI/CD), and
containerization (e.g., with Docker and Kubernetes) can be implemented
efficiently.

**\**

**Benefits**

**Business Agility**

Organizations can respond faster to market changes and customer needs
because new features can be delivered more quickly.

**Improved User Experience**

Because outages in individual services are less likely to disrupt the
whole system, the user experience remains more consistent.

**Cost Efficiency**

Resources can be allocated more precisely, which can reduce
infrastructure costs.

**Scaling with the Business**

The architecture is particularly well-suited for organizations that are
growing quickly or whose requirements change dynamically.

**Innovation**

Teams have the freedom to try new technologies and approaches without
risking destabilization of the entire system.

**\**

**Headless Configuration Engine**

**Advantages**

**Frontend Independence**

Because the engine is headless, it isn’t tied to a specific user
interface. It can be integrated with any frontend technology (web,
mobile, desktop).

**API-First Approach**

The configuration capabilities are exposed via a REST API, making it
easy to integrate with different systems and platforms.

**Flexibility and Customization**

Adjustments can be made quickly and without changes to the configurator
applications, since the engine alone provides the configuration
functionality.

**Scalability**

The Headless Configuration Engine can easily scale with growing data
volumes and increasing requirements.

**Cloud-Native Support**

The headless configuration engine is cloud-compatible, enabling
straightforward deployment, scaling, and management in modern IT
environments.

**Increased Reusability**

The configuration capabilities can be used by multiple applications,
services, or teams without having to define them multiple times.

**Reduced Dependencies**

Teams can work independently because the Headless Configuration Engine
provides the configuration functionality without being tightly embedded
in the application.

**Benefits**

**Faster Configurator Development**

Developers can focus on business logic and the frontend.

**Improved Maintainability**

Changes to Configuration Models don’t require changes to application
code, simplifying maintenance and minimizing risk.

**Cross-Platform Consistency**

Different platforms (web, mobile, IoT) use the same configuration
capabilities, ensuring a consistent user experience.

**Rapid Adaptation to New Requirements**

Functional changes can be made in the engine without having to redevelop
or redeploy the applications.

**Future-Proofing**

The Headless Configuration Engine can be easily integrated into current
and future architectures, extending the lifespan of IT infrastructures.

**Efficient Collaboration Across Teams**

Developers, administrators, and product teams can operate independently
without blocking one another.

**\**

**Configuration Model Developer**

**Advantages**

**Centralized Management of Configuration Models**

All configuration models are stored in a single central location,
ensuring consistency and simplifying administration.

**Versioning and Rollbacks**

Changes to configuration models are versioned, so earlier versions can
be restored if an issue occurs.

**Automation and CI/CD**

Configuration models can be easily integrated into CI/CD pipelines,
making deployments and updates more efficient.

**Benefits**

**Error Reduction**

Centralized management and automated deployment of configuration models
minimize errors caused by manual intervention.

**Cost Savings**

Centralized management reduces the effort required for maintenance and
upkeep, and lowers the need for redundant systems.

**Cross-Platform Consistency**

Different platforms (web, mobile, IoT) receive the same configuration
data, ensuring a consistent user experience.

**Advantages of configurators built on the SPC platform**

- Use of standardized web technologies

- Fully customizable user interface design

- No-code flexibility

- Use of configuration-specific UI libraries

- Unique user experience

- Real-time configuration with no lag

- Can be implemented as a standalone application or embedded in any web
  application (e.g., an online store)

- Easy integration and updating of product information (images, text,
  etc.)

Can be integrated with third-party systems via standard interfaces (ERP,
CRM, e-commerce)

**\**

**Beispielhafte ROI-Berechnung**

The practical example relates to parameterizing the firmware of a group
of complex technical measuring instruments. By setting more than 300
electronic parameters, the devices can be delivered ready for
installation and operation. The complex dependencies between the
parameters were described in a 120-page PDF document. Sales
representatives had to spend a long time studying this document whenever
customers wanted the “Customized Parameter Setting” feature. As a
result, they didn’t proactively offer it.

Before the configurator was introduced, only 2% of all devices were sold
with this feature. After one year of the sales team using the
configurator, that figure had risen to 55%.

ROI = ((Revenue - Costs) / Costs) x 100

**Costs**

**Typical cost items include:**

- One-time project costs (development of the Configuration Model, UI
  development, training)

- Ongoing costs (hosting, maintenance, license fees)

**In the practical example:**

- One-time project costs: € 150,000

- Hosting and annual license fee: € 57,000 per year

- Maintenance and support: € 12,000 per year

**\**

**Benefits**

There are benefits in several areas:

**Increased Revenue**

Significantly more devices are sold with the “Parameter Setting” feature
because the configurator makes the sales process much easier and
faster.\
Example: An additional 1,060 feature sales per year at € 240 each = €
254,400 per year.

**Time Savings**

Sales reps no longer need to spend time studying PDF documents.\
Example: Savings of 120 hours per year (for the previous 2% of sales)
at € 75/hour = € 9,000 per year.

**Fewer Errors**

No more incorrect specifications of the “Customized Parameter Setting”
feature. This reduces complaint and rework costs.\
Example: Annual savings in complaint costs of € 10,000.

Total benefit after two years: € 546,800

**ROI after two years of operation**

Using the cost figures from your example:

- One-time project costs: € 150,000

- Ongoing costs per year (hosting + license + maintenance/support): €
  57,000 + € 12,000 = € 69,000

- Total costs over two years: € 150,000 + 2 × € 69,000 = € 288,000

Net benefit after two years: € 546,800 − € 288,000 = € 258,800\
ROI (net benefit / total costs): € 258,800 / € 288,000 ≈ 89.9% (≈ 90%)

Comparable effects on a similar scale are, of course, also achieved when
configuring mechanical components—that is, classic product
configuration.

# Business Cases

**Business Case 1: Gold Mining**

**Goal**

Product variants should be determined via guided selling.

**Situation**

The product data, including configuration attributes, is available in a
PIM system. There is no configurator tool yet, or an existing one no
longer meets current requirements.

**Actions**

- Design and implement a one-time PIM data transformation

- Training on creating and maintaining configuration rules

- Build a no-code configurator as a proof of concept

- Define the workflow

- Implement and launch the production configurator application(s)

**Result**

Additional revenue is generated from the PIM data.

**Business Case 2: Filling the Piggy Bank**

**Goal**

Complex products should be sold more efficiently. Incorrect orders due
to faulty variant specifications should be avoided.

**Situation**

Sales configuration of variants for complex products is time-consuming
and error-prone.

**Actions**

- Data consolidation (if needed)

- Develop a configuration model

- Training on creating and maintaining configuration rules

- Build a no-code configurator as a proof of concept

- Define the workflow

- Implement and launch the production configurator application(s)

**Result**

Significant cost savings.

**Business Case 3: Switching Horses**

**Goal**

Make product configuration easier, faster, safer, and more user-friendly
for customers and/or sales than it is today.

**Situation**

Existing product configurators are either too slow and/or too complex
and/or too expensive.

**Action**

In the best case, only the configuration backend needs to be replaced by
the SPC platform.\
If the configuration logic is hard-coded in the configurator
application, the entire configuration system must be replaced (frontend
and backend).

**Result**

Sustained, significant cost savings.

9\. Implementation Strategy

Implementing a product configuration system—like any software
project—requires a structured approach, clear responsibilities, a
well-thought-out schedule, and executive sponsorship.\
With sufficient resources, a clear change-management strategy, and
support from Viamedici, a successful rollout is ensured.

**Preliminary Notes**

1.  The following assumes that the vendor selection has already been
    completed.

2.  A four-week proof-of-concept phase is also assumed to have been
    completed successfully.

3.  Steps 2 and 3 described below can be carried out in parallel.

**Implementation Steps**

**Step 1: Requirements Analysis and Goal Definition (2–4 weeks)**

- Analyze current processes and requirements

- Define goals for the configuration system (e.g., increased efficiency,
  fewer errors)

- Align with all relevant stakeholders

**Step 2: System Design and Customization (8–12 weeks)**

- Define the product structure and derive a Configuration Model
  (Attributes and Rules)

- Define workflows

- Adapt the configuration backend to company-specific requirements

- Integration with existing systems (e.g., ERP, CRM)

- Build the configuration frontends (Configurator-Apps)

**Step 3: Data Migration (4–6 weeks)**

- Clean up and standardize existing product data

- Transfer the data to a new data storage system (if required)

- Ensure data integrity

**\**

**Step 4: Testing Phase (4–6 weeks)**

- Perform functional testing and load testing

- Identify and fix defects

**Step 5: Rollout (2–4 weeks)**

- Rollout preparation (verify infrastructure, functionality, and data)

- Deploy the backend components in the cloud; set up user accounts and
  access rights management

- Training of end users

- Provide support during go-live

- Live monitoring, issue resolution, performance analysis

**Step 6: Post-Go-Live Support and Optimization (4–8 weeks)**

- Collect feedback and implement improvements

- Establish a continuous improvement process

- Produce final project documentation

**Timeline**

| **Project Phase**                     | **Duration** | **Timeframe**  |
|---------------------------------------|--------------|----------------|
| Requirements analysis                 | 2 - 4 weeks  | months 1       |
| System design and customization       | 8 - 12 weeks | months 2 - 4   |
| Data migration                        | 4 - 6 weeks  | months 5 - 6   |
| Testing phase                         | 4 - 6 weeks  | months 7 - 8   |
| Rollout                               | 2 - 4 weeks  | months 8 - 9   |
| Post-go-live support and optimization | 4 - 8 weeks  | months 10 - 11 |

Total duration: **approx. 10-11 months.**

**Resource Requirements**

**Staffing / Human Resources**

**Interne Ressourcen**

Projektleiter

Fachkräfte aus Vertrieb, Produktion und Produktentwicklung

IT-Experten für Systemintegration

Key User aus relevanten Abteilungen (Vertrieb, Produktion, Logistik)

**Externe Ressourcen**

Technischer Support durch Viamedici;

Viamedici-Berater für Change Management und Implementierung.

**Technische Ressourcen:**

Server oder Cloud-Infrastruktur für das System;

Schnittstellen zu bestehenden Systemen (ERP, CRM);

Testumgebung für sichere Systemprüfungen.

**Finanzielle Ressourcen:**

Lizenzkosten für das Konfigurations-Backend;

Kosten für Beratung und Schulungen durch Viamedici oder einen
Viamedici-Partner;

Budget für Change-Management-Maßnahmen.

**Training**

**Target Groups**

1.  **Key Users (business departments)**\
    In-depth training on rule creation and configuration functions\
    Duration: 2-5 days

2.  **End Users**\
    Short training sessions on advanced configuration functions\
    Duration: 0.5-1 day

**Methods**

- In-person training sessions and online webinars

- Interactive workshops for hands-on application

**Change Management Measures**

**Communication**

- Provide early and transparent information about the project

- Create a communication plan (e.g., newsletters, meetings)

**Employee Involvement**

- Involve key users during the concept/design phase

- Hold regular feedback sessions throughout the project

**Training**

- Ensure all employees feel confident using the configuration system

- Develop “super users” as internal points of contact

**\**

**Motivation**

- Highlight the benefits of the configuration system (e.g., reduced
  workload, fewer errors)

- Reward engagement, for example through certificates or recognition

**Ongoing Support**

- Set up a support team

- Provide regular system updates and training

# 10. Security and Data Privacy Considerations

The data center in which the back-end systems for the SPC solutions are
hosted is ISO 27001 certified:

(<https://www.hetzner.com/unternehmen/zertifizierung/>,<https://docs.hetzner.com/general/others/certificates/>).

Some solutions are operated on the cloud computing platform “Microsoft
Azure,” which is ISO 27001 and SOC 2 certified:

(<https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-iso-27001>)

(<https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-soc-2>).

# 11. Summary

Balancing product individualization and manufacturing costs — known as
“mass customization” — poses a major challenge. This challenge can be
met with Viamedici’s SPC platform (Smart Product Configuration). By
integrating SPC into existing sales processes, those processes can be
made significantly more efficient. Follow-up questions about the
validity of quoted product variants become unnecessary. The number of
quotes per sales representative increases. The share of incorrect
product specifications reaching production drops to zero.

The platform’s underlying MACH paradigm promotes agility, scalability,
and innovation speed in software development and enables the creation of
reliable, high-quality software.

This results in the unique selling points of Viamedici’s Product
Configuration Solutions:

- Maximum reliability/uptime through microservices combined with cloud
  technology

- Extremely short response times thanks to an innovative Configuration
  Engine

- High flexibility and scalability due to the model-based approach

- Outstanding user experience in the Configurator Applications,
  including the prevention of incorrect or invalid combinations

- Customizable user interface design

- Use of configuration-specific UI libraries

- Real-time configuration with no delays

- Deployable as a standalone application or embedded in any web
  application, e.g., a web shop

- Easy integration and updates of product information (images, text,
  etc.)

- Easy maintenance, since typically only rule adjustments in the
  Configuration Models are required

- Use of standardized web technologies

- Integration with third-party systems via interfaces (ERP, CRM,
  e-commerce)

From the outset, Viamedici recognized that maintainability of a Product
Configuration System is a key factor in long-term effort and cost.
Accordingly, the maintenance tools were developed with great care and
foresight. For maintaining Configuration Rules, only the specially
developed Configuration Model Developer tool is used. As part of the
platform architecture, this tool offers excellent ease of use (user
experience) and enables highly efficient work.

Additional core components of the platform architecture are the
Configuration Engine and the frontend libraries.

Viamedici’s Configuration Engine is the centerpiece of the backend
components and the result of years of research and development. The
algorithm of the underlying solver has been modified and extended so
that finding a solution to a Configuration Problem happens at a globally
unique speed.

In practice, this means that entirely new possibilities open up for
Configurator Performance and user experience.

Another key differentiator is this: Viamedici’s Configuration Engine
does not “leave the user out in the rain.” On the contrary, it supports
highly efficient work in a unique way when the Configurator-App
leverages the corresponding functions — which is easy to do with the
help of the frontend libraries (see below). In the context of a Product
Configurator, efficient work means quickly determining a valid product
variant.

The frontend libraries simplify the creation of Configurator
Applications that rely on the Viamedici Configuration Engine. They
expose all functions of the Configuration Engine via a strictly typed
API. This eliminates the need for Configurator-App developers to
interact directly with the engine’s REST API.

Configurator-Apps can be implemented using any web technologies.

For the design and prototyping software Framer, which strongly focuses
on interactive and responsive web designs, the Viamedici UI Kit is
available. It includes specially developed, configuration-specific
controls. These allow designers to create Configurator-Apps without
programming knowledge, while still enabling developers to add custom
code.

Configurator-Apps created using the Viamedici UI Kit stand out with an
exceptional user experience.

Integration with third-party systems — of any kind — takes place
exclusively via standard interfaces.

There are three fundamental business scenarios for the SPC platform.

1.  **Gold Mining**\
    Product variants are to be determined via guided selling. The
    product data, including the Configuration Attributes, is available
    in EPIM.

2.  **Filling the Piggy Bank**\
    Complex products are to be sold more efficiently. Incorrect orders
    resulting from faulty variant specifications are to be avoided.

3.  **Switching Horses**\
    Product configuration is to be made simpler, faster, safer, and more
    user-friendly than before. Existing Product Configurators are either
    too slow and/or too complex and/or too expensive.

Implementing a Product Configuration System — like any software project
— requires a structured approach, clear responsibilities, and a
well-thought-out timeline. With sufficient resources and a clear
change-management strategy, a successful rollout can be ensured.

Ein beispielhafter Zeitplan:

| **Phase**                             | **Dauer**    | **Zeitrahmen** |
|---------------------------------------|--------------|----------------|
| Requirements analysis                 | 2 - 4 weeks  | month 1        |
| System design and customization       | 8 - 12 weeks | month 2 - 4    |
| Data migration                        | 4 - 6 weeks  | month 5 - 6    |
| Testing phase                         | 4 - 6 weeks  | month 7 - 8    |
| Rollout                               | 2 - 4 weeks  | month 8 - 9    |
| Post-go-live support and optimization | 4 - 8 weeks  | month 10 - 11  |

Total duration: **approx. 10-11 months.**

When discussing implementation, it is important to emphasize the need
for internal staffing resources. The following roles are required:

- Project manager

- Subject-matter experts from sales, production, and product development

- IT experts for system integration

- Key users from relevant departments (sales, production, logistics).

There are two licensing pricing models to choose from: either based on
the number of API calls (REST API of the Configuration Engine) or based
on the number of cloud nodes used. Both models are aligned with actual
usage. They are designed to be flexible for different company sizes and
requirements.

Selecting the most cost-effective pricing model depends on various
factors. Viamedici supports this decision with in-depth consulting.

“Rethinking Product Configuration” is our slogan. The discussion so far
shows that this is more than just a phrase. We rethink the topic by
viewing frontend and backend separately, while also keeping their
interdependence in mind. The starting point is always the user, who
should be offered a goal-oriented user experience. This, in turn,
creates requirements for the backend, which has been developed over time
into a uniquely high-performing solution.

You are welcome to see for yourself the exceptional aspects of our
configuration platform and solutions.

If you are interested — or already facing configuration challenges — we
would be happy to hear from you:

d.langbein@viamedici.de

We’d be glad to arrange an initial consultation or a demonstration of
our SPC configuration platform.

# 12. Conclusion and Outlook

**Shaping the Future of Product Configuration**

The way products are configured is evolving — from rigid, IT-driven
tools to agile, intelligent platforms that empower business users and
accelerate innovation. This transformation marks more than a
technological shift: it represents a new mindset in how companies manage
complexity, deliver customization, and engage customers.

The next-generation configuration platform described in this White Paper
embodies this evolution. Built on microservices, powered by no-code
frontends, seamlessly integrated via REST, and enhanced with artificial
intelligence, it delivers a unified environment for creating, managing,
and deploying product configurations at scale.

For decision-makers, the message is clear: Product configuration is no
longer a back-end function — it’s a front-line driver of digital
competitiveness.

Organizations that embrace this new approach gain faster response times,
lower operational costs, and a scalable foundation for continuous
innovation. The time to rethink configuration is now.

**Next Steps:**

1.  Evaluate your current configurator landscape for agility and
    integration potential

2.  Identify quick wins through modularization and automation

3.  Arrange a consultation with a demonstration of the SPC Platform:\
    d.langbein@netbase.de

4.  Explore a pilot implementation of the SPC Platform

# 13. Appendix

**References**

Most of the implemented configuration systems are not publicly
accessible. Therefore, only the names of a few customers can be
mentioned:

Yokogawa Electric Corporation

Nanotec Electronic GmbH

Winkelbauer GmbH

SCHURTER GmbH

HIWIN GmbH

Lohmann & Rauscher GmbH & Co. KG

Otto Bock SE & Co. KGaA

Selux GmbH

A Configurator solution with different configurators for end customers
and for the sales team:

https://www.selux.com/configurators/ger/de/TheLine/

Gebr. Knauf KG

A Configurator for end customers and for the sales team:

https://tools.knauf.de/tools/pocket-kit-konfigurator/

**Glossary**

**Rule**

A rule is a formally defined specification in a configuration model.
There are three types: configuration rule, context rule, and constraint.
Rules define permitted and excluded combinations of attributes and
components, dependencies, limits, and cardinalities, and are evaluated
by the Configuration Engine to derive valid configuration states.
Together with the attribute vocabulary and the fact base, the complete
set of rules determines the system’s combinatorics. Rules restrict the
possible values of future decisions.

**Constraint**

A constraint is a formal validity condition expressed as a logical
expression *without* the operators -\> or \<-\>. The purpose of this
expression is to exclude invalid combinations or values, check limits,
and maintain consistency. In many systems—though not on the SPC
platform—a violation results in a configuration error (block/error
message).

**Configuration Rule**

A configuration rule is a formal derivation rule (implication or
equivalence) that derives permitted or excluded attribute and component
combinations from technical conditions. A configuration rule represents
a specific aspect of the combinatorics of complex systems or products.

**Context Rule**

A context rule is a rule that derives permitted or excluded attribute
and component combinations from non-technical conditions (context
conditions).

**Configuration State**

In product configuration, the configuration state refers to the current
status of a configuration, defined by the values of the attributes that
have already been selected and fixed. The configuration state represents
the decisions made, the consequences derived, and the remaining
possibilities within the given rules.

The configuration state is continuously updated as new attribute values
are set and as rules are applied.

**Example:**\
A car is to be configured.

- **Initial state:** All attributes (color, engine, transmission, etc.)
  are open, i.e., no values have been assigned.

- **After selecting “Color = Red”:** The configuration state contains
  “Color = Red,” and all rules triggered by this decision are applied.
  For example: “Red is not compatible with white leather seats.” In this
  case, the color “White” is blocked.

- **Advanced state:** After selecting “Engine = Diesel,” the state is
  updated further. The option “Hybrid” may be excluded because it is not
  compatible with a diesel engine.

The configuration state is therefore a central structure that captures
both the progress and the validity of a configuration.

**Configuration Dialog**

A configuration dialog is the dialog between the Headless Configuration
API (HCA) and a configurator in the context of a specific configuration
session.

In an iterative process, the configurator app makes decisions that are
submitted via the API. The Configuration Engine responds with
consequences. In doing so, it ensures that a valid configuration state
exists at all times.

**Configuration Engine**

The Configuration Engine is the main component of the configuration
backend. It is implemented as a microservice and can be consumed via a
REST API. The Configuration Engine also manages configuration sessions,
enabling a user-friendly configuration dialog.

**Configurator**

A configurator is a client-side application that consumes the HCA.

**Configuration Session**

A configuration session primarily contains the current configuration
state. In addition, it provides a configurator with associated metadata.

**Decision**

A decision describes the active selection of a value for a specific
attribute of the product being configured—made by the user, an automated
client system, or the Configuration Engine (implicit decision).

**Examples of a decision:**

- In a car configuration: the user selects “Color = Red” or “Engine =
  Diesel.”

- For a laptop: the user chooses “Processor = Intel i7.”

Decisions control the configuration. They restrict the possible value
choices of other attributes by triggering rules and/or constraints.

**Consequence**

A consequence is an automatic derivation or restriction that results
from the decisions made. It is triggered by rules and/or constraints to
ensure the configuration remains consistent.

**Examples of a consequence:**

- **Decision:** “Engine = Diesel” → **Consequence:** “Transmission =
  Automatic.”

- **Decision:** “Battery size = 60 kWh” → **Consequence:** “No
  all-wheel-drive option available.”

Consequences result from rules and/or constraints.\
They can exclude possible options (e.g., forbid certain combinations) or
enforce required values.\
Consequences can change when decisions change.

**Derived consequences:**\
Automatically made decisions or restricted possibilities resulting from
prior decisions and the rules. For example: If “Engine = Diesel,” then
“Transmission = Automatic” is mandatory.

**How Decisions and Consequences Work Together**

1.  **A decision occurs:**\
    The user selects an attribute value (e.g., “Color = Red”).

2.  **Rules and/or constraints take effect:**\
    The Configuration Engine checks which other attributes are affected
    by the decision.

3.  **Consequences result:**\
    Automatic restrictions or new assignments are activated, e.g.,
    “White upholstery not allowed.”

**In short:**\
(Explicit) decisions are made intentionally and steer the
configuration.\
Consequences arise automatically from decisions and ensure the
configuration remains consistent and compliant with the defined rules
and/or constraints.

**Headless Configuration API (HCA)**

The Headless Configuration API (HCA) provides the REST interfaces to a
microservice system. In addition to other components, this system
includes the Configuration Engine and supplementary REST API services.

**AI-Spotlight: Prädictive Recommendations**

The SPC Platform go beyond static rules.\
By analyzing user choices, and product relationships, artificial
intelligence can predict the most likely or optimal next selections —
before the user makes them.

These predictive recommendations accelerate the configuration process,
reduce errors, and create a more intuitive user experience.\
They can also support guided selling, by suggesting compatible or
higher-value options that match customer needs.

**Example:**\
When a user selects a specific engine type, the platform predicts and
recommends the optimal battery, transmission, or add-on package.

Predictive intelligence transforms configuration from a reactive task
into a proactive and data-driven process — empowering users with
intelligent guidance at every step.
