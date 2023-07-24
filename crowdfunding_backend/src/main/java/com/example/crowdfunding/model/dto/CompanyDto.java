package com.example.crowdfunding.model.dto;

import com.example.crowdfunding.model.enums.Category;
import lombok.Data;

@Data
public class CompanyDto {
    private String name;
    private Category category;
    private Long ceoId;
    private Long fundingNeeded;
    private Long fundingTillNow;
    private String aboutTheCompany;
    private String logoUrl;
}
