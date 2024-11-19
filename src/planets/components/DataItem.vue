<script setup lang="ts">
defineProps<{ title: string; value: string }>();
</script>
<template>
  <li class="data as-h4">
    <span class="title">{{ title }}</span>
    <span class="value">
      {{ value }}
    </span>
  </li>
</template>
<style lang="css" scoped>
.data {
  flex: 1 1 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border);
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  color: var(--border);

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    align-items: unset;
    padding: 1rem;
  }

  .value {
    color: var(--text);
    font-family: "Antonio";
    font-weight: medium;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.75px;

    @media only screen and (min-width: 768px) {
      font-size: 24px;
      letter-spacing: -0.9px;
    }
  }
}
</style>
