package com.example.TodoApplication.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.TodoApplication.Entity.TodoEntity;
import com.example.TodoApplication.ServiceLayer.TodoService;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping("/add")
    public ResponseEntity<TodoEntity> addTask(@RequestBody TodoEntity todoEntity) {
        TodoEntity newTodo = todoService.addTask(todoEntity);
        return ResponseEntity.ok(newTodo);
    }

    @GetMapping("/all")
    public ResponseEntity<List<TodoEntity>> getAllTasks() {
        List<TodoEntity> tasks = todoService.getAllTasks();
        return ResponseEntity.ok(tasks);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TodoEntity> getTaskById(@PathVariable Long id) {
        TodoEntity todoEntity = todoService.getTaskById(id);
        return ResponseEntity.ok(todoEntity);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable Long id) {
        todoService.deleteTask(id);
        return ResponseEntity.ok("Task with ID " + id + " deleted successfully");
    }

    @PutMapping("/update")
    public ResponseEntity<TodoEntity> updateTask(@RequestBody TodoEntity todoEntity) {
        TodoEntity updatedTodo = todoService.updateTask(todoEntity);
        return ResponseEntity.ok(updatedTodo);
    }
}
