<template>
  <div class="top_box">
    <span class="return" >
       <span class="return_button" @click.stop="jump">&lt;</span>
    </span>
    <span class="room_info">房间1010</span>
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
  methods: {
    jump () {
      this.$router.push({path: '/home'})
    },
    change_setting () {
      this.is_show = !this.is_show
      this.$emit('change_setting', this.is_show)
    }
  },
  // 让父组件给子组件传值（此时当前组件在父组件中得显示状态）
  props: ['']
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
    border-bottom: 1rem solid #cfcfd3;
  }
  .return,.room_info,.setting{
    flex: 1;
    display: inline-block;
    height: 100%;
  }
  .return {
    font-size: 20rem;
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
