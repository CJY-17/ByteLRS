<template>
    <div class="box">
        <h3>角色技能</h3>
        <p>狼人：每天夜里可以杀死一个人。</p>
        <p>女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，
            毒药可以毒杀一名玩家，女巫在每天晚上最多使用
             一瓶药，女巫不可自救</p>
        <p>预言家：每天晚上可以查看一名玩家的身份是好人还是狼人</p>
        <p>平民：没有任何能力，一觉睡到天亮。</p>
        <p>猎人：当且仅当猎人被狼人杀害或被投票放逐时，猎人可以亮出自己的身份牌并指定枪杀一名玩家。</p>
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
  