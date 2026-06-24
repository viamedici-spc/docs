Product configuration is the process of assembling a product variant from selectable [*Attributes*](../../docu-hca/glossary/terms-modeling/#attribute),
and [*Components*](../../docu-hca/glossary/terms-modeling/#component).
For simple products, this can be straightforward. For complex products, however, many choices depend on one another.
A [*Configurator*](../../docu-hca/glossary/terms-infrastructure/#configurator) must therefore do more than display available options. It must ensure that only technically and
commercially valid combinations can be selected.
A [*Configuration Models*](../../docu-hca/glossary/terms-modeling/#configuration-model) provides the formal description of this product knowledge.
It defines the product structure, available Attributes, allowed [*Values*](../../docu-hca/glossary/terms-modeling/#value), and [*Rules*](../../docu-hca/glossary/terms-modeling/#configuration-rule) that determine which combinations
are permitted or excluded. In a constraint-based configurator, the configuration engine continuously calculates which
options remain valid based on all rules and constraints. This guides the user step by step toward a valid product configuration.
