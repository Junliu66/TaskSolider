package com.junliuzhang.example.tasksolider.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskJpaRepository extends JpaRepository<Task, Long> {
    List<Task> findByUsername(String username);

}
