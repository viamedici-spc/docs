## Was meinen Kunden mit "Konfiguration"?
Viele Kunden sagen „Konfigurator“, meinen aber zunächst:
*Führe mich durch einen großen Produktkatalog,
bis ich die richtige Produktfamilie oder das richtige Basisprodukt finde.*

Das ist **Product Discovery**.

Danach beginnt **Product Configuration**:

Erzeuge innerhalb der gewählten Produktfamilie bzw. für ein gewähltes Basisprodukt eine gültige,
vollständige Produktvariante.<br><br>
Discovery-Attribute helfen, das richtige Produkt zu finden.
Configuration-Attribute helfen, eine gültige Produktvariante zu erzeugen.<br>

Mit anderen Worten: Nicht jedes vermeintliche Konfigurationsproblem ist ein CSP.

Viele Fälle bestehen aus:
- Produktsuche,
- Filterung,
- Stammdaten-Lookups,
- Berechnung.

Ein CSP-Solver wird erst dann benötigt, wenn ein Produktmodell
kombinierbare Optionen (Komponenten, Attribute) enthält und die Gültigkeit dieser Kombinationen
durch Constraints bestimmt wird.<br>

## Was ist die Schlussfolgerung?

Aus dieser Feststellung ergibt sich die fachliche Gliederung einer Plattform:
1. Product Discovery<br>
   Geführtes Finden passender Produktfamilien, Produkte oder Varianten.

2. Product Calculation<br>
   Berechnung, Bewertung oder Optimierung auf Basis von Eingaben und Stammdaten.

3. Product Configuration<br>
   Erzeugung und Validierung gültiger Produktvarianten mit einem CSP-Solver.

Dazu passend:<br>
- Discovery Engine<br>
- Calculation Engine<br>
- Configuration Engine<br>
- Coordination Service (Coordinator)<br>

Der **Coordination Service** ist der verbindende Service, der entscheidet, ob gesucht, gerechnet, konfiguriert
oder eine Kombination daraus ausgeführt wird. Es ist eine zentrale Komponente, die entscheidet:<br>

Muss gesucht werden?<br>
Muss gerechnet werden?<br>
Muss konfiguriert werden?<br>
In welcher Reihenfolge?<br>
Welche Ergebnisse werden an die nächste Engine übergeben?<br>


## Grundlegende technische Notwendigkeit: gemeinsamer State

```
{
  "context": {
    "market": "DE",
    "customerType": "B2B",
    "effectiveDate": "2026-07-02"
  },

  "discoverySelections": {
    "productFamily": "Packaging",
    "material": "cardboard"
  },

  "calculationInputs": {
    "productLengthMm": 180,
    "productWidthMm": 120,
    "productHeightMm": 80,
    "quantity": 24
  },

  "calculationResults": {
    "recommendedPackageId": "PKG-4711",
    "utilizationPercent": 87.4,
    "grossWeightKg": 12.8
  },
  "_comment": "Der folgende Konfigurationsabschnitt ist nur angedeutet."
  "configurationSelections": {
    "lidType": "reinforced",
    "labeling": "customerSpecific"
  }
}
```
## Grundlegende sprachliche Notwendigkeit: Saubere Semantik der Attributbeschreibung
Besonders wichtig: Unterscheidung von Zwecken, denen ein Attribut dienen kann bzw. soll.
M. a. W.: Welche **Rollen** es haben kann bzw. hat.<br>

### Filterattribut
Ein **Filterattribut** kann verwendet werden, um eine Menge von Produkten bzw. Varianten einzuschränken.<br><br>
Beispiele:<br>
SalesRegion = DE<br>
ProductFamily = Coriolis<br>
ConnectionMaterial = StainlessSteel<br>
ATEX = true<br>
MaxTemperature >= 180 °C<br>
ProductType = Standard<br><br>
Die Frage dahinter lautet:<br>
Welche Produkte bzw. Varianten erfüllen diese Bedingung?<br>
Filterattribute müssen nicht sichtbar sein. Sie können auch rein intern verwendet werden.<br><br>

