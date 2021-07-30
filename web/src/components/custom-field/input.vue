<template>
  <div :class="['input-wrapper', {error: hasError, disabled}]" @click="wrapperClickHandler">
    <div class="icon-container" v-if="showIcon">
      <img class="icon" :src="icon" alt="">
    </div>
    <div class="input-container">
      <div :class="['placeholder', {up: goUp}]">{{placeholder}}</div>
      <input
          ref="input"
          :value="modelValue"
          type="text"
          class="input"
          @focus="focusHandler"
          @input="inputHandler"
          @blur="blurHandler"/>
      <div class="error-message">{{errorMessage}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  data () {
    return {
      inputFocused: false
    }
  },
  computed: {
    hasError (): boolean {
      return this.errorMessage.length > 0
    },
    showIcon (): boolean {
      return this.icon.length > 0
    },
    goUp (): boolean {
      return this.modelValue.length > 0 || this.inputFocused
    }
  },
  methods: {
    wrapperClickHandler () {
      const input = this.$refs.input as HTMLInputElement
      input.focus()
    },
    focusHandler () {
      this.inputFocused = true
    },
    inputHandler (event: InputEvent) {
      let target = event.target as HTMLInputElement
      this.$emit('update:modelValue', target.value)
    },
    blurHandler () {
      this.inputFocused = false
    }
  }
})
</script>

<style lang="stylus" scoped>
*
  box-sizing border-box

.input-wrapper
  width 100%
  border 1px solid border-color-dark
  border-radius 5px

  font-size 1rem

  position relative

  display flex
  flex-direction row
  justify-content flex-start
  align-items center

  &.error
    border-color error-color

    .input-container
      .placeholder
        color error-color

      .error-message
        max-width 150px

  .icon-container
    height 100%
    width @height

    flex none

    .icon
      width 80%
      height 80%

  .input-container
    padding 14px

    flex auto

    .placeholder
      padding 0 5px

      background-color #ffffff

      color font-color-sub
      font-size 1em
      line-height 1em

      position absolute
      bottom 14px

      transition all 0.2s ease

      &.up
        bottom calc(100% - 0.5em)

    .input
      width 100%

      color font-color
      font-size 1em
      line-height 1em


      border 0
      outline none

    .error-message
      max-width 0
      padding 0 5px

      white-space nowrap
      overflow hidden

      position absolute
      bottom -0.5em
      right 10px

      background-color #ffffff

      color error-color

      transition all 0.3s ease
</style>
