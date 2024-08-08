package com.example.TodoApplication.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.TodoApplication.Entity.TodoEntity;

public interface TodoRepo extends JpaRepository<TodoEntity, Long> {
}
