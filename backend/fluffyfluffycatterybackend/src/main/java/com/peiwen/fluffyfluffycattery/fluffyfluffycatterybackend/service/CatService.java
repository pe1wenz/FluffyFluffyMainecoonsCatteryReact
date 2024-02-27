package com.peiwen.fluffyfluffycattery.fluffyfluffycatterybackend.service;

import com.peiwen.fluffyfluffycattery.fluffyfluffycatterybackend.model.Cat;
import com.peiwen.fluffyfluffycattery.fluffyfluffycatterybackend.repository.CatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class CatService {
    private final CatRepository catRepository;

    @Autowired
    public CatService(CatRepository catRepository){
        this.catRepository = catRepository;
    }

    public List<Cat> getCatsByBirthdate(LocalDate birthDate){
        return this.catRepository.findByBirthDate(birthDate);
    }

    public List<Cat> getAllCats() {
        return this.catRepository.findAll();
    }

    public Cat getCatById(long id) {
        return catRepository.findById(id).orElse(null);
    }


    public Cat createCat(Cat cat) {
        return this.catRepository.save(cat);
    }

    public Cat updateCat(long id, Cat cat) {
        if(this.getCatById(id) == null){
            throw new NoSuchElementException("Can not find cat with name: " + cat.getCatName());
        }
        return this.catRepository.save(cat);
    }

    public void deleteCat(long id) {
        catRepository.deleteById(id);
    }
}
