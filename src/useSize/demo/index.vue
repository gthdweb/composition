
<template>
  <div>
    <div ref="divRef" style="display: inline-block">
      <textarea></textarea>
    </div>
    <div>
      <span>宽：</span>
      <span>{{ size.width }}</span>
      <span>高：</span>
      <span>{{ size.height }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useSize from '../index'
/* eslint-disable no-console */

const divRef = ref<HTMLElement | null>(null)
const widthAndHeight = ref({
  width: 0,
  height: 0,
})
console.log(widthAndHeight.value)
const size = ref<{ width: number; height: number }>({ width: 0, height: 0 })
size.value = useSize(divRef, () => console.log(1))
</script>
