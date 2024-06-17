<template>
    <section id="footer" class="bg-[var(--primary-red)]">
        <div class="grid text-white grid-cols-1 sm:grid-cols-2 ">
            <div class="ps-10 mt-10 mb-10 flex flex-col justify-between items-center">
                <div>
                    <div class="flex items-center mb-4">
                        <i class="bi bi-geo-alt text-2xl mr-4"></i>
                        <div>
                            <h1 class="text-xl font-bold">Autoservis Uchytil</h1>
                            <p class="font-semibold">Provozovna</p>
                            <p>nám. Jiřího Berana 191,</p>
                            <p>196 00 Praha-Čakovice</p>
                        </div>
                    </div>
                    <div class="flex items-center mb-4">
                        <p class="text-2xl mr-4 font-bold">IČ</p>
                        <div>
                            <h1 class="text-lg font-normal">19382499</h1>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <i class="bi bi-telephone-fill text-2xl mr-4"></i>
                        <span>(+420) 605 844 075</span>
                    </div>
                    <div class="flex items-center mt-2">
                        <i class="bi bi-envelope-fill text-2xl mr-4"></i>
                        <span>info@uchytil.cz</span>
                    </div>
                    <!-- Social Media -->
                    <div class="flex space-x-4 mt-10">
                        <a href="#responsive-header" class="text-white hover:text-gray-200 text-2xl">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#responsive-header" class="text-white hover:text-gray-200 text-2xl">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#responsive-header" class="text-white hover:text-gray-200 text-2xl">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </div>
                    <div class="flex items-center mb-4 space-x-4 mt-10">
                        <NuxtLink to="/personal-data" class="text-white hover:text-gray-200">
                            Zásady ochrany osobních údajů
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="p-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.938472514844!2d14.49893451566535!3d50.14062977943256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470beb5f3c70c33f%3A0x400af0f661d34d0!2sN%C3%A1m.%20Ji%C5%99%C3%ADho%20Berana%20191%2C%20196%2000%20Praha-%C4%8Cakovice%2C%20Czechia!5e0!3m2!1sen!2sus!4v1631307928293!5m2!1sen!2sus"
                    width="100%" height="100%" style="border:0;" allowfullscreen="true" loading="lazy"></iframe>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
</script>