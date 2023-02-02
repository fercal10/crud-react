import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablaRow from "./TablaRow";
import Typography from "@mui/material/Typography";
import TablePagination from "@mui/material/TablePagination";
import { Box, TextField } from "@mui/material";

export default function Tablas({ data, delenteData, setDataToEdict }) {
  const [filter, setfilter] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { maxWidth: 1000 },
        }}
      >
        <Typography variant="h3" gutterBottom component="div">
          Tabla de Datos
        </Typography>
        <TextField
          sx={{ mb: 2, width: "60ch" }}
          name="Filtro"
          type="text"
          label="Filtro"
          value={filter}
          onChange={(e) => setfilter(e.target.value)}
        />
        <TableContainer
          sx={{ maxWidth: "1200px", maxHeight: "800px", bgcolor: "#F3F5EF" }}
          component={Paper}
          elevation={6}
        >
          <Table
            sx={{ maxWidth: "1200px", maxHeight: "600px" }}
            align="center"
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Nombre y Apellido</TableCell>
                <TableCell>Cedula</TableCell>
                <TableCell>Direccion</TableCell>
                <TableCell>Telefono</TableCell>
                <TableCell>Fecha de Inicio</TableCell>
                <TableCell>Salario/S</TableCell>
                <TableCell>Cargo</TableCell>
                <TableCell>Profesion</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody padding={"none"}>
              {data.length > 0 ? (
                data
                  .filter((user) => {
                    if (!data) return true;
                    return (
                      user.nombre
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      user.cedula.includes(filter.toLowerCase())
                    );
                  })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((el) => (
                    <TablaRow
                      key={el.cedula}
                      data={el}
                      delenteData={delenteData}
                      setDataToEdict={setDataToEdict}
                    />
                  ))
              ) : (
                <TableRow>
                  <TableCell align="center">sin datos</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );
}
