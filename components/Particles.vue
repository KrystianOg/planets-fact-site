<script setup lang="ts">
const PARTICLE_COUNT = 30;

const createParticle = () => {
  if (typeof window === "undefined") {
    return;
  }

  return {
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
    size: Math.ceil(Math.random() * 5),
  };
};

// const rotationCenter = {
//   x: Math.random() * window.innerWidth,
//   y: Math.random() * window.innerHeight,
// };
</script>
<template>
  <Teleport to="#teleports">
    <ClientOnly>
      <div
        v-for="particle in Array.from({ length: PARTICLE_COUNT }).map(
          createParticle
        )"
        :style="{
          '--size': `${particle?.size}px`,
          '--offset-x': `${particle?.x}%`,
          '--offset-y': `${particle?.y}%`,
        }"
        class="particle"
      />
    </ClientOnly>
  </Teleport>
</template>
<style lang="css" scoped>
.particle {
  position: absolute;

  width: var(--size);
  height: var(--size);
  position: absolute;
  left: var(--offset-x);
  top: var(--offset-y);
  background-color: var(--separator);
  border-radius: var(--size);
  z-index: -1;
}
</style>
