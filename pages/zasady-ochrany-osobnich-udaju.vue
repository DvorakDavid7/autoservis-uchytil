<template>
  <Navigation :show-offset="0"/>
  <PersonalData/>
  <Footer/>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'JJU Autoservis Čakovice'
})
defineOgImageComponent('Image', {
  title: 'AUTOSERVIS UCHYTIL',
  location: 'Praha - Čakovice',
  note: 'REZERVOVAT NYNÍ'
})
</script>