package com.junliuzhang.example.tasksolider.Task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
}
