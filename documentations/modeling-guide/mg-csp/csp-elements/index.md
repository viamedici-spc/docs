## 3.2 The Elements of a CSP
A Constraint Satisfaction Problem can be described by three central elements:<br>
• Variables<br>
• Domains<br>
• Constraints.<br>
These three terms are the foundation for understanding a [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model).<br>
Note:<br>
As a mathematical and logical problem, a CSP only knows “constraints.” In the application domain of Product Configuration, however,
it is methodologically useful to distinguish between [*Constraints*](../../../docu-hca/glossary/terms-modeling/#constraint)
and [*Rules*](../../../docu-hca/glossary/terms-modeling/#configuration-rule). This is explained in the advanced guide.
In this guide, we use both terms synonymously.<br>
### Variables
A variable is something for which a value must or can be selected.
In Configuration Modeling, variables correspond to the [*Attributes*](../../../docu-hca/glossary/terms-modeling/#attribute) of a model.
Examples from the Automotive [*Configurator*](../../../docu-hca/glossary/terms-infrastructure/#configurator):<br>
CarSize<br>
Colour<br>
EngineType<br>
FuelType<br>
Power<br>
RimMaterial<br>
RimSize<br>
These Attributes can take on different Values.<br>
**Example:**<br>
The Attribute ```CarSize``` describes the vehicle size.
Possible values are: ```Small```, ```Big```.
If the user selects a large car, the selection is written as:
```CarSize.Big```.
This means:
The variable, or Attribute, ```CarSize``` has the Value ```Big```.

### Domains
A domain describes which Values are allowed for a variable, or Attribute.<br>
**Example**:<br>
```CarSize```:
```Small```, ```Big```.
This means that the Attribute ```CarSize``` may only take one of these Values.<br>
**Another example:**<br>
```EngineType```: ```Electric```, ```Burner```, ```Hybrid```.
This means that the Attribute ```EngineType``` may take the Values ```Electric```, ```Burner```, or ```Hybrid```.<br>
The domain therefore limits the possible selections for an Attribute.

### Constraints
A Constraint is a restriction. In the language of the CSP, Rules also count as Constraints.<br>
A Constraint specifies which Attribute-Value combinations are allowed or prohibited.<br>
**Example:**<br>
```EngineType.Electric -> !FuelType.*```.<br>
This Rule, also called a “Constraint” in CSP terminology, means:<br>
If the engine type is electric, no fuel type may be available.<br>
The Constraint therefore prevents invalid combinations that do not make sense from a business or technical perspective, such as:<br>
```EngineType.Electric```in combination with ```FuelType.Petrol```.<br>
or:<br>
```EngineType.Electric```in combination with ```FuelType.Diesel```.<br>
**Another example:**<br>
```shared::TechnicalShared::Usage."Off road" -> !Engine::FuelType.Gas```.<br>
This Rule means:<br>
If the vehicle is intended for off-road use, the fuel type ```Gas``` must not be selectable.<br>
In the context of Product Configuration, a Constraint is therefore the formal notation of a business or technical rule.
It is a logical restriction that must be respected.


