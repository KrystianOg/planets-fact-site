<template>
  <div class="content">
    <!-- <slot /> -->
    <div class="planet">
      <slot name="planet" />
    </div>
    <div class="description">
      <slot name="description" />
    </div>
    <div class="navigation">
      <slot name="navigation" />
    </div>
  </div>
</template>
<style lang="css" scoped>
.content {
  display: grid;
  grid-template-areas:
    "navigation"
    "planet"
    "description";

  @media only screen and (min-width: 768px) {
    grid-template-areas:
      "planet planet"
      "description navigation";
  }

  @media only screen and (min-width: 1280px) {
    grid-template-areas:
      "planet description"
      "planet navigation";

    grid-template-columns: 1fr 350px;
  }
}

.planet {
  grid-area: planet;
  display: grid;
  place-items: center;

  max-height: 304px;

  img {
    scale: 0.38;
  }
}

.description {
  grid-area: description;
  width: 100%;
  min-height: 100px;

  /* background-color: red; */
}

.navigation {
  grid-area: navigation;

  width: 100%;
  min-height: 128px;
  background-color: green;
}
</style>
