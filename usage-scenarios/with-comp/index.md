##  3.2 Configuration usage scenario with components

In this usage scenario, also two [*Configurators*](/glossary/#configurator) are required, one for passenger cars
and one for trucks. A truck has one specific property:
"Sleeping cabin" with the values "1 bed" and "2 beds". A passenger car (shortly "car") has two
specific properties: "CO2 Emissions" with values between 0 and 300 gram per kilometer and
"Car size" with the values "Small", "Standard" and "Big".

There are two significant differences to the configurator example in subchapter 3.1:

- There are significantly more configuration properties.
- The components of a vehicle, such as the engine, transmission and wheels,
  should be able to configured individually.

In addition, certain configuration properties should be dependent on the sales territory or customer category.
