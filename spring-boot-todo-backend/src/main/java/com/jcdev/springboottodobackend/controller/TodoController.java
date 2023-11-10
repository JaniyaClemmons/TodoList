package com.jcdev.springboottodobackend.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jcdev.springboottodobackend.model.TodoItem;
import com.jcdev.springboottodobackend.service.TodoService;

//http://localhost:8080
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/todoItems")
public class TodoController {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private TodoService todoService;

    // GET all todo items from db
    @GetMapping("")
    public ResponseEntity<?> fetchAllTodoItems() {

        logger.info("request to GET items");
        List<TodoItem> todoItems = todoService.fetchAllTodoItems();
        return ResponseEntity.status(HttpStatus.OK).body(todoItems);

    }
}
