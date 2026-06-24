## 2.4 Why isn’t a simple list of options enough??
One might think that a [*Configurator*](../../../docu-hca/glossary/terms-infrastructure/#configurator) consists only of lists of selectable options.
For very simple products, this may be sufficient. For more complex products, however, it is not enough.<br>
Example:<br>
For the engine type (Attribute ```EngineType```), the user selects the Value ```Electric```. Formal notation: ```EngineType.Electric```.
Selecting a fuel type such as gasoline, diesel, or natural gas must not be possible.<br>
If the Configurator only had simple option lists, the user could still select the following invalid combination:<br>

```EngineType.Electric```<br>
```FuelType.Diesel```

This combination does not make sense from a business or technical perspective.
That is why the Configurator needs [*Configuration Rules*](../../../docu-hca/glossary/terms-modeling/#configuration-rule).
A suitable Rule could be:<br>

```EngineType.Electric -> !FuelType.*```<br>

This Rule means:<br>
If the engine type is electric, no fuel type may be selectable.<br>

The exclamation mark represents negation. The asterisk as a wildcard stands for all possible Values of the respective Attribute,
in this example ```FuelType```.
The [*Configuration Model*](../../../docu-hca/glossary/terms-modeling/#configuration-model) therefore ensures that the system
not only displays options, but also enforces combinations that are correct from a business and technical perspective.
