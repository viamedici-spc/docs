## 3.3 The solution of a CSP
A [*Solution*](../../../docu-hca/glossary/terms-state/#solution) of a CSP is a selection of Values for all variables under consideration in which all Constraints are satisfied.<br>
An example of a possible valid configuration for a Configuration Model that is **satisfied**:<br>
```
CarSize.Big
Colour.Black
EngineType.Burner
FuelType.Diesel
Power."300 KW"
Transmission.Kind.Automatic
RimMaterial.Steel
RimSize."16 inch"
Usage."Off road"
SpareWheel1
```
This configuration is valid if no Rule is violated.<br>
For example, it satisfies:<br>
```Usage."Off road" -> !FuelType.Gas```,<br>
because ```Diesel``` was selected, not ```Gas```.<br>
It also satisfies:<br>
```Usage."Off road" -> SpareWheel1 OR SpareWheel2```,<br>
because ```SpareWheel1``` was selected.<br>
And it also satisfies:<br>
```Usage."Off road" -> !RimMaterial.Alu```,<br>
because steel rims were selected, not aluminum rims.<br>
A Solution is therefore not just any arbitrary selection, but a selection that is compatible with all Constraints of the Model.
