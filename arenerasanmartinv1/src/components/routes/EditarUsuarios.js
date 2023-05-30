import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditarUsuarios(){

    let navigate = useNavigate()

    const {usuarioid} = useParams()

    const [usuario, setUsuario] = useState({
        usuarionombre:"",
        usuarioapellido: "",
        usuariotelefono: "",
        correo: ""        
    })

    const{usuarionombre, usuarioapellido, usuariotelefono, correo} = usuario

    const cambioEntrada = (e) => {
        setUsuario( {...usuario,[e.target.name]:e.target.value } )
    }

    useEffect( () =>{
        cargarUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:7676/api/usuario/user/${usuarioid}`, usuario);
        navigate("/listarusuario")

    }

    const cargarUser = async () =>{
        const result = await axios.get(`http://localhost:7676/api/usuario/user/${usuarioid}`)
        setUsuario(result.data)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Editar Usuario</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                        Nombre
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Nombre..."
                            name="usuarionombre"
                            value={usuarionombre}
                            onChange={(e)=>cambioEntrada(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                        Apellido
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Apellido..."
                            name="usuarioapellido"
                            value={usuarioapellido}
                            onChange={(e)=>cambioEntrada(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                        Telefono
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Telefono..."
                            name="usuariotelefono"
                            value={usuariotelefono}
                            onChange={(e)=>cambioEntrada(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                        Correo
                        </label>
                        <input
                            type={"email"}
                            className="form-control"
                            placeholder="Correo Electronico..."
                            name="correo"
                            value={correo}
                            onChange={(e)=>cambioEntrada(e)}
                        />
                    </div>

                    <button type="submit" className="btn btn-outline-primary">Actualizar</button>
                </form>
                </div>
            </div>
        </div>
    );
}