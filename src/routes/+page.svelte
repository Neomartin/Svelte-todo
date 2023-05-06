<script>
    import TodoForm from '../components/TodoForm.svelte';
    import TodoList from '../components/TodoList.svelte';
</script>
<link rel="stylesheet" href="/src/styles/test.css">
<main>
    <h1 class="text-center font-medium text-xl">
        My Todo List
    </h1>
    <TodoForm/>
    <hr>

    <TodoList/>
</main>

