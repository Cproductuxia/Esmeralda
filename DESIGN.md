---
version: alpha
name: Grano y Ritual
description: Reglas de estilo del sitio Grano y Ritual (café de especialidad). Fuente de verdad visual extraída de src/styles.css, src/index.html y los .css de cada componente.
colors:
  primary: "#2B1B12"
  secondary: "#4A3222"
  neutral: "#F3E9DC"
  surface: "#E4D3BC"
  accent: "#B98C2E"
typography:
  brand:
    fontFamily: Fraunces
    fontSize: 1.4rem
    fontWeight: 600
    letterSpacing: 0.01em
  hero-title:
    fontFamily: Fraunces
    fontSize: 3.2rem
    fontWeight: 600
    lineHeight: 1.15
  page-title:
    fontFamily: Fraunces
    fontSize: 2.5rem
    fontWeight: 600
  title-md:
    fontFamily: Fraunces
    fontSize: 1.4rem
    fontWeight: 600
  title-sm:
    fontFamily: Fraunces
    fontSize: 1.25rem
    fontWeight: 600
  quote:
    fontFamily: Fraunces
    fontSize: 1.3rem
  body-md:
    fontFamily: Inter
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: Inter
    fontSize: 1.05rem
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 0.95rem
    lineHeight: 1.6
  cite:
    fontFamily: Inter
    fontSize: 0.9rem
    lineHeight: 1.6
  caption:
    fontFamily: Inter
    fontSize: 0.85rem
    lineHeight: 1.6
rounded:
  sm: 2px
spacing:
  xs: 0.75rem
  sm: 1.25rem
  md: 1.5rem
  lg: 3rem
  xl: 5rem
  page-top: 4rem
components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  site-header:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.brand}"
    padding: 1.25rem 2rem
  nav-link:
    textColor: "{colors.surface}"
    typography: "{typography.body-sm}"
  nav-link-hover:
    textColor: "{colors.neutral}"
  hero:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.hero-title}"
    padding: 5rem 1.5rem
  hero-text:
    textColor: "{colors.surface}"
    typography: "{typography.lead}"
  page-intro:
    textColor: "{colors.primary}"
    typography: "{typography.page-title}"
    padding: 3.5rem 1.5rem 0
  page-intro-text:
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
  method-row:
    textColor: "{colors.secondary}"
    typography: "{typography.title-sm}"
    padding: 1.75rem 0
  method-time:
    textColor: "{colors.accent}"
    typography: "{typography.caption}"
  quote-block:
    textColor: "{colors.primary}"
    typography: "{typography.quote}"
  quote-cite:
    textColor: "{colors.secondary}"
    typography: "{typography.cite}"
  contact-block:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.title-md}"
    rounded: "{rounded.sm}"
    padding: 3rem
  contact-block-text:
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
  footer:
    textColor: "{colors.secondary}"
    typography: "{typography.caption}"
    padding: 0 1.5rem 3rem
---

## Overview

Grano y Ritual es un sitio de café de especialidad con una identidad cálida y editorial. El fondo es crema, el texto va en café oscuro y el dorado se reserva para detalles mínimos. Los bloques oscuros (encabezado, portada y bloque de contacto) crean contraste y ritmo entre secciones. La composición es sobria, de una sola columna y centrada en el contenido, sin sombras ni degradados.

## Colors

La paleta sale de las variables CSS definidas en `:root` de `src/styles.css`.

