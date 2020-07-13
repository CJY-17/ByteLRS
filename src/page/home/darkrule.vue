<template>
    <div class="box">
        <h3>夜晚流程</h3>
        <p>1、游戏开始后，首先进入夜晚阶段,分为两个子阶段:上半夜与下半夜</p>
        <p>2、[上半夜] :狼人、预言家、守卫行动(以上角色的能力详见“角色”页面</p>
        <p>3、[下半夜] :女巫、预言家(也就是说预言家和守卫是整夜行动的)。</p>
        <p>4、需要在夜晚行动的角色全部行动完毕后，天亮。村民、猎人等玩家在夜晚不行动。</p>
        <p>5、期间狼人可以自爆立即终止白天流程，狼人30s遗言后，直接进入天黑</p>
        <p>6、 重复夜晚流程和天亮流程直到游戏结束。</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'darkrule',
    data () {
      return {}
    }
  }
  </script>
  
  <style scoped>
  .box{
    font-size: 15rem;
  }
  p,h3{
    padding: 4rem;
      margin: 2rem;
  }
  </style>
  