import { defineField, defineType } from "sanity";

export const caseItemType = defineType({
  name: "caseItem",
  title: "Кейс",
  type: "document",
  fields: [
    defineField({ name: "company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "industry", type: "string" }),
    defineField({ name: "challenge", type: "text" }),
    defineField({ name: "impact", type: "text" }),
    defineField({ name: "order", type: "number" })
  ]
});
