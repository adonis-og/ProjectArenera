package pe.arenera.service;

import pe.arenera.dto.LoginDTO;
import pe.arenera.dto.UsuarioDTO;
import pe.arenera.response.LoginResponse;

public interface UsuarioService{
		
	String addUsuario(UsuarioDTO usuarioDTO);

	LoginResponse login(LoginDTO loginDTO);

	String actualizarUser(UsuarioDTO usuarioDTO);

}
