import { defineField, defineType } from "sanity";

export const solutionType = defineType({
  name: "solution",
  title: "Решение",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r: { required: () => unknown }) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r: { required: () => unknown }) => r.required() }),
    defineField({ name: "summary", type: "text" }),
    defineField({ name: "priority", type: "number" }),
    defineField({ name: "points", type: "array", of: [{ type: "string" }] })
  ]
});
