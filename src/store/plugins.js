import { STORAGE_KEY } from './mutations'

const localStoragePlugin = store => {
    store.subscribe((mutation, { tasks }) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    })
};

export default [localStoragePlugin];