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
      <div class="bg-numbers bg-center bg-no-repeat bg-cover bg-fixed min-h-80 w-screen flex flex-col justify-center items-center animated">
        <div class="mt-10 mb-10 grid lg:grid-cols-3 grid-cols-1 lg:gap-40 gap-10">
          <div>
            <Counter
            :counter-to="350"
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
            :counter-to="1230"
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
