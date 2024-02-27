package com.peiwen.fluffyfluffycattery.fluffyfluffycatterybackend.repository;

import com.peiwen.fluffyfluffycattery.fluffyfluffycatterybackend.model.Cat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface CatRepository extends JpaRepository<Cat, Long> {

    List<Cat> findByBirthDate(LocalDate birthDate);


}
