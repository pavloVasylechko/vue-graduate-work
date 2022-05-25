<template>
  <div class="v-home-list-element">
    <div class="task__check">
        <button 
        class="task__check-btn"
        :class="{'task__check-btn--active':isChecked}"
        @click.prevent="isChecked = !isChecked"
        ></button>
    </div>
    <div class="task__content">
        <ul class="task__list">
            <li class="task__list--element">
                <p 
                class="task__name"
                :class="{'task__name--active':isChecked}"
                >{{oneTask.task}}</p>
                <p class="task__time"
                :class="{'task__time--active':isChecked}"
                >{{oneTask.date}}</p>
                <div 
                class="task__category"
                :class="{'task__category--active':isChecked}"
                >{{oneTask.category}}</div>
                <div class="task__discription"
                :class="{'task__discription--active':isChecked}"
                >{{oneTask.description}}</div>
            </li>
        </ul>
    </div>
    <div class="task__redaction">
        <button class="task__remove">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
    data:()=>({
        isChecked:false
    }),
    props:{
        oneTask:{
            type:Object,
            default:()=>({})
        }
    }
}
</script>

<style scoped lang="scss">
h1,
P{
  margin: 0;
  padding: 0;
}
.v-home-list-element{
  border-radius: 10px;
  border: 1px solid #2c3e50;
  padding: 15px;
  box-sizing: border-box;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}
.task__redaction{
    margin-left: auto;
    display: flex;
    flex-direction: column;
}
.task__check{
    padding-right: 15px;
}
.task__check-btn{
    width: 20px;
    height: 20px;
    border-radius: 100%;
    padding: 0;
    border: 1px solid #2c3e50;
    background-color:transparent;
    cursor: pointer;
}
.task__check-btn--active{
    background-color: rgb(37, 85, 173);
    border: none;
    position: relative;
    transition: all .5s ease;
    &::after{
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        background-image: url('../assets/img/white-check-mark-3-icon-free-white-check-mark-icons-white-check-mark-pngcheck-mark-transparent-background-free-transparent-png-images-pngaaacom.png');
        background-size: cover;
        background-repeat: no-repeat;
        top: 2px;
        left: 3px;
    }
}
.task__name{
    transition: all .5s ease;
}
.task__name--active{
    transition: all .5s ease;
    color: rgb(107, 107, 107);
    text-decoration:line-through;
}
.task__time{
     transition: all .5s ease;
}
.task__time--active{
    transition: all .5s ease;
    color: rgba(107, 107, 107,0.6);
}
.task__category{
    transition: all .5s ease;
}
.task__category--active{
    transition: all .5s ease;
    color: rgba(107, 107, 107,0.6);
}
.task__discription{
    transition: all .5s ease;
}
.task__discription--active{
    transition: all .5s ease;
    color: rgba(107, 107, 107,0.6);
}
.task__remove{
    background-color: red;
    padding: 6px 12px;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
    color: #fff;
    border-radius: 20px;
    font-weight: 700;
    transition: all .5s ease;
    &:hover{
        background-color: rgb(180, 0, 0);
    }

}
</style>