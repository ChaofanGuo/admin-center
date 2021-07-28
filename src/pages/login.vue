<template>
  <div class="page-container">
    <div class="welcome-message-container">
      <h1>欢迎访问</h1>
      <h2>{{welcomeMessage}}</h2>
    </div>
    <div class="login-form-container">
      <button @click="clickButton">按钮被点了{{clickCount}}下</button>
      <input type="text" v-model="inputUsername" />
      <div>{{inputUsername}}</div>
      <input type="text" v-model="inputPassword"/>
      <div>{{inputPassword}}</div>
    </div>
    <copy-right></copy-right>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import CopyRight from '@/components/copy-right.vue'

@Options({
  components: {
    'copy-right': CopyRight
  }
})
export default class LoginPage extends Vue {
  private welcomeMessage: string = 'Welcome to VUE3 class style ts component'

  private clickCount: number = 0

  private inputUsername: string = ''

  private inputPassword: string = ''

  clickButton () {
    this.clickCount += 1
  }
}
</script>

<style scoped>

</style>
