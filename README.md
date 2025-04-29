# GeoSpain

GeoSpain es una aplicación web que permite a los usuarios buscar ubicaciones dentro de España, verlas en un mapa interactivo y obtener información meteorológica actual para la ubicación seleccionada.

## Características

*   **Búsqueda de Ubicaciones:** Introduce el nombre de una ubicación para buscar dentro de España.
*   **Mapa Interactivo:** Muestra la ubicación buscada usando Leaflet, centrado y delimitado aproximadamente a España.
*   **Información Meteorológica:** Muestra detalles del tiempo actual (temperatura, condiciones, velocidad del viento, dirección del viento) para la ubicación buscada utilizando la API de Open-Meteo.
*   **Diseño Responsivo:** Construido con Tailwind CSS para adaptabilidad a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

*   **Frontend:** React, TypeScript
*   **Herramienta de Construcción:** Vite
*   **Mapas:** Leaflet, React-Leaflet
*   **Estilos:** Tailwind CSS
*   **Gestión de Estado:** React Context API
*   **Linting:** ESLint
*   **APIs:**
    *   Nominatim (OpenStreetMap) para geocodificación (búsqueda de ubicación a coordenadas)
    *   Open-Meteo para datos meteorológicos

## Cómo Empezar

### Prerrequisitos

*   Node.js y npm (o yarn/pnpm) instalados.

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone <url-del-repositorio>
    cd GeoSpain
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```

### Ejecutar el Servidor de Desarrollo

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite, típicamente disponible en `http://localhost:5173`.

## Scripts Disponibles

*   `npm run dev`: Inicia el servidor de desarrollo.
*   `npm run build`: Construye la aplicación para producción.
*   `npm run lint`: Analiza el código base usando ESLint.
*   `npm run preview`: Sirve la compilación de producción localmente para previsualización.

## Estructura del Proyecto

```
/
├── public/             # Recursos estáticos
├── src/                # Archivos fuente
│   ├── components/     # Componentes de React (Body, Footer, Header, Map)
│   ├── context/        # Contexto de React (SearchContext)
│   ├── styles/         # Estilos CSS (index.css)
│   ├── App.tsx         # Componente principal de la aplicación
│   ├── homelayout.tsx  # Estructura principal del layout
│   ├── main.tsx        # Punto de entrada de la aplicación
│   └── vite-env.d.ts   # Tipos de entorno de Vite
├── .gitignore          # Reglas de Git ignore
├── eslint.config.js    # Configuración de ESLint
├── index.html          # Archivo HTML principal
├── package.json        # Metadatos y dependencias del proyecto
├── README.md           # Este archivo
├── tsconfig.json       # Configuración base de TypeScript
├── tsconfig.app.json   # Configuración de TypeScript para la aplicación
├── tsconfig.node.json  # Configuración de TypeScript para el entorno Node.js (ej., vite.config.ts)
└── vite.config.ts      # Configuración de Vite
```

## Autor

*   Erik Manuel Saldaña Diaz
