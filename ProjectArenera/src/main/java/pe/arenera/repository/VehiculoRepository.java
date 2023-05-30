package pe.arenera.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import pe.arenera.model.Vehiculo;

@EnableJpaRepositories
@Repository
public interface VehiculoRepository extends JpaRepository<Vehiculo, Integer>{

}
