<script>
    import { todos, deleteTodo, toggleTodo } from '../stores/todoStore.js';
</script>	

<ul>
    {#each $todos as todo}
        <li class="flex justify-between py-3">
            <div>
                <input type="checkbox" on:change={() => toggleTodo(todo.id)} checked={todo.completed}>
                <span class={`text-xs text-gray-500 ${todo.completed ? 'line-through' : ''}`}>{todo.id}</span>
                <strong class={todo.completed ? 'line-through' : ''}>
                    {todo.text}
                </strong> 
                -  {todo.completed ? 'Completed' : 'Not Completed'}
            </div>
            <button class="bg-red-600 text-white" on:click={() => deleteTodo(todo.id)}>
                Delete
            </button> 
        </li>
    {/each}
</ul>