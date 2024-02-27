package com.peiwen.fluffyfluffycattery.fluffyfluffycatterybackend.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Cat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String catName;

    private String litterNumber;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "father_id")
    private Cat father;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "mother_id")
    private Cat mother;

    private String color;

    private String gender;

//    @Enumerated(EnumType.STRING)
//    private CatStatus status;

    private LocalDate birthDate;

    public Cat() {
    }

    public Cat(String catName,
               String litterNumber,
               Cat father,
               Cat mother,
               String color,
               String gender,
//               Enum status,
               LocalDate birthDate) {
        this.catName = catName;
        this.litterNumber = litterNumber;
        this.father = father;
        this.mother = mother;
        this.color = color;
        this.gender = gender;
//        this.status = status;
        this.birthDate = birthDate;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCatName() {
        return catName;
    }

    public void setCatName(String catName) {
        this.catName = catName;
    }

    public String getLitterNumber() {
        return litterNumber;
    }

    public void setLitterNumber(String litterNumber) {
        this.litterNumber = litterNumber;
    }

    public Cat getFather() {
        return father;
    }

    public void setFather(Cat father) {
        this.father = father;
    }

    public Cat getMother() {
        return mother;
    }

    public void setMother(Cat mother) {
        this.mother = mother;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

//    public Enum getStatus() {
//        return status;
//    }
//
//    public void setStatus(Enum status) {
//        this.status = status;
//    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    @Override
    public String toString() {
        return "Cat{" +
                "id=" + id +
                ", catName='" + catName + '\'' +
                ", litterNumber='" + litterNumber + '\'' +
                ", father=" + father +
                ", mother=" + mother +
                ", color='" + color + '\'' +
                ", gender='" + gender + '\'' +
//                ", status=" + status +
                ", birthDate=" + birthDate +
                '}';
    }


}
