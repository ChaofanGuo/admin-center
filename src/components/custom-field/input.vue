<template>
  <div class="custom-input-container">
    <div class="icon-container" v-if="showIcon">
      <img class="icon" :src="icon" alt="">
    </div>
    <div class="input-container">
      <div :class="['placeholder', {up: goUp}]">{{placeholder}}</div>
      <input :value="modelValue" type="text" class="input" @focus="focusHandler" @input="inputHandler" @blur="blurHandler" />
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
    }
  },
  watch: {
    modelValue (value) {
      this.inputValue = value
    }
  },
  emits: {
    'update:modelValue': () => true
  },
  computed: {
    showIcon (): boolean {
      return this.icon.length > 0
    },
    goUp (): boolean {
      return this.modelValue.length > 0 || this.inputFocused
    }
  },
  data () {
    return {
      inputFocused: false
    }
  },
  methods: {
    focusHandler (event) {
      this.inputFocused = true
    },
    inputHandler (event) {
      this.$emit('update:modelValue', event.target.value)
    },
    blurHandler (event) {
      this.inputFocused = false
    }
  }
})
</script>

<style lang="stylus" scoped>
*
  box-sizing border-box

.custom-input-container
  width 100%
  margin 10px 0
  border 1px solid #2c3e50
  border-radius 5px

  font-size 1rem

  position relative

  display flex
  flex-direction row
  justify-content flex-start
  align-items center

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

      font-size 1em
      line-height 1em

      position absolute
      bottom 14px

      transition all 0.2s ease

      &.up
        bottom calc(100% - 0.5em)

    .input
      width 100%

      font-size 1em
      line-height 1em

      border 0
      outline none
</style>
