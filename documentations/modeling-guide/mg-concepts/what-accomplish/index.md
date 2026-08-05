## 2.7 What should a Configuration Model accomplish?
A [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model) is intended to fulfill several tasks.
It should:<br>
• describe the product structure,<br>
• define the selectable characteristics, or [*Attributes*](../../../docu-hca/glossary/terms-modeling/#attribute),<br>
• specify allowed [*Values*](../../../docu-hca/glossary/terms-modeling/#value),<br>
• represent business and technical dependencies,<br>
• prevent invalid combinations,<br>
• enable automatic derivations,<br>
• support guided selling,<br>
• serve as the basis for sales, quotation creation, or technical validation.<br><br>
In the automotive example, the model should ensure, for instance, that:<br>
• An electric vehicle does not get a fuel type.<br>
• An off-road vehicle does not get aluminum rims.<br>
• An off-road vehicle requires at least one spare wheel.<br>
• Only an off-road vehicle can be equipped with a bull bar.<br>
• Certain engine and transmission combinations are enforced automatically.<br><br>
The Configuration Model is therefore the business and technical foundation of a
[*Configurator*](../../../docu-hca/glossary/terms-infrastructure/#configurator).



