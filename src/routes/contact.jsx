import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm();
  console.log(errors);
  const form = useRef();

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    alert("Correo enviado");
    reset();
  };

  // React hook form
  return (
    <section className="d-flex flex-column flex-lg-row p-4 mx-3">
      <div className="contact-text">
        <h2 className="titles">Ahora o nunca! trabajemos juntos.</h2>
        <p>
          Siempre daré lo mejor de mi! para seguir aprendiendo y así ser un
          aporte para que la relación se extienda por mucho tiempo.
        </p>
      </div>
      <div className="form-area">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="d-flex flex-column mb-3 align-items-center justify-content-center"
        >
          <input
            className="from-control w-100 my-2 p-2 border-1 rounded-3"
            id="floatingInput"
            name="name"
            placeholder="Nombre"
            {...register("name", {
              required: { value: true, message: "El nombre es requerido" },
              minLength: {
                value: 2,
                message: "Nombre debe tener al menos 2 caracteres",
              },
            })}
          />
          {/** mensaje de error */}
          {errors.name && <span>{errors.name.message}</span>}
          <input
            className="from-control w-100 my-2 p-2 border-1 rounded-3"
            name="email"
            placeholder="Correo"
            type="email"
            {...register("email", {
              required: { value: true, message: "Correo es requerido" },
              pattern: {
                value: /^[a-z0-9._%=-]+@[a-z0-9*-]+\.[a-z]{2,4}$/,
                message: "Correo no valido",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <textarea
            className="from-control w-100 my-2 p-2 border-1 rounded-3"
            placeholder="Mensaje"
            name="message"
            {...register("message", {
              required: {
                value: true,
                message: "El mensaje no puede ir vacío",
              },
            })}
          />
          {errors.message && <span>{errors.message.message}</span>}
          <button className="btn btn-danger w-100 my-2 p-2 fw-bold rounded-3">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
