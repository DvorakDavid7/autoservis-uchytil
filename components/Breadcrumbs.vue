<template>
  <Breadcrumb :home="home" :model="items">
    <template #home="{ home, props }">
      <router-link v-if="home.to" v-slot="{ href, navigate }" :to="home.to" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="[home.icon, 'text-color']" />
          <span class="text-primary font-semibold">Home</span>
        </a>
      </router-link>
      <a v-else :href="home.url" :target="home.target" v-bind="props.action">
        <span :class="[home.icon, 'text-color']" />
        <span class="text-primary font-semibold">Home</span>
      </a>
    </template>
    <template #item="{ item, props }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="[item.icon, 'text-color']" />
          <span class="text-primary font-semibold">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
      </a>
    </template>
    <template #separator> / </template>
  </Breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      home: { icon: 'pi pi-home', route: '/' },
      items: [
        { label: 'Zásady ochrany osobních údajů', route: '/zasady-ochrany-osobnich-udaju' },
        { label: 'Cookies', route: '/zasady-cookies' },
      ]
    };
  }
};
</script>

<style>
/* Add any custom styles here */
</style>