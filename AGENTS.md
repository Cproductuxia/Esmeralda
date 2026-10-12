# AGENTS.md

Reglas del proyecto **Esmeralda** para cualquier agente de código (Claude Code, Codex, Copilot, etc.). Léelas completas antes de modificar el repositorio.

## Descripción del proyecto

Esmeralda es el repositorio del sitio **Grano y Ritual** (café de especialidad), un sitio de tres páginas que fue refactorizado a **Angular 22** y se publica en **GitHub Pages**. El objetivo del refactor es que el sitio se vea **idéntico** al original, pero con una arquitectura Angular limpia y sin código repetido.

## Stack

- Angular 22 (Angular CLI 22.x), TypeScript
- Node.js 22 y npm 10
- Despliegue con `angular-cli-ghpages` hacia la rama `gh-pages`

## Comandos

```bash
npm install          # instalar dependencias
ng serve             # servidor de desarrollo en http://localhost:4200
ng build             # compilación de producción
ng test              # pruebas unitarias
ng deploy --base-href=/Esmeralda/   # publicar en GitHub Pages
```

## Reglas de arquitectura

1. Usar componentes **standalone**; no crear NgModules nuevos.
2. Un componente por responsabilidad. Si un bloque de HTML se repite, extraerlo a un componente reutilizable.
3. Las rutas se definen en un archivo de rutas separado (`app.routes.ts`), con carga diferida (`loadComponent`) cuando tenga sentido.
4. Respetar la estructura de `src/app/`:
   - `layout/`: componentes de estructura general del sitio (por ejemplo, encabezado y pie de página).
   - `pages/`: un componente por página/ruta.
   - `shared/`: componentes reutilizables que usan varias páginas.
   - `app.routes.ts`, `app.config.ts` y `app.ts`: rutas, configuración y componente raíz.
5. Mantener la lógica fuera de las plantillas: la lógica en la clase del componente o en servicios.
6. Los datos de contenido (textos, listas, enlaces) no se escriben a mano repetidamente en el HTML; se centralizan en una fuente de datos tipada y se recorren con `@for`.
7. Usar la sintaxis de control de flujo moderna (`@if`, `@for`, `@switch`) y signals cuando aplique.
8. Tipar todo; evitar `any`.

## Reglas de estilo visual

- Todas las decisiones visuales (colores, tipografías, espaciados, radios, componentes) están definidas en [`DESIGN.md`](./DESIGN.md). Es la fuente de verdad.
- No introducir colores, fuentes ni medidas que no estén en `DESIGN.md`. Si hace falta uno nuevo, primero se agrega a `DESIGN.md`.
- Los tokens se aplican mediante variables CSS globales; evitar valores fijos (hex, px) dentro de los componentes.
- El sitio debe verse igual que la versión original. Ante la duda, comparar con la copia de respaldo del sitio original.

## Despliegue (GitHub Pages)

- El sitio vive en `https://cproductuxia.github.io/Esmeralda/`, por lo que el `base-href` debe ser `/Esmeralda/`.
- Usar rutas relativas para los recursos (imágenes, fuentes) para que funcionen bajo ese `base-href`.
- GitHub Pages sirve la rama `gh-pages`; esa rama se genera con `ng deploy`. **No editarla a mano.**
- Al ser un sitio estático, no depender de un servidor: las rutas deben funcionar con el *fallback* a `404.html` de GitHub Pages.

## Flujo de trabajo con Git

- La rama de trabajo del refactor es `angular-refactor`; `main` solo se actualiza mediante Pull Request.
- Commits pequeños, en español, con mensajes que describan el cambio (por ejemplo: `Extraer componente de tarjeta`).
- No hacer *force push* ni reescribir historial compartido.
- No subir `node_modules/`, `dist/` ni archivos `.angular/`.

## Documentación

- Mantener el `README.md` actualizado con la descripción del proyecto, las tecnologías usadas y cómo ejecutarlo y desplegarlo.
- Si cambia una regla de este archivo, actualizarlo en el mismo commit.

## Idioma

- Responder y documentar en español neutro.
- Nombres de código (variables, clases, archivos) en inglés, siguiendo las convenciones de Angular.
