import { log } from "node:console";
import { ITodo } from "../../typing";

export interface IUseTodoStorage {
    getTodoStorage: () => ITodo[]|boolean;
    setTodoStorage: (todoList: ITodo[]) => void;
};
export function useTodoStorage(): IUseTodoStorage {
    function getTodoStorage(): ITodo[]|boolean {
        const todo: string|null = localStorage.getItem('TODO_KEY');
        return  todo === null ? false : JSON.parse(todo);
    }
    function setTodoStorage(todoList: ITodo[]) {
        localStorage.setItem('TODO_KEY', JSON.stringify(todoList));
    }
    return {
        getTodoStorage,
        setTodoStorage
    }
}