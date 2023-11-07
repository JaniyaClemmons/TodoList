package com.jcdev.springboottodobackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TodoItem {

    @Id
    private Integer id;
    private String task;
    private Boolean isComplete;

    // source, generate getters & setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public Boolean getIsComplete() {
        return isComplete;
    }

    public void setIsComplete(Boolean isComplete) {
        this.isComplete = isComplete;
    }

}
