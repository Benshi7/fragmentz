const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const mongoURI = 'mongodb+srv://fragmentzdevelop:5bn7VsTUJrgEsAUY@cluster0.qakdtsc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(mongoURI)
.then(() => console.log('Conexión a MongoDB Atlas exitosa'))
.catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

// Modelo de Mongoose para el formulario de correo electrónico
const emailSchema = new mongoose.Schema({
  name: String,
  email: String,
  reason: String,
  phone: String,
  message: String
});

const Email = mongoose.model('Email', emailSchema); // uso el esquema para crear el modelo

// Ruta para recibir el formulario de correo electrónico y guardar en la base de datos
app.post('/send-email', async (req, res) => {
  const { name, email, reason, phone, message } = req.body;

  try {
    // Guardar los datos del formulario en la base de datos
    const newEmail = new Email({ name, email, reason, phone, message });
    await newEmail.save();

    res.status(200).json({ message: 'Correo electrónico guardado correctamente' });
  } catch (error) {
    console.error('Error al guardar el correo electrónico:', error);
    res.status(500).json({ error: 'Ocurrió un error al guardar el correo electrónico' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});