<template>
    <div>
      <div class="createroom">
        <div class="header">加入房间</div>
        <div class="content">
          <div class="infor">
            <div class="name">你的昵称</div>
            <input class="name_text" type="text" oninput="if(value.length > 4)value = value.slice(0, 4)" placeholder="你的昵称" v-model="userName">
          </div>
          <div class="infor">
            <div class="name">房间号</div> 
            <input class="name_text" type="number" placeholder="房间号" v-model.number="roomNum">
            </div>
          </div>
          <div class="btn">
          <button class="cancel" @click="sendStatus">取消</button>
          <button class="confirm" @click="jumpUser">确认</button>
       </div>
        </div>
    </div>
    </div>
  </template>
  
  <script>
  import {Toast} from '../../../static/Toast.js';
  export default {
    name: 'JoinRoom',
    data () {
      return {
        joinShow:false,
        userName:'',
        roomNum:'',
      }
    },
    created() {
    },
    methods: {
      
      sendStatus(){
        this.$emit('func',this.joinShow);
      },
      //加入房间，判断房间是否存在，判断房间人数是否已满
     async jumpUser(){
     var message;
      var player_id = parseInt(Math.random()*10000);
      sessionStorage.setItem('player_id', player_id);
        if (this.userName==''||this.userName==' ') {
          
          Toast("昵称不能为空，请填写昵称",1500);
        }else if(this.roomNum==''||this.roomNum==' '){
          Toast("房间号不能为空",1500);
        }else{
          await this.$http.post('joinroom',{
                room_id:this.roomNum,
                player_name:this.userName,
                player_id:player_id,
                state:'game',
                win:false,
                rank:0,
                }).then(function(res){ 
                  console.log(res);
                  message = res.body.message;
              })
              console.log(message);
                 if (message=='no room') {
                    Toast("房间或角色出错，请重新确认",1500);
                  }else if(message=='success'){
                    sessionStorage.setItem('room_id', this.roomNum);
                    this.$router.push({name:'UserRoom',path:'/userroom',params:{player_id:player_id,}});
                  }
        }
        // Toast("我是好人",3000)
      }
    },
  }
  </script>
  
  <style scoped>
  .createroom{
    position: fixed;
    top:45%;
    left:50%;
    width:320rem;
    background-color: rgb(221, 219, 219);
    font-size: 16rem;
    border-radius: 16rem;
    transform: translate3d(-50%,-50%,0);
    overflow: hidden;
    transition: 0.3s;
    transition-property: transform,opacity;
    z-index: 80;
  }
  .header{
    height: 43rem;
    font-weight: 500;
    /* padding-top: 24rem; */
    text-align: center;
    line-height: 43rem;
    font-size: 20rem;
  }
  .content{
    display: block;
  }
  .infor{
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10rem 16rem;
    line-height: 24rem;
    font-size: 16rem;
    background-color: #fff;
    color: black;
  }
  .infor::after{
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      right: 0;
      bottom: 0;
      left: 16rem;
      border-bottom: 1rem solid #ebedf0;
      transform: scaleY(.5);
  }
  .name{
    width:90rem;
    flex: none;
    box-sizing: border-box;
  }
  .name_text{
    outline:none;
    font-size: 16rem;
    flex: 1;
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    min-width: 0;
    color: #323233;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: 0;
  }
  .btn{
    position: relative;
    display: flex;
    overflow: hidden;
    user-select: none;
    font-size: 16rem;
  }
  .cancel,.confirm{
    flex:1;
    outline: none;
    border: 0 solid #ebedf0;
    height: 50rem;
    color: black;
    background-color: #fff;
    font-size: 16rem;
  }
  .cancel:active,.confirm:active{
    color:#fff;
    background-color: #9ED99D;
  }
  </style>
  