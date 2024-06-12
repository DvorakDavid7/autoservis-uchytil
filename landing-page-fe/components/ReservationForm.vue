<template>
    <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">
                    Jméno
                </label>
                <input
                    id="first_name"
                    type="text"
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
                    type="text"
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
                    type="email"
                    class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="jnovak@gmail.com"
                    required
                />
            </div>

            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">
                    Telefon
                </label>
                <input
                    id="phone"
                    type="text"
                    class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="722 159 402"
                    required
                />
            </div>

            <div class="block mb-2 text-sm font-medium text-gray-900">
                <label for="date" class="block mb-2 text-sm font-medium text-gray-900">
                    Datum rezervace
                </label>
                <DatePickerComponent/>
            </div>

            <div>
                <label for="service" class="block mb-2 text-sm font-medium text-gray-900">
                    Služba
                </label>

                <input
                    type="text"
                    id="service"
                    class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="plnění klimatizací"
                    required
                />
            </div>
        </div>

        <div>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900">
                Poznámka k rezervaci
            </label>
            <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Váš text..."
            />
        </div>

        <div class="flex mt-10 mb-10 justify-end">
            <button
                type="submit"
                class="text-white bg-[var(--primary-red)] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Rezervovat
            </button>
        </div>
    </form>
</template>

<script setup lang="ts">

</script>