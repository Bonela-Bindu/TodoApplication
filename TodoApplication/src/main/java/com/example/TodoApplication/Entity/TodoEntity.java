package com.example.TodoApplication.Entity;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TodoEntity {
	
	

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	private String task;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTask() {
		return task;
	}
	public void setTask(String task) {
		this.task = task;
	}
	@Override
	public String toString() {
		return "TodoEntity [id=" + id + ", task=" + task + "]";
	}
	public TodoEntity(long id, String task) {
		super();
		this.id = id;
		this.task = task;
	}
	public TodoEntity() {
		super();
	}
	
	

}
