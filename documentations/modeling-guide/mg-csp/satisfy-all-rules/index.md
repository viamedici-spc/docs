## 3.7 What does “satisfying all rules at the same time” mean?
An important point in a CSP is:<br>
A Configuration must not only satisfy a single [*Rule*](../../../docu-hca/glossary/terms-modeling/#configuration-rule),
but all Rules at the same time.
This makes the task challenging.<br>
**Example:**<br>
The following Rules apply:<br>
```
Accessories."Bull bar" -> Usage."Off road"
Usage."Off road" -> !FuelType.Gas
!FuelType.Gas -> !Power."500 KW"
```
The user selects:
```Accessories."Bull bar"```
If the user now selects ```Power."500 KW"```, the following happens:<br>
```Accessories."Bull bar"``` implies:<br>
```Usage."Off road"```.<br>
```Usage."Off road"``` implies:<br>
```!FuelType.Gas```.
```!FuelType.Gas``` implies:<br>
```!Power."500 KW"```.<br>
This creates a [*Conflict*](../../../docu-hca/glossary/terms-state/#conflict), because the user selected ```Power."500 KW"```,
but the Rules imply that ```Power."500 KW"``` is not allowed.<br>
This example shows:<br>
A Conflict can also arise from a chain of Rules, not only from a single direct selection.<br>
Note:<br> Viamedici’s CSP-solver-based [*Configuration Engine*](../../../docu-hca/glossary/terms-infrastructure/#configuration-engine)
always provides a [*Configurator*](../../../docu-hca/glossary/terms-infrastructure/#configurator)
with information about which [*Values*](../../../docu-hca/glossary/terms-modeling/#value) are no longer allowed.
It is the responsibility of the UI design to present this information in a user-friendly way, for example by hiding such Values or
marking them as inactive. In this way, Conflicts can generally be avoided.
