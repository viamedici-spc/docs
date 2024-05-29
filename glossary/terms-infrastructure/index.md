<a id ="terms-infrastructure"></a>
## Terms relating to the configuration infrastructure
<a name ="configuration-dialogue"></a>
### Configuration Dialogue
A *Configuration Dialogue* is the dialogue between the Headless Configuration API ([*HCA*](/glossary/#hca)) and
a [*Configurator*](/glossary/#configurator) in the context of a specific [*Configuration Session*](/glossary/#configuration-session).
In an iterative process the Configurator makes [*Decisions*](/glossary/#decision) and the HCA responds with
[*Consequences*](/glossary/#consequence).
The HCA ensures that the [*Configuration State*](/glossary/#configuration-state) is always valid (feasible).


<a name ="configuration-engine"></a>
### Configuration Engine
The *Configuration Engine* is the main configuration component that is implemented as a Micro Service.
It can be consumed via a REST-API. The Configuration Engine also manages [*Configuration Sessions*](#configuration-session)
enabling user-friendly [*Configuration Dialogues*](#configuration-dialogue).
The Configuration Engine is is at the core a [*Constraint*](#constraint) resolver with a very high performance.



<a name ="configurator"></a>
### Configurator
A *Configurator* is an application which consumes the [*HCA*](#hca).


<a name ="configuration-session"></a>
### Configuration Session
A *Configuration Session* mainly consists of the current [*Configuration State*](#configuration-state).
It additionally provides associated meta information.


<a name ="deployment-store"></a>
The *Configuration Model Deployment Store* stores and provides the deployed [*Configuration Models*](#configuration-model).


<a name ="global-attribute-id"></a>
### Global Attribute Id
The ability to nest [*Configuration Models*](#configuration-model) and reuse them when modelling product or system components requires
an [*Attribute*](#attribute) identifier that is unique across the Models. Therefore, an object with the corresponding properties
for mapping the identifier components is used. The *Global Attribute Id* is practically a resource path,
which can also be called an "Attribute Path" because it is the path to an Attribute.
**An example:**
```json
{
  "attributeId": {
    "localId": "RimSize",
    "sharedConfigurationModelId": "TechnicalCommonalities",
    "componentPath": ["Rim"]
  }
}
```
The 'localId' is the name (identifier) of an Attribute in a Configuration Model under consideration,
for example the [*Component Configuration Model*](#component-configuration-model) 'Rim'.
The 'sharedConfigurationModelId' is the name of a [*Shared Configuration Model*](#shared-configuration-model)
which is used in the model under consideration ('Rim').


<a name ="constraint-id"></a>
### Constraint Id
A *Constraint Id* consists of a "localId" which is the name of a [*Rule*](#rule) and of a "configurationModelId" which is the name of a
[*Configuration Model*](#configuration-model).
**An example:**
```json
{
  "constraintId": {
    "localId": "BigPowerRequiresManualTransmission",
    "configurationModelId": "Automobile"
  }
}
```


<a id ="hca"></a>
### Headless Configuration API
The *Headless Configuration API* (HCA) is the interface to a Micro Service System
that among others contains the components: [*Configuration Engine*](#configuration-engine),
[*Configuration Model Deployment Store*](#deployment-store) and respective REST-API-Services.


<a name ="session"></a>
### Session
*Session* is used as a synonym for [*Configuration Session*](#configuration-session).


<a name ="snapshot"></a>
### Snapshot
A *Snapshot* is an internal, immutable representation of a certain version of a [*Configuration Model*](#configuration-model).
It is used within a [*Configuration Session*](#configuration-session). A Snapshot is created from a Configuration Model and it’s
a flat (fully inherited) representation of it.
