<template>
  <div>
    <div class="player">
      <div class="serial_num">{{cplayer_info.id}}</div>
      <div class="player_name">{{cplayer_info.name}}</div>
      <div class="is_ready">{{cplayer_info.state}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'player',
  data () {
    return {
      player_info: ''
    }
  },
  components: {
  },
  props: ['cplayer_info']
}
</script>

<style>
  .player {
    width: 80rem;
    height: 100rem;
    border-radius: 10rem;
    background-color: #5755be;
    display: inline-block;
  }
  .serial_num {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background-color:#acbdf4;
    border: 1rem solid #5330b6;
    font-size: 10rem;
    text-align: center;
    line-height: 20rem;
  }
  .player_name {
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    background-color:#33307d;
    margin: 0 auto;
    font-size: 10rem;
    text-align: center;
    line-height: 40rem;
  }
  .is_ready {
    width: 60rem;
    height: 20rem;
    border-radius: 10rem;
    margin: 0 auto;
    margin-top: 10rem;
    font-size: 10rem;
    color: white;
    text-align: center;
    line-height: 20rem;
  }
</style>
