<template>
    <section id="numbers" class="py-10">
        <div class="relative flex items-center justify-center">
            <div
                class="bg-numbers bg-center bg-no-repeat bg-cover bg-fixed min-h-80 w-screen flex flex-col justify-center items-center">
                <div class="mt-10 mb-10 grid lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-10">
                    <div>
                        <Counter
                            :counter-to="1450"
                            :counter-duration="200"
                            counter-title="spokojených zákazníků"/>
                    </div>
                    <div>
                        <Counter
                            :counter-to="25"
                            :counter-duration="500"
                            counter-title="let na trhu"/>
                    </div>
                    <div>
                        <Counter
                            :counter-to="1892"
                            :counter-duration="1"
                            counter-title="opravených aut"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bg-numbers {
    background-image: url("../assets/background/bg_mechanic.jpg");
}
</style>