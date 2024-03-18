const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const mongoose = require('mongoose')
const url = 'mongodb+srv://fragmentzdevelop:5bn7VsTUJrgEsAUY@cluster0.qakdtsc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()
const PORT = process.env.PORT || 5000

// Middleware para analizar JSON
app.use(express.json())

const corsOptions = {
  origin: 'http://localhost:5173', // URL de origen de tu aplicación React
  optionsSuccessStatus: 200 // algunos navegadores (por ejemplo, Chrome) pueden enviar una solicitud de 'preflight' OPTIONS antes de la solicitud POST
}

app.use(cors(corsOptions)) // Habilitar CORS para todas las rutas con opciones personalizadas

// Conexión a MongoDB Atlas
mongoose.connect(url, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})
.then(() => console.log('Conexión a MongoDB Atlas exitosa'))
.catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

// Definir el esquema de los correos electrónicos
const emailSchema = new mongoose.Schema({
  name: String,
  email: String,
  reason: String,
  phone: String,
  message: String
});

const Email = mongoose.model('Email', emailSchema);

// Ruta para recibir el formulario del cliente y guardar en la base de datos
app.post('/receive-form', async (req, res) => {
  const { name, email, reason, phone, message } = req.body;

  try {
    // Guardar los datos del formulario en la base de datos
    const newEmail = new Email({ name, email, reason, phone, message });
    await newEmail.save();

    // Enviar una respuesta al cliente para indicar que los datos se han guardado correctamente
    res.status(200).json({ message: 'Formulario recibido correctamente' });
  } catch (error) {
    console.error('Error al recibir el formulario:', error);
    res.status(500).json({ error: 'Ocurrió un error al procesar el formulario' });
  }
});

// Iniciar el servidor node
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});