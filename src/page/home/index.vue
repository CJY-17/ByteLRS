<template>
  <div class="box">
    <button class="one" @click="createShow=true">创建房间</button>
    <button class="two" @click="joinShow=true">加入房间</button>
    <button class="rule" @click="jumprule">游戏规则</button>
    <div v-show="createShow||joinShow" class="contain"></div>
      <transition name="show">
        <create v-show="createShow" @func="getCreate"></create>
      </transition>
      <transition name="show">
        <join v-show="joinShow" @func="getJoin"></join>
      </transition> 
  </div>
</template>

<script>
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
.one,.two{
    margin: 0 auto;
    color: white;
    font-size: 25rem;
    outline: none;
    display: block;
    height:150rem;
    width:300rem;
    border-radius: 25rem;
    border: 0;
}
.one{
     margin-top: 125rem;
     background-image: linear-gradient(#e66465, #9198e5);
}
.two{
     margin-top: 25rem;
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
  width:120rem;
  display: block;
  margin-left: 200rem;
  margin-top: 100rem;
  font-size: 15rem;
  border: 0;
  outline: none;
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
