## 4.2 Submodels and Attributes

#### The ``Car`` Model
The [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model)
``Car`` is the [*Root Model*](../../../docu-hca/glossary/terms-modeling/#root-configuration-model), also called Main Model.
It describes the vehicle as a whole. It contains
high-level `[*Attributes*](../../../docu-hca/glossary/terms-modeling/#attribute)` of the vehicle.<br>
**Examples:**
| Attribute | Example Values | Meaning |
|---|---|---|
| CarSize | Small, Standard, Big | General vehicle class |
| CO2Emissions | Numerical value | CO₂ emissions of the vehicle |
| Accessories | Bike rack, Bull bar | Additional equipment |

In addition to its Attributes, the ``Car`` model contains a reference named ``BasicAutomobile``
to the [*Component Configuration Model*](../../../docu-hca/glossary/terms-modeling/#component-configuration-model) ``BaseComponent``.

The Main Model should not contain all Configuration Attributes. Otherwise, it would become too large and difficult to understand.
It is better to create separate submodels (Component Models)
for different parts of the product. Attributes should be assigned to the submodel where they belong from a
business or technical perspective.
This makes the Configuration Model easier to understand and maintain.
It also makes it possible to model technical components in a reusable way.<br><br>

#### The ``BaseComponent`` Model
The Component Configuration Model ``BaseComponent`` describes the basic technical equipment of the vehicle.
It contains Attributes that describe general vehicle properties,
as well as Component Models that represent the vehicle components.

| Attribute / Component | Example Values | Meaning |
|---|---|---|
| Colour | White, Black | Exterior color |
| Engine | Component | Engine |
| Transmission | Component | Transmission |
| Wheels | Component | Wheels |
| SpareWheel1 | Component | First spare wheel |
| SpareWheel2 | Component | Second spare wheel |

``BaseComponent`` is therefore the technical building block of the vehicle.
[*Rules*](../../../docu-hca/glossary/terms-modeling/#configuration-rule) in this Model mainly describe dependencies between the engine, transmission, wheels, and spare wheels.

**Examples of Attribute Notations**<br>

Notation of an [*Choice Attribute*](../../../docu-hca/glossary/terms-modeling/#choice-attribute)  of the `BaseComponent` Model in the Model itself:<br>
```Colour.White```<br>
Notation of an Choice Attribute of the `BaseComponent` Model in the ``Car`` Model (one level higher):<br>
```BasicAutomobile::Colour.White```<br>

```BasicAutomobile``` is the [*Component Reference*](../../../docu-hca/glossary/terms-modeling/#component-attribute) that refers to the ``BaseComponent`` Model.<br><br>

#### The ``Engine`` Model
The ``Engine`` Model is a submodel (Component Model) of the ``BaseComponent`` Model.
It describes the vehicle's engine using Attributes that reflect the engine's characteristics.
| Attribute | Example Values | Meaning |
|---|---|---|
| EngineType | Combustion, Electric | Type of drive |
| FuelType | Petrol, Diesel | Fuel type |

Examples of notations:<br>
``Engine::EngineType.Combustion``<br>
``Engine::FuelType.Diesel``<br>
``Engine::Power."300 KW"``<br>

For electric vehicles, it is important to note that no fuel type may be selected.
This dependency is expressed later by a [*Configuration Rule*](../../../docu-hca/glossary/terms-modeling/#configuration-rule)<br>.

#### The ``Transmission`` Model
The ``Transmission`` Model is a submodel (Component Model) of the ``BaseComponent`` Model.
It describes the vehicle's transmission using Attributes that reflect the transmission's characteristics.
| Attribute | Example Values | Meaning |
|---|---|---|
| Kind | Manual, Automatic | Type of transmission |

Example of notation:<br>
``Transmission::Kind.Automatic``<br><br>

#### The ``Wheel`` Model
The ``Wheel`` Model is a submodel (Component Model) of the ``BaseComponent`` Model.
It describes the vehicle's wheels using Attributes that reflect the wheel's characteristics.
| Attribute | Example Values | Meaning |
|---|---|---|
| RimMaterial | Alu, Steel | Material of the wheel rim |
| RimSize | "16 inch", "17 inch" | Size of the wheel rim |
| MaximumSpeed | 100, 200 | Permitted maximum tire speed |

Examples of notation:<br>
``Wheel::RimMaterial.Steel``<br>
``Wheels::RimSize."16 inch"``<br>

The ``Wheel`` model is well suited to show how domains can be restricted.
Depending on the material of the wheel rim, only certain sizes are allowed.
This dependency is expressed later by a Configuration Rule.<br><br>

#### The Models ``SpareWheel1`` and ``SpareWheel2``
The ``SpareWheel1`` and ``SpareWheel2`` Models are submodels (Component Models) of the ``BaseComponent`` Model.
They describe the optional vehicle's spare wheels using Attributes that reflect the spare wheel's characteristics.
| Attribute | Example Values | Meaning |
|---|---|---|
| RimSize | "16 inch", "17 inch" | Size of the spare wheel rim |

Example of notation:<br>
``SpereWheel::RimSize."16 inch"``<br><br>

#### The Shared Modell ```TechnicalShared```
The `[*Shared Model*](../../../docu-hca/glossary/terms-modeling/#shared-configuration-model)` ``TechnicalShared`` contains Attributes that are can be shared by all Component Models.
Attribute | Example Values | Meaning |
|---|---|---|
| Usage | Summer, Winter, Offroad | Intended use of the wheel |
| RimSize | "16 inch", "17 inch" | Rim size entered as a requirement |

Examples of notation:<br>
``shared::TechnicalShared::Usage.Offroad``<br>
``shared::TechnicalShared:::RimSize."16 inch"``<br><br>
