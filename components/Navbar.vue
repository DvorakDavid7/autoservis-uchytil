<template>
    <nav
        :class="`flex items-center ${hiddenClass} justify-between bg-[var(--primary-red)] animate__animated ${animation} animate__faster ps-5 pe-5 pt-2 pb-2`"
    >
        <img class="w-1/6" src="../assets/logo_white.svg" alt="logo">

        <div id="socials" class="flex gap-8 text-white items-center">
            <div class="flex items-center"><i class="bi bi-telephone-fill me-2"></i>(+420) 722 160 685</div>
            <div><i class="bi bi-linkedin"></i></div>
            <div><i class="bi bi-facebook"></i></div>
            <div><i class="bi bi-instagram"></i></div>
        </div>
    </nav>
</template>

<script setup lang="ts">

const animation = ref<string>("")
const hiddenClass = ref<string>("hidden")

function handleScroll() {
    if (window.scrollY > window.innerHeight * 0.8) {
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

#socials div {
    cursor: pointer;
}
</style>