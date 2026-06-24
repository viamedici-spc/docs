## 2.5 What is a Configuration Rule?
A [*Configuration Rule*](../../../docu-hca/glossary/terms-modeling/#configuration-rule), or “Rule” for short,
describes a business or technical relationship.<br>

For example, a Rule can specify:<br>
• If A is selected, B must also be selected.<br>
• If A is selected, B must not be selected.<br>
• If A AND B are selected, C must be selected.<br>
• A specific Attribute-Value combination is prohibited.<br>
• A specific numerical value must be greater or less than a defined threshold.<br>

Example:<br>

```CarSize.Big -> CO2Emissions > 200```<br>

This rule means:<br>
If the vehicle is large, the CO₂ emissions must be greater than 200.<br>

Another example:<br>

```CarSize.Small -> !BaseComponent::Colour.White```<br>

This rule means:<br>
If the vehicle is small, the color white must not be available.<br>

Note: ```BaseComponent``` is a submodel. ```Colour``` is an Attribute in this submodel, which is also referred to as a
[*Component Model*](../../../docu-hca/glossary/terms-modeling/#component-configuration-model).<br>

Rules are the central element of a Configuration Model. They describe the knowledge that a product manager,
engineer, or subject matter expert has about the product.
