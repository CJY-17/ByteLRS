<template>
  <div class="rank" style="">
     
      <div class="header">排行榜</div> 
      <div class="box">
          
          <ul class="title">
                       <li class="number" id="item">排名</li>
              <li class="name" id="item">玩家</li>
     
             <li class="grade" id="item">胜利数</li>
          </ul>
          <div class="scroll">
          <ul class="case"> 
              <li class="list" v-for="(item,index) in items" >
                    <span id="_item">{{index+1}}</span>
                  <span id="_item">{{item.player_name}}</span><span id="_item">{{item.rank}}局</span>
                
                  
              </li>
              <!--
                  <div class="index" id="item">{{index+1}}</div>
                  <div class="name">{{name}}</div>
                  <div class="grade">{{value}}</div>
              </li>-->
              <!--
               <li class="number" id="item">{{index}}</li>
              <li class="name" id="item">{{name}}</li>
              <li class="grade" id="item">{{value}}</li>
              -->
          </ul>
          </div>
          <div class="but">
          <button class="_but" style="width: 80rem;height:40rem;font-size:22rem" @click="jumpIndex">返回</button>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'Rank',
  

  data () {
    return {
    items:[],
    
    }
  },
  created(){
      this.$http.get('getRank').then(function(response){
              this.items=response.body.data;
              console.log("success")
              console.log(response.body)
              }).catch(function(response) {
                  console.log(response)
              })
  },
  methods: {
    jumpIndex(){
    this.$router.push('result')
  },/*
  getRank:function(){
      this.$http.get('getRank').then(function(response){
              this.items=response.body.data;
              console.log(response.body)
              }).catch(function(response) {
                  console.log(response)
              })
          } 
            /*
this.$http.get(this.apiUrl)
  .then((response) => {
    this.$set('items', response.data)
  })
  .catch(function(response) {
    console.log(response)
  })*/
}


}
</script>

<style scoped>

.rank{
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 812rem;
  font-size: 30rem;
  font-family: cursive;
  background:url("/static/image/night.png") no-repeat;
   background-size: cover;
   overflow: hidden;
}

.header{
  width: auto;
  height: 16%;
  text-align:center;
  font-size: 80rem;
 font-weight: bold;
 font-family: cursive;
 margin-top: 20rem;
 color: rgb(194, 186, 186);
 text-shadow: 4rem 4rem 4rem #834c0e;
}

.box{
  width: 100%;
  text-align:center;
  margin: auto;
  height: 80%;
   background:url("/static/image/rankBg (1) (1).png") no-repeat;
  margin-top: -20rem;
  background-size:100% 50%;

  
  
}


.title {
  width: auto;
  display:flex;
  text-align: center;
  justify-content: center;
  height: 40rem;
  margin-bottom: 10rem;
  margin-top: 24rem;

  }

.title #item{
  
  color: rgb(133, 81, 17);
  list-style:none;
  font-size: 32rem;
  width: 33%;

  text-decoration:underline;
}
.case{
  width: 100%;
  height: 50%;

}
.scroll{
overflow:scroll;
height: 36%;

}
.list{
  width: 100%;
  display:flex;
  justify-content: center;
  height: 40rem;
  margin-bottom: 10rem;
  
}
#_item{
  display:block;
  margin: 40rem,10rem;
  width: 33%;
  color: rgb(133, 81, 17);
  font-weight: bolder;
  
}
.but{
  margin-bottom: 30%;
  bottom: 0;
  position: fixed;
  text-align: center;
  width: 100%;
}
._but{
  border-radius: 8rem;
  background: #f8f4f3c4;
  color: #494542;
  line-height:30rem;
  vertical-align: middle;
  border:1rem solid rgb(206, 158, 158);
}

</style>