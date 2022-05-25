import firebase from 'firebase/app'
export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async fetchTasks() {
            try {
                const tasksGroup = (await firebase.database().ref(`/users/tasks/`).once('value')).val() || {}
                return Object.keys(tasksGroup).map(item=>({...tasksGroup[item],id:item}))
            } catch (e) {

            }
        },
        async createTask({dispatch}, {task,category,date,description}) {
            try {
                const tasks = await firebase.database().ref(`/users/tasks/`).push({
                    task,
                    category,
                    date,
                    description
                })
                return {
                    task,
                    category,
                    date,
                    description,
                    id: tasks.key
                }
            } catch (e) {

            }
        }
    }
}