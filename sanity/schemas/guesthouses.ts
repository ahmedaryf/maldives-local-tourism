import { defineType, defineField } from "sanity";

export const guesthouses = defineType({
  name: "guesthouses",
  title: "Guesthouses",
  type: "document",
  fields: [
    defineField({
      name: "guesthouseName",
      title: "Guesthouse Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => `${doc.guesthouseName} ${doc.location}`,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverPhoto",
      title: "Cover Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "rooms",
      title: "Rooms",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: (_doc, options) =>
                  (options.parent as { title: string })?.title,
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "roomCoverPhoto",
              title: "Room Cover Photo",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "mostPopularFacilities",
              title: "Most Popular Facilities",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "popularFacilityName",
                      title: "Facility Name",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "facilityIcon",
                      title: "Facility Icon",
                      type: "image",
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
