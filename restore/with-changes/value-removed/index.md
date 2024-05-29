<a id ="value-removed"></a>
### 7.2.1 One Attribute Value has been removed or renamed

**Example assumption 1:**

The value "Africa" of the Attribute "SalesRegion" has been removed from the
[Configuration Model](/restore/with-changes/#car) so that only 2 Values remain.

```
{
  "attributeId": "SalesRegion",
    "lowerBound": 1,
    "upperBound": 1,
    "choiceValues": [
      {
        "choiceValueId": "Asia"
      },
      {
        "choiceValueId": "China"
      }
    ]
}
```
We now assume that the [*Configuration Session*](/glossary/#configuration-session) has been initialized
with the changed Configuration Model. The response has delivered the code *200*.

The [*Decisions*](/glossary/#decision) that now need to be set are the [10 Decisions](/restore/without-changes/#previous-decisions) of the
[*Configuration Dialogue*](/glossary/#configuration-dialogue) from [6.2.1](/exemplary-configuration-dialogues/with-comp/dialogue/#dialogue).

The route is used that enables many Decisions to be transmitted with one request.

The example request with the 10 Decisions can be seen [here](/restore/with-changes/the-many-decisions-request/#ten-decisions).

The response delivers the code *200*. The response body contains the [*Consequences*](/glossary/#consequence),
the [*Affected Decisions*](/glossary/#affected-decision) and
the [*Rejected Decisions*](/glossary/#rejected-decision):
```json
"rejectedDecisions": {
    "booleanDecisions": [],
    "numericDecisions": [],
    "componentDecisions": [],
    "choiceValueDecisions": [
      {
        "attributeId": {
          "localId": "SalesRegion",
          "sharedConfigurationModelId": "SalesShared",
          "componentPath": []
        },
        "choiceValueId": "Africa",
        "state": "Included",
        "kind": "Explicit"
      }
    ]
  }
```
The Value "Africa" of the Attribute "SalesRegion" could not be set because it no longer exists in the
[*Shared Configuration Model*](/glossary/#shared-configuration-model) "SalesShared".


**Example assumption 2**:

The Value "Car" of the Attribute "Construction" has been renamed to "PersonalCar".
```
{
  "attributeId": "Construction",
  "lowerBound": 1,
  "upperBound": 1,
  "choiceValues": [
    {
      "choiceValueId": "PersonalCar"
    },
    {
      "choiceValueId": "Truck"
    }
  ]
}
```
The Value "Car" is used in [Rule 1](/exemplary-configuration-dialogues/with-comp/rules/#rule1).
It was forgotten to change the Value in Rule 1 as well.
This can happen if different tools are used for Attribute and Rule maintenance.

The [Session-create request](/restore/with-changes/#session-create-car) is executed with the modified Configuration Model.

The Configuration Engine evaluates the model. According to Rule 1, the value "Car" must be set.
But it cannot be set because it no longer exists due to the assumed renaming.

The response therefore returns the error code *409*, which indicates a [*Conflict*](/glossary/#conflict) in the Configuration Model.

```json
{
  "type": "ConfigurationModelNotFeasible",
  "constraintExplanations": [
    {
      "causedByCardinalities": [],
      "causedByRules": [
        {
          "type": "Rule",
          "constraintId": {
            "localId": "Rule1:TheConstructionIsCar",
            "configurationModelId": "Car"
          }
        }
      ]
    }
  ],
  "status": 409
}
```


