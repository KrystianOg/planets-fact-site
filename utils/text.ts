export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$|--+/g, "");
}
