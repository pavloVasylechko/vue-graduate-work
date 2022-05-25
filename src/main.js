import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
Vue.use(Vuelidate)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBgrwRXvv3KJ7rffjbTdxFryPKaDOWJ9Ak",
  authDomain: "vue-graduate-work.firebaseapp.com",
  databaseURL: "https://vue-graduate-work-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-graduate-work",
  storageBucket: "vue-graduate-work.appspot.com",
  messagingSenderId: "561822847368",
})

let app

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


