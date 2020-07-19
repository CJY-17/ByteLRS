<template>
  <div class="home">
    <div class="header">狼人杀</div> 
    <div class="box">
      <div class="room">
      <button class="one" @click="createroom">创建房间</button>
      <button class="two" @click="joinroom">加入房间</button>
      </div>
      <button class="rule" @click="jumprule">游戏规则</button>
      <div v-show="createShow||joinShow" class="contain"></div>
        <transition name="show">
          <create v-show="createShow" @func="getCreate"></create>
        </transition>
        <transition name="show">
          <join v-show="joinShow" @func="getJoin"></join>
        </transition> 
    </div>
    </div>
</template>

<script>
import {Toast} from '../../../static/Toast.js';
import create from './create.vue';
import join from './join.vue';    
export default {
  name: 'Home',
  data () {
    return {
      createShow:false,
      joinShow:false,
    }
  },
  components: {
    create,
    join,
  },
  methods: {
    //点击获取已经存在的room_id，与随机room_id比对
    //第一次请求有闲置状态，会请求失败（没有建立链接），2-3秒后建立成功（需要再次请求）
    async createroom(){
      this.createShow = true;
    },
    async joinroom(){
      this.joinShow = true;
    },
    getCreate(createShow){
      this.createShow=createShow;
    },
    getJoin(joinShow){
      this.joinShow=joinShow;
    },
    jumprule(){
      this.$router.push('/rule')
    }
  },
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 720rem;
  background: url("/static/image/night.png") no-repeat;
  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header{
    width: auto;
    height: 20%;
    text-align:center;
    font-size: 100rem;
   font-weight: bold;
   font-family: cursive;
   padding-top: 50rem;
   text-shadow: 6rem 6rem 6rem #432557;
  color: #f8f7f7;
}
.box{
  height: 80%;
  
}
.room{
  margin-top: 30rem;
  height: 100%;
}
.one,.two{
    margin: 20rem auto;
    color: white;
    font-size: 25rem;
    outline: none;
    display: block;
    height:50rem;
    width:40%;
    border-radius: 25rem;
    border: 0;
}
.one{
     
     background-image: linear-gradient(#e66465, #9198e5);
}
.two{
     margin-top: 40rem;
     background-image: linear-gradient(#0aa37d, #2b6b3b);
}
.one:active{
  background-image: linear-gradient(#c08f8f, #c08f8f);
}
.two:active{
  
  background-image: linear-gradient(#188f71, #188f71);
}
.rule:active{
  background-color:#9ED99D ;
}
.rule{
  position: relative;
  height: 30rem;
  width:100rem;
  display: block;
  margin-left: 250rem;
  margin-top: 100rem;
  font-size: 15rem;
  border: 0;
  outline: none;
  margin-bottom: 100rem;
  bottom: 400rem;
  background: #08083c;
  color: #c5c191;
  border-radius: 10rem;
}
.show-enter-active,.show-leave-active{
  transition:all 0.7s;
}
.show-enter,.show-leave-to{
  opacity: 0;
}
.show-enter-to,.show-leave{
  opacity: 1;
}
.contain{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
}
</style>
