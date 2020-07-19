<template>
      <div class="show_box">
       <div class="close" @click="change_close">×</div>   
      <div class="inner_box">
        <div class="page_name" >[角色展示页]</div>
        <div class="text">您当前的角色是</div>
        <div class="identity">{{info_arr[0].identity}}</div>
        <div class="state">状态：{{info_arr[0].state}}</div>
        <div class="button">
          <span class="refresh" @click="refresh">状态刷新</span>
          <span class="result" @click="checkres">查看结果</span>
        </div>
      </div>
    </div>  
  </template>
  
  <script>
  export default {
    name: 'Show',
    data () {
      return {
          identity_show:false,
      }
    },
    created() {
      console.log(this.info_arr);
    },
    props: ['info_arr'],
    methods: {
        change_close(){
            this.$emit('func', this.identity_show);
        },
       async refresh(){
         await this.$http.post('getState',{player_id:this.info_arr[0].player_id}).then(function(res) {
            console.log(res);
            this.info_arr[0].state=res.body.data.state;
          })
        },
        checkres(){
          //跳转页面时，传递当前room_id 过去 获取当前房间玩家信息
          this.$router.push({path:'result',name:'Result', params : {room_id:this.info_arr[0].room_id}});
        }
    },
  }
  </script>
  
  <style >
    .box{
     
      height: 720rem;
      width: 100%;
    }
      .show_box{
        width: 100%;
        height: 370rem;
        left: -15rem;
        margin: 30% 0 40% -4%;
        border: 1rem solid rgba(252, 252, 252, 0);
        background: url("/static/image/show.png") no-repeat;
        background-size: cover;
        position: relative;
      }
      .close{
          width: 40rem;
          height: 40rem;
            font-size: 16rem;
            text-align: center;
            line-height: 40rem;
            position: absolute;
            top: 5rem;
            right: 5rem;
        }
      .inner_box{
        width: 200rem;
        height: 100%;
        margin: 50rem auto 0 110rem;
        border: 1rem solid rgba(0, 0, 0, 0);
      }
      .page_name, .text, .identity, .state, .button{
        width: 160rem;
        height: 26rem;
        color: rgb(133, 81, 17);
        text-align: center;
        line-height: 26rem;
        font-size: 20rem;
        margin: 20rem auto ;
      }
      .identity{
        font-size: 32rem;
        color: #290930;
        text-shadow: 3rem 3rem 3rem #e2aa69;
        font-weight: bold;
      }
      .state{
        width: 200rem;
      }
      .button{
        width: 200rem;
      }
      .refresh, .result{
        width: 88rem;
       background: #d38e4098;
        border: 1rem solid rgba(0, 0, 0, 0);
        border-radius: 5rem;
        color: #774e20;
      }
    </style>
  