<script setup lang="ts"></script>
<template>
  <!-- on mobile single row with title and hamburger, on tablet column with title and nav, desktop: row with title and nav -->
  <header>
    <span class="as-body"></span>
  </header>
</template>
<style lang="css" scoped>
header {
  display: flex;

  @media screen and (min-width: var(--tablet)) {
    flex-direction: column;
  }

  @media screen and (min-width: var(--laptop)) {
    flex-direction: row;
  }
}
</style>
