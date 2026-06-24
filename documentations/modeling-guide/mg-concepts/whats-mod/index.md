## 2.3 What is a Configuration Model?
A [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model) is the formal description of a configurable product.
It defines:<br>
• which parts, or [*Components*](../../../docu-hca/glossary/terms-modeling/#component), the product consists of,<br>
• which properties, or [*Attributes*](../../../docu-hca/glossary/terms-modeling/#attribute), these components have,<br>
• which [*Values*](../../../docu-hca/glossary/terms-modeling/#value) are allowed for these Attributes,<br>
• which combinations are allowed or forbidden.<br>

In the automotive example, there is a base model, or root model, named ```Car```.
This model describes the complete vehicle.
The [*Component*](../../../docu-hca/glossary/terms-modeling/#component) ```BaseComponent``` is included in ```Car```.
```BaseComponent``` contains the following [*Component Models*](../../../docu-hca/glossary/terms-modeling/#component-configuration-model):<br>
```
Wheels
SpareWheel1
SpareWheel2
Engine
Transmission
```
In addition, there is a Configuration Model named ```TechnicalShared```.
This model contains technical features, or Attributes, that can be shared by multiple other models.
Example:<br>
```shared::TechnicalShared::Usage."Off road"```<br>
The information ```Usage."Off road"``` can affect several components:<br>
• the engine,<br>
• the transmission,<br>
• the wheels,<br>
• the spare wheels.<br>
For this reason, this attribute is located in a shared model.
The model structure of the teaching example can be represented in simplified form as follows:<br>
```
Car
└── BaseComponent
    ├── Wheels
    ├── SpareWheel1
    ├── SpareWheel2
    ├── Engine
    └── Transmission
TechnicalShared
```
This structure is explained step by step in the following chapters.
