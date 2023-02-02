import React from "react";
import { useForm } from "../helpers/useForm";

const ContactForm = () => {
  const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
  };
  const validationsForm = (form) => {
    let errors={};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    
    if(!form.name.trim()){
      errors.name = "El Campo Nombre es Requerido";
    }else{ if (!regexName.test(form.name.trim())) {
        errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
      }}
      return errors
    };

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Formulario de contacto </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu Nombre"
          value={form.name}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu Email"
          value={form.email}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Escribe tu subject"
          value={form.subject}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus Comentarios"
          value={form.comments}
          onBlur={handleBlur}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
};

export default ContactForm;
