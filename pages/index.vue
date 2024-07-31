<template>
    <Navigation :show-offset="100"/>
    <PhoneButton :show-offset="100"/>
    <Landing/>
    <ServiceList/>
    <Parallax/>
    <Reservation/>
    <Footer/>
</template>

<style scoped>
</style>

<script setup lang="ts">
definePageMeta({
    title: 'Autoservis JJU | Praha-Čakovice'
})
defineOgImageComponent('Image', {
    title: 'AUTOSERVIS UCHYTIL',
    location: 'Praha - Čakovice',
    note: 'REZERVOVAT NYNÍ'
})
</script>
