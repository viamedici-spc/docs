<a id ="terms-modelling"></a>
## Terms relating to the configuration modelling

<a name ="attribute"></a>
### Attribute
An *Attribute* in general is a specific representation of a characteristic of a real-world product.
The naming in upper camel-case notation is based on the names of the real-world characteristics.
The basic typing takes place in: [*Choice Attribute*](#choice-attribute), [*Numeric Attribute*](#numeric-attribute)
and [*Boolean Attribute*](#boolean-attribute), according to the value types "String", "Number" and “Boolean”.
The name of an Attribute serves as an identifier.
In the context of the [*Configuration Engine*](#configuration-engine) there is a special Attribute type "Component".
The value of a [*Component Attribute*](#component-attribute) is a reference to a
[Component Configuration Model](#component-configuration-model).

**Exemplary Attribute Names:**  AutomobileType, Colour;


<a name ="attribute-value"></a>
### Attribute Value
An *Attribute Value* is a specific representation of a discrete Value of a
characteristic of a real-world product.
You can also put it this way: An Attribute Value is a discrete Value either
of an Choice Attribute or a Numeric Attribute or a Boolean Attribute.
Concerning an Choice Attribute one or more Values can
be active (chosen) depending on the [*Cardinality*](#cardinality).
In case of a Component Attribute the value is a reference
to a [Component Configuration Model](#component-configuration-model).


<a name ="cardinality"></a>
### Cardinality
The *Cardinality* defines how many [*Attribute Values*](#attribute-value) of
a specific [*Attribute*](#attribute) must be (Lower Bound) and can be
(Upper Bound) included. Cardinalities refer to an interval of non-negative
whole numbers. An Attribute with Cardinality [0 .. 1] is said to be optional.
A mandatory Attribute has the Cardinality [1 .. 1] or [1 .. n].
A multi-valued Attribute is an Attribute with an upper limit greater
than 1 ([0 .. n] or [1 .. n]).


<a name ="choice-attribute"></a>
### Choice Attribute
A *Choice Attribute* is assigned one or more Values from an Enumeration.

**Exemplary declaration of a Choice Attribute in JSON notation:**

```json
{
  "attributeId": "AutomobileType",
  "lowerBound": 1,
  "upperBound": 1,
  "attributeValues": [
    {
      "attributeValueId": "Car"
    },
    {
      "attributeValueId": "Truck"
    }
  ]
}
```

<a name ="numeric-attribute"></a>
### Numeric Attribute
A *Numeric Attribute* is assigned one discrete numerical [*Value*](#value).

**Exemplary declaration of a Numeric Attribute in JSON notation:**

```json
{
  "attributeId": "CO2Emissions",
  "isDecisionRequired": false,
  "min": 0,
  "max": 300,
  "decimalPlaces": 0
}
```

<a name ="boolean-attribute"></a>
### Boolean Attribute
A Boolean Attribute is assigned one of two discrete [*Values*](#value).

**Exemplary declaration of a Boolean Attribute in JSON notation:**

```json
{
  "attributeId": "Tubeless",
  "isDecisionRequired": true
}
```

<a name ="component-attribute"></a>
### Component Attribute
*Component Attribute* is a special Attribute type in the context of the Configuration Engine.
The value of a Component Attribute is a reference to a
[Component Configuration Model](#component-configuration-model).


<a name ="configuration-model"></a>
### Configuration Model
A *Configuration Model* consists of [*Attributes*](#attribute), [*Attribute Values*](#attribute-value),
[*Constraints*](#constraint) and optional associated [*Usage Rules*](#usage-rule).
It is the basis for solving a configuration task.
A Configuration Model can inherit model elements from other Configuration Models.


<a name ="root-configuration-model"></a>
### Root Configuration Model
The *Root Configuration Model* is a [*Configuration Model*](#configuration-model).
In a set (package) of referenced [*Component Configuration Models*](#component-configuration-model) and
[*Shared Configuration Models*](#component-configuration-model) it serves a the starting point
for processing by the [*Configuration Engine*](#configuration-engine). The name of the Root Configuration Model
must be specified in the body of the POST request for [*Session*](#session) creation.


<a name ="component"></a>
### Component
*Component* is in the modelling context a synonym for [*Component Configuration Model*](#component-configuration-model).


<a name ="component-configuration-model"></a>
### Component Configuration Model
A *Component Configuration Model* is a [*Configuration Model*](#configuration-model).
One Component Configuration Model can be referenced in others.
A set of referenced Component Configuration Models can be used to map
component based product or system structures of the real world.
You can also put it like this: If the name of a Configuration Model is used as the Value
of a [*Component Attribute*](#component-attribute) contained in another Configuration Model,
then this model is a Component Configuration Model or serves as such one.


<a name ="constraint"></a>
### Constraint
A *Constraint* is generally a restriction regarding the Values of an [*Attribute*](#attribute).
It results from the [*Cardinality*](#cardinality) of an Attribute and/or from
[*Rules*](#rule) regarding the Attribute respectively the [*Attribute Values*](#attribute-value).

<a name ="rule"></a>
### Rule
A *Rule* is a formal representation of a relation between characteristics (Attributes) of real-world products
respectively their Values. The notation can be done in text ([*Textual Rule*](#textual-rule))
or in a matrix form ([*Tabular Rule*](#tabular-rule)).

<a name ="logical-expression"></a>
### Logical Expression
A *Logical Expression* is formed by combining logical operands with logical operators
(comparisons, negation, conjunction, disjunction) and brackets.
A Logical Expression evaluates to either “true” or “false".


<a name ="shared-configuration-model"></a>
### Shared Configuration Model
A *Shared Configuration Model* is a [*Configuration Model*](#configuration-model).
It can be referenced in Configuration Models. Through such a reference, the model elements of the
Shared Configuration Model can be used in any number of Configuration Models. The purpose is to avoid redundancies.


<a name ="tabular-rule"></a>
### Tabular Rule
A *Tabular Rule* is a table representation of a relation between characteristics
of real-world products respectively their values.
**Example:**

| Property 1     | Property 2 | Property Value 1 | Property Value 2 | Rule type |
|----------------|------------|------------------|------------------|-----------|
| AutomobileType | RimSize    | Car              | 25 inch          | Exclusion |
| AutomobileType | RimSize    | Car              | 27 inch          | Exclusion |
| AutomobileType | RimSize    | Truck            | 18 inch          | Exclusion |

<a name ="textual-rule"></a>
### Textual Rule
A *Textual Rule* is a textual representation of a relation between characteristics of
real-world products respectively their values. A **D**omain-**S**pecific **L**anguage (DSL)
is used for the notation. Textual rules are used to express exclusions or
requirements using complex [*Logical Expressions*](#logical-expression).
**Example:** IF AutomobileType = “Truck” THEN RimSize >= 20 inch


<a name ="usage-rule"></a>
### Usage Rule
An *Usage Rule* describes in a HCA-specific notation the use of a [*Configuration Model*](#configuration-model)
respectively of Configuration Model elements in relation for example to user roles and
time periods. For example, it can be declared for which user role from which date or up to
which date the entire Configuration Model or individual model elements ([*Attributes*](#attribute),
[*Attribute Values*](#attribute-value)) are available.

<a name ="value"></a>
### Value
*Value* is used as a synonym for [*Attribute Value*](#attribute-value).

<a name ="value-assignment-possibilities"></a>
### Value Assignment Possibilities
There are two possibilities regarding the [*Value*](#attribute-value) assignment of [*Attributes*](#attribute) of the type Boolean, Numeric or [*Component*](#component-attribute):
"Mandatory" and "Optional".
1. "Mandatory" means that an assignment of a Value must be done. The Value can be - depending on the type of the Attribute -
   a numeric, a boolean or a reference to a Component Configuration Model.
2. "Optional" means that such an assignment can - but not must - be done.


