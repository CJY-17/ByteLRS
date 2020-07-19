<template>
    <div class="box">
        <div class="title_box">
            <div class="back" @click="jump">
                <div class="text">&lt;</div>
            </div>
            <div class="title">游戏规则</div>
        </div>
        <div class="list">
            <router-link class="list_text" tag="div" to="/rule/dayrule">白天流程</router-link>
            <router-link class="list_text" tag="div" to="/rule/darkrule">夜晚流程</router-link>
            <router-link class="list_text" tag="div" to="/rule/skill">角色技能</router-link>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="table_list">
            <h3>人数配置</h3>
            <table border="1" class="table">
                <tr>
                    <th>玩家人数</th>
                    <th>狼人数量</th>
                    <th>神职数量</th>
                    <th>平民数量</th>
                </tr>
                <tr>
                    <th>6</th>
                    <th>2</th>
                    <th>2</th>
                    <th>2</th>
                </tr>
                <tr>
                    <th>7</th>
                    <th>2</th>
                    <th>2</th>
                    <th>2</th>
                </tr>
                <tr>
                    <th>8</th>
                    <th>3</th>
                    <th>3</th>
                    <th>2</th>
                </tr>
            </table>
        </div>
    </div>
  </template>
  
  <script>
  import dayrule from './dayrule.vue';
  import darkrule from './darkrule.vue'
  export default {
    name: 'rule',
    data () {
      return {}
    },
    methods: {
        jump(){
            this.$router.push('/home')
        }
    },
  }
  </script>
  
  <style scoped>
    .box{
      position: relative;
      background-color:#06063a ;
      width: 100%;
      height: 720rem;
      color: rgb(216, 212, 212);
    }
  .title_box{
      width: 100%;
      height: 55rem;
      display: flex;
      background-color: #06063a;
      align-items: center;
  }
  .back{
      flex: 1;
      font-size: 20rem;
      height: 55rem;
      position: relative;
  }
  .title{
      flex: 1.5;
      font-size: 20rem;
  }
  .text{
      position: absolute;
      width: 50rem;
      height: 50rem;
      text-align: center;
      line-height: 48rem;
      left: 20rem;
      top:0rem;
      
  }
  .list{
      display: flex;
      width: 100%;
      background-color: #06063a;
      border: 1rem solid rgb(155, 153, 153);
      
  }
  .list_text{
      flex: 1;
      font-size: 17rem;
      margin-left: 30rem;
      margin-right: 25rem;
      color: #C5AAA3;
      width: 40rem;
      border-radius: 5rem;
  }
  .content{
      height:100%;
  }
  .table_list{
      position: absolute;
      width: 360rem;
      bottom: 0;
      font-size: 14rem;    
  }
  .table{
      width: 375rem;
  }
  .router-link-active{
      background-color: #D1BBBA;
      color: rgb(75, 109, 100);
      font-weight: 500;
  }
  </style>
  