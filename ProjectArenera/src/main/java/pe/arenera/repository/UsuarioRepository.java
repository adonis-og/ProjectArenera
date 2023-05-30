package pe.arenera.repository;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.*;
import pe.arenera.model.*;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

@EnableJpaRepositories
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

	Optional<Usuario> findOneByCorreoAndClave(String correo, String clave);

	Usuario findByCorreo(String correo);
	
}