### Facettenattribut
Ein **Facettenattribut** ist ein Attribut, zu dem die Searchengine mögliche Werte
inklusive Trefferzahlen berechnen soll.<br><br>
Beispiele:<br>
Material<br>
- StainlessSteel (42)<br>
- Plastic (18)<br>
- Aluminium (7)<br><br>

Industry<br>
- Food (31)<br>
- Chemical (24)<br><br>

Beispiel: Gehäusematerial als Suchfacette:
```
{
  "name": "HousingMaterial",
  "type": "enum",
  "discovery": {
    "roles": [
     "filterAttribute",
     "facetAttribute"
  ]
  },
  "calculation": {
    "role": "none"
  },
  "configuration": {
    "role": "none"
  }
}
```
Bedeutung:<br>
Gehäusematerial dient nur dazu, vorhandene Produkte zu finden.
Es ist danach keine änderbare Konfigurationsoption.
Typisch bei nicht konfigurierbaren Katalogartikeln.<br>

Die Frage dahinter lautet:<br>
Welche Auswahlmöglichkeiten für Werte gibt es in der aktuellen Menge (Produkte, Varianten) und wieviele Treffer
hätte jede Auswahl?<br>
Facetten sind also nicht nur Filter. Sie sind Filtervorschläge mit Zählwerten.<br>
Ein Facettenattribut ist in der Regel auch ein Filterattribut, denn wenn der Benutzer auf
```Edelstahl``` klickt, wird daraus ein Filter:<br>
```Material = StainlessSteel```<br><br>
Aber nicht jedes Filterattribut sollte als Facette dienen.  <br>
Beispiele: ```ArticleNumber```, ```validFrom```, ```validTo```, ```internalStatus``` können sinnvoll als Filterattribute dienen.
Als Facettenattribute ergeben sie in der Regel keinen Sinn.<br><br>
Bei numerischen Werten können Bereiche als Facetten verwendet werden.<br>
Beispiel:<br>
MaxFlow<br>
- until 100 l/min<br>
- 100–250 l/min<br>
- 250–500 l/min<br>

### Sortierattribut
Ein **Sortierattribut** bestimmt die Reihenfolge der Treffer.<br><br>
Typische Sortierattribute:<br>
ProductName<br>
Price<br>
DeliveryTimeDays<br>
WeightKg<br>
CreatedAt<br><br>

Ein Attribut kann der Sortierung dienen, ohne als Facette angezeigt zu werden.<br>
Beispiele: Price, DeliveryTime. (Wenn Preis als Facette, dann als Bereich: 1000-2000 EUR).<br>

**Discovery-Attribute kurz:**<br>
Filter = Was bleibt übrig?<br>
Facette = Welche Auswahlmöglichkeiten gibt es?<br>
Sortierung = Was kommt zuerst?<br>

### Berechnungsattribut
Ein **Berechnungsattribut** ist in Attribut, das Teil eines Berechnungsmodells ist und zur
Ermittlung eines rechnerischen Ergebnisses benötigt oder durch dieses erzeugt wird.
Kurz: Ein Attribut, dessen Wert aus den Werten anderer Attribute berechnet wird.<br><br>
Beispiele:<br>
Druckverlust<br>
Meßgenauigkeit<br>
Produktlänge<br>
Produktbreite<br>
Produkthöhe<br>
Verpackungsgewicht<br>
Anzahl je Ladungsträger<br>
Volumenauslastung<br>
Gesamtgewicht<br>
Preis<br>
Transportkosten<br><br>

Die Frage dahinter lautet:<br>
Was ergibt sich rechnerisch aus Eingaben, Stammdaten, Formeln und Regeln?<br>

Berechnungsattribute lassen sich unterscheiden in:<br><br>
**Berechnungseingabe**:<br>
Wert, der in die Berechnung eingeht.<br>
Beispiele:<br> Produktlänge, Produktgewicht, Stückzahl.<br><br>

