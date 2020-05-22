package com.junliuzhang.example.tasksolider.Task;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TaskHardcodedService {

    private static List<Task> tasks = new ArrayList();
    private static int idCounter = 0;

    static {
        tasks.add(new Task(++idCounter, "junliu66", "Learn to Dance", new Date(), false));
        tasks.add(new Task(++idCounter, "junliu66", "Learn to cook", new Date(), false));
        tasks.add(new Task(++idCounter, "junliu66", "Learn to program", new Date(), false));
    }

    public List<Task> findAll() {
        return tasks;
    }
}
