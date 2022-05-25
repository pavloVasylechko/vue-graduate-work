<template>
      <div class="header">
      <div class="container">
        <nav class="header__menu">
          <ul class="header__menu-list">
            <li 
            class="header__menu-element"
            v-for="link in linkMenu"
            :key="link.title"
            >
              <router-link 
              class="header__menu-link"
              :to="link.url"
              >{{link.title}}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
  data:()=>({
    linkMenu:[
      {title:'Login',url:'/login'},
      {title:'Registration',url:'/registration'},
    ]
  }),
    name:'v-header'
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