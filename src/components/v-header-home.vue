<template>
  <div class="home__header">
    <div class="container">
        <nav class="header__menu">
          <ul class="header__menu-list">
            <li class="header__menu-element">
              <div class="header__user-name">{{name}}</div>
            </li>
            <li class="header__menu-element">
              <a class="header__menu-link" href="#" @click.prevent="logout">Go Out</a>
            </li>
          </ul>
        </nav>
      </div>
  </div>
</template>

<script>
export default {
    name:'v-header-home',
    methods:{
      async logout(){
        await this.$store.dispatch('entrance')
        console.log('Вийшов')
        this.$router.push('/login?message=logoout')
      }
    },
    async  mounted(){
      if(!Object.keys(this.$store.getters.info).length){
        await this.$store.dispatch('fetchInfo')
      }
    },
    computed:{
      name(){
        return this.$store.getters.info.name
      }
    }
}
</script>

<style lang="scss">
ul,li{
  list-style: none;
  padding: 0;
}
a{
  color: #2c3e50;
  text-decoration: none;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 15px;
}
.header{
  padding: 10px 0px;
  border-bottom: 1px solid rgba($color: #2c3e50, $alpha: 0.2);
  background-color: #fff;
  &__menu-list{
    display: flex;
    justify-content: flex-end;
    
  }
  &__menu-element{
    &:not(:last-child){
      margin-right: 40px;
    }
  }
  &__menu-link{
    transition: color .5s ease;
    &:hover{
      color:#41B883
    }
  }
}
</style>