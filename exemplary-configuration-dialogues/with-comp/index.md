## 6.2 Configuration example with Components

This example is a little more complex. It serves to describe and explain a very powerful feature:
the possibility of using [*Component Configuration Models*](/glossary/#component-configuration-model) and
[*Shared Configuration Models*](/glossary/#shared-configuration-model).
Due to its complexity, this chapter is subdivided.
The [*Configuration Dialogue*](/glossary/#configuration-dialogue)  is considered in [6.2.1](/exemplary-configuration-dialogues/with-comp/dialogue/#dialogue).
The [*Rules*](/glossary/#rule) of the entire [*Configuration Model*](/glossary/#configuration-model) are summarised in [6.2.2](/exemplary-configuration-dialogues/with-comp/rules/#rules).
Subchapter [6.2.3](/exemplary-configuration-dialogues/with-comp/consequences/#consequences) contains the [*Consequences*](/glossary/#consequence)
of the [*Decisions*](/glossary/#decision) made by an imaginary [*Configurator*](/glossary/#configurator).

The [*Configuration Session*](/glossary/#configuration-session) is initialized with the following request:

<a id ="session-create-car"></a>
```
POST {{baseUrl}}/engine/v2/session
X-API-KEY: {{engineApiKey}}
Content-Type: application/json
```
<a id ="car"></a>
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
                        },
                        {
                            "constraintId": "Rule25:TheColourWhiteIsNotSoldInAfrica.",
                            "textualConstraint": "shared::SalesShared::SalesRegion.Africa -> !Automobile::Colour.White"
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
                            "textualConstraint": "shared::TechnicalShared::Tubeless == true -> SpareWheel == false"
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
                            "textualConstraint": "shared::SalesShared::SalesRegion.Africa -> !shared::TechnicalShared::Usage.Winter AND !Engine::EngineType.Hybrid AND SpareWheel == true"
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
In the explanation of the Configuration Dialogue in subsection 6.2.1, only the changes to the Configuration Model above
are specified.

