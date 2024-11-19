<script setup lang="ts">
const { planetSlug: slug } = defineProps<{
  planetSlug: string;
}>();

const tabs = [
  {
    text: "overview",
    href: `/planets/${slug}`,
  },
  {
    text: "structure",
    href: `/planets/${slug}/structure`,
  },
  {
    text: "surface",
    href: `/planets/${slug}/surface`,
  },
];
</script>
<template>
  <nav class="mobile-tabs">
    <ul>
      <li v-for="tab in tabs" :key="tab.text" class="tab">
        <NuxtLink
          :href="tab.href"
          exact-active-class="active"
          class="tab-link as-h4"
        >
          {{ tab.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style lang="css" scoped>
@media only screen and (min-width: 768px) {
  .mobile-tabs {
    display: none;
  }
}

.mobile-tabs ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  padding: 0 1.5rem;
}

.tab-link {
  display: inline-block;
  padding: 1.25rem;
  text-transform: uppercase;
}

.active {
  padding-bottom: 1rem;
  border-bottom: 4px solid var(--planet-color);
}
</style>
