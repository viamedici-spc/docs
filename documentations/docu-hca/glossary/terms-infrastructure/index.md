<a id ="terms-infrastructure"></a>
## 2.1 Terms relating to the Configuration Infrastructure
<a name ="infrastructure"></a>
### Configuration Infrastructure
The components of the **Configuration Infrastructure** create the prerequisites for configuration to take place.

<a name ="cmd"></a>
### Configuration Model Developer (CMD)
The *Configuration Model Developer* is the integrated development environment for developing and maintaining Configuration Models.

<a name ="configuration-dialogue"></a>
### Configuration Dialogue
A *Configuration Dialogue* is the dialogue between the Headless Configuration API ([*HCA*](#hca)) and
a [*Configurator*](#configurator) in the context of a specific [*Configuration Session*](#configuration-session).
In an iterative process the Configurator makes [*Decisions*](../terms-state/#decision) and the HCA responds with
[*Consequences*](../terms-state/#consequence).
The HCA ensures that the [*Configuration State*](../terms-state/#configuration-state) is always valid (feasible).


<a name ="configuration-engine"></a>
### Configuration Engine
The *Configuration Engine* is the main configuration component that is implemented as a Micro Service.
It can be consumed via a REST-API. The Configuration Engine also manages [*Configuration Sessions*](#configuration-session)
enabling user-friendly [*Configuration Dialogues*](#configuration-dialogue).
The Configuration Engine is at the core a [*Constraint*](../terms-modeling#constraint) resolver with a very high performance.



<a name ="configurator"></a>
### Configurator
A *Configurator* is an application which consumes the [*HCA*](#hca).


<a name ="configuration-session"></a>
### Configuration Session
A *Configuration Session* mainly consists of the current [*Configuration State*](../terms-state/#configuration-state).
It additionally provides associated meta information.


<a name ="configuration-project"></a>
### Configuration Project
A *Configuration Project* is a collection
of Configuration Models and associated metadata organized into a single administrative unit.


<a name ="configuration-model-deployment-store"></a>
### Configuration Model Deployment Store
The *Configuration Model Deployment Store* stores and provides the deployed [*Configuration Models*](../terms-modeling/#configuration-model).


<a name ="global-attribute-id"></a>
### Global Attribute Id
The ability to nest [*Configuration Models*](../terms-modeling/#configuration-model) and reuse them when modelling product or system components requires
an [*Attribute*](../terms-modeling/#attribute) identifier that is unique across the Models. Therefore, an object with the corresponding properties
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
for example the [*Component Configuration Model*](../terms-modeling/#component-configuration-model) 'Rim'.
The 'sharedConfigurationModelId' is the name of a [*Shared Configuration Model*](../terms-modeling/#shared-configuration-model)
which is used in the model under consideration ('Rim').


<a name ="constraint-id"></a>
### Constraint Id
A *Constraint Id* consists of a "localId" which is the name of a [*Rule*](../terms-modeling/#configuration-rule) and of a "configurationModelId" which is the name of a
[*Configuration Model*](../terms-modeling/#configuration-model).
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
[*Configuration Model Deployment Store*](#configuration-model-deployment-store) and respective REST-API-Services.


<a name ="session"></a>
### Session
*Session* is used as a synonym for [*Configuration Session*](#configuration-session).


<a name ="snapshot"></a>
### Snapshot
A *Snapshot* is an internal, immutable representation of a certain version of a [*Configuration Model*](../terms-modeling/#configuration-model).
It is used within a [*Configuration Session*](#configuration-session). A Snapshot is created from a Configuration Model and it’s
a flat (fully inherited) representation of it.



