package com.example.crowdfunding.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CEONotFoundException extends RuntimeException{
    public CEONotFoundException(Long id) {
        super(String.format("CEO with id: %d was not found", id));
    }
}
