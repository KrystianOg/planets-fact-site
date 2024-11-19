<script setup lang="ts">
import data from "~/assets/data.json";
import MenuSvg from "~/assets/icons/menu.svg?raw";
import ChevronRightSvg from "~/assets/icons/chevron-right.svg?raw";

const planets = data.map(createPlanet).map((planet) => ({
  href: planet.href,
  name: planet.name,
  color: planet.color,
}));

const open = ref(false);
</script>
<template>
  <nav :data-open="open">
    <button
      class="open-button"
      aria-label="Menu"
      @click="open = !open"
      v-html="MenuSvg"
    />
    <ul class="list">
      <li
        v-for="planet in planets"
        :style="{ '--planet-color': planet.color }"
        class="list-item as-h4"
      >
        <NuxtLink :href="planet.href()">
          <span class="text">
            {{ planet.name }}
          </span>

          <template v-html="ChevronRightSvg" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
button {
  padding: 1rem;
  background-color: unset;
  border: unset;
  color: var(--text);
}

.list {
  display: flex;
  gap: 0.5rem;

  @media only screen and (min-width: 768px) {
    align-items: center;
    justify-content: center;

    :deep(svg) {
      display: none;
    }
  }

  .list-item a {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    text-transform: uppercase;
    padding: 1.25rem 0;
  }
}

.open-button {
  display: none;
}

@media only screen and (max-width: 768px) {
  .list {
    position: absolute;
    inset: 82px 0 0;
    padding: 1.5rem;

    .list-item:not(:last-child) {
      border-bottom: 1px solid var(--separator);
    }

    a {
      font-size: 15px;
    }

    .text::before {
      --indicator-size: 20px;
      content: "";
      display: inline-block;
      width: var(--indicator-size);
      height: var(--indicator-size);
      border-radius: var(--indicator-size);
      background-color: var(--planet-color);
      margin-right: 1.5rem;
    }
  }

  .open-button {
    display: block;
  }
  nav[data-open="true"] .list {
    display: block;
  }

  nav[data-open="false"] .list {
    display: none;
  }
}
</style>
