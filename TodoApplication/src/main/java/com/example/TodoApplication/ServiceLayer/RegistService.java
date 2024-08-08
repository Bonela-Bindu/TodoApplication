package com.example.TodoApplication.ServiceLayer;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import com.example.TodoApplication.Entity.RegistrationEntity;
import com.example.TodoApplication.Repo.RegistRepo;

@Service
public class RegistService {

	@Autowired
	private RegistRepo  registRepo;
	
	public ResponseEntity<RegistrationEntity> newuser(RegistrationEntity user) {
        if (!user.getPassword().equals(user.getConfirmpassword())) {
            throw new IllegalArgumentException("Passwords do not match");
        }
        
        RegistrationEntity savedUser = registRepo.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    public ResponseEntity<List<RegistrationEntity>> getAllUsers() {
        List<RegistrationEntity> users = registRepo.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

	public void deleteById(Long id) {
	
		if(registRepo.existsById(id)) {
			registRepo.deleteById(id);
		}else {
			throw new RuntimeException("User With ID " + id + "does not exist");
		}
			
		
	}
	
	public Optional<RegistrationEntity> loginUser(String email, String password) {
		// TODO Auto-generated method stub
		return registRepo.findByEmail(email).filter(user -> user.getPassword().equals(password));
	}



	

			


	 

	
	}


