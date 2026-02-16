import { defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Главная",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", type: "string" }),
    defineField({ name: "heroSubtitle", type: "text" })
  ]
});
