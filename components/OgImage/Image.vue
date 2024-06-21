<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

withDefaults(defineProps<{
  title?: string,
  location?: string,
  note?: string,
}>(), {
  title: 'title',
  location: 'location',
  note: 'note'
});
</script>

<template>
  <div class="bg-cover h-full w-full flex items-center">
    <div class="flex items-center justify-center h-full">
      <div class="flex justify-center items-center w-full h-full">
        <h1 class="text-[80px] font-black text-center text-white leading-slug">
          {{ title }} 
        </h1>
        <h3 class="text-[60px] font-black text-center text-white leading-2" >
          {{ location  }}
        </h3>
        <button class="text-white bg-[#F33235] duration-300 rounded-full font-bold uppercase mt-10 py-4 px-5 text-30px">
          {{ note }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-cover {
    background-image: url("/og_image.jpg");
}
</style>