declare module "sanity" {
  export function defineConfig(config: unknown): unknown;
  export function defineType(schema: unknown): unknown;
  export function defineField(field: unknown): unknown;
}

declare module "sanity/desk" {
  export function deskTool(): unknown;
}
