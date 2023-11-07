package com.jcdev.springboottodobackend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

//http://localhost:8080
@RestController
public class TodoController {
    private final Logger logger = LoggerFactory.getLogger(getClass());
    /*
     * //GET all todo items from db
     * 
     * @GetMapping("/api/todoItems")
     * 
     * public RequestEntity<?> fetchAllTodoItems() {
     * logger.debug("request to GET items");
     * 
     * 
     * }
     */
}
