<template>
    <div>
        <input type="checkbox" @click="setStatus(todo.id, )">
        {{todo.content}}
        ----
        <button @click="setStatus">去做</button>
        ----
        <button @click="deleteTodo(todo.id)">删除</button>
    </div>
</template>
<script>
import {defineComponent} from 'vue';
import {useTodo} from '../../hooks/useTodo.ts';
export default defineComponent({
    name: 'todo-item',
    props: {
        todo: {
            type: Object,
            default: () => ({})
        },
        status: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const {removeTodo} = useTodo();
        const deleteTodo = (id) => {
            removeTodo(id);
        };
        return {
            deleteTodo
        };
    }
});
</script>
<style lang='scss' scoped>
</style>