## 3.8 CSP from two perspectives

### CSP from the User’s Perspective
The user does not need to know that a Constraint Satisfaction Problem is being solved in the background.
From the user’s perspective, the [*Configurator*](../../../docu-hca/glossary/terms-infrastructure/#configurator) should feel simple:<br>

• The user selects options.<br>
• The system shows only valid choices.<br>
• Options that are not allowed are disabled and, if necessary, explained.<br>
• Missing required selections are displayed.<br>
• In the end, a valid Product Configuration is created.<br>

The [*Configuration Engine*](../../../docu-hca/glossary/terms-infrastructure/#configuration-engine) based on a CSP solver is therefore the technical and logical foundation
that ensures that using a Product Configurator becomes simple and reliable.

### CSP from the Modeler’s Perspective
The modeler must formulate the product knowledge in such a way that the Configuration Engine can work with it.
To do this, the modeler must:<br>

• identify the relevant [*Attributes*](../../../docu-hca/glossary/terms-modeling/#attribute),<br>
• define the possible [*Attribute Values*](../../../docu-hca/glossary/terms-modeling/#attribute-value),<br>
• recognize business and technical dependencies,<br>
• formally describe the [*Rules*](../../../docu-hca/glossary/terms-modeling/#configuration-rule) of product combinatorics,<br>
• avoid contradictions,<br>
• define test cases,<br>
• document the [*Configuration Model](../../../docu-hca/glossary/terms-modeling/#configuration-model) in an understandable way.<br>

The task of the modeler is therefore not merely the technical writing of Rules.
The modeler translates business and technical product knowledge into a formal model: a Configuration Model.
