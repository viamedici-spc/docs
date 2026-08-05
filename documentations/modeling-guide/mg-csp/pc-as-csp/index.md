## 3.1 Product Configuration as a Constraint Satisfaction Problem
The configuration of a product consists of many individual [*Decisions*](../../../docu-hca/glossary/terms-state/#decision).
For a car, for example, the following Decisions must be made:<br>
• Which vehicle size is selected?<br>
• Which color is selected?<br>
• Which engine type is selected?<br>
• Which fuel type is selected?<br>
• Which power output is selected?<br>
• Which transmission is selected?<br>
• Which rim material is selected?<br>
• Which rim size is selected?<br>
• Is a spare wheel required?<br>
Each of these Decisions is represented by possible [*Values*](../../../docu-hca/glossary/terms-modeling/#value).
At the same time, there are [*Constraints*](../../../docu-hca/glossary/terms-modeling/#constraint).
Not every selection is compatible with every other selection.
This is precisely why Product Configuration can be described as a Constraint Satisfaction Problem.
A Constraint Satisfaction Problem, or CSP for short, is a problem in which a valid combination of Values is sought that satisfies all Constraints.
At its core, a [*Configurator*](../../../docu-hca/glossary/terms-infrastructure/#configurator) therefore answers the question:<br>
Which combination of options is allowed?
Or, in other words:<br>
Which Values can be selected together without violating a [*Rule*](../../../docu-hca/glossary/terms-modeling/#configuration-rule)?
