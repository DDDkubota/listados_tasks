
/*
Task is the interface for the task 
*/

export interface Task{
    check: boolean,
    title: string,
    id: string,
    }

/* 
List is the interface for the list of tasks
*/

export interface TasksList{
tasks: Task[],
    }

export type FormData = {
    title: string
    }