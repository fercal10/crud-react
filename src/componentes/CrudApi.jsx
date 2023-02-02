import React, { useEffect, useState } from "react";
import Form from "./Form";
import { helperHttp } from "../helpers/helperHttp";
import Tablas from "./Tablas";
import { Grid } from "@mui/material";
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

function CrudApi() {
  const [db, setDb] = useState([]);
  const [dataToEdict, setDataToEdict] = useState(formDefault);
  //crear un Servidor de respuesta con los datos
 ///npx  json - server--watch datos.json--port 5000 
  let api = helperHttp();
  let url = "http://localhost:5000/nombres";

  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
      } else {
        setDb(null);
      }
    });
  }, []);

  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        ///Moestar error
      }
    });
  };
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
      }
    });
    setDataToEdict(null);
  };
  const delenteData = (id) => {
    let endpoint = `${url}/${id}`;
    let options = {
      headers: { "content-type": "application/json" },
    };
    api.del(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
      } else {
        ///crear componente de error
      }
    });
  };
  return (
    <Grid container spacing={4} p={2}>
      <Grid item md={12} xl={3}>
        <Form
          createData={createData}
          updateData={updateData}
          dataToEdict={dataToEdict}
          setDataToEdict={setDataToEdict}
        />
      </Grid>
      <Grid item md={12} xl={8}>
        <Tablas
          data={db}
          delenteData={delenteData}
          setDataToEdict={setDataToEdict}
        />
      </Grid>
    </Grid>
  );
}

export default CrudApi;
