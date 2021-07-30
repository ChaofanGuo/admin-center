<template>
  <div id="app-container">
    <div id="nav-container">
      <router-link class="nav-item" v-for="route in routes" :to="route.path" :key="route.path">{{route.name}}</router-link>
    </div>
    <div id="view-container">
      <router-view v-slot="{ Component, route }">
        <transition name="slid-left" mode="out-in">
          <div class="router-view-container" :key="route.path">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data () {
    return {
      routes: this.$router.getRoutes()
    }
  },
  mounted () {
    console.log(this.routes)
  }
})
</script>

<style scoped lang="stylus">
//@import "/src/assets/styles/variables.styl"

#app-container
  width 100%
  height 100%

  background-color background-color

  display flex
  flex-direction column

  #nav-container
    width 100%
    padding 5px 10px

    flex none
    display flex
    flex-direction row
    justify-content flex-start
    align-items center

    .nav-item
      padding 5px 10px

  #view-container
    width 100%

    flex auto

    .router-view-container
      width 100%
      height 100%

.slid-left
  &-enter-from
    transform translate(50%)
  &-enter-active
    transition all 0.2s ease
  &-enter-to
    transform translate(0)
  &-leave-from
    transform translate(0)
  &-leave-active
    transition all 0.2s ease
  &-leave-to
    transform translate(-100%)
</style>

<style>
* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
