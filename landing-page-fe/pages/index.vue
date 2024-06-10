<template>
  <Navigation/>
  <section id="home">
    <div class="relative flex items-center justify-center w-screen">
      <div class="bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col justify-center items-center">
        <img src="../assets/logo/logo_white_red.svg" alt="logo">
        <div class="mt-24 mb-24 text-center">
          <h1 class="mb-5 text-white lg:text-4xl text-2xl uppercase">
            žhavá letní nabíka
          </h1>
          <h1 class="text-white lg:text-6xl text-4xl">
            <span class="text-[var(--primary-red)]"><strong>Plnění klimatizací</strong></span> za
          </h1>
          <h1 class="text-white lg:text-6xl text-4xl">
            zvýhodněnou cenu!
          </h1>
        </div>
        <div>
          <ReservationButton/>
        </div>
        <div>
          <ArrowButton/>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="m-0">
      <div class="relative flex items-center justify-center w-screen ">
        <div class="mt-10 mb-10 w-full min-h-full flex flex-col items-center">
          <Headings
            headings-title="Naše "
            headings-title-black=" služby"
            headings-description="S dvacetiletou praxí"
          />
          <div class="grid lg:grid-cols-3 gap-5 md:grid-cols-1">
            <Service 
              service-title="Plnění klimatizací"
              service-image="_nuxt/assets/services/service_climatization.svg"
              service-description="Plnění klimatizace do aut je klíčovým prvkem udržení optimálního komfortu a bezpečnosti během jízdy. "/>
            <Service 
              service-title="Oprava automobilu"
              service-image="_nuxt/assets/services/service_car.svg"
              service-description="Provádíme diagnostiku, opravy motoru, brzdového systému, drobné elektroniky, převodovky a dalších klíčových částí."/>
            <Service
              service-title="Příprava na STK"
              service-image="_nuxt/assets/services/service_stk.svg"
              service-description="Příprava auto na STK je klíčovou službou, která zajistí, že vaše vozidlo splňuje veškeré technické požadavky pro úspěšnou kontrolu."/>
            <Service
              service-title="Výměna kapalin"
              service-image="_nuxt/assets/services/service_fluids.svg"
              service-description="Tato komplexní služba zahrnuje výměnu motorového oleje, chladící kapaliny, brzdové kapaliny, převodového oleje a dalších provozních kapalin."/>
            <Service
              service-title="Přezutí kol"
              service-image="_nuxt/assets/services/service_tire.svg"
              service-description="Přezutí a uskladnění kol včetně vyvážení jsou další z našich klíčových služb našeho autoservisu, které přinášejí pohodlí a bezpečnost."/> 
            <Service
              service-title="Uskladnění kol"
              service-image="_nuxt/assets/services/service_garage.svg"
              service-description="Nabízíme uskladnění kol. Naše bezpečné a klimatizované sklady zajistí, že vaše pneumatiky budou chráněny před nepříznivými vlivy počasí."/>  
          </div>
        </div>
      </div>
  </section>
  <section id="numbers" class="py-10">
    <div class="relative flex items-center justify-center w-screen">
      <div class="bg-numbers bg-center bg-no-repeat bg-cover bg-fixed min-h-80 w-screen flex flex-col justify-center items-center">
        <div class="mt-10 mb-10 grid lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-10">
          <div>
            <Counter
            :counter-to="340"
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
            :counter-to="243"
            :counter-duration="1"
            counter-title="opravených aut"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="reservation" class="py-10">
      <div class="relative flex items-center justify-center w-screen">
        <div class="w-full min-h-screen flex flex-col items-center">
          <Headings
            headings-title="Rezervační "
            headings-title-black=" formulář"
            headings-description="Těšíme se na Vaší návštěvu"
          />
        </div>
      </div>
  </section>
  <section id="footer" class="bg-[var(--primary-red)]">
    <div class="relative flex items-center justify-center w-screen">
        <div class="h-56 w-full flex flex-grow justify-center items-center">
                <div class="flex flex-col justify-center text-white md:w-1/2">
                    <div class="grid grid-cols-2 gap-4 justify-center relative">
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
                        </div>
                        <div>
                            <div class="flex items-center">
                                <i class="bi bi-telephone-fill text-2xl mr-2"></i>
                                <span>(+420) 605 844 075</span>
                            </div>
                            <div class="flex items-center mt-2">
                                <i class="bi bi-envelope-fill text-2xl mr-2"></i>
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
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center h-full w-1/2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.938472514844!2d14.49893451566535!3d50.14062977943256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470beb5f3c70c33f%3A0x400af0f661d34d0!2sN%C3%A1m.%20Ji%C5%99%C3%ADho%20Berana%20191%2C%20196%2000%20Praha-%C4%8Cakovice%2C%20Czechia!5e0!3m2!1sen!2sus!4v1631307928293!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="true" loading="lazy"></iframe>
                </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.bg-cover {
  background-image: url("../assets/background/bg_car.png");
}

.bg-numbers {
  background-image: url("../assets/background/bg_mechanic.png");
}

section {
  scroll-margin-top: 4rem;
}
</style>

<script setup lang="ts">
import Service from '../components/Service.vue';
import Headings from '../components/Headings.vue';
import Counter from '../components/Counter.vue';
</script>
