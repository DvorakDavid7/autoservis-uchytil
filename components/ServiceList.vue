<template>
    <section id="services" class="">
        <div class="flex items-center justify-center">
            <div class="mt-10 mb-10 min-h-full flex flex-col items-center">
                <Headings
                    headings-title="Naše"
                    headings-title-black="služby"
                    headings-description="S dvacetiletou praxí"
                />
                <div class="grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 mt-20 m-10">
                    <Service
                        service-title="Oprava automobilu"
                        service-image="/services/service_car.svg"
                        service-description="Provádíme diagnostiku, opravy motoru, brzdového systému, drobné elektroniky, převodovky a dalších klíčových částí."
                    />
                    <Service
                        highlighted
                        service-title="Plnění klimatizací"
                        service-image="/services/service_climatization.svg"
                        service-description="Plnění klimatizace do aut je klíčovým prvkem udržení optimálního komfortu a bezpečnosti během jízdy. "
                    />
                    <Service
                        service-title="Příprava na STK"
                        service-image="/services/service_stk.svg"
                        service-description="Příprava auto na STK je klíčovou službou, která zajistí, že vaše vozidlo splňuje veškeré technické požadavky pro úspěšnou kontrolu."
                    />
                    <Service
                        service-title="Výměna kapalin"
                        service-image="/services/service_fluids.svg"
                        service-description="Tato komplexní služba zahrnuje výměnu motorového oleje, chladící kapaliny, brzdové kapaliny, převodového oleje a dalších provozních kapalin."
                    />
                    <Service
                        service-title="Přezutí kol"
                        service-image="/services/service_tire.svg"
                        service-description="Přezutí a uskladnění kol včetně vyvážení jsou další z našich klíčových služb našeho autoservisu, které přinášejí pohodlí a bezpečnost."
                    />
                    <Service
                        service-title="Uskladnění kol"
                        service-image="/services/service_garage.svg"
                        service-description="Nabízíme uskladnění kol. Naše bezpečné a klimatizované sklady zajistí, že vaše pneumatiky budou chráněny před nepříznivými vlivy počasí."
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>