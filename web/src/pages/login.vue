<template>
  <div class="page-container">
    <div class="welcome-message-container">
      <h1>欢迎访问</h1>
      <h2>{{welcomeMessage}}</h2>
    </div>
    <div class="login-form-container">
      <div class="login-form">
        <div class="form-row">
          <custom-input v-model="valueUsername" placeholder="请输入账户" :errorMessage="errorMessageUsername"></custom-input>
        </div>
        <div class="form-row">
          <custom-input v-model="valuePassword" placeholder="请输入密码" :error-message="errorMessagePassword"></custom-input>
        </div>
        <div class="form-row">
          <div class="button-container">
            <custom-button @on-click="signUpHandler">注册</custom-button>
            <custom-button type="primary" @on-click="loginHandler">登录</custom-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import CustomInput from '@/components/custom-field/input.vue'
import CustomButton from '@/components/custom-field/button.vue'

@Options({
  components: {
    'custom-input': CustomInput,
    'custom-button': CustomButton
  }
})
export default class LoginPage extends Vue {
  private welcomeMessage: string = 'Welcome to VUE3 class styles ts component'

  private clickCount: number = 0

  private valueUsername: string = ''

  private errorMessageUsername: string = ''

  private valuePassword: string = ''

  private errorMessagePassword: string = ''

  clickButton () {
    this.clickCount += 1
  }

  signUpHandler () {
    this.errorMessageUsername = ''
    this.errorMessagePassword = ''
  }

  loginHandler () {
    let valid = true
    if (this.valueUsername.length === 0) {
      this.errorMessageUsername = '请输入账户'
      valid = false
    }
    if (this.valuePassword.length === 0) {
      this.errorMessagePassword = '请输入密码'
      valid = false
    }

    if (valid) {
      alert('about to login to the system')
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-form-container
  width 35%
  padding 10px
  margin 0 auto
  border-radius 6px

  background-color #ffffff

  .login-form

    .form-row
      width 100%
      padding 10px 0
      margin-bottom 5px

      &:last-child
        padding-bottom 0
        margin-bottom 0

    .button-container
      width 100%

      display flex
      flex-direction row
      justify-content space-between
      align-items center

      div
        width 48%
</style>
