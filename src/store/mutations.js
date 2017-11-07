export const STORAGE_KEY = 'todo-list';

export const state = {
    tasks: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
};

export const mutations = {
    addTask(state, input) {
        let id = new Date().valueOf().toString();
        state.tasks = [{_id: id, title: input, complete: false}, ...state.tasks]
    },
    removeTask(state, id) {
        state.tasks = state.tasks.filter(task => task._id !== id);
    },
    clearCompleteTasks(state) {
        state.tasks = state.tasks.filter(task => !task.complete);
    },
};

export const actions = {
    addTask({commit}, payload) {
        setTimeout(() => {
            commit('addTask', payload.task)
        }, 400)
    },
    removeTask({commit}, payload) {
        setTimeout(() => {
            commit('removeTask', payload.id)
        }, 400)
    },
    clearCompleteTasks({commit}) {
        commit('clearCompleteTasks')
    },
};