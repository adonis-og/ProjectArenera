import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ListaUsuarios from "./components/routes/ListaUsuarios";
import ListaVehiculos from "./components/routes/ListaVehiculos";
import EditarUsuarios from "./components/routes/EditarUsuarios";
import VerUsuarios from "./components/routes/VerUsuarios";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import Registration from "./components/forms/Registration";

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar/> */}
      <div>
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path="/registro" element={ <Registration/> } />
          <Route path="/home/*" element={ <Dashboard/> }/>
          <Route path="/addusuario" element={ <Registration/> } />
          <Route path="/listarusuario" element={ <ListaUsuarios/> } />
          <Route path="/listarvehiculo" element={ <ListaVehiculos/> } />
          <Route path="/editaruser/:usuarioid" element={ <EditarUsuarios/> } />
          <Route path="/verusuario/:usuarioid" element={ <VerUsuarios/> } />     
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
