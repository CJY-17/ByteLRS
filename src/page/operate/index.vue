<template>
  <div class="main_box">
    <div class="inner_box">
      <div class="page_operate" >[上帝操纵页]</div>
      <div class="role_box">
        <div class="role" v-for="item in player_data" :key="item.player_id"><span class="text">{{item.player_name}}是{{item.identity}}</span><span class="out" @click="out(item.player_id)">出局</span></div>
      </div>
      <div class="endbox">
        <div class="btn" @click="good_win">好人获胜</div>
        <div class="btn" @click="bad_win">狼人获胜</div>
        <div class="btn" @click="again">再来一局</div>
        <div class="btn" @click="gameover">游戏结束</div>
      </div>
     
    </div>
  </div>
</template>

<script>
import {Toast} from '../../../static/Toast.js'; 
export default {
  name: 'Operate',
  data () {
    return {
      //想办法储存room_id在本地（优化）？？？
      room_id:0,
      player_data:[],
      ownerroom_data:{},
    }
  },
  methods: {
   async getPlayers(){
      this.room_id = this.$route.params.room_id;
      console.log(this.room_id);
     await this.$http.post('getPlayerData',{room_id:this.room_id}).then(function(res) {
        console.log(res);
        this.player_data = res.body.data;
      })
    },
   async out(player_id){
      console.log(player_id);
      await this.$http.post('updateState',{player_id}).then(function(res){
        console.log(res);
      })
      Toast("该玩家已经出局",1500);
    },
    //客户端的数组传到服务端处理会出现数据对应不正确报错
  async good_win(){
   await this.$http.post('good_win',{room_id:this.room_id}).then(function(res){
      console.log(res);
    })
   },
   async bad_win(){
   await this.$http.post('bad_win',{room_id:this.room_id}).then(function(res){
      console.log(res);
    })
   },
   //再来一局
   again(){
     var identity_data=[];
     for (let i = 0; i < this.player_data.length; i++) {
       identity_data.push(this.player_data[i].identity);
     }
     this.ownerroom_data.room_id = this.player_data[0].room_id;
     this.ownerroom_data.identity_data = identity_data;
     this.ownerroom_data.role_num = this.player_data.length;
     this.$router.push({path:'owerroom',name:'OwnerRoom', params : {ownerroom_data:this.ownerroom_data}});
   },
   gameover(){
    this.$router.push('home');
   }
   },
   created() {
    this.getPlayers();
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
    border: 1rem solid white;
    overflow: hidden;
  }
  .inner_box{
    width: 350rem;
    height: 80%;
    margin: 50rem auto 0 auto;
    border: 1rem solid rgba(252, 252, 252, 0);
    background: url("/static/image/s_bg (1).png") no-repeat;
    background-size: cover;
  }
  .page_operate{
    width: 160rem;
    height: 30rem;
    text-align: center;
    line-height: 30rem;
    font-size: 20rem;
    margin: 20rem auto ;
     
  }
  .role_box{
    height: auto;
    position: relative;
  }
  .role{
    display: flex;
    width: 200rem;
    height: 30rem;
    border-bottom: 1rem dotted rgba(99, 68, 23, 0.466);
    margin: 10rem auto;
    font-size: 20rem;
    text-align: center;
    line-height: 30rem;
    overflow: hidden;
  }
  .text{
    flex: 3;
  }
  .out{
    flex: 1;
    width: 40rem;
    height: 30rem;
    border-left: 1rem solid rgba(105, 82, 19, 0);
    line-height: 27rem;
  }
  .Leaderboard{
    width: 100rem;
    margin-left: 180rem;
    margin-top: 20rem;
  }
  .endbox{
    width: 80%;
    display: flex;
    text-align: center;
    line-height: 50rem;
    margin: 20rem auto;
    font-size: 14rem;
  }
  .btn{
    width: 80rem;
    flex: 1;
    border: 1rem solid rgba(112, 80, 19, 0.664);
  }
</style>
