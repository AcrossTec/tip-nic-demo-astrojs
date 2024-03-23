## Table of Contents

<details><summary>Click to expand</summary>

- [Table of Contents](#table-of-contents)
- [🌀 Built with Flowbite](#-built-with-flowbite)
- [💨 Tailwind CSS utility classes](#-tailwind-css-utility-classes)
- [👨‍🚀 Development](#-development)
  - [🚀 Quick start](#-quick-start)
  - [Project Structure](#project-structure)
  - [🛠 Tools](#-tools)
- [Useful Links](#useful-links)

</details>

---

## 🌀 Built with Flowbite

The interactive components such as the navbars, modals, drawers, and tooltips are all based on the popular [open-source component library called Flowbite](https://flowbite.com/) which enables us to use these elements by creating more complex set of pages and widgets inside a fully-fledged admin dashboard template.

## 💨 Tailwind CSS utility classes

All of the pages, widgets, and components are solely based on the utility-first classes from Tailwind CSS and it is compatible with the latest `v3.x` of the technology by automatically purging all of the classes based on the template paths.

## 👨‍🚀 Development

### 🚀 Quick start

1. Clone this repository or download the ZIP file
2. Make sure that you have **Node.js** and NPM, PNPM or Yarn installed
3. Install the project dependencies from the `package.json` file:

```sh
pnpm install
# or
npm install
# or
yarn
```

_PNPM is the package manager of choice for illustration, but you can use what you want._

1. Launch the Astro local development server on `localhost:2121` by running the following command:

```sh
pnpm run dev
```

You can also build the project and get the distribution files inside the `dist/` folder by running:

```sh
pnpm run build
```

Then, you can preview the generated build with a local web server:

```sh
pnpm run preview
```

For deployment, see the GitHub workflow, where you can plug your target (pre-configured for GitHub pages).
See [docs.astro.build/en/guides/deploy](https://docs.astro.build/en/guides/deploy)

Website is configured for static deployment, but you can flip it to **Server-Side rendering** by simply
uncommenting `output: "server"` in the `./astro.config.mjs`.

---

### Project Structure

After cloning this repository, you'll find the following (simplified) structure:

```sh
🛬
├── 💧 data
│   └── **/*.json                        # Satic data sources for REST etc.
│
└── src
    │
    ├── 🧱 app
    │   └── **/*.astro                   # Application-wide components
    │
    ├── 🌠 assets
    │   └── **/*.{svg,…}                 # Transformable assets
    │
    ├── 🧱 components
    │   └── **/*.astro                   # Simple, atomic UI elements
    │
    ├── 📚 lib
    │   └── **/*.ts                      # Utilities (Databases, APIs…)
    │
    ├── 🧱 modules
    │   └── **/*.astro                   # Complex views made of elements
    │
    ├── 📑 pages
    │   ├── **/*.astro                   # File-based client routes
    │   │
    │   └── 🌐 api
    │        └── [...entities].ts        # Catch-all endpoint for CRUD ops.
    │
    ├── 🚀 services
    │   └── *.ts                         # Server-side CRUD operations
    │
    └── 📐 types
        └── *.ts                         # Data entities typings

```

### 🛠 Tools

Efforts have been put on fast **onboarding** and **developer experience**.

This project comes with extensive support for TypeScript, Astro, Tailwind, and VS Code.  
It is configured with sensible defaults, a bit of opinions, plus some tricks to make it plays nice together.

- **TypeScript**: _strictest_ Astro's settings. Full-stack, type-safe code base
- **ESLint**: featuring `astro-eslint-parser` + `eslint-plugin-astro`
- **Prettier**: featuring `prettier-plugin-astro` (bundled with `astro`)
- **Editorconfig**: conforming with prettier
- **VS Code**: extensions recommendations, tooling settings
- **Tailwind**: Astro integration (using Vite and PostCSS)
- **Flowbite**: dependencies (core, typography), settings

Feel free to hack those settings to cater for your own needs.

## Useful Links

- 📚 [Flowbite Library](https://flowbite.com/) - Open-source components built with Tailwind CSS
- 🎨 [Flowbite Figma](https://flowbite.com/figma/) - Design system built for Figma
- 🧱 [Flowbite Blocks](https://flowbite.com/blocks/) - Building sections for website and applications
- 💎 [Flowbite Pro](https://flowbite.com/pro/) - A larger collection of the open-source version of the latter three
