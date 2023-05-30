import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

function RegistrationVehiculo() {

    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [color, setColor] = useState('');


    const handleGuardarVehiculo = (event) => {
        event.preventDefault();
        const vehiculo = {
        placa: placa,
        modelo: modelo,
        color: color,
        };

        axios
        .post('http://localhost:7676/api/vehiculos/save', vehiculo)
        .then((response) => {
            console.log(response.data);
            // Realizar acciones adicionales si es necesario

            alert('Se registró el vehículo correctamente.');

            // Redireccionar al listado de vehículos en el dashboard
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const handlePlacaChange = (event) => {
        setPlaca(event.target.value);
    };

    const handleModeloChange = (event) => {
        setModelo(event.target.value);
    };

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <ThemeProvider theme={createTheme()}>
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LocalParkingIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Registro de Vehículo
                </Typography>
                <Box component="form" noValidate onSubmit={handleGuardarVehiculo} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="placa"
                    label="Placa"
                    name="placa"
                    autoComplete="off"
                    autoFocus
                    value={placa}
                    onChange={handlePlacaChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="modelo"
                    label="Modelo"
                    name="modelo"
                    autoComplete="off"
                    value={modelo}
                    onChange={handleModeloChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="color"
                    label="Color"
                    name="color"
                    autoComplete="off"
                    value={color}
                    onChange={handleColorChange}
                />

                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Registrar Vehículo
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                    <Link href="/dashboard/vehiculos" variant="body2">
                        Ver lista de vehículos
                    </Link>
                    </Grid>
                </Grid>
                </Box>
            </Box>
            </Grid>
        </Grid>
        </ThemeProvider>
    );
    }

export default RegistrationVehiculo;
