# 8 Explanations of Configuration States


Why "Big" is not possible for Car size?

```json
{
        "attributeId": {
          "localId": "EngineType",
          "componentPath": [
            "Automobile",
            "Engine"
          ]
        },
        "isSatisfied": true,
        "cardinality": {
          "lowerBound": 1,
          "upperBound": 1
        },
        "values": [
          {
            "choiceValueId": "Burner",
            "possibleDecisionStates": [
              "Included"
            ]
          },
          {
            "choiceValueId": "Electric",
            "possibleDecisionStates": [
              "Excluded"
            ]
          },
          {
            "choiceValueId": "Hybrid",
            "possibleDecisionStates": [
              "Excluded"
            ]
          }
        ]
      }
```


