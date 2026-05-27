## 5.1 Platform architecture

The basic technical architecture of the configuration platform is shown
in the following figure.

![](../../media/technicalArchitectureSPCPlatform.png "Technical architecture of the SPC platform")

Figure 5.1: Technical architecture of the SPC platform

### Creation and maintenance components

A product configuration system must first be created and then
continuously reviewed and updated. This applies to both the frontend(s)
and the backend. The frontends can be implemented using any web
technologies. TypeScript and the JavaScript framework "React" are
supported by two libraries that Viamedici has developed specifically for
configuration applications.

#### Configurator Frontend Libraries
**configurator-ts**

This TypeScript library simplifies the development of configuration
applications (Configurators) that are based on the Viamedici
[*Configuration Engine*](../../../docu-hca/glossary/terms-infrastructure/#configuration-engine). It exposes all functions of the Configuration
Engine through a strongly typed API. This eliminates the need for
configurator app developers to interact directly with the engine’s [*REST API*](https://spc.viamedici.io/api-docs/#configuration-engine).

The library is designed so that any framework can be used to build a
configuration application. The demo app, available at

<https://viamedici-spc.github.io/configurator-ts-demo/>,

is implemented with Vue.js, for example.

For React users, a dedicated library, "configurator-react", was
developed, which is built on top of "configurator-ts".

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

#### Configurator UIKit

The Viamedici Configurator UIKit provides controls (components)
specifically designed for configuration applications based on the Framer
web design tool in combination with the Viamedici REST APIs. The UIKit
uses the "configurator-react" library (see above).\
A detailed, very easy-to-understand description of the components of the
UIKit can be found here:

<https://spc-configurator-uikit.framer.ai>.

#### Configuration Model Developer

The central creation and maintenance component is the [*Configuration
Model Developer*](../../../docu-hca/glossary/terms-infrastructure/#cmd) (CMD), which is used in particular to define and
maintain [*Configuration Rules*](../../../docu-hca/glossary/terms-modeling/#configuration-rule) that are not generated automatically. The
[*Configuration Attributes*](../../../docu-hca/glossary/terms-modeling/#attribute) are usually maintained in a third-party system
(e.g., PIM, ERP) and exported to CMD.

CMD is a high-performance single-page application that works together
with all service and infrastructure components (see Figure 5.1).

![](../../media/CMDRuleEditor.png "CMD Rule Editor")

Figure 5.2: Rule editor of the Configuration Model Developer

### REST-APIs

**Configuration Engine API**

Through this API, frontend applications have access to all functions of
the Configuration Engine.\
A documentation in the OpenAPI standard can be found here:

<https://spc.viamedici.io/api-docs/#configuration-engine>.

**Configuration Model-Deployment Store API**

The Configuration Models released for productive use are stored in the
so-called [*Configuration Model-Deployment Store*](../../../docu-hca/glossary/terms-infrastructure/#configuration-model-deployment-store). Frontend applications
retrieve the required Configuration Model via the REST interface.

A documentation in the OpenAPI standard can be found here:

<https://spc.viamedici.io/api-docs/#Deployment>

### Services

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

### Infrastructure

**Configuration Model Inventory**

This is the persistent storage for the Configuration Models. It is based
on the database management system "PostgreSQL".

**Configuration Attribute Inventory**

In principle, the Attributes and Values can be managed with any tools
(databases, PIM systems, ERP systems, Excel spreadsheets). As part of
SPC, Viamedici’s EPIM is natively integrated and therefore serves as the
standard component for Attribute management.

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
