import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const formRef = useRef();
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (formRef.current.checkValidity()) {
      setIsLoading(true);
      try {
        const response = await emailjs.sendForm(
          'service_fayk1hj',
          'template_5e9osht',
          formRef.current,
          'ATNa9hCpUCnemBxjE'
        );
        console.log('SUCCESS!', response.text);
        setFeedbackMessage('¡Mensaje enviado con éxito!');
        setFeedbackColor('text-green-500');
      } catch (error) {
        console.error('FAILED...', error);
        setFeedbackMessage(`Error al enviar el mensaje: ${error.text}`);
        setFeedbackColor('text-red-500');
      } finally {
        setIsLoading(false);
      }
    } else {
      setFeedbackMessage('Por favor, completa todos los campos correctamente.');
      setFeedbackColor('text-red-500');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-orange-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contactanos</h2>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <fieldset>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Escriba su nombre"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </fieldset>
        <fieldset>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Ejemplo@hotmail.com"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </fieldset>
        <fieldset>
          <label className="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea
            placeholder="Escriba su consulta"
            name="message"
            id='message'
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </fieldset>
        <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300">
          Enviar
        </button>
      </form>
      {feedbackMessage && (
        <div className={`mt-4 text-center text-sm ${feedbackColor}`}>
          {feedbackMessage}
        </div>
      )}
    </div>
  );
};

export default ContactUs;