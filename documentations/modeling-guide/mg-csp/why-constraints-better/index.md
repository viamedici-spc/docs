## 3.6 Why are Constraints better than manual checks?

Without [*Constraints*](../../../docu-hca/glossary/terms-modeling/#constraint),
a user or salesperson would have to know which combinations are allowed.
This can easily lead to errors.<br>
**Example:**<br>
A salesperson configures a vehicle:<br>
```
Usage."Off road"
FuelType.Gas
RimMaterial.Alu
Colour.White
```
Without a [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model),
someone would have to manually check whether this combination is allowed.<br>
With a Configuration Model, the [*Configuration Engine*](../../../docu-hca/glossary/terms-infrastructure/#configuration-engine)
automatically recognizes that:<br>
• Gas is not allowed for off-road use.<br>
• Aluminum rims are not allowed for off-road use.<br>
• White is not allowed for off-road use if only ```Forest Green``` or ```Black``` are permitted.<br>
This reduces errors and improves the quality of quotations and orders.
