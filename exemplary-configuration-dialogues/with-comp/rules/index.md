<a id = "rules"></a>
## 6.2.2 Rules of the Configuration Model

### Rules in the root model "Car"

<a id = "rule1"></a>
#### Rule 1: For a Car Configurator the Construction must be "Car".

```json
{
  "constraintId": "Rule1:TheConstructionIsCar",
  "textualConstraint": "shared::TechnicalShared::Construction.Car"
}
```

<a id = "rule2"></a>
#### Rule 2: IF CarSize Big THEN CO2 Emissions > 200.

```json
{
  "constraintId": "Rule2:ForBigSizeCO2EmissionGreaterThan200",
  "textualConstraint": "CarSize.Big -> CO2Emissions > 200"
}
```

<a id = "rule3"></a>
#### Rule 3: IF CarSize Small THEN NOT Colour White.

```json
{
  "constraintId": "Rule3:BigSizeNotInWhite",
  "textualConstraint": "CarSize.Small -> !Automobile::Colour.White"
}
```

### Rules in the Shared Configuration Model "TechnicalShared"

<a id = "rule4"></a>
#### Rule 4: IF Size 18 OR Size 28 THEN NOT Usage Winter.

```json
{
  "constraintId": "Rule4:RimSizesForWinter",
  "textualConstraint": "(Size.\"18 inch\" OR Size.\"28 inch\") -> !Usage.Winter"
}
```
<a id = "rule5"></a>
#### Rule 5: IF Size 25 OR Size 28 THEN Construction Truck and vice versa.

```json
{
  "constraintId": "Rule5:RimSizesForTruck",
  "textualConstraint": "(Size.\"25 inch\" OR Size.\"28 inch\") <-> Construction.Truck"
}
```
<a id = "rule6"></a>
#### Rule 6: IF Construction Car THEN NOT Size 25 OR Size 28.

```json
{
  "constraintId": "Rule6:RimSizeExclusionsForCar",
  "textualConstraint": "Construction.Car -> !(Size.\"25 inch\" OR Size.\"28 inch\")"
}
```
<a id = "rule7"></a>
#### Rule 7: IF Construction Truck OR SalesRegion Asia THEN NOT Usage Off road.

```json
{
  "constraintId": "Rule7:OffRoadNotForTruckAndForSalesRegionAsia",
  "textualConstraint": "(Construction.Truck OR shared::SalesShared::SalesRegion.Asia)-> !Usage.\"Off road\""
}
```

### Rules in the Component Model "Engine"

<a id = "rule8"></a>
#### Rule 8: IF EngineType Electric THEN NOT FuelTypes.

```json
{
  "constraintId": "Rule8:ElectricExcludesAnyFuelType",
  "textualConstraint": "EngineType.Electric -> !FuelType.*"
}
```
<a id = "rule9"></a>
#### Rule 9: IF Usage Off road THEN NOT EngineType Electric.

```json
{
  "constraintId": "Rule9:OffRoadExcludesElectric",
  "textualConstraint": "shared::TechnicalShared::Usage.\"Off road\" -> !EngineType.Electric"
}
```
<a id = "rule10"></a>
#### Rule 10: IF SalesRegion Asia THEN NOT EngineType Hybrid.

```json
{
  "constraintId": "Rule10:HybridNotForAsia",
  "textualConstraint": "shared::SalesShared::SalesRegion.Asia -> !EngineType.Hybrid"
}
```

### Rules in the Component Model "Automobile"

<a id = "rule11"></a>
#### Rule 11: IF Truck THEN NO Petrol.

```json
{
  "constraintId": "Rule11:TruckNoPetrol",
  "textualConstraint": "shared::TechnicalShared::Construction.Truck -> !Engine::FuelType.Petrol"
}
```
<a id = "rule12"></a>
#### Rule 12: IF Power 300 THEN Automatic.

```json
{
  "constraintId": "Rule12:BigPowerRequiresAutomaticTransmission",
  "textualConstraint": "Engine::Power.\"300 KW\" -> Transmission::Kind.Automatic"
}
```
<a id = "rule13"></a>
#### Rule 13: IF 3 Wheels THEN 1 FrontWheel AND 2 BackWheels.

```json
{
  "constraintId": "Rule13:3Wheels",
  "textualConstraint": "NumberOfWheels.\"3\" -> FrontWheels::Number.\"1\" AND BackWheels::Number.\"2\""
}
```
<a id = "rule14"></a>
#### Rule 14: IF 4 Wheels THEN 2 FrontWheels AND 2 BackWheels..

