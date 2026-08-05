## 3.4 What does a CSP Solver do?
A CSP solver forms the core of the [*Configuration Engine*](../../../docu-hca/glossary/terms-infrastructure/#configuration-engine) of the SPC platform.
It checks whether a configuration is valid and answers questions such as:<br>
• Is this selection allowed?<br>
• Which options are still possible after the current selection?<br>
• Which options must be set automatically?<br>
• Which options must be disabled?<br>
• Is there a [*Conflict*](../../../docu-hca/glossary/terms-state/#conflict)?<br>
• Which [*Rule*](../../../docu-hca/glossary/terms-modeling/#rule) causes the Conflict?<br>
• Is there at least **one** valid Solution?<br>
**Example:**<br>
The user selects:<br>
```Accessories."Bull bar"```.<br>
The [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model) contains the Rule:<br>
```Accessories."Bull bar" -> shared::TechnicalShared::Usage."Off road"```.<br>
The solver recognizes:<br>
If ```Bull bar``` is selected, ```Usage."Off road"``` must apply.<br>
This activates additional rules, for example:<br>
```
Usage."Off road" -> !Engine::FuelType.Gas
Usage."Off road" -> SpareWheel1 OR SpareWheel2
Usage."Off road" -> !RimMaterial.Alu
```
The solver therefore calculates the effects of the selection. A single selection can have many
[*Consequences*](../../../docu-hca/glossary/terms-state/#consequence).
