## 4.3 Modeling Principles in the Tutorial Example
The structure of the automotive example follows three simple principles.

**First:**<br>
High-level aspects belong in the [*Root Model*](../../../docu-hca/glossary/terms-modeling/#root-configuration-model) (main model).
These include the vehicle size and equipment packages.

**Second:**<br>
Technical details belong in submodels.
The engine, transmission, wheels, and spare wheels are not modeled directly in the main model. Instead, they are described as separate
[*Component Configuration Models*](../../../docu-hca/glossary/terms-modeling/#component-configuration-model).

**Third:**<br>
Technical properties or user requirements that affect multiple Components belong in
[*Shared Models*](../../../docu-hca/glossary/terms-modeling/#shared-configuration-model).
If several Components need the same information, it should not be maintained multiple times.
Instead, it is modeled centrally and synchronized through [*Rules*](../../../docu-hca/glossary/terms-modeling/#configuration-rule).

A clear separation of concerns results in a structure that is easy to understand from a business perspective, technically maintainable,
and easy to address with Rules.
