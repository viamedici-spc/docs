# 3 Fundamentals of the Constraint Satisfaction Problem (CSP)
This chapter introduces the fundamental concepts of the Constraint Satisfaction Problem, or CSP,
and explains why product configuration can be understood as a CSP.
In a [*Configuration Model*](../../docu-hca/glossary/terms-modeling/#configuration-model), [*Attributes*](../../docu-hca/glossary/terms-modeling/#attribute),
[*Values*](../../docu-hca/glossary/terms-modeling/#value), and rules together define a solution space.
The task of the [*Configurator*](../../docu-hca/glossary/terms-infrastructure/#configurator)
is to find combinations of Values that satisfy all applicable [*Constraints*](../../docu-hca/glossary/terms-modeling/#constraint)
at the same time. This means that invalid combinations are not merely detected after the fact;
instead, the system continuously restricts the available options so that the configuration remains
satisfiable. Understanding CSP fundamentals helps explain how [*Configuration Rules*](../../docu-hca/glossary/terms-modeling/#rule) work,
why dependencies matter, and how a Configurator can guide users toward valid product configurations.
