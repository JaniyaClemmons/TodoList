package com.jcdev.springboottodobackend.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.jcdev.springboottodobackend.model.TodoItem;
import com.jcdev.springboottodobackend.repository.TodoRepository;

//CLR - springboot will run when all components laoded up 
@Component
public class TodoItemDataLoader implements CommandLineRunner {
    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public void run(String... args) throws Exception {

        loadSeedData();
    }

    public void loadSeedData() {
        if (todoRepository.count() == 0) {
            TodoItem todoItem1 = new TodoItem("Do the dishes");
            TodoItem todoItem2 = new TodoItem("Fold Laundry");
            todoRepository.save(todoItem1);
            todoRepository.save(todoItem2);

        }

        logger.info("Number of todo items: {}", todoRepository.count());
    }

}
