# 5 Configuration Rules
### The Role of Rules in Configuration
[*Rules*](../../docu-hca/glossary/terms-modeling/#configuration-rule) describe dependencies between
[*Attributes*](../../docu-hca/glossary/terms-modeling/#attribute),
[*Attribute Values*](../../docu-hca/glossary/terms-modeling/#attribute-value), and
[*Component Models*](../../docu-hca/glossary/terms-modeling/#component-configuration-model).
They define which combinations are allowed, which selections require other selections, and which options are excluded.

For example, a Configuration Rule can be written as follows:

```Engine::EngineType.Electric -> !Engine::FuelType.*```

This Rule means:

If the engine type is electric, no value of the ``FuelType`` attribute may be selected.

Rules are therefore not just guidance for the user.
They are formal restrictions that are evaluated by the [*Configuration Engine*](../../docu-hca/glossary/terms-infrastructure/#configuration-engine).
A configuration is only valid if all Rules and [*Constraints*](../../docu-hca/glossary/terms-modeling/#constraint)
of the [*Configuration Model*](../../docu-hca/glossary/terms-modeling/#configuration-model) are satisfied.

