import { defineField, defineType } from "sanity";

export const insightPostType = defineType({
  name: "insightPost",
  title: "Пост",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r: { required: () => unknown }) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r: { required: () => unknown }) => r.required() }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "content", type: "text" }),
    defineField({ name: "publishedAt", type: "datetime" })
  ]
});
