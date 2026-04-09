<a id ="ten-decisions"></a>
## The example request with 10 Decisions

```
PUT {{baseUrl}}/engine/v2/session/configuration/decision/many
X-SESSION-ID: {{sessionId}}
Content-Type: application/json
```
```json
{
    "mode": {
        "type": "DropExistingDecisions",
        "conflictResolution": {
            "type": "Manual",
            "includeConstraintsInConflictExplanation": true
        }
    },
    "choiceDecisions": [
        {
            "type": "Choice",
            "attributeId": {
                "localId": "SalesRegion",
                "sharedConfigurationModelId": "SalesShared",
                "componentPath": []
            },
            "choiceValueId": "Africa",
            "state": "Included"
        },
        {
            "type": "Choice",
            "attributeId": {
                "localId": "Colour",
                "componentPath": ["Automobile"]
            },
            "choiceValueId": "White",
            "state": "Included"
        },
        {
            "type": "Choice",
            "attributeId": {
                "localId": "Usage",
                "sharedConfigurationModelId": "TechnicalShared",
                "componentPath": []
            },
            "choiceValueId": "Summer",
            "state": "Included"
        },
        {
            "type": "Choice",
            "attributeId": {
                "localId": "EngineType",
                "componentPath": ["Automobile", "Engine"]
            },
            "choiceValueId": "Burner",
            "state": "Included"
        },
        {
            "type": "Choice",
            "attributeId": {
                "localId": "FuelType",
                "componentPath": ["Automobile", "Engine"]
            },
            "choiceValueId": "Petrol",
            "state": "Included"
        },
        {
            "type": "Choice",
            "attributeId": {
                "localId": "Size",
                "sharedConfigurationModelId": "TechnicalShared",
                "componentPath": []
            },
            "choiceValueId": "16 inch",
            "state": "Included"
        },
        {
            "type": "Choice",
            "attributeId": {
                "localId": "NumberOfWheels",
                "componentPath": ["Automobile"]
            },
            "choiceValueId": "3",
            "state": "Included"
        }
    ],
    "numericDecisions": [
        {
            "type": "Numeric",
            "attributeId": {
                "localId": "CO2Emissions",
                "componentPath": []
            },
            "state": "100"
        }
    ],
    "booleanDecisions": [
        {
            "type": "Boolean",
            "attributeId": {
                "localId": "Tubeless",
                "sharedConfigurationModelId": "TechnicalShared",
                "componentPath": []
            },
            "state": false
        }
    ],
    "componentDecisions": [
        {
            "type": "Component",
            "attributeId": {
                "localId": "Transmission",
                "componentPath": ["Automobile"]
            },
            "state": "Excluded"
        }
    ]
}
```
