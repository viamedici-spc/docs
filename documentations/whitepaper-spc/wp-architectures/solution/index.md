## 5.2 Solution architecture

The following figure shows the technical architecture of a solution
based on the SPC platform.

![](../../media/SimplifiedArchitectureOfConfigurationSolution.png "Simplified architecture of a configuration solution")
Figure 5.3: Simplified architecture of a configuration solution based on SPC

The configuration solution shown includes two runtime systems as
examples: Configurator App1 and Configurator App2. Two UI excerpts are
intended to illustrate these apps and, at the same time, demonstrate
that there are no limits to interface design.

![](../../media/SimpleConfiguratorUI.png "Simple Configurator UI")

Figure 5.4: UI excerpt of a visually simple configurator

This sample application can be accessed at:\
<https://adventure-wheels-simple.framer.ai>.


![](../../media/MoreSophisticatedConfiguratorUI-1.png "More Sophisticate Configurator UI 1")

![](../../media/MoreSophisticatedConfiguratorUI-2.png "More Sophisticate Configurator UI 2")

Figure 5.5: UI excerpt of a configurator with a more sophisticated
interface design

This sample application can be accessed at:\
<https://adventure-wheels-advanced.framer.ai>.

Both configuration applications (configurators) each use an instance of
the [*Configuration Engine*](../../../docu-hca/glossary/terms-infrastructure/#configuration-engine) and the same approved [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model) of a
product — in this example, a motor vehicle (see below).

The [*Configuration Rules*](../../../docu-hca/glossary/terms-modeling/#configuration-rule) are maintained using the [*Configuration
Model Developer*](../../../docu-hca/glossary/terms-infrastructure/#cmd) tool (see Figure 5.2). Modified and newly added Rules are
evaluated using an instance of the Configuration Engine.

The [*Configuration Attributes*](../../../docu-hca/glossary/terms-modeling/#attribute) are maintained in EPIM (see the right side
of Figure 5.6 below).

![](../../media/AttributeMaintenanceViewEPIM.png "Attribute Maintenance View EPIM")

Figure 5.6: Attribute-Maintenance-View in EPIM

These Attributes are provided to the Configuration Model Developer via
export; however, they cannot be modified within the tool.

Variant definition rules can be generated automatically from the product
structures that are also maintained in EPIM (see the left side of Figure
5.6). These rules are then likewise provided to the Configuration Model
Developer.

Updated Configuration Attributes and Rules together form an updated
Configuration Model. After approval, it is made available for use
(Configuration Model Deployment).

In most use cases, a configuration process is associated with displaying
product images, drawings, and text (in multiple languages). These
so-called assets are also managed and provided by EPIM (see the top of
Figure 5.3).
