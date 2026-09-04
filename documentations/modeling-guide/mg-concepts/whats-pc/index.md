## 2.1 What is Product Configuration?

Product configuration refers to the process of defining and managing the various components, options, and attributes
that make up a product. It involves creating a detailed model of the product, including its features, variations,
and relationships, to enable efficient and accurate configuration and customization.

Product configuration means that a product, or a product variant, is assembled from multiple selectable features, also called [*Attributes*](../../../docu-hca/glossary/terms-modeling/#attribute).
For simple products, this is often straightforward.
Example:
A T-shirt can be configured by:<br>
• size,<br>
• color,<br>
• material.<br>
For more complex products, however, there are many dependencies between the individual choices.
A car is a good example. The choice of engine can affect the transmission. The intended use can affect the wheels,
color, spare wheel, and fuel type. The selection of an accessory can, in turn, trigger technical requirements.
Product configuration therefore does not only mean:
“The user selects options.”
Product configuration also means:
“The system checks whether the selected options are allowed together.”
The purpose of configuration modeling is to describe domain-specific relationships formally,
so that a [*Configurator*](../../../docu-hca/glossary/terms-infrastructure/#configurator) allows valid combinations and prevents invalid combinations.
