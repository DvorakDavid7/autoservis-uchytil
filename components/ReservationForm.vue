<template>
    <form @submit.prevent="submitForm" class="m-10">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">
                    Jméno
                </label>
                <input
                    id="first_name"
                    autocomplete="given-name"
                    type="text"
                    v-model="firstName"
                    class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Jan"
                    required
                />
            </div>

            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">
                    Příjmení
                </label>
                <input
                    id="last_name"
                    autocomplete="family-name"
                    type="text"
                    v-model="lastName"
                    class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Novák"
                    required
                />
            </div>

            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                    Email
                </label>
                <input
                    id="email"
                    autocomplete="email"
                    type="email"
                    v-model="email"
                    class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="jan.novak@seznam.cz"
                    required
                />
            </div>

            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">
                    Telefon
                </label>
                <input
                    id="phone"
                    autocomplete="tel"
                    type="tel"
                    v-model="phone"
                    class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="722 159 402"
                    required
                />
            </div>

            <div class="block mb-2 text-sm font-medium text-gray-900">
                <label for="date" class="block mb-2 text-sm font-medium text-gray-900">
                    Datum rezervace
                </label>
                <VueDatePicker
                    @date-update="dateClicked"
                    :disabled-times="disabledTimes"
                    :min-date="new Date()"
                    :min-time="{hours: 10, minutes: 0}"
                    :max-time="{hours: 19, minutes: 0}"
                    minutes-grid-increment="15"
                    minutes-increment="15"
                    timezone="CET"
                    autocomplete="off"
                    time-picker-inline
                    required
                    id="date"
                    input-class-name="input"
                    v-model="date"
                />
            </div>

            <div>
                <label for="services" class="block mb-2 text-sm font-medium text-gray-900">
                    Vyberte službu
                </label>
                <select id="services" ref="service"
                        required
                        @change="changeSelectedService"
                        class="border border-gray-300 bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option
                        v-for="service in services"
                        :key="service.id"
                        :value="service.name"
                        :selected="service.id === 1"
                    >
                        {{ service.name }}
                    </option>
                </select>
            </div>
        </div>

        <div>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900">
                Poznámka k rezervaci
            </label>
            <textarea
                id="message"
                v-model="message"
                rows="4"
                class="block p-2.5 w-full text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Váš text..."
            />
        </div>
        <div class="mt-3">
            <input required id="default-checkbox" type="checkbox"
                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-500">
                Souhlasím se zpracováním osobních údajů podle
                <NuxtLink to="/zasady-ochrany-osobnich-udaju" class="underline">zásad ochrany osobních údajů</NuxtLink>.
            </label>
        </div>
        <div class="flex mt-10 mb-10 justify-end">
            <button
                :disabled="isLoading"
                type="submit"
                class="flex justify-center items-center text-white bg-[var(--primary-red)] hover:bg-red-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-4 text-center"
            >
                <svg v-if="isLoading" width="20" height="20" fill="currentColor" class="mr-2 animate-spin"
                     viewBox="0 0 1792 1792"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                    </path>
                </svg>
                <strong>REZERVOVAT</strong>
            </button>
        </div>
    </form>
</template>

<script setup lang="ts">
import VueDatePicker, {type TimeObj} from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'
import {API_ENDPOINT, getAllReservations} from "~/connector/api";
import {convert, formatDateToCustomString} from "~/utils/dateUtil";


const services = ref<{ id: number, name: string }[]>([
    {id: 1, name: "Plnění klimatizací"},
    {id: 2, name: "Oprava automobilu"},
    {id: 3, name: "Příprava na STK"},
    {id: 4, name: "Výměna kapalin"},
    {id: 5, name: "Přezutí kol"},
    {id: 6, name: "Uskladnění kol"},
])

const isLoading = ref<boolean>(false)

const firstName = ref("")
const lastName = ref("")
const email = ref("")
const phone = ref("")

const d = new Date();
d.setHours(0,0,0,0);

const date = ref(d)
const selectedService = ref(services.value[0].name)
const message = ref("")


async function submitForm() {
    isLoading.value = true
    const formData = {
        name: firstName.value,
        surname: lastName.value,
        email: email.value,
        phone: phone.value,
        date: formatDateToCustomString(date.value),
        service: selectedService.value,
        note: message.value,
    }

    const response = await fetch(`${API_ENDPOINT}/api/reservation`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    })

    if (response.ok) {
        const data = await response.json()
        console.log(data)
        const reservationId = data.id
        await navigateTo(`/reservations/${reservationId}`)
    }
    isLoading.value = false
}

function changeSelectedService(event) {
    selectedService.value = event.target.value
}

const reservationDates = ref<Date[]>([])
const disabledTimes = ref<TimeObj[]>([])

const dateClicked = (date: string) => {
    const d = new Date(date)
    for (const reservation of reservationDates.value) {
        if (reservation.getDate() === d.getDate()) {
            disabledTimes.value.push({hours: reservation.getHours(), minutes: reservation.getMinutes(), seconds: 0})
        }
    }
}

onMounted(async () => {
    const reservations = await getAllReservations()
    reservationDates.value = reservations.map(r => convert(r["date"]))
})

</script>

<style scoped>
.input {
    border-radius: 0.5rem;
    line-height: 1.8rem;
}
</style>