package com.peiwen.fluffyfluffycattery.fluffyfluffycatterybackend.controller;

import com.peiwen.fluffyfluffycattery.fluffyfluffycatterybackend.model.Cat;
import com.peiwen.fluffyfluffycattery.fluffyfluffycatterybackend.service.CatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cats")
public class CatController {
    private final CatService catService;

    @Autowired
    public CatController(CatService catService){
        this.catService = catService;
    }

    @GetMapping("/allCats")
    public ResponseEntity<List<Cat>> getAllCats(){
        List<Cat> cats = this.catService.getAllCats();
        return new ResponseEntity<>(cats, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cat> getCatById(@PathVariable long id) {
        Cat cat = catService.getCatById(id);
        return new ResponseEntity<>(cat, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Cat> createCat(@RequestBody Cat cat){
        Cat newCat = this.catService.createCat(cat);
        return new ResponseEntity<>(newCat, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cat> updateCat(@PathVariable long id, @RequestBody Cat cat) {
        Cat updatedCat = catService.updateCat(id, cat);
        return new ResponseEntity<>(updatedCat, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCat(@PathVariable int id) {
        catService.deleteCat(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/test")
    public String test(){
        return "Hello there";
    }

    @GetMapping("/")
    public String index(){
        return "Welcome to fluffy fluffy maine coons cattery";
    }

}
