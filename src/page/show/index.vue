<template>
  <div>
    <div class="show_box">
    <div class="close">×</div>  
    <div class="inner_box">
      <div class="page_name" >[角色展示页]</div>
      <div class="text">您当前的角色是</div>
      <div class="identity">预言家</div>
      <div class="state">状态：游戏中/已死</div>
      <div class="button">
        <span class="refresh">状态刷新</span>
        <span class="result">查看结果</span>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
export default {
  name: 'Show',
  data () {
    return {}
  }
}
</script>

<style>
  .show_box{
    width: 300rem;
    height: 270rem;
    border: 1rem solid black;
    margin: 150rem auto auto auto;
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
    margin: 0 auto 0 auto;
    border: 1rem solid black;
  }
  .page_name, .text, .identity, .state, .button{
    width: 160rem;
    height: 30rem;
    text-align: center;
    line-height: 30rem;
    font-size: 20rem;
    margin: 20rem auto ;
  }
  .identity{
    font-size: 30rem;
    color: #da66f0;
  }
  .state{
    width: 200rem;
  }
  .button{
    width: 200rem;
  }
  .refresh, .result{
    width: 75rem;
    border: 1rem solid black;
  }
</style>
