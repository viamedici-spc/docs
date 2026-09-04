## 5.2 Rules in the Teaching Example

### Rules in the Car Model

The Car model mainly contains [*Rules*](../../../docu-hca/glossary/terms-modeling/#configuration-rule) that affect the vehicle as a whole.
These Rules describe global dependencies and derive high-level decisions.

**Rule: Small vehicles are emission-free**

`CarSize.Small -> CO2Emissions == 0`

If a small vehicle is selected, the CO₂ emissions are set to 0.

This Rule is deliberately simplified for teaching purposes. It shows how an [*Attribute Value*](../../../docu-hca/glossary/terms-modeling/#attribute-value)
can be derived from a selection.

**Rule: Large vehicles have high CO₂ emissions**

`CarSize.Big -> CO2Emissions > 200`

If a large vehicle is selected, the CO₂ emissions must be greater than 200.

This Rule shows the use of a numerical comparison.

**Rule: Small vehicles must not be white**

`CarSize.Small -> !BaseComponent::Colour.White`

If the vehicle is small, the color `White` cannot be selected in the BaseComponent [*Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model).
This is an assumed sales requirement.

This Rule shows how the Main Model can reference an [*Attribute*](../../../docu-hca/glossary/terms-modeling/#attribute)
in a subordinate [*Component Model*](../../../docu-hca/glossary/terms-modeling/#component-configuration-model).

**Rule: Large vehicles are classified as oversize**

`CarSize.Big -> Oversize`

If the vehicle size `Big` is selected, the vehicle is marked as oversize.

This Rule is an example of a derived property.

**Rule: Bull bar equipment sets the intended use**

`Accessories."Bull bar" -> shared::TechnicalShared::Usage."Off road"`

If a bull bar is selected as equipment, the intended use is set to `Off road` in the
[*Shared Model*](../../../docu-hca/glossary/terms-modeling/#shared-configuration-model).

The intended use can then be used in other Component Models, for example for wheels or spare wheels.<br><br>

### Rules in the BaseComponent Model

The BaseComponent model mainly describes technical dependencies between the engine, transmission, wheels, and spare wheels.

**Rule: A powerful combustion engine requires an automatic transmission**

`Engine::Power."300 KW" AND !Engine::EngineType.Electric -> Transmission::Kind.Automatic`

If the engine power is `300 KW` and the engine type is not `Electric`, then an automatic transmission must be selected.

This Rule shows a dependency between two component models. It also shows a compound condition using AND and negation.

**Rule: An electric vehicle deactivates the classic transmission**

`Engine::EngineType.Electric -> Transmission == false`

If the engine type is `Electric`, the Transmission Model is deactivated.

As a result, no value of the `Kind` Attribute in the Transmission Model can be selected.

**Rule: The rim size entered as a user requirement is transferred to the wheels**

`shared::TechnicalShared::RimSize."16 inch" -> Wheels::RimSize."16 inch"`

If the rim size `16 inch` is set in the Shared Model, this size is transferred to the Wheels Model.

This is a synchronization Rule. It prevents different rim sizes from being used in the Shared Model and
in the Wheel Model.

**Rule: Spare wheels must have the same rim size as the wheels**

`(SpareWheel1 == true OR SpareWheel2 == true) AND shared::TechnicalShared::RimSize."16 inch" -> !(
SpareWheel1::RimSize."18 inch" OR
SpareWheel1::RimSize."25 inch" OR
SpareWheel1::RimSize."28 inch" OR
SpareWheel2::RimSize."18 inch" OR
SpareWheel2::RimSize."25 inch" OR
SpareWheel2::RimSize."28 inch"
)`

If a spare wheel is active and the shared rim size is `16 inch`, then a spare wheel must not have
a different rim size, such as `18 inch`, `25 inch`, or `28 inch`.

This Rule is deliberately written in an explicit form. It shows how exclusions for several alternatives can be modeled.<br><br>

### Rules in the Engine Model

**Rule: An electric motor has no fuel type**

`Engine::EngineType.Electric -> !Engine::FuelType.*`

If the engine type is `Electric`, no fuel type may be selected.

This Rule prevents combinations such as:

`Engine::EngineType.Electric
Engine::FuelType.Diesel`

Such a combination would not be correct from a technical perspective.

**Rule: The intended use Off road is not compatible with an electric motor**

`shared::TechnicalShared::Usage."Off road" -> !Engine::EngineType.Electric`

If the intended use is `Off road`, the engine type `Electric` is not available.<br><br>

### Rules in the Wheel Model

**Rule: Aluminum rims allow specific rim sizes**

`RimMaterial.Alu -> oneOf{
RimSize."18 inch",
RimSize."25 inch",
RimSize."28 inch"
}`

If `Alu` is selected as the rim material, exactly one of the rim sizes `18 inch`, `25 inch`, or `28 inch` must be selected.

**Rule: Steel rims allow different rim sizes**

`RimMaterial.Steel -> oneOf{
RimSize."16 inch",
RimSize."18 inch"
}`

If Steel is selected as the rim material, exactly one of the rim sizes `16 inch` or `18 inch` must be selected.

This Rule shows that domains can change depending on other Attributes.

