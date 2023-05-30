package pe.arenera.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.arenera.exception.VehiculoNoEncontradoException;
import pe.arenera.model.Vehiculo;
import pe.arenera.model.VehiculoEntryExit;
import pe.arenera.repository.RegistroVehRepository;
import pe.arenera.repository.VehiculoRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/registrareys")
public class VehiculoRegisController {
	
	@Autowired 
	VehiculoRepository vehiculoRepo;
	
	@Autowired
	RegistroVehRepository vehiculoeysRepo;
	
	// REGISTRAR ENTRADA <---
	@PostMapping(path = "/entrada/{vehiculoId}")
	public ResponseEntity<VehiculoEntryExit> registrarEntrada(@PathVariable Integer vehiculoId){
		
		Vehiculo vehiculo = vehiculoRepo.findById(vehiculoId)
				.orElseThrow( () -> new VehiculoNoEncontradoException("Vehiculo no enonctrado con ID: " + vehiculoId) );
		
		VehiculoEntryExit registro = new VehiculoEntryExit();
		registro.setVehiculo(vehiculo);
		registro.setFechaEntrada(LocalDateTime.now());
		
		VehiculoEntryExit nuevoRegistro = vehiculoeysRepo.save(registro);
		return ResponseEntity.status(HttpStatus.CREATED).body(nuevoRegistro);
	}
	
	// REGISTRAR SALIDA <---
	@PostMapping(path = "/salida/{vehiculoId}")
	public ResponseEntity<VehiculoEntryExit> registrarSalida(@PathVariable Integer vehiculoId){
		Vehiculo vehiculo = vehiculoRepo.findById(vehiculoId)
				.orElseThrow( () -> new VehiculoNoEncontradoException("Vehiculo no enonctrado con ID: " + vehiculoId) );
				
		VehiculoEntryExit registroVe = vehiculoeysRepo.findByVehiculoAndFechaSalidaIsNull(vehiculo)
	            .orElseThrow( () -> new VehiculoNoEncontradoException("No se encontro un registro de entrada para el vehiculo con el ID: " + vehiculoId) );
		
		registroVe.setFechaSalida(LocalDateTime.now());
		
		VehiculoEntryExit registroActualizado = vehiculoeysRepo.save(registroVe);
		
		return ResponseEntity.ok(registroActualizado);
		
	}
}
