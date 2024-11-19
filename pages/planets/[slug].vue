<script lang="ts">
import type { Planet } from "~/types/planets";
import { createContext } from "~/components/createContext";

export const [injectPlanetContext, providePlanetContext] =
  createContext<Planet>("planets/[slug]");
</script>
<script setup lang="ts">
import data from "~/assets/data.json";
import MobileTabs from "~/src/planets/components/Tabs.vue";

const slug = useRoute().params.slug as string;

const planet = data.map(createPlanet).find((planet) => planet.slug() === slug);

if (!planet) {
  throw createError("No such planet");
}

providePlanetContext(planet);
</script>
<template>
  <main class="content" :style="{ '--planet-color': planet.color }">
    <MobileTabs :planet-slug="slug" />
    <NuxtPage />
  </main>
</template>
<style lang="css" scoped>
.content {
  max-width: 1110px;
  margin-left: auto;
  margin-right: auto;
}
</style>
