<template>
    <div class="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center">
        <img src="../assets/logo_white.svg" alt="logo">

        <div class="mt-24 mb-24 text-center">
            <h1 class="mb-5 text-white text-4xl uppercase">
                žhavá letní nabíka
            </h1>
            <h1 class="text-white text-6xl">
                <span class="text-primary-red">Plnění klimatizací</span> za
            </h1>
            <h1 class="text-white text-6xl">
                zvýhodněnou cenu!
            </h1>
        </div>

        <ReservationButton/>

        <div class="mt-20">
            <i class="bi bi-chevron-compact-down text-gray-400 text-4xl"></i>
        </div>
    </div>
    <Navbar/>
    <div class="h-screen">
        <ReservationForm/>
    </div>

</template>

<style scoped>
.bg-cover {
    background-image: url("../assets/bg_immage_1.svg");
}
</style>

<script setup lang="ts">
</script>