import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function VerUsuarios(){

    const [usuario, setUsuario] = useState({
        usuarionombre: "",
        usuarioapellido: "",
        usuariodni: "",
        usuariotelefono: "",
        correo: ""
    })

    const {usuarioid} = useParams();

    useEffect( () =>{
        cargarUsuario()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ ])

    const cargarUsuario = async () => {
        const result = await axios.get(`http://localhost:7676/api/usuario/user/${usuarioid}`)
        setUsuario(result.data)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2>Detalles de Usuario</h2>
                    <div className="card">
                        <div className="card-header">
                            Detalles del ID Usuario: 
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Nombre: </b>
                                    {usuario.usuarionombre}
                                </li>

                                <li className="list-group-item">
                                    <b>Apellido: </b>
                                    {usuario.usuarioapellido}
                                </li>

                                <li className="list-group-item">
                                    <b>DNI: </b>
                                    {usuario.usuariodni}
                                </li>

                                <li className="list-group-item">
                                    <b>Telefono: </b>
                                    {usuario.usuariotelefono}
                                </li>

                                <li className="list-group-item">
                                    <b>Correo: </b>
                                    {usuario.correo}
                                </li>
                            </ul>
                        </div>
                    </div>
                <Link className="btn btn-primary my-2" to={"/listarusuario"}>Regresar</Link>
                </div>
            </div>
        </div>
    );
}