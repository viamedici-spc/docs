## 3.6 Why are Constraints better than manual checks?

Without [*Constraints*](../../../docu-hca/glossary/terms-modeling/#constraint),
a user or salesperson would have to know which combinations are allowed.
This can easily lead to errors.
Example:
A salesperson configures a vehicle:
Usage."Off road"
FuelType.Gas
RimMaterial.Alu
Colour.White
Without a configuration model, someone would have to manually check whether this combination is allowed.
With a configuration model, the Configuration Engine automatically recognizes that:
• Gas is not allowed for off-road use.
• Aluminum rims are not allowed for off-road use.
• White is not allowed for off-road use if only Forest Green or Black are permitted.
This reduces errors and improves the quality of quotations and orders.
