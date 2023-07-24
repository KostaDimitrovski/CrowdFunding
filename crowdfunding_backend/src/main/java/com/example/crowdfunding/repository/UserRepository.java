package com.example.crowdfunding.repository;

import com.example.crowdfunding.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    //Optional<User> findByUsernameAndPassword(String username, String password);

  //  Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);

    //UserProjection findByRole(Role role);

}
