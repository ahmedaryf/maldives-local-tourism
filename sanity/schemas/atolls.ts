import { defineType, defineField } from "sanity";

export const atolls = defineType({
  name: "atolls",
  title: "Atolls",
  type: "document",
  fields: [
    defineField({
      name: "atollName",
      title: "Atoll Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "atollName" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "islands",
      title: "Islands",
      type: "array",
      of: [
        defineField({
          name: "islandsName",
          title: "Islands Name",
          type: "reference",
          to: { type: "islands" },
        }),
      ],
    }),
  ],
});
