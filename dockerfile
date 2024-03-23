# Establece la imagen base que utilizarás para tu contenedor
FROM node:20.11.1

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json del front-end
COPY package*.json ./

# Instala las dependencias del front-end
RUN npm install

# Copia el resto del código fuente del front-end
COPY . .

# Construye la aplicación del front-end
RUN npm run build

# Cambia el directorio de trabajo para el back-end
WORKDIR /app/backend

# Copia el package.json y el package-lock.json del back-end
COPY backend/package*.json ./

# Instala las dependencias del back-end
RUN npm install

# Copia el resto del código fuente del back-end
COPY backend/ .

# Expone el puerto en el que va a estar escuchando el servidor Node.js
EXPOSE 3001

# Comando para iniciar tanto el front-end como el back-end
CMD ["npm", "run", "start"]
