import { IState, ITodo } from '../../../../typing';
import { ADD_TODO, GET_TODO, REMOVE_TODO } from './actionType';
import { Commit } from 'vuex';

interface ICtx {
    commit: Commit,
    state: IState
}

export default {
    [ADD_TODO]({commit}: ICtx, todo: ITodo){
        console.log('todo', todo);
        commit(ADD_TODO, todo);
    },
    [GET_TODO]({commit}: ICtx, todoList: ITodo[]){
        commit(GET_TODO, todoList);
    },
    [REMOVE_TODO]({commit}: ICtx, id: number){
        commit(REMOVE_TODO, id);
    }
};