- **Primary (#2B1B12):** café oscuro. Texto principal y titulares sobre fondo claro, y fondo de los bloques oscuros (encabezado, portada, contacto). Es `--brown-900` y también `--text-dark`.
- **Secondary (#4A3222):** café medio. Texto de apoyo (párrafos secundarios, citas, pie de página) y líneas divisorias dentro de los bloques oscuros. Es `--brown-700`.
- **Neutral (#F3E9DC):** crema. Fondo general del sitio y texto sobre los bloques oscuros. Es `--cream`.
- **Surface (#E4D3BC):** beige. Texto secundario sobre fondos oscuros (enlaces de navegación, párrafos de la portada y del contacto) y líneas divisorias sobre fondo claro. Es `--tan`.
- **Accent (#B98C2E):** dorado. Se usa solo en detalles: subrayado del enlace activo o en hover, borde izquierdo de la cita y el texto de tiempo en cada método. Es `--gold`.

## Typography

Dos familias, cargadas desde Google Fonts en `src/index.html`:

- **Fraunces (serifa):** títulos, marca y citas. Peso 600 en títulos y marca; las citas van en cursiva (se carga la cursiva en peso 500).
- **Inter (sans-serif):** texto corrido, peso 400, interlineado 1.6. También se carga el peso 500.

Escala de tamaños. Los tokens de los títulos de portada y de página guardan el tamaño máximo; en el CSS el tamaño es fluido con `clamp()`, como se indica abajo:

- **Portada (h1):** `clamp(2.1rem, 5vw, 3.2rem)`, interlineado 1.15, ancho máximo de 14 caracteres.
- **Título de página (h1):** `clamp(1.9rem, 4vw, 2.5rem)`.
- **Marca y título del bloque de contacto:** 1.4rem. La marca lleva `letter-spacing: 0.01em`.
- **Título de método (h2):** 1.25rem.
- **Cita:** 1.3rem, cursiva.
- **Texto destacado de la portada:** 1.05rem, ancho máximo de 52 caracteres.
- **Navegación, listas de contacto y autor de la cita:** 0.95rem (la cita del autor, 0.9rem).
- **Texto de tiempo y pie de página:** 0.85rem.

Los párrafos de introducción de página tienen un ancho máximo de 55 caracteres para mantener la lectura cómoda.

## Layout

- Contenido centrado con ancho máximo de **720px** en `main`, portada, introducción de página y pie de página.
- Relleno de `main`: 4rem arriba, 1.5rem a los lados y 5rem abajo.
- Encabezado: flex con la marca a la izquierda y la navegación a la derecha, relleno 1.25rem 2rem, separación de 1.75rem entre enlaces.
- Fila de método: cuadrícula de dos columnas `1fr 2.2fr` con separación de 1.5rem y relleno vertical de 1.75rem.
- Lista de contacto: filas con etiqueta a la izquierda y valor a la derecha.
- **Punto de quiebre móvil: 560px.** Por debajo, el encabezado pasa a una columna alineada a la izquierda, la fila de método a una sola columna y el bloque de contacto reduce su relleno a 2rem 1.5rem.
- El desplazamiento entre secciones es suave y todos los elementos usan `box-sizing: border-box`.

## Elevation & Depth

No hay sombras ni degradados. La jerarquía se logra con contraste de color entre bloques oscuros y fondo crema, y con líneas divisorias de 1px: en `surface` sobre fondo claro (filas de método) y en `secondary` dentro de bloques oscuros (lista de contacto).

## Shapes

Formas casi rectas. El único radio definido es **2px** en el bloque de contacto. Los acentos gráficos son líneas: un borde izquierdo de 3px en dorado en las citas y un subrayado de 1px en dorado en la navegación (visible solo en hover y en la página activa).

## Components

- **Página:** fondo `neutral`, texto `primary`, tipografía de cuerpo.
- **Encabezado:** fondo `primary`, marca en `neutral`. Los enlaces van en `surface`; en hover y en la página activa (`aria-current="page"`) pasan a `neutral` con subrayado `accent`. La transición dura 0.2s.
- **Portada (hero):** fondo `primary`, título en `neutral` y texto en `surface`. Relleno 5rem 1.5rem.
- **Introducción de página:** título en `primary`, texto en `secondary`. Relleno 3.5rem 1.5rem 0.
- **Fila de método:** título en `primary`, descripción en `secondary`, tiempo en `accent`. Separada por una línea `surface`; la primera fila también lleva línea superior.
- **Cita:** texto en Fraunces cursiva color `primary`, con borde izquierdo de 3px `accent`, relleno izquierdo de 1.5rem y margen superior de 3.5rem. El autor va en `secondary`, sin cursiva.
- **Bloque de contacto:** fondo `primary`, relleno 3rem, radio 2px. Título en `neutral`, párrafo y etiquetas en `surface`, líneas divisorias en `secondary`.
- **Pie de página:** texto en `secondary`, 0.85rem, alineado a la izquierda, relleno 0 1.5rem 3rem.

## Do's and Don'ts

- Hacer: usar las variables CSS de `:root` (`--cream`, `--brown-900`, `--brown-700`, `--tan`, `--gold`) en lugar de valores hexadecimales sueltos.
- Hacer: alternar bloques oscuros (`primary`) con fondo crema para dar ritmo a la página.
- Hacer: reservar el dorado para acentos pequeños (líneas, tiempos, enlace activo).
- Hacer: usar Fraunces solo para títulos, marca y citas, e Inter para todo lo demás.
- Hacer: mantener el contenido dentro de 720px y revisar el comportamiento a 560px.
- No hacer: agregar colores o fuentes que no estén en este archivo.
- No hacer: usar blanco o negro puros, sombras o degradados.
- No hacer: usar el dorado como fondo ni como color de texto largo.
- No hacer: aplicar radios mayores a 2px.
