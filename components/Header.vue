<template>
  <!-- on mobile single row with title and hamburger, on tablet column with title and nav, desktop: row with title and nav -->
  <header>
    <span class="as-h2 title">THE PLANETS</span>
    <Navigation />
  </header>
</template>
<style lang="css" scoped>
header {
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;

  .title {
    display: inline-block;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }

  border-bottom: 1px solid var(--separator);
}
</style>
