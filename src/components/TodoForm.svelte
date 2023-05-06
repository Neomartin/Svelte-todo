<style>
    .input-group {
        display: flex;
        flex-direction: column;
    }
    .input-group label {
        margin-bottom: 0.5rem;
    }
    .input-group input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 0.5rem;
    }
    .input-group button {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
        cursor: pointer;
        width: 6rem;
    }
</style>

<script>
    import { addTodo } from '../stores/todoStore.js';
    let todo = '';
    const handleSubmit = () => {
        addTodo(todo);
        todo = '';
    }
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <div class="input-group">
        <label for="todo">Todo</label>
        <input bind:value={todo} type="text" id="todo" class="form-control" placeholder="Add a new todo...">   
    </div>
    <div class="input-group">
        <button type="submit">Add</button>
    </div>
</form>