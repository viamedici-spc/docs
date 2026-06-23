# 1 Introduction

### What Is This Guide About?

This guide explains the fundamentals of configuration modeling. It is intended for people
who have little or no prior knowledge of product configuration, [*Configuration Models*](../../docu-hca/glossary/terms-modeling/#configuration-model), or
[*Configuration Rules*](../../docu-hca/glossary/terms-modeling/#configuration-rule).

The goal is to explain step by step how a configurable product is formally described.
As a consistent example throughout the guide, we use a simple automotive [*Configurator*](../../docu-hca/glossary/terms-infrastructure/#configurator).

Such a Configurator allows a user to assemble a car from various options. For example, the user can select:

• whether the car should be small or large,<br>
• what color the car should be,<br>
• what type of engine it should have,<br>
• which fuel type is allowed, and so on.

However, not every combination is permitted from a business or technical perspective.

Examples:

• In our example, an off-road vehicle must not have a natural-gas drive.<br>
• A small car must not be white.<br>
• If a bull bar is selected, the vehicle is considered an off-road vehicle.<br>
• For off-road use, at least one spare wheel must be available.

A Configuration Model describes these relationships in such a way that a Configurator can
allow valid combinations and prevent invalid combinations.

### What Will You Learn in This Guide?

After working through this guide, readers should understand:

• what a Configuration Model is,<br>
• why product configuration can be understood as a Constraint Satisfaction Problem,<br>
• how a model is built from [*Components*](../../docu-hca/glossary/terms-modeling/#component),
[*Attributes*](../../docu-hca/glossary/terms-modeling/#attribute), and [*Rules*](../../docu-hca/glossary/terms-modeling/#configuration-rule),<br>
• how Rules are read and formulated,<br>
• how invalid product combinations can be avoided,<br>
• how a simple Configuration Model can be tested systematically.

