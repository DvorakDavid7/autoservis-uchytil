<template>
    <button
      @click="callNumber"
      :class="`call-button z-100 flex justify-center items-center text-center size-20 lg:size-24  animate__animated ${hiddenClass} ${animation} bg-[#0dd542] hover:bg-[#1f482afc]`"
    >
      <i class="bi bi-telephone-fill text-4xl lg:text-4xl text-center "></i>
    </button>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, onBeforeUnmount } from 'vue';

const animation = ref<string>("")
const hiddenClass = ref<string>("hidden")

interface PhoneButtonProps {
    showOffset?: number
}

const props = defineProps<PhoneButtonProps>()

function handleScroll() {
    if (props.showOffset && window.scrollY > props.showOffset) {
        animation.value = "animate__fadeIn"
        hiddenClass.value = "sm:flex"
    } else {
        animation.value = "animate__fadeOut"
    }
}

function callNumber() {
    window.location.href = 'tel:+420774034180';
}

onMounted(() => {
    if (props.showOffset) {
        window.addEventListener("scroll", handleScroll)
    } else {
        hiddenClass.value = "sm:flex"
    }
})

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
.call-button {
  --animate-duration: 0.5s;
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 50%;
  z-index: 1000;
}

</style>