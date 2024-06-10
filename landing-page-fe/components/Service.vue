<template>
  <div class="group justify-center text-center items-center flex flex-col hover:z-10 hover:-translate-y-1">
    <div class="relative justify-center flex">
      <div class="size-20 flex justify-center group-hover:bg-[var(--primary-red)] bg-black items-center rounded-md absolute z-[1] -top-8">
        <div class="size-14">
          <img  :src="serviceImage" alt="Service Image"/>
        </div>
      </div>
      <Card style="width: 25rem; height: 25rem; overflow: hidden" class="justify-center shadow items-center group-hover:shadow-2xl group-hover:border-2 group-hover:border-gray-200 group-hover:border-opacity-50">
        <template #title>
          <div class=" mt-2 uppercase text-black text-2xl">
            <h1>{{ serviceTitle }}</h1>
          </div>
        </template>
        <template #content>
          <p class="m-0 hyphens-autotext-balance text-gray-400 text-md" lang="cz">
            {{ serviceDescription }}
          </p>
        </template>
        <template #footer>
          <div class="flex text-sm mt-5 justify-center items-center">
              <a class="text-[var(--primary-red)] underline  decoration-2 font-bold py-2 px-4 rounded-full">VÍCE</a>
          </div>
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

<script lang="ts">

  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Service',
    props: {
      serviceImage: {
        type: String,
        required: true
      },
      serviceTitle: {
        type: String,
        required: true
      },
      serviceDescription: {
        type: String,
        required: true
      }
    }})
</script>