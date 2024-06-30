<template>
  <section id="footer" >
    <div class="text-white flex flex-col items-center bg-cover">
      <div class="flex flex-col items-center py-10">
        <div class="text-center">
          <i class="bi bi-geo-alt text-2xl lg:text-3xl"></i>
          <h1 class="mt-2 text-2xl lg:text-5xl font-bold">Autoservis Uchytil</h1>
          <div class="mt-2">
            <p class="font-semibold">Provozovna</p>
            <p class="text-base">nám. Jiřího Berana 191,</p>
            <p class="text-base">196 00 Praha-Čakovice</p>
            <p class="text-base">IČ: <strong>19382499</strong></p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5">
          <div class="text-center">
            <i class="bi bi-telephone-fill text-2xl"></i>
            <p class="text-xl mt-2"><strong>(+420) 774 034 180</strong></p>
          </div>
          <div class="text-center">
            <i class="bi bi-envelope-fill text-2xl"></i>
            <p class="text-xl mt-2"><a href="mailto:info@autoservisjju.cz" target="_blank">info@autoservisjju.cz</a></p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center mt-10 w-full">
        <div class="flex justify-center mb-4 md:mb-0">
          <div class="flex gap-2">
            <a href="https://www.facebook.com/profile.php?id=61560377717879" aria-label="Facebook" class="text-white hover:text-gray-200 text-2xl mx-2">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" class="text-white hover:text-gray-200 text-2xl mx-2">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-5 mb-6">
        <div class="text-center">
          <div>
            <NuxtLink to="/zasady-ochrany-osobnich-udaju" class="text-white hover:text-gray-200">
              Zásady ochrany osobních údajů
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/zasady-cookies" class="text-white hover:text-gray-200">
              Cookies
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="text-xs font-thin mb-10">
          Autoservis JJU ©{{ new Date().getFullYear() }}. Powered by <a href="https://advantup.cz"><span class="font-bold">Advantup</span></a>
      </div>
    </div>
    <div class="w-full">
      <iframe title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.938472514844!2d14.49893451566535!3d50.14062977943256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470beb5f3c70c33f%3A0x400af0f661d34d0!2sN%C3%A1m.%20Ji%C5%99%C3%ADho%20Berana%20191%2C%20196%2000%20Praha-%C4%8Cakovice%2C%20Czechia!5e0!3m2!1sen!2sus!4v1631307928293!5m2!1sen!2sus"
        width="100%" height="400" style="border:0;" allowfullscreen="true" loading="lazy">
      </iframe>
    </div>
  </section>
</template>

<style scoped>
.bg-cover {
    background-image: url("../assets/background/bg_mechanic_repair.jpg");
}
</style>

<script setup lang="ts">
</script>