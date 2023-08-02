package com.example.crowdfunding.controller;


import com.example.crowdfunding.model.Company;
import com.example.crowdfunding.model.dto.CompanyDto;
import com.example.crowdfunding.service.CompanyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/companies")
public class CompanyController {
    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/list")
    public List<Company> findAll() {
        return this.companyService.findAllCompanies();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Company> findCompanyById(@PathVariable Long id) {
        Company company = companyService.findCompanyById(id);
        if (company == null) {
            return ResponseEntity.notFound().build();
        } else {
           return ResponseEntity.ok(company);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Company> addCompany(@RequestBody CompanyDto companyDto)
    {
        Company company = this.companyService.addCompany(companyDto);
        if (company == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(company);
        }
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Company> editCompany(@PathVariable Long id, @RequestBody CompanyDto companyDto )
    {
        Company company=this.companyService.editCompany(id,companyDto);
        if (company == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(company);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Company> deleteCompany(@PathVariable Long id)
    {
        Company company= this.companyService.findCompanyById(id);
        if(company == null)
        {
            return ResponseEntity.notFound().build();
        }else
        {
            this.companyService.deleteCompany(id);
            return ResponseEntity.ok(company);
        }

    }

    @PostMapping("/addFunding/{id}")
    public ResponseEntity<Company> AddFundingToACompany(@PathVariable Long id, @RequestBody Long money)
    {
        Company company= this.companyService.findCompanyById(id);
        if(company == null)
        {
            return ResponseEntity.notFound().build();
        }else
        {
            this.companyService.addFunding(id,money);
            return ResponseEntity.ok(company);
        }
    }
}
