import nodemailer from 'nodemailer';

export async function POST({ request }) {
  const data = await request.json();
  const { name, email, message } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: import.meta.env.EMAIL,
      pass: import.meta.env.EMAIL_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: import.meta.env.EMAIL,
      subject: `Nuevo mensaje de ${name}`,
      text: message
    });

    return new Response(JSON.stringify({ message: 'Email enviado' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al enviar email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}