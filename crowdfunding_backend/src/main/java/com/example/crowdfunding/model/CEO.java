package com.example.crowdfunding.model;

import jakarta.persistence.*;
import lombok.Data;



@Entity
@Data
public class CEO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String surname;

    private String profilePicture;
    private String position;
    private String email;
    private String phoneNumber;
    private String address;
    private String socialMedia;
    private String about;
    private String skills;
    public CEO() {
    }
}
