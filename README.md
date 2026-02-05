# 🌸 Origiinales

**Origiinales** es una tienda online de productos personalizados para eventos, construida con tecnologías modernas para ofrecer una experiencia de usuario premium y fluida.

## ✨ Características

- 🛍️ **Tienda de productos personalizados** - Catálogo de productos con opciones de personalización
- 🎨 **Diseño elegante y moderno** - Interfaz premium con paleta de colores suaves (rosa, lila, menta) y detalles dorados
- 🛒 **Integración con Snipcart** - Carrito de compras completo sin necesidad de backend propio
- 📱 **Diseño responsive** - Optimizado para todos los dispositivos
- 💬 **Contacto directo** - Formulario de contacto integrado con Netlify Forms y enlace directo a WhatsApp
- ⚡ **Rendimiento optimizado** - Generación estática para tiempos de carga ultrarrápidos

## 🛠️ Stack Tecnológico

- **Framework**: [Nuxt 4](https://nuxt.com/) - Framework Vue.js de última generación
- **UI/Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Framework CSS utility-first
- **E-commerce**: [Snipcart](https://snipcart.com/) - Plataforma de carrito de compras
- **Lenguaje**: TypeScript
- **Package Manager**: pnpm
- **Deployment**: Netlify (recomendado)

## 📁 Estructura del Proyecto

```
origiinales-web/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # Estilos globales y tema personalizado
│   ├── components/
│   │   ├── ProductButton.vue     # Botón de compra con Snipcart
│   │   └── ProductDetail.vue     # Componente de detalle de producto
│   ├── layouts/
│   │   └── default.vue           # Layout principal con Navbar y Footer
│   ├── pages/
│   │   ├── index.vue             # Página de inicio
│   │   ├── contacto.vue          # Página de contacto
│   │   └── tienda/
│   │       ├── index.vue         # Catálogo de productos
│   │       └── [slug].vue        # Página de detalle de producto
│   └── app.vue                   # Componente raíz
├── public/
│   ├── logo_sin_fondo.png        # Logo de la marca
│   └── robots.txt
├── nuxt.config.ts                # Configuración de Nuxt
├── package.json
└── README.md
```

## 🚀 Instalación y Desarrollo

### Requisitos Previos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd origiinales-web

# Instalar dependencias
pnpm install
```

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
NUXT_PUBLIC_SNIPCART_KEY=tu_clave_publica_de_snipcart
```

> **Nota**: Obtén tu clave de Snipcart en [snipcart.com](https://snipcart.com/)

### Comandos Disponibles

```bash
# Desarrollo local (http://localhost:3000)
pnpm dev

# Compilar para producción
pnpm build

# Generar sitio estático
pnpm generate

# Previsualizar build de producción
pnpm preview
```

## 🎨 Paleta de Colores

El proyecto utiliza una paleta de colores personalizada definida en `app/assets/css/main.css`:

- **Gris Oscuro** (`--color-brand-dark`): `#3C3C3C` - Textos y logo
- **Dorado** (`--color-brand-gold`): `#C4A661` - Detalles y acentos
- **Rosa Suave** (`--color-brand-pink`): `#F9EAEA` - Fondos acuarela
- **Lila Suave** (`--color-brand-lilac`): `#F0EEF8` - Fondos acuarela
- **Menta Suave** (`--color-brand-mint`): `#F3F8F3` - Fondos acuarela

### Tipografía

- **Títulos**: Playfair Display (serif) - Elegante y sofisticado
- **Cuerpo**: Inter (sans-serif) - Limpio y legible

## 🛒 Configuración de Snipcart

El proyecto está configurado para usar Snipcart v3. Para añadir productos:

1. Define los productos en tus páginas usando el componente `ProductButton`
2. Asegúrate de incluir todos los atributos requeridos:
   - `data-item-id`: ID único del producto
   - `data-item-price`: Precio del producto
   - `data-item-name`: Nombre del producto
   - `data-item-url`: URL del producto

Ejemplo:

```vue
<ProductButton
  :id="producto.id"
  :name="producto.name"
  :price="producto.price"
  :url="`/tienda/${producto.slug}`"
/>
```

## 📦 Deployment

### Netlify (Recomendado)

1. Conecta tu repositorio a Netlify
2. Configura las variables de entorno:
   - `NUXT_PUBLIC_SNIPCART_KEY`
3. Build command: `pnpm generate`
4. Publish directory: `.output/public`

### Otras Plataformas

El proyecto puede desplegarse en cualquier plataforma que soporte sitios estáticos (Vercel, Cloudflare Pages, etc.)

## 📝 Licencia

Este proyecto es privado y propietario.

## 🤝 Contacto

Para consultas sobre productos personalizados, visita la [página de contacto](https://tudominio.com/contacto).

---

Hecho con 💛 por Origiinales
