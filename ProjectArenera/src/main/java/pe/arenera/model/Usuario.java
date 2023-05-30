package pe.arenera.model;

import java.util.List;

import jakarta.persistence.*;

// ENTIDAD DE LA TABLA USUARIOS DE LA BD <- 
@Entity
@Table(name = "usuario")
public class Usuario {
	
	@Id
	@Column(name = "usuario_id", length = 45)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int usuarioid;
	
	@Column(name = "usuario_nombre", length = 255)
	private String usuarionombre;
	
	@Column(name = "usuario_apellido", length = 255)
	private String usuarioapellido;
	
	@Column(name = "usuario_dni", length = 8)
	private String usuariodni;
	
	@Column(name = "usuario_telefono", length = 9)
	private String usuariotelefono;
	
	@Column(name = "correo", length = 255)
	private String correo;
	
	@Column(name = "clave", length = 255)
	private String clave;
	
	// Relación uno a muchos con Vehiculo
	@OneToMany(mappedBy = "usuario")
	private List<Vehiculo> vehiculos;

	
	// CONSTRUCTOR CON ATRIBUTOS <- 
	public Usuario() {
		super();
	}


	public Usuario(int usuarioid, String usuarionombre, String usuarioapellido, String usuariodni,
			String usuariotelefono, String correo, String clave, List<Vehiculo> vehiculos) {
		super();
		this.usuarioid = usuarioid;
		this.usuarionombre = usuarionombre;
		this.usuarioapellido = usuarioapellido;
		this.usuariodni = usuariodni;
		this.usuariotelefono = usuariotelefono;
		this.correo = correo;
		this.clave = clave;
		this.vehiculos = vehiculos;
	}


	public int getUsuarioid() {
		return usuarioid;
	}


	public void setUsuarioid(int usuarioid) {
		this.usuarioid = usuarioid;
	}


	public String getUsuarionombre() {
		return usuarionombre;
	}


	public void setUsuarionombre(String usuarionombre) {
		this.usuarionombre = usuarionombre;
	}


	public String getUsuarioapellido() {
		return usuarioapellido;
	}


	public void setUsuarioapellido(String usuarioapellido) {
		this.usuarioapellido = usuarioapellido;
	}


	public String getUsuariodni() {
		return usuariodni;
	}


	public void setUsuariodni(String usuariodni) {
		this.usuariodni = usuariodni;
	}


	public String getUsuariotelefono() {
		return usuariotelefono;
	}


	public void setUsuariotelefono(String usuariotelefono) {
		this.usuariotelefono = usuariotelefono;
	}


	public String getCorreo() {
		return correo;
	}


	public void setCorreo(String correo) {
		this.correo = correo;
	}


	public String getClave() {
		return clave;
	}


	public void setClave(String clave) {
		this.clave = clave;
	}


	public List<Vehiculo> getVehiculos() {
		return vehiculos;
	}


	public void setVehiculos(List<Vehiculo> vehiculos) {
		this.vehiculos = vehiculos;
	}


	@Override
	public String toString() {
		return "Usuario [usuarioid=" + usuarioid + ", usuarionombre=" + usuarionombre + ", usuarioapellido="
				+ usuarioapellido + ", usuariodni=" + usuariodni + ", usuariotelefono=" + usuariotelefono + ", correo="
				+ correo + ", clave=" + clave + ", vehiculos=" + vehiculos + "]";
	}
	
	
}
