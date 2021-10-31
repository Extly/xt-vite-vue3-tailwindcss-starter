# Extly's XT Vite Vue3 Tailwind CSS Starter

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite)

- 🗂 [File based routing](./src/pages)

- 🍍 [State Management via Pinia](https://pinia.esm.dev/)

- 📑 [Layout system](./src/layouts)

- 🎨 [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

- 😃 [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)

- 🌍 [I18n ready](./locales)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript

## Pre-packed

### UI Frameworks

- [TailwindCSS](https://tailwindcss.com/)
- headlessui/vue plugin
- tailwindcss/aspect-ratio plugin
- tailwindcss/forms plugin
- tailwindcss/line-clamp plugin
- tailwindcss/typography plugin

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n) - Vite plugin for Vue I18n
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [Airbnb JavaScript Style Guide()](https://github.com/airbnb/javascript), single quotes, semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)

## Try it now!

## Standardized directory structure

├── public/
└── src/
    ├── assets/                    // store static resources
    ├── common/                    // general library
    ├── components/                // general components
    ├── router/                    // routers for Vue Router
    ├── store/                     // state for Vuex
    ├── style/                     // general CSS file
    ├── utils/                     // utils function
    ├── views/                     // pages
    ├── App.vue
    ├── main.ts
    ├── shims-vue.d.ts
├── tests/                         // unit test
├── index.html
├── tsconfig.json                  // TypeScript config file
├── vite.config.ts                 // Vite config file
└── package.json

## References

- <https://github.com/antfu/vitesse> - Opinionated Vite Starter Template
- <https://github.com/antfu/vitesse-lite> - Lightweight version of Vitesse
- <https://github.com/zynth17/vitailse> - Opinionated Vite starter template with TailwindCSS
- <https://github.com/alvarosaburido/vitesome> - A simple opinionated Vue3 Starter Template with Vite.js
- <https://github.com/web2033/vite-vue3-tailwind-starter> - Vite + Vue 3 + Tailwind CSS (starter)
- <https://github.com/Uninen/vite-ts-tailwind-starter> - Opinionated Vite + Vue 3 + TypeScript + Tailwind CSS starter template w/ tests and CI.
- <https://github.com/logustra/vivu> - A highly scalable vue boilerplate using vite
- [Set up Vue3 Enterprise-Level Development Environments with Vite: Step by Step Guide](https://javascript.plainenglish.io/set-up-vue3-enterprise-level-development-environments-with-vite-step-by-step-guide-32964d1df60e) - <https://github.com/BytefishMedium/vite-vue3-starter>
