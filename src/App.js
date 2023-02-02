import "./App.css";
import CrudApi from "./componentes/CrudApi";
import "moment/locale/es";
//Para Activar el simulador de la base de datos
///npx  json - server--watch datos.json--port 5000
function App() {
  return (
    <div className="App">
      <CrudApi />
      <br />
    </div>
  );
}

export default App;