```json
{
  "constraintId": "Rule14:4Wheels",
  "textualConstraint": "(NumberOfWheels.4 AND !SpareWheel) -> FrontWheels::Number.\"2\" AND BackWheels::Number.\"2\""
}
```
<a id = "rule15"></a>
#### Rule 15: IF Electric THEN NOT Component Transmission.

```json
{
  "constraintId": "Rule15:ElectricCarWithoutTransmission",
  "textualConstraint": "Engine::EngineType.Electric -> !Transmission"
}
```
<a id = "rule16"></a>
#### Rule 16: IF Tubeless == true THEN NOT Component SpareWheel.

```json
{
  "constraintId": "Rule16:TubelessTiresWithoutSpereWheel",
  "textualConstraint": "shared::TechnicalShared::Tubeless OR SpareWheel"
}
```
<a id = "rule17"></a>
#### Rule 17: IF Off road THEN 2 SpareWheels.

```json
{
  "constraintId": "Rule17:UsageOffroadRequiresTwoSpereWheels",
  "textualConstraint": "shared::TechnicalShared::Usage.\"Off road\" -> SpareWheel::Number.\"2\" AND FrontWheels::Number.\"2\" AND BackWheels::Number.\"2\""
}
```
<a id = "rule18"></a>
#### Rule 18: IF SalesRegion China THEN NOT Colour White AND NOT EngineType Hybrid.

```json
{
  "constraintId": "Rule18:ColourWhiteNotForChina",
  "textualConstraint": "shared::SalesShared::SalesRegion.China -> !Colour.White AND !Engine::EngineType.Hybrid"
}
```
<a id = "rule19"></a>
#### Rule 19: IF SalesRegion Africa THEN NOT Usage Winter AND NOT EngineType Hybrid AND Component SpareWheel required.

```json
{
  "constraintId": "Rule19:ComplexSalesRuleAfrica",
  "textualConstraint": "shared::SalesShared::SalesRegion.Africa -> !shared::TechnicalShared::Usage.Winter AND !Engine::EngineType.Hybrid AND SpareWheel == true"
}
```

### Rules in the Component Model "Wheel"

<a id = "rule20"></a>
#### Rule 20: IF Car AND Rim-Material Steel THEN NOT Tire-MaxSpeed 200.

```json
{
  "constraintId": "Rule20:RimMaterialAndMaximumSpeedForCar",
  "textualConstraint": "shared::TechnicalShared::Construction.Car AND Rim::Material.Steel -> !Tire::MaximumSpeed.\"200\""
}
```
<a id = "rule21"></a>
#### Rule 21: IF Usage Off road THEN NOT Rim-Material Alu AND NOT Tire Tubeless.

```json
{
  "constraintId": "Rule21:OffRoadRimMaterialAndTireKind",
  "textualConstraint": "shared::TechnicalShared::Usage.\"Off road\" -> !Rim::Material.Alu AND Tire::Tubeless == false"
}
```


### Rules in the Component Model "Rim"

<a id = "rule22"></a>
#### Rule 22: IF Rim-Material Steel THEN NOT Style CA1 OR Style TRX1.

```json
{
  "constraintId": "Rule22:MaterialStyleExclusion",
  "textualConstraint": "Material.Steel -> !(Style.CA1 OR Style.TRX1)"
}
```
<a id = "rule23"></a>
#### Rule 23: IF Construction Car THEN NOT Style TRX1 OR Style TRX2.

```json
{
  "constraintId": "Rule23:ConstructionRimExclusion",
  "textualConstraint": "shared::TechnicalShared::Construction.Car -> !(Style.TRX1 OR Style.TRX2)"
}
```

### Rules in the Component Model "Tire"

<a id = "rule24"></a>
#### Rule 24: IF Construction Car THEN NOT MaxSpeed 100.

```json
{
  "constraintId": "Rule24:MaximumSpeedForCarNot100",
  "textualConstraint": "shared::TechnicalShared::Construction.Car -> !MaximumSpeed.\"100\""
}
```
<a id = "rule25"></a>
#### Rule 25: IF SalesRegion Africa THEN NOT Tire-MaxSpeed 200.

```json
{
  "constraintId": "Rule25:MaximumSpeed200NotForAfrica",
  "textualConstraint": "shared::SalesShared::SalesRegion.Africa -> !MaximumSpeed.\"200\""
}
```


