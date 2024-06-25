<template>
    <section id="home" class="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center">
        <img src="../assets/logo/logo_white_red.svg" alt="logo">
        <div class="mt-16 mb-16 lg:mt-24 lg:mb-24 m-2 text-center">
            <h1 class="mb-2 lg:mb-5 text-white lg:text-4xl text-2xl uppercase">
                žhavá letní nabíka
            </h1>
            <h1 class="text-white lg:text-6xl text-4xl">
                <span class="text-[var(--primary-red)]"><strong>Plnění klimatizací</strong></span> za
            </h1>
            <h1 class="text-white lg:text-6xl text-4xl">
                zvýhodněnou cenu
            </h1>
            <h1 class="text-white lg:text-6xl text-4xl">
                od <span class="text-[var(--primary-red)]"><strong>3 Kč/gram!</strong></span>
            </h1>
        </div>
        <div>
            <ReservationButton/>
        </div>
        <div>
            <ArrowButton/>
        </div>
    </section>
</template>

<style scoped>
.bg-cover {
    background-image: url("../assets/background/bg_car.jpg");
}
</style>