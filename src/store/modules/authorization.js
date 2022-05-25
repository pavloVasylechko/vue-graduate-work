import firebase from 'firebase/app'
export default{
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        async logIn({dispatch,commit},{email,password}){
            try{
                await firebase.auth().signInWithEmailAndPassword(email,password)
            } catch (e){
                throw e
            }
        },
        async entrance({commit}){
            await firebase.auth().signOut()
             commit('clear')
        }
    }
}