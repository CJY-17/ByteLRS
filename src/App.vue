<template>
  <div id="app">
    <transition name="into" mode="out-in">
    <router-view/>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.into-enter-active,.into-leave-active{
  transition: 0.7s;
  transition-property: transform,opacity;
}
.into-enter{
  opacity: 0;
  transform: translateX(375rem);
}
.into-leave-to{
  opacity: 0;
  transform: translateX(-375rem);
}
#app{
  /* height: 667rem; */
  /* width: 100%;
  height: 100%; */
}
</style>
