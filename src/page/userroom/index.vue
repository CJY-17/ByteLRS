<template>
  <div class="box">
      <toplist @change_setting = "jumpSet"  ></toplist>
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
      
      <div class="textarea_box" v-show="textarea_is_show">
        <textarea class="textarea"></textarea>
      </div>
      <div class="ready" @click="next_step"> 准备</div>
      <div class="bottom_box">
        <span class="input_button" @click="input_button_clicked"></span>
        <span class="send" @click="send">发送</span>
      </div>
      <!-- </div> -->
  </div>
</template>

<script>
import toplist from './toplist.vue'
import player from './player.vue'
import generalSetting from './generalSetting'
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
      textarea_is_show: false
    }
  },
  components: {
    toplist,
    player,
    generalSetting
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
    next_step () {
      // this.$router.push({path: '/show'})
    },
    send () {

    }
  }
}
</script>

<style scoped>
  /* 最外层的框 */
  .box{
    width: 100%;
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
    width: 90%;
    height: 120rem;
    margin: 0 auto;
    border-radius: 15rem;
    overflow: hidden;
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
    background-color: coral;
    border: 2rem solid burlywood;
    border-radius: 10rem;
    text-align: center;
    line-height: 40rem;
  }
  .bottom_box{
    position: relative;
    top: 5rem;
  }
  .send{
    display: block;
    font-size: 15rem;
    position: absolute;
    text-align: center;
    line-height: 30rem;
    width: 50rem;
    height: 30rem;
    border-radius: 15rem;
    background-color: burlywood;
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
