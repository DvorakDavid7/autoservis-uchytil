<template>
    <Transition name="navbar-slide">
        <nav v-if="showNavbar"
             class="z-20 w-full flex fixed items-center justify-between bg-[var(--primary-red)] p-3 shadow-lg top-0">
            <div class="flex items-center text-white mr-6 ml-2">
                <a href="">
                    <img src="../assets/logo/logo_white.svg" alt="logo">
                </a>
            </div>
            <div class="flex-grow flex items-center">
                <div class="flex-grow"></div>
                <div class="flex items-center space-x-4 mr-5">
                    <div class="flex items-center text-2xl mr-5 text-white">
                        <i class="mb-1 bi bi-telephone-fill"></i>
                        <span class="not-italic text-sm ml-5  "><strong>(+420) 605 844 075</strong></span>
                    </div>
                    <div class="items-center justify-center flex flex-wrap space-x-4 mb-1">
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
                </div>
            </div>
        </nav>
    </Transition>
</template>

<script>
import {ref, onMounted, onUnmounted} from 'vue';

export default {
    setup() {
        const showNavbar = ref(false);
        const lastScrollPosition = ref(0);
        const OFFSET = 100;

        const onScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll < 0) return;

            showNavbar.value = currentScroll > OFFSET;

            lastScrollPosition.value = currentScroll;
        };

        onMounted(() => {
            lastScrollPosition.value = window.pageYOffset;
            window.addEventListener('scroll', onScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', onScroll);
        });

        return {showNavbar};
    }
};
</script>

<style scoped>
.navbar-slide-enter-from,
.navbar-slide-leave-to {
    transform: translateY(-100%);
}

.navbar-slide-enter-active,
.navbar-slide-leave-active {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.navbar-slide-enter-to,
.navbar-slide-leave-from {
    transform: translateY(0);
}
</style>
