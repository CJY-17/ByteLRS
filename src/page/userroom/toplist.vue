<template>
  <div class="top_box">
    <span class="return" >
       <span class="return_button" @click.stop="jump">&lt;</span>
    </span>
    <span class="room_info">房间{{room_id}}</span>
    <span class="setting">
      <span class="setting_button" @click.stop="change_setting">...</span>
    </span>
  </div>
</template>
<script>
export default{
  name: 'toplist',
  data () {
    return {
      is_show: false
    }
  },
  props:['room_id'],
  methods: {
    jump () {
      this.$router.push({path: '/home'})
    },
    change_setting () {
      this.is_show = !this.is_show
      this.$emit('change_setting', this.is_show)
      this.is_show=false;
    }
  },
  // 让父组件给子组件传值（此时当前组件在父组件中得显示状态）
}

</script>
<style>
  .top_box {
    display: flex;
    height: 49rem;
    width: 100%;
    line-height: 49rem;
    border-top: 0rem;
    align-items: center;
    text-align: center;
    border-bottom: 1rem solid #4949a0;
    color: rgb(252, 248, 248);
  }
  .return,.room_info,.setting{
    flex: 1;
    display: inline-block;
    height: 100%;
  }
  .return {
    font-size: 20rem;
    color: rgb(250, 249, 249);
  }
  .return_button{
    display: block;
    width: 49rem;
  }
  .setting {
    position: relative;
    line-height: 49rem;
    font-size: 20rem;
  }
  .setting > span,.return > span{
    display: block;
    position: absolute;
    width: 50rem;
    text-align: center;
  }
  .room_info {
    font-size: 20rem;
  }
  .setting > span{
    position: absolute;
    right: 0rem;
  }
</style>
