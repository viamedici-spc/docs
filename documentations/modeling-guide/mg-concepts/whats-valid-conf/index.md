## 2.6 What is a valid Configuration?
A Configuration is a concrete assignment of [*Values*](../../../docu-hca/glossary/terms-modeling/#value) to all
[*Attributes*](../../../docu-hca/glossary/terms-modeling/#attribute), or product characteristics, within a [*Configurator*](../../../docu-hca/glossary/terms-infrastructure/#configurator).<br>

Example of a configuration:<br>
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
SpareWheel1 == true
```

However, in a Configurator based on Viamedici’s [*Configuration Engine*](../../../docu-hca/glossary/terms-infrastructure/#configuration-engine) (see below),
the system does not simply allow any arbitrary selection and then check afterward whether it is valid or invalid.
Instead, the Configuration Engine continuously calculates which selection options are still allowed, taking all [*Rules*](../../../docu-hca/glossary/terms-modeling/#configuration-rule) into account.
This means:<br>

• Options that would not lead to any valid solution are not offered in the first place, are disabled, or are automatically excluded.<br>
• Dependent options can be set or restricted automatically.<br>
• The current [*Configuration State*](../../../docu-hca/glossary/terms-state/#configuration-state) is continuously checked to determine
whether all [*Constraints*](../../../docu-hca/glossary/terms-modeling/#constraint) can be satisfied together.<br>

In the terminology of the Constraint Satisfaction Problem (see below), this is why we say that a [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model) or a Configuration State is either satisfied or not satisfied.
A Model is satisfied if Values can be found for all relevant Attributes such that all Rules and Constraints are satisfied at the same time.<br>

A Model is not satisfied if there is no longer any possible combination of Values that can satisfy all Rules and Constraints at the same time.<br>

Example:<br>
The following rule applies in the Configuration Model:<br>

```shared::TechnicalShared::Usage."Off road" -> !Engine::FuelType.Gas```
<br>

This rule means:<br>
If the vehicle is intended for ```off road``` use, the fuel type ```Gas``` must not be selected.<br>
So, when the user selects ```Usage."Off road"```, the Configuration Engine recognizes that ```FuelType.Gas``` no longer belongs to a
satisfiable Configuration. The Gas option is therefore disabled or removed from the list of available options, depending on the UI design decision.<br>

In a CSP-based Configurator, the user therefore can no longer select the following Attribute-Value combination:<br>

```Usage."Off road"```<br>
```FuelType.Gas```

A Rule violation cannot occur. Instead, the Configuration Engine ensures that only those selection options remain available
with which the Model can continue to be satisfied.<br>

A Configuration State is therefore not valid simply because the user happens not to have violated any Rule or Constraint.
It is valid because the Configuration Engine ensures that all selections made so far, together with all Rules and Constraints of the Model,
can be satisfied.<br>

For the user, this technical logic usually remains invisible. The user only experiences that certain options are available, other options
are disabled, and the Configurator guides him step by step toward a technically valid product configuration.
