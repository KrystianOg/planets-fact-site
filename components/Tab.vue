<script setup lang="ts">
defineProps<{
  name: string;
  id: string;
  checked?: boolean;
}>();
</script>
<template>
  <div></div>
  <input type="radio" :name="name" :id="id" :value="id" :checked="checked" />
  <label :for="id">{{ name }}</label>
  <div class="tab-content">
    <slot />
  </div>
</template>
<style lang="css" scoped>
input[type="radio"] {
  display: none;
}

label {
  opacity: 0.5;
}

input[type="radio"]:checked + label {
  opacity: 1;
  border-bottom: 4px solid var(--planet-color);
}

input[type="radio"]:checked + label + .tab-content {
  display: block;
}

.tab-content {
  display: none;
  padding: 1rem;
}

label {
  cursor: pointer;
  display: inline-block;
  margin-right: 0.2rem;
  padding: 0.5rem 1rem;
}
</style>
