package com.example.crowdfunding.service;

import com.example.crowdfunding.model.Email;
import com.example.crowdfunding.model.dto.EmailDto;

public interface EmailService {
    Email saveEmail(EmailDto dto);
}
