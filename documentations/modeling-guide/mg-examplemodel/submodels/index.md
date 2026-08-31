## 4.2 Submodels and Attributes

#### The ``Car`` Model
The [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model)
``Car`` is the [*Root Model*](../../../docu-hca/glossary/terms-modeling/#root-configuration-model), also called Main Model.
It describes the vehicle as a whole. It contains
high-level [*Attributes*](../../../docu-hca/glossary/terms-modeling/#attribute) of the vehicle.<br>
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

**Syntax for specifying Attributes of `BaseComponent` in the Model itself:**<br>
```Colour.White```<br>
**Syntax for specifying Attributes of `BaseComponent` in the “Car” model:**<br>
```BasicAutomobile::Colour.White```<br>
TODO: A Component Reference in ``BaseComponent``: ```BasicAutomobile::Engine```

