export const achievementsSchema = {
  name: "achievements",
  type: "document",
  title: "Achievements",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
    {
      name: "date_acquired",
      type: "date",
      title: "Date Acquired",
      options: {
        dateFormat: "MMMM D, YYYY",
      },
    },
    {
      name: "thumbnail_preview",
      type: "image",
      title: "Thumbnail",
    },
  ],
}
