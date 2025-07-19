
# 🧾 Sistema de Gestión de Inventario - Actividad #8

Aplicación web fullstack desarrollada para gestionar productos e insumos de una empresa. Incluye funciones de autenticación, CRUD, control de stock y diseño responsive, implementando el stack MERN (MongoDB, Express, React, Node.js).

---

## 👩‍💻 Desarrollado por

**Candy Fernanda Rengifo Rengifo**  
Carrera: Tecnología de la Información  
Universidad Técnica de Manabí – Quinto “A”

---

## 📌 Funcionalidades principales

- ✅ Autenticación de usuarios (login y registro con JWT)
- ✅ CRUD completo de productos
- ✅ Gestión de categorías e historial de movimientos
- ✅ Interfaz responsiva para escritorio y móviles
- ✅ Protección de rutas para usuarios autenticados
- ✅ Diseño modular (frontend/backend separados)

---

## 🛠️ Tecnologías utilizadas

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT para autenticación
- Nodemon (modo desarrollo)

### Frontend
- React.js
- Axios (comunicación con API REST)
- Tailwind CSS (opcional)
- React Router DOM

### Herramientas de apoyo
- Postman (pruebas API)
- dbdiagram.io (modelo ER)
- Visual Studio Code
- Git + GitHub

---

## 🗃️ Estructura del proyecto

```
inventario-app/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── public/
│
├── db/
│   └── modelo-ER.dbdiagram
├── docs/
│   └── InformeActividad8.pdf
└── README.md
```

---

## 🧪 Cómo ejecutar el sistema localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/inventario-app.git
cd inventario-app
```

### 2. Configurar el Backend

```bash
cd backend
npm install
```

Crea un archivo `.env` con el siguiente contenido:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Inicia el servidor:

```bash
npm run dev
```

### 3. Configurar el Frontend

```bash
cd ../frontend
npm install
npm start
```

---

## 🔐 Rutas protegidas

- Algunas rutas de productos y usuarios están protegidas con middleware JWT.
- Debes iniciar sesión para acceder a recursos protegidos.

---

## 📷 Capturas del sistema

| Página | Imagen |
|--------|--------|
| Login | ![Login](docs/captura-login.png) |
| Dashboard | ![Dashboard](docs/captura-dashboard.png) |
| Productos | ![Productos](docs/captura-productos.png) |
| Postman | ![Postman](docs/postman-tests.png) |

(Agrega aquí tus propias capturas en la carpeta `docs/`)

---

## 📎 Enlaces

- 📁 [Enlace a carpeta Drive con archivos](https://drive.google.com/...)
- 🌐 [Repositorio GitHub](https://github.com/usuario/inventario-app)
- 📄 [Informe PDF](docs/InformeActividad8.pdf)

---

## 📚 Referencias

- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Postman](https://www.postman.com/)
- [W3Schools](https://www.w3schools.com/)

---

## ✅ Estado del proyecto

✔️ Entregado y probado satisfactoriamente para la Actividad #8.  
Incluye documentación, capturas, estructura modular y guía de instalación.

---
