package com.junliuzhang.example.tasksolider.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TaskJPAResource {

    @Autowired
    private TaskHardcodedService taskService;

    @Autowired
    private TaskJpaRepository taskJpaRepository;

    @GetMapping("/jpa/users/{username}/tasks")
    public List<Task> getAllTasks(@PathVariable String username) {
        return taskJpaRepository.findByUsername(username);
        //return taskService.findAll();
    }

    @GetMapping("/jpa/users/{username}/tasks/{id}")
    public Task getTask(@PathVariable String username, @PathVariable long id) {
        return taskJpaRepository.findById(id).get();
        //return taskService.findById(id);
    }

    @DeleteMapping("/jpa/users/{username}/tasks/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable String username, @PathVariable long id) {

        taskJpaRepository.deleteById(id);

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/jpa/users/{username}/tasks/{id}")
    public ResponseEntity<Task> updateTask(
            @PathVariable String username, @PathVariable long id, @RequestBody Task task) {

        task.setUsername(username);

        Task taskUpdated = taskJpaRepository.save(task);
        return new ResponseEntity<Task>(task, HttpStatus.OK);
    }

    @PostMapping("/jpa/users/{username}/tasks")
    public ResponseEntity<Void> createTask(
            @PathVariable String username, @RequestBody Task task) {

        task.setUsername(username);

        Task createdTask = taskJpaRepository.save(task);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTask.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }


}
