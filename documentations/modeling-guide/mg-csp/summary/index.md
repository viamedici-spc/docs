## 3.9 Summary
Product configuration can be understood as a Constraint Satisfaction Problem (CSP).
A CSP consists of:<br>
• Variables<br>
• Domains<br>
• Constraints.<br>

In the [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model),
the variables correspond to the [*Attributes*](../../../docu-hca/glossary/terms-modeling/#attribute).
The domains describe the allowed [*Attribute Values*](../../../docu-hca/glossary/terms-modeling/#attribute-value).
The [*Constraints*](../../../docu-hca/glossary/terms-modeling/#constraint) describe which attribute-value combinations or component combinations are allowed or prohibited.
The [*Configuration Engine*](../../../docu-hca/glossary/terms-infrastructure/#configuration-engine) , based on a CSP solver,
checks whether a Configuration is valid. It detects [*Conflicts*](../../../docu-hca/glossary/terms-state/#conflict),
disables invalid options, and can perform automatic derivations.
From the user’s perspective, the Configurator should feel simple. For the modeler, however, it is important to understand
that all [*Rules*](../../../docu-hca/glossary/terms-modeling/#configuration-rule) must be satisfied at the same time in the background.<br>
The fundamentals introduced here are important for the following chapters.
These chapters describe how the concrete automotive model is structured and how the individual Rules are read and formulated.
