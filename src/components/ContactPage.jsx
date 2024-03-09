import React, { useState } from 'react'
import { Input } from '@nextui-org/react'
import { Textarea } from '@nextui-org/react'
import { Spotlight } from '../ui/Spotlight'
import ContactText from './ContactText'
import { TypewriterEffectSmooth } from '../ui/typewriter-effect'
import axios from 'axios'

const words = [
  {
    text: "💜 Hello."
  },
  {
    text: "Let's",
  },
  {
    text: "talk.",
    className:"text-christalle-800 dark:text-christalle-800"
  }]

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-email', formData);
      alert('Correo electrónico enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      alert('Hubo un error al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="flex justify-center items-center px-32 max-md:px-5 md:px-64">
      <div className="w-full px-12 max-w-[897px] md:max-w-full">
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="order-2 md:order-1 flex flex-col md:w-4/12 sm:ml-32">
            <form className="flex flex-col grow text-base font-semibold tracking-normal text-white md:mt-10" onSubmit={handleSubmit}>
              <div className="text-2xl font-bold tracking-wide">
              <TypewriterEffectSmooth words={words} />
              </div>
              <Input className="my-4" label="Name" type="text" name="name" value={formData.name} onChange={handleChange} />
              <Input className="my-4" label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
              <Input className="my-4" label="Reason" type="text" name="reason" value={formData.reason} onChange={handleChange} />
              <Input className="my-4" label="Phone" type="number" name="phone" value={formData.phone} onChange={handleChange} />
              <Textarea className="my-4" label="Message" name="message" value={formData.message} onChange={handleChange} />
              <button
                type="submit"
                className="z-50 justify-center self-end px-2 py-2 mt-2 text-base tracking-normal text-center text-primary whitespace-nowrap rounded-lg bg-slate-200 hover:text-black hover:scale-110 transition"
                tabIndex="0"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="order-1 md:order-2 flex flex-col md:w-6/12">
            <ContactText />
            <Spotlight className="top-0 opacity-70" fill="#AB46B4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage
