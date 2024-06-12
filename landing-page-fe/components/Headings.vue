<template>
    <div class="mt-10 mb-10 text-center">
        <h1 class="mb-2 text-[var(--primary-red)] text-5xl uppercase">
            <strong>{{ headingsTitle }}</strong>
            <span class="relative">
        <span class="block absolute -inset-1 -skew-x-12 bg-black " aria-hidden="true"></span>
        <span class="relative text-white"><em><strong>{{ headingsTitleBlack }}</strong></em></span>
      </span>
        </h1>
        <h3 class="mb-5 mt-5 font-light text-gre text-1xl uppercase">
            {{ headingsDescription }}
        </h3>
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