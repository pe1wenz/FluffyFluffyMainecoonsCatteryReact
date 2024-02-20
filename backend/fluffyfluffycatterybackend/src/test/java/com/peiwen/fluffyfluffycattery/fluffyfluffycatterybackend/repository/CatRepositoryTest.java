package com.peiwen.fluffyfluffycattery.fluffyfluffycatterybackend.repository;

import com.peiwen.fluffyfluffycattery.fluffyfluffycatterybackend.model.Cat;
import com.peiwen.fluffyfluffycattery.fluffyfluffycatterybackend.service.CatService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class CatRepositoryTest {

//        @Autowired
//        private TestEntityManager entityManager;

        @Autowired
        private CatRepository catRepository;

        @Autowired
        private CatService catService;

        private Cat daddyCat;
        private Cat mommyCat;
        private Cat kitty1;
        private Cat kitty2;
        private Cat kitty3;
        private Cat kitty4;
        private Cat kitty5;
        private Cat kitty6;
        private Cat nullKitty;

        @BeforeEach
        public void setUP(){
             daddyCat = new Cat("Whiskers", null, null, null, "Gray", "Male", LocalDate.of(2021,5,8));
             mommyCat = new Cat("Ashe", null, null, null, "Orange", "Female", LocalDate.of(2020,1,1));

             kitty1 = new Cat("kittya1", "A", daddyCat, mommyCat, "Black", "Male", LocalDate.of(2022,3,14));
             kitty2 = new Cat("kittya2", "A", daddyCat, mommyCat, "Black & White", "Female", LocalDate.of(2022,3,14));
             kitty3 = new Cat("kittya3", "A", daddyCat, mommyCat, "Silver Tabby", "Male", LocalDate.of(2022,3,14));
             kitty4 = new Cat("kittya4", "A", daddyCat, mommyCat, "Silver Tabby", "Female", LocalDate.of(2022,3,14));

             kitty5 = new Cat("kittyb1", "B", daddyCat, mommyCat, "Black", "Male", LocalDate.of(2023,3,14));
             kitty6 = new Cat("kittyb2", "B", daddyCat, mommyCat, "Black & White", "Female", LocalDate.of(2023,3,14));

             nullKitty = null;
        }

        @Test
        public void testSaveCat() {
        // When
        Cat savedCat = catRepository.save(daddyCat);
        Cat savedCat2 = catRepository.save(mommyCat);

        Cat savedCat3 = catRepository.save(kitty1);

        // Then
        assertThat(savedCat.getId()).isNotNull();
        assertThat(savedCat.getCatName()).isEqualTo("Whiskers");
        assertThat(savedCat.getLitterNumber()).isEqualTo(null);

        assertThat(this.catRepository.count() == 2);

        assertThat(savedCat3.getFather() == savedCat);
        assertThat(savedCat3.getMother() == savedCat2);

        assertThat(this.catRepository.count() == 3);
        catRepository.deleteById(savedCat2.getId());
        assertThat(catRepository.findById(savedCat2.getId()) == null);
//        entityManager.clear();

        catRepository.deleteAll();
        assertThat(this.catRepository.count() == 0);
        // Add assertions for other fields as needed
    }

    @Test
    public void testUpdateCat() {
        // When
        Cat savedCat = catService.createCat(daddyCat);
        Cat savedCat2 = catService.createCat(mommyCat);

        Cat savedCat3 = catService.createCat(kitty1);

        // Then
        Cat newCat = new Cat("testcase1", "R", null, null, "White", "Male", LocalDate.of(2022,1,1));

        assertThat(savedCat3.getFather() == savedCat);
        assertThat(savedCat3.getMother() == savedCat2);

        catService.updateCat(savedCat3.getId(), newCat);

        assertThat(catService.getCatById(savedCat3.getId()).getCatName() == newCat.getCatName());

    }



    @Test
    public void testFindCatById() {
        // Given
        Cat cat = new Cat("Fluffy", "L456", null, null, "White", "Female", LocalDate.now());
//        entityManager.persistAndFlush(cat);
        catService.createCat(cat);

        // When
        Cat foundCat = catRepository.findById(cat.getId()).orElse(null);

        // Then
        assertThat(foundCat).isNotNull();
        assertThat(foundCat.getCatName()).isEqualTo("Fluffy");
        assertThat(foundCat.getLitterNumber()).isEqualTo("L456");
        // Add assertions for other fields as needed
    }



    // Add more test methods for other repository operations as needed
}
