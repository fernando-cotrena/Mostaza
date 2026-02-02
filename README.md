# 🧪 Cypress Automation – Mostaza

Proyecto de automatización E2E sobre el sitio de **Mostaza**, desarrollado con **Cypress** aplicando buenas prácticas de diseño y mantenimiento de tests.

El objetivo principal es demostrar:
- Automatización clara y legible
- Uso correcto del **Page Object Model**
- Separación de responsabilidades (Pages, Actions, Asserts)
- Tests que cuentan una historia de negocio

---

## 🚀 Tecnologías utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript
- Node.js
- Cypress XPath (cuando es necesario)

---

## 📁 Estructura del proyecto

```text
cypress/
├── e2e/
│   └── menu/
│       └── open-menu.cy.js        # Casos de prueba E2E
│
├── support/
│   ├── pages/                     # Mapeo del DOM (selectores)
│   │   └── menu.page.js
│   │
│   ├── actions/                   # Acciones del usuario (intención)
│   │   └── menu.actions.js
│   │
│   ├── asserts/                   # Validaciones y expectativas
│   │   └── menu.asserts.js
│   │
│   └── commands.js



🧠 Arquitectura de tests

Este proyecto utiliza una variante avanzada del Page Object Model, separando claramente:

🔹 Pages

Contienen únicamente selectores y acceso al DOM
❌ No ejecutan acciones
❌ No realizan validaciones

🔹 Actions

Representan acciones del usuario, por ejemplo:

Abrir una categoría

Navegar entre secciones

Los métodos expresan intención, no implementación:

openMenuCategory('mega-hamburguesas')

🔹 Asserts

Centralizan todas las validaciones, permitiendo:

Reutilización

Tests más legibles

Cambios de UI sin romper flujos

📖 Ejemplo de test
menuActions
  .openMenuCategory('mega-hamburguesas');

menuAsserts
  .shouldDisplayCategory('mega-hamburguesas')
  .shouldDisplayMenuItems();


El test se lee como una historia de usuario, no como código técnico.


## ▶️ Ejecución de los tests

El proyecto cuenta con scripts preconfigurados para facilitar la ejecución.

### 🔹 Modo interactivo (UI)
Abre Cypress con el Test Runner:

```bash
npm run cy:open
🔹 Modo headless + reporte
Ejecuta los tests en modo headless y genera un reporte HTML con Mochawesome:

bash
Copiar código
npm run cy:run
Al finalizar la ejecución, el reporte se genera en:

text
Copiar código
cypress/reports/
└── report.html


✅ Buenas prácticas aplicadas

Naming semántico (orientado a negocio)

Separación clara de responsabilidades

Fluent Interface para mejorar legibilidad

Selectores basados en semántica, no en estilos visuales

Tests mantenibles y escalables

📌 Notas

Este proyecto tiene fines educativos y demostrativos, enfocado en buenas prácticas de automatización y diseño de tests E2E.

Cualquier mejora o sugerencia es bienvenida 🙌