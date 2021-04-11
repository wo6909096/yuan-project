import { ITodo, TODO_STATUS } from "../../typing"
import {useStore, Store, mapActions} from 'vuex';
import { ADD_TODO, GET_TODO, REMOVE_TODO} from "../store/modules/todo/actionType";
import {useTodoStorage, IUseTodoStorage} from './useStorage'
export interface IUseTodo {
    addTodo: (value: string) => void,
    getTodoList: () => void,
    setTodo: () => void,
    removeTodo: (id: number) => void,
};
export function useTodo (): IUseTodo {
    const store: Store<any> = useStore();
    const {setTodoStorage, getTodoStorage}: IUseTodoStorage = useTodoStorage();
    // const obj = mapActions([
    //     ADD_TODO
    // ]);
    // 添加todo
    function addTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.UNFINISHED
        };
        store.dispatch(ADD_TODO, todo);
        setTodoStorage(store.state.todo.todoList);
    };
    // 获取todo
    function getTodoList(): void {
        const todoList = getTodoStorage();
        store.dispatch(GET_TODO, todoList || []);
    };
    function setTodo(): void {};
    function removeTodo(id: number): void {
        store.dispatch(REMOVE_TODO, id);
        setTodoStorage(store.state.todo.todoList);
    };
    return {
        addTodo,
        getTodoList,
        setTodo,
        removeTodo
    }
};

