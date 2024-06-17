<template>
    <div class="h-screen">
        <Navigation/>
        <div class="h-5/6 flex flex-col justify-center items-center">
            <svg v-if="isLoading" width="50" height="50" fill="currentColor" class="mr-2 animate-spin"
                 viewBox="0 0 1792 1792"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                </path>
            </svg>
            <div v-else class="flex flex-col space-y-10 justify-center items-center">
                <Check v-if="confirmationSuccess"/>
                <RedCross v-if="!confirmationSuccess"/>
                <h1 v-if="confirmationSuccess" class="text-2xl">Rezervace potvrzena!</h1>
                <h1 v-if="!confirmationSuccess" class="text-2xl">Rezervace se nezdařila. Zavolejte nám</h1>
                <button
                    @click="navigate"
                    class="text-white bg-[var(--primary-red)] hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    zpět na stránku
                </button>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import Check from "~/components/icons/Check.vue";
import RedCross from "~/components/icons/RedCross.vue";
import {API_ENDPOINT} from "~/connector/api";

async function navigate() {
    await navigateTo("/")
}

const route = useRoute()

const confirmationSuccess = ref(false)
const isLoading = ref(true)

async function verifyReservation() {
    isLoading.value = true
    const reservationId = route.params.id
    const response = await fetch(`${API_ENDPOINT}/api/reservation/${reservationId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    })

    const data = await response.json()
    if (data.confirmation === "true") {
        confirmationSuccess.value = true
    }
    isLoading.value = false
}

onMounted(async () => {
    await verifyReservation()
})

</script>
