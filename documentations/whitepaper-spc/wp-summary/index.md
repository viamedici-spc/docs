# 11. Summary

Balancing product individualization and manufacturing costs — known as
**mass customization** — poses a major challenge. This challenge can be
met with Viamedici’s SPC platform (Smart Product Configuration). By
integrating SPC into existing sales processes, those processes can be
made significantly more efficient. Follow-up questions about the
validity of quoted product variants become unnecessary. The number of
quotes per sales representative increases. The share of incorrect
product specifications reaching production drops to zero.

The platform’s underlying MACH paradigm promotes agility, scalability,
and innovation speed in software development and enables the creation of
reliable, high-quality software.

This results in the unique selling points of Viamedici’s Product
Configuration Solutions:

- Maximum reliability/uptime through microservices combined with cloud
  technology

- Extremely short response times thanks to an innovative [*Configuration Engine*](../../docu-hca/glossary/terms-infrastructure/#configuration-engine)

- High flexibility and scalability due to the [*Configuration Model*](../../docu-hca/glossary/terms-modeling/#configuration-model)-based approach

- Outstanding user experience in the Configurator Applications,
  including the prevention of incorrect or invalid combinations

- Customizable user interface design

- Use of configuration-specific UI libraries

- Real-time configuration with no delays

- Deployable as a standalone application or embedded in any web
  application, e.g., a web shop

- Easy integration and updates of product information (images, text,
  etc.)

- Easy maintenance, since typically only [*Configuration Rule*](../../docu-hca/glossary/terms-modeling/#configuration-rule) adjustments in the
  Configuration Models are required

- Use of standardized web technologies

- Integration with third-party systems via interfaces (ERP, CRM,
  e-commerce)

From the outset, Viamedici recognized that maintainability of a Product
Configuration System is a key factor in long-term effort and cost.
Accordingly, the maintenance tools were developed with great care and
foresight. For maintaining Configuration Rules, only the specially
developed Configuration Model Developer tool is used. As part of the
platform architecture, this tool offers excellent ease of use (user
experience) and enables highly efficient work.

Additional core components of the platform architecture are the
Configuration Engine and the frontend libraries.

Viamedici’s Configuration Engine is the centerpiece of the backend
components and the result of years of research and development. The
algorithm of the underlying solver has been modified and extended so
that finding a solution to a Configuration Problem happens at a globally
unique speed.

In practice, this means that entirely new possibilities open up for
Configurator Performance and user experience.

Another key differentiator is this: Viamedici’s Configuration Engine
does not “leave the user out in the rain.” On the contrary, it supports
highly efficient work in a unique way when the Configurator-App
leverages the corresponding functions — which is easy to do with the
help of the frontend libraries (see below). In the context of a Product
Configurator, efficient work means quickly determining a valid product
variant.

The frontend libraries simplify the creation of Configurator
Applications that rely on the Viamedici Configuration Engine. They
expose all functions of the Configuration Engine via a strictly typed
API. This eliminates the need for Configurator-App developers to
interact directly with the engine’s REST API.

Configurator-Apps can be implemented using any web technologies.

For the design and prototyping software Framer, which strongly focuses
on interactive and responsive web designs, the Viamedici UI Kit is
available. It includes specially developed, configuration-specific
controls. These allow designers to create Configurator-Apps without
programming knowledge, while still enabling developers to add custom
code.

Configurator-Apps created using the Viamedici UI Kit stand out with an
exceptional user experience.

Integration with third-party systems — of any kind — takes place
exclusively via standard interfaces.

There are three fundamental business scenarios for the SPC platform.

1.  **Gold Mining**\
    Product variants are to be determined via guided selling. The
    product data, including the Configuration Attributes, is available
    in EPIM.

2.  **Filling the Piggy Bank**\
    Complex products are to be sold more efficiently. Incorrect orders
    resulting from faulty variant specifications are to be avoided.

3.  **Switching Horses**\
    Product configuration is to be made simpler, faster, safer, and more
    user-friendly than before. Existing Product Configurators are either
    too slow and/or too complex and/or too expensive.

Implementing a Product Configuration System — like any software project
— requires a structured approach, clear responsibilities, and a
well-thought-out timeline. With sufficient resources and a clear
change-management strategy, a successful rollout can be ensured.

A sample schedule:

| **Phase**                             | **Dauer**    | **Zeitrahmen** |
|---------------------------------------|--------------|----------------|
| Requirements analysis                 | 2 - 4 weeks  | month 1        |
| System design and customization       | 8 - 12 weeks | month 2 - 4    |
| Data migration                        | 4 - 6 weeks  | month 5 - 6    |
| Testing phase                         | 4 - 6 weeks  | month 7 - 8    |
| Rollout                               | 2 - 4 weeks  | month 8 - 9    |
| Post-go-live support and optimization | 4 - 8 weeks  | month 10 - 11  |

Total duration: **approx. 10-11 months.**

When discussing implementation, it is important to emphasize the need
for internal staffing resources. The following roles are required:

- Project manager

- Subject-matter experts from sales, production, and product development

- IT experts for system integration

- Key users from relevant departments (sales, production, logistics).

There are two licensing pricing models to choose from: either based on
the number of API calls (REST API of the Configuration Engine) or based
on the number of cloud nodes used. Both models are aligned with actual
usage. They are designed to be flexible for different company sizes and
requirements.

Selecting the most cost-effective pricing model depends on various
factors. Viamedici supports this decision with in-depth consulting.

**Rethinking Product Configuration** is our slogan. The discussion so far
shows that this is more than just a phrase. We rethink the topic by
viewing frontend and backend separately, while also keeping their
interdependence in mind. The starting point is always the user, who
should be offered a goal-oriented user experience. This, in turn,
creates requirements for the backend, which has been developed over time
into a uniquely high-performing solution.

You are welcome to see for yourself the exceptional aspects of our
configuration platform and solutions.

If you are interested — or already facing configuration challenges — we
would be happy to hear from you:

d.langbein@viamedici.de

We’d be glad to arrange an initial consultation or a demonstration of
our SPC configuration platform.
