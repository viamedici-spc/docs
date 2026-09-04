## 6.2 The specialized IDE
The central tool for maintaining [*Configuration Models*](../../../docu-hca/glossary/terms-modeling/#configuration-model) is the so called **Configuration Model Developer (CMD)**.
It offers a unique level of ease of use (user experience), enabling highly efficient work.

The core part of the user interface is the editor for [*Configuration Attributes*](../../../docu-hca/glossary/terms-modeling/#attribute) and [*Configuration Rules*](../../../docu-hca/glossary/terms-modeling/#configuration-rule).
Both Attributes and Rules can be organized into named groups.\
In cases where Attributes are imported from another system, such as EPIM, they are marked as “read-only.”

There are two function panels on the left and right sides, respectively, which
are hidden by default and can be expanded by clicking on them.
When using larger screens, multiple panels can be shown at the same time and can also be
pinned (see Figure 6.1).

![](../../media/CMD-FunctionPanels.png "CMD Function Panels")

Figure 6.1: The CMD with three expanded function panels

The most innovative function panel is the **Evaluator**. Using an
automatically generated configuration user interface, modified or new
Configuration Rules can be validated at runtime in the context of the entire Rule set.
After the complete Configuration Model has been successfully validated —
which, of course, also includes the Attributes and their Values — it can
be approved and made available for use via the **Changes Panel**.

The two function panels on the left side are used to manage the
[*Configuration Projects*](../../../docu-hca/glossary/terms-infrastructure/#configuration-project) of the project owner (tenant) selected
at the top right
