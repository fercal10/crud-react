import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { InputAdornment } from "@mui/material";

const formDefault = {
  id: null,
  nombre: "",
  salario: "",
  cedula: "",
  cargo: "",
  direccion: "",
  telefono: "",
  profesion: "",
};
export default function Form({
  createData,
  updateData,
  dataToEdict,
  setDataToEdict,
}) {
  const [form, setForm] = useState(formDefault);

  useEffect(() => {
    if (dataToEdict) {
      setForm(dataToEdict);
    } else {
      handleReset();
    }
  }, [dataToEdict]);

  //se usa name en vez de id , es importante
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.direccion || !form.cedula || !form.telefono) {
      alert("datos incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = () => {
    setForm(formDefault);
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& > :not(style)": { width: "40ch", maxWidth: 600, m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      {dataToEdict != null ? (
        <Typography variant="h3" gutterBottom>
          Editar
        </Typography>
      ) : (
        <Typography variant="h3" gutterBottom>
          Agregar
        </Typography>
      )}
      <TextField
        name="nombre"
        type="text"
        label="Nombre y Apellido"
        onChange={handleChange}
        value={form.nombre}
      />
      <TextField
        name="cedula"
        type="number"
        label="Cedula"
        onChange={handleChange}
        value={form.cedula}
        InputProps={{
          startAdornment: <InputAdornment position="start">V-</InputAdornment>,
        }}
      />
      <TextField
        name="direccion"
        type="text"
        label="Direccion"
        onChange={handleChange}
        value={form.direccion}
      />
      <TextField
        name="telefono"
        type="text"
        label="Telfonno"
        onChange={handleChange}
        value={form.telefono}
      />
      <TextField
        name="salario"
        type="number"
        label="Salario"
        onChange={handleChange}
        value={form.salario}
      />

      <TextField
        name="cargo"
        type="text"
        label="Cargo"
        onChange={handleChange}
        value={form.cargo}
      />
      <TextField
        name="profesion"
        type="text"
        label="Profesion"
        onChange={handleChange}
        value={form.profesion}
      />
      <Button
        onClick={handleReset}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
}
