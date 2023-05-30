import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
    
  { field: 'id', headerName: 'ID', width: 70 },

  { field: 'placa', headerName: 'Placa', width: 130 },

  { field: 'color', headerName: 'Color', width: 130 },

  { field: 'modelo', headerName: 'Modelo', width: 130 },

];

export default function ListaVehiculos() {

  const [vehiculos, setVehiculos] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:7676/api/vehiculos/listarvehi')
      .then((response) => {
        // Actualizar el estado con los datos de los vehiculos
        const carConId = response.data.map((vehiculos) => ({
            ...vehiculos, id: vehiculos.vehiculoid
        }));
        setVehiculos(carConId);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ height: '80%', width: '100%' }}>
      <DataGrid
        rows={vehiculos}
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
