# Extly's XT Vite Vue3 Tailwind CSS Starter

## Features

- β‘οΈ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite)

- π [File based routing](./src/pages)

- π [State Management via Pinia](https://pinia.esm.dev/)

- π [Layout system](./src/layouts)

- π¨ [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

- π [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)

- π [I18n ready](./locales)

- π₯ Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- π¦Ύ TypeScript

## Pre-packed

### UI Frameworks

- [TailwindCSS](https://tailwindcss.com/)
- headlessui/vue plugin
- tailwindcss/aspect-ratio plugin
- tailwindcss/forms plugin
- tailwindcss/line-clamp plugin
- tailwindcss/typography plugin

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [πIcΓ΄nes](https://icones.netlify.app/)

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

## Standardized directory structure

```sh
  βββ public/
  βββ src/
      βββ assets/                    // store static resources
      βββ common/                    // general library
      βββ components/                // general components
      βββ router/                    // routers for Vue Router
      βββ store/                     // state for Vuex
      βββ style/                     // general CSS file
      βββ utils/                     // utils function
      βββ views/                     // pages
      βββ App.vue
      βββ main.ts
      βββ shims-vue.d.ts
  βββ tests/                         // unit test
  βββ index.html
  βββ tsconfig.json                  // TypeScript config file
  βββ vite.config.ts                 // Vite config file
  βββ package.json
```

## References

- <https://github.com/antfu/vitesse> - Opinionated Vite Starter Template
- <https://github.com/antfu/vitesse-lite> - Lightweight version of Vitesse
- <https://github.com/zynth17/vitailse> - Opinionated Vite starter template with TailwindCSS
- <https://github.com/alvarosaburido/vitesome> - A simple opinionated Vue3 Starter Template with Vite.js
- <https://github.com/web2033/vite-vue3-tailwind-starter> - Vite + Vue 3 + Tailwind CSS (starter)
- <https://github.com/Uninen/vite-ts-tailwind-starter> - Opinionated Vite + Vue 3 + TypeScript + Tailwind CSS starter template w/ tests and CI.
- <https://github.com/logustra/vivu> - A highly scalable vue boilerplate using vite
- [Set up Vue3 Enterprise-Level Development Environments with Vite: Step by Step Guide](https://javascript.plainenglish.io/set-up-vue3-enterprise-level-development-environments-with-vite-step-by-step-guide-32964d1df60e) - <https://github.com/BytefishMedium/vite-vue3-starter>
