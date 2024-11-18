<script setup lang="ts">
import data from "~/assets/data.json";

const slug = useRoute().params.slug as string;

const planet = data.find((planet) => slugify(planet.name) === slug);
</script>
<template>
  <div>THE PLANETS</div>
</template>
