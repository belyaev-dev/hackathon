import { useAxios } from '@vueuse/integrations/useAxios'
import { instance } from '../api/apiCreate'
import {reactive} from 'vue'


export type Task {
    status: string;
    title: string;
    description: string;
}

export type TaskState {
    listAllTasks: Task[];
    titleTask: any;
    descriptionTask: any;
}

export const useTasks = () => {


    const state: TaskState = reactive({
        listAllTasks: [],
        titleTask: null,
        descriptionTask: null,
    })

    /**
     * Получение всех задач по фильтру
     */
    const fetchAllTasks = async () => {

        const {data} = await useAxios('tasks', {method: 'GET'}, instance)
        state.listAllTasks = data.value
    }

    /**
     * Создание задачи
     */
    const createTask = async () => {
        await useAxios('tasks', {method: 'POST', data: {title: state.titleTask, description: state.descriptionTask}}, instance)
    }

    return {
        state,
        fetchAllTasks,
        createTask
    }
}