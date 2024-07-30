import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Indicador de carga

  const sendEmail = async (e) => {
    e.preventDefault();

    if (form.current.checkValidity()) {
      setIsLoading(true); // Mostrar indicador de carga
      try {
        const response = await emailjs.sendForm(
          'service_fayk1hj',
          'template_5e9osht',
          form.current,
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
        setIsLoading(false); // Ocultar indicador de carga
      }
    } else {
      setFeedbackMessage('Por favor, completa todos los campos correctamente.');
      setFeedbackColor('text-red-500');
    }
  };
return(
 <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4" noValidate>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id='name'
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id='email'
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Send"
            className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300"
          />
        </div>
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