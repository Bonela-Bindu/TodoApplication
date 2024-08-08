package com.example.TodoApplication.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RegistrationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

  
    private String email;

   
    private String password;

   
    private String confirmpassword;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getConfirmpassword() {
		return confirmpassword;
	}


	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}


	@Override
	public String toString() {
		return "RegistrationEntity [id=" + id + ", email=" + email + ", password=" + password + ", confirmpassword="
				+ confirmpassword + "]";
	}


	public RegistrationEntity(Long id, String email, String password, String confirmpassword) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.confirmpassword = confirmpassword;
	}


	public RegistrationEntity() {
		super();
	}
}