<template>
    <nav
        :class="`z-100 sm:flex items-center justify-between bg-[var(--primary-red)] animate__animated ${hiddenClass} ${animation} animate__faster p-3 shadow-lg`"
    >
        <div class="hidden sm:flex items-center text-white">
            <a href="">
                <img class="" src="../assets/logo/logo_white.svg" alt="logo">
            </a>
        </div>

        <div class="flex gap-8 text-white items-center justify-center">
            <div class="flex items-center justify-center text-2xl text-white">
                <i class="bi bi-telephone-fill"></i>
                <span class="not-italic text-sm ml-5"><strong>(+420) 605 844 075</strong></span>
            </div>

            <a href="" class="text-white hover:text-gray-200 text-2xl">
                <i class="bi bi-facebook"></i>
            </a>
            <a href="" class="text-white hover:text-gray-200 text-2xl">
                <i class="bi bi-instagram"></i>
            </a>
            <a href="" class="text-white hover:text-gray-200 text-2xl">
                <i class="bi bi-linkedin"></i>
            </a>
        </div>
    </nav>
</template>

<script setup lang="ts">
const animation = ref<string>("")
const hiddenClass = ref<string>("hidden")
const OFFSET = 100;

function handleScroll() {
    if (window.scrollY > OFFSET) {
        animation.value = "animate__fadeInDown"
        hiddenClass.value = ""
    } else {
        animation.value = "animate__fadeOutUp"
    }
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll)
})

</script>

<style scoped>
nav {
    --animate-duration: 0.5s;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}
</style>
