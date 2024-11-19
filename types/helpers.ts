export type GeneratorValue<G extends (...arg: any[]) => any> =
  ReturnType<G> extends Generator<infer X> ? X : never;
