package com.jcdev.springboottodobackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jcdev.springboottodobackend.model.TodoItem;

public interface TodoRepository extends JpaRepository<TodoItem, Long> {

}
