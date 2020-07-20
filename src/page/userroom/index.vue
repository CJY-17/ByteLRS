<template>
  <div class="box">
      <toplist @change_setting = "jumpSet" :room_id="room_id" ></toplist>
      <div class="player_box">
        <player v-for="(item,index) in players_info" :key="index" v-bind:cplayer_info="item" class="player"></player>
      </div>
      <transition name="show">
      <generalSetting v-show="is_show" class="general_setting"  @cancel="change_setting" @comfirm="change_setting"></generalSetting>
      </transition>
      <div class="chat_box">
        <div class="info_area"></div>
      </div>      
      <div class="textarea_box" v-show="textarea_is_show">
        <textarea class="textarea"></textarea>
      </div>
      <div class="ready" @click="next_step"> 查看身份</div>
      <div class="bottom_box">
        <span class="input_button" @click="input_button_clicked"></span>
        <span class="send" @click="send">发送</span>
      </div>
      <transition name="show">
        <show v-show="identity_show" @func="close" class="identity_show" :info_arr="info_arr"></show>
      </transition>
  </div>
</template>

<script>
import {Toast} from '../../../static/Toast.js'; 
import toplist from './toplist.vue'
import player from './player.vue'
import generalSetting from './generalSetting'
import show from './show'
export default {
  name: 'OwnerRoom',
  data () {
    return {
      //  玩家人数
      players_num: 0,
      //  玩家信息
      players_info: [
        {id: 1, name: '1', state: '准备中..'},
        {id: 2, name: '2', state: '准备中..'},
        {id: 3, name: '3', state: '准备中..'},
        {id: 4, name: '4', state: '准备中..'},
        {id: 5, name: '5', state: '准备中..'},
        {id: 6, name: '6', state: '准备中..'},
        {id: 7, name: '7', state: '准备中..'},
        {id: 8, name: '8', state: '准备中..'}
      ],
      is_show: false,
      textarea_is_show: false,
      identity_show:false,
      player_id:0,
      info_arr:[],
      room_id:0,
    }
  },
  components: {
    toplist,
    player,
    generalSetting,
    show,
  },
  created() {
   this.receive_playerID();
   this.room_id= sessionStorage.getItem('room_id');
  },
  methods: {
    jumpSet (isShow) {
      this.is_show = isShow
    },
    change_setting (isShow) {
      this.is_show = isShow
      console.log('isShow改变了')
    },
    input_button_clicked () {
      this.textarea_is_show = !this.textarea_is_show
    },
    close(identity_show){
      this.identity_show= identity_show;
    },
   async next_step () {
     console.log(this.player_id);
     const player_id = this.player_id;
     await this.$http.post('getPlayerData',{player_id,}).then(function (res) {
        console.log(res);
        if (res.body.data[0].identity==undefined) {
          Toast("请等待房主开始游戏",1500);
      }else{
        this.info_arr = res.body.data;
        this.identity_show = true;
      }
        
      })
      
      
      
    },
    send () {

    },
    receive_playerID(){
      const id=sessionStorage.getItem('player_id');
      console.log(id);
      // sessionStorage.getItem 获取到的是字符串  需要转换
      this.player_id = parseInt(id);
      console.log(this.player_id);
    }
  }
}
</script>

<style scoped>
  /* 最外层的框 */
  .box{
    width: 100%;
    background: url("/static/image/night.png");
    background-color: #06063a;
    background-size: cover;
    height: 720rem;
  }
  /* 中间的玩家框 */
  .player_box{
    margin: 0 auto;
    display: flex;
    height: 450rem;
    width: 80%;
    flex-direction: column;
    flex-wrap: wrap;
    align-content:space-between;
    justify-content: space-around;
  }
  .player{
    /* margin: 8rem; */
    /* flex: 1; */
  }
  /* 常规设置 */
  .general_setting{
    background-color: #fff;
  }
  .general_setting,.identity_show{
    /* width: 300rem;
    height: 250rem; */
    position: absolute;
    top: 0rem;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
    /* margin: auto; */
    z-index: 100;
  }
  
  /* 聊天区域  */
  .chat_box{
    width: 80%;
    height: 120rem;
    margin: 0 auto;
    border-radius: 15rem;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.74);
  }
  /* 显示消息的区域 */
  .info_area{
    margin: 0rem auto;
    background-color: rgb(17, 15, 37,0.2);
    width: 100%;
    height: 100%;
  }
  /*输入框的样式*/
  .input_area{
    width: 80%;
    height: 10%;
  }
  .input_button{
    display: block;
    position: absolute;
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    background-color: burlywood;
    margin-left: 320rem;
  }
  .textarea_box{
    position: absolute;
    top: 30%;
    left: 10%;
    width: 80%;
    height: 200rem;
    /* background-color: cadetblue; */
  }
  .textarea{
    margin: 10% auto auto 15%;
    opacity: 0.7;
    background:white ;
    width: 70%;
    height: 45%;
    font-size: 24rem;
    font-weight: 1000;
  }
  .ready{
    font-size: 14rem;
    width: 20%;
    height: 40rem;
    position: absolute;
    left: 40%;
    top: 450rem;
    background-color: #ecb96a;
    
    border-radius: 10rem;
    text-align: center;
    line-height: 40rem;
  }
  .bottom_box{
    position: relative;
    top: 5rem;
    background-color: #06063a;
    height: auto;
    display: block;
  }
  .send{
    display: block;
    font-size: 15rem;
    position: absolute;
    text-align: center;
    line-height: 30rem;
    width: 50rem;
    height: 30rem;
    border-radius: 5rem;
    color: rgb(255, 254, 254);
   border: 2rem solid #ecb96a;
    margin-left: 250rem;
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
</style>
