package com.example.crowdfunding.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CompanyNotFoundException extends RuntimeException{
    public CompanyNotFoundException(Long id) {
        super(String.format("Company with id: %d was not found", id));
    }
}
