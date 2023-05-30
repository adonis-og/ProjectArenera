import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function RegistroVehiculoEyS() {


    const [vehiculoId, setVehiculoId] = useState('');
    const [placaVehiculo, setPlacaVehiculo] = useState('');
    const [alerta, setAlerta] = useState('');
    
    const handleEntrada = () => {
        // Realizar solicitud POST al backend para registrar la entrada del vehículo
        axios
        .post(`http://localhost:7676/api/registrareys/entrada/${vehiculoId}`)
        .then((response) => {
            // Manejar la respuesta del backend
            console.log(response.data);
            // Realizar acciones adicionales si es necesario
        })
        .catch((error) => {
            // Manejar errores de la solicitud
            console.error(error);
        });
    };

    const handleSalida = () => {
        // Realizar solicitud POST al backend para registrar la salida del vehículo
        axios
        .post(`http://localhost:7676/api/registrareys/salida/${vehiculoId}`)
        .then((response) => {
            // Manejar la respuesta del backend
            console.log(response.data);
            // Realizar acciones adicionales si es necesario
        })
        .catch((error) => {
            // Manejar errores de la solicitud
            console.error(error);
        });
    };

    const handleVehiculoIdChange = (event) => {
        setVehiculoId(event.target.value);
    };

    const handleAlertClose = () => {
        setAlerta('');
    }

    // OBTENER VEHICULO POR ID
    const handleObtenerPlaca = () =>{
        axios.get(`http://localhost:7676/api/vehiculos/car/${vehiculoId}`)
        .then((response) => {
            console.log(response.data);
            setPlacaVehiculo(response.data.placa);
        }).catch((error) => {
            console.error(error);
            setPlacaVehiculo('');
        })
    }

    return (
        <ThemeProvider theme={createTheme()}>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <TextField
            label="ID del Vehículo"
            value={vehiculoId}
            onChange={handleVehiculoIdChange}
            variant="outlined"
            margin="normal"
            fullWidth
        />
        <Button variant="contained" onClick={handleObtenerPlaca}>
            Obtener Placa
        </Button>

        {placaVehiculo && <p>Placa del vehículo: {placaVehiculo}</p>}
        
        <Button variant="contained" onClick={handleEntrada}>
            Registrar Entrada
        </Button>

        <Button variant="contained" onClick={handleSalida}>
            Registrar Salida
        </Button>
        </div>
        {
            alerta && (
                <div>
                    <p>{alerta}</p>
                    <Button variant="contained" onClick={handleAlertClose}>
                        Cerrar
                    </Button>
                </div>
            )
        }

        </ThemeProvider>
    );
    }

export default RegistroVehiculoEyS;
