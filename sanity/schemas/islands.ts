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
    defineField({
      name: "guesthouses",
      title: "Guesthouses",
      type: "array",
      of: [
        defineField({
          name: "guesthouse",
          title: "Guesthouse",
          type: "reference",
          to: { type: "guesthouses" },
        }),
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "number",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "array",
              of: [{ type: "block" }],
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});
