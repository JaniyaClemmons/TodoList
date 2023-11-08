package com.jcdev.springboottodobackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.jcdev.springboottodobackend.model.TodoItem;

public interface TodoRepository extends CrudRepository<TodoItem, Long> {

}
