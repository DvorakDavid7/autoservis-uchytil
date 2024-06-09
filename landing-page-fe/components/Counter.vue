<template>
    <div class="justify-center items-center text-center ">
      <div class=" text-gray-200 text-8xl font-bold">
        <ClientOnly>
            <AnimatedCounter :value=counterTo :duration=counterDuration class="counter"/>
        </ClientOnly>
      </div>
      <div class="text-gray-100 mt-3 text-2xl font-bold uppercase">
        <h1>{{ counterTitle }}</h1>
      </div>
    </div>
</template>

<style scoped>
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Counter',
  props: {
    counterTo: {
      type: Number,
      required: true
    },
    counterAdditional: {
      type: String,
      required: false
    },
    counterDuration: {
      type: Number,
      required: true
    },
    counterTitle: {
      type: String,
      required: true
    }
  }})
</script>
