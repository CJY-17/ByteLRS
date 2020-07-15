<template>
  <div class="box">
      <toplist @change_setting = "jumpSet"  ></toplist>
      <div class="player_box">
        <player v-for="(item,index) in players_info" :key="index" v-bind:cplayer_info="item" class="player"></player>
      </div>
      <!-- <div class="general_setting"> -->
      <generalSetting v-show="is_show" class="general_setting"  @cancel="change_setting" @comfirm="change_setting"></generalSetting>
      <div class="chat_box">
        <div class="info_area"></div>
      </div>
      <!-- <div class="input_button" @click="input_button_clicked"></div>
      <div class="textarea_box" v-show="textarea_is_show">
        <textarea class="textarea"></textarea>
      </div> -->
      <!-- </div> -->
      <div class="start_game" @click="next_step" >开始游戏</div>
  </div>
</template>

<script>
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
      this.is
      this.textarea_is_show = !this.textarea_is_show
    },
    next_step () {
      this.$router.push({path: '/show'})
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
    /* position: absolute;
    left: 5%;
    bottom: 0rem; */
    border-radius: 15rem;
    overflow: hidden;
    /* line-height: 200rem; */
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
  .start_game{
    font-size: 14rem;
    width: 20%;
    height: 40rem;
    position: absolute;
    left: 40%;
    top: 444rem;
    background-color: coral;
    border: 2rem solid burlywood;
    border-radius: 10rem;
    text-align: center;
    line-height: 40rem;
    z-index: 1;
  }
</style>
