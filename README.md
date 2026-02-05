# Inventory API

API REST backend para un sistema de gestión de inventario. Proporciona autenticación de usuarios, gestión de productos y manejo de datos general del inventario.

## Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web para crear la API
- **MongoDB** - Base de datos NoSQL (con Mongoose como ODM)
- **JWT** - Autenticación mediante tokens seguros
- **Bcrypt** - Encriptación de contraseñas
- **CORS** - Gestión de solicitudes entre dominios
- **Dotenv** - Gestión de variables de entorno

## 📁 Estructura del Proyecto

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

## Instalación

```bash
# 1. Clonar repositorio
git clone <tu-repo>
cd inventory_api

# 2. Instalar dependencias
npm install

# 3. Crear archivo .env (usar .env.example como referencia)
cp .env.example .env

# 4. Configurar variables de entorno
# Editar .env con tus credenciales de MongoDB y puerto
```

## Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/inventory
JWT_SECRET=tu_secreto_aqui
JWT_EXPIRES_IN=5m
```

## Ejecución

```bash
# Modo desarrollo (con recarga automática)
npm run dev

# Modo producción
node src/server.js
```

La API estará disponible en: `http://localhost:3000`

## Seguridad

- **Autenticación:** JWT (JSON Web Tokens)
- **Contraseñas:** Encriptadas con Bcrypt
- **CORS:** Configurado para controlar acceso desde clientes
- **Variables sensibles:** Almacenadas en `.env` (nunca en el repositorio)