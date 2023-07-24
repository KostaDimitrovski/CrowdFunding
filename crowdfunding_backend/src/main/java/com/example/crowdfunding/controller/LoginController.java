//package com.example.crowdfunding.controller;
//
//import com.example.crowdfunding.config.filter.JwtAuthenticationFilter;
//import com.fasterxml.jackson.core.JsonProcessingException;
//import jakarta.servlet.http.HttpServletResponse;
//import jakarta.servlet.http.HttpServletRequest;
//import org.springframework.security.core.Authentication;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping("/api/login")
//public class LoginController {
//
//    private final JwtAuthenticationFilter filter;
//
//    public LoginController(JwtAuthenticationFilter filter) {
//        this.filter = filter;
//    }
//
//    @PostMapping
//    public String doLogin(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
//        Authentication authentication=this.filter.attemptAuthentication( request, response);
//        return this.filter.generateJwt(response, authentication);
//    }
//}
