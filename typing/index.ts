export interface ITodo {
    id: number;
    content: string;
    status: TODO_STATUS
};

export interface IState {
    count?: number,
    todoList: ITodo[]
}

export enum TODO_STATUS {
    COMPLETED = 'completed',
    UNFINISHED = 'unfinished',
    DOING = 'doing'
};
