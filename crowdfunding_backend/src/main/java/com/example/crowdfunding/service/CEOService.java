package com.example.crowdfunding.service;

import com.example.crowdfunding.model.CEO;
import com.example.crowdfunding.model.dto.CEODto;

import java.util.List;

public interface CEOService {

    List<CEO> findAllCEOs();

    CEO findCEObyId(Long id);

    CEO addCEO(CEODto ceoDto);
}
