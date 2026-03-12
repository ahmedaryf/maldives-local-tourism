import { defineField, defineType } from "sanity";

export const islands = defineType({
  name: "islands",
  title: "Islands",
  type: "document",
  fields: [
    defineField({
      name: "islandName",
      title: "Island Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "atoll",
      title: "Atoll",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverPhoto",
      title: "Cover Photo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
