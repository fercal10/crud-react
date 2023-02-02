import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";

const TablaRow = ({ data, delenteData, setDataToEdict }) => {
  const date = moment(data.id).format("l");
  return (
    <TableRow>
      <TableCell  align="center">{data.nombre}</TableCell>
      <TableCell align="center">{data.cedula}</TableCell>
      <TableCell align="center">{data.direccion}</TableCell>
      <TableCell align="center">{data.telefono}</TableCell>
      <TableCell align="center">{date}</TableCell>
      <TableCell align="center">{data.salario}</TableCell>
      <TableCell align="center">{data.cargo}</TableCell>
      <TableCell align="center">{data.profesion}</TableCell>
      <TableCell align="center">
        <Button
          color="success"
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={() => setDataToEdict(data)}
        />
        <Button
          startIcon={<DeleteIcon />}
          color="error"
          variant="outlined"
          onClick={() => delenteData(data.id)}
        />
      </TableCell>
    </TableRow>
  );
};

export default TablaRow;
