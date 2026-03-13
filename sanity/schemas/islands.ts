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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: (doc) => `${doc.islandName} ${doc.atoll}` },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverPhoto",
      title: "Cover Photo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "islandInfo",
      title: "Island Info",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
