import { IState, ITodo } from "../../../../typing";
import { ADD_TODO, GET_TODO, REMOVE_TODO } from "./actionType";

export default {
    [ADD_TODO](state: IState, todo: ITodo){
        state.todoList.push(todo);
    },
    [GET_TODO](state: IState, todoList: ITodo[]){
        state.todoList = todoList;
    },
    [REMOVE_TODO](state: IState, id: number){
        state.todoList = state.todoList.filter(item => item.id !== id);
    }
};