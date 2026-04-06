import { defineType, defineField } from "sanity";

export const Homepage = defineType({
  name: "homepage",
  title: "Home page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
