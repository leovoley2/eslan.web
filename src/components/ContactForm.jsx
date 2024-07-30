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
          'service_9br99t5',
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

  // ... Resto del código del formulario ...
};

export default ContactUs;

