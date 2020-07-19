<template>
  <div class="main_box">
    <div class="inner_box">
      <div class="page_result" >[游戏结果页]</div>
      <div class="back" @click="back">&lt;</div>
      <div class="text1">胜利阵营</div>
      <div class="winner_box">
        <div class="winner" v-for="item in winner" :key="item.player_id">{{item.player_name}}---<span>{{item.identity}}</span></div>
      </div>
      <div class="text2">失败阵营</div>
      <div>
        <div class="loser" v-for="item in loser" :key="item.player_id">{{item.player_name}}---<span>{{item.identity}}</span></div>
      </div>
      
      <div class="Leaderboard" @click="toRank">排行榜</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Show',
  data () {
    return {
      room_id:0,
      winner:[],
      loser:[],
    }
  },
  created() {
    this.getRoomID();
    this.receive_res();
  },
  methods: {
   async receive_res(){
     await this.$http.post('getResult',{room_id:this.room_id}).then(function(res){
        console.log(res);
        this.winner = res.body.winner;
        this.loser = res.body.loser;
      })
    },
    getRoomID(){
      console.log(this.$route.params.room_id);
      this.room_id = this.$route.params.room_id;
    },
    back(){
      this.$router.push('userroom');
    },
    toRank(){
      this.$router.push('leaderboard');
    }
  },
}
</script>

<style scoped>
  .main_box{
    width: 100%;
    color: rgb(133, 81, 17);
     background: url("/static/image/night.png");
    background-size: cover;
    height: 720rem;
    border: 1rem solid rgba(255, 255, 255, 0);
  
  }
  .inner_box{
    width: 300rem;
    height: 100%;
    margin: 0rem auto 0 auto;
    border: 1rem solid rgba(252, 252, 252, 0);
    background: url("/static/image/operate.png") no-repeat;
    background-size: cover;
    overflow: scroll;
    position: relative;
  }
  .back{
    width: 40rem;
    height: 40rem;
    position: absolute;
    text-align: center;
    line-height: 40rem;
    top:80rem;
    left: 20rem;
    font-size: 20rem;
    font-weight: 900;
    border-radius: 50%;
    background-color: #F5C973;
  }
  .page_result, .text1, .text2{
    width: 160rem;
    height: 30rem;
    text-align: center;
    line-height: 30rem;
    font-size: 22rem;
    font-weight: bold;
    margin: 20rem auto ;
    color: rgb(29, 28, 27);
    text-shadow: 2rem 2rem 2rem #e2aa69;
  }
  .winner_box{
    height: auto;
  }
  .winner,.loser {
    width: 200rem;
    height: auto;
   border-bottom: 1rem dotted rgba(99, 68, 23, 0.466);
    margin: 10rem auto;
    font-size: 20rem;
    text-align: center;
    line-height: 30rem;
  }
  .Leaderboard{
    text-align: center;
    line-height: 30rem;
    width: 80rem;
    margin-left: 180rem;
    margin-top: 20rem;
    font-size:20rem;
    background: #d38e4098;
    border-radius: 5rem;
    color: #774e20;
  }
</style>
