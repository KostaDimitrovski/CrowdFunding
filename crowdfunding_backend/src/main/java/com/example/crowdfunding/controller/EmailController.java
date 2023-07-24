package com.example.crowdfunding.controller;

import com.example.crowdfunding.model.Email;
import com.example.crowdfunding.model.dto.EmailDto;
import com.example.crowdfunding.service.EmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/email")
public class EmailController {

    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send")
    public Email sendEmail(@RequestBody EmailDto emailDto) {


        return emailService.saveEmail(emailDto);

    }
}
