<template>
<div>
  <div class="createroom">
    <div class="header">创建房间</div>
    <div class="content">
      <div class="infor">
        <div class="name">你的昵称</div>
        <input class="name_text" type="text" placeholder="你的昵称" >
      </div>
      <div class="infor">
        <div class="name">狼人数量</div>
        <div class="num_chos">
          <button class="sub">－</button>
          <input  class="num" type="text" value="2">
          <button class="add">＋</button>
        </div>
      </div>
      <div class="infor">
        <div class="name">村民数量</div>
        <div class="num_chos">
          <button class="sub">－</button>
          <input  class="num" type="text" value="2">
          <button class="add">＋</button>
        </div>
      </div>
      <div class="infor">
        <div class="name">其他角色</div>
        <div class="otherrole">
          <div>
            <input type="checkbox" class="checkbox" checked="checked">
            <span>预言家</span>
          </div>
          <div>
            <input type="checkbox" class="checkbox" checked="checked">
            <span>女巫</span>
          </div>
          <div>
            <input type="checkbox" class="checkbox" checked="checked">
            <span>猎人</span>
          </div>
        </div>
      </div>
    </div>
    <div class="btn">
      <button class="cancel">取消</button>
      <button class="comfirm">确认</button>
  </div>
  </div>
  
</div>
</template>

<script>
export default {
  name: 'CreateRoom',
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
.num_chos{
  display: flex;
}
.sub,.add{
  border: 0 solid #ebedf0;
  outline: none;
  display: block;
  flex: 1;
  font-size: 16rem;
}
.sub:active,.add:active{
  background-color: #fff;
}
.add{
  border-radius: 0 4rem 4rem 0;
}
.sub{
  border-radius: 4rem 0 0 4rem;
}
.num{
  display: block;
  flex: 1;
  width: 22rem;
  height: 22rem;
  margin: 0 2rem;
}
.checkbox{
  width: 16rem;
  height: 16rem;
  
}
</style>
