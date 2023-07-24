package com.example.crowdfunding.service;

import com.example.crowdfunding.model.Company;
import com.example.crowdfunding.model.dto.CompanyDto;

import java.util.List;

public interface CompanyService {

    List<Company> findAllCompanies();

    Company findCompanyById(Long id);

    Company addCompany(CompanyDto company);

    Company editCompany (Long id, CompanyDto company);

    void deleteCompany(Long id);

    void addFunding(Long CompanyId, Long money);

}
