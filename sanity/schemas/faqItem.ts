import { defineField, defineType } from "sanity";

export const faqItemType = defineType({
  name: "faqItem",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", type: "text" }),
    defineField({ name: "order", type: "number" })
  ]
});
