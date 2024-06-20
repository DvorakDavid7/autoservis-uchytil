<template>
    <div class="group justify-center text-center items-center flex flex-col">
        <div class="relative justify-center flex">
            <div
                class="size-20 flex justify-center bg-black items-center rounded-md absolute z-[1] -top-16">
                <div class="size-14">
                    <img :src="serviceImage" alt="Service Image"/>
                </div>
            </div>
            <Card style="max-width: 25rem;"
                  :class="`justify-center mb-16 shadow items-center ${highlighted && 'bg-[var(--primary-red)]'}`"
            >
                <template #title>
                    <div :class="`mt-2 uppercase text-2xl ${textColor}`">
                        <h1>{{ serviceTitle }}</h1>
                    </div>
                </template>
                <template #content>
                    <p
                        :class="`m-0 hyphens-autotext-balance text-gray-400 text-md ${textColor}`"
                        lang="cz"
                    >
                        {{ serviceDescription }}
                    </p>
                </template>
            </Card>
        </div>
    </div>
</template>


<style scoped>
img {
    filter: invert(1) brightness(10);
}
</style>

<script setup lang="ts">

interface ServiceProps {
    serviceTitle: string
    serviceDescription: string
    serviceImage: string
    highlighted?: boolean
}

const textColor = computed(() => highlighted ? "text-white" : "text-black")

const {serviceTitle, serviceImage, serviceDescription, highlighted} = defineProps<ServiceProps>()
</script>