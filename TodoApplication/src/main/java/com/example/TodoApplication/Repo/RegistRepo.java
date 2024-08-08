package com.example.TodoApplication.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TodoApplication.Entity.RegistrationEntity;

@Repository
public interface RegistRepo extends JpaRepository<RegistrationEntity, Long> {
    // Custom query methods if needed
	Optional<RegistrationEntity> findByEmail(String email);
}
