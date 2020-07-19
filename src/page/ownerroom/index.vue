<template>
  <div class="box">
      <toplist @change_setting = "jumpSet" :room_id="room_id"></toplist>
      <div class="player_box">
        <player v-for="(item,index) in players_info" :key="index" v-bind:cplayer_info="item" class="player"></player>
      </div>
      <!-- <div class="general_setting"> -->
      <transition name="show">
      <generalSetting v-show="is_show" class="general_setting"  @cancel="change_setting" @comfirm="change_setting"></generalSetting>
      </transition>
      <div class="chat_box">
        <div class="info_area"></div>
      </div>
      <!-- <div class="input_button" @click="input_button_clicked"></div>
      <div class="textarea_box" v-show="textarea_is_show">
        <textarea class="textarea"></textarea>
      </div> -->
      <!-- </div> -->
      <div class="get_info" @click="get_info" >确认准备</div>
      <div class="start_game" @click="next_step" >开始游戏</div>
  </div>
</template>

<script>
import {Toast} from '../../../static/Toast.js';  
import toplist from '../userroom/toplist.vue'
import player from '../userroom/player.vue'
import generalSetting from '../userroom/generalSetting'
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
      room_id:0,
      identity_data:[],
      role_num:0,
      player_data:[],
    }
  },
  components: {
    toplist,
    player,
    generalSetting
  },
  created() {
    this.receive_data();
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
      this.is
      this.textarea_is_show = !this.textarea_is_show
    },
    //开始游戏，上传角色数据
   async next_step () {
      if (this.player_data.length<this.role_num) {
        Toast("人数不足，无法开始游戏",1500);
      }else{
       await this.$http.post('gamebegin',{player_data:this.player_data}).then(function(res){
        console.log(res);
      });
      this.$router.push({name:'Operate',path: '/operate',params:{room_id:this.room_id}});
      }
      
    },
    //获取当前房间玩家信息，随机分配身份
    async get_info(){
      var player_data;
     await this.$http.post('getPlayerData',{room_id:this.room_id}).then(function(res){
        console.log(res.body.data);
      //  var player_data =res.body.data;
      player_data=res.body.data;
      })
      console.log(player_data);
      if (player_data.length<this.role_num) {
        Toast("玩家未准备好，请等待",1500);
        return;
      }else{
        for (let i = 0; i < this.identity_data.length; i++) {
          player_data[i].identity = this.identity_data[i]; 
      }
      console.log(player_data);
      this.player_data = player_data;
      }
      
    },
    //接收create/again身份数据
    receive_data(){
      console.log(this.$route.params.ownerroom_data);
      const data = this.$route.params.ownerroom_data;
      this.room_id=data.room_id;
      this.role_num = data.role_num;
      // console.log(data);
      console.log(this.role_num);
      console.log(this.room_id);
      // arr.sort(() => Math.random() - 0.5);打乱身份顺序，以便随机分配
      console.log(data.identity_data);
      data.identity_data.sort(() => Math.random() - 0.5);
      this.identity_data = data.identity_data;
      console.log(this.identity_data);
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
    width: 300rem;
    height: 250rem;
    position: absolute;
    top: 0rem;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
    margin: auto;
    z-index: 100;
    background-color: #fff;
  }
  /* 聊天区域  */
  .chat_box{
    width: 80%;
    height: 120rem;
    margin: 0 auto;
    /* position: absolute;
    left: 5%;
    bottom: 0rem; */
    border-radius: 15rem;
    overflow: hidden;
    /* line-height: 200rem; */
    background: rgba(255, 255, 255, 0.74);
  }
  /* 显示消息的区域 */
  .info_area{
    margin: 0rem auto;
    background-color: rgb(17, 15, 37,0.2);
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  /*输入框的样式*/
  .input_area{
    width: 80%;
    height: 10%;
  }
  .input_button{
    width: 20rem;
    height: 20rem;
    background-color: burlywood;
    margin: 10rem 20rem auto auto;
  }
  .get_info{
    font-size: 14rem;
    width: 20%;
    height: 40rem;
    position: absolute;
    left: 40%;
    top: 390rem;
     background-color: #ecb96a;
    border-radius: 10rem;
    text-align: center;
    line-height: 40rem;
    z-index: 1;
  }
  .start_game{
    font-size: 14rem;
    width: 20%;
    height: 40rem;
    position: absolute;
    left: 40%;
    top: 444rem;
    background-color: #ecb96a;
    border-radius: 10rem;
    text-align: center;
    line-height: 40rem;
    z-index: 1;
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
