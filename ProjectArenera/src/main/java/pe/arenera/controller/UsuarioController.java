package pe.arenera.controller;

import java.util.List;
import pe.arenera.exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.arenera.model.*;
import pe.arenera.dto.LoginDTO;
import pe.arenera.dto.UsuarioDTO;
import pe.arenera.repository.UsuarioRepository;
import pe.arenera.response.LoginResponse;
import pe.arenera.service.UsuarioService;

@RestController
@CrossOrigin
@RequestMapping("/api/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuRepo;
	
	@Autowired
	private UsuarioService usuarioService;
	
	// REGISTRAR USUARIO <---
	@PostMapping(path = "/save")
	public String guardarUsuario(@RequestBody UsuarioDTO usuarioDTO) {
		
		String id = usuarioService.addUsuario(usuarioDTO);
		return id;
	}
	
	// LOGIN DE USUARIO <---
	@PostMapping(path = "/login")
	public ResponseEntity<?> logeoUsuario(@RequestBody LoginDTO loginDTO){
		
		LoginResponse loginResponse = usuarioService.login(loginDTO);
		return ResponseEntity.ok(loginResponse);
	}
	
	// LISTADO DE USUARIOS <---
	@GetMapping(path = "/listar")
	List<Usuario> listarUsuarios(){
		return usuRepo.findAll();
	}
	
	// RECUPERAR USUARIO POR ID <---
	@GetMapping(path = "/user/{id}")
	Usuario getUsuarioById(@PathVariable Integer id) {
		return usuRepo.findById(id)
				.orElseThrow( () -> new UsuarioNoEncontradoExcepcion(id));
	}
	
	// ACTUALIZAR USUARIO <---
	@PutMapping(path = "/user/{id}")
	Usuario actualizarUsuario(@RequestBody Usuario newUsuario, @PathVariable Integer id) {
		return usuRepo.findById(id)
				.map( usuario -> {
					usuario.setUsuarionombre(newUsuario.getUsuarionombre());
					usuario.setUsuarioapellido(newUsuario.getUsuarioapellido());
					usuario.setUsuariotelefono(newUsuario.getUsuariotelefono());
					usuario.setCorreo(newUsuario.getCorreo());
					
					return usuRepo.save(usuario);
					
				}).orElseThrow( () -> new UsuarioNoEncontradoExcepcion(id));
	 }
	
	// ELIMINAR USUARIO <---
	@DeleteMapping(path = "user/{id}")
	String eliminarUsuario(@PathVariable Integer id) {
		if(!usuRepo.existsById(id)) {
			throw new UsuarioNoEncontradoExcepcion(id);
		}
		usuRepo.deleteById(id);
		return "El usuario con el id: " + id + " fue eliminado correctamente";
	}
	
}
