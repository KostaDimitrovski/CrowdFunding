package com.example.crowdfunding.service.impl;

import com.example.crowdfunding.model.CEO;
import com.example.crowdfunding.model.dto.CEODto;
import com.example.crowdfunding.model.exceptions.CEONotFoundException;
import com.example.crowdfunding.repository.CEORepository;
import com.example.crowdfunding.repository.CompanyRepository;
import com.example.crowdfunding.service.CEOService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CEOServiceImpl implements CEOService {

    private final CEORepository ceoRepository;
    private final CompanyRepository companyRepository;

    public CEOServiceImpl(CEORepository ceoRepository, CompanyRepository companyRepository) {
        this.ceoRepository = ceoRepository;
        this.companyRepository = companyRepository;
    }


    @Override
    public List<CEO> findAllCEOs() {
        return ceoRepository.findAll();
    }

    @Override
    public CEO findCEObyId(Long id) {
        CEO ceo= ceoRepository.findById(id).orElseThrow(()-> new CEONotFoundException(id));
        return ceo;
    }

    @Override
    public CEO addCEO(CEODto ceoDto) {
        CEO ceo = new CEO();
        ceo.setName(ceoDto.getName());
        ceo.setSurname(ceoDto.getSurname());
        ceo.setProfilePicture(ceoDto.getProfilePicture());
        return ceoRepository.save(ceo);
    }
}
