package com.jcdev.springboottodobackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "todo_items")
public class TodoItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private String task;

    @Getter
    @Setter
    private Boolean isComplete;

    // source, generate getters & setters of lombok

    public TodoItem() {
    }

    public TodoItem(String task) {
        this.task = task;
        this.isComplete = false;
    }

    // Format for logger purposes
    @Override
    public String toString() {
        return String.format("TodoItem{id=%d, task='%s', isComplete='%s'}", id, task, isComplete);
    }

}