**Berechnungszwischenwert**:<br>
Wert, der während der Berechnung entsteht.<br>
Beispiele:<br> Volumen, Flächennutzung, Zwischensumme.<br><br>

**Berechnungsergebnis**:
Wert, der als Ergebnis ausgegeben wird.<br>
Beispiele:<br> empfohlene Verpackung, Gesamtgewicht, Auslastungsgrad, Preis.<br><br>

### Lookup-Attribut
(kann auch als spezielle Berechnungseingabe verstanden werden)<br>
Ein Attribut für Stammdaten-Nachschlag innerhalb von Berechnungen;<br>
Beispiel: Verpackungsrechner:<br>
```
  "485.003-45"
```
Diese Materialnummer wird verwendet, um im PIM oder im Calculation Data Store weitere Werte zu finden:<br>
```
MaterialNumber
  → Length
  → Width
  → Height
  → Weight.
```
In diesem Sinne wäre  ```MaterialNumber``` ein **Lookup-Schlüssel**.<br>
```Length, Width, Height, Weight``` sind **Lookup-Ergebnisattribute**.<br>
```
{
  "name": "MaterialNumber",
  "type": "string",
  "calculation": {
    "role": "lookupKey",
    "lookupSource": "PackagingMasterData"
  }
}
```
```
{
  "name": "PackageLengthMm",
  "type": "number",
  "calculation": {
    "role": "lookupResult",
    "lookupSource": "PackagingMasterData",
    "field": "length",
    "unit": "mm"
  }
}
```

### Konfigurationsattribut
Sich hier auf den Zweck zu beschränken, wäre zu grob. Denn <br>
```usedForConfiguration == true```
kann Mehreres bedeuten:<br>
Zum Beispiel:<br>
- Das Attribut ist eine CSP-Variable.<br>
- Das Attribut ist nur ein Startfakt für den CSP-Solver.<br>
- Das Attribut wird aus der Facettensuche übernommen, ist aber danach nicht mehr änderbar.<br>

Diese Fälle sollte man unterscheiden.<br>

Die Frage dahinter lautet:<br>
Welche Kombination von Optionen ist innerhalb eines Produktmodells gültig?<br>
Beispiel: Anschlussmaterial als Konfigurationsvariable:
```
{
  "name": "ConnectionMaterial",
  "type": "enum",
  "configuration": {
    "role": "variable",
    "userSelectable": true,
    "selectionMode": "userSelectable",
    "cspVariable": "shared::Requirements::ConnectionMaterial",
  }
}
```
Beispielregeln:<br>
```
ATEX == true -> shared::Requirements::ConnectionMaterial.StainlessSteel
Temperature > 280 -> !shared::Requirements::ConnectionMaterial.Plastic
```

#### Abgeleitetes Konfigurationsattribut
Ein **abgeleitetes Konfigurationsattribut** ist ein Attribut, dessen Wert durch Regeln oder Constraints
aus anderen Konfigurationsentscheidungen folgt. Das Attribut ist Teil des Konfigurationsmodells,
aber keine vom Benutzer frei wählbare Option.

Beispiel:
```
{
  "name": "requiresFireSafetyCertificate",
  "type": "boolean",
  "configuration": {
    "role": "derived",
    "userSelectable": false,
    "derivedBy": {
      "constraintExpression": "shared::Requirements::IntendedUse.ExplosiveEnvironment -> shared::Requirements::requiresFireSafetyCertificate == true"
    }
  }
}
```

#### Brückenattribut
Attribute, die in mehr als einer der Welten (Discovery, Calculation, Configuration) vorkommen:<br>
```
ProductFamiliy
ProductLine
HousingSize
RatedPower
ATEX Certification
SalesRegion
CustomerGroup.
```

