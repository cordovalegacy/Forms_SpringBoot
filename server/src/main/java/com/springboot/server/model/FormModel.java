package com.springboot.server.model;

public class FormModel {

    private int randNum;
    private String cityName;
    private String personName;
    private String hobby;
    private String animal;
    private String phrase;

    public FormModel(int randNum, String cityName, String personName, String hobby, String animal, String phrase){
        this.randNum = randNum;
        this.cityName = cityName;
        this.personName = personName;
        this.hobby = hobby;
        this.animal = animal;
        this.phrase = phrase;
    }

    public int getRandNum() {

        return randNum;
    }

    public void setRandNum(int randNum) {
        this.randNum = randNum;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getPersonName() {
        return personName;
    }

    public void setPersonName(String personName) {
        this.personName = personName;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public String getAnimal() {
        return animal;
    }

    public void setAnimal(String animal) {
        this.animal = animal;
    }

    public String getPhrase() {
        return phrase;
    }

    public void setPhrase(String phrase) {
        this.phrase = phrase;
    }
}
