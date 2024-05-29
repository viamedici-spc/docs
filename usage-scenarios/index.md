# 3 The Use Cases

In this documentation, the configuration of automobiles serves as an example. A [*Configurator*](/glossary/#configurator)
for passenger cars (PCs) and one for trucks (LTCs) are required.
In the first use case (see section 3.1), there are no vehicle components that can be configured
individually. The vehicle is treated as a whole with a set of properties.
The majority of these properties are identical for both passenger cars and trucks.
Therefore, even in this very simple use case, the concept of inheritance is employed.

In the second use case - a slightly more complex -  (see section 3.2), there are vehicle components
that can each be configured individually. The vehicle is thus composed of components.
Both the components and the vehicle as a whole have properties.
Common properties are managed in one place and used in various locations.
More details on this aspect can be found in the guide on configuration modeling.

This documentation is not about modeling. Nevertheless, some modeling aspects are mentioned
for better understanding.







