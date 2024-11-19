<template>
  <ul>
    <slot />
  </ul>
</template>
<style lang="css" scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.75rem;

  @media only screen and (min-width: 768px) {
    flex-direction: unset;
  }
}
</style>
