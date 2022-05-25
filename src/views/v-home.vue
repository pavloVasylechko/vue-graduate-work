<template>
  <div class="v-home">
    <v-header-home/>
    <div class="container">
      <div 
      class="v-home__form-container" 
      :class="{'v-home__form-container--active':isActive}"
      >
        <form action="" class="v-home__form" @submit.prevent="addNewTask">
        <input 
        class="v-home__input"
        type="text"
        placeholder="The name of the task"
        v-model="task"
        :class="{invalid: ($v.task.$dirty && !$v.task.required),active: ($v.task.$dirty && !$v.task.required)}"
        >
        <input 
        class="v-home__input--date" 
        type="date"
        v-model="date"
        :class="{invalid: ($v.date.$dirty && !$v.date.required),active: ($v.date.$dirty && !$v.date.required)}"
        >
        <div class="v-home-category">
          <label for="home">
            <input 
            class="v-home__input--radio" 
            type="radio" 
            name="category"
            value="home" 
            id="home"
            v-model="category"
            >Home
          </label> 
          <label for="work">
            <input 
            class="v-home__input--radio" 
            type="radio" 
            name="category"
            value="work"  
            id="work"
            v-model="category"
            >Work
          </label>
          <label for="education">
            <input 
            class="v-home__input--radio" 
            type="radio" 
            name="category"
            value="education"   
            id="education"
            v-model="category"
            >Education
          </label>
        </div>
        <textarea 
        class="v-home__area" 
        placeholder="description"
        v-model="description"
        :class="{invalid: ($v.description.$dirty && !$v.description.required),active: ($v.description.$dirty && !$v.description.required)}"
        ></textarea>
        <button class="v-home__close" @click.prevent="isActive = false">X</button>
        <button class="v-home__add" type="submit">Add new</button>
      </form>
      </div>
      <div class="v-home__content">
        <h1 class="v-home__title">Task list</h1>
        <v-home-list
        :key="count"
        />
        <button 
        class="v-home-list-add"
        @click="isActive = true"
        >+</button>
      </div>
    </div>
  </div>

</template>

<script>
import vHomeList from '../components/v-home-list'
import vHeaderHome from '../components/v-header-home.vue'
import {required} from 'vuelidate/lib/validators'
export default {
  name: 'v-home',
  data:()=>({
    isActive:false,
    category:'home',
    date:'',
    description:'',
    task:'',
    count:0
  }),
  components:{
    vHomeList,
    vHeaderHome
  },
  methods:{
    async addNewTask(){
      if(this.$v.$invalid){
        this.$v.$touch()
        return
      }

      try{
        const tasks = await this.$store.dispatch('createTask',{
        task:this.task,
        category:this.category,
        date:this.date,
        description:this.description
      })
      this.category='home'
      this.date='',
      this.description='',
      this.task=''
      console.log(tasks)
      this.count++
      }catch(e){

      }
    },
  },
  validations:{
    task:{required},
    date:{required},
    description:{required}
  },
}
</script>

<style lang="scss" scoped>
p{
  margin: 0;
}
.v-home__form-container{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 99;
  background-color: rgba($color: #000000, $alpha: 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
}
.v-home__form{
  position: relative;
  background-color: #fff;
  width: 600px;
  padding: 50px 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
}
.v-home__form-container--active{
  opacity: 1;
  visibility: visible;
}
.v-home__close,
.v-home__add{
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.v-home__close{
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: red;
  color: #fff;
  font-weight: 700;
  transition: all .5s ease;
  &:hover{
    background-color: rgb(179, 1, 1);
  }
}
.v-home__input{
  width: 300px;
  height: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid #2c3e50;
  padding: 10px;
}
.v-home__input--date{
  width: 300px;
  height: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid #2c3e50;
  padding: 10px;
}
.v-home-category{
  display: flex;
  margin-bottom: 20px;
}
.v-home__area{
  width: 300px;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid #2c3e50;
  padding: 10px;
  resize: none;
}
.v-home__add{
  padding: 15px 30px;
  background-color: #41B883;
  border-radius: 15px;
  color: #fff;
  font-weight: 700;
  transition: all .5s ease;
  &:hover{
    background-color: #276e4e;
  }
}
.v-home__input--radio{
  margin: 10px;
}
.v-home__title{
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
}
.v-home__content{
  padding-top: 50px;
  height: calc(100vh - 140px);
}
.v-home-list-add{
  position: absolute;
  background-color: #41B883;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  bottom: 50px;
  right: 30%;
  color: #fff;
  font-weight: 700;
  font-size: 26px;
  transition: all .5s ease;
  &:hover{
    background-color: #276e4e;
  }
}
.active{
  border-color: red;
}
</style>