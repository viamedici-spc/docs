# 8 Explanations of Configuration States

The ability to query the causes of certain [*Configuration States*](/glossary/terms-state/#configuration-state)
is a very powerful function of the [*Configuration Engine*](/glossary/terms-infrastructure/#configuration-engine)
of Viamedici.

A [*Configuration Model*](/glossary/terms-modelling/#configuration-model) can be very complex.
During the development of such a model, but also during the use of a [*Configurator*](/glossary/terms-infrastructure/#configurator),
conditions ([*States*](/glossary/terms-state/#state))can therefore occur that are not plausible at first glance.

The Configuration Engine takes all dependencies into account at all times.
[*Attribute Values*](/glossary/terms-modelling/#attribute-values) that are not possible in a current situation
due to the [*Configuration Rules*](/glossary/terms-modelling/#rule) cannot be assigned.
It is extremely advantageous for use if an explanation can be called up for this.

Sometimes all [*Configuration Attributes*](/glossary/terms-modelling/#attributes) are assigned Values,
but the Configuration Model itself is still not satisfied - in other words: the
[*Configuration Model-Satisfaction State*](/glossary/terms-state/#configuration-model-satisfaction-state) is FALSE.
In such a case, it is very helpful to be able to ask the Configuration Engine why the Configuration Model is not satisfied.




