## 6.3 Configuration Engine
The [*Configuration Engine*](../../../docu-hca/glossary/terms-infrastructure/#configuration-engine) attempts to find a solution to a so-called
constraint satisfaction problem (CSP) through systematic search,
backtracking, and the use of consistency checks and heuristics.

In terms of how it interacts with a Configurator-App (a Configurator),
this essentially means verifying a Value assignment or Value entry made
by the user with respect to a valid [*Configuration State*](../../../docu-hca/glossary/terms-state/#state). If the state is
valid, the next Value assignment or entry can be made. Otherwise, the
Configuration Engine provides an [*Explanation*](../../../docu-hca/glossary/terms-state/#explanation) for the invalid state along
with one or more proposed resolutions that, when applied, restore a
valid state.

This is illustrated by the following sample application:

<https://adventure-wheels-simple.framer.ai>.

The key differentiator is this: Viamedici’s Configuration Engine never
leaves the user stranded. More than that, it uniquely enables highly
efficient work when the Configurator- App uses the corresponding
functions — which is easy to implement with the frontend libraries (see
above). In the context of a Product Configurator, **efficient work** means
quickly determining a valid product variant.

To that end, the Configuration Engine performs implicit value
assignments, for example when only a single selectable value remains. It
blocks Attribute Values whose use would lead to a [*Constraint*](../../../docu-hca/glossary/terms-modeling/#constraint) violation.
In addition, for every blocked value it provides an Explanation for the
block as well as one or more possible [*Resolutions*](../../../docu-hca/glossary/terms-state/#conflict-resolution) to unblock it.

An outstanding feature of the Configuration Engine is its support for
[*Component Configuration*](../../../docu-hca/glossary/terms-modeling/#component). This makes it possible to implement
Configurators for products or systems of any complexity.

A detailed description of all Configuration Engine functions can be
found in the documentation for its REST API ([*Headless Configuration
API*](../../../docu-hca/glossary/terms-infrastructure/#hca) 2.0):

<https://spc.cloud.ceventis.de/hca/api/engine/api-docs/index.html>.
