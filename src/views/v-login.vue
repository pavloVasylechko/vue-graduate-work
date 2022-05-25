<template>
  <div class="v-login">
    <v-header/>
    <div class="container">
      <div class="login-box">
        <h2>Login</h2>
        <form class="login__form" @submit.prevent="login">
          <div class="user-box">
            <input 
            type="text"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
            />
            <label
            :class="{active:($v.email.$dirty && !$v.email.required)|| ($v.email.$dirty && !$v.email.email)}"
            >Username</label>
          </div>
          <div class="user-box">
            <input 
            type="password"
            v-model="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
            />
            <label
            :class="{active:($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
            >Password</label>
          </div>
          <div class="login__btn">
            <button 
            class="login__btn" 
            type="submit"
            >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          <p>No account?
            <router-link class="login__link"  to="registration">Create one</router-link>
          </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from '../components/v-header.vue';
import {email,required,minLength} from 'vuelidate/lib/validators'
export default {
  components: { vHeader },
  name: "v-login",
  data:()=>({
    email:'',
    password:''
  }),
  validations:{
    email:{email,required},
    password:{required,minLength:minLength(6)}
  },
  computed:{
    
  },
  methods:{
    async login(){
      if(this.$v.$invalid){
        this.$v.$touch()
        return
      }
      const formData={
        email:this.email,
        password:this.password
      }
      try{
        await this.$store.dispatch('logIn',formData)
        this.$router.push('/')
      }catch(e){}
    }
  }
};
</script>

<style scoped>
p{
  padding: 0;
  margin: 0;
}
.v-login{
  margin:0;
  padding:0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
  height: calc(100vh);
}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 15px;
  margin-bottom: 25px;
  letter-spacing: 4px;
  background-color:transparent;
  border: none;
  cursor: pointer;
}

.login-box button:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 5px #03e9f4,
              0 0 5px #03e9f4,
              0 0 5px #03e9f4;
}

.login-box button span {
  position: absolute;
  display: block;
}

.login-box button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}
.login__btn{
  text-align: center;
}
.login__link{
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 5px;
}
.active{
  color: red !important;
}
</style>