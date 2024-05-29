<a id ="attribute-removed"></a>
### 7.2.2 One Attribute has been removed or renamed
**Example assumption 1:**

The Attribute "EngineType" has been renamed to "DriveType".
```
{
  "configurationModelId": "Engine",
  "sharedFromConfigurationModels": ["TechnicalShared", "SalesShared"],
  "attributes": {
    "choiceAttributes": [
  {
    "attributeId": "DriveType",
    "lowerBound": 1,
    "upperBound": 1,
    "choiceValues": [
```
We now assume that the [*Configuration Session*](/glossary/#configuration-session) has been initialized
with the changed [Configuration Model](/restore/with-changes/#car) . The response has delivered the code *200*.

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
          "localId": "EngineType",
          "componentPath": [
            "Automobile",
            "Engine"
          ]
        },
        "choiceValueId": "Burner",
        "state": "Included",
        "kind": "Explicit"
      }
    ]
  }
```
The Value "Burner" of the Attribute "EngineType" could not be set because the Attribute
no longer exists in the [*Component Configuration Model*](/glossary/#component-configuration-model) "Engine".


**Example assumption 2**:

The Attribute "Construction" has been renamed to "AutomobileType".
```json

```
The Attribute with the original name "Construction" is used in [Rule 1](/exemplary-configuration-dialogues/with-comp/rules/#rule1).
It was forgotten to change the Attribute Identifier in Rule 1 as well.
This can happen if different tools are used for Attribute and Rule maintenance.

The [Session-create request](/restore/with-changes/#session-create-car) is executed with the modified Configuration Model.

The Configuration Engine evaluates the model. According to Rule 1, the value "Car"
of the Attribute "Construction" must be set.
But it cannot be set because the Attribute no longer exists due to the assumed renaming.

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
