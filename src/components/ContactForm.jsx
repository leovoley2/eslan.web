import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const EmailFrom = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    // Los servicios de Email js
    const serviceId = 'service_fayk1hj';
    const templateId = 'template_5e9osht';
    const publicKey = 'ATNa9hCpUCnemBxjE';

    // creando un nuevo objeto para los contenedores
    const templateParams = {
      user_name: name,
      user_email: email,
      to_name: 'web wizard',
      message: message,
    };

    // envio de email usando emailjs
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email enviado correctamente', response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error al enviar el email', error);
    });

  }


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-orange-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contactanos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Escriba su nombre"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          </label>
          </div>
          <div>
          <label className="block text-sm font-medium text-gray-700">Email
          <input
            type="email"
           value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ejemplo@hotmail.com"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          </label>
          </div>
          <div>
          <label className="block text-sm font-medium text-gray-700">Mensaje
          <textarea
            placeholder="Escriba su consulta"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        </div>
        <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300">
          Enviar
        </button>
      </form>
    </div>
  );

};
export default EmailFrom;