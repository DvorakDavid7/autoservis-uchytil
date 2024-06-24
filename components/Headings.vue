<template>
    <div class="mt-5 mb-5 lg:mt-5 lg:mb-5 text-center">
        <h1 class="mb-2 text-[var(--primary-red)] text-4xl lg:text-5xl uppercase leading-snug lg:leading-snug">
        <strong>{{ headingsTitle }}</strong>
        <br/>
        <span class="relative">
        <span class="block absolute -inset-1 -skew-x-12 bg-black " aria-hidden="true"></span>
        <span class="relative text-white"><em><strong>{{ headingsTitleBlack }}</strong></em></span>
        </span>
        </h1>
        <p class="mb-5 mt-5 font-light text-gray-500 text-sm md:text-xl uppercase">
            {{ headingsDescription }}
        </p>
    </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    props: {
        headingsTitle: {
            type: String,
            required: true
        },
        headingsTitleBlack: {
            type: String,
            required: true
        },
        headingsDescription: {
            type: String,
            required: true
        }
    }
})
</script>