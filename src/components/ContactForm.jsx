import React, {useRef} from 'react'
import Emailjs from "@emailjs/browser"


export const ContacForm = () => {

const refForm = useRef();
const handleSubmit = (event) => {
    event.preventDefault();
const serviceId = "service_9br99t5";
const templateId = "template_5e9osht";
// 3 parametro
const publicKey = "ibPFGXKVUvzW9Qb6F";
Emailjs.sendForm(serviceId, templateId, refForm.current, publicKey )
.then((result) => console.log("ok") )
.catch(error => console.log(error))
}

  return (
    <div class="h-screen flex">
            <div class=" login hidden lg:flex w-full lg:w-1/2
            justify-around  items-center">
              <div 
                    class=" 
                    login
                    bg-white 
                    opacity-20 
                    inset-0 
                    z-0"
                    >
  
                    </div>
             
            </div>
            <div class="  flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8" >
              <div class="w-full px-8 md:px-32 lg:px-24">
              <form ref={refForm} action='' onSubmit={handleSubmit} class="bg-white rounded-md shadow-2xl p-5">
                <h1 class="text-gray-800 font-bold text-2xl mb-1 text-center">Contactanos</h1>
                <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                  
                    <input id="name" class=" pl-2 w-full outline-none border-none" type="text" name="name" placeholder="Nombre y apellido" required />
                  </div>
                <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                  
                  <input id="email" class=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" required />
                </div>
                <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                 
                  <textarea class="pl-2 w-full outline-none border-none" name="mensaje" id="mensaje" placeholder="Escribe tu consulta" required></textarea>
                  
                </div>
                <button type="submit" class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Enviar</button>
                
              </form>
              </div>
              
            </div>
        </div>
  )
}
export default ContacForm;

