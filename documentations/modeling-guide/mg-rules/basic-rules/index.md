## 5.1 Basic Rule Operators

**Implication `->`**

An implication describes an `if-then` relationship.

`A -> B`

Meaning:

If `A` applies, then `B` must also apply.

Example:

`CarSize.Small -> CO2Emissions < 20`

If the vehicle is small, the CO₂ emissions must have a value less than 20.

Important: An implication works in only one direction. From ``CO2Emissions < 20``, it does not automatically
follow that `CarSize.Small` applies.<br><br>

**Biconditional `<->`**

A biconditional describes an `if-and-only-if` relationship.

`A <-> B`

Meaning:

`A` applies if and only if `B` applies, and vice versa.

Example:

`CarSize.Small <-> CO2Emissions < 20`

This [*Rule*](../../../docu-hca/glossary/terms-modeling/#configuration-rule) states:

If `Small` is selected, the [*Value*](../../../docu-hca/glossary/terms-modeling/#value) of `CO2Emissions` must be less than `20`. Conversely, if a value
less than `20` is selected for `CO2Emissions` first, then the only possible value for `CarSize` is Small.
A biconditional is stronger than a simple implication because it works in both directions.<br><br>

**Negation `!`**

Negation excludes a selection or condition.

`!A`

Meaning:

`A` must not apply.

Example:

`Engine::EngineType.Electric -> !Engine::FuelType.*`

If the engine type is `Electric`, no Value of the `FuelType` [*Attribute*](../../../docu-hca/glossary/terms-modeling/#attribute)
may be selected.
The asterisk `*` is used as a wildcard for all Values of the Attribute.<br><br>

**Conjunction `AND`**

`AND` connects multiple conditions that must apply at the same time.

`A AND B -> C`

Example:

`Engine::Power."300 KW" AND !Engine::EngineType.Electric -> Transmission::Kind.Automatic`

If the engine power is `300 KW` and the engine type is not `Electric`, then an automatic transmission must be selected.<br><br>

**Disjunction `OR`**

`OR` describes alternatives. At least one of the conditions must apply.

`A OR B`

Example:

`Wheels::RimSize."18 inch" OR Wheels::RimSize."19 inch"`

This condition is satisfied if either `18 inch` or `19 inch` is selected.<br><br>

**Comparison Operators**

Comparison operators are used for numerical Attributes.

| Operator | Meaning                  |
| -------- | ------------------------ |
| ==       | equal to                 |
| !=       | not equal to             |
| <        | less than                |
| <=       | less than or equal to    |
| >        | greater than             |
| >=       | greater than or equal to |

Example:

`CarSize.Big -> CO2Emissions > 200`<br><br>

**Set Selection `oneOf`**

`oneOf` means: Exactly one of the listed options must be selected.

`RimMaterial.Alu -> oneOf{
RimSize."16 inch",
RimSize."17 inch",
RimSize."18 inch"
}`

If the rim material is `Alu`, exactly one of the listed rim sizes must be selected.<br><br>

**Optional Single Selection `oneOrNoneOf`**

`oneOrNoneOf` means: At most one of the listed options may be selected.

`oneOrNoneOf{
Accessories.RoofRack,
Accessories.RoofTent
}`

This Rule allows either no selection or exactly one selection, but not both at the same time.<br><br>

**Group Selection `allOf`**

`allOf` means: All listed options must apply together.

`OffroadUsage -> allOf{
Accessories."Bull bar",
Wheels::RimMaterial.Steel,
SpareWheel1
}`

If the intended use is `Off road`, the bull bar, steel rims, and one spare wheel must be selected.<br><br>

**Group Dependency `allOrNoneOf`**

`allOrNoneOf` means: Either all listed options apply, or none of them applies.

`WinterUsage -> allOrNoneOf{
Accessories.SeatHeating,
Accessories.HeatedMirrors,
Accessories.HeatedWindshield
}`

This Rule prevents incomplete package configurations.<br><br>

**Component Activation and Deactivation**

[*Components*](../../../docu-hca/glossary/terms-modeling/#component-configuration-model) can also be subject to Rules.

Example:

`Engine::EngineType.Electric -> Transmission == false`

If the engine type is `Electric`, the Transmission component is deactivated.

This is a modeling decision. In a more realistic model, a simplified single-speed transmission for electric vehicles
could also be modeled. For the teaching example, however, deactivation is useful because it demonstrates
Component logic.