Beispiel:<br>
Facette: ```ProductFamily = "Rotameter"```
CSP-Fakt: ```ParameterSetting::Rotameter == true```
```
{
  "name": "ProductFamily",
  "type": "enum",
  "discovery": {
    "roles": [
      "filterAttribute",
      "facetAttribute"
    ]
  },
  "configuration": {
    "role": "modelSelector",
    "mapsTo": {
      "configModelId": "Rotameter",
      "initialFact": "ParameterSetting::Rotameter == true"
    }
  }
}
```
Die Auswahl der Produktfamilie bestimmt, welches CSP-Modell oder welcher Startfakt verwendet wird.<br>
```
ProductFamily = "Rotameter"
```
wird zu:
```
ParameterSetting::Rotameter == true
```
Das Attribut ist nicht konfigurierbar, aber es beeinflusst die Konfiguration massiv.<br>

Beispiel: Leistung als Suchfilter und CSP-Fakt
```
{
  "name": "RequiredPowerKw",
  "type": "number",
  "discovery": {
    "roles": [
      "filterAttribute",
      "facetAttribute",
      "sortAttribute"
    ]
  },
  "configuration": {
    "role": "constraintParameter",
    "mapsTo": {
      "constraintExpression": "Motor.PowerKw >= RequiredPowerKw",
      "initialFact": "RequiredPowerKw == 200"
    }
  }
}
```
```initialFact``` könnte auch ```fixedConstraint``` genannt werden.
Die Rolle ```constraintParameter``` meint ```fixedConstraintParameter```.
Nicht-fixe Constraint-Parameter heißen ```variable```.

Beispiel: Maximaler Durchfluss als Suchfilter, Berechnungsattribut und CSP-Fakt
```
{
  "name": "RequiredMaxFlowLiterPerHour",
  "type": "number",
  "discovery": {
    "roles": [
      "filterAttribute",
      "sortAttribute"
    ]
  },
  "calculation": {
    "role": "input",
    "output": true
  },
  "configuration": {
    "role": "constraintParameter",
    "mapsTo": {
      "constraintExpression": "Rotameter.MaxFlowLiterPerHour >== RequiredMaxFlowLiterPerHour",
      "initialFact": "RequiredMaxFlowLiterPerHour == 200"
    }
  }
}
```
Zusammenfassung Attributrollen:
```
Discovery:
- Suchattribut
- Filterattribut
- Facettenattribut
- Sortierattribut
- Anzeigeattribut

Calculation:
- Berechnungseingabe
- Berechnungsparameter
- Berechnungszwischenwert
- Berechnungsergebnis
- Berechnungsnebenbedingung
- Lookup-Schlüssel
- Lookup-Ergebnis

Configuration:
- Konfigurationsvariable
- abgeleitetes Konfigurationsattribut
- Konfigurationsfakt
- Brückenattribut
- Konfigurationsergebnis
```

