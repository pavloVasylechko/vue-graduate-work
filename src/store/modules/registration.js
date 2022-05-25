import firebase from 'firebase/app'
export default{
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        async registration({dispatch},{email,password,name}){
            try{
               await firebase.auth().createUserWithEmailAndPassword(email,password)
               const uid = await dispatch('getUid')
               console.log(uid)
               await firebase.database().ref(`/users/${uid}/info`).set({
                   name:name
               })
            }catch(e){
                console.log(e)
                throw e
            }
        },
        getUid(){
            const user  = firebase.auth().currentUser
            return user ? user.uid : null
        }
    }
}