package com.example.crowdfunding.service;


import com.example.crowdfunding.model.User;
import com.example.crowdfunding.model.enums.Role;


public interface UserService  {

    User register( String password, String repeatPassword, String name, String surname, Role role);
}

