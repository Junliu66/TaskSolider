package com.junliuzhang.example.tasksolider.Task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TaskResource {

    @Autowired
    private TaskHardcodedService taskService;

    @GetMapping("/users/{username}/tasks")
    public List<Task> getAllTasks(@PathVariable String username) {
        return taskService.findAll();
    }

    @GetMapping("/users/{username}/tasks/{id}")
    public Task getTask(@PathVariable String username, @PathVariable long id) {
        return taskService.findById(id);
    }

    @DeleteMapping("/users/{username}/tasks/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable String username, @PathVariable long id) {
        Task task = taskService.deleteById(id);
        if (task != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }




}
