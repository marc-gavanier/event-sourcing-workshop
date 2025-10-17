# Event-Sourcing Workshop (TypeScript)

<h2 id="about">🪧 About</h2>

TypeScript port of the **Event-Sourcing Workshop** made during the [Software Crafters Lyon](https://www.meetup.com/software-craftsmanship-lyon/) session on **2025-10-17**.

The original version, created by [Romain Berthon](https://github.com/RomainTrm), is itself adapted from the workshop by [Jérémie Chassaing](https://thinkbeforecoding.com/).  
I decided to rewrite it in TypeScript to explore the same concepts through a different technological and stylistic lens.

---

## 📑 Table of Contents

- 🪧 [About](#about)
- 🔍 [Overview](#overview)
- 🤗 [Contributing](#contributing)
- 📝 [License](#license)
- 📚 [References](#license)

---

<h2 id="overview">🔍 Overview</h2>

This repository reimplements the original F# version of the Event-Sourcing workshop in **TypeScript**, keeping the same progression and learning goals.

The exercise guides you through the migration of a simple **state-based system** to an **event-sourced architecture**, step by step:
1. Define domain logic using `decide` (commands → state).
2. Introduce events and an `project` function.
3. Migrate persistence from state storage to event storage.
4. Generalize with a reusable `Decider` pattern.

The domain is deliberately simple — a lightbulb that can be turned on and off until it breaks after a few activations — in order to focus on the **core principles of Event-Sourcing**.

<h2 id="contributing">🤗 Contributing</h2>

This repository is meant as a **learning and experimentation space**.  
If you’ve tried the original workshop and want to contribute improvements or propose alternative implementations, feel free to open an **issue** or **pull request**.

<h2 id="license">📝 License</h2>

This repository is inspired by the original work of [Jérémie Chassaing](https://thinkbeforecoding.com/) and the [Event-Sourcing Workshop by Romain Berthon](https://github.com/RomainTrm/Workshop-Event-Sourcing-Crafters).  
See the [LICENSE.md](./LICENSE.md) file in the repository for more information.

<h2 id="license">📚 References</h2>

Original workshop adapted from Jérémie Chassaing’s work:
- Blog: https://thinkbeforecoding.com
- Original workshop: https://codeberg.org/thinkbeforecoding/es-workshop
- Blog post on the Decider pattern: https://thinkbeforecoding.com/post/2021/12/17/functional-event-sourcing-decider
