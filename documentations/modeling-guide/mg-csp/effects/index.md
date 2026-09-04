## 3.5 Direct and Indirect Effects
Some [*Rules*](../../../docu-hca/glossary/terms-modeling/#configuration-rule), or [*Constraints*](../../../docu-hca/glossary/terms-modeling/#constraint),
have a direct effect.<br>
**Example:**<br>
```CarSize.Big -> Oversize == true```
If ```CarSize.Big``` is selected, ```Oversize``` becomes required.<br>
Other effects occur indirectly through multiple Rules.<br>
**Example:**<br>
The user selects:<br>
```Accessories."Bull bar"```.<br>
**Rule 1:**<br>
```Accessories."Bull bar" -> Usage."Off road"```.<br>
As a result, the Value ```Off road``` applies to the Attribute ```Usage```:<br>
```Usage."Off road"```.<br>
Now additional Rules become active:<br>
```
Usage."Off road" -> !FuelType.Gas
Usage."Off road" -> SpareWheel1 OR SpareWheel2
Usage."Off road" -> Colour."Forest Green" OR Colour.Black
Usage."Off road" -> !RimMaterial.Alu
```
The original ```Bull bar``` selection therefore indirectly results in the following:<br>
• Gas is excluded.<br>
• At least one spare wheel is required.<br>
• Only certain colors are allowed.<br>
• Aluminum rims are excluded.<br>
Such chains of effects are typical of [*Configuration Models*](../../../docu-hca/glossary/terms-modeling/#configuration-model).
