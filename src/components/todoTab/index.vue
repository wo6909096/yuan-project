<template>
    <ul>
        <li v-for="item in todo_status" :key="item" @click="setStatus(item)">{{ item }}</li>
    </ul>
</template>
<script>
import {useStore} from 'vuex';
import {TODO_STATUS} from '../../../typing';
export default {
    name: 'todo-tab',
    props: {
        status: {
            type: String,
            default: ''
        },
        todo_status: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ['update:status'],
    setup(props, {emit}) {
        const setStatus = (status) => {
            emit('update:status', status);
        }
        return {
            setStatus
        }
    }
};
</script>
<style lang='scss' scoped>
ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    margin: 0;
}
</style>