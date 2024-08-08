package com.example.TodoApplication.ServiceLayer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TodoApplication.Entity.TodoEntity;
import com.example.TodoApplication.Repo.TodoRepo;


@Service
public class TodoService {

    @Autowired
    private TodoRepo todoRepo;

    public TodoEntity addTask(TodoEntity todoEntity) {
        return todoRepo.save(todoEntity);
    }

    public List<TodoEntity> getAllTasks() {
        return todoRepo.findAll();
    }

    public void deleteTask(Long id) {
        todoRepo.deleteById(id);
    }

    public TodoEntity updateTask(TodoEntity todoEntity) {
        return todoRepo.save(todoEntity);
    }

    public TodoEntity getTaskById(Long id) {
        return todoRepo.findById(id).orElse(null);
    }
}
