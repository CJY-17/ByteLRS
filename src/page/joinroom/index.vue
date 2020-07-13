<template>
  <div>
    <div class="createroom">
      <div class="header">加入房间</div>
      <div class="content">
        <div class="infor">
          <div class="name">你的昵称</div>
          <input class="name_text" type="text" placeholder="你的昵称" >
        </div>
        <div class="infor">
          <div class="name">房间号</div> 
          <input class="name_text" type="text" placeholder="房间号" >
          </div>
        </div>
        <div class="btn">
        <button class="cancel">取消</button>
        <button class="comfirm">确认</button>
     </div>
      </div>
    
  </div>
  </div>
</template>

<script>
export default {
  name: 'UserRoom',
  data () {
    return {}
  }
}
</script>

<style scoped>
.createroom{
  position: fixed;
  top:45%;
  left:50%;
  width:320rem;
  background-color: rgb(221, 219, 219);
  font-size: 16rem;
  border-radius: 16rem;
  transform: translate3d(-50%,-50%,0);
  overflow: hidden;
  transition: 0.3s;
  transition-property: transform,opacity;
  z-index: 80;
}
.header{
  font-weight: 500;
  padding-top: 24rem;
  text-align: center;
  line-height: 24rem;
  font-size: 20rem;
}
.content{
  display: block;
}
.infor{
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10rem 16rem;
  line-height: 24rem;
  font-size: 16rem;
  background-color: #fff;
  color: black;
}
.infor::after{
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 16rem;
    border-bottom: 1rem solid #ebedf0;
    transform: scaleY(.5);
}
.name{
  width:90rem;
  flex: none;
  box-sizing: border-box;
}
.name_text{
  outline:none;
  font-size: 16rem;
  flex: 1;
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  min-width: 0;
  color: #323233;
  line-height: inherit;
  text-align: left;
  background-color: transparent;
  border: 0;
  resize: 0;
}
.btn{
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  font-size: 16rem;
}
.cancel,.comfirm{
  flex:1;
  outline: none;
  border: 0 solid #ebedf0;
  height: 50rem;
  color: black;
  background-color: #fff;
  font-size: 16rem;
}
.cancel:active,.comfirm:active{
  color:#fff;
  background-color: #9ED99D;
}
</style>
