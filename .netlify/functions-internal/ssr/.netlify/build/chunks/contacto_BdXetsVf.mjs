/* empty css                           */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_CP53hIQR.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_ClhU98ID.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);
    try {
      const result = await emailjs.send("service_9br99t5", "template_5e9osht", formData, "ibPFGXKVUvzW9Qb6F");
      if (result.status !== 200) {
        throw new Error("Error al enviar el formulario");
      }
      setSuccess("Mensaje enviado con éxito");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error2) {
      setError(error2.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700", children: "Nombre:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "name",
          name: "name",
          value: formData.name,
          onChange: handleChange,
          required: true,
          className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          id: "email",
          name: "email",
          value: formData.email,
          onChange: handleChange,
          required: true,
          className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700", children: "Mensaje:" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "message",
          name: "message",
          value: formData.message,
          onChange: handleChange,
          required: true,
          className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: isSubmitting,
        className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        children: isSubmitting ? "Enviando..." : "Enviar"
      }
    ) }),
    error && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm", children: error }),
    success && /* @__PURE__ */ jsx("p", { className: "text-green-500 text-sm", children: success })
  ] });
};

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Arena Voleibol club - Aprende y crece jugando voleibol de playa junto a nosotros", "description": "Descubre y aprende voleibol de playa en Lima Per\xFA" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="min-h-screen flex items-stretch text-white "> <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style="background-image: url('/public/atardecer.jpg');"> <div class="absolute bg-black opacity-60 inset-0 z-0"></div> <div class="w-full px-24 z-10"> <h1 class="text-5xl font-bold text-left tracking-wide">Maximiza tu potencial</h1> <p class="text-3xl my-4">entrena voleibol de playa.</p> </div> </div> <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style="background-color: #rgb(242, 15, 15)"> <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style="background-image: url);"> <div class="absolute bg-black opacity-60 inset-0 z-0"></div> </div> <div class="w-96 py-6 z-20"> <p class="text-gray-100 font-bold text-xl">
Contactanos
</p> ${renderComponent($$result2, "ContactForm", ContactForm, {})} </div> </div> </section> ` })} <!-- component -->`;
}, "C:/Users/leovo/OneDrive/Documentos/parte3/eslan.web/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/leovo/OneDrive/Documentos/parte3/eslan.web/src/pages/contacto.astro";
const $$url = "/contacto";

export { $$Contacto as default, $$file as file, $$url as url };
