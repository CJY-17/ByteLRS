<template>
  <div class="_box">
    <div class="box_name">
      常规设置
    </div>
    <div class="room">
      <span class="room_name">房间号</span>
      <span class="room_num">1010</span>
    </div>
    <div class="if_mute">
      <span class="mute_text">静音</span>
      <muteButton class="mute_button"></muteButton>
    </div>
    <div class="confess">
      狼人自爆
    </div>
    <div class="if_confirm">
      <span class="not_confirm" @click="cancel">取消</span>
      <span class="confirm" @click="confirm">确认</span>
    </div>
  </div>
</template>

<script>
import muteButton from './mute_button.vue'
export default {
  name: 'generalSetting',
  data () {
    return {
      is_show: true
    }
  },
  components: {
    muteButton
  },
  methods: {
    cancel () {
      this.is_show = false
      this.$emit('cancel', this.is_show)
      console.log('取消')
    },
    confirm () {
      this.is_show = false
      this.$emit('comfirm', this.is_show)
      console.log('确认')
    }
  }
}
</script>
<style>
  ._box {
    width: 300rem;
    height: 250rem;
    border:1rem solid #ebedf0 ;
    border-radius: 30rem;
    overflow: hidden;
    margin: 150rem auto auto auto;
  }

  .box_name,
  .room,
  .if_mute,
  .if_confirm {
    height: 50rem;
    line-height: 50rem;
    width: 100%;
  }

  .box_name,
  .if_mute,
  .room,
  .confess {
    border-bottom: #ebedf0 2rem solid;
  }

  .box_name,
  .confess,
  .if_confirm {
    height: 50rem;
    line-height: 50rem;
    text-align: center;
    font-size: 20rem;
  }
  .box_name{
    background-color: #DDDBDB;
  }
  .if_mute,
  .room {
    font-size: 15rem;
  }
  .room_name,
  .if_mute {
    display: inline-block;
    position: relative;
  }
  .room_name{
    margin-left: 10rem;
  }
  .room_num {
    float: right;
    margin-right: 10rem;
    /* margin-left: 100rem; */
  }
  .if_confirm {
    display: flex;
    overflow: hidden;
  }

  .not_confirm,.confirm {
    border-right: 2rem solid #ebedf0;
    text-align: center;
    flex: 1;
    background-color: #fff;
    color: #000;
  }

  .mute_text{
    display: block;
    margin-left: 10rem;
  }
  .mute_button{
    display: block;
    position:absolute;
    top: 10rem;
    right: 10rem;
  }
  .not_confirm:active,.confirm:active{
    color:#fff;
    background-color: #9ED99D;
  }
</style>
