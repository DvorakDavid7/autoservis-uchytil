<template>
    <div>
        <VueDatePicker input-class-name="input" v-model="date"></VueDatePicker>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();
</script>

<style>
.input {
    border-radius: 0.5rem;
    line-height: 1.8rem;
}

</style>