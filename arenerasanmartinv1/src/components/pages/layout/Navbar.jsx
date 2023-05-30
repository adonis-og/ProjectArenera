import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ContactsIcon from '@mui/icons-material/Contacts';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListaUsuarios from '../../routes/ListaUsuarios';
import Registration from '../../forms/Registration';
import ListaVehiculos from '../../routes/ListaVehiculos'
import RegistroVehiculoEyS from '../../forms/RegistroVehiculoEyS';
import RegistrationVehiculo from '../../forms/RegistrationVehiculo';

export default function Navbar() {

  const [open, setOpen] = React.useState(true);
  const [selectOption, setSelectOption] = React.useState(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOptionClick = (option) => {
    setSelectOption(option);
  };

  return (
    <div style={{display: 'flex'}}>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Lista de Opciones
        </ListSubheader>
      }
    >
        {/* --- > GESTION VEHICULOS < ---*/}
      <ListItemButton  onClick={handleClick}>
        <ListItemIcon>
          <AirportShuttleIcon />
        </ListItemIcon>
        <ListItemText primary="Vehiculos" />
        {open ? <ExpandLess/> : <ExpandMore/>}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton 
            sx={{ pl: 4 }}
            onClick={ () => handleOptionClick('listarVehiculos') }
            >
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Listar vehiculos" />
          </ListItemButton>
        </List>

        <List component="div" disablePadding>
          <ListItemButton 
            sx={{ pl: 4 }}
            onClick={ () => handleOptionClick('registrarVehiculos') }
            >
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Agregar Vehiculo" />
          </ListItemButton>
        </List>

        <List component="div" disablePadding>
          <ListItemButton 
            sx={{ pl: 4 }}
            onClick={ () => handleOptionClick('eysVehiculos') }
            >
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Registrar Entrada Y Salida" />
          </ListItemButton>
        </List>
      </Collapse>

        {/* --- > GESTION USUARIOS < ---*/}
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton 
            sx={{ pl: 4 }}
            onClick={ () => handleOptionClick('listarUsuarios') }
            >
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Listar Usuarios" />
          </ListItemButton>
        </List>

        <List component="div" disablePadding>
          <ListItemButton 
            sx={{ pl: 4 }}
            onClick={ () => handleOptionClick('registrarUsuarios') }
            >
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Agregar Usuario" />
          </ListItemButton>
        </List> 
      </Collapse>
    </List>
      {/* GESTION USUARIOS */}
    { selectOption === 'listarUsuarios' && <ListaUsuarios/>}
    { selectOption === 'registrarUsuarios' && <Registration/>}

      {/* GESTION VEHICULOS */}
    { selectOption === 'listarVehiculos' && <ListaVehiculos/>}
    { selectOption === 'eysVehiculos' && <RegistroVehiculoEyS/>}
    { selectOption === 'registrarVehiculos' && <RegistrationVehiculo/>}
    </div>
  );
}