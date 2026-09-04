## 2.2 What is a Configurator?

A [*Configurator*](../../../docu-hca/glossary/terms-infrastructure/#configurator) is an application that allows a user to assemble a product.
A simple Configurator displays selection fields, for example:
Vehicle size: Small / Big<br>
Color: White / Black / Forest Green<br>
Engine type: Electric / Burner / Hybrid<br>
Fuel type: Petrol / Diesel / Gas<br>
Rim material: Steel / Alu<br>
The user selects [*Values*](../../../docu-hca/glossary/terms-modeling/#value). The Configurator then checks whether the selection is valid.
A good Configurator also supports the user by:<br>
• hiding or disabling invalid options,<br>
• automatically taking dependencies into account,<br>
• showing missing required selections,<br>
• explaining conflicts in an understandable way,<br>
• suggesting valid alternatives.<br>
A Configurator is therefore not just an input form. Its backend contains domain knowledge about the product.
This domain knowledge is formally described in a [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model).
