package com.jcdev.springboottodobackend.service;

import java.util.List;
import java.util.Optional;

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

    public TodoItem fetchTodoItem(Long id) {
        Optional<TodoItem> todoOpt = todoRepository.findById(id);

        if (todoOpt.isPresent()) {
            TodoItem item = todoOpt.get();
            return item;
        }
        return null;
    }

    public TodoItem createTodoItem(TodoItem todoItem) {
        TodoItem newItem = new TodoItem(todoItem.getTask());

        return todoRepository.save(newItem);
    }

    public TodoItem updateTodoItem(Long id, TodoItem todoItem) {
        Optional<TodoItem> todoOpt = todoRepository.findById(id);
        if (todoOpt.isPresent()) {
            TodoItem item = todoOpt.get();
            item.setIsComplete(todoItem.getIsComplete());
            item.setTask(todoItem.getTask());
            todoRepository.save(item);
            return item;

        }
        return null;
    }

    public TodoItem deleteTodoItem(Long id) {
        try {
            TodoItem todoItem = fetchTodoItem(id);
            todoRepository.deleteById(id);
            return todoItem;
        } catch (IllegalArgumentException i) {
            return null;
        }

    }

}
