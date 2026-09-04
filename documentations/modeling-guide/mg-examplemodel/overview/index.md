## 4.1 Overview of the Model Structure

The example uses a Main Model, or Root Model, called ```Car```.
This [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model) contains submodels,
also called [*Component Configuration Models*](../../../docu-hca/glossary/terms-modeling/#component-configuration-model),
shortly Component Models, or Components.
![](ModelStructureAutomotiveExample.png "Model Structure of the automotive teaching example")
Fig. 4-1: Model structure of the automotive teaching example

The Main Model ```Car``` describes the higher-level properties of the vehicle. These include, for example,
the vehicle size (```CarSize```) and CO₂ emissions (`CO2Emissions`).<br>

The ```BaseComponent``` model groups the technical base components of the vehicle.
These include the engine (Component Model `Engine`), transmission (Component Model `Transmission`),
wheels (Component Model `Wheel`), and spare wheels (Component Model`SpareWheel1`) and (Component Model`SpareWheel2`).

The [*Shared Configuration Model*](../../../docu-hca/glossary/terms-modeling/#shared-configuration-model) `TechnicalShared`
contains technical characteristics that can be used across all other Configuration Models.
A typical example is the rim size ([*Attribute*](../../../docu-hca/glossary/terms-modeling/#attribute) ``RimSize``).
It is maintained in that Model and is synchronized with the rim sizes of the wheels.
