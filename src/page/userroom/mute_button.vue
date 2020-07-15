<template>
  <div class="onoffswitch">
    <!-- 开关默认关闭 -->
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch">
    <label class="onoffswitch-label" for="myonoffswitch">
      <span class="onoffswitch-inner"></span>
      <span class="onoffswitch-switch"></span>
    </label>
  </div>
</template>
<script>
export default {
  name: 'muteButton',
  data () {
    return {}
  }
}
</script>
<style>
  .onoffswitch {
    width: 70rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  .onoffswitch-checkbox {
    display: none;
  }
  .onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2rem solid #E3E3E3;
    border-radius: 36rem;
  }
  .onoffswitch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
  }
  .onoffswitch-inner:before,
  .onoffswitch-inner:after {
    display: block;
    float: left;
    width: 50%;
    height: 24rem;
    padding: 0;
    line-height: 24rem;
    font-size: 16rem;
    color: white;
    font-family: Trebuchet, Arial, sans-serif;
    font-weight: bold;
    box-sizing: border-box;
  }
  .onoffswitch-inner:before {
    content: "on";
    padding-left: 10rem;
    background-color: #FFFFFF;
    color: #27A1CA;
    text-align: left;
  }
  .onoffswitch-inner:after {
    content: "off";
    padding-right: 10rem;
    background-color: #FFFFFF;
    color: #666666;
    text-align: right;
  }
  .onoffswitch-switch {
    display: block;
    width: 25rem;
    margin: 0rem;
    background: #A1A1A1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40rem;
    border: 2rem solid #E3E3E3;
    border-radius: 36rem;
    transition: all 0.3s ease-in 0s;
  }
  .onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-inner {
    margin-left: 0;
  }
  .onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-switch {
    right: 0rem;
    background-color: #27A1CA;
  }
</style>
