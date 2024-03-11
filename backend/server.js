const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware para analizar JSON
app.use(express.json())

const corsOptions = {
  origin: 'http://localhost:5173', // URL de origen de tu aplicación React
  optionsSuccessStatus: 200 // algunos navegadores (por ejemplo, Chrome) pueden enviar una solicitud de 'preflight' OPTIONS antes de la solicitud POST
}

app.use(cors(corsOptions)) // Habilitar CORS para todas las rutas con opciones personalizadas

// Ruta para enviar el correo electrónico
app.post('/send-email', async (req, res) => {
  const { name, email, reason, phone, message } = req.body

  // Configurar el transporter para enviar correo electrónico usando nodemailer
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 465,
    secure: true, // use SSL
    auth: {

    }
  });
  // Configurar el correo electrónico
  let mailOptions = {
    from: 'tuCorreo@gmail.com', // posiblemente no haga falta tener un remitente, o podemos poner acá el email que llenen en el form, pero no estoy seguro ni es necesario
    to: 'fragmentz@dev.com',
    subject: 'Nuevo correo electrónico de cliente',
    text: `
      Has recibido un nuevo correo electrónico de cliente:
      Name: ${name}
      Email: ${email}
      Reason: ${reason}
      Phone: ${phone}
      Message: ${message}
    `
  }

  // Enviar el mail usando el transporter de nodemailer
  try {
    await transporter.sendMail(mailOptions)
    console.log('Correo electrónico enviado con éxito:', mailOptions)
    res.sendStatus(200)
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error)
    res.sendStatus(500)
  }
})

// Iniciar el servidor node
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
