# Grano y Ritual

Sitio web de práctica para una cafetería ficticia de café de especialidad. Presenta la idea de la casa (el café como una pausa deliberada), cuatro métodos de preparación y los datos de contacto.

**Sitio publicado:** https://cproductuxia.github.io/Esmeralda/

## De qué trata

El proyecto nació como un sitio estático de tres páginas en HTML y CSS, y luego se refactorizó con Angular manteniendo el mismo aspecto visual. Un refactor cambia cómo está organizado el código, no lo que ve la persona que visita el sitio.

Páginas:

- **Inicio:** portada, presentación de la casa y una cita destacada.
- **Métodos:** V60, prensa francesa, espresso y AeroPress, con su tiempo aproximado de preparación.
- **Contacto:** correo, Instagram y horario (datos de ejemplo).

## Tecnologías

- **Angular 22** con componentes standalone y enrutamiento
- **TypeScript**
- **CSS** (variables globales y estilos por componente)
- **Google Fonts:** Fraunces e Inter
- **GitHub Pages** para el alojamiento estático
- **angular-cli-ghpages** para publicar el sitio

## Estructura del proyecto

    src/app/
    ├── layout/    Encabezado y pie de página (se usan una sola vez)
    ├── pages/     Una carpeta por página: home, methods, contact
    └── shared/    Piezas reutilizables: hero, quote-block, page-intro,
                   method-row y contact-block

Las rutas están en `src/app/app.routes.ts` y cada página se carga de forma diferida (lazy loading). Los datos de Métodos y Contacto viven en arreglos dentro de su página, así no se repite el HTML.

## Cómo correrlo en local

Requisitos: Node.js 22.12 o superior y Angular CLI.

    npm install
    ng serve

Luego abre http://localhost:4200.

## Cómo desplegarlo

El sitio se publica en la rama `gh-pages`, que es la que sirve GitHub Pages. Como vive en una subcarpeta, se necesita indicar la ruta base:

    ng deploy --base-href=/Esmeralda/
