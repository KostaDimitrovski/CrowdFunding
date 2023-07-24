package com.example.crowdfunding.repository;

import com.example.crowdfunding.model.CEO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CEORepository extends JpaRepository<CEO,Long> {
}
