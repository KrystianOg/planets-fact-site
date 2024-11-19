<script setup lang="ts">
import { injectPlanetContext } from "../[slug].vue";
import DataList from "~/src/planets/components/DataList.vue";
import DataItem from "~/src/planets/components/DataItem.vue";
import Content from "~/src/planets/components/Content.vue";

const planet = injectPlanetContext();
</script>
<template>
  <Content>
    <template #planet>
      <img
        :src="planet.images.planet"
        class="planet"
        :alt="`Planet ${planet.name}`"
      />
    </template>
    <template #description>
      <h1>{{ planet.name }}</h1>
      <p>{{ planet.overview.content }}</p>
      <br />
      <div class="source">
        Source:
        <a :href="planet.overview.content">Wikipedia</a>
      </div>
    </template>
    <template #navigation> </template>
  </Content>
  <DataList>
    <DataItem title="rotation time" :value="planet.rotation" />
    <DataItem title="revolution time" :value="planet.revolution" />
    <DataItem title="radius" :value="planet.radius" />
    <DataItem title="average temp." :value="planet.temperature" />
  </DataList>
</template>
<style lang="css" scoped>
h1 {
  text-transform: uppercase;
}

h1,
h1 + p {
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: start;
  }
}

.source {
  text-align: center;
  color: var(--border);

  a {
    text-decoration: underline;
    font-weight: bold;
  }
}

.planet {
  scale: 0.38;

  @media only screen and (min-width: 768px) {
    scale: 0.63;
  }

  @media only screen and (min-width: 1280px) {
    scale: 1;
  }
}
</style>
