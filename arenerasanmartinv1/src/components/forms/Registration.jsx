import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

function Registration() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Realizar solicitud POST al backend
    axios
      .post('http://localhost:7676/api/usuario/save', {
        usuarionombre: data.get('usuarionombre'),
        usuarioapellido: data.get('usuarioapellido'),
        usuariodni: data.get('usuariodni'),
        usuariotelefono: data.get('usuariotelefono'),
        correo: data.get('correo'),
        clave: data.get('clave'),
      })
      .then((response) => {
        // Manejar la respuesta del backend
        console.log(response.data);
        if (response.data.mensaje === 'Ingreso Fallido') {
            alert('Ocurrio un error con el registro')
        } else {
          alert('Se Registro Correctamente!');

        }
      })
      .catch((error) => {
        // Manejar errores de la solicitud
        console.error(error);
      });
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registro
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="usuarionombre"
                label="Nombre"
                name="usuarionombre"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="usuarioapellido"
                label="Apellido"
                name="usuarioapellido"
                autoComplete="family-name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="usuariodni"
                label="DNI"
                name="usuariodni"
                autoComplete="off"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="usuariotelefono"
                label="Teléfono"
                name="usuariotelefono"
                autoComplete="tel"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="correo"
                label="Correo Electrónico"
                name="correo"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="clave"
                label="Contraseña"
                type="password"
                id="clave"
                autoComplete="new-password"
              />

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Registrarse
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    ¿Ya tienes una cuenta? Inicia sesión
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

export default Registration;
