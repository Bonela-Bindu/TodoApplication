package com.example.TodoApplication.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


import com.example.TodoApplication.Entity.RegistrationEntity;

import com.example.TodoApplication.ServiceLayer.RegistService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RegisController {
	
	

	
	@Autowired
	private RegistService registService;
	

	   @PostMapping("/addusers")
	    public ResponseEntity<RegistrationEntity> newuser(@RequestBody RegistrationEntity user) {
	        return registService.newuser(user);
	    }
	    
	    @GetMapping("/getallusers")
	    public ResponseEntity<List<RegistrationEntity>> getAllUsers() {
	        return registService.getAllUsers();
	    }
	
	@DeleteMapping("delete/{id}")
	public String deleteById(@PathVariable Long id){
		registService.deleteById(id);
		return "deleteById" + id + "Deleted Succesfully";
	}
	
	 @PostMapping("/login")
	    public ResponseEntity<String> loginUser(@RequestBody RegistrationEntity userEntity) {
	        Optional<RegistrationEntity> user = registService.loginUser(userEntity.getEmail(), userEntity.getPassword());
	        if (user.isPresent()) {
	            return ResponseEntity.ok("Login successful");
	        } else {
	            return ResponseEntity.status(401).body("Invalid email or password");
	        }
	    }

}