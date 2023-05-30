// import { Link } from "react-router-dom";

// import Registro from "../forms/Registro";
// import Sidebar from "./layout/Sidebar";
import Appbar from "./layout/Appbar";
import Navbar from "./layout/Navbar";

function Dashboard(){

    return(
        <div className="dashboard">
            <Appbar/>
            <div className="flex">
                <Navbar/>
                <div className="content">
                </div>
            </div>
            
        </div>
    );
}

export default Dashboard;