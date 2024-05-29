<a id = "consequences"></a>
## 6.2.3 Consequences

<a id = "consequences-of-the-decisions-1-to-3"></a>
### Consequences of the Decisions 1 to 3
```json
{
"isConfigurationSatisfied": false,
"canAttributeContributeToConfigurationSatisfaction": [],
"choiceConsequences": [
{
"attributeId": {
"localId": "CarSize",
"componentPath": []
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "Big",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "Small",
"possibleDecisionStates": [
"Excluded"
]
},
{
"choiceValueId": "Standard",
"possibleDecisionStates": [
"Included",
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Colour",
"componentPath": [
"Automobile"
]
},
"isSatisfied": true,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "Grey",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "White",
"possibleDecisionStates": [
"Included"
]
}
]
},
{
"attributeId": {
"localId": "NumberOfWheels",
"componentPath": [
"Automobile"
]
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "3",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "4",
"possibleDecisionStates": [
"Included",
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Number",
"componentPath": [
"Automobile",
"BackWheels"
]
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "1",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "2",
"possibleDecisionStates": [
"Included",
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Material",
"componentPath": [
"Automobile",
"BackWheels",
"Rim"
]
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "Alu",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "Steel",
"possibleDecisionStates": [
"Included",
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Style",
"componentPath": [
"Automobile",
"BackWheels",
"Rim"
]
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "CA1",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "CA2",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "TRX1",
"possibleDecisionStates": [
"Excluded"
]
},
{
"choiceValueId": "TRX2",
"possibleDecisionStates": [
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "MaximumSpeed",
"componentPath": [
"Automobile",
"BackWheels",
"Tire"
]
},
"isSatisfied": true,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "100",
"possibleDecisionStates": [
"Excluded"
]
},
{
"choiceValueId": "180",
"possibleDecisionStates": [
"Included"
]
},
{
"choiceValueId": "200",
"possibleDecisionStates": [
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "EngineType",
"componentPath": [
"Automobile",
"Engine"
]
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "Burner",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "Electric",
"possibleDecisionStates": [
"Included",
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
},
{
"attributeId": {
"localId": "FuelType",
"componentPath": [
"Automobile",
"Engine"
]
},
"isSatisfied": true,
"cardinality": {
"lowerBound": 0,
"upperBound": 1
},
"values": [
{
"choiceValueId": "Diesel",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "Gas",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "Petrol",
"possibleDecisionStates": [
"Included",
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Power",
"componentPath": [
"Automobile",
"Engine"
]
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "100 KW",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "200 KW",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "300 KW",
"possibleDecisionStates": [
"Included",
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Number",
"componentPath": [
"Automobile",
"FrontWheels"
]
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "1",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "2",
"possibleDecisionStates": [
"Included",
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Material",
"componentPath": [
"Automobile",
"FrontWheels",
"Rim"
]
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "Alu",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "Steel",
"possibleDecisionStates": [
"Included",
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Style",
"componentPath": [
"Automobile",
"FrontWheels",
"Rim"
]
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "CA1",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "CA2",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "TRX1",
"possibleDecisionStates": [
"Excluded"
]
},
{
"choiceValueId": "TRX2",
"possibleDecisionStates": [
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "MaximumSpeed",
"componentPath": [
"Automobile",
"FrontWheels",
"Tire"
]
},
"isSatisfied": true,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "100",
"possibleDecisionStates": [
"Excluded"
]
},
{
"choiceValueId": "180",
"possibleDecisionStates": [
"Included"
]
},
{
"choiceValueId": "200",
"possibleDecisionStates": [
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Number",
"componentPath": [
"Automobile",
"SpareWheel"
]
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "1",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "2",
"possibleDecisionStates": [
"Included",
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Material",
"componentPath": [
"Automobile",
"SpareWheel",
"Rim"
]
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "Alu",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "Steel",
"possibleDecisionStates": [
"Included",
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Style",
"componentPath": [
"Automobile",
"SpareWheel",
"Rim"
]
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "CA1",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "CA2",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "TRX1",
"possibleDecisionStates": [
"Excluded"
]
},
{
"choiceValueId": "TRX2",
"possibleDecisionStates": [
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "MaximumSpeed",
"componentPath": [
"Automobile",
"SpareWheel",
"Tire"
]
},
"isSatisfied": true,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "100",
"possibleDecisionStates": [
"Excluded"
]
},
{
"choiceValueId": "180",
"possibleDecisionStates": [
"Included"
]
},
{
"choiceValueId": "200",
"possibleDecisionStates": [
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Kind",
"componentPath": [
"Automobile",
"Transmission"
]
},
"isSatisfied": true,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "Automatic",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "Manual",
"possibleDecisionStates": [
"Included",
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "CustomerCategory",
"sharedConfigurationModelId": "SalesShared",
"componentPath": []
},
"isSatisfied": false,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "A",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "B",
"possibleDecisionStates": [
"Included",
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "SalesRegion",
"sharedConfigurationModelId": "SalesShared",
"componentPath": []
},
"isSatisfied": true,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "Africa",
"possibleDecisionStates": [
"Included"
]
},
{
"choiceValueId": "Asia",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "China",
"possibleDecisionStates": [
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Construction",
"sharedConfigurationModelId": "TechnicalShared",
"componentPath": []
},
"isSatisfied": true,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "Car",
"possibleDecisionStates": [
"Included"
]
},
{
"choiceValueId": "Truck",
"possibleDecisionStates": [
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Size",
"sharedConfigurationModelId": "TechnicalShared",
"componentPath": []
},
"isSatisfied": false,
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
},
{
"choiceValueId": "25 inch",
"possibleDecisionStates": [
"Excluded"
]
},
{
"choiceValueId": "28 inch",
"possibleDecisionStates": [
"Excluded"
]
}
]
},
{
"attributeId": {
"localId": "Usage",
"sharedConfigurationModelId": "TechnicalShared",
"componentPath": []
},
"isSatisfied": true,
"cardinality": {
"lowerBound": 1,
"upperBound": 1
},
"values": [
{
"choiceValueId": "Off road",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"choiceValueId": "Summer",
"possibleDecisionStates": [
"Included"
]
},
{
"choiceValueId": "Winter",
"possibleDecisionStates": [
"Excluded"
]
}
]
}
],
"numericConsequences": [
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
],
"booleanConsequences": [
{
"attributeId": {
"localId": "Tubeless",
"sharedConfigurationModelId": "TechnicalShared",
"componentPath": []
},
"isSatisfied": true,
"selection": "Mandatory",
"possibleDecisionStates": [
false
]
}
],
"componentConsequences": [
{
"attributeId": {
"localId": "Automobile",
"componentPath": []
},
"isSatisfied": true,
"inclusion": "Always",
"possibleDecisionStates": [
"Included"
]
},
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
},
{
"attributeId": {
"localId": "Engine",
"componentPath": [
"Automobile"
]
},
"isSatisfied": true,
"inclusion": "Always",
"possibleDecisionStates": [
"Included"
]
},
{
"attributeId": {
"localId": "FrontWheels",
"componentPath": [
"Automobile"
]
},
"isSatisfied": true,
"inclusion": "Always",
"possibleDecisionStates": [
"Included"
]
},
{
"attributeId": {
"localId": "SpareWheel",
"componentPath": [
"Automobile"
]
},
"isSatisfied": true,
"inclusion": "Optional",
"selection": "Optional",
"possibleDecisionStates": [
"Included"
]
},
{
"attributeId": {
"localId": "Transmission",
"componentPath": [
"Automobile"
]
},
"isSatisfied": true,
"inclusion": "Optional",
"selection": "Optional",
"possibleDecisionStates": [
"Included",
"Excluded"
]
},
{
"attributeId": {
"localId": "Rim",
"componentPath": [
"Automobile",
"BackWheels"
]
},
"isSatisfied": true,
"inclusion": "Always",
"possibleDecisionStates": [
"Included"
]
},
{
"attributeId": {
"localId": "Tire",
"componentPath": [
"Automobile",
"BackWheels"
]
},
"isSatisfied": true,
"inclusion": "Always",
"possibleDecisionStates": [
"Included"
]
},
{
"attributeId": {
"localId": "Rim",
"componentPath": [
"Automobile",
"FrontWheels"
]
},
"isSatisfied": true,
"inclusion": "Always",
"possibleDecisionStates": [
"Included"
]
},
{
"attributeId": {
"localId": "Tire",
"componentPath": [
"Automobile",
"FrontWheels"
]
},
"isSatisfied": true,
"inclusion": "Always",
"possibleDecisionStates": [
"Included"
]
},
{
"attributeId": {
"localId": "Rim",
"componentPath": [
"Automobile",
"SpareWheel"
]
},
"isSatisfied": true,
"inclusion": "Always",
"possibleDecisionStates": [
"Included"
]
},
{
"attributeId": {
"localId": "Tire",
"componentPath": [
"Automobile",
"SpareWheel"
]
},
"isSatisfied": true,
"inclusion": "Always",
"possibleDecisionStates": [
"Included"
]
}
]
}
```
