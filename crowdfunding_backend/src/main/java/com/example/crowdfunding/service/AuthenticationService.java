package com.example.crowdfunding.service;

import com.example.crowdfunding.controller.auth.AuthenticationRequest;
import com.example.crowdfunding.controller.auth.AuthenticationResponse;
import com.example.crowdfunding.controller.RegisterRequest;
import com.example.crowdfunding.model.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface AuthenticationService {

//    User login(String username, String password);

     AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);
    void saveUserToken(User user, String jwtToken);
    void revokeAllUserTokens(User user);
    void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException;
}
