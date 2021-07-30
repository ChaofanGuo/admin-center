<template>
  <div :class="['button-wrapper', type]" @click="clickHandler">
    <div class="icon-container" v-if="showIcon">
      <img src="" alt="" class="icon">
    </div>
    <div class="text-container">
      <slot class="text"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

const typeList = [
  'default',
  'primary',
  'warning',
  'error'
]

export default defineComponent({
  name: "button",
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return typeList.includes(value)
      }
    },
    icon: {
      type: String,
      default: ''
    }
  },
  emits: ['onClick'],
  computed: {
    showIcon(): boolean {
      return this.icon.length > 0
    },
  },
  methods: {
    clickHandler() {
      this.$emit('onClick')
    }
  }
})
</script>

<style lang="stylus" scoped>
color(backgroundColor = primary-color, color = #ffffff, border = 0)
  background-color backgroundColor
  color color
  border border

.button-wrapper
  width 100%
  height 50px
  border-radius 5px
  border 1px solid border-color

  color #ffffff font-color 1
  cursor pointer

  display flex
  flex-direction row
  justify-content center
  align-items center

  &.primary
    color(primary-color)
  &.warning
    color(warning-color)
  &.error
    color(error-color)
</style>
