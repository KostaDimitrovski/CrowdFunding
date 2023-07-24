package com.example.crowdfunding.controller;

import com.example.crowdfunding.model.CEO;
import com.example.crowdfunding.model.dto.CEODto;
import com.example.crowdfunding.service.CEOService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/ceos")
public class CEOController {

    public final CEOService ceoService;

    public CEOController(CEOService ceoService) {
        this.ceoService = ceoService;
    }

    @GetMapping("/list")
    public List<CEO> findAll()
    {
        return this.ceoService.findAllCEOs();
    }
    @GetMapping("/list/{id}")
    public ResponseEntity<CEO> findById(@PathVariable  Long id)
    {
        CEO ceo = this.ceoService.findCEObyId(id);
        if (ceo == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(ceo);
        }

    }

    @PostMapping("/add")
    public ResponseEntity<CEO> addCEO(@RequestBody CEODto ceoDto)
    {
        CEO ceo = this.ceoService.addCEO(ceoDto);
        if(ceo == null)
        {
            return ResponseEntity.notFound().build();
        }else
        {
            return ResponseEntity.ok(ceo);
        }
    }


}
