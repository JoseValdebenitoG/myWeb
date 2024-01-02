import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    // logica para enviar el mail
    console.log(data);
  });

  return (
    <section>
      <div>
        <h1>Ahora o nunca! trabajemos juntos.</h1>
        <p>
          Siempre daré lo mejor de mi! para seguir aprendiendo y así ser un
          aporte para que la relación se extienda por mucho tiempo.
        </p>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input
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
            name="email"
            placeholder="Correo"
            type="email"
            {...register("email", {
              required: { value: true, message: "Correo es requerido" },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <textarea
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
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
