<template>
    <div>
      <div class="createroom">
        <div class="header">创建房间</div>
        <div class="content">
          <div class="infor">
            <div class="name">你的昵称</div>
            <input class="name_text" type="text" placeholder="你的昵称" v-model="ownerName">
          </div>
          <div class="infor">
            <div class="name">狼人数量</div>
            <div class="num_chos">
              <button class="sub" @click="sub1">－</button>
              <!-- <input  class="num" type="number" readonly="readonly" v-model.number="wolfNum"> -->
              <div class="num">{{wolfNum}}</div>
              <button class="add" @click="add1">＋</button>
            </div>
          </div>
          <div class="infor">
            <div class="name">村民数量</div>
            <div class="num_chos">
              <button class="sub" @click="sub2">－</button>
              <!-- <input  class="num" type="number" readonly="readonly" v-model.number="villagerNum" min="2" max="3"> -->
              <div class="num">{{villagerNum}}</div>
              <button class="add" @click="add2">＋</button>
            </div>
          </div>
          <div class="infor">
            <div class="name">其他角色</div>
            <div class="otherrole">
              <div>
                <input type="checkbox" class="checkbox" v-model="checkProphet">
                <span>预言家</span>
              </div>
              <div>
                <input type="checkbox" class="checkbox" v-model="checkWitch">
                <span>女巫</span>
              </div>
              <div>
                <input type="checkbox" class="checkbox" v-model="checkHunter">
                <span>猎人</span>
              </div>
            </div>
          </div>
        </div>
        <div class="btn">
          <button class="cancel" @click="sendStatus">取消</button>
          <button class="comfirm" @click="jumpOwner">确认</button>
      </div>
      </div>
      
    </div>
    </template>
    <script>
    export default {
      name: 'CreateRoom',
      data () {
        return {
          createShow:false,
          ownerName:'',
          wolfNum:2,
          villagerNum:2,
          checkProphet:true,
          checkWitch:false,
          checkHunter:true,
        }
      },
      methods: {
        sendStatus(){
          this.$emit('func',this.createShow);
        },
        jumpOwner(){
          this.$router.push('/ownerroom');
        },
        sub1(){
          if (this.wolfNum>2) {
              this.wolfNum=this.wolfNum-1;            
          }else{
            return;
          } 
        },
        add1(){
          if (this.wolfNum<3) {
              this.wolfNum=this.wolfNum+1;            
          }else{
            return;
          }    
        },
        sub2(){
          if (this.villagerNum>2) {
              this.villagerNum=this.villagerNum-1;            
          }else{
            return;
          }         
        },
        add2(){
          if (this.villagerNum<3) {
              this.villagerNum=this.villagerNum+1;            
          }else{
            return;
          }
        }
     }
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
      font-weight: 500;
      height: 43rem;
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
      line-height: 23rem;
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
    .cancel,.comfirm{
      flex:1;
      outline: none;
      border: 0 solid #ebedf0;
      height: 50rem;
      color: black;
      background-color: #fff;
      font-size: 16rem;
    }
    .cancel:active,.comfirm:active{
      color:#fff;
      background-color: #9ED99D;
    }
    .num_chos{
      display: flex;
    }
    .sub,.add{
      border: 0 solid #ebedf0;
      outline: none;
      display: block;
      flex: 1;
      font-size: 16rem;
      width: 35rem;
      height: 29rem;
    }
    .sub:active,.add:active{
      background-color: #fff;
    }
    .add{
      border-radius: 0 4rem 4rem 0;
    }
    .sub{
      border-radius: 4rem 0 0 4rem;
    }
    .num{
      display: block;
      flex: 1;
      text-align: center;
      line-height: 27rem;
      width: 22rem;
      height: 27rem;
      margin: 0 2rem;
      font-size: 14rem;
      background-color: #F2F3F5;
      border: 1rem solid #F2F3F5;
    }
    .checkbox{
      width: 16rem;
      height: 16rem; 
    }
    </style>
    