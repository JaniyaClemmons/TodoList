package com.jcdev.springboottodobackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jcdev.springboottodobackend.model.TodoItem;
import com.jcdev.springboottodobackend.repository.TodoRepository;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public List<TodoItem> fetchAllTodoItems() {
        return todoRepository.findAll();
    }

}
