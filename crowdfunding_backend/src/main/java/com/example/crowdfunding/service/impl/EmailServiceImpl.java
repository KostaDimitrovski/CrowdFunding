package com.example.crowdfunding.service.impl;

import com.example.crowdfunding.model.Email;
import com.example.crowdfunding.model.dto.EmailDto;
import com.example.crowdfunding.repository.EmailRepository;
import com.example.crowdfunding.service.EmailService;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private final EmailRepository emailRepository;

    public EmailServiceImpl(EmailRepository emailRepository) {
        this.emailRepository = emailRepository;
    }

    @Override
    public Email saveEmail(EmailDto dto) {
       Email email=new Email();
       email.setEmail(dto.getEmail());
        email.setName(dto.getName());
        email.setText(dto.getText());
        return emailRepository.save(email);
    }
}
