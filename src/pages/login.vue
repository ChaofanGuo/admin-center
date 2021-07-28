<template>
  <div class="page-container">
    <div class="welcome-message-container">
      <h1>欢迎访问</h1>
      <h2>{{welcomeMessage}}</h2>
    </div>
    <div class="login-form-container">
      <div class="login-form">
        <custom-input v-model="inputUsername" placeholder="请输入用户名"></custom-input>
      </div>
      <div>{{inputUsername}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import CustomInput from '@/components/custom-field/input.vue'

@Options({
  components: {
    'custom-input': CustomInput
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
