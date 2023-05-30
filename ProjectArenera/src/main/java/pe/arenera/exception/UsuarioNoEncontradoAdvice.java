package pe.arenera.exception;

import java.util.*;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@ControllerAdvice
public class UsuarioNoEncontradoAdvice {
	
	@ResponseBody
	@ExceptionHandler(UsuarioNoEncontradoExcepcion.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Map<String, String> manejoException(UsuarioNoEncontradoExcepcion exception){
		
		Map<String, String> errorMap = new HashMap<>();
		errorMap.put("mensajeError", exception.getMessage());
		
		return errorMap;
	}

}
