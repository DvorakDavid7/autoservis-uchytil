<template>
    <section id="services" class="">
        <div class="flex items-center justify-center">
            <div class="mt-10 mb-10 min-h-full flex flex-col items-center">
                <Headings
                    headings-title="Naše"
                    headings-title-black="služby"
                    headings-description="S dvacetiletou praxí"
                />
                <div class="grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 mt-20 m-5">
                    <Service
                        service-title="Oprava automobilu"
                        service-image="/services/service_car.svg"
                        service-description="Provádíme diagnostiku, opravy motoru, brzdového systému, drobné elektroniky, převodovky a dalších komponentů."
                    />
                    <Service
                        highlighted
                        service-title="Plnění klimatizací"
                        service-image="/services/service_climatization.svg"
                        service-description="Plnění klimatizace do aut je nutným prvkem pro udržení optimálního komfortu a bezpečnosti během jízdy. "
                    />
                    <Service
                        service-title="Příprava na STK"
                        service-image="/services/service_stk.svg"
                        service-description="Příprava na STK je službou, která zajistí, že vaše vozidlo splňuje veškeré technické požadavky pro úspěšnou kontrolu."
                    />
                    <Service
                        service-title="Výměna kapalin"
                        service-image="/services/service_fluids.svg"
                        service-description="Tato služba zahrnuje výměnu motorového, převodového oleje, chladící nebo brzdové kapaliny a dalších provozních kapalin."
                    />
                    <Service
                        service-title="Přezutí kol"
                        service-image="/services/service_tire.svg"
                        service-description="Přezutí a vyvážení kol jsou další z našich klíčových služeb, které přinášejí bezpečnost Vaší jízdy."
                    />
                    <Service
                        service-title="Uskladnění kol"
                        service-image="/services/service_garage.svg"
                        service-description="Nabízíme uskladnění kol. Naše bezpečné a klimatizované sklady udrží Vaše pneumatiky chráněné před nepříznivými vlivy počasí."
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>