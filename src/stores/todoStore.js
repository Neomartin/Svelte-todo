// @ts-nocheck
import { writable  } from "svelte/store";

export const todos = writable([]);

export const addTodo = (text) => {
    console.log(todos)
    todos.update((items) => {
        return [...items, { text, completed: false, id: Date.now() }];
    });
}

export const deleteTodo = (id) => {
    todos.update((items) => {
        return items.filter((item) => item.id !== id);
    });
};


export const toggleTodo = (id) => {
    todos.update((items) => {
        const index = items.findIndex((item) => item.id === id);
        items[index].completed = !items[index].completed
        return items 
    });
};