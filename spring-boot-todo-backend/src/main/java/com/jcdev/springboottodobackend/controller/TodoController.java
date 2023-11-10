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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    // GET todo item by id
    @GetMapping("/{id}")
    public ResponseEntity<?> fetchTodoItem(@PathVariable("id") Long id) {

        logger.info("request to GET item with id: " + id);
        TodoItem todoItem = todoService.fetchTodoItem(id);

        return ResponseEntity.status(HttpStatus.OK).body(todoItem);

    }

    // POST todo item
    @PostMapping("")
    public ResponseEntity<?> createTodoItem(@RequestBody TodoItem todoItem) {

        logger.info("request to POST new item ");
        TodoItem newItem = todoService.createTodoItem(todoItem);

        return ResponseEntity.status(HttpStatus.OK).body(newItem);

    }

    // UPDATE todo item by id
    @PutMapping("/{id}")
    public ResponseEntity<?> updateTodoItem(@PathVariable("id") Long id, @RequestBody TodoItem todoItem) {

        logger.info("request to UPDATE item with id: " + id);
        TodoItem newItem = todoService.updateTodoItem(id, todoItem);
        if (newItem == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No item found with id: " + id);
        }

        return ResponseEntity.status(HttpStatus.OK).body(newItem);

    }

    // DELETE todo item by id
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodoItem(@PathVariable("id") Long id) {

        logger.info("request to DELETE item with id: " + id);
        TodoItem newItem = todoService.deleteTodoItem(id);
        if (newItem == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No item found with id: " + id);
        }

        return ResponseEntity.status(HttpStatus.OK).body(newItem);

    }

}
