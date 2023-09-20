export const socialLinkSchema = {
  type: "object",
  name: "social_link",
  title: "Social Link",
  fields: [
    {
      type: "string",
      name: "site",
      title: "Site Name",
    },
    {
      type: "url",
      name: "site_link",
      title: "Link",
    },
    {
      type: "string",
      name: "icon",
      title: "Icon",
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Github", value: "github" },
        ],
      },
    },
  ],
}
