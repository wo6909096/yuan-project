<template>
    <input
        type="text"
        v-model="todoValue"
        @keyup="add_todo"
    >
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {useTodo, IUseTodo} from '../../hooks/useTodo.ts';
export default defineComponent({
    name: 'todo-input',
    setup(props) {
        const {addTodo} = useTodo();
        const todoValue = ref('');
        const add_todo = (e: KeyboardEvent) => {
            if (e.keyCode === 13 && todoValue.value.trim()) {
                addTodo(todoValue.value);
                todoValue.value = '';
            }
        }
        return {
            todoValue,
            add_todo
        }
    }
})
</script>