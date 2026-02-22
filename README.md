## Proyecto

INVENTORY_API

## Descripción

API REST backend para un sistema de gestión de inventario. Proporciona autenticación de usuarios, gestión de productos y manejo de datos maestros.

## Requisitos

- Sistema operativo: Windows, macOS o Linux
- Node.js >= 18
- npm >= 9
- Navegador web moderno (Chrome, Firefox, Edge)

## Tecnologías / versión

- Express.js: 5.2.1
- mongoose: 9.0.2 
- JWT: 9.0.3
- Bcrypt: 6.0.0
- CORS: 2.8.5
- Dotenv: 17.2.3

## Estructura del Proyecto

´´´
src/
├── app.js                   # Configuración de Express
├── server.js                # Punto de entrada principal
├── config/
│   └── database.js          # Conexión a MongoDB
├── controllers/             # Lógica de manejo de requests
│   ├── auth.controller.js   # Login y registro
│   ├── data.controller.js   # Operaciones generales de datos
│   └── product.controller.js # CRUD de productos
├── middlewares/             # Funciones intermedias
│   ├── authMiddleware.js    # Verificación de JWT
│   └── validationLogin.js   # Validación de credenciales
├── repositories/            # Acceso a base de datos
│   ├── auth.repository.js
│   ├── data.repository.js
│   └── product.repository.js
├── routes/                  # Definición de endpoints
│   ├── auth.routes.js       # /api/auth/*
│   ├── data.routes.js       # /api/data/*
│   └── product.routes.js    # /api/products/*
└── services/                # Lógica de negocio
    ├── auth.service.js
    ├── data.service.js
    └── product.service.js
´´´

## Ejecución

```bash
# 1. Clonar repositorio
git clone <tu-repo>
cd nombre_del_proyecto

# 2. Instalar dependencias
npm install

# 3. Crear archivo .env (usar .env.example como referencia)

# 4. Configurar variables de entorno
# Editar .env con tus credenciales de MongoDB y puerto

# 5. Modo desarrollo (con recarga automática)
npm run dev
La API estará disponible en: `http://localhost:3000`
```

## Autor

Edson Espinoza