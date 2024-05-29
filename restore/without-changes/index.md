## 7.1  Restore a Configuration State without changes in the Configuration Model

At first we want to restore a previous [*Configuration State*](/glossary/#configuration-state) without any changes in the [*Configuration Model*](/glossary/#configuration-model).

The route is used that enables  many [*Decisions*](/glossary/#decision) to be transmitted with one request.

The initialisation of the session with the unchanged Configuration Model:

POST {{baseUrl}}/engine/v2/session<br>
X-API-KEY: {{engineApiKey}}<br>
Content-Type: application/json

```json
{
  "configurationModelSource": {
    "type": "Package",
    "configurationModelPackage": {
      "root": "Car",
      "configurationModels": [
        {
          "configurationModelId": "Car",
          "sharedFromConfigurationModels": ["TechnicalShared", "SalesShared"],
          "attributes": {
            "choiceAttributes": [
              {
                "attributeId": "CarSize",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "Small"
                  },
                  {
                    "choiceValueId": "Standard"
                  },
                  {
                    "choiceValueId": "Big"
                  }
                ]
              }
            ],
            "numericAttributes": [
              {
                "attributeId": "CO2Emissions",
                "isDecisionRequired": false,
                "min": 0,
                "max": 300,
                "decimalPlaces": 0
              }
            ],
            "booleanAttributes": [],
            "componentAttributes": [
              {
                "attributeId": "Automobile",
                "configurationModelId": "Automobile",
                "inclusion": {
                  "type": "AlwaysIncluded"
                }
              }
            ]
          },
          "constraints": [
            {
              "constraintId": "Rule1:TheConstructionIsCar",
              "textualConstraint": "shared::TechnicalShared::Construction.Car"
            },
            {
              "constraintId": "Rule2:ForBigSizeCO2EmissionGreaterThan200",
              "textualConstraint": "CarSize.Big -> CO2Emissions > 200"
            },
            {
              "constraintId": "Rule3:BigSizeNotInWhite",
              "textualConstraint": "CarSize.Small -> !Automobile::Colour.White"
            }
          ]
        },
        {
          "configurationModelId": "TechnicalShared",
          "sharedFromConfigurationModels": ["SalesShared"],
          "attributes": {
            "choiceAttributes": [
              {
                "attributeId": "Construction",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "Car"
                  },
                  {
                    "choiceValueId": "Truck"
                  }
                ]
              },
              {
                "attributeId": "Usage",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "Summer"
                  },
                  {
                    "choiceValueId": "Winter"
                  },
                  {
                    "choiceValueId": "Off road"
                  }
                ]
              },
              {
                "attributeId": "Size",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "16 inch"
                  },
                  {
                    "choiceValueId": "18 inch"
                  },
                  {
                    "choiceValueId": "25 inch"
                  },
                  {
                    "choiceValueId": "28 inch"
                  }
                ]
              }
            ],
            "numericAttributes": [],
            "booleanAttributes": [
              {
                "attributeId": "Tubeless",
                "isDecisionRequired": true
              }
            ],
            "componentAttributes": []
          },
          "constraints": [
            {
              "constraintId": "Rule4:RimSizesForWinter",
              "textualConstraint": "(Size.\"18 inch\" OR Size.\"28 inch\") -> !Usage.Winter"
            },
            {
              "constraintId": "Rule5:RimSizesForTruck",
              "textualConstraint": "(Size.\"25 inch\" OR Size.\"28 inch\") <-> Construction.Truck"
            },
            {
              "constraintId": "Rule6:RimSizeExclusionsForCar",
              "textualConstraint": "Construction.Car -> !(Size.\"25 inch\" OR Size.\"28 inch\")"
            },
            {
              "constraintId": "Rule7:OffRoadNotForTruckAndForSalesRegionAsia",
              "textualConstraint": "(Construction.Truck OR shared::SalesShared::SalesRegion.Asia)-> !Usage.\"Off road\""
            }
          ]
        },
        {
          "configurationModelId": "Engine",
          "sharedFromConfigurationModels": ["TechnicalShared", "SalesShared"],
          "attributes": {
            "choiceAttributes": [
              {
                "attributeId": "EngineType",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "Burner"
                  },
                  {
                    "choiceValueId": "Electric"
                  },
                  {
                    "choiceValueId": "Hybrid"
                  }
                ]
              },
              {
                "attributeId": "FuelType",
                "lowerBound": 0,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "Petrol"
                  },
                  {
                    "choiceValueId": "Diesel"
                  },
                  {
                    "choiceValueId": "Gas"
                  }
                ]
              },
              {
                "attributeId": "Power",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "100 KW"
                  },
                  {
                    "choiceValueId": "200 KW"
                  },
                  {
                    "choiceValueId": "300 KW"
                  }
                ]
              }
            ],
            "numericAttributes": [],
            "booleanAttributes": [],
            "componentAttributes": []
          },
          "constraints": [
            {
              "constraintId": "Rule8:ElectricExcludesAnyFuelType",
              "textualConstraint": "EngineType.Electric -> !FuelType.*"
            },
            {
              "constraintId": "Rule9:OffRoadExcludesElectric",
              "textualConstraint": "shared::TechnicalShared::Usage.\"Off road\" -> !EngineType.Electric"
            },
            {
              "constraintId": "Rule10:HybridNotForAsia",
              "textualConstraint": "shared::SalesShared::SalesRegion.Asia -> !EngineType.Hybrid"
            }
          ]
        },
        {
          "configurationModelId": "Automobile",
          "sharedFromConfigurationModels": ["TechnicalShared", "SalesShared"],
          "attributes": {
            "choiceAttributes": [
              {
                "attributeId": "Colour",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "Grey"
                  },
                  {
                    "choiceValueId": "White"
                  }
                ]
              },
              {
                "attributeId": "NumberOfWheels",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "3"
                  },
                  {
                    "choiceValueId": "4"
                  }
                ]
              }
            ],
            "numericAttributes": [],
            "booleanAttributes": [],
            "componentAttributes":
            [
              {
                "attributeId": "Engine",
                "configurationModelId": "Engine",
                "inclusion": {
                  "type": "AlwaysIncluded"
                }
              },
              {
                "attributeId": "Transmission",
                "configurationModelId": "Transmission",
                "inclusion": {
                  "type": "OptionallyIncluded"
                }
              },
              {
                "attributeId": "FrontWheels",
                "configurationModelId": "Wheel",
                "inclusion": {
                  "type": "AlwaysIncluded"
                }
              },
              {
                "attributeId": "BackWheels",
                "configurationModelId": "Wheel",
                "inclusion": {
                  "type": "AlwaysIncluded"
                }
              },
              {
                "attributeId": "SpareWheel",
                "configurationModelId": "Wheel",
                "inclusion": {
                  "type": "OptionallyIncluded"
                }
              }
            ]
          },
          "constraints": [
            {
              "constraintId": "Rule11:TruckNoPetrol",
              "textualConstraint": "shared::TechnicalShared::Construction.Truck -> !Engine::FuelType.Petrol"
            },
            {
              "constraintId": "Rule12:BigPowerRequiresManualTransmission",
              "textualConstraint": "Engine::Power.\"300 KW\" -> Transmission::Kind.Automatic"
            },
            {
              "constraintId": "Rule13:3Wheels",
              "textualConstraint": "NumberOfWheels.\"3\" -> FrontWheels::Number.\"1\" AND BackWheels::Number.\"2\""
            },
            {
              "constraintId": "Rule14:4Wheels",
              "textualConstraint": "(NumberOfWheels.\"4\" AND !SpareWheel) -> FrontWheels::Number.\"2\" AND BackWheels::Number.\"2\""
            },
            {
              "constraintId": "Rule15:ElectricCarWithoutTransmission",
              "textualConstraint": "Engine::EngineType.Electric -> !Transmission"
            },
            {
              "constraintId": "Rule16:TubelessTiresWithoutSpereWheel",
              "textualConstraint": "shared::TechnicalShared::Tubeless == true -> !SpareWheel"
            },
            {
              "constraintId": "Rule17:UsageOffroadRequiresTwoSpereWheels",
              "textualConstraint": "shared::TechnicalShared::Usage.\"Off road\" -> SpareWheel::Number.\"2\""
            },
            {
              "constraintId": "Rule18:ColourWhiteNotForChina",
              "textualConstraint": "shared::SalesShared::SalesRegion.China -> !Colour.White"
            },
            {
              "constraintId": "Rule19:ComplexSalesRuleAfrica",
              "textualConstraint": "shared::SalesShared::SalesRegion.Africa -> !shared::TechnicalShared::Usage.Winter AND !Engine::EngineType.Hybrid AND SpareWheel"
            }
          ]
        },
        {
          "configurationModelId": "Transmission",
          "sharedFromConfigurationModels": ["TechnicalShared"],
          "attributes": {
            "choiceAttributes": [
              {
                "attributeId": "Kind",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "Manual"
                  },
                  {
                    "choiceValueId": "Automatic"
                  }
                ]
              }
            ],
            "numericAttributes": [],
            "booleanAttributes": [],
            "componentAttributes": []
          },
          "constraints": []
        },
        {
          "configurationModelId": "Wheel",
          "sharedFromConfigurationModels": ["TechnicalShared"],
          "attributes": {
            "choiceAttributes": [
              {
                "attributeId": "Number",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "1"
                  },
                  {
                    "choiceValueId": "2"
                  }
                ]
              }
            ],
            "numericAttributes": [],
            "booleanAttributes": [],
            "componentAttributes": [
              {
                "attributeId": "Rim",
                "configurationModelId": "Rim",
                "inclusion": {
                  "type": "AlwaysIncluded"
                }
              },
              {
                "attributeId": "Tire",
                "configurationModelId": "Tire",
                "inclusion": {
                  "type": "AlwaysIncluded"
                }
              }
            ]
          },
          "constraints": [
            {
              "constraintId": "Rule20:RimMaterialAndMaximumSpeedForCar",
              "textualConstraint": "shared::TechnicalShared::Construction.Car AND Rim::Material.Steel -> !Tire::MaximumSpeed.\"200\""
            },
            {
              "constraintId": "Rule21:OffRoadRimMaterialAndTireKind",
              "textualConstraint": "shared::TechnicalShared::Usage.\"Off road\" -> !Rim::Material.Alu AND Tire::Tubeless == false"
            }
          ]
        },
        {
          "configurationModelId": "Rim",
          "sharedFromConfigurationModels": ["TechnicalShared"],
          "attributes": {
            "choiceAttributes": [
              {
                "attributeId": "Style",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "TRX1"
                  },
                  {
                    "choiceValueId": "TRX2"
                  },
                  {
                    "choiceValueId": "CA1"
                  },
                  {
                    "choiceValueId": "CA2"
                  }
                ]
              },
              {
                "attributeId": "Material",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "Alu"
                  },
                  {
                    "choiceValueId": "Steel"
                  }
                ]
              }
            ],
            "numericAttributes": [],
            "booleanAttributes": [],
            "componentAttributes": []
          },
          "constraints": [
            {
              "constraintId": "Rule22:MaterialStyleExclusion",
              "textualConstraint": "Material.Steel -> !(Style.CA1 OR Style.TRX1)"
            },
            {
              "constraintId": "Rule23:ConstructionRimExclusion",
              "textualConstraint": "shared::TechnicalShared::Construction.Car -> !(Style.TRX1 OR Style.TRX2)"
            }
          ]
        },
        {
          "configurationModelId": "Tire",
          "sharedFromConfigurationModels": ["TechnicalShared", "SalesShared"],
          "attributes": {
            "choiceAttributes": [
              {
                "attributeId": "MaximumSpeed",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "100"
                  },
                  {
                    "choiceValueId": "180"
                  },
                  {
                    "choiceValueId": "200"
                  }
                ]
              }
            ],
            "numericAttributes": [],
            "booleanAttributes": [],
            "componentAttributes": []
          },
          "constraints": [
            {
              "constraintId": "Rule24:MaximumSpeedForCarNot100",
              "textualConstraint": "shared::TechnicalShared::Construction.Car -> !MaximumSpeed.\"100\""
            },
            {
              "constraintId": "Rule25:MaximumSpeed200NotForAfrica",
              "textualConstraint": "shared::SalesShared::SalesRegion.Africa -> !MaximumSpeed.\"200\""
            }
          ]
        },
        {
          "configurationModelId": "SalesShared",
          "attributes": {
            "choiceAttributes": [
              {
                "attributeId": "SalesRegion",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "Africa"
                  },
                  {
                    "choiceValueId": "Asia"
                  },
                  {
                    "choiceValueId": "China"
                  }
                ]
              },
              {
                "attributeId": "CustomerCategory",
                "lowerBound": 1,
                "upperBound": 1,
                "choiceValues": [
                  {
                    "choiceValueId": "A"
                  },
                  {
                    "choiceValueId": "B"
                  }
                ]
              }
            ],
            "numericAttributes": [],
            "booleanAttributes": [],
            "componentAttributes": []
          },
          "constraints": []
        }
      ]
    }
  }
}
```
[*Decisions*](/glossary/#decision) are now being made that have already been made in the past as part of
a [*Configuration Dialogue*](/glossary/#configuration-dialogue). This is necessary as part of the typical use case
"Load [*Configuration Project*](/glossary/#configuration-project)".

<a id ="previous-decisions"></a>

The previous Decisions are the Choice Decisions:

[*Decision 1*](/exemplary-configuration-dialogues/with-comp/dialogue/#decision1),
[*Decision 2*](/exemplary-configuration-dialogues/with-comp/dialogue/#decision2),
[*Decision 3*](/exemplary-configuration-dialogues/with-comp/dialogue/#decision3),
[*Decision 5*](/exemplary-configuration-dialogues/with-comp/dialogue/#decision5),
[*Decision 6*](/exemplary-configuration-dialogues/with-comp/dialogue/#decision6),
[*Decision 7*](/exemplary-configuration-dialogues/with-comp/dialogue/#decision7),
[*Decision 9*](/exemplary-configuration-dialogues/with-comp/dialogue/#decision9),

the Numeric Decision:

[*Decision 4*](/exemplary-configuration-dialogues/with-comp/dialogue/#decision4),

the Boolean Decision:

[*Decision 8*](/exemplary-configuration-dialogues/with-comp/dialogue/#decision8),

and the Component Decision
[*Decision 10*](/exemplary-configuration-dialogues/with-comp/dialogue/#decision10).

We use the possibility of making many Decisions with one request.

If the [*Configurator*](/glossary/#configurator) has already made Decisions before such a
[*Multiple Decision*](/glossary/#multiple-decision), these must be discarded in the
case of a "Load project" scenario (*"type": "DropExistingDecisions"*).

A use case in which *"type": "KeepExistingDecisions"* is required is explained elsewhere.

As there were no changes to the Configuration Model, no [*Conflicts*](/glossary/#conflict) can occur.
Therefore, the type of [*Conflict Resolution*](/glossary/#conflict-resolution) does not matter (*"Manual"* or *"Automatic"*.

A Conflict Explanation is also not necessary. Therefore, *"includeConstraintsInConflictExplanation: true*
can remain as the default setting.

```json
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

As expected, no Conflicts have been occurred.
None of the ten Decisions above were rejected by the [*Configuration Engine*](/glossary/#configuration-engine),
as an excerpt from the response shows.
```json
"rejectedDecisions": {
    "booleanDecisions": [],
    "numericDecisions": [],
    "componentDecisions": [],
    "choiceValueDecisions": []
}
```


