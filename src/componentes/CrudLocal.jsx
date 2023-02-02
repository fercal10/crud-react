import React from "react";
import Form from "./Form";
import Container from "@mui/material/Container";
import Tablas from "./Tablas";
import { useState } from "react";
import Stack from '@mui/material/Stack';

const dato = [ {
  id: 1,
  nombre: "Fernando",
  apellido: "Calderon",
},
{
  id: 2,
  nombre: "Mary",
  apellido: "Diaz",
},
{
  id: 3,
  nombre: "Leonardo",
  apellido: "Altuve",
},];

function CrudLocal() {
  const [db, setDb] = useState(dato);
  const [dataToEdict, setDataToEdict] = useState(null);

  const createData = (data) => {
    data.id = Date.now();

    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
    setDataToEdict(null);
  };
  const delenteData = (id) => {
    let newData = db.filter((el) => el.id !== id);
    setDb(newData);
  };
  return (
    <Container maxWidth="md">
      <Stack spacing={2}>
        <Form
          createData={createData}
          updateData={updateData}
          dataToEdict={dataToEdict}
          setDataToEdict={setDataToEdict}
        />
        <Tablas
          data={db}
          delenteData={delenteData}
          setDataToEdict={setDataToEdict}
        />
      </Stack>
    </Container>
  );
}

export default CrudLocal;
