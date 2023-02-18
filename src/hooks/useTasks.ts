import { useAxios } from '@vueuse/integrations/useAxios'
import { instance } from '../api/apiCreate'
import {reactive} from 'vue'

export const useTasks = () => {


    const state = reactive({
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