import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
    
  { field: 'id', headerName: 'ID', width: 70 },

  { field: 'usuarionombre', headerName: 'Nombre', width: 130 },

  { field: 'usuarioapellido', headerName: 'Apellido', width: 130 },

  { field: 'usuariodni', headerName: 'Age', type: 'DNI', width: 90,},

  { field: 'usuariotelefono', headerName: 'Telefono', width: 130 },

  { field: 'correo', headerName: 'Correo', width: 130 },

];

export default function ListaUsuarios() {

  const [usuarios, setUsuarios] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:7676/api/usuario/listar')
      .then((response) => {
        // Actualizar el estado con los datos de los usuarios
        const usersConId = response.data.map((usuarios) => ({
            ...usuarios, id: usuarios.usuarioid
        }));
        setUsuarios(usersConId);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ height: '80%', width: '100%' }}>
      <DataGrid
        rows={usuarios}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
