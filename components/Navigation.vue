<template>
    <nav
        :class="`z-100 items-center justify-between bg-[var(--primary-red)] animate__animated ${hiddenClass} ${animation} animate__faster p-3 shadow-lg ps-10 pe-10`"
    >
        <div class="hidden sm:flex items-center text-white">
            <a href="/">
                <img class="" src="../assets/logo/logo_white.svg" alt="logo">
            </a>
        </div>
        <div class="flex gap-8 text-white items-center justify-center">
            <div class="flex items-center justify-center text-2xl text-white">
                <i class="bi bi-telephone-fill"></i>
                <span class="not-italic text-sm mt-2 ml-5"><strong>(+420) 774 034 180</strong></span>
            </div>

            <a href="https://www.facebook.com/profile.php?id=61560377717879" aria-label="Facebook" class="text-white hover:text-gray-200 text-2xl">
                <i class="bi bi-facebook"></i>
            </a>
        </div>
    </nav>
</template>

<script setup lang="ts">
const animation = ref<string>("")
const hiddenClass = ref<string>("hidden")

interface NavigationProps {
    showOffset?: number
}

const props = defineProps<NavigationProps>()

function handleScroll() {
    if (props.showOffset && window.scrollY > props.showOffset) {
        animation.value = "animate__fadeInDown"
        hiddenClass.value = "sm:flex"
    } else {
        animation.value = "animate__fadeOutUp"
    }
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
nav {
    --animate-duration: 0.5s;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}
</style>
