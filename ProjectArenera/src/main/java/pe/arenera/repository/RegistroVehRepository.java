package pe.arenera.repository;

import pe.arenera.model.*;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface RegistroVehRepository extends JpaRepository<VehiculoEntryExit, Integer>{

	Optional<VehiculoEntryExit> findByVehiculoAndFechaSalidaIsNull(Vehiculo vehiculo);

}
