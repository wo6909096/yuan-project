<template>
    <div>
        <todoInput />
        <todoTab v-model:status="status" :todo_status="todo_status"/>
        <todoItem
            v-for="(item, index) in todoList"
            :key="item.id"
            :todo="item"
        />
    </div>
</template>
<script>
import todoInput from '../../components/todoInput/index.vue';
import todoItem from '../../components/todoItem/index.vue';
import todoTab from '../../components/todoTab/index.vue';
import {useStore, Store} from 'vuex';
import {defineComponent, computed, ref, reactive} from 'vue';
import {useTodo} from '../../hooks/useTodo.ts';
import {TODO_STATUS} from '../../../typing';
export default defineComponent({
    name: 'todo',
    components: {
        todoInput,
        todoItem,
        todoTab
    },
    setup(props) {
        const store = useStore();
        const {getTodoList} = useTodo();
        const todo_status = {
            unfinished: TODO_STATUS.UNFINISHED,
            doing: TODO_STATUS.DOING,
            completed: TODO_STATUS.COMPLETED
        };
        const status = ref(todo_status.unfinished);
        getTodoList();
        return {
            todoList: computed(() => store.state.todo.todoList),
            todo_status,
            status
        }
    }
});
</script>
<style lang='scss' scoped>
</style>