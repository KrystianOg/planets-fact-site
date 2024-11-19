import type { Planet } from "~/types/planets";

export const createPlanet = (planet: Planet) => ({
  ...planet,
  slug: () => slugify(planet.name),
  href: () => `/planets/${slugify(planet.name)}`,
});
