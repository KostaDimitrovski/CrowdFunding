package com.example.crowdfunding.model;


import com.example.crowdfunding.model.enums.Category;
import jakarta.persistence.*;
import lombok.Data;

import java.awt.*;


@Entity
@Data
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Enumerated(EnumType.STRING)
    private Category category;
    @ManyToOne
    private CEO ceo;
    private Long fundingNeeded;
    private Long fundingTillNow;
    private String aboutTheCompany;
    private String logoUrl;
    public Company() {

    }
}