Von ChatGPT erzeugtes JSON Schema für ein Attributmodell,
das Product Discovery, Calculation und Configuration/CSP gemeinsam abbildet:<br>
```
Discovery:
- Suchattribut
- Filterattribut
- Facettenattribut
- Sortierattribut
- Anzeigeattribut

Calculation:
- Berechnungseingabe
- Berechnungsparameter
- Lookup-Schlüssel
- Lookup-Ergebnis
- Berechnungszwischenwert
- Berechnungsergebnis
- Optimierungsziel
- Berechnungsnebenbedingung

Configuration:
- Konfigurationsvariable
- Konfigurationsfakt
- Brückenattribut
- abgeleitetes Konfigurationsattribut
- Konfigurationsergebnis
```
```
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.org/schemas/product-decision-attribute-model.schema.json",
  "title": "Product Decision Attribute Model",
  "description": "Schema for attributes used in Product Discovery, Calculation and Configuration.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "schemaVersion",
    "modelId",
    "attributes"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "examples": [
        "1.0.0"
      ]
    },
    "modelId": {
      "type": "string",
      "examples": [
        "packaging-decision-model"
      ]
    },
    "description": {
      "type": "string"
    },
    "attributes": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/attribute"
      },
      "minItems": 1
    }
  },
  "$defs": {
    "attribute": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "name",
        "dataType"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "Technical attribute name.",
          "examples": [
            "material",
            "packageHeightMm",
            "productMaterialNumber"
          ]
        },
        "label": {
          "$ref": "#/$defs/localizedText"
        },
        "description": {
          "$ref": "#/$defs/localizedText"
        },
        "dataType": {
          "$ref": "#/$defs/dataType"
        },
        "cardinality": {
          "type": "string",
          "enum": [
            "single",
            "multi"
          ],
          "default": "single"
        },
        "unit": {
          "type": "string",
          "description": "Physical or business unit, e.g. mm, kg, EUR, percent."
        },
        "valueSet": {
          "$ref": "#/$defs/valueSet"
        },
        "source": {
          "type": "string",
          "enum": [
            "userInput",
            "pim",
            "erp",
            "calculation",
            "configuration",
            "searchIndex",
            "externalService",
            "system"
          ]
        },
        "discovery": {
          "$ref": "#/$defs/discovery"
        },
        "calculation": {
          "$ref": "#/$defs/calculation"
        },
        "configuration": {
          "$ref": "#/$defs/configuration"
        },
        "lifecycle": {
          "$ref": "#/$defs/lifecycle"
        },
        "metadata": {
          "type": "object",
          "additionalProperties": true
        }
      }
    },
    "dataType": {
      "type": "string",
      "enum": [
        "string",
        "enum",
        "number",
        "integer",
        "boolean",
        "date",
        "dateTime",
        "range",
        "money",
        "quantity",
        "object",
        "reference"
      ]
    },
    "localizedText": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "de": {
          "type": "string"
        },
        "en": {
          "type": "string"
        }
      }
    },
    "valueSet": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "static",
            "pim",
            "calculation",
            "configuration",
            "external"
          ]
        },
        "values": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/value"
          }
        },
        "source": {
          "type": "string",
          "description": "Name or identifier of the source system or value provider."
        }
      }
    },
    "value": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "string"
        },
        "label": {
          "$ref": "#/$defs/localizedText"
        },
        "sortOrder": {
          "type": "integer"
        }
      }
    },
    "discovery": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "roles": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "type": "string",
            "enum": [
              "searchAttribute",
              "filterAttribute",
              "facetAttribute",
              "sortAttribute",
              "displayAttribute",
              "rankingAttribute"
            ]
          }
        },
        "filter": {
          "$ref": "#/$defs/filterDefinition"
        },
        "facet": {
          "$ref": "#/$defs/facetDefinition"
        },
        "sort": {
          "$ref": "#/$defs/sortDefinition"
        },
        "search": {
          "$ref": "#/$defs/searchDefinition"
        }
      }
    },
    "filterDefinition": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "operators": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "equals",
              "notEquals",
              "in",
              "notIn",
              "greaterThan",
              "greaterThanOrEqual",
              "lessThan",
              "lessThanOrEqual",
              "between",
              "contains",
              "startsWith",
              "exists"
            ]
          }
        },
        "defaultOperator": {
          "type": "string"
        }
      }
    },
    "facetDefinition": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "mode": {
          "type": "string",
          "enum": [
            "terms",
            "ranges",
            "hierarchy",
            "boolean"
          ]
        },
        "ranges": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/rangeBucket"
          }
        },
        "maxValues": {
          "type": "integer",
          "minimum": 1
        },
        "sortBy": {
          "type": "string",
          "enum": [
            "count",
            "label",
            "value",
            "custom"
          ]
        }
      }
    },
    "rangeBucket": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "label"
      ],
      "properties": {
        "label": {
          "$ref": "#/$defs/localizedText"
        },
        "from": {
          "type": "number"
        },
        "to": {
          "type": "number"
        }
      }
    },
    "sortDefinition": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "defaultDirection": {
          "type": "string",
          "enum": [
            "ascending",
            "descending"
          ]
        },
        "missingValues": {
          "type": "string",
          "enum": [
            "first",
            "last"
          ]
        }
      }
    },
    "searchDefinition": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "fullText": {
          "type": "boolean"
        },
        "analyzer": {
          "type": "string",
          "examples": [
            "standard",
            "german",
            "english"
          ]
        },
        "boost": {
          "type": "number",
          "minimum": 0
        }
      }
    },
    "calculation": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "role": {
          "type": "string",
          "enum": [
            "none",
            "input",
            "parameter",
            "lookupKey",
            "lookupResult",
            "calculatedValue",
            "intermediate",
            "result",
            "optimizationObjective",
            "constraint"
          ],
          "default": "none"
        },
        "required": {
          "type": "boolean"
        },
        "formula": {
          "$ref": "#/$defs/formula"
        },
        "lookup": {
          "$ref": "#/$defs/lookup"
        },
        "dependsOn": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "uniqueItems": true
        },
        "output": {
          "type": "boolean",
          "description": "Whether this attribute is returned as part of the calculation result."
        },
        "optimization": {
          "$ref": "#/$defs/optimization"
        }
      }
    },
    "formula": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "expression"
      ],
      "properties": {
        "language": {
          "type": "string",
          "enum": [
            "expression",
            "excelLike",
            "csharp",
            "javascript",
            "dmn",
            "custom"
          ],
          "default": "expression"
        },
        "expression": {
          "type": "string",
          "examples": [
            "quantity * packageWeightKg",
            "usedVolume / availableVolume * 100"
          ]
        }
      }
    },
    "lookup": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "source"
      ],
      "properties": {
        "source": {
          "type": "string",
          "examples": [
            "PackagingMasterData",
            "LoadCarrierData",
            "READata"
          ]
        },
        "keyAttribute": {
          "type": "string",
          "description": "Attribute used as lookup key."
        },
        "resultField": {
          "type": "string",
          "description": "Field read from the lookup source."
        },
        "missingValueBehavior": {
          "type": "string",
          "enum": [
            "error",
            "warning",
            "null",
            "defaultValue"
          ],
          "default": "error"
        },
        "defaultValue": {}
      }
    },
    "optimization": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "direction": {
          "type": "string",
          "enum": [
            "minimize",
            "maximize"
          ]
        },
        "weight": {
          "type": "number"
        }
      }
    },
    "configuration": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "role": {
          "type": "string",
          "enum": [
            "none",
            "variable",
            "fact",
            "bridge",
            "derived",
            "result"
          ],
          "default": "none"
        },
        "userSelectable": {
          "type": "boolean",
          "description": "Whether the user may actively select this attribute in the configurator."
        },
        "selectionMode": {
          "type": "string",
          "enum": [
            "userSelectable",
            "systemSet",
            "derived",
            "locked",
            "hidden"
          ]
        },
        "cspVariable": {
          "type": "string",
          "examples": [
            "Housing.Material",
            "Motor.Voltage"
          ]
        },
        "cspFact": {
          "type": "string",
          "examples": [
            "Market.DE",
            "Series.X200"
          ]
        },
        "domainSource": {
          "type": "string",
          "enum": [
            "static",
            "pim",
            "calculation",
            "search",
            "solver",
            "external"
          ]
        },
        "mapsTo": {
          "$ref": "#/$defs/configurationMapping"
        },
        "constraints": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/constraintReference"
          }
        }
      }
    },
    "configurationMapping": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "configModelId": {
          "type": "string"
        },
        "modelSelector": {
          "type": "string"
        },
        "cspVariable": {
          "type": "string"
        },
        "cspFact": {
          "type": "string"
        },
        "constraintExpression": {
          "type": "string",
          "examples": [
            "Motor.PowerKw >= requiredPowerKw"
          ]
        }
      }
    },
    "constraintReference": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "string"
        },
        "expression": {
          "type": "string"
        }
      }
    },
    "lifecycle": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "draft",
            "active",
            "deprecated",
            "archived"
          ]
        },
        "validFrom": {
          "type": "string",
          "format": "date"
        },
        "validTo": {
          "type": "string",
          "format": "date"
        }
      }
    }
  }
}
```
Eine Beispiel-Attribut-Modell für Product Discovery, Calculation und Configuration:<br>
```
{
  "schemaVersion": "1.0.0",
  "modelId": "packaging-decision-model",
  "description": "Attribute model for packaging discovery, calculation and optional configuration.",
  "attributes": [
    {
      "name": "productMaterialNumber",
      "label": {
        "de": "Produktmaterialnummer",
        "en": "Product material number"
      },
      "dataType": "string",
      "source": "userInput",
      "discovery": {
        "roles": [
          "searchAttribute",
          "filterAttribute"
        ],
        "filter": {
          "operators": [
            "equals",
            "in"
          ],
          "defaultOperator": "equals"
        }
      },
      "calculation": {
        "role": "lookupKey",
        "required": true,
        "lookup": {
          "source": "PackagingMasterData"
        }
      },
      "configuration": {
        "role": "none"
      }
    },
    {
      "name": "material",
      "label": {
        "de": "Material",
        "en": "Material"
      },
      "dataType": "enum",
      "valueSet": {
        "type": "pim",
        "source": "PIM.Materials"
      },
      "source": "pim",
      "discovery": {
        "roles": [
          "filterAttribute",
          "facetAttribute"
        ],
        "filter": {
          "operators": [
            "equals",
            "in"
          ]
        },
        "facet": {
          "mode": "terms",
          "maxValues": 20,
          "sortBy": "count"
        }
      },
      "calculation": {
        "role": "lookupResult",
        "lookup": {
          "source": "PackagingMasterData",
          "keyAttribute": "productMaterialNumber",
          "resultField": "material"
        }
      },
      "configuration": {
        "role": "fact",
        "userSelectable": false,
        "cspFact": "Packaging::Material"
      }
    },
    {
      "name": "packageHeightMm",
      "label": {
        "de": "Verpackungshöhe",
        "en": "Package height"
      },
      "dataType": "number",
      "unit": "mm",
      "source": "calculation",
      "discovery": {
        "roles": [
          "filterAttribute",
          "facetAttribute",
          "sortAttribute"
        ],
        "filter": {
          "operators": [
            "lessThanOrEqual",
            "greaterThanOrEqual",
            "between"
          ]
        },
        "facet": {
          "mode": "ranges",
          "ranges": [
            {
              "label": {
                "de": "bis 200 mm",
                "en": "up to 200 mm"
              },
              "to": 200
            },
            {
              "label": {
                "de": "200–500 mm",
                "en": "200–500 mm"
              },
              "from": 200,
              "to": 500
            },
            {
              "label": {
                "de": "über 500 mm",
                "en": "above 500 mm"
              },
              "from": 500
            }
          ],
          "sortBy": "custom"
        },
        "sort": {
          "defaultDirection": "ascending",
          "missingValues": "last"
        }
      },
      "calculation": {
        "role": "result",
        "output": true,
        "formula": {
          "language": "expression",
          "expression": "innerHeightMm + wallThicknessMm * 2"
        },
        "dependsOn": [
          "innerHeightMm",
          "wallThicknessMm"
        ]
      },
      "configuration": {
        "role": "none"
      }
    }
  ]
}
```
Der zentrale Gedanke ist:<br>
Ein Attribut kann gleichzeitig mehrere Rollen haben.<br>
```material``` kann beispielsweise Facettenattribut, Filterattribut, Lookup-Ergebnis und Konfigurationsfakt sein.<br>
```packageHeightMm``` kann Berechnungsergebnis, Filterattribut, Facettenattribut und Sortierattribut sein.<br>







