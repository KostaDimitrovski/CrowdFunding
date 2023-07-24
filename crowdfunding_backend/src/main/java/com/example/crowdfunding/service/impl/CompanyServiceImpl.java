package com.example.crowdfunding.service.impl;

import com.example.crowdfunding.model.Company;
import com.example.crowdfunding.model.dto.CompanyDto;
import com.example.crowdfunding.model.exceptions.CEONotFoundException;
import com.example.crowdfunding.model.exceptions.CompanyNotFoundException;
import com.example.crowdfunding.repository.CEORepository;
import com.example.crowdfunding.repository.CompanyRepository;
import com.example.crowdfunding.service.CompanyService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CompanyServiceImpl implements CompanyService {

    private final CompanyRepository companyRepository;
    private final CEORepository ceoRepository;

    public CompanyServiceImpl(CompanyRepository companyRepository, CEORepository ceoRepository) {
        this.companyRepository = companyRepository;
        this.ceoRepository = ceoRepository;
    }


    @Override
    public List<Company> findAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public Company findCompanyById(Long id) {
        Company company= companyRepository.findById(id).orElseThrow(()->new CompanyNotFoundException(id));
        return company;
    }

    @Override
    public Company addCompany(CompanyDto company) {
        Company company1= new Company();
        company1.setName(company.getName());
        company1.setCategory(company.getCategory());
        company1.setCeo(ceoRepository.findById(company.getCeoId()).orElseThrow(()-> new CEONotFoundException(company.getCeoId())));
        company1.setFundingNeeded(company.getFundingNeeded());
        company1.setFundingTillNow(company.getFundingTillNow());
        company1.setAboutTheCompany(company.getAboutTheCompany());
        company1.setLogoUrl(company.getLogoUrl());

        return companyRepository.save(company1);
    }

    @Override
    public Company editCompany(Long id, CompanyDto company) {
        Company company1= companyRepository.findById(id).orElseThrow(()->new CompanyNotFoundException(id));
        company1.setName(company.getName());
        company1.setCeo(ceoRepository.findById(company.getCeoId()).orElseThrow(()-> new CEONotFoundException(company.getCeoId())));
        company1.setFundingNeeded(company.getFundingNeeded());
        company1.setFundingTillNow(company.getFundingTillNow());
        company1.setCategory(company.getCategory());
        company1.setAboutTheCompany(company.getAboutTheCompany());
        company1.setLogoUrl(company.getLogoUrl());
        return companyRepository.save(company1);
    }

    @Override
    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }

    @Override
    public void addFunding(Long companyId, Long money) {
        Company company1= companyRepository.findById(companyId).orElseThrow(()->new CompanyNotFoundException(companyId));
        company1.setFundingTillNow(company1.getFundingTillNow()+money);
        companyRepository.save(company1);
    }
}
