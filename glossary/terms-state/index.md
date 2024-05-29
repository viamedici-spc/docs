<a id ="terms-state"></a>
## Terms relating to the configuration state
<a name ="decision"></a>
### Decision
A *Decision* is a decision regarding an [*Attribute Value*](#attribute-value). It concerns the question of whether a Value is included
in the [*Solution*](#solution) (Value-Decision State = “Included”) or not (Value-Decision State = “Excluded”).

<a name ="choice-decision"></a>
### Choice Decision
A *Choice Decision* is a [*Decision*](#decision) regarding a [*Value*](#value) of a [*Choice Attribute*](#choice-attribute).

<a name ="boolean-decision"></a>
### Boolean Decision
A *Boolean Decision* is a [*Decision*](#decision) regarding a [*Value*](#value) of a [*Boolean Attribute*](#boolean-attribute).

<a name ="numeric-decision"></a>
### Numeric Decision
A *Numeric Decision* is a [*Decision*](#decision) regarding a [*Value*](#value) of a [*Numeric Attribute*](#numeric-attribute).

<a name ="component-decision"></a>
### Component Decision
A *Component Decision* is a [*Decision*](#decision) regarding a [*Value*](#value) of a [*Component Attribute*](#component-attribute).

<a name ="explicit-decision"></a>
### Explicit Decision
An *Explicit Decision* is a [*Decision*](#decision) which is being made by a [*HCA*](#hca) consumer,
for instance a [*Configurator*](#configurator).

<a name ="implicit-decision"></a>
### Implicit Decision
An *Impicit Decision* is a [*Decision*](#decision) which is being made by the [*Configuration Engine*](#configuration-engine).
It results from the currently made [*Explicit Decisions*](#explicit-decision), [*Constraints*](#constraint) and [*Cardinalities*](#cardinality).
For example: If a mandatory Attribute has only one remaining possible Value then this value is implicitly
included in the [*Solution*](#solution).

<a name ="multiple-decision"></a>
### Multiple Decision
A *Multiple Decision* affects more than one [*Attribute*](#attribute). This means that several [*Explicit Decisions*](#explicit-decision) are transferred
with one PUT request.

<a name ="affected-decision"></a>
### Affected Decision
An [*Affected Decision*](#affected-decision) is a [*Decision*](#decision) which is in a relation to the executed [*Explicit Decisions*](#explicit-decision).

<a name ="rejected-decision"></a>
### Rejected Decision
A *Rejected Decision* is an [*Explicit Decision*](#explicit-decision) which contradicts the [*Configuration Model*](#configuration-model)
and has therefore been rejected by the [*Configuration Engine*](#configuration-engine).


<a name ="consequence"></a>
### Consequence
A *Consequence* is the result of an evaluation weather of a [*Configuration Model*](#configuration-model)
or of made [*Decisions*](#decision)] in conjunction with a Configuration Model, especially with the
underlying set of [*Constraints*](#constraint).
It specifies for a certain [*Attribute*](#attribute) in every case the
[*Attribute Satisfaction State*](#attribute-satisfaction-state) (true or false).
In the case of "false", at least one Decision must still be made regarding an [*Attribute Value*](#attribute-value).
For a [*Choice Attribute*](#choice-attribute) several Decisions may be still necessary. In addition to the Attribute Satisfaction State,
further information is provided depending on the type of Attribute. Therefore, 4 types of Consequences are distinguished:
[*Choice Consequences*](#choice-consequence), [*Numeric Consequences*](#numeric-consequence),
[*Boolean Consequences*](#boolean-consequence) and [*Component Consequences*](#component-consequence).


<a name ="choice-consequence"></a>
### Choice Consequence
A *Choice Consequence* is a [*Consequence*](#consquence) regarding a [*Choice Attribute*](#choice-attribute). For such an Attribute, represented by a
[*Global Attribute Id*](#global-attribute-id) ("attributeId"), the following is specified:
1. By a boolean is specified whether a [*Decision*](#decision) is still necessary ("isSatisfied": true) or not ("isSatisfied": false).
2. In the object "Cardinality" is specified the assignment type of the *Attribute Values* that is determined
   during modeling (mandatory, optional, multiple).
3. Furthermore, the currently still possible [*Decision States*](#possible-decision-state) are indicated for every Value.
   There are zwo possible Decision States for a Value of a Choice Attribute: "Included" and "Excluded".
   "Included" means in the current case that a Value of a Choice Attribute can be taken into account when the
   [*Configuration Engine*](#configuration-engine) searches for a [*Solution*](#solution). "Excluded" means in the current case that a considered Value
   of a Choice Attribute cannot be taken into account when the Configuration Engine searches for a Solution.
   For an explanation of the 'attributeId' please refer to [*Global Attribute Id*](#global-attribute-id).

**An example:**
```json
{
  "attributeId": {
    "localId": "RimSize",
    "sharedConfigurationModelId": "",
    "componentPath": []
  },
  "isSatisfied": true,
  "cardinality": {
    "lowerBound": 1,
    "upperBound": 1
  },
  "values": [
    {
      "choiceValueId": "16 inch",
      "possibleDecisionStates": [
        "Included",
        "Excluded"
      ]
    },
    {
      "choiceValueId": "18 inch",
      "possibleDecisionStates": [
        "Included",
        "Excluded"
      ]
    }
  ]
}
```


<a name ="boolean-consequence"></a>
### Boolean Consequence
A *Boolean Consequence* is a [*Consequence*](#consquence) regarding a [*Boolean Attribute*](#boolean-attribute).
For such an Attribute, represented by a [*Global Attribute Id*](#global-attribute-id) ("attributeId"),
the following is specified:
1. By a boolean is specified whether a [*Decision*](#decision) is still necessary ("isSatisfied": true) or not ("isSatisfied": false).
2. The meta attribute "selection" indicates if a Value assignment is mandatory or not. It represents the design decision of the modeler
   and can be used, for example, for the state display of a control.
3. Furthermore, the currently still possible [*Decision States*](#possible-decision-state) are indicated (true, false).

**An example:**
```json
{
  "attributeId": {
    "localId": "Tubeless",
    "sharedConfigurationModelId": "TechnicalShared",
    "componentPath": []
  },
  "isSatisfied": false,
  "selection": "Mandatory",
  "possibleDecisionStates": [
    false,
    true
  ]
}
```
<a name ="numeric-consequence"></a>
### Numeric Consequence
A *Numeric Consequence* is a [*Consequence*](#consquence) regarding a [*Numeric Attribute*](#numeric-attribute).
For such an Attribute, represented by a [*Global Attribute Id*](#global-attribute-id) ("attributeId"),
the following is specified:
1. By a boolean is specified whether a [*Decision*](#decision) is still necessary ("isSatisfied": true) or not ("isSatisfied": false).
2. The meta attribute "selection" indicates if a Value assignment is mandatory or not. It represents the design decision of the modeler
   and can be used, for example, for the state display of a control.
3. The meta attribute "range" specifies a range of numbers by specifying a maximum (max) and a minimum value (min).
4. The number of decimal places is specified by an integer value of the meta-attribute "decimalPlaces".

**An example:**
```json
{
  "attributeId": {
    "localId": "CO2Emissions",
    "componentPath": []
  },
  "isSatisfied": true,
  "selection": "Optional",
  "range": {
    "min": 0,
    "max": 300
  },
  "decimalPlaces": 0
}
```

<a name ="component-consequence"></a>
### Component Consequence
A *Component Consequence* is a [*Consequence*](#consquence) regarding a [*Component Attribute*](#component-attribute).
For such an Attribute, represented by a [*Global Attribute Id*](#global-attribute-id) ("attributeId"),
the following is specified:
1. By a boolean is specified whether a [*Decision*](#decision) is still necessary ("isSatisfied": true) or not ("isSatisfied": false).
2. The meta attribute "inclusion" specifies whether a [*Component Configuration Model*](#component-configuration-model)
   should be permanently included in the [*Solution*](#solution) finding process or only optionally.
   It represents the design decision of the modeller, who must examine whether a system component of
   the real world is always or only optionally part of a system.
3. Furthermore, the currently still possible [*Decision States*](#possible-decision-state) are indicated (true, false).

**An example:**
```json
{
  "attributeId": {
    "localId": "BackWheels",
    "componentPath": [
      "Automobile"
    ]
  },
  "isSatisfied": true,
  "inclusion": "Always",
  "possibleDecisionStates": [
    "Included"
  ]
}
```

<a name ="state"></a>
### State
A *State* generally provides information on
[*Attribute Values*](#attribute-value) and their consideration when calculating a [*Solution*](#solution)
by the [*Configuration Engine*](#configuration-engine).


<a name ="attribute-satisfaction-state"></a>
### Attribute Satisfaction State
The *Attribute Satisfaction State* indicates if [*Decisions*](#decision) for a certain
[*Attribute*](#attribute) are still required to be made.

<a name ="possible-decision-state"></a>
### Possible Decision State
The *Possible Decision State* refers to a [*Value*](#attribute-value) of a [*Choice Attribute*](#choice-attribute),
to the two states of a [*Boolean Attribute*](#boolean-attribute) or a referenced [*Component Configuration Model*](#component-configuration-model).
It is transmitted to the [*Configuration Engine*](#configuration-engine) with a request. The following Possible Decision States are distinguished:

* Included

*Included* means that a considered Value of a Choice Attribute or a referenced Component Configuration Model are taken into account
when the Configuration Engine searches for a [*Solution*](#solution).
In case of a Choice Attribute this is analogous to selecting a Value.

* Excluded

*Excluded* means that a considered Value of a Choice Attribute or a referenced Component Configuration Model are not taken into account
when the Configuration Engine searches for a Solution.
In case of a Choice Attribute an excluded Value can not become the subject of an [*Implicit Decision*](#implicit-decision).


<a name ="configuration-model-satisfaction-state"></a>
### Configuration Model-Satisfaction State
The *Configuration Model-Satisfaction State* indicates for the whole [*Configuration Model*](#configuration-model) if [*Decisions*](#decision) are still
required to be made.
The satisfaction of all  [*Attributes*](#attribute) is necessary in order for the satisfaction of the Configuration Model to be possible.
But that alone does not necessarily suffice to satisfy the whole Configuration Model.


<a name ="configuration-state"></a>
### Configuration State
The *Configuration State* is the whole set of [*Explicit Decisions*](#explicit-decision),
computed [*Impicit Decisions*](#implicit-decision) and computed [*Consequences*](#consequence).


<a name ="decision-state"></a>
### Decision State
*Decision State* is often used as a synonym for both [*Value Decision State*](#value-decision-state)
and [*Model Decision State*](#model-decision-state) .

In the case of a [*Component Configuration Model*](#component-configuration-model), one cannot
speak of "Value". The model itself may or may not be taken into account when calculating a
[*Solution*](#solution) by the [*Configuration Engine*](#configuration-engine).
This is exactly what is meant by Decision State in this case. It is - strictly speaking - a
[*Model Decision State*](#model-decision-state).


<a name ="value-decision-state"></a>
### Value Decision State
The *Value-Decision State* indicates whether an [*Attribute Value*](#attribute-value) is excluded or included
in calculating a [*Solution*](#solution) by the [*Configuration Engine*](#configuration-engine).

In case of a Choice Attribute *undefined* is possible.
*Undefined* states that it is not yet decided if a considered Choice Value are taken into account or not.
In a [*Configurator*](#configurator) this is analogous to not having selected a Value.
An undefined Choice Value can still become the subject of an [*Implicit Decision*](#implicit-decision).

The Value-Decision States *Excluded* and *Included* can be set explicitly by the [*Configurator*](#configurator) or
implicitly by the [*Configuration Engine*](#configuration-engine).


<a name ="model-decision-state"></a>
### Model Decision State
The *Model-Decision State* indicates whether a [*Component Configuration Model*](#component-configuration-model)
is excluded or included in calculating a [*Solution*](#solution) by the [*Configuration Engine*](#configuration-engine).
*Undefined* is possible what means that it is not yet decided if a considered Component Configuration Model
are taken into account or not.
I
A referenced Component Configuration Model that has the Decision State *undefined* can also become the subject of an Implicit Decision.


<a name ="explanation-request"></a>
### Explanation Request
An *Explanation Request* refers to a [*State*](#state).
You can ask for the [*Attribute Satisfaction State*](#attribute-satisfaction-state),
the [*Configuration Model Satisfaction State*](#configuration-model-satisfaction-state),
the [*Value Decision State*](#value-decision-state) of an [*Attribute Value*](#attribute-value) or
the [*Model Decision State*](#model-decision-state) with regard to a [*Component Configuration Model*](#component-configuration-model).

<a name ="explanation-response"></a>
### Explanation response
An *Explanation Response* is the answer to an [*Explanation Request*](#explanation-request).
It contains the following information, depending on the aspect queried:

The [*Global Attribute Id*](#global-attribute-id) of an Attribute under consideration
and the type of [*Constraint*](#constraint) violation ([*Cardinality*](#cardinality) or
[*Rule*](#rule)).

The [*Constraint Ids*](#constraint-id) of the causative [*Rules*](#rule).

Specifications of the causative [*Decisions*](#decision).


<a name ="conflict"></a>
### Conflict
A *Conflict* is a contradiction in the logical sense.
With the exception of some special cases, no conflicts can arise during a [*Configuration Dialogue*](#configuration-dialogue).
However, Conflicts can occur when loading a previous [*Configuration State*](#configuration-state) due to changes in the
[*Configuration Model*](#configuration-model).
Automatic [*Conflict Resolution*](#conflict-resolution) can be switched on or off via the request body parameter "mode".

<a name ="conflict-resolution"></a>
### Conflict Resolution
*Conflict Resolution* may be necessary if [*Conflicts*](#conflict) arise outside of a
[*Configuration Dialogue*](#configuration-dialogue), for example during the loading of a
a previous [*Configuration State*](#configuration-state).
The request body parameter "mode" can be used to control whether conflicts should be resolved manually or automatically.


<a name ="solution"></a>
### Solution
A *Solution* is a satisfied set of [*Attributes*](#attribute).
This means that all Attributes of a [*Configuration Model*](#configuration-model) have been assigned a valid [*Value*](#value)
and that all [*Constraints*](#constraint) are met.
In many cases, it represents a concrete variant of a real world product.
