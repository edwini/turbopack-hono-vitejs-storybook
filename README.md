# Turborepo Seguros continental

Para iniciar e instalar las dependencias en todos los repositorios ejecutar el comando:

```sh
npm install
```

## Repositorios en este proyecto

- `docs`: un projecto [Storybook](https://storybook.js.org/) para documentar componentes
- `api`: uno api server [Hono](https://hono.dev/) con JSON mockeados
- `table-relaties`: un proyecto de pruebas
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwind-config`: [Tailwind CSS](https://tailwindcss.com/) comparte la congiguracion para que todos los componentes usen Tailwind
- `ui`: es la lista de componentes atomicos y variables, utilizan [ShadCN](https://ui.shadcn.com/) utiliza la configuracion del repo `@repo/tailwind-config`

Todo el Turborepo es 100% [TypeScript](https://www.typescriptlang.org/).

### Creacion de nuevos repositorios

Todo nuevo repositorio debe ir dentro de la directorio `apps/` 

Crear nuevo repositorio utilizando este comando:

```sh
npm create vite@latest
```
Despues de crear el nuevo repo, es necesario configurar el `package.json`, utilizando en repo `table-relatives` como ejemplo.
1. Copiar el archivo tailwind.config.ts y postcss.config.js
2. Copiar las dependencias
```
"autoprefixer",
"postcss",
"tailwindcss"
```
3. Reemplazar  index.css
4. importar el style general `import "@repo/ui/styles.css";` en el App.tsx

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [ViteJS](https://vitejs.dev/) React frontend toolting
- [Prettier](https://prettier.io) for code formatting
